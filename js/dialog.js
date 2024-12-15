document.addEventListener("DOMContentLoaded", function () {
    const dialog = document.getElementById("dialog");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const letters = document.querySelectorAll("#animatedText span");
  
    document.body.style.overflow = "hidden";
    // Function to handle dialog close
    function handleDialogClose() {
      dialog.style.opacity = 1;
      dialog.style.transition = "opacity 0.3s ease";
      dialog.style.opacity = 0;
  
      // After dialog fades out
      setTimeout(() => {
        dialog.style.display = "none"; // Fully hide the dialog
        document.body.style.overflow = ""; // Restore scrolling
  
        startTextAnimation(); // Start text animation
      }, 300); // Matches transition duration
    }
  
    // Function to start text animation
    function startTextAnimation() {
      letters.forEach((letter, index) => {
        letter.style.opacity = 0; // Ensure all letters are invisible
        letter.style.transition = "opacity 0.5s ease"; // Smooth fade-in
  
        // Delay each letter's fade-in
        setTimeout(() => {
          letter.style.opacity = 1; // Fade in each letter
        }, index * 200); // 200ms stagger delay per letter
      });
    }
  
    // Event listeners for Yes/No buttons
    yesButton.addEventListener("click", handleDialogClose);
    noButton.addEventListener("click", handleDialogClose);
  
    // Ensure text is invisible on page load
    letters.forEach((letter) => {
      letter.style.opacity = 0;
    });
  });