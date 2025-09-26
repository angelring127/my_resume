"use client";

import React, { useState } from "react";
import Navigation from "../common/Navigation";

// 언어별 텍스트 데이터
const translations = {
  ko: {
    name: "윤상호 (Sam)",
    role: "풀스택 개발자",
    portfolio: "포트폴리오",
    resume: "이력서",
    printResume: "PDF 출력",
    contactMe: "문의하기",
    location: "Vancouver, Canada",
    email: "angelring127@gmail.com",
    phone: "+1-604-773-0945",
    linkedin: "linkedin.com/in/naru1227",
    github: "github.com/angelring127",
    blog: "angelring127.github.io",
    technicalSkills: "기술 스택",
    professionalSummary: "전문 요약",
    summaryText:
      "6년 이상의 경험을 가진 열정적인 풀스택 개발자로, 강력하고 확장 가능한 웹 애플리케이션 구축을 통해 원활한 사용자 경험을 제공합니다. 효율적인 클라우드 아키텍처 설계와 유지보수 가능한 코드베이스 작성에 전문성을 보유하고 있습니다. 협업 환경과 원격 근무 환경에서 뛰어난 성과를 내며, 혁신적인 아이디어로 다양한 기술과 국제 시장에서 성과를 창출합니다.",
    frontend: "프론트엔드",
    frontendSkills:
      "React.js • Next.js • TypeScript • JavaScript • Flutter • Modern UI/UX",
    backend: "백엔드",
    backendSkills:
      "PHP • Laravel • Python • Django • RESTful API • Database Architecture",
    devops: "DevOps & 클라우드",
    devopsSkills:
      "AWS Cloud Services • Docker • CI/CD Pipeline • Containerization",
    professionalExperience: "경력 사항",
    present: "현재",
    education: "학력 및 병역",
    languages: "언어",
    korean: "한국어 (모국어)",
    english: "영어 (유창 - 캐나다 3년 이상)",
    japanese: "일본어 (고급 - 비즈니스 레벨)",
  },
  en: {
    name: "SAM (SANG HO YOUN)",
    role: "Full Stack Engineer",
    portfolio: "Portfolio",
    resume: "Resume",
    printResume: "Export PDF",
    contactMe: "Contact Me",
    location: "Vancouver, Canada",
    email: "angelring127@gmail.com",
    phone: "+1-604-773-0945",
    linkedin: "linkedin.com/in/naru1227",
    github: "github.com/angelring127",
    blog: "angelring127.github.io",
    technicalSkills: "Technical Skills",
    professionalSummary: "Professional Summary",
    summaryText:
      "A passionate full-stack engineer with 6+ years of experience building robust and scalable web applications that deliver seamless user experiences. Proven expertise in designing efficient cloud architectures and creating maintainable codebases. Thrives in collaborative environments and remote work settings, bringing innovative ideas to life across diverse technologies and international markets.",
    frontend: "Frontend",
    frontendSkills:
      "React.js • Next.js • TypeScript • JavaScript • Flutter • Modern UI/UX",
    backend: "Backend",
    backendSkills:
      "PHP • Laravel • Python • Django • RESTful API • Database Architecture",
    devops: "DevOps & Cloud",
    devopsSkills:
      "AWS Cloud Services • Docker • CI/CD Pipeline • Containerization",
    professionalExperience: "Professional Experience",
    present: "Present",
    education: "Education & Military Service",
    languages: "Languages",
    korean: "Korean (Native)",
    english: "English (Fluent - 3+ years in Canada)",
    japanese: "Japanese (Advanced - Business Level)",
  },
  ja: {
    name: "サム (ユン・サンホ)",
    role: "フルスタックエンジニア",
    portfolio: "ポートフォリオ",
    resume: "履歴書",
    printResume: "PDF出力",
    contactMe: "お問い合わせ",
    location: "Vancouver, Canada",
    email: "angelring127@gmail.com",
    phone: "+1-604-773-0945",
    linkedin: "linkedin.com/in/naru1227",
    github: "github.com/angelring127",
    blog: "angelring127.github.io",
    technicalSkills: "技術スキル",
    professionalSummary: "専門要約",
    summaryText:
      "6年以上の経験を持つ情熱的なフルスタックエンジニアとして、シームレスなユーザーエクスペリエンスを提供する堅牢でスケーラブルなWebアプリケーションの構築に取り組んでいます。効率的なクラウドアーキテクチャの設計と保守可能なコードベースの作成に専門知識を持っています。協力的な環境とリモートワーク環境で優れた成果を上げ、多様な技術と国際市場で革新的なアイデアを実現します。",
    frontend: "フロントエンド",
    frontendSkills:
      "React.js • Next.js • TypeScript • JavaScript • Flutter • Modern UI/UX",
    backend: "バックエンド",
    backendSkills:
      "PHP • Laravel • Python • Django • RESTful API • Database Architecture",
    devops: "DevOps & クラウド",
    devopsSkills:
      "AWS Cloud Services • Docker • CI/CD Pipeline • Containerization",
    professionalExperience: "職歴",
    present: "現在",
    education: "学歴・兵役",
    languages: "言語",
    korean: "韓国語 (ネイティブ)",
    english: "英語 (流暢 - カナダ3年以上)",
    japanese: "日本語 (上級 - ビジネスレベル)",
  },
};

type Language = "ko" | "en" | "ja";

export default function ResumePage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const t = translations[currentLanguage];

  return (
    <>
      <div
        style={{
          margin: 0,
          padding: 0,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          backgroundAttachment: "fixed",
          color: "#333",
          minHeight: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        {/* Navigation */}
        <Navigation currentPage="resume" />

        {/* Main Content */}
        <main
          className="no-print"
          style={{
            marginTop: "70px",
            minHeight: "calc(100vh - 70px)",
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* A4 Paper Container */}
          <div
            id="printDiv"
            style={{
              width: "210mm", // A4 width
              minHeight: "297mm", // A4 height
              maxWidth: "100%",
              background: "white",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
              fontFamily:
                '"Source Serif Pro", "Times New Roman", "Times", serif',
              color: "#1a1a1a",
            }}
          >
            <div style={{ padding: "0.8cm 1.2cm" }}>
              {/* Resume Header */}
              <header
                className="resume-header"
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid #000000",
                  paddingBottom: "8px",
                  marginBottom: "12px",
                }}
              >
                <h1
                  style={{
                    fontFamily: '"Crimson Text", "Times New Roman", serif',
                    fontSize: "18pt",
                    fontWeight: "600",
                    margin: "0 0 2px 0",
                    color: "#1a1a1a",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {t.name}
                </h1>
                <p
                  style={{
                    fontSize: "11pt",
                    color: "#666666",
                    margin: "0 0 6px 0",
                    fontWeight: "400",
                    fontStyle: "italic",
                  }}
                >
                  {t.role}
                </p>
              </header>

              {/* Technical Skills */}
              <section
                className="resume-section"
                style={{ marginBottom: "25px" }}
              >
                <h2
                  className="section-title"
                  style={{
                    fontFamily: '"Crimson Text", "Times New Roman", serif',
                    fontSize: "12pt",
                    fontWeight: "600",
                    color: "#000000",
                    margin: "0 0 6px 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    borderBottom: "1px solid #000000",
                    paddingBottom: "1px",
                  }}
                >
                  {t.technicalSkills}
                </h2>
                <div
                  className="skills-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "6px",
                    marginBottom: "6px",
                  }}
                >
                  <div
                    className="skill-category"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: "9pt",
                        fontWeight: "600",
                        color: "#000000",
                        minWidth: "75px",
                        margin: "0",
                        flexShrink: "0",
                      }}
                    >
                      {t.frontend}
                    </h4>
                    <span
                      className="skills-items"
                      style={{
                        fontSize: "9pt",
                        color: "#1a1a1a",
                        lineHeight: "1.2",
                        fontWeight: "400",
                      }}
                    >
                      {t.frontendSkills}
                    </span>
                  </div>
                  <div
                    className="skill-category"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: "9pt",
                        fontWeight: "600",
                        color: "#000000",
                        minWidth: "75px",
                        margin: "0",
                        flexShrink: "0",
                      }}
                    >
                      {t.backend}
                    </h4>
                    <span
                      className="skills-items"
                      style={{
                        fontSize: "9pt",
                        color: "#1a1a1a",
                        lineHeight: "1.2",
                        fontWeight: "400",
                      }}
                    >
                      {t.backendSkills}
                    </span>
                  </div>
                  <div
                    className="skill-category"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: "9pt",
                        fontWeight: "600",
                        color: "#000000",
                        minWidth: "75px",
                        margin: "0",
                        flexShrink: "0",
                      }}
                    >
                      {t.devops}
                    </h4>
                    <span
                      className="skills-items"
                      style={{
                        fontSize: "9pt",
                        color: "#1a1a1a",
                        lineHeight: "1.2",
                        fontWeight: "400",
                      }}
                    >
                      {t.devopsSkills}
                    </span>
                  </div>
                </div>
              </section>

              {/* Professional Summary */}
              <section
                className="resume-section"
                style={{ marginBottom: "10px" }}
              >
                <h2
                  className="section-title"
                  style={{
                    fontFamily: '"Crimson Text", "Times New Roman", serif',
                    fontSize: "12pt",
                    fontWeight: "600",
                    color: "#000000",
                    margin: "0 0 6px 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    borderBottom: "1px solid #000000",
                    paddingBottom: "1px",
                  }}
                >
                  {t.professionalSummary}
                </h2>
                <p
                  style={{
                    fontSize: "9pt",
                    lineHeight: "1.3",
                    color: "#1a1a1a",
                    margin: "0",
                    textAlign: "justify",
                  }}
                >
                  {t.summaryText}
                </p>
              </section>

              {/* Professional Experience */}
              <section
                className="resume-section"
                style={{ marginBottom: "10px" }}
              >
                <h2
                  className="section-title"
                  style={{
                    fontFamily: '"Crimson Text", "Times New Roman", serif',
                    fontSize: "12pt",
                    fontWeight: "600",
                    color: "#000000",
                    margin: "0 0 6px 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    borderBottom: "1px solid #000000",
                    paddingBottom: "1px",
                  }}
                >
                  {t.professionalExperience}
                </h2>

                {/* Experience Item 1 */}
                <div
                  className="experience-item"
                  style={{ marginBottom: "8px" }}
                >
                  <h3
                    className="experience-title"
                    style={{
                      fontFamily: '"Crimson Text", serif',
                      fontSize: "10pt",
                      fontWeight: "600",
                      color: "#000000",
                      margin: "0 0 1px 0",
                    }}
                  >
                    Full Stack Engineer & Technical Consultant
                  </h3>
                  <p
                    className="experience-company"
                    style={{
                      fontSize: "9pt",
                      color: "#333333",
                      margin: "0 0 1px 0",
                      fontWeight: "400",
                      fontStyle: "italic",
                    }}
                  >
                    Business Solve, Tortoise Programmer (Remote Contracts)
                  </p>
                  <p
                    className="experience-period"
                    style={{
                      fontSize: "8pt",
                      color: "#666666",
                      fontWeight: "400",
                      margin: "0 0 3px 0",
                    }}
                  >
                    January 2024 - {t.present} | Vancouver, BC
                  </p>
                  <ul
                    className="experience-list"
                    style={{
                      fontSize: "9pt",
                      color: "#1a1a1a",
                      lineHeight: "1.2",
                      paddingLeft: "12px",
                      margin: "1px 0 0 0",
                    }}
                  >
                    <li style={{ marginBottom: "1px", textAlign: "justify" }}>
                      Deliver custom web application modules and components for
                      diverse client projects
                    </li>
                    <li style={{ marginBottom: "1px", textAlign: "justify" }}>
                      Collaborate with international development teams on
                      scalable architecture solutions
                    </li>
                    <li style={{ marginBottom: "1px", textAlign: "justify" }}>
                      Provide technical consultation on modern full-stack
                      development practices
                    </li>
                  </ul>
                </div>

                {/* Experience Item 2 */}
                <div
                  className="experience-item"
                  style={{ marginBottom: "8px" }}
                >
                  <h3
                    className="experience-title"
                    style={{
                      fontFamily: '"Crimson Text", serif',
                      fontSize: "10pt",
                      fontWeight: "600",
                      color: "#000000",
                      margin: "0 0 1px 0",
                    }}
                  >
                    Full Stack Developer (Remote)
                  </h3>
                  <p
                    className="experience-company"
                    style={{
                      fontSize: "9pt",
                      color: "#333333",
                      margin: "0 0 1px 0",
                      fontWeight: "400",
                      fontStyle: "italic",
                    }}
                  >
                    Maebe Inc. - E-commerce Solutions
                  </p>
                  <p
                    className="experience-period"
                    style={{
                      fontSize: "8pt",
                      color: "#666666",
                      fontWeight: "400",
                      margin: "0 0 3px 0",
                    }}
                  >
                    May 2020 - December 2023 | Remote (Japan-based company)
                  </p>
                  <ul
                    className="experience-list"
                    style={{
                      fontSize: "9pt",
                      color: "#1a1a1a",
                      lineHeight: "1.2",
                      paddingLeft: "12px",
                      margin: "1px 0 0 0",
                    }}
                  >
                    <li style={{ marginBottom: "1px", textAlign: "justify" }}>
                      Led high-traffic e-commerce platform development (Next.js,
                      Laravel), increasing user engagement by 40% and supporting
                      10,000+ daily active users
                    </li>
                    <li style={{ marginBottom: "1px", textAlign: "justify" }}>
                      Implemented CI/CD pipeline with Docker & AWS, reducing
                      deployment time by 60% and eliminating production downtime
                    </li>
                    <li style={{ marginBottom: "1px", textAlign: "justify" }}>
                      Launched 3 Flutter mobile applications with 50,000+ total
                      downloads
                    </li>
                    <li style={{ marginBottom: "1px", textAlign: "justify" }}>
                      Built microservices backend architecture, reducing API
                      response time by 50% through database optimization and
                      caching strategies
                    </li>
                    <li style={{ marginBottom: "1px", textAlign: "justify" }}>
                      Mentored 5 junior developers, establishing code review
                      processes and improving overall team productivity by 30%
                    </li>
                  </ul>
                </div>

                {/* Experience Item 3 */}
                <div
                  className="experience-item"
                  style={{ marginBottom: "8px" }}
                >
                  <h3
                    className="experience-title"
                    style={{
                      fontFamily: '"Crimson Text", serif',
                      fontSize: "10pt",
                      fontWeight: "600",
                      color: "#000000",
                      margin: "0 0 1px 0",
                    }}
                  >
                    Web Developer
                  </h3>
                  <p
                    className="experience-company"
                    style={{
                      fontSize: "9pt",
                      color: "#333333",
                      margin: "0 0 1px 0",
                      fontWeight: "400",
                      fontStyle: "italic",
                    }}
                  >
                    Maebe Inc. - E-commerce Solutions
                  </p>
                  <p
                    className="experience-period"
                    style={{
                      fontSize: "8pt",
                      color: "#666666",
                      fontWeight: "400",
                      margin: "0 0 3px 0",
                    }}
                  >
                    December 2017 - April 2020 | Shizuoka, Japan
                  </p>
                  <ul
                    className="experience-list"
                    style={{
                      fontSize: "9pt",
                      color: "#1a1a1a",
                      lineHeight: "1.2",
                      paddingLeft: "12px",
                      margin: "1px 0 0 0",
                    }}
                  >
                    <li style={{ marginBottom: "1px", textAlign: "justify" }}>
                      Developed multi-vendor e-commerce platform serving 500+
                      merchants
                    </li>
                    <li style={{ marginBottom: "1px", textAlign: "justify" }}>
                      Implemented secure payment systems with PCI DSS
                      compliance, processing $2M+ annually
                    </li>
                    <li style={{ marginBottom: "1px", textAlign: "justify" }}>
                      Delivered localized solutions for Japanese and
                      international markets, supporting 3 languages and multiple
                      currencies
                    </li>
                  </ul>
                </div>
              </section>

              {/* Education & Languages */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "25px",
                  marginBottom: "25px",
                }}
              >
                <section className="resume-section">
                  <h2
                    className="section-title"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#00bcd4",
                      margin: "0 0 15px 0",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "5px",
                    }}
                  >
                    {t.education}
                  </h2>
                  <div style={{ marginBottom: "15px" }}>
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: "#333",
                        margin: "0 0 3px 0",
                      }}
                    >
                      Bachelor of Science in Computer Science
                    </h4>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#00bcd4",
                        margin: "0 0 3px 0",
                        fontWeight: "500",
                      }}
                    >
                      Korea Polytechnic University
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#666",
                        margin: "0",
                      }}
                    >
                      2015-2017 | Software Engineering, Cloud Computing
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: "#333",
                        margin: "0 0 3px 0",
                      }}
                    >
                      Republic of Korea Army
                    </h4>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#666",
                        margin: "0",
                      }}
                    >
                      Military Service (2012-2014) - Completed mandatory
                      military service
                    </p>
                  </div>
                </section>

                <section className="resume-section">
                  <h2
                    className="section-title"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#00bcd4",
                      margin: "0 0 15px 0",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "5px",
                    }}
                  >
                    {t.languages}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        margin: "0",
                        lineHeight: "1.4",
                      }}
                    >
                      {t.korean}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        margin: "0",
                        lineHeight: "1.4",
                      }}
                    >
                      {t.japanese}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        margin: "0",
                        lineHeight: "1.4",
                      }}
                    >
                      {t.english}
                    </p>
                  </div>
                </section>
              </div>

              {/* Contact Information */}
              <section className="resume-section">
                <div
                  className="contact-section"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontSize: "9pt",
                      color: "#333333",
                      fontWeight: "400",
                    }}
                  >
                    Burnaby, BC, Canada V5A 0A3
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "3px",
                      lineHeight: "1.2",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "8pt",
                        color: "#1a1a1a",
                        fontWeight: "400",
                      }}
                    >
                      {t.email}
                    </span>
                    <span
                      style={{
                        fontSize: "8pt",
                        color: "#666666",
                        fontWeight: "400",
                      }}
                    >
                      •
                    </span>
                    <span
                      style={{
                        fontSize: "8pt",
                        color: "#1a1a1a",
                        fontWeight: "400",
                      }}
                    >
                      {t.phone}
                    </span>
                    <span
                      style={{
                        fontSize: "8pt",
                        color: "#666666",
                        fontWeight: "400",
                      }}
                    >
                      •
                    </span>
                    <span
                      style={{
                        fontSize: "8pt",
                        color: "#1a1a1a",
                        fontWeight: "400",
                      }}
                    >
                      {t.linkedin}
                    </span>
                    <span
                      style={{
                        fontSize: "8pt",
                        color: "#666666",
                        fontWeight: "400",
                      }}
                    >
                      •
                    </span>
                    <span
                      style={{
                        fontSize: "8pt",
                        color: "#1a1a1a",
                        fontWeight: "400",
                      }}
                    >
                      {t.github}
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Floating Contact Button */}
        <button
          onClick={() => setIsContactOpen(true)}
          className="no-print"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            width: "auto",
            height: "auto",
            background: "linear-gradient(135deg, #00bcd4, #0097a7)",
            color: "white",
            border: "none",
            borderRadius: "50px",
            padding: "1rem 1.5rem",
            fontSize: "0.875rem",
            fontWeight: "500",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(0, 188, 212, 0.4)",
            zIndex: 1000,
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
          title="Contact Me"
        >
          ✉️ {t.contactMe}
        </button>
      </div>
    </>
  );
}
