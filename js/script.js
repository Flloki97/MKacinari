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

document.addEventListener('DOMContentLoaded', () => {
  const audioPlayers = []; // Array to hold all audio elements

  function setupPlayer(playButtonId, audioId, rippleId, playIconId) {
    const playButton = document.getElementById(playButtonId);
    const audio = document.getElementById(audioId);
    const ripple = document.getElementById(rippleId);
    const playIcon = document.getElementById(playIconId);

    // Check if all elements exist before setting up the player
    if (!playButton || !audio || !ripple || !playIcon) {
      console.error(
        `Missing elements: playButton=${playButton}, audio=${audio}, ripple=${ripple}, playIcon=${playIcon}`
      );
      return; // Exit the function for missing elements
    }

    // Add this audio element to the audioPlayers array
    audioPlayers.push({ audio, playIcon, ripple });

    playButton.addEventListener('click', () => {
      // Stop other audios
      audioPlayers.forEach(player => {
        if (player.audio !== audio) {
          player.audio.pause();
          player.audio.currentTime = 0; // Reset to the beginning
          player.playIcon.src = './img/icons/play.png'; // Reset icon
          player.ripple.style.animation = 'none'; // Stop ripple animation
        }
      });

      // Toggle the clicked audio
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

  // Conditionally set up the players for page 1
  if (document.body.id === 'page1') {
    setupPlayer('playButton1', 'audio1', 'ripple1', 'playIcon1');
    setupPlayer('playButton2', 'audio2', 'ripple2', 'playIcon2');
    setupPlayer('playButton3', 'audio3', 'ripple3', 'playIcon3');
    setupPlayer('playButton4', 'audio4', 'ripple4', 'playIcon4');
  }

  // Conditionally set up the players for page 2
  if (document.body.id === 'page2') {
    setupPlayer('playButton5', 'audio5', 'ripple5', 'playIcon5');
    setupPlayer('playButton6', 'audio6', 'ripple6', 'playIcon6');
    setupPlayer('playButton7', 'audio7', 'ripple7', 'playIcon7');
    setupPlayer('playButton8', 'audio8', 'ripple8', 'playIcon8');
  }
});

