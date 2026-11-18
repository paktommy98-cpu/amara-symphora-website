document.addEventListener("DOMContentLoaded", () => {
  // Smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Reveal elements when scrolling
  const revealElements = document.querySelectorAll(
    ".feature-card, .about, .hero"
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(element => {
    observer.observe(element);
  });

  // Footer year
  const footerText = document.querySelector("footer p");

  if (footerText) {
    footerText.textContent =
      `© ${new Date().getFullYear()} AMARA Symphora. All rights reserved.`;
  }

  console.log("AMARA Symphora website initialized.");
});
