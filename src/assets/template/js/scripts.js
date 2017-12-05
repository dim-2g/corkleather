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

});