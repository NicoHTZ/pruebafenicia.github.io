// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Form submission handler
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const formObject = {}
      formData.forEach((value, key) => {
        formObject[key] = value
      })

      // Here you would typically send the data to your server
      console.log("Form submitted:", formObject)

      // Show success message (you can customize this)
      alert("¡Gracias por tu mensaje! Te contactaremos pronto.")

      // Reset form
      this.reset()
    })
  }

 
  // Animate treatment cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = Math.random() * 0.3 + "s"
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observe all treatment cards
  document.querySelectorAll(".treatment-card").forEach((card) => {
    observer.observe(card)
  })

  // Add some interactive effects
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Initialize theme from localStorage or default to light
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
  updateThemeIcon(savedTheme)
})

// Function to toggle between dark and light theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
}

// Function to update the theme icon
function updateThemeIcon(theme) {
  const themeIcon = document.querySelector(".theme-icon")
  if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙"
  }
}
