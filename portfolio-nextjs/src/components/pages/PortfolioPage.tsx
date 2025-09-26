"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "../common/Navigation";

// 언어별 번역 데이터
const translations = {
  ko: {
    name: "윤상호 (Sam)",
    role: "풀스택 개발자",
    portfolio: "포트폴리오",
    resume: "이력서",
    backToHome: "홈으로 돌아가기",
    heroTitle: "웹 솔루션을 만드는 것을 즐깁니다.",
    location: "밴쿠버, BC, 캐나다",
    experience: "6년 이상의 경험",
    careerSummary: "경력 요약",
    projectPortfolio: "프로젝트 포트폴리오",
    technicalStack: "기술 스택",
    featured: "주요 프로젝트",
    viewDemo: "데모 보기",
    viewGithub: "GitHub 보기",
    linksNotAvailable: "링크가 제공되지 않음",
    frontend: "프론트엔드",
    backend: "백엔드",
    devops: "DevOps",
    mobile: "모바일",
    contactMe: "연락하기",
    email: "이메일",
    github: "GitHub",
    linkedin: "LinkedIn",
    sendMessage: "메시지 보내기",
    // 경력 데이터
    freelanceVancouver: "프리랜서",
    freelanceSeoul: "프리랜서",
    maebeCo: "Maebe Co., Ltd",
    vancouverCanada: "밴쿠버, 캐나다",
    seoulKorea: "서울, 한국",
    shizuokaJapan: "시즈오카, 일본",
    present: "현재",
    // 프로젝트 데이터
    transportationSystem: "교통 관리 시스템",
    transportationDesc:
      "Next.js와 Laravel을 사용한 교통 시스템 개발 및 프로젝트 관리 담당",
    warehouseSystem: "창고 관리 시스템",
    warehouseDesc: "수산업체를 위한 재고 추적 시스템, 모바일 반응형 디자인",
    cinemeeApp: "Cinemee - 영화 정보 앱",
    cinemeeDesc: "일본 영화 정보 모바일 애플리케이션의 백엔드 개발",
    electricWireSystem: "전선 관리 시스템",
    electricWireDesc:
      "전선 길이와 드럼 크기에 대한 복잡한 계산을 포함한 영업 견적 시스템",
    businessSupportSystem: "비즈니스 지원 시스템",
    businessSupportDesc:
      "고령자 식사 서비스 회사를 위한 웹 및 모바일 애플리케이션 인프라 시스템",
    schoolMobileApp: "학교 공식 모바일 앱",
    schoolMobileDesc:
      "니혼대학 도야마 고등학교를 위한 크로스 플랫폼 모바일 애플리케이션",
  },
  en: {
    name: "SANG HO YOUN",
    role: "Full Stack Developer",
    portfolio: "Portfolio",
    resume: "Resume",
    backToHome: "Back to Home",
    heroTitle: "I enjoy creating innovative web solutions.",
    location: "Vancouver, BC, Canada",
    experience: "6+ Years Experience",
    careerSummary: "Career Timeline",
    projectPortfolio: "Project Portfolio",
    technicalStack: "Technical Stack",
    featured: "Featured",
    viewDemo: "Live Demo",
    viewGithub: "GitHub",
    linksNotAvailable: "Links not available",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    mobile: "Mobile",
    contactMe: "Contact Me",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    sendMessage: "Send Message",
    // 경력 데이터
    freelanceVancouver: "Freelance",
    freelanceSeoul: "Freelance",
    maebeCo: "Maebe Co., Ltd",
    vancouverCanada: "Vancouver, Canada",
    seoulKorea: "Seoul, South Korea",
    shizuokaJapan: "Shizuoka, Japan",
    present: "Present",
    // 프로젝트 데이터
    transportationSystem: "Transportation Management System",
    transportationDesc:
      "Led development and project management of a transportation system using Next.js and Laravel",
    warehouseSystem: "Warehouse Management System",
    warehouseDesc:
      "Inventory tracking system for fisheries company with mobile-responsive design",
    cinemeeApp: "Cinemee - Movie Information App",
    cinemeeDesc:
      "Backend development for Japanese movie information mobile application",
    electricWireSystem: "Electric Wire Management System",
    electricWireDesc:
      "Sales estimation system for wire lengths and drum sizes with complex calculations",
    businessSupportSystem: "Business Support System",
    businessSupportDesc:
      "Infrastructure system for elderly meal service company using web and mobile applications",
    schoolMobileApp: "School Official Mobile App",
    schoolMobileDesc:
      "Cross-platform mobile application for Nihon University Toyama High School",
  },
  ja: {
    name: "ユン・サンホ (Sam)",
    role: "フルスタック開発者",
    portfolio: "ポートフォリオ",
    resume: "履歴書",
    backToHome: "ホームに戻る",
    heroTitle: "革新的なWebソリューションを作ることを楽しんでいます。",
    location: "バンクーバー、BC、カナダ",
    experience: "6年以上の経験",
    careerSummary: "キャリアタイムライン",
    projectPortfolio: "プロジェクトポートフォリオ",
    technicalStack: "技術スタック",
    featured: "注目プロジェクト",
    viewDemo: "ライブデモ",
    viewGithub: "GitHub",
    linksNotAvailable: "リンクが利用できません",
    frontend: "フロントエンド",
    backend: "バックエンド",
    devops: "DevOps",
    mobile: "モバイル",
    contactMe: "お問い合わせ",
    email: "メール",
    github: "GitHub",
    linkedin: "LinkedIn",
    sendMessage: "メッセージを送る",
    // 経歴データ
    freelanceVancouver: "フリーランス",
    freelanceSeoul: "フリーランス",
    maebeCo: "Maebe Co., Ltd",
    vancouverCanada: "バンクーバー、カナダ",
    seoulKorea: "ソウル、韓国",
    shizuokaJapan: "静岡、日本",
    present: "現在",
    // プロジェクトデータ
    transportationSystem: "交通管理システム",
    transportationDesc:
      "Next.jsとLaravelを使用した交通システムの開発とプロジェクト管理を担当",
    warehouseSystem: "倉庫管理システム",
    warehouseDesc: "水産業向けの在庫追跡システム、モバイル対応設計",
    cinemeeApp: "Cinemee - 映画情報アプリ",
    cinemeeDesc: "日本の映画情報モバイルアプリケーションのバックエンド開発",
    electricWireSystem: "電線管理システム",
    electricWireDesc:
      "電線の長さとドラムサイズの複雑な計算を含む販売見積システム",
    businessSupportSystem: "ビジネスサポートシステム",
    businessSupportDesc:
      "高齢者向け食事サービス会社のWebおよびモバイルアプリケーションインフラシステム",
    schoolMobileApp: "学校公式モバイルアプリ",
    schoolMobileDesc:
      "日本大学富山高等学校向けのクロスプラットフォームモバイルアプリケーション",
  },
};

type Language = "ko" | "en" | "ja";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  imageUrl: string;
}

interface Experience {
  position: string;
  company: string;
  location: string;
  years: string;
  tasks: string[];
}

export default function PortfolioPage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const t = translations[currentLanguage];

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: t.transportationSystem,
      description: t.transportationDesc,
      techStack: ["Next.js", "Laravel", "MySQL"],
      demoUrl: "https://act.bus-sora.com/",
      githubUrl: null,
      featured: true,
      imageUrl: "https://picsum.photos/400/200?random=1",
    },
    {
      id: 2,
      title: t.warehouseSystem,
      description: t.warehouseDesc,
      techStack: ["React.js", "Laravel", "Mobile-responsive"],
      demoUrl: null,
      githubUrl: null,
      featured: true,
      imageUrl: "https://picsum.photos/400/200?random=2",
    },
    {
      id: 3,
      title: t.cinemeeApp,
      description: t.cinemeeDesc,
      techStack: ["Python", "Django", "REST API"],
      demoUrl:
        "https://play.google.com/store/apps/details?id=com.sunny.cinemee.movieticket",
      githubUrl: null,
      featured: true,
      imageUrl: "https://picsum.photos/400/200?random=3",
    },
    {
      id: 4,
      title: t.electricWireSystem,
      description: t.electricWireDesc,
      techStack: ["CakePHP", "MySQL", "JavaScript"],
      demoUrl: null,
      githubUrl: null,
      featured: false,
      imageUrl: "https://picsum.photos/400/200?random=4",
    },
    {
      id: 5,
      title: t.businessSupportSystem,
      description: t.businessSupportDesc,
      techStack: ["Next.js", "Laravel", "REST API"],
      demoUrl: null,
      githubUrl: null,
      featured: false,
      imageUrl: "https://picsum.photos/400/200?random=5",
    },
    {
      id: 6,
      title: t.schoolMobileApp,
      description: t.schoolMobileDesc,
      techStack: ["Flutter", "Firebase", "Push Notifications"],
      demoUrl:
        "https://play.google.com/store/apps/details?id=jp.co.maebe.nichidaibuzan&pcampaignid=web_share",
      githubUrl: null,
      featured: false,
      imageUrl: "https://picsum.photos/400/200?random=6",
    },
  ];

  const experiences: Experience[] = [
    {
      position: "Full Stack Engineer",
      company: t.freelanceVancouver,
      location: t.vancouverCanada,
      years: `2022 - ${t.present}`,
      tasks: [
        "Developing projects using Laravel, Next.js, Docker, and Python",
        "Leading project management and problem-solving initiatives",
        "Collaborating with local clients in Vancouver and Japan",
      ],
    },
    {
      position: "Fullstack Developer",
      company: t.freelanceSeoul,
      location: t.seoulKorea,
      years: "2020 - 2022",
      tasks: [
        "Building web applications with React, Laravel, and Python",
        "Designing system architecture and full-stack development",
        "Analyzing and implementing client requirements",
      ],
    },
    {
      position: "Web Developer",
      company: t.maebeCo,
      location: t.shizuokaJapan,
      years: "2017 - 2020",
      tasks: [
        "Developing web services using React.js and Laravel",
        "Collaborating with Japanese development teams",
        "Optimizing web application performance",
      ],
    },
  ];

  const featuredProjectsCount = projects.filter((p) => p.featured).length;

  return (
    <div
      style={{
        fontFamily:
          '"Inter", "Noto Sans KR", system-ui, -apple-system, sans-serif',
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
      <Navigation currentPage="portfolio" />

      {/* Main Content */}
      <main
        style={{
          marginTop: "70px",
          minHeight: "calc(100vh - 70px)",
          padding: "2rem 1rem",
        }}
      >
        <div style={{ padding: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
          {/* Hero Section */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
              borderRadius: "12px",
              padding: "3rem 2rem",
              color: "white",
              marginBottom: "2rem",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              position: "relative",
              overflow: "hidden",
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

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "2rem",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    margin: "0 0 0.5rem 0",
                    background: "linear-gradient(135deg, #00bcd4, #ffffff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Youn Sang Ho (Sam)
                </h1>
                <p
                  style={{
                    fontSize: "1.25rem",
                    margin: "0 0 1rem 0",
                    opacity: 0.9,
                  }}
                >
                  {t.heroTitle}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    fontSize: "0.875rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span>📍</span>
                    {t.location}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span>📅</span>
                    {t.experience}
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span style={{ fontSize: "3rem" }}>👨‍💻</span>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "300px 1fr",
              gap: "2rem",
            }}
          >
            {/* Left Sidebar */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Career Timeline */}
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#333",
                    margin: "0 0 1.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "#00bcd4" }}>🏢</span>
                  {t.careerSummary}
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {experiences.map((exp, index) => (
                    <div key={index} style={{ position: "relative" }}>
                      {index < experiences.length - 1 && (
                        <div
                          style={{
                            position: "absolute",
                            left: "12px",
                            top: "32px",
                            width: "1px",
                            height: "calc(100% - 16px)",
                            background: "#e9ecef",
                          }}
                        />
                      )}
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            background: "#00bcd4",
                            borderRadius: "50%",
                            flexShrink: 0,
                            marginTop: "4px",
                          }}
                        />
                        <div style={{ flex: 1 }}>
                          <h3
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: "600",
                              color: "#333",
                              margin: 0,
                            }}
                          >
                            {exp.position}
                          </h3>
                          <p
                            style={{
                              fontSize: "0.75rem",
                              color: "#00bcd4",
                              fontWeight: "500",
                              margin: 0,
                            }}
                          >
                            {exp.company}
                          </p>
                          <p
                            style={{
                              fontSize: "0.75rem",
                              color: "#666",
                              margin: "0.25rem 0",
                            }}
                          >
                            {exp.location} • {exp.years}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack */}
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#333",
                    margin: "0 0 1.5rem 0",
                  }}
                >
                  {t.technicalStack}
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {[
                    {
                      category: t.frontend,
                      icon: "💻",
                      color: "#3b82f6",
                      skills: [
                        { name: "React", iconId: "react" },
                        { name: "Next.js", iconId: "nextjs" },
                        { name: "Vue.js", iconId: "vue" },
                        { name: "TypeScript", iconId: "typescript" },
                        { name: "JavaScript", iconId: "javascript" },
                      ],
                    },
                    {
                      category: t.backend,
                      icon: "🛠️",
                      color: "#10b981",
                      skills: [
                        { name: "Laravel", iconId: "laravel" },
                        { name: "Python", iconId: "python" },
                        { name: "Django", iconId: "django" },
                        { name: "Node.js", iconId: "nodejs" },
                        { name: "PHP", iconId: "php" },
                      ],
                    },
                    {
                      category: t.devops,
                      icon: "☁️",
                      color: "#8b5cf6",
                      skills: [
                        { name: "AWS", iconId: "aws" },
                        { name: "Docker", iconId: "docker" },
                        { name: "Git", iconId: "git" },
                        { name: "Linux", iconId: "linux" },
                        { name: "Nginx", iconId: "nginx" },
                      ],
                    },
                    {
                      category: t.mobile,
                      icon: "📱",
                      color: "#f59e0b",
                      skills: [
                        { name: "Flutter", iconId: "flutter" },
                        { name: "React Native", iconId: "react" },
                        { name: "Firebase", iconId: "firebase" },
                      ],
                    },
                  ].map((category, index) => (
                    <div key={index}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            background: category.color,
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "0.75rem",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1rem",
                              filter: "brightness(0) invert(1)",
                            }}
                          >
                            {category.icon}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: "600",
                            color: "#333",
                            margin: 0,
                          }}
                        >
                          {category.category}
                        </h3>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.75rem",
                          marginLeft: "2.75rem",
                        }}
                      >
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              padding: "0.5rem 0.75rem",
                              background: "#f8f9fa",
                              color: "#666",
                              fontSize: "0.75rem",
                              borderRadius: "6px",
                              fontWeight: "500",
                              border: "1px solid #e9ecef",
                              transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "#e9ecef";
                              e.currentTarget.style.borderColor = "#dee2e6";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "#f8f9fa";
                              e.currentTarget.style.borderColor = "#e9ecef";
                            }}
                          >
                            <img
                              src={`https://skillicons.dev/icons?i=${skill.iconId}`}
                              alt={skill.name}
                              style={{
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <span>{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Projects */}
            <div>
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "2rem",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "2rem",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#333",
                      margin: 0,
                    }}
                  >
                    {t.projectPortfolio}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", color: "#666" }}>
                      {featuredProjectsCount} {t.featured}
                    </span>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "#00bcd4",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "12px",
                        padding: "1.5rem",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedProject(project)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 16px rgba(0, 0, 0, 0.15)";
                        e.currentTarget.style.borderColor =
                          "rgba(0, 188, 212, 0.5)";
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor =
                          "rgba(255, 255, 255, 0.2)";
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "1.5rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <div style={{ width: "200px", flexShrink: 0 }}>
                          <div
                            style={{
                              width: "100%",
                              height: "120px",
                              background:
                                "linear-gradient(135deg, #f1f3f4, #e8eaed)",
                              borderRadius: "8px",
                              overflow: "hidden",
                              position: "relative",
                            }}
                          >
                            <Image
                              src={project.imageUrl}
                              alt={project.title}
                              width={200}
                              height={120}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                              }}
                            />
                          </div>
                        </div>
                        <div style={{ flex: 1, minWidth: "250px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginBottom: "0.75rem",
                            }}
                          >
                            <h3
                              style={{
                                fontSize: "1.125rem",
                                fontWeight: "600",
                                color: "#333",
                                margin: 0,
                              }}
                            >
                              {project.title}
                            </h3>
                            {project.featured && (
                              <span
                                style={{
                                  background:
                                    "linear-gradient(135deg, #00bcd4, #0097a7)",
                                  color: "white",
                                  padding: "0.25rem 0.75rem",
                                  borderRadius: "12px",
                                  fontSize: "0.75rem",
                                  fontWeight: "500",
                                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                                }}
                              >
                                {t.featured}
                              </span>
                            )}
                          </div>
                          <p
                            style={{
                              fontSize: "0.875rem",
                              color: "#666",
                              lineHeight: "1.5",
                              margin: "0 0 1rem 0",
                            }}
                          >
                            {project.description}
                          </p>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "0.5rem",
                              marginBottom: "1rem",
                            }}
                          >
                            {project.techStack.map((tech, index) => (
                              <span
                                key={index}
                                style={{
                                  background: "#e3f2fd",
                                  color: "#1976d2",
                                  padding: "0.25rem 0.75rem",
                                  borderRadius: "6px",
                                  fontSize: "0.75rem",
                                  fontWeight: "500",
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div style={{ display: "flex", gap: "1rem" }}>
                            {project.demoUrl && (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.5rem",
                                  color: "#00bcd4",
                                  fontSize: "0.875rem",
                                  fontWeight: "500",
                                  textDecoration: "none",
                                  transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = "#00acc1";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = "#00bcd4";
                                }}
                              >
                                <span>🔗</span>
                                {t.viewDemo}
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.5rem",
                                  color: "#666",
                                  fontSize: "0.875rem",
                                  fontWeight: "500",
                                  textDecoration: "none",
                                  transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = "#333";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = "#666";
                                }}
                              >
                                <span>📂</span>
                                {t.viewGithub}
                              </a>
                            )}
                            {!project.demoUrl && !project.githubUrl && (
                              <span
                                style={{
                                  fontSize: "0.875rem",
                                  color: "#999",
                                  fontStyle: "italic",
                                }}
                              >
                                {t.linksNotAvailable}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Contact Button */}
      <button
        onClick={() => setIsContactOpen(true)}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "60px",
          height: "60px",
          background: "linear-gradient(135deg, #00bcd4, #0097a7)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          fontSize: "1.5rem",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0, 188, 212, 0.4)",
          zIndex: 1000,
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 25px rgba(0, 188, 212, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 188, 212, 0.4)";
        }}
        title={t.contactMe}
      >
        📧
      </button>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            padding: "1rem",
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "2rem",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    margin: 0,
                    color: "#333",
                  }}
                >
                  {selectedProject.title}
                </h2>
                {selectedProject.featured && (
                  <span
                    style={{
                      background: "linear-gradient(135deg, #00bcd4, #0097a7)",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {t.featured}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#666",
                  padding: "0.25rem",
                  borderRadius: "4px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#333";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#666";
                }}
              >
                ✕
              </button>
            </div>

            {/* Project Image */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  background: "linear-gradient(135deg, #f1f3f4, #e8eaed)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  width={600}
                  height={200}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            {/* Project Description */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#333",
                  margin: "0 0 0.75rem 0",
                }}
              >
                프로젝트 개요
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {selectedProject.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#333",
                  margin: "0 0 0.75rem 0",
                }}
              >
                사용 기술
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {selectedProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      background: "#e3f2fd",
                      color: "#1976d2",
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.5rem",
                    background: "#00bcd4",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#00acc1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#00bcd4";
                  }}
                >
                  <span>🔗</span>
                  {t.viewDemo}
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.5rem",
                    background: "#666",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#555";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#666";
                  }}
                >
                  <span>📂</span>
                  {t.viewGithub}
                </a>
              )}
              {!selectedProject.demoUrl && !selectedProject.githubUrl && (
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "#999",
                    fontStyle: "italic",
                  }}
                >
                  {t.linksNotAvailable}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
          }}
          onClick={() => setIsContactOpen(false)}
        >
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "2rem",
              maxWidth: "400px",
              width: "90%",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                margin: "0 0 1.5rem 0",
              }}
            >
              {t.contactMe}
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  background: "rgba(0, 188, 212, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>📧</span>
                <div>
                  <p style={{ fontWeight: "500", margin: 0 }}>{t.email}</p>
                  <a
                    href="mailto:angelring127@gmail.com"
                    style={{ color: "#00bcd4", textDecoration: "none" }}
                  >
                    angelring127@gmail.com
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>📂</span>
                <div>
                  <p style={{ fontWeight: "500", margin: 0 }}>{t.github}</p>
                  <a
                    href="https://github.com/angelring127"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#666", textDecoration: "none" }}
                  >
                    github.com/angelring127
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  background: "#e3f2fd",
                  borderRadius: "8px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>💼</span>
                <div>
                  <p style={{ fontWeight: "500", margin: 0 }}>{t.linkedin}</p>
                  <a
                    href="https://www.linkedin.com/in/naru1227"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1976d2", textDecoration: "none" }}
                  >
                    linkedin.com/in/naru1227
                  </a>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsContactOpen(false)}
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "#00bcd4",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: "500",
                cursor: "pointer",
                marginTop: "1.5rem",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00acc1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#00bcd4";
              }}
            >
              {t.sendMessage}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
