const swiperL = new Swiper('.img-slider', {
    slidesPerView: '4',
    spaceBetween: 20,
    pagination: {
        el: '.swiper-scrollbar',
        type: 'progressbar',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            centeredSlides: 0,
            loop: false,
            inicialSlide: 0,
        },
        992: {
            slidesPerView: 3.3,
        },
        860: {
            slidesPerView: 2.9,
        },
        730: {
            slidesPerView: 2.5,
            centeredSlides: 0,
            loop: false,
            inicialSlide: 0,
            spaceBetween: 10,
        },
        500: {
            slidesPerView: 2.5,
        },
        320: {
            slidesPerView: 1.4,
            inicialSlide: 1,
            spaceBetween: 7,
        }
    },

});