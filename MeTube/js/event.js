let root = document.documentElement;

let contentList;
let contentMax = 4;
let contentLoadedNum = 4;

const getContentList = function() {
    let contentList = JSON.parse(JSON.stringify(data));
    let contentMax = Object.keys(contentList.content_list).length;

    for (let i = 0; i < contentMax; i++) {
        // 시간 구하기
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

        viewData = lastView;

        if (times3 > 0) viewData = times3.toString() + "." + (Math.floor(lastView / 100)).toString() + "천"
        if (times4 > 0) viewData = times4.toString() + "." + (Math.floor(times3 / 1000)).toString() + "만"
        if (times8 > 0) viewData = times8.toString() + "." + (Math.floor(times4 / (10 ** 7))).toString()+ "억"


        console.log(`${times8}억 / ${times4}만 / ${times3}천 / ${lastView}회 ===== ${viewData}`);

        let defaultItemCode = `
            <div class="content-item">
                <div class="overlayholder">
                    <div class="thumbnail">
                        <a href="#" onclick="return false;">
                            <img src="images/contents/${contentList.content_list[i].info.img_src}">
                            <div class="timebox"><span>${timeData}</span></div>
                        </a>
                    </div>
                    <div class="detail">
                        <a href="#" onclick="return false;">
                            <img src="images/contents/${contentList.content_list[i].info.img_src}">
                        </a>
                        <div class="text-detail">
                            <p class="video-title">${contentList.content_list[i].title}</p>
                            <a href="#" onclick="return false;"><p class="channel-name">${contentList.content_list[i].channel.name}</p></a>
                            <span>조회수 </span><span class="view-unit">${contentList.content_list[i].info.view}</span><span>회 · </span><span class="period-unit">2주</span><span> 전</span>
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
}

getContentList();

window.addEventListener("resize", e => {
    root.style.setProperty('--thumbnail-cur-height', document.querySelector(".thumbnail").clientHeight + "px");
});

window.addEventListener("load", e => {
    root.style.setProperty('--thumbnail-cur-height', document.querySelector(".thumbnail").clientHeight + "px");
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

let btnSetting = document.querySelector("#option_btn")
btnSetting.addEventListener("click", e => {
    let listbox_container = document.querySelector("#option_btn + .list-box-container")
    listbox_container.classList.toggle("show");
})

let btnApp = document.querySelector("#app_btn")
btnApp.addEventListener("click", e => {
    let listbox_container = document.querySelector("#app_btn + .list-box-container")
    listbox_container.classList.toggle("show");
});