$(document).ready(function () {
    // submenu
    $('#catagoryToggle').click(function () {
        $('.subMenu').slideToggle(400)
    })
    // mobile submenu
    $('#catagoryTogglemob').click(function () {
        $('.mobileSubmenu').slideToggle(400)
    })
    // cart offcanvas
    $('.cart').click(function () {
        $('.cartOffcanvas').addClass('active')
    })
    $('.closeCart').click(function () {
        $('.cartOffcanvas').removeClass('active')
    })
    $('.cartOffcanvas').on("click", function (event) {
        if (event.target === $('this')) {
            $('.cartOffcanvas').removeClass("active")
        }
    })
    // search product
    $('.searchIcon').click(function () {
        $('.productSearch').addClass('active')
    })
    $('.closeSearch').click(function () {
        $('.productSearch').removeClass('active')
    })
    $('.showBanner').slick({
        dots: true,
        fade: true,
        speed: 500,
        prevArrow: '.leftArrow',
        nextArrow: '.rightArrow',
    });
    // clint testomonial part
    $('#forMobile').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                }
            }
        ]
    });
    // news section part

    $('#newsCards').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                }
            }
        ]
    });

})