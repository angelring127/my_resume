// 스크롤 애니메이션을 위한 Intersection Observer 설정
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeIn 0.8s ease-out forwards";
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // 현재 연도 업데이트
  const yearElement = document.querySelector("footer p");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = yearElement.textContent.replace(
      "2024",
      currentYear
    );
  }
});

// 포트폴리오 JavaScript 통합
function initPortfolioFeatures() {
  // Smooth scrolling for portfolio
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Fade-in animation for portfolio
  const portfolioObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, portfolioObserverOptions);

  document.querySelectorAll(".portfolio-fade-in").forEach((element) => {
    portfolioObserver.observe(element);
  });

  // Mobile menu toggle for portfolio
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navMenu && navbar) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      navbar.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        navbar.classList.remove("active");
      });
    });
  }

  // Scroll fade out effect for portfolio
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".portfolio-section");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (
          scrollTop > sectionTop - viewportHeight / 2 &&
          scrollTop < sectionTop + sectionHeight
        ) {
          section.style.opacity = 1;
        } else {
          section.style.opacity = 0;
        }
      } else {
        // Scrolling up
        if (
          scrollTop + viewportHeight > sectionTop &&
          scrollTop < sectionTop + sectionHeight
        ) {
          section.style.opacity = 1;
        } else {
          section.style.opacity = 0;
        }
      }
    });

    lastScrollTop = scrollTop;
  });
}
