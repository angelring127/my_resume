# Product Requirements Document (PRD)

## SANG HO YOUN Portfolio Website - Next.js Migration

### 1. 프로젝트 개요

#### 1.1 프로젝트 목적

현재 HTML/CSS/JavaScript로 구축된 SANG HO YOUN의 개인 포트폴리오 웹사이트를 Next.js 기반의 현대적인 웹 애플리케이션으로 마이그레이션하여 성능, SEO, 사용자 경험을 향상시킨다.

#### 1.2 비즈니스 목표

- **개발자 브랜딩 강화**: 전문적인 포트폴리오를 통한 개인 브랜드 구축
- **채용 기회 확대**: 향상된 SEO와 성능으로 더 많은 채용 기회 창출
- **기술 역량 시연**: Next.js, React 등 현대적 기술 스택 활용 능력 입증

#### 1.3 타겟 사용자

- **주요 사용자**: 잠재적 고용주, 클라이언트, 개발자 동료
- **보조 사용자**: 개발 커뮤니티, 네트워킹 대상

### 2. 현재 상태 분석

#### 2.1 기존 기능

- **랜딩 페이지**: 포트폴리오/이력서 선택 인터페이스
- **포트폴리오 페이지**: 프로젝트 소개, 경력, 기술 스택
- **이력서 페이지**: 상세 경력, 교육, 연락처 정보
- **다국어 지원**: 한국어/영어/일본어 지원
- **반응형 디자인**: 모바일/데스크톱 대응
- **모달 기반 UI**: 연락처, 기술 스택 상세 정보

#### 2.2 현재 기술 스택

- HTML5, CSS3, Vanilla JavaScript
- 다국어 지원 시스템 (LanguageManager)
- SVG 아이콘, Google Fonts
- 반응형 그리드 레이아웃

### 3. Next.js 마이그레이션 요구사항

#### 3.1 핵심 기능 요구사항

**3.1.1 페이지 구조**

- `/` - 랜딩 페이지 (포트폴리오/이력서 선택)
- `/portfolio` - 포트폴리오 페이지
- `/resume` - 이력서 페이지
- `/contact` - 연락처 페이지 (새로 추가)

**3.1.2 다국어 지원**

- Next.js i18n 라우팅 활용
- 한국어 (`/ko`), 영어 (`/en`), 일본어 (`/ja`)
- 언어별 SEO 최적화

**3.1.3 반응형 디자인**

- Mobile First 접근법
- Tailwind CSS 활용
- 다크/라이트 모드 지원

#### 3.2 기술적 개선사항

**3.2.1 성능 최적화**

- **SSR/SSG**: 정적 사이트 생성으로 로딩 속도 개선
- **이미지 최적화**: Next.js Image 컴포넌트 활용
- **코드 분할**: 동적 임포트로 번들 크기 최적화
- **캐싱 전략**: ISR(Incremental Static Regeneration) 활용

**3.2.2 SEO 최적화**

- **메타데이터**: 동적 메타 태그 생성
- **구조화된 데이터**: JSON-LD 스키마 마크업
- **사이트맵**: 자동 생성 및 제출
- **Open Graph**: 소셜 미디어 최적화

**3.2.3 개발자 경험**

- **TypeScript**: 타입 안정성 확보
- **ESLint/Prettier**: 코드 품질 관리
- **Husky**: Git hooks 자동화
- **Storybook**: 컴포넌트 문서화

#### 3.3 새로운 기능

**3.3.1 블로그 섹션**

- `/blog` - 기술 블로그 페이지
- MDX 기반 콘텐츠 관리
- 태그/카테고리 시스템

**3.3.2 프로젝트 상세 페이지**

- `/projects/[slug]` - 개별 프로젝트 상세 페이지
- 동적 라우팅으로 확장성 확보

**3.3.3 연락처 폼**

- 이메일 전송 기능
- 스팸 방지 (reCAPTCHA)
- 이메일 템플릿

### 4. 기술 스택

#### 4.1 프론트엔드

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion

#### 4.2 백엔드/서비스

- **Hosting**: Vercel
- **Email**: Resend API
- **Analytics**: Vercel Analytics
- **Forms**: React Hook Form + Zod

#### 4.3 개발 도구

- **Package Manager**: pnpm
- **Linting**: ESLint + Prettier
- **Testing**: Jest + Testing Library
- **Documentation**: Storybook

### 5. 디자인 시스템

#### 5.1 컬러 팔레트

```css
:root {
  --primary: #00bcd4;
  --primary-dark: #0097a7;
  --secondary: #f5f5f5;
  --text: #333333;
  --text-light: #666666;
  --background: #ffffff;
  --surface: #f8f9fa;
}
```

#### 5.2 타이포그래피

- **Primary Font**: Inter (Google Fonts)
- **Secondary Font**: Source Serif Pro
- **Font Weights**: 400, 500, 600, 700

#### 5.3 컴포넌트 시스템

- **Button**: Primary, Secondary, Ghost variants
- **Card**: Project, Experience, Skill cards
- **Modal**: Contact, Project details
- **Navigation**: Header, Sidebar, Mobile menu

### 6. 성능 목표

#### 6.1 Core Web Vitals

- **LCP**: < 2.5초
- **FID**: < 100ms
- **CLS**: < 0.1

#### 6.2 기타 지표

- **First Contentful Paint**: < 1.5초
- **Time to Interactive**: < 3초
- **Bundle Size**: < 500KB (gzipped)

### 7. SEO 전략

#### 7.1 메타데이터

- **Title**: "SANG HO YOUN - Full Stack Developer | Vancouver, Canada"
- **Description**: "Full Stack Developer with 7+ years experience in React, Next.js, Laravel, Python. Based in Vancouver, Canada."
- **Keywords**: "Full Stack Developer, React, Next.js, Laravel, Python, Vancouver, Remote Work"

#### 7.2 구조화된 데이터

- **Person Schema**: 개발자 정보
- **Organization Schema**: 경력 정보
- **Project Schema**: 프로젝트 포트폴리오

### 8. 배포 및 호스팅

#### 8.1 배포 전략

- **Platform**: Vercel
- **Domain**: Custom domain 연결
- **SSL**: 자동 HTTPS
- **CDN**: 글로벌 엣지 네트워크

#### 8.2 CI/CD

- **GitHub Actions**: 자동 배포
- **Preview Deployments**: PR별 미리보기
- **Analytics**: 성능 모니터링

### 9. 마이그레이션 계획

#### 9.1 Phase 1: 기초 설정 (1주)

- Next.js 프로젝트 초기화
- TypeScript 설정
- Tailwind CSS 설정
- 기본 라우팅 구조

#### 9.2 Phase 2: 페이지 마이그레이션 (2주)

- 랜딩 페이지 구현
- 포트폴리오 페이지 구현
- 이력서 페이지 구현
- 다국어 지원 구현

#### 9.3 Phase 3: 기능 개선 (1주)

- 성능 최적화
- SEO 최적화
- 접근성 개선
- 모바일 최적화

#### 9.4 Phase 4: 배포 및 최적화 (1주)

- Vercel 배포
- 도메인 연결
- 성능 모니터링
- 사용자 피드백 수집

### 10. 성공 지표

#### 10.1 기술적 지표

- **Lighthouse Score**: 90+ (모든 카테고리)
- **Bundle Size**: 50% 감소
- **Loading Speed**: 3배 향상

#### 10.2 비즈니스 지표

- **페이지 뷰**: 20% 증가
- **체류 시간**: 30% 증가
- **연락처 문의**: 50% 증가

### 11. 위험 요소 및 대응 방안

#### 11.1 기술적 위험

- **SEO 영향**: 점진적 마이그레이션으로 검색 순위 유지
- **성능 저하**: 성능 모니터링으로 실시간 대응
- **브라우저 호환성**: 크로스 브라우저 테스트

#### 11.2 일정 위험

- **기능 누락**: 체크리스트 기반 검증
- **디자인 일관성**: 디자인 시스템 철저한 준수
- **다국어 지원**: 언어별 QA 테스트

### 12. 결론

Next.js 마이그레이션을 통해 현대적이고 확장 가능한 포트폴리오 웹사이트를 구축하여 개발자 브랜딩을 강화하고 채용 기회를 확대할 수 있다. 성능, SEO, 사용자 경험의 종합적 개선을 통해 경쟁력 있는 개인 브랜드를 구축할 수 있을 것이다.
