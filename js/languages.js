// 다국어 지원 시스템
// 多言語対応システム

const languages = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      career: "Career",
      stack: "Tech Stack",
      projects: "Projects",
      contact: "Contact",
      portfolio: "Portfolio",
      resume: "Resume",
      overview: "Overview",
      summary: "Summary",
      allProjects: "All Projects",
      featured: "Featured",
      recent: "Recent",
      contactInfo: "Contact Info",
      backToHome: "Back to Home",
      export: "Export PDF",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      technicalSkills: "Technical Skills",
      languageSkills: "Languages",
      actions: "Actions",
    },

    // Main Page
    main: {
      title: "SANG HO YOUN",
      subtitle: "Full Stack Developer",
      description:
        "Creating innovative web solutions with passion and expertise",
      portfolioButton: "Portfolio",
      resumeButton: "Resume",
      backToHome: "← Back to Home",
    },

    // Login Page
    login: {
      welcome: "Welcome to My Portfolio",
      title: "Access Portfolio",
      subtitle: "Choose your preferred section to explore",
      sectionLabel: "Select Section",
      portfolioDesc: "Projects & Experience",
      resumeDesc: "Professional CV",
      feature1: "6+ Years Experience",
      feature2: "Full Stack Development",
      feature3: "International Experience",
      footer:
        "Professional portfolio showcasing full-stack development expertise",
    },

    // Profile
    profile: {
      experience: "Experience",
      location: "Location",
      languages: "Languages",
      contactMe: "Contact Me",
    },

    // Portfolio Page
    portfolio: {
      name: "Youn Sang Ho (Sam)",
      title: "Full Stack Developer",
      tagline: "I enjoy creating innovative web solutions.",
      careerTitle: "Career Summary",
      stackTitle: "Technical Stack",
      projectsTitle: "Project Portfolio",
      contactTitle: "Contact",

      // Career
      career: {
        freelance1: {
          position: "Full Stack Engineer",
          company: "Freelance | Vancouver, Canada | 2022 - Present",
          tasks: [
            "Developing projects using Laravel, Next.js, Docker, and Python",
            "Leading project management and problem-solving initiatives",
            "Collaborating with local clients in Vancouver and Japan",
          ],
        },
        freelance2: {
          position: "Fullstack Developer",
          company: "Freelance | South Korea | 2020 - 2022",
          tasks: [
            "Building web applications with React, Laravel, and Python",
            "Designing system architecture and full-stack development",
            "Analyzing and implementing client requirements",
          ],
        },
        maebe: {
          position: "Web Developer",
          company: "Maebe Co., Ltd | Shizuoka, Japan | 2017 - 2020",
          tasks: [
            "Developing web services using React.js and Laravel",
            "Collaborating with Japanese development teams",
            "Optimizing web application performance",
          ],
        },
      },

      // Tech Stack
      stack: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps",
      },

      // Projects
      projects: {
        transport: {
          title: "Transportation Management System",
          description:
            "Led development and project management of a transportation system using Next.js and Laravel",
          tech: ["Next.js", "Laravel", "MySQL"],
          demo: "Demo",
          github: "GitHub",
        },
        warehouse: {
          title: "Warehouse Management System",
          description:
            "Inventory tracking system for fisheries company with mobile-responsive design",
          tech: ["React.js", "Laravel", "Mobile-responsive"],
          demo: "Demo",
          github: "GitHub",
        },
        cinemee: {
          title: "Cinemee - Movie Information App",
          description:
            "Backend development for Japanese movie information mobile application",
          tech: ["Python", "Django", "REST API"],
          playstore: "PlayStore",
          github: "GitHub",
        },
        wire: {
          title: "Electric Wire Management System",
          description:
            "Sales estimation system for wire lengths and drum sizes with complex calculations",
          tech: ["CakePHP", "MySQL", "JavaScript"],
          demo: "Demo",
          github: "GitHub",
        },
        business: {
          title: "Business Support System",
          description:
            "Infrastructure system for elderly meal service company using web and mobile applications",
          tech: ["Next.js", "Laravel", "REST API"],
          demo: "Demo",
          github: "GitHub",
        },
        school: {
          title: "School Official Mobile App",
          description:
            "Cross-platform mobile application for Nihon University Toyama High School",
          tech: ["Flutter", "Firebase", "Push Notifications"],
          playstore: "PlayStore",
          github: "GitHub",
        },
        sonar: {
          title: "Sonar Data Receiver",
          description:
            "Raspberry Pi-based system for processing and analyzing sonar wave data",
          tech: ["Python", "Raspberry Pi", "Data Analysis"],
          demo: "Demo",
          github: "GitHub",
        },
        drone: {
          title: "Drone Flight Management App",
          description:
            "iOS application for managing pre-flight documentation and Q&A for drone operations",
          tech: ["Swift", "iOS", "UIKit"],
          info: "Info",
          github: "GitHub",
        },
      },

      // Contact
      contact: {
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },

    // Resume Page
    resume: {
      name: "SAM (SANG HO YOUN)",
      title: "Full Stack Engineer",
      location: "Location",
      phone: "Phone",
      email: "Email",
      github: "GitHub Profile (https://github.com/angelring127)",
      linkedin: "LinkedIn Profile (https://www.linkedin.com/in/naru1227)",
      blog: "Technical Blog (https://angelring127.github.io/)",
      portfolio:
        "Portfolio (https://my-resume-three-psi.vercel.app/portfolio.html)",

      sections: {
        contactInfo: "Contact Information",
        technicalSkills: "Technical Skills",
        professionalSummary: "Professional Summary",
        professionalExperience: "Professional Experience",
        education: "Education & Military Service",
        languages: "Languages",
      },

      skills: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Cloud",
        frontendSkills:
          "React.js • Next.js • TypeScript • JavaScript • Flutter • Modern UI/UX",
        backendSkills:
          "PHP • Laravel • Python • Django • RESTful API • Database Architecture",
        devopsSkills:
          "AWS Cloud Services • Docker • CI/CD Pipeline • Containerization",
      },

      summary:
        "A passionate full-stack engineer with 6+ years of experience building robust and scalable web applications that deliver seamless user experiences. Proven expertise in designing efficient cloud architectures and creating maintainable codebases. Thrives in collaborative environments and remote work settings, bringing innovative ideas to life across diverse technologies and international markets.",

      experience: {
        current: {
          title: "Full Stack Engineer & Technical Consultant",
          company: "Business Solver, Tortoise.Programmer (Remote Contracts)",
          period: "January 2024 - Present | Vancouver, BC",
          tasks: [
            "Deliver custom web application modules and components for diverse client projects",
            "Collaborate with international development teams on scalable architecture solutions",
            "Provide technical consultation on modern full-stack development practices",
          ],
        },
        maebeRemote: {
          title: "Full Stack Developer (Remote)",
          company: "Maebe Inc. - E-commerce Solutions",
          period: "May 2020 - December 2023 | Remote (Japan-based company)",
          tasks: [
            "Led high-traffic e-commerce platform development (Next.js, Laravel), increasing user engagement by 40% and supporting 10,000+ daily active users",
            "Implemented CI/CD pipeline with Docker & AWS, reducing deployment time by 60% and eliminating production downtime",
            "Launched 3 Flutter mobile applications with 50,000+ total downloads",
            "Built microservices backend architecture, reducing API response time by 50% through database optimization and caching strategies",
            "Mentored 5 junior developers, establishing code review processes and improving overall team productivity by 30%",
          ],
        },
        maebe: {
          title: "Web Developer",
          company: "Maebe Inc. - E-commerce Solutions",
          period: "December 2017 - April 2020 | Shizuoka, Japan",
          tasks: [
            "Developed multi-vendor e-commerce platform serving 500+ merchants",
            "Implemented secure payment systems with PCI DSS compliance, processing $2M+ annually",
            "Delivered localized solutions for Japanese and international markets, supporting 3 languages and multiple currencies",
          ],
        },
      },

      education: {
        university: {
          title: "Bachelor of Science in Computer Science",
          school:
            "Korea Polytechnic University (2015-2017) - Software Engineering, Cloud Computing",
        },
        military: {
          title: "Republic of Korea Army",
          service:
            "Military Service (2012-2014) - Completed mandatory military service",
        },
      },

      languages:
        "Korean (Native) • Japanese (Advanced - Business Level) • English (Fluent - 3+ years in Canada)",
    },
  },

  ko: {
    // Navigation
    nav: {
      home: "홈",
      career: "경력",
      stack: "기술 스택",
      projects: "프로젝트",
      contact: "연락처",
      portfolio: "포트폴리오",
      resume: "이력서",
      overview: "개요",
      summary: "요약",
      allProjects: "모든 프로젝트",
      featured: "주요 프로젝트",
      recent: "최근 프로젝트",
      contactInfo: "연락처 정보",
      backToHome: "홈으로 돌아가기",
      export: "PDF 내보내기",
      experience: "경력",
      education: "학력",
      skills: "기술",
      technicalSkills: "기술 스택",
      languageSkills: "언어",
      actions: "작업",
    },

    // Main Page
    main: {
      title: "SANG HO YOUN",
      subtitle: "Full Stack Developer",
      description: "열정과 전문성으로 혁신적인 웹 솔루션을 만들어갑니다",
      portfolioButton: "포트폴리오",
      resumeButton: "이력서",
      backToHome: "← 홈으로 돌아가기",
    },

    // Login Page
    login: {
      welcome: "포트폴리오에 오신 것을 환영합니다",
      title: "포트폴리오 접속",
      subtitle: "탐색하실 섹션을 선택해주세요",
      sectionLabel: "섹션 선택",
      portfolioDesc: "프로젝트 & 경험",
      resumeDesc: "전문 이력서",
      feature1: "6년+ 경험",
      feature2: "풀스택 개발",
      feature3: "국제 경험",
      footer: "풀스택 개발 전문성을 보여주는 전문 포트폴리오",
    },

    // Profile
    profile: {
      experience: "경험",
      location: "위치",
      languages: "언어",
      contactMe: "연락하기",
    },

    // Portfolio Page
    portfolio: {
      name: "윤상호 (Sam)",
      title: "풀스택 개발자",
      tagline: "혁신적인 웹 솔루션을 만드는 것을 즐깁니다.",
      careerTitle: "경력 요약",
      stackTitle: "기술 스택",
      projectsTitle: "프로젝트 포트폴리오",
      contactTitle: "연락처",

      // Career
      career: {
        freelance1: {
          position: "풀스택 엔지니어",
          company: "프리랜서 | 밴쿠버, 캐나다 | 2022 - 현재",
          tasks: [
            "Laravel, Next.js, Docker, Python을 사용한 프로젝트 개발",
            "프로젝트 관리 및 문제 해결 이니셔티브 주도",
            "밴쿠버와 일본의 현지 클라이언트와 협업",
          ],
        },
        freelance2: {
          position: "풀스택 개발자",
          company: "프리랜서 | 대한민국 | 2020 - 2022",
          tasks: [
            "React, Laravel, Python을 사용한 웹 애플리케이션 구축",
            "시스템 아키텍처 설계 및 풀스택 개발",
            "클라이언트 요구사항 분석 및 구현",
          ],
        },
        maebe: {
          position: "웹 개발자",
          company: "마에베 주식회사 | 시즈오카, 일본 | 2017 - 2020",
          tasks: [
            "React.js와 Laravel을 사용한 웹 서비스 개발",
            "일본 개발팀과의 협업",
            "웹 애플리케이션 성능 최적화",
          ],
        },
      },

      // Tech Stack
      stack: {
        frontend: "프론트엔드",
        backend: "백엔드",
        devops: "데브옵스",
      },

      // Projects
      projects: {
        transport: {
          title: "교통 관리 시스템",
          description:
            "Next.js와 Laravel을 사용한 교통 시스템의 개발 및 프로젝트 관리 주도",
          tech: ["Next.js", "Laravel", "MySQL"],
          demo: "데모",
          github: "GitHub",
        },
        warehouse: {
          title: "창고 관리 시스템",
          description:
            "수산업 회사를 위한 모바일 반응형 디자인의 재고 추적 시스템",
          tech: ["React.js", "Laravel", "모바일 반응형"],
          demo: "데모",
          github: "GitHub",
        },
        cinemee: {
          title: "시네미 - 영화 정보 앱",
          description: "일본 영화 정보 모바일 애플리케이션을 위한 백엔드 개발",
          tech: ["Python", "Django", "REST API"],
          playstore: "플레이스토어",
          github: "GitHub",
        },
        wire: {
          title: "전선 관리 시스템",
          description:
            "복잡한 계산을 통한 전선 길이 및 드럼 크기 판매 견적 시스템",
          tech: ["CakePHP", "MySQL", "JavaScript"],
          demo: "데모",
          github: "GitHub",
        },
        business: {
          title: "비즈니스 지원 시스템",
          description:
            "웹 및 모바일 애플리케이션을 사용한 고령자 식사 서비스 회사를 위한 인프라 시스템",
          tech: ["Next.js", "Laravel", "REST API"],
          demo: "데모",
          github: "GitHub",
        },
        school: {
          title: "학교 공식 모바일 앱",
          description:
            "일본대학 도야마 고등학교를 위한 크로스 플랫폼 모바일 애플리케이션",
          tech: ["Flutter", "Firebase", "푸시 알림"],
          playstore: "플레이스토어",
          github: "GitHub",
        },
        sonar: {
          title: "소나 데이터 수신기",
          description:
            "소나 파동 데이터 처리 및 분석을 위한 라즈베리 파이 기반 시스템",
          tech: ["Python", "라즈베리 파이", "데이터 분석"],
          demo: "데모",
          github: "GitHub",
        },
        drone: {
          title: "드론 비행 관리 앱",
          description:
            "드론 운영을 위한 사전 비행 문서 관리 및 Q&A를 위한 iOS 애플리케이션",
          tech: ["Swift", "iOS", "UIKit"],
          info: "정보",
          github: "GitHub",
        },
      },

      // Contact
      contact: {
        email: "이메일",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },

    // Resume Page
    resume: {
      name: "SAM (윤상호)",
      title: "풀스택 엔지니어",
      location: "버나비, BC, 캐나다 V5A 0A3",
      phone: "+1-604-773-0945",
      email: "angelring127@gmail.com",
      github: "GitHub 프로필 (https://github.com/angelring127)",
      linkedin: "LinkedIn 프로필 (https://www.linkedin.com/in/naru1227)",
      blog: "기술 블로그 (https://angelring127.github.io/)",
      portfolio:
        "포트폴리오 (https://my-resume-three-psi.vercel.app/portfolio.html)",

      sections: {
        technicalSkills: "기술 스킬",
        professionalSummary: "전문가 요약",
        professionalExperience: "전문 경험",
        education: "교육 및 군 복무",
        languages: "언어",
      },

      skills: {
        frontend: "프론트엔드",
        backend: "백엔드",
        devops: "데브옵스 & 클라우드",
        frontendSkills:
          "React.js • Next.js • TypeScript • JavaScript • Flutter • 현대적 UI/UX",
        backendSkills:
          "PHP • Laravel • Python • Django • RESTful API • 데이터베이스 아키텍처",
        devopsSkills:
          "AWS 클라우드 서비스 • Docker • CI/CD 파이프라인 • 컨테이너화",
      },

      summary:
        "원활한 사용자 경험을 제공하는 견고하고 확장 가능한 웹 애플리케이션 구축에 6년 이상의 경험을 가진 열정적인 풀스택 엔지니어입니다. 효율적인 클라우드 아키텍처 설계와 유지보수가 가능한 코드베이스 구축에 대한 입증된 전문성을 보유하고 있습니다. 다양한 기술과 국제 시장에서 혁신적인 아이디어를 실현하는 협업 환경과 원격 근무 환경에서 번창합니다.",

      experience: {
        current: {
          title: "풀스택 엔지니어 & 기술 컨설턴트",
          company: "Business Solver, Tortoise.Programmer (원격 계약)",
          period: "2024년 1월 - 현재 | 밴쿠버, BC",
          tasks: [
            "다양한 클라이언트 프로젝트를 위한 맞춤형 웹 애플리케이션 모듈 및 컴포넌트 제공",
            "확장 가능한 아키텍처 솔루션에 대한 국제 개발팀과의 협업",
            "현대적인 풀스택 개발 관행에 대한 기술 컨설팅 제공",
          ],
        },
        maebeRemote: {
          title: "풀스택 개발자 (원격)",
          company: "마에베 주식회사 - 전자상거래 솔루션",
          period: "2020년 5월 - 2023년 12월 | 원격 (일본 기반 회사)",
          tasks: [
            "고트래픽 전자상거래 플랫폼 개발 주도 (Next.js, Laravel), 사용자 참여도 40% 증가 및 일일 활성 사용자 10,000명 이상 지원",
            "Docker & AWS를 사용한 CI/CD 파이프라인 구현, 배포 시간 60% 단축 및 프로덕션 다운타임 제거",
            "총 50,000회 이상 다운로드된 3개의 Flutter 모바일 애플리케이션 출시",
            "마이크로서비스 백엔드 아키텍처 구축, 데이터베이스 최적화 및 캐싱 전략을 통해 API 응답 시간 50% 단축",
            "5명의 주니어 개발자 멘토링, 코드 리뷰 프로세스 수립 및 전체 팀 생산성 30% 향상",
          ],
        },
        maebe: {
          title: "웹 개발자",
          company: "마에베 주식회사 - 전자상거래 솔루션",
          period: "2017년 12월 - 2020년 4월 | 시즈오카, 일본",
          tasks: [
            "500개 이상의 상인을 서비스하는 멀티 벤더 전자상거래 플랫폼 개발",
            "PCI DSS 규정 준수 보안 결제 시스템 구현, 연간 200만 달러 이상 처리",
            "일본 및 국제 시장을 위한 현지화 솔루션 제공, 3개 언어 및 다중 통화 지원",
          ],
        },
      },

      education: {
        university: {
          title: "컴퓨터 과학 학사",
          school:
            "한국산업기술대학교 (2015-2017) - 소프트웨어 공학, 클라우드 컴퓨팅",
        },
        military: {
          title: "대한민국 육군",
          service: "군 복무 (2012-2014) - 의무 군 복무 완료",
        },
      },

      languages:
        "한국어 (모국어) • 일본어 (고급 - 비즈니스 레벨) • 영어 (유창함 - 캐나다 3년 이상 거주)",
    },
  },

  ja: {
    // Navigation
    nav: {
      home: "ホーム",
      career: "経歴",
      stack: "技術スタック",
      projects: "プロジェクト",
      contact: "お問い合わせ",
      portfolio: "ポートフォリオ",
      resume: "履歴書",
      overview: "概要",
      summary: "要約",
      allProjects: "全プロジェクト",
      featured: "注目プロジェクト",
      recent: "最近のプロジェクト",
      contactInfo: "連絡先情報",
      backToHome: "ホームに戻る",
      export: "PDF エクスポート",
      experience: "経歴",
      education: "学歴",
      skills: "スキル",
      technicalSkills: "技術スタック",
      languageSkills: "言語",
      actions: "アクション",
    },

    // Main Page
    main: {
      title: "SANG HO YOUN",
      subtitle: "フルスタック開発者",
      description: "情熱と専門性で革新的なウェブソリューションを作成します",
      portfolioButton: "ポートフォリオ",
      resumeButton: "履歴書",
      backToHome: "← ホームに戻る",
    },

    // Login Page
    login: {
      welcome: "ポートフォリオへようこそ",
      title: "ポートフォリオアクセス",
      subtitle: "探索するセクションを選択してください",
      sectionLabel: "セクション選択",
      portfolioDesc: "プロジェクト & 経験",
      resumeDesc: "専門履歴書",
      feature1: "6年+ 経験",
      feature2: "フルスタック開発",
      feature3: "国際経験",
      footer: "フルスタック開発の専門性を紹介する専門ポートフォリオ",
    },

    // Profile
    profile: {
      experience: "経験",
      location: "場所",
      languages: "言語",
      contactMe: "お問い合わせ",
    },

    // Portfolio Page
    portfolio: {
      name: "ユン・サンホ（Sam）",
      title: "フルスタック開発者",
      tagline: "革新的なウェブソリューションの作成を楽しんでいます。",
      careerTitle: "経歴概要",
      stackTitle: "技術スタック",
      projectsTitle: "プロジェクトポートフォリオ",
      contactTitle: "お問い合わせ",

      // Career
      career: {
        freelance1: {
          position: "フルスタックエンジニア",
          company: "フリーランス | バンクーバー、カナダ | 2022 - 現在",
          tasks: [
            "Laravel、Next.js、Docker、Pythonを使用したプロジェクト開発",
            "プロジェクト管理と問題解決イニシアチブのリード",
            "バンクーバーと日本の現地クライアントとの協力",
          ],
        },
        freelance2: {
          position: "フルスタック開発者",
          company: "フリーランス | 大韓民国 | 2020 - 2022",
          tasks: [
            "React、Laravel、Pythonを使用したウェブアプリケーション構築",
            "システムアーキテクチャ設計とフルスタック開発",
            "クライアント要件の分析と実装",
          ],
        },
        maebe: {
          position: "ウェブ開発者",
          company: "株式会社マエベ | 静岡、日本 | 2017 - 2020",
          tasks: [
            "React.jsとLaravelを使用したウェブサービス開発",
            "日本の開発チームとの協力",
            "ウェブアプリケーション性能の最適化",
          ],
        },
      },

      // Tech Stack
      stack: {
        frontend: "フロントエンド",
        backend: "バックエンド",
        devops: "DevOps",
      },

      // Projects
      projects: {
        transport: {
          title: "交通管理システム",
          description:
            "Next.jsとLaravelを使用した交通システムの開発とプロジェクト管理をリード",
          tech: ["Next.js", "Laravel", "MySQL"],
          demo: "デモ",
          github: "GitHub",
        },
        warehouse: {
          title: "倉庫管理システム",
          description:
            "水産業会社向けのモバイルレスポンシブデザインの在庫追跡システム",
          tech: ["React.js", "Laravel", "モバイルレスポンシブ"],
          demo: "デモ",
          github: "GitHub",
        },
        cinemee: {
          title: "シネミー - 映画情報アプリ",
          description:
            "日本の映画情報モバイルアプリケーションのバックエンド開発",
          tech: ["Python", "Django", "REST API"],
          playstore: "PlayStore",
          github: "GitHub",
        },
        wire: {
          title: "電線管理システム",
          description:
            "複雑な計算による電線長さとドラムサイズの販売見積もりシステム",
          tech: ["CakePHP", "MySQL", "JavaScript"],
          demo: "デモ",
          github: "GitHub",
        },
        business: {
          title: "ビジネスサポートシステム",
          description:
            "ウェブとモバイルアプリケーションを使用した高齢者食事サービス会社のインフラシステム",
          tech: ["Next.js", "Laravel", "REST API"],
          demo: "デモ",
          github: "GitHub",
        },
        school: {
          title: "学校公式モバイルアプリ",
          description:
            "日本大学富山高等学校向けのクロスプラットフォームモバイルアプリケーション",
          tech: ["Flutter", "Firebase", "プッシュ通知"],
          playstore: "PlayStore",
          github: "GitHub",
        },
        sonar: {
          title: "ソナーデータ受信機",
          description:
            "ソナー波データの処理と分析のためのラズベリーパイベースシステム",
          tech: ["Python", "ラズベリーパイ", "データ分析"],
          demo: "デモ",
          github: "GitHub",
        },
        drone: {
          title: "ドローンフライト管理アプリ",
          description:
            "ドローン運用のためのフライト前文書管理とQ&AのためのiOSアプリケーション",
          tech: ["Swift", "iOS", "UIKit"],
          info: "情報",
          github: "GitHub",
        },
      },

      // Contact
      contact: {
        email: "メール",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },

    // Resume Page
    resume: {
      name: "SAM（ユン・サンホ）",
      title: "フルスタックエンジニア",
      location: "バーナビー、BC、カナダ V5A 0A3",
      phone: "+1-604-773-0945",
      email: "angelring127@gmail.com",
      github: "GitHubプロフィール (https://github.com/angelring127)",
      linkedin: "LinkedInプロフィール (https://www.linkedin.com/in/naru1227)",
      blog: "技術ブログ (https://angelring127.github.io/)",
      portfolio:
        "ポートフォリオ (https://my-resume-three-psi.vercel.app/portfolio.html)",

      sections: {
        technicalSkills: "技術スキル",
        professionalSummary: "専門家概要",
        professionalExperience: "専門経験",
        education: "教育と軍服務",
        languages: "言語",
      },

      skills: {
        frontend: "フロントエンド",
        backend: "バックエンド",
        devops: "DevOps & クラウド",
        frontendSkills:
          "React.js • Next.js • TypeScript • JavaScript • Flutter • モダンUI/UX",
        backendSkills:
          "PHP • Laravel • Python • Django • RESTful API • データベースアーキテクチャ",
        devopsSkills:
          "AWSクラウドサービス • Docker • CI/CDパイプライン • コンテナ化",
      },

      summary:
        "シームレスなユーザーエクスペリエンスを提供する堅牢でスケーラブルなウェブアプリケーションの構築に6年以上の経験を持つ情熱的なフルスタックエンジニアです。効率的なクラウドアーキテクチャの設計と保守可能なコードベースの構築において実証された専門知識を持っています。多様な技術と国際市場で革新的なアイデアを実現する協力的な環境とリモートワーク環境で繁栄します。",

      experience: {
        current: {
          title: "フルスタックエンジニア & 技術コンサルタント",
          company: "Business Solver, Tortoise.Programmer（リモート契約）",
          period: "2024年1月 - 現在 | バンクーバー、BC",
          tasks: [
            "多様なクライアントプロジェクトのためのカスタムウェブアプリケーションモジュールとコンポーネントの提供",
            "スケーラブルなアーキテクチャソリューションに関する国際開発チームとの協力",
            "モダンフルスタック開発実践に関する技術コンサルティングの提供",
          ],
        },
        maebeRemote: {
          title: "フルスタック開発者（リモート）",
          company: "株式会社マエベ - 電子商取引ソリューション",
          period: "2020年5月 - 2023年12月 | リモート（日本ベース会社）",
          tasks: [
            "高トラフィック電子商取引プラットフォーム開発をリード（Next.js、Laravel）、ユーザーエンゲージメント40%向上と日次アクティブユーザー10,000人以上をサポート",
            "Docker & AWSを使用したCI/CDパイプラインの実装、デプロイ時間60%短縮と本番ダウンタイムの排除",
            "合計50,000回以上のダウンロードを達成した3つのFlutterモバイルアプリケーションをローンチ",
            "マイクロサービスバックエンドアーキテクチャの構築、データベース最適化とキャッシュ戦略によりAPI応答時間50%短縮",
            "5名のジュニア開発者のメンタリング、コードレビュープロセスの確立と全体チーム生産性30%向上",
          ],
        },
        maebe: {
          title: "ウェブ開発者",
          company: "株式会社マエベ - 電子商取引ソリューション",
          period: "2017年12月 - 2020年4月 | 静岡、日本",
          tasks: [
            "500社以上の商人にサービスを提供するマルチベンダー電子商取引プラットフォームの開発",
            "PCI DSS準拠の安全な決済システムの実装、年間200万ドル以上を処理",
            "日本と国際市場向けのローカライズソリューションの提供、3言語と複数通貨をサポート",
          ],
        },
      },

      education: {
        university: {
          title: "コンピューターサイエンス学士",
          school:
            "韓国産業技術大学（2015-2017）- ソフトウェア工学、クラウドコンピューティング",
        },
        military: {
          title: "大韓民国陸軍",
          service: "軍服務（2012-2014）- 義務軍服務完了",
        },
      },

      languages:
        "韓国語（ネイティブ）• 日本語（上級 - ビジネスレベル）• 英語（流暢 - カナダ3年以上居住）",
    },
  },
};

// 言語 관리 시스템
class LanguageManager {
  constructor() {
    this.currentLanguage =
      this.getStoredLanguage() || this.detectBrowserLanguage();
    this.init();
  }

  // ブラウザの言語を検出
  detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split("-")[0];

    if (languages[langCode]) {
      return langCode;
    }

    // デフォルトは英語
    return "en";
  }

  // 保存された言語を取得
  getStoredLanguage() {
    return localStorage.getItem("portfolioLanguage");
  }

  // 言語を保存
  storeLanguage(lang) {
    localStorage.setItem("portfolioLanguage", lang);
  }

  // 初期化
  init() {
    this.updateLanguage(this.currentLanguage);
    this.createLanguageSwitcher();
  }

  // 言語を更新
  updateLanguage(langCode) {
    if (!languages[langCode]) {
      console.warn(`Language ${langCode} not found, falling back to English`);
      langCode = "en";
    }

    this.currentLanguage = langCode;
    this.storeLanguage(langCode);
    this.updateContent();
    this.updateMetaTags();
  }

  // コンテンツを更新
  updateContent() {
    const lang = languages[this.currentLanguage];
    const elements = document.querySelectorAll("[data-lang]");

    elements.forEach((element) => {
      const key = element.getAttribute("data-lang");
      const value = this.getNestedValue(lang, key);

      if (value !== undefined) {
        if (element.tagName === "INPUT" && element.type === "text") {
          element.placeholder = value;
        } else if (element.tagName === "IMG") {
          element.alt = value;
        } else {
          element.textContent = value;
        }
      }
    });
  }

  // ネストされたオブジェクトから値を取得（配列インデックス対応）
  getNestedValue(obj, path) {
    return path.split(".").reduce((current, key) => {
      if (current && current[key] !== undefined) {
        return current[key];
      }
      // 配列インデックスの場合（例：tasks.0）
      if (current && Array.isArray(current) && /^\d+$/.test(key)) {
        const index = parseInt(key);
        return current[index];
      }
      return undefined;
    }, obj);
  }

  // メタタグを更新
  updateMetaTags() {
    const lang = languages[this.currentLanguage];

    // HTML lang属性を更新
    document.documentElement.lang = this.currentLanguage;

    // ページタイトルを更新
    if (lang.portfolio && document.title.includes("Portfolio")) {
      document.title = `${lang.portfolio.name} - ${lang.portfolio.title}`;
    } else if (lang.resume && document.title.includes("Resume")) {
      document.title = `${lang.resume.name} - ${lang.resume.title}`;
    } else if (lang.main) {
      document.title = `${lang.main.title} - ${lang.main.subtitle}`;
    }
  }

  // 言語切り替えボタンを作成
  createLanguageSwitcher() {
    const existingSwitcher = document.querySelector(".language-switcher");
    if (existingSwitcher) {
      existingSwitcher.remove();
    }

    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.innerHTML = `
      <button class="lang-btn active" data-lang="en">EN</button>
      <button class="lang-btn" data-lang="ko">한</button>
      <button class="lang-btn" data-lang="ja">日</button>
    `;

    // ナビゲーションバーに追加
    const navbar = document.querySelector(".navbar .nav-content");
    const dashboardHeader = document.querySelector(
      ".dashboard-header .header-right"
    );
    const loginBody = document.querySelector(".login-body");
    const mainHero = document.querySelector(".main-hero");

    if (navbar) {
      navbar.appendChild(switcher);
    } else if (dashboardHeader) {
      dashboardHeader.appendChild(switcher);
    } else if (loginBody) {
      document.body.appendChild(switcher);
    } else if (mainHero) {
      mainHero.appendChild(switcher);
    }

    // イベントリスナーを追加
    switcher.addEventListener("click", (e) => {
      if (e.target.classList.contains("lang-btn")) {
        const langCode = e.target.getAttribute("data-lang");
        this.updateLanguage(langCode);

        // アクティブ状態を更新
        switcher.querySelectorAll(".lang-btn").forEach((btn) => {
          btn.classList.remove("active");
        });
        e.target.classList.add("active");
      }
    });

    // 모든 언어 버튼에서 active 클래스 제거 후 현재 언어만 활성화
    switcher.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // 현재의 언어ボタンをアクティブに
    const currentLangBtn = switcher.querySelector(
      `[data-lang="${this.currentLanguage}"]`
    );
    if (currentLangBtn) {
      currentLangBtn.classList.add("active");
    }
  }
}

// グローバルに利用可能にする
window.LanguageManager = LanguageManager;
window.languages = languages;
