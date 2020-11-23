/* Header block */
(function(){

    let headerNav = document.querySelector("#header-nav");

    window.addEventListener("scroll", showHeader);

    function showHeader() {
        if (window.pageYOffset > 300) {
            headerNav.classList.add("header__nav--active");
        }else{
            headerNav.classList.remove("header__nav--active");
        }
    }

}());
