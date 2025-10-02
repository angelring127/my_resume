"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// 언어별 텍스트 데이터
const translations = {
  ko: {
    name: "윤상호 (Sam)",
    role: "풀스택 개발자",
    welcome: "포트폴리오에 오신 것을 환영합니다",
    description: "열정과 전문성으로 혁신적인 웹 솔루션을 만듭니다",
    experience: "7년+ 경력",
    fullstack: "풀스택 개발",
    international: "국제 경험",
    accessPortfolio: "포트폴리오 접속",
    chooseSection: "탐색할 섹션을 선택하세요",
    selectSection: "섹션 선택",
    portfolio: "포트폴리오",
    portfolioDesc: "프로젝트 & 경험",
    resume: "이력서",
    resumeDesc: "전문 이력서",
    footerText: "풀스택 개발 전문성을 보여주는 전문 포트폴리오",
  },
  en: {
    name: "SANG HO YOUN",
    role: "Full Stack Developer",
    welcome: "Welcome to My Portfolio",
    description: "Creating innovative web solutions with passion and expertise",
    experience: "7+ Years Experience",
    fullstack: "Full Stack Development",
    international: "International Experience",
    accessPortfolio: "Access Portfolio",
    chooseSection: "Choose your preferred section to explore",
    selectSection: "Select Section",
    portfolio: "Portfolio",
    portfolioDesc: "Projects & Experience",
    resume: "Resume",
    resumeDesc: "Professional CV",
    footerText:
      "Professional portfolio showcasing full-stack development expertise",
  },
  ja: {
    name: "ユン・サンホ (Sam)",
    role: "フルスタック開発者",
    welcome: "ポートフォリオへようこそ",
    description: "情熱と専門知識で革新的なWebソリューションを作成します",
    experience: "7年以上の経験",
    fullstack: "フルスタック開発",
    international: "国際経験",
    accessPortfolio: "ポートフォリオアクセス",
    chooseSection: "探索するセクションを選択してください",
    selectSection: "セクション選択",
    portfolio: "ポートフォリオ",
    portfolioDesc: "プロジェクト＆経験",
    resume: "履歴書",
    resumeDesc: "専門履歴書",
    footerText:
      "フルスタック開発の専門性を示すプロフェッショナルポートフォリオ",
  },
};

type Language = "ko" | "en" | "ja";

export default function LandingPage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");
  const [isMobile, setIsMobile] = useState(false);

  const t = translations[currentLanguage];

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    // 로컬스토리지에 언어 설정 저장
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", language);
    }
  };

  // 초기 언어 로드
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem(
        "preferredLanguage"
      ) as Language | null;
      if (savedLanguage && ["ko", "en", "ja"].includes(savedLanguage)) {
        setCurrentLanguage(savedLanguage);
      }
    }
  }, []);

  // 모바일 화면 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div
      style={{
        fontFamily:
          '"Inter", "Noto Sans KR", system-ui, -apple-system, sans-serif',
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "center",
        position: isMobile ? "relative" : "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: isMobile ? "5rem" : "0",
        paddingBottom: isMobile ? "2rem" : "0",
        overflowY: isMobile ? "auto" : "hidden",
      }}
    >
      {/* Language Switcher */}
      <div
        style={{
          position: "fixed",
          top: isMobile ? "1rem" : "2rem",
          right: isMobile ? "1rem" : "2rem",
          zIndex: 1000,
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <button
          onClick={() => handleLanguageChange("ko")}
          style={{
            width: "48px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              currentLanguage === "ko"
                ? "rgba(0, 188, 212, 0.9)"
                : "rgba(255, 255, 255, 0.2)",
            color: "white",
            border:
              currentLanguage === "ko"
                ? "1px solid #00bcd4"
                : "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "6px",
            fontSize: "0.875rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={(e) => {
            if (currentLanguage !== "ko") {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
            }
          }}
          onMouseLeave={(e) => {
            if (currentLanguage !== "ko") {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }
          }}
        >
          한
        </button>
        <button
          onClick={() => handleLanguageChange("en")}
          style={{
            width: "48px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              currentLanguage === "en"
                ? "rgba(0, 188, 212, 0.9)"
                : "rgba(255, 255, 255, 0.2)",
            color: "white",
            border:
              currentLanguage === "en"
                ? "1px solid #00bcd4"
                : "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "6px",
            fontSize: "0.875rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={(e) => {
            if (currentLanguage !== "en") {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
            }
          }}
          onMouseLeave={(e) => {
            if (currentLanguage !== "en") {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }
          }}
        >
          EN
        </button>
        <button
          onClick={() => handleLanguageChange("ja")}
          style={{
            width: "48px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              currentLanguage === "ja"
                ? "rgba(0, 188, 212, 0.9)"
                : "rgba(255, 255, 255, 0.2)",
            color: "white",
            border:
              currentLanguage === "ja"
                ? "1px solid #00bcd4"
                : "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "6px",
            fontSize: "0.875rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={(e) => {
            if (currentLanguage !== "ja") {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
            }
          }}
          onMouseLeave={(e) => {
            if (currentLanguage !== "ja") {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }
          }}
        >
          日
        </button>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          minHeight: isMobile ? "auto" : "600px",
          background: "white",
          borderRadius: isMobile ? "12px" : "20px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          overflow: "hidden",
          margin: isMobile ? "1rem" : "2rem",
        }}
      >
        {/* Left Side - Dark */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            color: "white",
            padding: isMobile ? "2rem 1.5rem" : "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Grid Pattern Background */}
          <div
            style={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')`,
              opacity: 0.3,
            }}
          />

          {/* Brand Section */}
          <div
            style={{ position: "relative", zIndex: 2, marginBottom: "2rem" }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="60" height="60" rx="12" fill="url(#gradient)" />
                <path
                  d="M20 25L30 35L40 25"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#00bcd4" />
                    <stop offset="100%" stopColor="#0097a7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1
              style={{
                fontSize: isMobile ? "1.75rem" : "2.5rem",
                fontWeight: 700,
                margin: "0 0 0.5rem 0",
                background: "linear-gradient(135deg, #00bcd4, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.name}
            </h1>
            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                margin: 0,
                opacity: 0.9,
                color: "#e0e0e0",
              }}
            >
              {t.role}
            </p>
          </div>

          {/* Description Section */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <h3
              style={{
                fontSize: "1.5rem",
                margin: "0 0 1rem 0",
                color: "#00bcd4",
              }}
            >
              {t.welcome}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                margin: "0 0 2rem 0",
                opacity: 0.8,
              }}
            >
              {t.description}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    background: "rgba(0, 188, 212, 0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🚀</span>
                </div>
                <span style={{ fontSize: "1rem", opacity: 0.9 }}>
                  {t.experience}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    background: "rgba(0, 188, 212, 0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>💡</span>
                </div>
                <span style={{ fontSize: "1rem", opacity: 0.9 }}>
                  {t.fullstack}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    background: "rgba(0, 188, 212, 0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🌍</span>
                </div>
                <span style={{ fontSize: "1rem", opacity: 0.9 }}>
                  {t.international}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - White */}
        <div
          style={{
            background: "white",
            padding: isMobile ? "2rem 1.5rem" : "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "400px" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  margin: "0 0 0.5rem 0",
                }}
              >
                {t.accessPortfolio}
              </h2>
              <p style={{ fontSize: "1rem", color: "#666", margin: 0 }}>
                {t.chooseSection}
              </p>
            </div>

            {/* Form Group */}
            <div style={{ marginBottom: "2rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                {t.selectSection}
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {/* Portfolio Button */}
                <Link href="/portfolio" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      width: "100%",
                      padding: "1.5rem",
                      background: "#00bcd4",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      boxShadow: "0 4px 12px rgba(0, 188, 212, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#00acc1";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0, 188, 212, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#00bcd4";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0, 188, 212, 0.3)";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>📊</span>
                      <div style={{ textAlign: "left" }}>
                        <div>{t.portfolio}</div>
                        <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>
                          {t.portfolioDesc}
                        </div>
                      </div>
                    </div>
                    <span style={{ fontSize: "1.2rem" }}>→</span>
                  </button>
                </Link>

                {/* Resume Button */}
                <Link href="/resume" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      width: "100%",
                      padding: "1.5rem",
                      background: "#f8f9fa",
                      color: "#333",
                      border: "2px solid #e9ecef",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#00bcd4";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.borderColor = "#00bcd4";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0, 188, 212, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f8f9fa";
                      e.currentTarget.style.color = "#333";
                      e.currentTarget.style.borderColor = "#e9ecef";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>📄</span>
                      <div style={{ textAlign: "left" }}>
                        <div>{t.resume}</div>
                        <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                          {t.resumeDesc}
                        </div>
                      </div>
                    </div>
                    <span style={{ fontSize: "1.2rem" }}>→</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                textAlign: "center",
                marginTop: "2rem",
                paddingTop: "2rem",
                borderTop: "1px solid #e9ecef",
              }}
            >
              <p style={{ fontSize: "0.9rem", color: "#666", margin: 0 }}>
                {t.footerText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
