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