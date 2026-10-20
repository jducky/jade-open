// 모든 데이터는 가상의 예시입니다.
const PROFILE = {
  name: "한지안 (Jian Han)",
  role: "풀스택 개발자 · UX 엔지니어",
  location: "서울, 대한민국",
  tagline: "복잡한 문제를 단순하고 아름다운 경험으로 바꾸는 개발자",
  about: [
    "안녕하세요, 8년 차 풀스택 개발자 한지안입니다. 스타트업과 대기업을 오가며 웹 서비스, 데이터 시각화, 디자인 시스템을 만들어 왔습니다.",
    "사용자가 느끼는 작은 불편을 코드로 해결하는 일을 좋아합니다. 주말에는 사이드 프로젝트를 만들고, 한 달에 한 번 지역 개발자 모임에서 발표합니다.",
    "커피, 러닝, 보드게임, 그리고 오래된 필름 카메라를 좋아합니다."
  ],
  contact: {
    email: "hello@example.com",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
    blog: "https://blog.example.com",
    phone: "010-0000-0000"
  }
};

const STATS = [
  { label: "경력", value: "8년" },
  { label: "완료 프로젝트", value: "42개" },
  { label: "오픈소스 기여", value: "130+" },
  { label: "발표/강연", value: "17회" }
];

const SKILLS = [
  { group: "프론트엔드", items: [["TypeScript", 95], ["React", 92], ["Next.js", 88], ["CSS / Tailwind", 90], ["Svelte", 70]] },
  { group: "백엔드", items: [["Node.js", 88], ["Go", 72], ["Python", 80], ["PostgreSQL", 85], ["Redis", 75]] },
  { group: "인프라 / 도구", items: [["Docker", 82], ["AWS", 78], ["GitHub Actions", 86], ["Terraform", 60], ["Figma", 74]] }
];

const PROJECTS = [
  { title: "Lumen Dashboard", tag: "웹앱", year: 2025, desc: "실시간 매출·트래픽을 한눈에 보는 분석 대시보드. 10만 건 이벤트를 60fps로 렌더링.", stack: ["React", "D3", "WebSocket"], stars: 842 },
  { title: "Mori 노트", tag: "모바일", year: 2025, desc: "마크다운 기반 오프라인 우선 메모 앱. 기기 간 충돌 없는 동기화(CRDT) 구현.", stack: ["React Native", "SQLite", "CRDT"], stars: 615 },
  { title: "Bloom 디자인 시스템", tag: "디자인", year: 2024, desc: "60개 컴포넌트와 다크 모드를 지원하는 사내 디자인 시스템. 접근성 AA 준수.", stack: ["TypeScript", "Storybook", "Figma"], stars: 1203 },
  { title: "Tidy CLI", tag: "CLI", year: 2024, desc: "다운로드 폴더를 규칙에 따라 자동 정리하는 Go 기반 명령줄 도구.", stack: ["Go", "Cobra"], stars: 389 },
  { title: "Harbor 예약", tag: "웹앱", year: 2023, desc: "소규모 공방을 위한 예약·결제 플랫폼. 월 3,000건 예약 처리.", stack: ["Next.js", "Stripe", "PostgreSQL"], stars: 147 },
  { title: "Pixel Weather", tag: "사이드", year: 2023, desc: "도트 감성 날씨 위젯. 하루 1,200명이 사용하는 브라우저 확장 프로그램.", stack: ["Svelte", "Canvas"], stars: 274 },
  { title: "Echo 로그 분석기", tag: "데이터", year: 2022, desc: "서버 로그에서 이상 징후를 찾아 슬랙으로 알려주는 파이프라인.", stack: ["Python", "Kafka", "Grafana"], stars: 96 },
  { title: "Sprout 학습 플랫폼", tag: "웹앱", year: 2021, desc: "초등학생용 코딩 학습 사이트. 블록 에디터와 진도 리포트 제공.", stack: ["Vue", "Node.js", "MongoDB"], stars: 58 }
];

const EXPERIENCE = [
  { period: "2023 – 현재", company: "넥스트웨이브", title: "시니어 프론트엔드 엔지니어", points: ["디자인 시스템 전담팀 리드 (5명)", "번들 크기 42% 감소, LCP 3.1s → 1.4s 개선", "신규 입사자 온보딩 프로그램 설계"] },
  { period: "2020 – 2023", company: "블루오션 랩스", title: "풀스택 개발자", points: ["예약 플랫폼 0→1 구축, 월 거래액 2억 달성", "CI/CD 파이프라인 도입으로 배포 시간 30분 → 6분", "결제·정산 모듈 설계 및 운영"] },
  { period: "2018 – 2020", company: "코드나무", title: "주니어 개발자", points: ["교육용 웹 서비스 프론트엔드 개발", "사내 UI 컴포넌트 라이브러리 초기 버전 작성"] },
  { period: "2016 – 2018", company: "디지털 스튜디오 모아", title: "웹 퍼블리셔 (인턴 → 정규직)", points: ["반응형 웹사이트 25건 제작", "웹 접근성 인증 마크 획득 지원"] }
];

const EDUCATION = [
  { period: "2012 – 2016", school: "한빛대학교", major: "컴퓨터공학 학사", note: "졸업 논문: 웹 기반 실시간 협업 편집기" },
  { period: "2022", school: "AWS", major: "Solutions Architect – Associate", note: "자격증" },
  { period: "2019", school: "정보처리기사", major: "한국산업인력공단", note: "자격증" }
];

const ARTICLES = [
  { date: "2026-08-14", title: "React 서버 컴포넌트, 현업 도입 6개월 회고", read: "9분" },
  { date: "2026-06-02", title: "디자인 토큰을 코드로 관리하는 방법", read: "7분" },
  { date: "2026-03-21", title: "접근성 감사를 자동화한 이야기", read: "6분" },
  { date: "2025-12-05", title: "CRDT를 모바일 앱에 넣어 본 후기", read: "11분" },
  { date: "2025-09-18", title: "성능 예산(Performance Budget) 팀에 정착시키기", read: "8분" },
  { date: "2025-05-09", title: "Go로 만드는 첫 CLI 도구", read: "5분" }
];

const TALKS = [
  { date: "2026-09", event: "서울 프론트엔드 컨퍼런스", title: "디자인 시스템은 제품이다" },
  { date: "2026-04", event: "DevFest Seoul", title: "서버 컴포넌트 실전 가이드" },
  { date: "2025-11", event: "웹 접근성 밋업", title: "자동화로 지키는 접근성" },
  { date: "2025-06", event: "JS 라운지", title: "30분 만에 배우는 CRDT" }
];

const AWARDS = [
  "2025 올해의 오픈소스 기여자 – 코드나무 커뮤니티",
  "2024 사내 혁신상 – 넥스트웨이브",
  "2022 해커톤 대상 – 서울시 시민 아이디어톤",
  "2019 웹 어워드 코리아 우수상 (모아 스튜디오 팀)"
];

const TESTIMONIALS = [
  { who: "박서윤 · 프로덕트 매니저", text: "개발자이면서 디자이너의 눈도 가진 드문 동료예요. 협업이 정말 즐거웠습니다." },
  { who: "이도현 · CTO, 블루오션 랩스", text: "어려운 일정에서도 품질을 놓치지 않는 믿음직한 엔지니어입니다." },
  { who: "최하린 · 주니어 개발자", text: "코드 리뷰가 늘 친절하고 구체적이라 많이 배웠습니다." }
];

const TIMELINE_NOW = [
  "📚 읽는 중: 「A Philosophy of Software Design」",
  "🛠 만드는 중: 로컬 퍼스트 일정 관리 앱",
  "🎧 요즘 듣는 음악: 로파이 재즈",
  "🏃 목표: 올해 하프 마라톤 완주"
];
