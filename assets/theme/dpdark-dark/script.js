document.addEventListener("turbo:load", (event) => {
    var dpDarkBGElementsContainer = document.querySelector("div#dpDarkBGElements");
    if (dpDarkBGElementsContainer == null) {
        var dpDarkBGElementsTemplate = `<div data-turbo-permanent id="dpDarkBGElements">
            <ul id="shape" class="d-none">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>`
        document.querySelector("body").insertAdjacentHTML("beforeend", dpDarkBGElementsTemplate)
        dpDarkBGElementsContainer = document.querySelector("div#dpDarkBGElements");
    }
})