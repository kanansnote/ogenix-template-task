const topBtn = document.getElementById("topBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";  /* Show button when scrolled down */
  } else {
    topBtn.style.display = "none";   /* Hide button when scrolled up */
  }
}

topBtn.addEventListener("click", function() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',  // Enables smooth scrolling animation
    block: 'start'       // Scrolls to the top of the page
  });
});

const swiper = new Swiper('.ourFeedbacks-Center', {
    slidesPerView: '1', // Adjust this value to control how many slides are visible at a time
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
