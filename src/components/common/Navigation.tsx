"use client";

import Link from "next/link";
import { useState } from "react";

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
  const t = translations[currentLanguage];

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
        padding: "0 2rem",
        zIndex: 1000,
      }}
    >
      {/* Left Side */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Back Button */}
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

        {/* Brand */}
        <div
          style={{
            borderLeft: "1px solid #e9ecef",
            paddingLeft: "1rem",
            width: "200px",
            minWidth: "200px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <h1
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              margin: 0,
              color: "#333",
            }}
          >
            {t.name}
          </h1>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#666",
              margin: 0,
            }}
          >
            {t.role}
          </p>
        </div>
      </div>

      {/* Center - Navigation Tabs */}
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
            background: currentPage === "portfolio" ? "#00bcd4" : "transparent",
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
            background: currentPage === "resume" ? "#00bcd4" : "transparent",
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

      {/* Right Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          position: "relative",
        }}
      >
        {/* Print Button (Resume 페이지에서만 표시) */}
        {currentPage === "resume" && (
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

        {/* Language Switcher */}
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
              background: currentLanguage === "ko" ? "#00bcd4" : "transparent",
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
              background: currentLanguage === "en" ? "#00bcd4" : "transparent",
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
              background: currentLanguage === "ja" ? "#00bcd4" : "transparent",
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
  );
}
