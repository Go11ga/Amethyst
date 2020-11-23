/* Tabs */
(function(){

    let tabHeaderItems = document.querySelectorAll(".tab__header-item");
    let tabsContent = document.querySelectorAll(".tab__content");

    for (let elem of tabHeaderItems) {
        elem.addEventListener("click", changeTab);
    }

    function changeTab() {
        for (let elem of tabHeaderItems) {
            elem.classList.remove("tab__header-item--active");
        }
        this.classList.add("tab__header-item--active");

        for (let elem of tabsContent) {
            elem.classList.remove("tab__content--active");
        }

        tabsContent[this.dataset.num].classList.add("tab__content--active");
    }

}());
