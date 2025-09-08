// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Function to update the theme icon (now in the global scope)
function updateThemeIcon(theme) {
  const themeIcon = document.querySelector(".theme-icon");
  if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

// Function to toggle between dark and light theme (now in the global scope)
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}

// Form submission handler (this should be removed as per our previous conversation)
// document.addEventListener("DOMContentLoaded", () => {
//   const contactForm = document.querySelector(".contact-form");

//   if (contactForm) {
//     contactForm.addEventListener("submit", function (e) {
//       e.preventDefault();
//       // Your old form submission code here
//     });
//   }

// Animate treatment cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = Math.random() * 0.3 + "s";
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe all treatment cards
  document.querySelectorAll(".treatment-card").forEach((card) => {
    observer.observe(card);
  });

  // Add some interactive effects
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Initialize theme from localStorage or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
});