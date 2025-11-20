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
        fade:true,
        speed:500,
        prevArrow: '.leftArrow',
        nextArrow: '.rightArrow',
    });
    // clint testomonial part
    

})