$(document).ready(function(){
    $(".home-slider").slick({
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        speed: 800,
        lazyLoad: 'ondemand',
        cssEase: 'linear',
        arrows: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 80) {
            $("header").addClass("bg")
        } else {
            if ($("header.bg")[0]) { $("header.bg").removeClass("bg") }
        }
    });



})