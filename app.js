$sliderTop = $('.swiper.is-slider-bg').clone().addClass('slideshow-top').appendTo($('.slider-bg-component'));

function numberWithZero(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return num
    }
}
let totalSlides = $('.slider-titles-heading').length

$('.swiper-total-number').text(numberWithZero(totalSlides))

$('.slider-gallery-component').each(function (index) {
    const bgSwiper = new Swiper($(this).find('.swiper.is-slider-bg')[0], {
        slidesPerView: 1,
        loop: true,
        loopSlides: 10,
        speed: 1200,
        keyboard: true,
        /* effect: 'fade', */
        allowTouchMove: false,
        preloadImages: true,
    });

    const bgSwiperCloneOne = new Swiper($(this).find('.swiper.is-slider-bg.slideshow-top')[0], {
        slidesPerView: 1,
        loop: true,
        loopSlides: 10,
        speed: 1000,
        keyboard: true,
        /* effect: 'fade', */
        allowTouchMove: false,
        preloadImages: true,
    });

    const textSwiper = new Swiper($(this).find('.swiper.is-slider-titles')[0], {
        slidesPerView: "auto",
        speed: 1000,
        loop: true,
        loopSlides: 10,
        slideToClickedSlide: true,
        mousewheel: true,
        keyboard: true,
        grabCursor: true,
        centeredSlides: true,
        slideActiveClass: 'is-active',
        slideDuplicateActiveClass: 'is-active',
        thumbs: {
            swiper: bgSwiper,
        },
        navigation: {
            nextEl: $(this).find('.swiper-next')[0],
            prevEl: $(this).find('.swiper-prev')[0],
        }
    });

    textSwiper.on('slideChange', function () {
        let slideNumber = numberWithZero(textSwiper.realIndex + 1)
        $('.swiper-number-current').text(slideNumber)
        bgSwiperCloneOne.slideTo(textSwiper.realIndex);
    })

});
