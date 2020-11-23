//= ../../../../node_modules/slick-carousel/slick/slick.js

/* Main Slider */
$("#main-slider").slick({
    dots: true,
    speed: 800,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
});

$("#main-arrow-prev").on("click",function(){
    $("#main-slider").slick("slickPrev");
})

$("#main-arrow-next").on("click",function(){
    $("#main-slider").slick("slickNext");
})


/* Testimonials Slider */
$("#tesimonials-slider").slick({
    dots: true,
    speed: 800,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
});


/* Company slider */
$("#company-slider").slick({
    dots: false,
    speed: 800,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
        {
            breakpoint: 1229,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]

});

$("#company-arrow-prev").on("click",function(){
    $("#company-slider").slick("slickPrev");
})

$("#company-arrow-next").on("click",function(){
    $("#company-slider").slick("slickNext");
})


/* Service slider */
$("#services-slider").slick({
    dots: true,
    speed: 800,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
});

let services = document.querySelectorAll(".services__link");

for (let elem of services) {
    elem.addEventListener("click",showService);
}

function showService(event){
    event.preventDefault();
    $("#services-slider").slick("slickGoTo",this.dataset.num);

    for (let elem of services) {
        elem.classList.remove("services__link--active");
    }
    this.classList.add("services__link--active");
}

















