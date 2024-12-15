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

function setupPlayer(playButtonId, audioId, rippleId, playIconId) {
  const playButton = document.getElementById(playButtonId);
  const audio = document.getElementById(audioId);
  const ripple = document.getElementById(rippleId);
  const playIcon = document.getElementById(playIconId);

  playButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playIcon.src = './img/icons/pause.png'; // Switch to pause image
      ripple.style.animation = 'ripple-animation 0.8s infinite';
    } else {
      audio.pause();
      playIcon.src = './img/icons/play.png'; // Switch back to play image
      ripple.style.animation = 'none';
    }
  });
}

setupPlayer('playButton1', 'audio1', 'ripple1', 'playIcon1');
setupPlayer('playButton2', 'audio2', 'ripple2', 'playIcon2');
setupPlayer('playButton3', 'audio3', 'ripple3', 'playIcon3');
setupPlayer('playButton4', 'audio4', 'ripple4', 'playIcon4');
setupPlayer('playButton5', 'audio5', 'ripple5', 'playIcon5');
setupPlayer('playButton6', 'audio6', 'ripple6', 'playIcon6');
setupPlayer('playButton7', 'audio7', 'ripple7', 'playIcon7');
setupPlayer('playButton8', 'audio8', 'ripple8', 'playIcon8');