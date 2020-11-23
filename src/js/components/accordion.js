/* Accordion */
(function(){

    let faqTitleBtns = document.querySelectorAll(".accordion__title-btn");
    let faqTitles = document.querySelectorAll(".accordion__title");
    let faqTexts = document.querySelectorAll(".accordion__text");
    let faqTitlePluses = document.querySelectorAll(".accordion__title-plus");
    let faqTitleMinuses = document.querySelectorAll(".accordion__title-minus");

    window.addEventListener( "load", pageInit);

    function pageInit() {
        faqTexts[0].style.height = faqTexts[0].scrollHeight + "px";
    }

    let styleEl = getComputedStyle(faqTexts[0]);
    let Elpt = parseInt(styleEl.paddingTop);
    let Elpb = parseInt(styleEl.paddingBottom);


    for (let i = 1; i < faqTitleBtns.length; i++) {
        faqTitleBtns[i].addEventListener("click", changeCard);
    }

    function changeCard() {

        for (let elem of faqTitles) {
            elem.classList.remove("accordion__title--active");
        }

        this.parentElement.classList.add("accordion__title--active");

        for (let elem of faqTexts) {
            elem.classList.remove("accordion__text--active");
            elem.style.height = 0;
        }

        this.parentElement.nextElementSibling.classList.add("accordion__text--active");
        this.parentElement.nextElementSibling.style.height = this.parentElement.nextElementSibling.scrollHeight + Elpt + Elpb + 'px';

        for (let elem of faqTitleBtns) {
            elem.addEventListener("click", changeCard);
        }

        this.removeEventListener("click", changeCard);

        for (let elem of faqTitleMinuses) {
            elem.classList.remove("accordion__title-minus--active");
        }

        for (let elem of faqTitlePluses) {
            elem.classList.add("accordion__title-plus--active");
        }

        this.firstElementChild.classList.remove("accordion__title-plus--active");

        this.lastElementChild.classList.add("accordion__title-minus--active");
    }

}());
