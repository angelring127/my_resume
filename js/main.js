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
  const currentYear = new Date().getFullYear();
  yearElement.textContent = yearElement.textContent.replace(
    "2024",
    currentYear
  );
});
