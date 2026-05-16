# 투스카이 국어학원 홈페이지

## 프로젝트 개요
투스카이 국어학원 공식 홈페이지. 현재 랜딩페이지 1차 완성, 추후 로그인·게시판 등 백엔드 기능 추가 예정.

- **배포 URL**: https://two-sky.vercel.app/
- **GitHub**: https://github.com/jootang2/two-sky.git
- **스택**: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4

## 폴더 구조
```
app/
  layout.tsx       ← Header + Footer 전역 등록
  page.tsx         ← 랜딩페이지 (섹션 조합)
  globals.css      ← scroll-up 키프레임 포함
components/
  layout/
    Header.tsx     ← 공통 헤더 (sticky, 모바일 햄버거)
    Footer.tsx     ← 공통 푸터 (소셜 링크, 법적 링크)
  home/
    HeroSection.tsx         ← 메인 히어로 + 인물 이미지
    AchievementSection.tsx  ← 합격자 현황 보드 2개
    PassStorySection.tsx    ← 합격 수기 + 무한 스크롤 명단
    BrandSection.tsx        ← 오렌지 배경 학원 소개
    VideoSection.tsx        ← 탭별 유튜브 캐러셀 (3탭×3개)
    LocationSection.tsx     ← 지점 사진 캐러셀 + 카카오맵
    KakaoMap.tsx            ← 카카오맵 클라이언트 컴포넌트
    WhySection.tsx          ← 왜 투스카이인가 특징 4개
    ScheduleSection.tsx     ← 시간표 6개 + 퀵링크 3개
```

## 컨텐츠 수정 규칙
각 컴포넌트 파일 **상단 상수**만 수정하면 됨. 예:
- `HeroSection.tsx` → `HERO_CONTENT`, `HERO_IMAGE`
- `PassStorySection.tsx` → `PASS_LIST` 배열
- `LocationSection.tsx` → `BRANCHES` 배열 (주소·좌표·사진)
- `VideoSection.tsx` → `TABS` 배열

## 환경변수
```
NEXT_PUBLIC_KAKAO_MAP_KEY=   ← 카카오 디벨로퍼스에서 발급
```
Vercel 대시보드 → Settings → Environment Variables 에도 동일하게 추가 필요.

## 배포
```bash
git add .
git commit -m "변경 내용"
git push   # → Vercel 자동 재배포
```

## 진행 현황
- [x] 랜딩페이지 전체 섹션 구현
- [x] GitHub / Vercel 배포
- [ ] 실제 이미지·컨텐츠 교체 (바이어 협의 후)
- [ ] 카카오맵 API 키 연동
- [ ] 로그인 / 게시판 등 백엔드 기능
