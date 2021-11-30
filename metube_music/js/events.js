// -------------------------------------------------------- Search 관련

const $btnSearch = document.querySelector("#btnSearch");
const $btnSearchBack = document.querySelector("#btnSearchBack");

let $search_opend = false;

const btnSearch_Click = function(e) {
    let $gnbSearch = document.querySelector("#gnbSearch");
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

// ControlItemWrapper($items, itemsWrapper);
const ControlItemWrapper = function($items, itemsWrapper) {
    //console.log($items)
    // TODO Set the visible of the prv, next btns
}

const getVariable = function(property) {
    return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
}

const roundToTwo = function(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

const SlideTo = function(e) {
    let $items = e.srcElement;
    if ($items.tagName == "I") $items = e.srcElement.parentElement;

    let isNext = false;
    isNext = $items.classList.contains("btn_nxt");
    
    $items = $items.parentElement.firstElementChild.firstElementChild;

    // when btn is clicked, the entries come together
    // this variable is for the first caclcuation
    let isFirstEle = true;

    const itemsWrapper = $items.parentElement;
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio < 1 && entry.intersectionRatio > 0) { // 걸침
                if (isFirstEle) {
                    let itemsWidth = $items.scrollWidth;

                    const itemsStyle = window.getComputedStyle($items);
                    let matrix = new WebKitCSSMatrix(itemsStyle.transform);
                    let curPos = matrix.m41;
                    let moveAmount = 0;

                    let targetRect = entry.target.getBoundingClientRect();
                    let wrapperRect = itemsWrapper.getBoundingClientRect();

                    console.log(entry.target + " / " + roundToTwo(targetRect.left));

                    if (isNext && roundToTwo(targetRect.left) > 0) {
                        // NEXT
                        moveAmount = curPos - targetRect.left;

                        if (Boolean(getVariable("--is-items-overflow") == "false")) moveAmount += wrapperRect.left;

                        if (itemsWidth + moveAmount < itemsWrapper.clientWidth) {
                            // Check last element
                            // let marginAmount = (document.documentElement.clientWidth - itemsWrapper.clientWidth) / 2; // - getVariable("--scroll_bar_width"); //(wrapperRect.left * 1) - getVariable("--scroll_bar_width");
                            let lastpartAmount = itemsWidth + (curPos - itemsWrapper.clientWidth);

                            moveAmount = curPos - lastpartAmount; //- marginAmount;
                        }

                        $items.style.transform = `translateX(${moveAmount}px)`;
                        // io.unobserve(entry.target);
    
                        isFirstEle = false;
                        ControlItemWrapper($items, itemsWrapper);

                    } else if (!isNext && roundToTwo(targetRect.left - wrapperRect.left) <= 0) {
                        // PREV 걸침
                        let marginAmount = (wrapperRect.left * 2) - parseInt(getVariable("--scroll_bar_width"));
                        let basePos = curPos + -targetRect.left;
                        let torightPart = itemsWrapper.clientWidth - targetRect.width;

                        moveAmount = basePos + torightPart + marginAmount;

                        if (-curPos < itemsWrapper.clientWidth) moveAmount = 0;

                        $items.style.transform = `translateX(${moveAmount}px)`;
                        // io.unobserve(entry.target);
    
                        isFirstEle = false;
                        ControlItemWrapper($items, itemsWrapper);
                    } 
                }
            }
        });
    }, {"root": itemsWrapper, "rootMargin": "0px 10px 0px 10px"});
    // TODO Set the rootMargin each media type

    const $itemsAll = itemsWrapper.querySelectorAll(".item");
    $itemsAll.forEach(e => io.observe(e));
}

const $btnPrvs = document.querySelectorAll("button.btn_prv");
$btnPrvs.forEach(element => {
    element.addEventListener("click", SlideTo);
});

const $btnNxts = document.querySelectorAll("button.btn_nxt");
$btnNxts.forEach(element => {
    element.addEventListener("click", SlideTo);
});

const $floatingPlayer = document.querySelector("#floatingPlayer").addEventListener("click", e => {
    // window.history.pushState("object or string", "Title", "metube_music/new-url");
})