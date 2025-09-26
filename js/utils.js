// 공통 유틸리티 함수들
// 共通ユーティリティ関数
// 공통 유틸리티 함수

/**
 * 모달 관리 시스템
 * モーダル管理システム
 * 모달 관리 시스템
 */
class ModalManager {
  constructor() {
    this.activeModals = new Set();
    this.init();
  }

  init() {
    // ESC 키로 모달 닫기
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.closeAllModals();
      }
    });

    // 외부 클릭으로 모달 닫기
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal")) {
        this.closeModal(event.target);
      }
    });
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
      this.activeModals.add(modalId);
      document.body.style.overflow = "hidden";
    }
  }

  closeModal(modalId) {
    const modal =
      typeof modalId === "string" ? document.getElementById(modalId) : modalId;

    if (modal) {
      modal.style.display = "none";
      this.activeModals.delete(modal.id);

      if (this.activeModals.size === 0) {
        document.body.style.overflow = "auto";
      }
    }
  }

  closeAllModals() {
    this.activeModals.forEach((modalId) => {
      this.closeModal(modalId);
    });
  }
}

/**
 * 이벤트 리스너 관리 시스템
 * イベントリスナー管理システム
 * 이벤트 리스너 관리 시스템
 */
class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  addListener(element, event, handler, options = {}) {
    if (!this.listeners.has(element)) {
      this.listeners.set(element, []);
    }

    this.listeners.get(element).push({ event, handler, options });
    element.addEventListener(event, handler, options);
  }

  removeAllListeners(element) {
    const elementListeners = this.listeners.get(element);
    if (elementListeners) {
      elementListeners.forEach(({ event, handler, options }) => {
        element.removeEventListener(event, handler, options);
      });
      this.listeners.delete(element);
    }
  }

  cleanup() {
    this.listeners.forEach((_, element) => {
      this.removeAllListeners(element);
    });
  }
}

/**
 * DOM 조작 유틸리티
 * DOM操作ユーティリティ
 * DOM 조작 유틸리티
 */
class DOMUtils {
  static querySelector(selector, parent = document) {
    return parent.querySelector(selector);
  }

  static querySelectorAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
  }

  static addClass(element, className) {
    if (element) {
      element.classList.add(className);
    }
  }

  static removeClass(element, className) {
    if (element) {
      element.classList.remove(className);
    }
  }

  static toggleClass(element, className) {
    if (element) {
      element.classList.toggle(className);
    }
  }

  static hasClass(element, className) {
    return element ? element.classList.contains(className) : false;
  }

  static setStyle(element, property, value) {
    if (element) {
      element.style[property] = value;
    }
  }

  static getStyle(element, property) {
    return element ? window.getComputedStyle(element)[property] : null;
  }
}

/**
 * 애니메이션 관리 시스템
 * アニメーション管理システム
 * 애니메이션 관리 시스템
 */
class AnimationManager {
  constructor() {
    this.observers = new Map();
  }

  createIntersectionObserver(callback, options = {}) {
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
      ...options,
    };

    return new IntersectionObserver(callback, defaultOptions);
  }

  observeElements(selector, callback, options = {}) {
    const elements = DOMUtils.querySelectorAll(selector);
    const observer = this.createIntersectionObserver(callback, options);

    elements.forEach((element) => {
      observer.observe(element);
    });

    this.observers.set(selector, observer);
    return observer;
  }

  unobserveElements(selector) {
    const observer = this.observers.get(selector);
    if (observer) {
      observer.disconnect();
      this.observers.delete(selector);
    }
  }

  cleanup() {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
  }
}

/**
 * 스크롤 관리 시스템
 * スクロール管理システム
 * 스크롤 관리 시스템
 */
class ScrollManager {
  constructor() {
    this.lastScrollTop = 0;
    this.scrollHandlers = [];
    this.init();
  }

  init() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  addScrollHandler(handler) {
    this.scrollHandlers.push(handler);
  }

  removeScrollHandler(handler) {
    const index = this.scrollHandlers.indexOf(handler);
    if (index > -1) {
      this.scrollHandlers.splice(index, 1);
    }
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const direction = scrollTop > this.lastScrollTop ? "down" : "up";

    this.scrollHandlers.forEach((handler) => {
      handler({ scrollTop, direction, lastScrollTop: this.lastScrollTop });
    });

    this.lastScrollTop = scrollTop;
  }
}

/**
 * 성능 최적화 유틸리티
 * パフォーマンス最適化ユーティリティ
 * 성능 최적화 유틸리티
 */
class PerformanceUtils {
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  static throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  static requestAnimationFrame(callback) {
    return window.requestAnimationFrame(callback);
  }

  static cancelAnimationFrame(id) {
    return window.cancelAnimationFrame(id);
  }
}

// 전역 인스턴스 생성
// グローバルインスタンス作成
// 전역 인스턴스 생성
window.modalManager = new ModalManager();
window.eventManager = new EventManager();
window.animationManager = new AnimationManager();
window.scrollManager = new ScrollManager();

// 유틸리티 함수들을 전역으로 노출
// ユーティリティ関数をグローバルに公開
// 유틸리티 함수들을 전역으로 노출
window.DOMUtils = DOMUtils;
window.PerformanceUtils = PerformanceUtils;
