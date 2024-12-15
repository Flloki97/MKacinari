document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animated-element");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"; // Make element visible
            entry.target.classList.add("animate__fadeInUp"); // Add fade-in-up animation
            observer.unobserve(entry.target); // Stop observing after the animation
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  });