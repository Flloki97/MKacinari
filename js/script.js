/*  SWIPER */
const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
});


var swiper2 = new Swiper(".swiper2", {
  spaceBetween: 40,
  freeMode: false, // Disable free mode for better infinite sliding behavior
  loop: true, // Enable infinite loop
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1, // Mobile view
      spaceBetween: 10, // Smaller space between slides on mobile
    },
    768: {
      slidesPerView: 2, // Tablet view
      spaceBetween: 20, // Adjust spacing for tablets
    },
    1024: {
      slidesPerView: 3, // Desktop view
      spaceBetween: 40,
    },
  },
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



document.addEventListener("DOMContentLoaded", function () {
  const dialog = document.getElementById("dialog");
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  // Show the dialog and disable scrolling
  dialog.style.display = "flex";
  document.body.style.overflow = "hidden";

  // Event listeners for the buttons
  yesButton.addEventListener("click", function () {
    dialog.style.display = "none"; // Hide the dialog
    document.body.style.overflow = ""; // Restore scrolling
  });

  noButton.addEventListener("click", function () {
    dialog.style.display = "none"; // Hide the dialog
    document.body.style.overflow = ""; // Restore scrolling
  });
});

