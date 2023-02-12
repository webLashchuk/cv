$(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() >= headerHeight) {
            $('.menu').addClass('sticky')
        } else {
            $('.menu').removeClass('sticky')
        }
    });

    const headerHeight = $('.header').outerHeight();

    $('.menu__link, .header__arrow').on('click', function (event) {
        event.preventDefault();
        let scrollAnchor = $(this).attr('href')
        let scrollPoint = $(scrollAnchor).offset().top;

        if (scrollAnchor === '#portfolio' || scrollAnchor === '#contacts') {
            scrollPoint = scrollPoint - 90;
        }

        else  {
            scrollPoint = scrollPoint - 20;
        }

        $('body, html').animate({ scrollTop: scrollPoint}, 1500);
    });



    $('.burger, .menu__link').on('click', function () {
        $('.burger').toggleClass('burger--active');
        $('.menu__items').toggleClass('menu__items--active');
        $('body').toggleClass('lock');
    })

    let mixer = mixitup('.portfolio__items');

});