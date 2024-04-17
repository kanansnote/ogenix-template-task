const goTop = document.getElementById('goTop');

goTop.addEventListener('click', function () {
    
})

const swiper = new Swiper('.ourFeedbacks-Center', {
    slidesPerView: '1', // Adjust this value to control how many slides are visible at a time
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
