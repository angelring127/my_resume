// 통합된 초기화 시스템
// 統合された初期化システム
// 통합된 초기화 시스템
document.addEventListener("DOMContentLoaded", () => {
  // 유틸리티 스크립트 로드 확인
  if (typeof window.modalManager === "undefined") {
    console.warn("Utils script not loaded. Loading fallback...");
    return;
  }

  // 공통 초기화
  initCommonFeatures();

  // 페이지별 초기화
  initPageSpecificFeatures();
});

/**
 * 공통 기능 초기화
 * 共通機能初期化
 * 공통 기능 초기화
 */
function initCommonFeatures() {
  // 스크롤 애니메이션 설정
  setupScrollAnimations();

  // 현재 연도 업데이트
  updateCurrentYear();

  // 공통 이벤트 리스너 설정
  setupCommonEventListeners();
}

/**
 * 페이지별 기능 초기화
 * ページ別機能初期化
 * 페이지별 기능 초기화
 */
function initPageSpecificFeatures() {
  const body = document.body;

  if (body.classList.contains("dashboard-body")) {
    initDashboardFeatures();
  } else if (body.classList.contains("portfolio-body")) {
    initPortfolioFeatures();
  } else if (body.classList.contains("login-body")) {
    initLoginFeatures();
  }
}

/**
 * 스크롤 애니메이션 설정
 * スクロールアニメーション設定
 * 스크롤 애니메이션 설정
 */
function setupScrollAnimations() {
  const sections = document.querySelectorAll(".section");

  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeIn 0.8s ease-out forwards";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

/**
 * 현재 연도 업데이트
 * 現在年更新
 * 현재 연도 업데이트
 */
function updateCurrentYear() {
  const yearElement = DOMUtils.querySelector("footer p");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = yearElement.textContent.replace(
      "2024",
      currentYear
    );
  }
}

/**
 * 공통 이벤트 리스너 설정
 * 共通イベントリスナー設定
 * 공통 이벤트 리스너 설정
 */
function setupCommonEventListeners() {
  // 모든 모달 닫기 버튼에 이벤트 리스너 추가
  document.querySelectorAll(".close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = closeBtn.closest(".modal");
      if (modal) {
        closeModal(modal);
      }
    });
  });

  // 플로팅 컨택트 버튼 이벤트 리스너
  const contactButtons = document.querySelectorAll(".floating-contact-btn");

  contactButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      let modalId;
      if (btn.id === "portfolioContactBtn") {
        modalId = "portfolioContactModal";
      } else if (btn.id === "contactBtn") {
        modalId = "contactModal";
      }

      const modal = document.getElementById(modalId);
      if (modal) {
        openModal(modal);
      }
    });
  });

  // 외부 클릭으로 모달 닫기
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal(event.target);
    }
  });

  // ESC 키로 모달 닫기
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const openModal = document.querySelector(".modal.modal-opening");
      if (openModal) {
        closeModal(openModal);
      }
    }
  });
}

/**
 * 모달을 부드럽게 열기
 * モーダルをスムーズに開く
 * 모달을 부드럽게 열기
 */
function openModal(modal) {
  // 다른 열린 모달들을 먼저 닫기
  const openModals = document.querySelectorAll(".modal.modal-opening");
  openModals.forEach((openModal) => {
    if (openModal !== modal) {
      closeModal(openModal);
    }
  });

  // 모달 표시 및 애니메이션 시작
  modal.style.display = "block";
  modal.classList.remove("modal-closing");

  // 브라우저가 display 변경을 처리할 시간을 줌
  requestAnimationFrame(() => {
    modal.classList.add("modal-opening");
  });

  // body 스크롤 비활성화
  document.body.style.overflow = "hidden";
}

/**
 * 모달을 부드럽게 닫기
 * モーダルをスムーズに閉じる
 * 모달을 부드럽게 닫기
 */
function closeModal(modal) {
  modal.classList.remove("modal-opening");
  modal.classList.add("modal-closing");

  // 애니메이션 완료 후 모달 숨기기
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("modal-closing");

    // 다른 열린 모달이 없으면 body 스크롤 복원
    const remainingModals = document.querySelectorAll(".modal.modal-opening");
    if (remainingModals.length === 0) {
      document.body.style.overflow = "auto";
    }
  }, 400); // CSS transition 시간과 동일
}

/**
 * 대시보드 기능 초기화
 * ダッシュボード機能初期化
 * 대시보드 기능 초기화
 */
function initDashboardFeatures() {
  // 사이드바 토글 기능
  setupSidebarToggle();

  // 프로필 드롭다운 초기화
  initProfileDropdown();

  // 스크롤 시 활성 섹션 감지
  setupActiveSectionDetection();

  // 포트폴리오 페이드인 애니메이션
  setupPortfolioFadeIn();

  // 스무스 스크롤링
  setupSmoothScrolling();
}

/**
 * 포트폴리오 기능 초기화
 * ポートフォリオ機能初期化
 * 포트폴리오 기능 초기화
 */
function initPortfolioFeatures() {
  initDashboardFeatures();

  // 모바일 메뉴 토글
  setupMobileMenuToggle();

  // 포트폴리오 스크롤 효과
  setupPortfolioScrollEffects();
}

/**
 * 로그인 기능 초기화
 * ログイン機能初期化
 * 로그인 기능 초기화
 */
function initLoginFeatures() {
  // 로그인 페이지 특별 기능들
  console.log("Login features initialized");
}

/**
 * 사이드바 토글 설정
 * サイドバートグル設定
 * 사이드바 토글 설정
 */
function setupSidebarToggle() {
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".dashboard-sidebar");

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
}

/**
 * 프로필 드롭다운 초기화
 * プロフィールドロップダウン初期化
 * 프로필 드롭다운 초기화
 */
function initProfileDropdown() {
  const profileToggle = document.querySelector("#profileToggle");
  const profileDropdown = document.querySelector("#profileDropdown");

  if (profileToggle && profileDropdown) {
    profileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle("show");
    });

    // 외부 클릭 시 드롭다운 닫기
    document.addEventListener("click", (e) => {
      if (
        !profileDropdown.contains(e.target) &&
        !profileToggle.contains(e.target)
      ) {
        profileDropdown.classList.remove("show");
      }
    });
  }
}

/**
 * 활성 섹션 감지 설정
 * アクティブセクション検出設定
 * 활성 섹션 감지 설정
 */
function setupActiveSectionDetection() {
  let lastScrollTop = 0;

  const scrollHandler = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = scrollTop + 100; // 헤더 높이 고려

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = "#" + section.getAttribute("id");
      }
    });

    if (currentSection) {
      updateActiveNavLink(currentSection);
    }

    lastScrollTop = scrollTop;
  };

  // 스크롤 이벤트에 throttle 적용
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        scrollHandler();
        ticking = false;
      });
      ticking = true;
    }
  });
}

/**
 * 포트폴리오 페이드인 애니메이션 설정
 * ポートフォリオフェードインアニメーション設定
 * 포트폴리오 페이드인 애니메이션 설정
 */
function setupPortfolioFadeIn() {
  const elements = document.querySelectorAll(".portfolio-fade-in");

  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

/**
 * 스무스 스크롤링 설정
 * スムーススクロール設定
 * 스무스 스크롤링 설정
 */
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });

        // 사이드바 네비게이션 활성 상태 업데이트
        updateActiveNavLink(this.getAttribute("href"));
      }
    });
  });
}

/**
 * 모바일 메뉴 토글 설정
 * モバイルメニュートグル設定
 * 모바일 메뉴 토글 설정
 */
function setupMobileMenuToggle() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navMenu && navbar) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      navbar.classList.toggle("active");
    });

    // 링크 클릭 시 메뉴 닫기
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        navbar.classList.remove("active");
      });
    });
  }
}

/**
 * 포트폴리오 스크롤 효과 설정
 * ポートフォリオスクロール効果設定
 * 포트폴리오 스크롤 효과 설정
 */
function setupPortfolioScrollEffects() {
  let lastScrollTop = 0;

  const scrollHandler = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sections = document.querySelectorAll(".portfolio-section");
    const viewportHeight = window.innerHeight;
    const direction = scrollTop > lastScrollTop ? "down" : "up";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (direction === "down") {
        // 스크롤 다운
        if (
          scrollTop > sectionTop - viewportHeight / 2 &&
          scrollTop < sectionTop + sectionHeight
        ) {
          section.style.opacity = "1";
        } else {
          section.style.opacity = "0";
        }
      } else {
        // 스크롤 업
        if (
          scrollTop + viewportHeight > sectionTop &&
          scrollTop < sectionTop + sectionHeight
        ) {
          section.style.opacity = "1";
        } else {
          section.style.opacity = "0";
        }
      }
    });

    lastScrollTop = scrollTop;
  };

  // 스크롤 이벤트에 throttle 적용
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        scrollHandler();
        ticking = false;
      });
      ticking = true;
    }
  });
}

// 사이드바 네비게이션 활성 상태 업데이트 함수
function updateActiveNavLink(targetId) {
  // 모든 네비게이션 링크에서 active 클래스 제거
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  // 현재 타겟에 해당하는 링크에 active 클래스 추가
  const activeLink = document.querySelector(`.nav-link[href="${targetId}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// 스크롤 시 활성 섹션 감지 함수
function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.scrollY + 100; // 헤더 높이 고려

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = "#" + section.getAttribute("id");
    }
  });

  if (currentSection) {
    updateActiveNavLink(currentSection);
  }
}

// 프로필 드롭다운 초기화
function initProfileDropdown() {
  const profileToggle = document.getElementById("profileToggle");
  const profileDropdown = document.getElementById("profileDropdown");

  if (profileToggle && profileDropdown) {
    profileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle("show");
    });

    // 외부 클릭 시 드롭다운 닫기
    document.addEventListener("click", (e) => {
      if (
        !profileDropdown.contains(e.target) &&
        !profileToggle.contains(e.target)
      ) {
        profileDropdown.classList.remove("show");
      }
    });
  }
}
