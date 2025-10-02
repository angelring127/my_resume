"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "../common/Navigation";
import ContactFab from "../common/ContactFab";

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
    experience: "7년 이상의 경험",
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
    freelanceSeoul: "maebe Co., Ltd (remote)",
    maebeCo: "Maebe Co., Ltd",
    vancouverCanada: "밴쿠버, 캐나다",
    seoulKorea: "서울, 한국",
    shizuokaJapan: "시즈오카, 일본",
    present: "현재",
    // 프로젝트 데이터
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
    moreProjectsNote:
      "더 많은 프로젝트들이 곧 추가될 예정입니다. 지속적으로 업데이트되는 포트폴리오를 확인해주세요.",
    // 새로운 프로젝트 번역
    dekitanTitle: "데키탕 (Dekitang) - 아이 교육용 웹 어플리케이션",
    dekitanDesc:
      "아이들에게 여러 활동에 대한 흥미를 높이는 교육용 웹 어플리케이션",
    dekitanSystemDesc:
      "어플리케이션을 통해 아이들에게 여러 활동에 대한 흥미를 높이는데 중점을 두었으며, 매일 랜덤으로 된 행동 부모님 도와주기, 청소하기, 친구들과 나가 놀기등의 행동을 했을때 포인트를 얻어 그 포인트를 재화로 이용 할 수 있는 어플리케이션",
    dekitanExperienceDesc:
      "어플리케이션의 기반을 만들었습니다, Frontend와 Next.js 으로 제작하여 backend 는 고객의 요청으로 php laravel 프레임 워크로 만들었으며, 전반적으로 사용될 커스텀 컴포넌트 와 페이지 그리고 샘플 페이지를 만들어 다른 개발자들이 쉽게 이해 할 수 있도록 만들었습니다. 하지만 제가 생각하는 방향으로 컴포넌트를 이용하길 바랬지만 몇명의 개발자들은 독자적인 코드를 작성하는 경우가 있어 이에대한 의논이 있었으며, 미리 작업 규정이 얼마나 중요한지 알게되었습니다.",
    yomikakiTitle: "요미카키 (Yomikaki) - 일본어 읽기 쓰기 과목",
    yomikakiDesc:
      "일본어 히라가나, 가타카나, 한자 읽기 쓰기 연습 및 시험 시스템",
    yomikakiSystemDesc:
      "일본어인 히라가나, 가타카나, 한자 등을 읽기 쓰기 연습 및 시험을 봐서 본 회사에서 주는 급수로 일본어 수준을 알려준다. 사용 방법은 연습 혹은 시험은 주어진 문제에 대해 정해진 종이 템플릿에 답안을 적어 주어진 QR로 업로드 페이지에 접근하여 답안을 적은 템플릿을 사진을 찍어 업로드 후 AI 검증, python OCR 검증, 강사 검증으로 점수를 매겨 합격 불합격 결과를 메일로 알려주는 기능을 가지고 있다.",
    yomikakiExperienceDesc:
      "Laravel로 웹사이트를 제작했으며 Backend의 경우 고객사에서 이미 Google Script Api를 다른 시스템에서 사용 하고 있어 동일 하게 사용 하였습니다. Python의 open cv를 이용하여 사진에서 검증에 필요한 문자들을 찾는것과 이 사진이 몇번째 답안지인지 인식하는 기능을 제작 했습니다. 경험으로서는 전체 시스템을 혼자 제작하며 aws에 올려 사용자가 사용할 수 있도록 했으며, Open cv를 새롭게 이용하는걸 알게 되었으며 고객사에서 요구가 지속적으로 바뀌는게 많았는데 이전에는 고객사 말에 이끌려 너무 많은 시간을 소비 했었으나 이번에는 제 자신이 주장을 말하며 현재 가진 리소스로는 힘들거나 이런 방향이 좋다는걸 제시하여 그 방향으로 진행이 되었습니다.",
    eelLogisticsTitle: "장어물류 관리 시스템 (うなぎ管理システム)",
    eelLogisticsDesc:
      "장어회사에서 기존 시스템 노후화로 인한 확장 목표의 물류 관리 시스템",
    eelLogisticsSystemDesc:
      "장어회사에서 기존 사용하던 웹시스템이 노후화되어 기존 시스템 기능을 포함한 확장을 목표로한 장어물류 시스템, 이번 프로젝트는 Frontend는 Livewire, Backend는 Laravel 사용 했습니다. 저는 부분적인 기능을 제작하는 업무를 맡았습니다. 만든 기능은 장어판매가격설정, 장어 출하표 페이지 였으며 전체 기능중 부분이었으나 그 기능을 만들기 위해 어떠한 다른 부분이 필요하고 어떠한 영향을 끼치는지 생각하면서 만들었으며 이러한 생각이 만들면서도 매우 중요 하다는것을 다시금 느끼게 되었습니다.",
    eelLogisticsExperienceDesc:
      "장어판매가격설정과 장어 출하표 페이지를 제작했습니다. 전체 기능 중 부분이었으나 그 기능을 만들기 위해 어떠한 다른 부분이 필요하고 어떠한 영향을 끼치는지 생각하면서 만들었으며 이러한 생각이 만들면서도 매우 중요 하다는것을 다시금 느끼게 되었습니다.",
    transportationTitle: "운송회사 기반 시스템 (不二運輸)",
    transportationDesc:
      "운송회사에서 사용하는 고객 주문부터 배송까지의 총괄적인 관리 시스템",
    transportationSystemDesc:
      "운송회사에서 사용하는 시스템으로 고객으로 부터 주문을 받아 언제 어디서 물건을 받아 언제 어디로 배송하는지 계획, 발주, 용역을 통한 외주, 임금, 수금, 차량 보험, 차량 검사, 운전자 관리등 총괄적인 시스템",
    transportationExperienceDesc:
      "Frontend를 Next.js Backend를 laravel를 이용하여 만들었으며 다른 개발자들이 개발하기전 기반이 되는 devops로 Docker를 이용한 개발 환경 및 배포 환경 구성, 공통적으로 이용 되는 컴포넌트 작성 및 레이아웃, 인터페이스 구성, 개발에 필요한 Documents를 작성 이 프로젝트에서 경험한 부분은 단순히 문서를 작성함으로서 개발자들이 그 문서를 통해 개발을 잘 안한다는 것이었습니다. 물론 다수의 개발자들은 개발 문서를 보긴 하지만 몇몇 개발자의 경우 자신의 경험과 이전 개발 코드를 가져와쓰는 경우가 있어 시스템에 충돌이 발생되어 이러한 부분을 고치는데 꽤 많은 시간이 걸렸습니다. 그래서 단순히 개발 문서를 제공하는것이 아닌 몇가지 룰을 강제하는것 또한 필요한것을 알게 되었습니다.",
    mealTagTitle: "식사 명찰 제작 시스템 (食札システム)",
    mealTagDesc: "대규모 식사 배급을 위한 고객별 맞춤 식사 명찰 출력 시스템",
    mealTagSystemDesc:
      "대규모 식사 배급을 하는 회사에서 고객에 따라 알맞는 배급을 하기 위한 식사 명찰을 출력하여 키친에서 명찰 내용에 맞게 식사를 만들 수 있도록 도와주는 시스템",
    mealTagExperienceDesc:
      "Laravel를 이용하여 시스템을 만들었으며, 다양한 유저의 역활에 맞게 대시보드를 보여주어 사용자가 편리하게 만드려 노력했습니다. 경험으로선 실패한 프로젝트였습니다. 그저 고객의 요구를 듣고 고객이 원하고자 하는 시스템을 만드려고 하다보니 실패 하였습니다. 고객은 시스템 개발에 전문가들이 아닙니다. 고객들의 요구를 맞게 만드는것 또한 중요하지만 고객이 요구로 하는 것이 실제 시스템으로서 가능한지 혹은 다른 기능과 문제를 일으키지 않는지 그러한 화합과 어떤 부분의 요구를 가장 중점으로 생각 해야하는지 그런 부분을 공부하게 되었습니다.",
    droneDocumentTitle: "드론 자동서류 작성 시스템 (日本DMC)",
    droneDocumentDesc:
      "정부 허가를 위한 드론 서류 작업을 간소화하는 안드로이드 애플리케이션",
    droneDocumentSystemDesc:
      "특정 지역 혹은 일정 인구가 있는 지역에서는 정부의 허가가 필요함으로 허가를 받기 위한 서류작업이 필요한데 꽤 많은 자료를 필요로 하므로 좀 더 간단하게 작업을 할 수 있도록 안드로이드폰 에서 미리설정 및 스마트폰의 기능을 이용하여 간단하게 서류 작성 기능을 제작",
    droneDocumentExperienceDesc:
      "처음으로 다른 사람들과 하나의 프로젝트를 제작하는 경험을 가졌으며, 코드의 통일성과 다른 사람들이 이해 할 수 있도록 주석을 달아야 하는지에 대한 중요성을 경험",
    // 追加: 新規経歴/プロジェクト（韓国語）
    harvestKingdomTitle: "수확 왕국 (收穫王国 ミートユ)",
    harvestKingdomDesc:
      "가상 농업 체험 게임으로 실제 농가와 연동, 게임 내 재배가 현실 농작물로 연결",
    harvestKingdomSystemDesc:
      "이 앱은 사람들이 손쉽게 농업을 체험하고 직접 채소를 키워볼 수 있는 게임을 목표로 합니다. 게임 속에서 가상으로 채소를 재배하면, 실제 농가에서도 같은 채소가 재배가 되고, 게임 안의 코인으로 교환할 수도 있습니다.",
    harvestKingdomExperienceDesc:
      "외주 용역으로서 이미 만들어진 시스템에 디자인을 입히는 작업을 받았습니다. 간단한 작업이라 서둘러 판단하여 실제 개발 시간은 외주비를 넘어서는 문제가 발생 했습니다. 이 이상 손해를 볼수는 없어 외주를 주신 고객 회사와 논의 끝에 추가 금액을 받을 수 있게 되었습니다. 이 경험으로 작은 일에도 너무 섣불리 결론을 내면 안된다는것을 알게 되었습니다.",
    terumoTitle: "시스템 프레임워크 업그레이드 - 테르모 휴먼 크리에이트",
    terumoDesc:
      "사내 알림 및 포인트 기반 물품구입 시스템의 서버 이전 및 CakePHP3→4, PHP8 업그레이드",
    terumoSystemDesc:
      "사내 알림과 포인트로 물품을 구입하는 시스템. 서버 이전과 함께 CakePHP3에서 4로, PHP 버전을 8대로 올려 안정성과 보안을 강화",
    terumoExperienceDesc:
      "프레임워크와 서버 업그레이드는 문제없이 완료. 이후 보안 컨설팅 테스트에서 다양한 인젝션 우려 지적에 대응책을 마련하며 보안 전반에 대한 이해를 심화. 프레임워크 레벨의 기본 방어 외 추가 보안 고려가 필요함을 체득",

    yazakiTitle: "전압선 사이즈 선정 시스템 - 矢崎電線",
    yazakiDesc:
      "엑셀 계산 로직을 CakePHP4로 이관하여 전압선/사이즈별 견적과 조건, 드럼 선택을 웹에서 확인",
    yazakiSystemDesc:
      "전문 전압선 업체의 고객 요구에 맞춰 가격과 가능 조건, 사용 드럼을 산출/표시하는 웹 시스템",
    yazakiExperienceDesc:
      "복잡한 엑셀 계산을 PHP로 동등 재현. 기존 엑셀 내 오류를 발견하여 고객과 검증/대응 방안을 조율하는 데 개발보다 더 많은 시간이 소요",

    esTitle: "에스테 자사 시스템 Es.",
    esDesc:
      "회원 관리, 피부 관리 가이드, QR 등록, 생리 주기 관리 등 여성 고객 중심의 웹/앱 시스템",
    esSystemDesc:
      "관리용 웹과 모바일 앱으로 구성된 에스테 회사의 회원 관리 시스템",
    esExperienceDesc:
      "Flutter로 iOS/Android 앱을 동시 개발. 난이도는 높지 않았으나 기능/디자인 변경과 추가 요구로 장기 대응",

    nichidaiTitle: "닛타이 토요 야마 중고등학교 공식 앱",
    nichidaiDesc: "학교 주요 알림 제공 크로스플랫폼 앱",
    nichidaiSystemDesc:
      "학교 공지와 주요 알림을 제공. Firebase 기반 푸시 알림 및 배지 처리 지원",
    nichidaiExperienceDesc: "Flutter로 제작, Firebase Notification/뱃지 구현",

    kawataSurveyTitle: "사내 설문조사 시스템 - 加和太建設",
    kawataSurveyDesc:
      "분기별 설문과 결과 그래프 시각화가 가능한 웹 설문 시스템",
    kawataSurveySystemDesc: "분기 설문 작성과 결과 집계/그래프 제공",
    kawataSurveyExperienceDesc:
      "Laravel로 최초로 요구정의→설계→개발→테스트→납품까지 단독 수행. A부터 Z까지 전 과정 경험",

    kawataCoreTitle: "사내 기반 시스템 기능 확장/보수 - 加和太建設",
    kawataCoreDesc: "건설 기업 핵심 업무 웹 시스템의 기능 추가와 유지보수",
    kawataCoreSystemDesc: "전사적 작업/관리용 대규모 웹 시스템",
    kawataCoreExperienceDesc:
      "거대 레거시 코드의 파편화와 품질 저하가 보수에 미치는 영향을 체감. 지속 가능한 코딩 규율의 중요성 재인식",

    sonarTitle: "음파탐지 장기 기록 장치 - 葵ソニック・渋谷潜水工業",
    sonarDesc:
      "라즈베리 파이로 음파 탐지기 데이터를 장시간(72h+) 기록, 뷰어 호환 포맷 생성",
    sonarSystemDesc:
      "유선으로 이진 데이터를 수집해 기존 뷰어로 열람 가능하도록 파일 포맷을 재구성",
    sonarExperienceDesc:
      "Python/Raspberry Pi, 바이너리 스니핑과 포맷 역공학을 학습",

    inhouseNewsTitle: "사내신문 시스템 (여러 회사 납품)",
    inhouseNewsDesc:
      "CakePHP 웹/안드로이드 앱 기반의 공지/권고 알림 시스템, 예약 게시와 Push 지원",
    inhouseNewsSystemDesc: "업로드 예약, Push 알림, 확인자/미확인자 관리",
    inhouseNewsExperienceDesc:
      "1만 사용자 규모에서 확인 집계 지연을 DB 선계산으로 해결. 작은 개선의 큰 효과를 경험",
  },
  en: {
    name: "SANG HO YOUN",
    role: "Full Stack Developer",
    portfolio: "Portfolio",
    resume: "Resume",
    backToHome: "Back to Home",
    heroTitle: "I enjoy creating innovative web solutions.",
    location: "Vancouver, BC, Canada",
    experience: "7+ Years Experience",
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
    freelanceSeoul: "maebe Co., Ltd (remote)",
    maebeCo: "Maebe Co., Ltd",
    vancouverCanada: "Vancouver, Canada",
    seoulKorea: "Seoul, South Korea",
    shizuokaJapan: "Shizuoka, Japan",
    present: "Present",
    // 프로젝트 데이터
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
    moreProjectsNote:
      "More projects will be added soon. Please check back for updates to this continuously evolving portfolio.",
    // New project translations
    dekitanTitle: "Dekitang - Children's Educational Web Application",
    dekitanDesc:
      "Educational web application to increase children's interest in various activities",
    dekitanSystemDesc:
      "The application focuses on increasing children's interest in various activities, where children earn points for daily random activities like helping parents, cleaning, playing with friends, and can use these points as currency in the application.",
    dekitanExperienceDesc:
      "I built the foundation of the application, developed the frontend with Next.js and backend with PHP Laravel framework as requested by the client. I created custom components, pages, and sample pages to help other developers understand easily. However, while I hoped developers would use components in my intended way, some developers wrote independent code, leading to discussions and learning how important it is to establish work guidelines in advance.",
    yomikakiTitle: "Yomikaki - Japanese Reading and Writing Course",
    yomikakiDesc:
      "Japanese hiragana, katakana, and kanji reading and writing practice and examination system",
    yomikakiSystemDesc:
      "A system that provides Japanese language level assessment through reading and writing practice and examinations of hiragana, katakana, and kanji, with the company issuing grade levels. Users practice or take exams by writing answers on designated paper templates, accessing upload pages via QR codes, taking photos of answer templates, uploading them, and receiving pass/fail results via email after AI verification, Python OCR verification, and instructor verification.",
    yomikakiExperienceDesc:
      "I developed the website using Laravel, and for the backend, I used Google Script API as the client was already using it in other systems. I created functionality to find characters needed for verification from photos using Python's OpenCV and to recognize which answer sheet the photo represents. Through this experience, I built the entire system alone, deployed it on AWS for user access, learned to use OpenCV, and importantly, while client requirements changed frequently, instead of being led by client demands as before, I learned to assert my opinions and suggest better directions with current resources.",
    eelLogisticsTitle: "Eel Logistics Management System (うなぎ管理システム)",
    eelLogisticsDesc:
      "Logistics management system for eel company with expansion goals due to existing system aging",
    eelLogisticsSystemDesc:
      "An eel logistics system aimed at expanding existing system functionality as the eel company's existing web system had become outdated. This project used Livewire for frontend and Laravel for backend. I was responsible for creating partial features including eel sales price setting and eel shipping report pages. Although these were parts of the overall functionality, I learned how important it is to consider what other parts are needed and what impact they have when creating features.",
    eelLogisticsExperienceDesc:
      "I created eel sales price setting and eel shipping report pages. Although these were parts of the overall functionality, I learned how important it is to consider what other parts are needed and what impact they have when creating features.",
    transportationTitle: "Transportation Company Base System (不二運輸)",
    transportationDesc:
      "Comprehensive management system for transportation company from customer orders to delivery",
    transportationSystemDesc:
      "A system used by transportation companies to manage orders from customers, plan when and where to pick up goods, when and where to deliver, orders, outsourcing through services, wages, collections, vehicle insurance, vehicle inspections, driver management, and other comprehensive functions.",
    transportationExperienceDesc:
      "I developed the frontend with Next.js and backend with Laravel, and as DevOps before other developers started, I set up development and deployment environments using Docker, created commonly used components and layouts, designed interfaces, and wrote development documents. Through this project, I learned that simply writing documents doesn't mean developers will develop well based on those documents. While many developers do read development documents, some developers bring their own experience and previous development code, causing system conflicts that took considerable time to fix. I learned that enforcing certain rules is also necessary, not just providing development documents.",
    mealTagTitle: "Meal Tag Production System (食札システム)",
    mealTagDesc:
      "Meal tag printing system for large-scale meal distribution tailored to customers",
    mealTagSystemDesc:
      "A system that helps kitchen staff prepare meals according to tag contents by printing meal tags for appropriate distribution to customers in companies that do large-scale meal distribution.",
    mealTagExperienceDesc:
      "I created the system using Laravel and tried to make it convenient for users by showing dashboards tailored to various user roles. This was a failed project experience. I failed by trying to create exactly what the customer wanted based on their demands. Customers are not experts in system development. While meeting customer demands is important, I learned to consider whether what customers demand is actually possible as a system, whether it conflicts with other functions, and which demands should be prioritized.",
    droneDocumentTitle: "Drone Automatic Document Creation System (日本DMC)",
    droneDocumentDesc:
      "Android application to simplify drone document work for government permits",
    droneDocumentSystemDesc:
      "Since government permits are required in specific areas or areas with certain populations, document work is necessary for obtaining permits, requiring considerable data. This system was created to simplify the work by using Android phones for pre-configuration and smartphone functions for simple document creation.",
    droneDocumentExperienceDesc:
      "This was my first experience working on a project with other people, and I learned the importance of code consistency and the need to add comments so others can understand.",
    // Added: new experiences/projects (English)
    harvestKingdomTitle: "Harvest Kingdom (収穫王国 Meetyou)",
    harvestKingdomDesc:
      "Virtual farming game connected to real farms, where in-game cultivation becomes actual crops",
    harvestKingdomSystemDesc:
      "This app aims to let people easily experience agriculture and grow vegetables through gaming. When users cultivate virtual vegetables in the game, the same vegetables are grown on actual farms, and can be exchanged for in-game coins.",
    harvestKingdomExperienceDesc:
      "Received an outsourcing contract to apply design to an existing system. Rushed to judgment thinking it was simple work, but actual development time exceeded the contract fee. To avoid further losses, negotiated with the client company and secured additional compensation. This experience taught me not to hastily conclude even on small tasks.",
    terumoTitle: "System Framework Upgrade - TERUMO Human Create",
    terumoDesc:
      "Migrated servers and upgraded in-house notification and point-purchase system from CakePHP3 to 4 and PHP to 8.x",
    terumoSystemDesc:
      "An internal system for notifications and point-based purchasing. Upgraded framework and runtime to enhance stability and security",
    terumoExperienceDesc:
      "Completed server/framework upgrades smoothly. Addressed findings from a security consultancy (injection concerns), deepening security understanding beyond framework defaults",

    yazakiTitle: "Voltage Drop & Cable Size Selection System - Yazaki",
    yazakiDesc:
      "Ported complex Excel calculations to CakePHP4 so users can estimate cable/size, conditions, and drum selection on the web",
    yazakiSystemDesc:
      "A web system for a specialized cable company to show pricing, feasibility conditions, and drum selection based on customer needs",
    yazakiExperienceDesc:
      "Replicated intricate Excel logic in PHP. Spent significant time validating and correcting legacy Excel errors with the client",

    esTitle: "In-house Esthetic System ‘Es.’",
    esDesc:
      "Membership management, skincare guides, QR-based registration, and menstrual cycle tracking for female customers",
    esSystemDesc:
      "A company system composed of an admin web app and mobile apps",
    esExperienceDesc:
      "Developed iOS/Android app with Flutter. Long-running due to frequent feature/design changes requested by the client",

    nichidaiTitle: "Nichidai Buzan Jr/Sr High School App",
    nichidaiDesc: "Official school app for announcements",
    nichidaiSystemDesc:
      "Provides school notices with Firebase-based push notifications and badges",
    nichidaiExperienceDesc:
      "Built with Flutter; implemented Firebase Notifications and badges",

    kawataSurveyTitle: "In-house Survey System - Kawata Construction",
    kawataSurveyDesc: "Quarterly surveys and results visualization with charts",
    kawataSurveySystemDesc:
      "Create surveys, aggregate results, and display graphs",
    kawataSurveyExperienceDesc:
      "First solo end-to-end delivery with Laravel: requirements → design → build → test → delivery",

    kawataCoreTitle:
      "Core In-house System Enhancements/Maintenance - Kawata Construction",
    kawataCoreDesc:
      "Added features and maintenance to a mission-critical enterprise web system",
    kawataCoreSystemDesc:
      "Large-scale company-wide operations/management system",
    kawataCoreExperienceDesc:
      "Felt the impact of fragmented legacy code on maintainability; reinforced the need for sustainable coding standards",

    sonarTitle: "Long-duration Sonar Recording Device",
    sonarDesc:
      "Raspberry Pi-based solution to record sonar data for 72h+ with viewer-compatible file format",
    sonarSystemDesc:
      "Captured binary data over wired connection and reconstructed files to be readable by the vendor’s viewer",
    sonarExperienceDesc:
      "Learned Python/Raspberry Pi, binary sniffing, and reverse-engineering record formats",

    inhouseNewsTitle: "In-house News System (Multiple Companies)",
    inhouseNewsDesc:
      "CakePHP web + Android app for internal announcements with scheduled posts and push notifications",
    inhouseNewsSystemDesc:
      "Scheduling, push delivery, and read/unread management",
    inhouseNewsExperienceDesc:
      "Solved 10k-user read-aggregation latency by precomputing in DB; small change, big impact",
  },
  ja: {
    name: "ユン・サンホ (Sam)",
    role: "フルスタック開発者",
    portfolio: "ポートフォリオ",
    resume: "履歴書",
    backToHome: "ホームに戻る",
    heroTitle: "革新的なWebソリューションを作ることを楽しんでいます。",
    location: "バンクーバー、BC、カナダ",
    experience: "7年以上の経験",
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
    freelanceSeoul: "株式会社 まえびー (remote)",
    maebeCo: "Maebe Co., Ltd",
    vancouverCanada: "バンクーバー、カナダ",
    seoulKorea: "ソウル、韓国",
    shizuokaJapan: "静岡、日本",
    present: "現在",
    // プロジェクトデータ
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
    moreProjectsNote:
      "より多くのプロジェクトが近日追加予定です。継続的に更新されるポートフォリオをご確認ください。",
    // 新しいプロジェクト翻訳
    dekitanTitle: "デキタン - 子供向け教育ウェブアプリケーション",
    dekitanDesc:
      "子供たちの様々な活動への興味を高める教育ウェブアプリケーション",
    dekitanSystemDesc:
      "アプリケーションを通じて子供たちの様々な活動への興味を高めることに重点を置き、毎日ランダムに選ばれる行動（親を手伝う、掃除をする、友達と遊びに行くなど）をした時にポイントを獲得し、そのポイントを通貨として利用できるアプリケーションです。",
    dekitanExperienceDesc:
      "アプリケーションの基盤を作り、フロントエンドはNext.jsで、バックエンドはクライアントの要求によりPHP Laravelフレームワークで制作しました。全体的に使用されるカスタムコンポーネントとページ、サンプルページを作成して他の開発者が理解しやすくしました。しかし、私が考える方向でコンポーネントを利用してほしかったのですが、何人かの開発者は独自のコードを書く場合があり、これについて議論があり、事前に作業規定がどれほど重要なのかを知ることができました。",
    yomikakiTitle: "よみかき - 日本語読み書き科目",
    yomikakiDesc:
      "日本語のひらがな、カタカナ、漢字の読み書き練習および試験システム",
    yomikakiSystemDesc:
      "日本語のひらがな、カタカナ、漢字などの読み書き練習および試験を受けて、本社が発行する級数で日本語レベルを知らせるシステムです。使用方法は、練習または試験は与えられた問題に対して定められた紙テンプレートに解答を書き、与えられたQRでアップロードページにアクセスして解答を書いたテンプレートを写真に撮ってアップロード後、AI検証、Python OCR検証、講師検証で点数を付け、合格不合格結果をメールで知らせる機能を持っています。",
    yomikakiExperienceDesc:
      "Laravelでウェブサイトを制作し、バックエンドの場合はクライアントがすでにGoogle Script APIを他のシステムで使用していたため、同じように使用しました。PythonのOpenCVを利用して写真から検証に必要な文字を見つけることと、この写真が何番目の解答用紙かを認識する機能を制作しました。経験として、全体システムを一人で制作し、AWSに上げてユーザーが使用できるようにし、OpenCVを新しく利用することを知り、クライアントからの要求が継続的に変わるのが多かったのですが、以前はクライアントの言葉に引っ張られて多くの時間を消費していましたが、今回は自分が主張を述べ、現在持っているリソースでは困難またはこの方向が良いということを提示して、その方向で進行しました。",
    eelLogisticsTitle: "うなぎ物流管理システム",
    eelLogisticsDesc:
      "うなぎ会社の既存システム老朽化による拡張目標の物流管理システム",
    eelLogisticsSystemDesc:
      "うなぎ会社で既存に使用していたウェブシステムが老朽化して既存システム機能を含む拡張を目標としたうなぎ物流システムで、今回のプロジェクトはフロントエンドはLivewire、バックエンドはLaravelを使用しました。私は部分的な機能を制作する業務を担当しました。作った機能はうなぎ販売価格設定、うなぎ出荷表ページでした。全体機能中の部分でしたが、その機能を作るためにどのような他の部分が必要でどのような影響を与えるかを考えながら作り、このような考えが作りながらも非常に重要だということを再び感じました。",
    eelLogisticsExperienceDesc:
      "うなぎ販売価格設定とうなぎ出荷表ページを制作しました。全体機能中の部分でしたが、その機能を作るためにどのような他の部分が必要でどのような影響を与えるかを考えながら作り、このような考えが作りながらも非常に重要だということを再び感じました。",
    transportationTitle: "運輸会社基盤システム（不二運輸）",
    transportationDesc:
      "運輸会社で使用する顧客からの注文から配送までの総括的管理システム",
    transportationSystemDesc:
      "運輸会社で使用するシステムで、顧客から注文を受け、いつどこで荷物を受け取り、いつどこに配送するかを計画、発注、役務を通じた外注、賃金、収金、車両保険、車両検査、運転者管理などの総括的システムです。",
    transportationExperienceDesc:
      "フロントエンドをNext.js、バックエンドをLaravelで作り、他の開発者が開発する前に基盤となるDevOpsでDockerを利用した開発環境および配布環境構成、共通的に利用されるコンポーネント作成およびレイアウト、インターフェース構成、開発に必要なドキュメント作成を行いました。このプロジェクトで経験した部分は、単純に文書を作成することで開発者がその文書を通じて開発をよくしないということでした。もちろん多数の開発者は開発文書を見ますが、何人かの開発者の場合は自分の経験と以前の開発コードを持ってきて使う場合があり、システムに衝突が発生してこれらの部分を直すのにかなり多くの時間がかかりました。それで単純に開発文書を提供するのではなく、いくつかのルールを強制することも必要だということを知りました。",
    mealTagTitle: "食札制作システム",
    mealTagDesc: "大規模食事配給のための顧客別カスタム食事札出力システム",
    mealTagSystemDesc:
      "大規模食事配給をする会社で顧客に応じて適切な配給をするための食事札を出力して、キッチンで札の内容に合わせて食事を作ることができるように助けるシステムです。",
    mealTagExperienceDesc:
      "Laravelを利用してシステムを作り、様々なユーザーの役割に合わせてダッシュボードを見せてユーザーが便利に作ろうと努力しました。経験として失敗したプロジェクトでした。ただ顧客の要求を聞いて顧客が望むシステムを作ろうとしているうちに失敗しました。顧客はシステム開発の専門家ではありません。顧客の要求に合わせて作ることも重要ですが、顧客が要求するものが実際のシステムとして可能か、または他の機能と問題を起こさないか、そのような調和とどの部分の要求を最も重点的に考えるべきか、そのような部分を勉強することになりました。",
    droneDocumentTitle: "ドローン自動書類作成システム（日本DMC）",
    droneDocumentDesc:
      "政府許可のためのドローンドキュメント作業を簡素化するAndroidアプリケーション",
    droneDocumentSystemDesc:
      "特定地域または一定人口がある地域では政府の許可が必要で、許可を受けるための書類作業が必要ですが、かなり多くの資料が必要なので、より簡単に作業ができるようにAndroidフォンで事前設定およびスマートフォンの機能を利用して簡単に書類作成機能を制作しました。",
    droneDocumentExperienceDesc:
      "初めて他の人たちと一つのプロジェクトを制作する経験を持ち、コードの統一性と他の人たちが理解できるようにコメントを付けなければならないかについての重要性を経験しました。",
    // 追加: 新規プロジェクト（日本語）
    harvestKingdomTitle: "収穫王国 ミートユ",
    harvestKingdomDesc:
      "実農場と連動した仮想農業体験ゲーム、ゲーム内栽培が現実の作物に",
    harvestKingdomSystemDesc:
      "このアプリは、人々が手軽に農業を体験し、直接野菜を育てることができるゲームを目指しています。ゲーム内で仮想的に野菜を栽培すると、実際の農家でも同じ野菜が栽培され、ゲーム内のコインで交換することもできます。",
    harvestKingdomExperienceDesc:
      "外注業務としてすでに作られたシステムにデザインを適用する作業を受けました。簡単な作業だと急いで判断したため、実際の開発時間が外注費を超える問題が発生しました。これ以上損失を出すわけにはいかず、発注元の顧客会社と協議の結果、追加金額を受け取ることができました。この経験で、小さな仕事でも軽率に結論を出してはいけないことを学びました。",
    terumoTitle:
      "システムフレームワークアップグレード - テルモヒューマンクリエイト",
    terumoDesc:
      "社内通知・ポイント購入システムのサーバ移行およびCakePHP3→4、PHP8系へアップグレード",
    terumoSystemDesc:
      "社内通知とポイントによる物品購入を行うシステム。フレームワーク/実行環境更新で安定性とセキュリティを強化",
    terumoExperienceDesc:
      "移行自体は問題なく完了。セキュリティ診断で指摘されたインジェクション懸念に対処し、フレームワーク標準を超える防御の必要性を学習",

    yazakiTitle: "電圧降下・サイズ選定システム - 矢崎電線",
    yazakiDesc:
      "Excel計算ロジックをCakePHP4に移植し、ケーブル/サイズ別見積・条件・ドラム選定をWebで提供",
    yazakiSystemDesc:
      "専門電線会社向けに価格や可否条件、ドラム選定を表示するWebシステム",
    yazakiExperienceDesc:
      "複雑なExcel計算をPHPで等価再現。既存Excelの誤りを発見し、顧客と検証/対応方針を調整",

    esTitle: "エステ自社システム Es.",
    esDesc:
      "会員管理、スキンケアガイド、QR登録、生理周期管理など女性向け機能を提供",
    esSystemDesc: "管理用Webとモバイルアプリで構成された会社システム",
    esExperienceDesc:
      "FlutterでiOS/Androidアプリを同時開発。頻繁な機能/デザイン変更に長期対応",

    nichidaiTitle: "日大豊山中学・高校 公式アプリ",
    nichidaiDesc: "学校のお知らせ配信アプリ",
    nichidaiSystemDesc: "Firebaseベースのプッシュ通知とバッジ処理を実装",
    nichidaiExperienceDesc: "Flutter制作、Firebase通知/バッジ対応",

    kawataSurveyTitle: "社内アンケートシステム - 加和太建設",
    kawataSurveyDesc:
      "四半期ごとのアンケート作成と結果グラフ可視化を行うWebシステム",
    kawataSurveySystemDesc: "アンケート作成、集計、グラフ表示",
    kawataSurveyExperienceDesc:
      "Laravelで要件定義→設計→開発→テスト→納品まで単独遂行。初のE2E担当",

    kawataCoreTitle: "社内基盤システム 機能拡張/保守 - 加和太建設",
    kawataCoreDesc: "基幹業務Webシステムへの機能追加と保守",
    kawataCoreSystemDesc: "全社的な業務/管理用の大規模Webシステム",
    kawataCoreExperienceDesc:
      "断片化したレガシーコードが保守性に与える影響を痛感。持続可能なコーディング規律の重要性を再認識",

    sonarTitle: "音波探知 長時間記録装置",
    sonarDesc:
      "Raspberry Piで音波探知データを72時間以上記録し、ビューア互換形式で出力",
    sonarSystemDesc:
      "有線でバイナリデータを取得し、既存ビューアで閲覧可能なファイル形式に再構成",
    sonarExperienceDesc:
      "Python/Raspberry Pi、バイナリスニッフィングとフォーマットのリバースエンジニアリングを習得",

    inhouseNewsTitle: "社内ニュースシステム（複数社納品）",
    inhouseNewsDesc:
      "CakePHP Web/Androidアプリによるお知らせ配信、予約投稿とPushに対応",
    inhouseNewsSystemDesc: "予約投稿、Push配信、既読/未読管理",
    inhouseNewsExperienceDesc:
      "1万人規模での既読集計遅延をDB先計算で解消。小さな改善の大きな効果を実感",
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
  startDate: string;
  endDate: string;
  systemDescription: string;
  experienceDescription: string;
}

interface Experience {
  position: string;
  company: string;
  location: string;
  years: string;
  tasks: string[];
}

export default function PortfolioPage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("ko");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const t = translations[currentLanguage];

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

  // 언어 변경 시 저장
  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", language);
    }
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

  const projects: Project[] = [
    {
      id: 1,
      title: t.harvestKingdomTitle,
      description: t.harvestKingdomDesc,
      techStack: ["React Native", "Laravel", "MySQL"],
      demoUrl: null,
      githubUrl: null,
      featured: true,
      imageUrl: "/projects/try_farming.jpg",
      startDate: "2025.02",
      endDate: "2025.02",
      systemDescription: t.harvestKingdomSystemDesc,
      experienceDescription: t.harvestKingdomExperienceDesc,
    },
    {
      id: 2,
      title: t.dekitanTitle,
      description: t.dekitanDesc,
      techStack: ["Next.js", "Laravel", "MySQL"],
      demoUrl: "https://hellofamily.kokuyo.co.jp/view/page/wakuwaku",
      githubUrl: null,
      featured: true,
      imageUrl: "/projects/dekitan.jpg",
      startDate: "2025.02",
      endDate: "2025.05",
      systemDescription: t.dekitanSystemDesc,
      experienceDescription: t.dekitanExperienceDesc,
    },
    {
      id: 3,
      title: t.yomikakiTitle,
      description: t.yomikakiDesc,
      techStack: ["Laravel", "Python", "OpenCV", "Google Script API"],
      demoUrl: null,
      githubUrl: null,
      featured: true,
      imageUrl: "/projects/yomikaki.jpg",
      startDate: "2025.02",
      endDate: "2025.07",
      systemDescription: t.yomikakiSystemDesc,
      experienceDescription: t.yomikakiExperienceDesc,
    },
    {
      id: 4,
      title: t.eelLogisticsTitle,
      description: t.eelLogisticsDesc,
      techStack: ["Laravel", "Livewire", "MySQL"],
      demoUrl: null,
      githubUrl: null,
      featured: true,
      imageUrl: "/projects/eel-logistics.jpg",
      startDate: "2025.02",
      endDate: "2025.06",
      systemDescription: t.eelLogisticsSystemDesc,
      experienceDescription: t.eelLogisticsExperienceDesc,
    },
    {
      id: 5,
      title: t.transportationTitle,
      description: t.transportationDesc,
      techStack: ["Next.js", "Laravel", "Docker", "MySQL"],
      demoUrl: null,
      githubUrl: null,
      featured: false,
      imageUrl: "/projects/transportation.jpg",
      startDate: "2023.03",
      endDate: "2024.09",
      systemDescription: t.transportationSystemDesc,
      experienceDescription: t.transportationExperienceDesc,
    },
    {
      id: 6,
      title: t.mealTagTitle,
      description: t.mealTagDesc,
      techStack: ["Laravel", "MySQL", "JavaScript"],
      demoUrl: null,
      githubUrl: null,
      featured: false,
      imageUrl: "/projects/meal-tag.jpg",
      startDate: "2022.10",
      endDate: "2023.03",
      systemDescription: t.mealTagSystemDesc,
      experienceDescription: t.mealTagExperienceDesc,
    },
    {
      id: 7,
      title: t.droneDocumentTitle,
      description: t.droneDocumentDesc,
      techStack: ["Android", "Java", "SQLite"],
      demoUrl: null,
      githubUrl: null,
      featured: false,
      imageUrl: "/projects/drone-document.jpeg",
      startDate: "2018.05",
      endDate: "2018.09",
      systemDescription: t.droneDocumentSystemDesc,
      experienceDescription: t.droneDocumentExperienceDesc,
    },
    {
      id: 8,
      title: t.terumoTitle,
      description: t.terumoDesc,
      techStack: ["CakePHP4", "PHP 8", "MySQL"],
      demoUrl: "https://www.terumohumancreate.co.jp/",
      githubUrl: null,
      featured: false,
      imageUrl: "https://picsum.photos/seed/terumo/800/480",
      startDate: "2022.08",
      endDate: "2023.04",
      systemDescription: t.terumoSystemDesc,
      experienceDescription: t.terumoExperienceDesc,
    },
    {
      id: 9,
      title: t.yazakiTitle,
      description: t.yazakiDesc,
      techStack: ["CakePHP4", "PHP", "MySQL"],
      demoUrl: null,
      githubUrl: null,
      featured: false,
      imageUrl: "https://picsum.photos/seed/yazaki/800/480",
      startDate: "2022.08",
      endDate: "2023.05",
      systemDescription: t.yazakiSystemDesc,
      experienceDescription: t.yazakiExperienceDesc,
    },
    {
      id: 10,
      title: t.esTitle,
      description: t.esDesc,
      techStack: ["Flutter", "Firebase"],
      demoUrl: null,
      githubUrl: null,
      featured: false,
      imageUrl: "https://picsum.photos/seed/esthetic/800/480",
      startDate: "2021.12",
      endDate: "2022.12",
      systemDescription: t.esSystemDesc,
      experienceDescription: t.esExperienceDesc,
    },
    {
      id: 11,
      title: t.nichidaiTitle,
      description: t.nichidaiDesc,
      techStack: ["Flutter", "Firebase"],
      demoUrl:
        "https://play.google.com/store/apps/details?id=jp.co.maebe.nichidaibuzan",
      githubUrl: null,
      featured: false,
      imageUrl: "https://picsum.photos/seed/nichidai/800/480",
      startDate: "2021.09",
      endDate: "2021.11",
      systemDescription: t.nichidaiSystemDesc,
      experienceDescription: t.nichidaiExperienceDesc,
    },
    {
      id: 12,
      title: t.kawataSurveyTitle,
      description: t.kawataSurveyDesc,
      techStack: ["Laravel", "MySQL"],
      demoUrl: null,
      githubUrl: null,
      featured: false,
      imageUrl: "https://picsum.photos/seed/kawata-survey/800/480",
      startDate: "2020.01",
      endDate: "2020.06",
      systemDescription: t.kawataSurveySystemDesc,
      experienceDescription: t.kawataSurveyExperienceDesc,
    },
    {
      id: 13,
      title: t.kawataCoreTitle,
      description: t.kawataCoreDesc,
      techStack: ["Laravel", "PHP", "MySQL"],
      demoUrl: null,
      githubUrl: null,
      featured: false,
      imageUrl: "https://picsum.photos/seed/kawata-core/800/480",
      startDate: "2019.09",
      endDate: "2020.03",
      systemDescription: t.kawataCoreSystemDesc,
      experienceDescription: t.kawataCoreExperienceDesc,
    },
    {
      id: 14,
      title: t.sonarTitle,
      description: t.sonarDesc,
      techStack: ["Python", "Raspberry Pi"],
      demoUrl: null,
      githubUrl: null,
      featured: false,
      imageUrl: "https://picsum.photos/seed/sonar/800/480",
      startDate: "2019.04",
      endDate: "2019.07",
      systemDescription: t.sonarSystemDesc,
      experienceDescription: t.sonarExperienceDesc,
    },
    {
      id: 15,
      title: t.inhouseNewsTitle,
      description: t.inhouseNewsDesc,
      techStack: ["CakePHP", "Android", "Firebase"],
      demoUrl: null,
      githubUrl: null,
      featured: false,
      imageUrl: "https://picsum.photos/seed/inhouse-news/800/480",
      startDate: "2019.04",
      endDate: "2021.06",
      systemDescription: t.inhouseNewsSystemDesc,
      experienceDescription: t.inhouseNewsExperienceDesc,
    },
  ].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  const experiences: Experience[] = [
    {
      position: "Full Stack Engineer",
      company: t.freelanceVancouver,
      location: t.vancouverCanada,
      years: `2024 - ${t.present}`,
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
      years: "2020 - 2024",
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
      <Navigation
        currentPage="portfolio"
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Content */}
      <main
        style={{
          marginTop: "70px",
          minHeight: "calc(100vh - 70px)",
          padding: isMobile ? "1rem 0.5rem" : "2rem 1rem",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            padding: isMobile ? "0.5rem" : "2rem",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Hero Section */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
              borderRadius: isMobile ? "8px" : "12px",
              padding: isMobile ? "1.5rem 1rem" : "3rem 2rem",
              color: "white",
              marginBottom: isMobile ? "1rem" : "2rem",
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
                  overflow: "hidden",
                  border: "3px solid rgba(0, 188, 212, 0.3)",
                }}
              >
                <Image
                  src="/Profiles/my_picture.jpg"
                  alt="Youn Sang Ho"
                  width={120}
                  height={120}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "300px 1fr",
              gap: isMobile ? "1.5rem" : "2rem",
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
                  borderRadius: isMobile ? "8px" : "12px",
                  padding: isMobile ? "1rem" : "1.5rem",
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
                  borderRadius: isMobile ? "8px" : "12px",
                  padding: isMobile ? "1rem" : "1.5rem",
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
                        { name: "Swift4", iconId: "swift" },
                        { name: "Kotlin", iconId: "kotlin" },
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
                            <Image
                              src={`https://skillicons.dev/icons?i=${skill.iconId}`}
                              alt={skill.name}
                              width={16}
                              height={16}
                              unoptimized
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
                  borderRadius: isMobile ? "8px" : "12px",
                  padding: isMobile ? "1rem" : "2rem",
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
                        borderRadius: isMobile ? "8px" : "12px",
                        padding: isMobile ? "1rem" : "1.5rem",
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
                          flexDirection: isMobile ? "column" : "row",
                          flexWrap: "wrap",
                        }}
                      >
                        <div
                          style={{
                            width: isMobile ? "100%" : "200px",
                            flexShrink: 0,
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: isMobile ? "180px" : "120px",
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
                            <div
                              style={{
                                fontSize: "0.75rem",
                                color: "#00bcd4",
                                fontWeight: "500",
                                background: "rgba(0, 188, 212, 0.1)",
                                padding: "0.25rem 0.5rem",
                                borderRadius: "4px",
                                display: "inline-block",
                                marginTop: "0.5rem",
                              }}
                            >
                              {project.startDate} - {project.endDate}
                            </div>
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

                  {/* More Projects Notice */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
                      border: "1px solid #dee2e6",
                      borderRadius: "12px",
                      padding: "2rem",
                      marginTop: "2rem",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        marginBottom: "1rem",
                      }}
                    >
                      🚀
                    </div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#333",
                        margin: "0 0 0.75rem 0",
                      }}
                    >
                      {t.moreProjectsNote}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#666",
                        margin: 0,
                        fontStyle: "italic",
                      }}
                    >
                      새로운 프로젝트와 기술적 성장을 지속적으로 기록하고
                      있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Contact Button */}
      <ContactFab
        label={t.contactMe}
        title={t.contactMe}
        onClick={() => setIsContactOpen(true)}
      />

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
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#00bcd4",
                    fontWeight: "500",
                    background: "rgba(0, 188, 212, 0.1)",
                    padding: "0.5rem 1rem",
                    borderRadius: "6px",
                    display: "inline-block",
                    marginBottom: "1rem",
                  }}
                >
                  {selectedProject.startDate} - {selectedProject.endDate}
                </div>
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

            {/* System Description */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#333",
                  margin: "0 0 0.75rem 0",
                }}
              >
                시스템 설명
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {selectedProject.systemDescription}
              </p>
            </div>

            {/* Experience Description */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#333",
                  margin: "0 0 0.75rem 0",
                }}
              >
                작업 내용 및 경험
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {selectedProject.experienceDescription}
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
