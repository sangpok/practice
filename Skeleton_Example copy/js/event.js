const $contents = document.querySelector("#contents");
const $contentTemplate = document.querySelector("#content-template");

for (let i = 0; i < 10; i++) {
    $contents.append($contentTemplate.content.cloneNode(true));
}

fetch("contentlist.json")
    .then(res => res.json())
    .then(posts => {
        $contents.innerHTML = "";

        posts.forEach(element => {
            const tmpDiv = $contentTemplate.content.cloneNode(true);
            tmpDiv.querySelector("[data-image]").src = element.image;
            tmpDiv.querySelector("[data-title]").innerText = element.title;
            tmpDiv.querySelector("[data-author]").innerText = element.author;
            tmpDiv.querySelector("[data-content]").innerText = element.content;

            $contents.append(tmpDiv);
        });

        const loadings = $contents.querySelectorAll(".loading");
        loadings.forEach(element => {
            element.classList.remove("loading");
        });
    });
