import Swiper from 'swiper';

export const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        750: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4
        },
    }
}

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: sliderSettings.slidesPerView,
    spaceBetween: sliderSettings.spaceBetween,
    breakpoints: sliderSettings.breakpoints,
    loop: true, // if you want infinite loop
    // Add any additional Swiper options here
});
