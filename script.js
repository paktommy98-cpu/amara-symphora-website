document.addEventListener("DOMContentLoaded", () => {

  // Smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      const target = document.querySelector(href);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Feature cards reveal animation
  const cards = document.querySelectorAll(".feature-card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    cards.forEach(card => {
      observer.observe(card);
    });
  } else {
    cards.forEach(card => {
      card.classList.add("visible");
    });
  }

  // Dynamic footer year
  const footerText = document.querySelector("footer p");

  if (footerText) {
    footerText.textContent =
      `© ${new Date().getFullYear()} AMARA Symphora. All rights reserved.`;
  }

  // Website initialization
  console.log("AMARA Symphora website initialized.");

});
