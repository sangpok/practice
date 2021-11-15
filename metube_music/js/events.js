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

const SlideTo = function(e) {
    let $items = e.srcElement;
    if ($items.tagName == "I") $items = e.srcElement.parentElement;

    let isNext = false;
    isNext = $items.classList.contains("btn_nxt");
    
    $items = $items.parentElement.firstElementChild.firstElementChild;

    const itemsStyle = window.getComputedStyle($items);
    let matrix = new WebKitCSSMatrix(itemsStyle.transform);
    let curPos = matrix.m41;

    let addAmount = $items.parentElement.getBoundingClientRect().width;
    // let tmpEle = document.elementFromPoint(addAmount, 180);
    // console.log(tmpEle);

    curPos = isNext ? curPos - addAmount : curPos + addAmount;
    // if (isNext) {
    //     if (curPos - addAmount)
    // } else {

    // }

    $items.style.transform = `translateX(${curPos}px)`;
    ControlItemWrapper();
}

const $btnPrvs = document.querySelectorAll("button.btn_prv");
$btnPrvs.forEach(element => {
    element.addEventListener("click", SlideTo);
});

const $btnNxts = document.querySelectorAll("button.btn_nxt");
$btnNxts.forEach(element => {
    element.addEventListener("click", SlideTo);
});

let curIntersectionElements = [];

const itemsWrappers = document.querySelectorAll(".itemsWraper");
itemsWrappers.forEach(itemsWrapper => {
    curIntersectionElements.push(itemsWrapper);
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.intersectionRatio < 1) { // 걸침
                    entry.target.style.border = "2px solid red";
                }
            }
        });
    }, {"root": itemsWrapper});

    const $itemsAll = itemsWrapper.querySelectorAll(".item");
    $itemsAll.forEach(e => io.observe(e));
})
