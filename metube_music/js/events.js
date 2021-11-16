// -------------------------------------------------------- Search 관련

const $btnSearch = document.querySelector("#btnSearch");
const $btnSearchBack = document.querySelector("#btnSearchBack");

let $search_opend = false;

const btnSearch_Click = function(e) {
    $gnbSearch = document.querySelector("#gnbSearch");
    console.log("asdf");
    
    if ($search_opend) {
        $gnbSearch.style.display = "none";
    } else {
        $gnbSearch.style.display = "flex";
    }

    $search_opend = !$search_opend;
}

$btnSearch.addEventListener("click", btnSearch_Click);
$btnSearchBack.addEventListener("click", btnSearch_Click);

// -------------------------------------------------------- nav 관련

const ControlItemWrapper = function() {
    
}

const getVariable = function(property) {
    return getComputedStyle(document.documentElement).getPropertyValue(property);
}

const SlideTo = function(e) {
    let $items = e.srcElement;
    if ($items.tagName == "I") $items = e.srcElement.parentElement;

    let isNext = false;
    isNext = $items.classList.contains("btn_nxt");
    
    $items = $items.parentElement.firstElementChild.firstElementChild;

    let nextElementPos = null;
    let isFirstEle = true;

    const itemsWrapper = $items.parentElement;
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.intersectionRatio < 1 && entry.intersectionRatio > 0) { // 걸침
                    if (isFirstEle && isNext && entry.target.getBoundingClientRect().left > 0) {
                        let itemsWidth = $items.scrollWidth;

                        const itemsStyle = window.getComputedStyle($items);
                        console.log(itemsStyle);
                        let matrix = new WebKitCSSMatrix(itemsStyle.transform);
                        let curPos = matrix.m41;

                        // entry.target.style.border = "2px solid red";
                        nextElementPos = entry.target.getBoundingClientRect().left;

                        let moveAmount = curPos - nextElementPos;

                        if (itemsWidth + (curPos - nextElementPos) < itemsWrapper.clientWidth) {
                            moveAmount = curPos - (itemsWidth + (curPos - itemsWrapper.clientWidth));
                        }

                        $items.style.transform = `translateX(${moveAmount}px)`;
                        io.unobserve(entry.target);
                        isFirstEle = false;
    
                        ControlItemWrapper();
                    }
                    
                }
            }
        });
    }, {"root": itemsWrapper});

    const $itemsAll = itemsWrapper.querySelectorAll(".item");
    $itemsAll.forEach(e => {
        e.style.border = "";
        io.observe(e);
    });
}

const $btnPrvs = document.querySelectorAll("button.btn_prv");
$btnPrvs.forEach(element => {
    element.addEventListener("click", SlideTo);
});

const $btnNxts = document.querySelectorAll("button.btn_nxt");
$btnNxts.forEach(element => {
    element.addEventListener("click", SlideTo);
});

// const itemsWrappers = document.querySelectorAll(".itemsWraper");
// itemsWrappers.forEach(itemsWrapper => {
//     const io = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 if (entry.intersectionRatio < 1) { // 걸침
//                     entry.target.style.border = "2px solid red";
//                 }
//             }
//         });
//     }, {"root": itemsWrapper});

//     const $itemsAll = itemsWrapper.querySelectorAll(".item");
//     $itemsAll.forEach(e => io.observe(e));
// })
