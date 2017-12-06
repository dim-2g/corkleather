$(function() {
    $('.b-product__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.b-product__slider-nav'
    });

    $('.b-product__slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.b-product__slider',
        dots: false,
        arrows: true,
        centerPadding: '0px',
        centerMode: false,
        focusOnSelect: true,
        adaptiveHeight: true
    });

    $('.m-reviews__list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            }
        ]
    });


    $('select.selectric').selectric({
        maxHeight: 210
    });

    $('.select__city .selectric').click(function(){
        $(this).toggleClass('selectricOpen');
    });

    $('body').on('mouseleave','.select__city .selectric',function(){
        $(this).removeClass('selectricOpen');
    });

    $('.zoom').magnificPopup({
        type  : 'image'
    });

    $('.faq__link').click(function(){
       $(this).parents('.faq__item').toggleClass('active');
       return false;
    });

    $(".fa-bars").magnificPopup({
        type: "inline",
        midClick: true,
        mainClass: 'mobile_menu_bg'
    });

});