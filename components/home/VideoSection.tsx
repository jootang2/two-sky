"use client";

import { useState } from "react";

// 탭·영상 컨텐츠 — 나중에 여기만 수정
const TABS = [
  {
    id: "story",
    label: "합격 스토리",
    videos: [
      {
        id: "v1",
        title: "서울대 수학교육과 합격생 인터뷰 — 수학 어떻게 공부했나요?",
        thumb: null as string | null, // 실제 썸네일: "/images/video-thumb-1.jpg"
        youtubeId: null as string | null, // 실제 유튜브 ID: "dQw4w9WgXcQ"
        duration: "8:24",
      },
      {
        id: "v2",
        title: "카이스트 합격생이 말하는 투스카이 수학과학의 비밀",
        thumb: null,
        youtubeId: null,
        duration: "6:51",
      },
      {
        id: "v3",
        title: "고려대 합격 후기 — 3개월 만에 1등급 달성기",
        thumb: null,
        youtubeId: null,
        duration: "10:03",
      },
    ],
  },
  {
    id: "brand",
    label: "학원 소개",
    videos: [
      {
        id: "b1",
        title: "투스카이 수학과학 학원 시설 투어 — 최신 시설을 만나보세요",
        thumb: null,
        youtubeId: null,
        duration: "4:30",
      },
      {
        id: "b2",
        title: "투스카이의 수업 방식 — 왜 다른가요?",
        thumb: null,
        youtubeId: null,
        duration: "5:12",
      },
      {
        id: "b3",
        title: "원장 선생님 인사말 — 투스카이를 소개합니다",
        thumb: null,
        youtubeId: null,
        duration: "3:45",
      },
    ],
  },
  {
    id: "lecture",
    label: "강의 맛보기",
    videos: [
      {
        id: "l1",
        title: "수능 수학 — 킬러 문항 풀이 전략 완벽 공개",
        thumb: null,
        youtubeId: null,
        duration: "12:00",
      },
      {
        id: "l2",
        title: "물리학1 핵심 개념 완벽 정리 — 이것만 알면 된다",
        thumb: null,
        youtubeId: null,
        duration: "9:38",
      },
      {
        id: "l3",
        title: "화학 신유형 대비 특강 — 계산 문제 완전 정복",
        thumb: null,
        youtubeId: null,
        duration: "7:55",
      },
    ],
  },
];

function PlayIcon() {
  return (
    <div className="w-14 h-14 rounded-full bg-orange-500/90 flex items-center justify-center shadow-lg group-hover:bg-orange-500 transition-colors">
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current ml-1">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

function VideoThumb({
  video,
  index,
}: {
  video: (typeof TABS)[number]["videos"][number];
  index: number;
}) {
  const colors = ["from-zinc-800 to-zinc-900", "from-neutral-800 to-stone-900", "from-slate-800 to-gray-900"];

  return (
    <div className={`group relative w-full aspect-video bg-gradient-to-br ${colors[index % 3]} flex items-center justify-center cursor-pointer overflow-hidden`}>
      {video.thumb ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={video.thumb} alt={video.title} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        /* 플레이스홀더 배경 */
        <>
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-orange-400/30 rounded-full"
                style={{
                  width: `${120 + i * 60}px`,
                  height: `${120 + i * 60}px`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>
          <span className="absolute bottom-4 left-4 right-4 text-gray-400 text-xs text-center line-clamp-2 leading-relaxed">
            {video.title}
          </span>
        </>
      )}

      {/* 재생 버튼 */}
      <div className="relative z-10">
        <PlayIcon />
      </div>

      {/* 재생 시간 */}
      <span className="absolute bottom-2 right-3 text-white text-xs bg-black/60 px-1.5 py-0.5 rounded">
        {video.duration}
      </span>
    </div>
  );
}

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [slide, setSlide] = useState(0);

  const videos = TABS[activeTab].videos;

  function changeTab(i: number) {
    setActiveTab(i);
    setSlide(0);
  }

  function prev() {
    setSlide((s) => (s - 1 + videos.length) % videos.length);
  }

  function next() {
    setSlide((s) => (s + 1) % videos.length);
  }

  const current = videos[slide];

  return (
    <section className="bg-[#0d0d0d] py-14 px-6">
      <div className="max-w-screen-lg mx-auto">

        {/* 브랜드 레이블 */}
        <div className="flex items-center gap-2 mb-5">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black text-xs"
            style={{ background: "radial-gradient(circle, #e67e22 40%, #b35810 100%)" }}
          >
            투
          </span>
          <span className="text-white font-bold text-sm tracking-wide">투스카이 국어</span>
        </div>

        {/* 탭 */}
        <div className="flex gap-2 mb-7">
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => changeTab(i)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                activeTab === i
                  ? "bg-orange-500 text-white"
                  : "bg-white/10 text-gray-400 hover:bg-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 영상 캐러셀 */}
        <div className="relative flex items-center gap-3">
          {/* 이전 */}
          <button
            onClick={prev}
            className="shrink-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="이전"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* 영상 */}
          <div className="flex-1 flex flex-col gap-3">
            <VideoThumb video={current} index={slide} />
            <p className="text-gray-300 text-sm font-medium text-center px-2">
              {current.title}
            </p>
          </div>

          {/* 다음 */}
          <button
            onClick={next}
            className="shrink-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="다음"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        {/* 페이지 인디케이터 */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <span className="text-gray-500 text-xs">{slide + 1} / {videos.length}</span>
          <div className="flex gap-1.5">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === slide ? "bg-orange-500" : "bg-white/20"
                }`}
                aria-label={`${i + 1}번 영상`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
