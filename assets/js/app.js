$(document).ready(function () {
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

    var videoModal = new bootstrap.Modal(document.getElementById('videoModal'), {
        keyboard: false
    })   


    $('[data-videoid]').click(function () {
        videoModal.toggle()
        var videoId = $(this).data('videoid')
        $('#videoModal .modal-body').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    })



})