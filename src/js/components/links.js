/* Links shut down */
(function(){

    let worksA = document.querySelectorAll(".works a");
    let teamA = document.querySelectorAll(".team a");

    for (let elem of worksA){
        elem.addEventListener("click",function(event){
            event.preventDefault();
            for (let elem of worksA){
                elem.classList.remove("works-nav__item--active");
                this.classList.add("works-nav__item--active");
            }
        });
    }

    for (let elem of teamA){
        elem.addEventListener("click",function(event){
            event.preventDefault();
        });
    }

}());
