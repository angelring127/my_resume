// 다국어 지원 타입 정의
export type Locale = "ko" | "en" | "ja";

// 프로젝트 정보 타입
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "backend" | "fullstack";
}

// 경력 정보 타입
export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

// 기술 스택 타입
export interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "mobile" | "other";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
}

// 연락처 정보 타입
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  blog: string;
  portfolio: string;
}

// 다국어 메시지 타입
export interface Messages {
  main: {
    title: string;
    subtitle: string;
    description: string;
    portfolioButton: string;
    resumeButton: string;
  };
  nav: {
    portfolio: string;
    resume: string;
    contact: string;
    backToHome: string;
  };
  portfolio: {
    name: string;
    tagline: string;
    careerTitle: string;
    stackTitle: string;
    projectsTitle: string;
    career: {
      freelance1: {
        position: string;
        company: string;
        tasks: string[];
      };
      freelance2: {
        position: string;
        company: string;
        tasks: string[];
      };
      maebe: {
        position: string;
        company: string;
        tasks: string[];
      };
    };
    stack: {
      frontend: string;
      backend: string;
      devops: string;
    };
    projects: {
      transport: {
        title: string;
        description: string;
        demo: string;
        github: string;
      };
      warehouse: {
        title: string;
        description: string;
        demo: string;
        github: string;
      };
      cinemee: {
        title: string;
        description: string;
        playstore: string;
        github: string;
      };
    };
  };
  resume: {
    name: string;
    title: string;
    sections: {
      technicalSkills: string;
      professionalSummary: string;
      professionalExperience: string;
      education: string;
      languages: string;
    };
    skills: {
      frontend: string;
      backend: string;
      devops: string;
      frontendSkills: string;
      backendSkills: string;
      devopsSkills: string;
    };
    summary: string;
    education: {
      university: {
        title: string;
        school: string;
      };
      military: {
        title: string;
        service: string;
      };
    };
    languages: string;
  };
  profile: {
    experience: string;
    location: string;
    languages: string;
    contactMe: string;
  };
  login: {
    title: string;
    subtitle: string;
    welcome: string;
    sectionLabel: string;
    portfolioDesc: string;
    resumeDesc: string;
    footer: string;
    feature1: string;
    feature2: string;
    feature3: string;
  };
}

// 컴포넌트 Props 타입
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: string;
  actions?: React.ReactNode;
}

// 폼 타입
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// SEO 메타데이터 타입
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}
