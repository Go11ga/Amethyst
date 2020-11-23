/* Pricing buttons */
(function(){

    let pricingBtns = document.querySelectorAll(".pricing__btn");

    for (let elem of pricingBtns) {
        elem.addEventListener("click", changeColor);
    }

    function changeColor() {
        for (let elem of pricingBtns) {
            elem.classList.remove("pricing__btn--active");
        }
        this.classList.add("pricing__btn--active");
    }

}());
