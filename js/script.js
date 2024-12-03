/*  SWIPER */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  }
});

$('.menu').click(function() {
  $(this).toggleClass('open');
  setTimeout(function() {
    $('.mobile-menu ul').toggleClass('open-menu');
  }, 200); // Adjust delay as needed to match transition timing

  if ($('.mobile-menu ul').hasClass('open-menu')) {
    // Apply transition delays to each list item
    $('.mobile-menu ul.open-menu li a').each(function(index) {
      $(this).css('transition-delay', (index * 0.6) + 's');
    });
  } else {
    // If the menu is closed, reset transition delays
    $('.mobile-menu ul li a').css('transition-delay', '');
  }
});

