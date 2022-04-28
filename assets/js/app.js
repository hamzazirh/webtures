$('.telefon').keydown(function (e) { var key = e.which || e.charCode || e.keyCode || 0; $phone = $(this); if ($phone.val().length === 4 && (key === 8 || key === 46)) { $phone.val('+90 '); return false; } if ($phone.val().length === 19 && key > 9) { return false; } if ($phone.val().length === 4 && key === 48) { return false; } if ($phone.val().charAt(0) !== '+') { $phone.val('+90 '); } if (key !== 8 && key !== 9) { if ($phone.val().length === 4) { $phone.val($phone.val() + '('); } if ($phone.val().length === 13 || $phone.val().length === 16) { $phone.val($phone.val() + ' '); } } return (key === 8 || key === 9 || key === 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105)); }).keyup(function (e) { var key = e.which || e.charCode || e.keyCode || 0; $phone = $(this); if ($phone.val().length === 0) { $phone.val('+90 '); return false; } if (key !== 8 && key !== 9) { if ($phone.val().length === 8) { $phone.val($phone.val() + ') '); } if ($phone.val().length === 13 || $phone.val().length === 16) { $phone.val($phone.val() + ' '); } } }).bind('focus click', function () { $phone = $(this); $phone.prop("type", "tel"); if ($phone.val().length === 0) { $phone.val('+90 '); } else { var val = $phone.val(); $phone.val('').val(val); } }).blur(function () { $phone = $(this); if ($phone.val() === '+90 ') { $phone.val(''); } });
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

    $(".commets-slider").slick({
        autoplay: false,
        dots: false,
        infinite:false,
        autoplaySpeed: 3000,
        speed: 800,
        lazyLoad: 'ondemand',
        cssEase: 'linear',
        arrows: true,
        slidesToShow: 1
    });

    $('.telefon').mask('+90 (000) 000 00 00');

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

    $('#videoModal .btn-close').click(function(){
        $('#videoModal .modal-body').html('')
    })



})