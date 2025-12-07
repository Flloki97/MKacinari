var swiper2 = new Swiper(".swiper2", {
  loop: true, // Enable infinite loop
  speed: 700, // Smooth transition speed
  autoplay: {
    delay: 5000, // Delay between slide transitions
    pauseOnMouseEnter: true, // Pause autoplay on hover
  },
  pagination: {
    el: ".swiper-pagination", // Pagination element
    clickable: true, // Allow clicking on pagination dots
  },
  breakpoints: {
    500: {
      slidesPerView: 1, // Mobile view: Show 1 slide per view
      spaceBetween: 10, // Space between slides on mobile
    },
    768: {
      slidesPerView: 2, // Tablet view: Show 2 slides per view
      spaceBetween: 20, // Space between slides on tablet
    },
    1024: {
      slidesPerView: 3, // Desktop view: Show 3 slides per view
      spaceBetween: 40, // Space between slides on desktop
    },
  },
});