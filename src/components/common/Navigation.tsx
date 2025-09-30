"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Language = "ko" | "en" | "ja";

interface NavigationProps {
  currentPage: "home" | "portfolio" | "resume";
  currentLanguage?: Language;
  onLanguageChange?: (language: Language) => void;
}

const translations = {
  ko: {
    name: "윤상호 (Sam)",
    role: "풀스택 개발자",
    portfolio: "포트폴리오",
    resume: "이력서",
    printResume: "PDF 출력",
  },
  en: {
    name: "SANG HO YOUN (Sam)",
    role: "Full Stack Developer",
    portfolio: "Portfolio",
    resume: "Resume",
    printResume: "Export PDF",
  },
  ja: {
    name: "サム (ユン・サンホ)",
    role: "フルスタックエンジニア",
    portfolio: "ポートフォリオ",
    resume: "履歴書",
    printResume: "PDF出力",
  },
};

export default function Navigation({
  currentPage,
  currentLanguage = "ko",
  onLanguageChange,
}: NavigationProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const t = translations[currentLanguage];

  const languageLabels = {
    ko: "한",
    en: "EN",
    ja: "日",
  };

  // 모바일 화면 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLanguageChange = (language: Language) => {
    if (onLanguageChange) {
      onLanguageChange(language);
    }
  };

  const handlePrint = () => {
    // Stack Overflow 방식: 직접 프린트 실행
    window.print();
  };

  return (
    <>
      <header
        className="no-print"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "70px",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "0 1rem" : "0 2rem",
          zIndex: 1000,
        }}
      >
        {/* Left Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "0.5rem" : "1rem",
          }}
        >
          {/* Burger Menu Button (Mobile Only) */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              style={{
                background: "none",
                border: "none",
                color: "#666",
                fontSize: "1.5rem",
                cursor: "pointer",
                padding: "0.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Menu"
            >
              ☰
            </button>
          )}

          {/* Back Button (Desktop Only) */}
          {!isMobile && (
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "#666",
                fontSize: "1.5rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00bcd4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#666";
              }}
            >
              ←
            </Link>
          )}

          {/* Brand */}
          <div
            style={{
              borderLeft: isMobile ? "none" : "1px solid #e9ecef",
              paddingLeft: isMobile ? "0" : "1rem",
              width: isMobile ? "auto" : "200px",
              minWidth: isMobile ? "auto" : "200px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <h1
              style={{
                fontSize: isMobile ? "1rem" : "1.25rem",
                fontWeight: "600",
                margin: 0,
                color: "#333",
              }}
            >
              {t.name}
            </h1>
            {!isMobile && (
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#666",
                  margin: 0,
                }}
              >
                {t.role}
              </p>
            )}
          </div>
        </div>

        {/* Center - Navigation Tabs (Desktop Only) */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f8f9fa",
              borderRadius: "8px",
              padding: "0.25rem",
            }}
          >
            <Link
              href="/portfolio"
              style={{
                width: "110px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: currentPage === "portfolio" ? "white" : "#666",
                background:
                  currentPage === "portfolio" ? "#00bcd4" : "transparent",
                fontWeight: "500",
                borderRadius: "6px",
                textDecoration: "none",
                boxShadow:
                  currentPage === "portfolio"
                    ? "0 1px 2px rgba(0, 0, 0, 0.1)"
                    : "none",
                transition: "all 0.2s ease",
                fontSize: "0.875rem",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== "portfolio") {
                  e.currentTarget.style.color = "#333";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== "portfolio") {
                  e.currentTarget.style.color = "#666";
                }
              }}
            >
              {t.portfolio}
            </Link>
            <Link
              href="/resume"
              style={{
                width: "110px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: currentPage === "resume" ? "white" : "#666",
                background:
                  currentPage === "resume" ? "#00bcd4" : "transparent",
                fontWeight: "500",
                borderRadius: "6px",
                textDecoration: "none",
                boxShadow:
                  currentPage === "resume"
                    ? "0 1px 2px rgba(0, 0, 0, 0.1)"
                    : "none",
                transition: "all 0.2s ease",
                fontSize: "0.875rem",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== "resume") {
                  e.currentTarget.style.color = "#333";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== "resume") {
                  e.currentTarget.style.color = "#666";
                }
              }}
            >
              {t.resume}
            </Link>
          </div>
        )}

        {/* Right Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "0.5rem" : "1rem",
            position: "relative",
          }}
        >
          {/* Print Button (Resume 페이지에서만 표시, Desktop Only) */}
          {!isMobile && currentPage === "resume" && (
            <button
              onClick={handlePrint}
              style={{
                background: "#00bcd4",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "0.5rem 1rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "background 0.2s ease",
                boxShadow: "0 2px 8px rgba(0, 188, 212, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00acc1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#00bcd4";
              }}
            >
              🖨️ {t.printResume}
            </button>
          )}

          {/* Language Switcher (Desktop Only) */}
          {!isMobile && (
            <div
              style={{
                display: "flex",
                background: "rgba(0, 0, 0, 0.05)",
                border: "1px solid #e9ecef",
                borderRadius: "6px",
                padding: "0.25rem",
                gap: "0.25rem",
              }}
            >
              <button
                onClick={() => handleLanguageChange("ko")}
                style={{
                  width: "32px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  background:
                    currentLanguage === "ko" ? "#00bcd4" : "transparent",
                  color: currentLanguage === "ko" ? "white" : "#666",
                  fontSize: "0.875rem",
                  fontWeight: currentLanguage === "ko" ? "600" : "400",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (currentLanguage !== "ko") {
                    e.currentTarget.style.background = "rgba(0, 188, 212, 0.1)";
                    e.currentTarget.style.color = "#00bcd4";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentLanguage !== "ko") {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#666";
                  }
                }}
              >
                한
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                style={{
                  width: "32px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  background:
                    currentLanguage === "en" ? "#00bcd4" : "transparent",
                  color: currentLanguage === "en" ? "white" : "#666",
                  fontSize: "0.875rem",
                  fontWeight: currentLanguage === "en" ? "600" : "400",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (currentLanguage !== "en") {
                    e.currentTarget.style.background = "rgba(0, 188, 212, 0.1)";
                    e.currentTarget.style.color = "#00bcd4";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentLanguage !== "en") {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#666";
                  }
                }}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange("ja")}
                style={{
                  width: "32px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  background:
                    currentLanguage === "ja" ? "#00bcd4" : "transparent",
                  color: currentLanguage === "ja" ? "white" : "#666",
                  fontSize: "0.875rem",
                  fontWeight: currentLanguage === "ja" ? "600" : "400",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (currentLanguage !== "ja") {
                    e.currentTarget.style.background = "rgba(0, 188, 212, 0.1)";
                    e.currentTarget.style.color = "#00bcd4";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentLanguage !== "ja") {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#666";
                  }
                }}
              >
                日
              </button>
            </div>
          )}

          {/* Language Dropdown (Mobile Only) */}
          {isMobile && (
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  background: "rgba(0, 0, 0, 0.05)",
                  border: "1px solid #e9ecef",
                  borderRadius: "6px",
                  padding: "0.4rem 0.6rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#333",
                  cursor: "pointer",
                }}
                aria-label="Language selector"
              >
                <span>{languageLabels[currentLanguage]}</span>
                <span style={{ fontSize: "0.6rem", opacity: 0.7 }}>▼</span>
              </button>
              {isLanguageDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "42px",
                    right: 0,
                    background: "white",
                    border: "1px solid #e9ecef",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    padding: "0.5rem",
                    zIndex: 1100,
                    minWidth: "100px",
                  }}
                >
                  {(["ko", "en", "ja"] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        if (onLanguageChange) {
                          onLanguageChange(lang);
                        }
                        setIsLanguageDropdownOpen(false);
                      }}
                      style={{
                        width: "100%",
                        padding: "0.5rem",
                        background:
                          currentLanguage === lang ? "#00bcd4" : "transparent",
                        color: currentLanguage === lang ? "white" : "#333",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        textAlign: "left",
                        fontWeight: currentLanguage === lang ? "600" : "400",
                        fontSize: "0.875rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {lang === "ko" && "한국어"}
                      {lang === "en" && "English"}
                      {lang === "ja" && "日本語"}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Profile Avatar */}
          <button
            onClick={() => setIsProfileOpen((prev) => !prev)}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00bcd4, #0097a7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "0.875rem",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            }}
            aria-haspopup="menu"
            aria-expanded={isProfileOpen}
            aria-label="Account menu"
            title="Account"
          >
            S
          </button>
          {isProfileOpen && (
            <div
              style={{
                position: "absolute",
                top: "48px",
                right: 0,
                width: "260px",
                background: "white",
                border: "1px solid #e9ecef",
                borderRadius: "10px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                padding: "12px",
                zIndex: 1200,
              }}
              role="menu"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #00bcd4, #0097a7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  S
                </div>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#333",
                      lineHeight: 1.1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#666" }}>
                    {t.role}
                  </div>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <a
                  href="mailto:angelring127@gmail.com"
                  style={{
                    color: "#00bcd4",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  📧 angelring127@gmail.com
                </a>
                <a
                  href="https://github.com/angelring127"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#333",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  📂 github.com/angelring127
                </a>
                <a
                  href="https://www.linkedin.com/in/naru1227"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#1976d2",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  💼 linkedin.com/in/naru1227
                </a>
              </div>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={() => setIsProfileOpen(false)}
                  style={{
                    background: "#f1f5f9",
                    border: "1px solid #e2e8f0",
                    color: "#334155",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Panel - 헤더 외부에 렌더링 */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="no-print"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 999998,
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Slide Menu */}
          <div
            className="no-print"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              width: "280px",
              maxWidth: "80vw",
              background: "white",
              boxShadow: "2px 0 20px rgba(0, 0, 0, 0.3)",
              zIndex: 999999,
              padding: "1.5rem",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#666",
                marginBottom: "1.5rem",
                alignSelf: "flex-start",
              }}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Navigation Links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  padding: "0.75rem 1rem",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                  color: "#333",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                ← {t.portfolio === "Portfolio" ? "Home" : "홈"}
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  padding: "0.75rem 1rem",
                  background:
                    currentPage === "portfolio" ? "#00bcd4" : "#f8f9fa",
                  color: currentPage === "portfolio" ? "white" : "#333",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                {t.portfolio}
              </Link>
              <Link
                href="/resume"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  padding: "0.75rem 1rem",
                  background: currentPage === "resume" ? "#00bcd4" : "#f8f9fa",
                  color: currentPage === "resume" ? "white" : "#333",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                {t.resume}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
