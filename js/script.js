const c = document.querySelector("canvas");
const audio = document.querySelector("#audio");

let opt = {
  width: c.offsetWidth,
  height: c.offsetHeight,
  midY: c.offsetHeight / 2,
  points: 80,
  stretch: 10,
  sinHeight: 0,
  speed: -0.1,
  strokeColor: "white",
  strokeWidth: 1.5,
  power: true, // Start animation by default
};
c.width = opt.width * 2;
c.height = opt.height * 2;
c.style.width = opt.width;
c.style.height = opt.height;

const ctx = c.getContext("2d");
ctx.scale(2, 2);

ctx.strokeStyle = opt.strokeColor;
ctx.lineWidth = opt.strokeWidth;
ctx.lineCap = "round";
ctx.lineJoin = "round";

let time = 0;
const render = () => {
  window.requestAnimationFrame(render);
  ctx.clearRect(0, 0, opt.width, opt.height);
  time += 1;
  ctx.beginPath();
  let increment = 0;

  for (let i = 0; i <= opt.points; i++) {
    if (i < opt.points / 2) {
      increment += 0.1;
    } else {
      increment += -0.1;
    }

    const x = (opt.width / opt.points) * i;
    const y =
      opt.midY +
      Math.sin(time * opt.speed + i / opt.stretch) * opt.sinHeight * increment;
    ctx.lineTo(x, y);
  }

  ctx.stroke();
};

// Function to start the animation
const startAnimation = () => {
  render(); // Start rendering animation
  TweenMax.to(opt, 1, {
    sinHeight: 4,
    stretch: 5,
    ease: Power2.easeInOut,
  });
};

const startAudio = () => {
  audio.play(); // Start playing audio
};

// Function to check if the dialog has been shown before in this session
const hasDialogBeenShownInSession = () => {
  return sessionStorage.getItem('dialogShown') === 'true';
};

// Function to mark the dialog as shown for this session
const markDialogAsShownInSession = () => {
  sessionStorage.setItem('dialogShown', 'true');
};

// Show the dialog only if it hasn't been shown before in this session
window.addEventListener("load", () => {
  if (!hasDialogBeenShownInSession()) {
    const dialog = document.getElementById('dialog');
    dialog.style.display = 'block';

    // Add event listener to the "Yes" button
    document.getElementById('yesButton').addEventListener('click', () => {
      startAnimation(); // Start animation
      startAudio(); // Start audio
      dialog.style.display = 'none'; // Hide the dialog
      markDialogAsShownInSession(); // Mark the dialog as shown for this session
    });

    // Add event listener to the "No" button
    document.getElementById('noButton').addEventListener('click', () => {
      startAnimation(); // Start animation without audio
      dialog.style.display = 'none'; // Hide the dialog
      markDialogAsShownInSession(); // Mark the dialog as shown for this session
    });
  } else {
    startAnimation(); // Start animation without showing the dialog
  }
});

// Event listener for clicking on the canvas
c.addEventListener("click", () => {
  opt.power = !opt.power; // Toggle animation state

  // If animation should be stopped
  if (!opt.power) {
    audio.pause(); // Pause audio
    TweenMax.to(opt, 1, {
      sinHeight: 0,
      stretch: 10,
      ease: Power3.easeOut,
    });
  } else {
    audio.play(); // Resume audio
    TweenMax.to(opt, 1, {
      sinHeight: 4,
      stretch: 5,
      ease: Power2.easeInOut,
    });
  }
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
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