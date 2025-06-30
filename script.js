// Theme Toggle Functionality
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById("theme-toggle");
    this.themeIcon = document.querySelector(".theme-icon");
    this.body = document.body;
    this.currentTheme = localStorage.getItem("theme") || "dark";

    this.init();
  }

  init() {
    // Set initial theme
    this.setTheme(this.currentTheme);

    // Add event listener
    this.themeToggle.addEventListener("click", () => {
      this.toggleTheme();
    });
  }

  setTheme(theme) {
    this.currentTheme = theme;
    this.body.className = theme === "light" ? "light-theme" : "dark-theme";
    this.themeIcon.textContent = theme === "light" ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === "dark" ? "light" : "dark";
    this.setTheme(newTheme);
  }
}

// Scroll Animation Functionality
class ScrollAnimator {
  constructor() {
    this.animatedElements = document.querySelectorAll(".fade-in");
    this.init();
  }

  init() {
    // Check initial visibility
    this.checkVisibility();

    // Add scroll event listener
    window.addEventListener("scroll", () => {
      this.checkVisibility();
    });

    // Add resize event listener for responsive behavior
    window.addEventListener("resize", () => {
      this.checkVisibility();
    });
  }

  checkVisibility() {
    this.animatedElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add("visible");
      }
    });
  }

  isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Trigger animation when element is 20% visible
    const threshold = windowHeight * 0.2;

    return rect.top <= windowHeight - threshold && rect.bottom >= threshold;
  }
}

// Smooth scrolling for navigation links (if any are added later)
class SmoothScroller {
  constructor() {
    this.init();
  }

  init() {
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const headerHeight = 80; // Height of fixed header
          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  }
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ThemeManager();
  new ScrollAnimator();
  new SmoothScroller();

  // Add a small delay to show initial animations
  setTimeout(() => {
    const heroElement = document.querySelector(".hero");
    if (heroElement) {
      heroElement.classList.add("visible");
    }
  }, 100);
});

// Updated: Project button functionality using data-link
document.addEventListener("DOMContentLoaded", () => {
  const projectButtons = document.querySelectorAll(".project-btn");

  projectButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Subtle click animation
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "";
      }, 150);

      // Open project URL from data-link
      const url = button.getAttribute("data-link");
      if (url) {
        window.open(url, "_blank");
      } else {
        console.log("No data-link attribute found.");
      }
    });
  });
});
