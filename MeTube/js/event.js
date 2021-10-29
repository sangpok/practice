let root = document.documentElement;

let contentList;
let contentMax = 8;
let contentLoadedNum = 0;

const getContentList = function() {
    contentList = JSON.parse(JSON.stringify(data));
    contentMax = Object.keys(contentList.content_list).length;
}

const loadContentList = function() {
    if (contentLoadedNum >= contentMax) return;

    for (let i = contentLoadedNum; i < contentLoadedNum + 4; i++) {
        if (i >= contentMax) break;

        // 러닝타임 구하기
        let timeData = contentList.content_list[i].info.running_time;
        
        let hours = Math.floor(timeData / 3600);
        let min = Math.floor((timeData - (hours * 3600)) / 60);
        let sec = timeData - (hours * 3600) - (min * 60);

        timeData = min.toString() + ":" + sec.toString().padStart(2, "0");
        if (hours > 0) timeData = hours.toString() + ":" + timeData;

        // console.log(`${timeData}`);

        // 조회수 구하기
        let viewData = contentList.content_list[i].info.view;

        let times8 = Math.floor(viewData / 10 ** 8); // 억(10 ^ 8)
        let times4 = Math.floor((viewData - (times8 * (10 ** 8))) / (10 ** 4)); // 만(10 ^ 4)
        let times3 = Math.floor((viewData - (times8 * (10 ** 8) + times4 * (10 ** 4))) / (10 ** 3));
        let lastView = viewData - (times8 * (10 ** 8)) - (times4 * (10 ** 4)) - (times3 * (10 ** 3));

        if (times8 > 0) {
            if (times8 > 9) {
                viewData = times8.toString() + "억";
            } else {
                if (times4 > 0) {
                    viewData = times8.toString() + "." + times4.toString()+ "억";
                } else {
                    viewData = times8.toString() + "억";
                }
            }
        } else if (times4 > 0) {
            if (times4 > 9) {
                viewData = times4.toString() + "만"
            } else {
                if (times3 > 0) {
                    viewData = times4.toString() + "." + times3.toString() + "만"
                } else {
                    viewData = times4.toString() + "만"
                }
            }
        } else if (times3 > 0) {
            if (lastView > 99) {
                viewData = times3.toString() + "." + (Math.floor(lastView / 100)).toString() + "천"
            } else {
                viewData = times3.toString() + "천"
            }
        } else {
            viewData = lastView;
        }

        // console.log(`${times8}억 / ${times4}만 / ${times3}천 / ${lastView}회 ===== ${viewData}`);

        // 기간 구하기
        let upload_date = new Date(contentList.content_list[i].info.upload_date);
        let today_date = new Date();
        let between_date = today_date - upload_date;

        let diffMS = between_date;
        let diffS = Math.ceil(diffMS / 1000 < 1 ? 0 : diffMS / 1000);
        let diffM = Math.ceil(diffS / 60 < 1 ? 0 : diffS / 60);
        let diffH = Math.ceil(diffM / 60 < 1 ? 0 : diffM / 60);
        let diffD = Math.ceil(diffH / 24 < 1 ? 0 : diffH / 24);
        let diffW = Math.ceil(diffD / 7 < 1 ? 0 : diffD / 7);
        let diffMonth = Math.ceil(diffW / 4 < 1 ? 0 : diffW / 4);
        let diffY = Math.ceil(diffMonth / 12 < 1 ? 0 : diffMonth / 12);

        between_date = diffS + "초";
        if (diffM > 0) between_date = diffM + "분";
        if (diffH > 0) between_date = diffH + "시간";
        if (diffD > 0) between_date = diffD + "일";
        if (diffW > 0) between_date = diffW + "주";
        if (diffMonth > 0) between_date = diffMonth + "개월";
        if (diffY > 0) between_date = diffY + "년";

        // console.log(`${diffY}년-${diffMonth}개월-${diffW}주-${diffD}일-${diffH}시간-${diffM}분-${diffS}초 ==== ${between_date}`)

        let defaultItemCode = `
        <div class="content-item">
            <div class="overlayholder">
                <div class="thumbnail">
                    <a href="#" onclick="return false;">
                        <img src="images/contents/${contentList.content_list[i].info.img_src}">
                        <div class="timebox"><span>${timeData}</span></div>
                    </a>
    <!--
                    <div class="thumbnailOverlay">
                        <button id="wantlater">
                            <i class="far fa-clock"></i>
                        </button>
                        <div class="comment"><span>나중에 볼 동영상</span></div>
                        <button id="addplaylist">
                            <i class="fas fa-list-ul"></i>
                        </button>
                        <div class="comment"><span>목록에 추가</span></div>
                    </div>-->
                </div> 
                <div class="detail">
                    <a href="#" onclick="return false;">
                        <img src="images/profile/${contentList.content_list[i].channel.profile_img_src}">
                    </a>
                    <div class="text-detail">
                        <p class="video-title">${contentList.content_list[i].title}</p>
                        <a href="#" onclick="return false;"><p class="channel-name" data-tooltip-channel-text="${contentList.content_list[i].channel.name}">${contentList.content_list[i].channel.name}</p></a>
                        <span>조회수 </span><span class="view-unit">${viewData}</span><span>회 · </span><span class="period-unit">${between_date}</span><span> 전</span>
                    </div>
                </div>
            </div>
            <button class="btn-base btncircle">
                <i class="fas fa-ellipsis-v"></i>
            </button>
        </div>`;

        let content_section = document.querySelector(".content-section")
        content_section.innerHTML += defaultItemCode;
    }

    contentLoadedNum = contentLoadedNum + 4;
}

getContentList();
loadContentList();

// Infinite Scroll
(() => {
    let $contentItem = document.querySelector(".content-item:last-child");

    const io = new IntersectionObserver((entry, observer) => {
        const ioTarget = entry[0].target;

        if (entry[0].isIntersecting) {
            io.unobserve($contentItem);
            
            if (contentLoadedNum < contentMax) {
                loadContentList();
                $contentItem = document.querySelector(".content-item:last-child");

                io.observe($contentItem);
            }
        }
    }, {
        threshold: 0.5
    });

    io.observe($contentItem);
})();

window.addEventListener("resize", e => {
    root.style.setProperty('--thumbnail-cur-height', document.querySelector(".thumbnail").clientHeight + "px");
    root.style.setProperty('--content-item-height', document.querySelector(".content-item").clientHeight + "px");
});

window.addEventListener("load", e => {
    root.style.setProperty('--thumbnail-cur-height', document.querySelector(".thumbnail").clientHeight + "px");
    root.style.setProperty('--content-item-height', document.querySelector(".content-item").clientHeight + "px");
});

// 마음에 안 들지만,,, 일단 이렇게
let cateBtns = document.querySelector("#cateContainer").querySelectorAll("button");
cateBtns.forEach((userItem) => {
    userItem.addEventListener("click", function() {
        cateBtns.forEach(userItem2 => {
            userItem2.classList.remove("btnselected");
        });
        this.classList.toggle("btnselected");
    });
});

// 으음... Click에 대한 default handler를 지정해놓는 게 더 편할까?
let btnSetting = document.querySelector("#option_btn")
btnSetting.addEventListener("click", e => {
    let prvContainer = document.querySelector("#app_btn + .list-box-container");
    prvContainer.classList.remove("show")

    let listbox_container = document.querySelector("#option_btn + .list-box-container");
    listbox_container.classList.toggle("show");
})

let btnApp = document.querySelector("#app_btn")
btnApp.addEventListener("click", e => {
    let prvContainer = document.querySelector("#option_btn + .list-box-container");
    prvContainer.classList.remove("show")

    let listbox_container = document.querySelector("#app_btn + .list-box-container");
    listbox_container.classList.toggle("show");
});

const slide = function() {
    let $media_type = getComputedStyle(root).getPropertyValue("--media-type");

    if ($media_type >= 4) {
        console.log("btn clicked when media type 4");
    } else {
        let $overlaySide = document.querySelector("#overlaySide");
        $overlaySide.classList.toggle("show");

        let $sideMenu = document.querySelector("#sideMenu");
        $sideMenu.classList.toggle("show");

        document.body.classList.toggle("noscroll");
    }
}

let showSidebars = document.querySelectorAll(".showSidebar");
showSidebars.forEach(item => item.addEventListener("click", slide));

let $overlaySide = document.querySelector("#overlaySide");
$overlaySide.addEventListener("click", slide);

let menuItems = document.querySelectorAll(".menulistContainer > ul > li")
menuItems.forEach((userItem) => {
    userItem.addEventListener("click", function() {
        menuItems.forEach(userItem2 => {
            userItem2.classList.remove("selected");
        });
        this.classList.toggle("selected");
    });
});