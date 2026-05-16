"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// SSR 비활성화 — 카카오맵은 window 객체 필요
const KakaoMap = dynamic(() => import("./KakaoMap"), { ssr: false });

// 지점 정보 — 주소·좌표·사진 수정 시 여기만 변경
const BRANCHES = [
  {
    id: "sangdong",
    label: "상동",
    name: "투스카이 국어 상동점",
    address: "경기도 부천시 원미구 상동 000-00 투스카이빌딩 3층",
    phone: "032-000-0000",
    hours: "평일 14:00 – 22:00 / 주말 10:00 – 18:00",
    lat: 37.4954,   // 실제 좌표로 교체
    lng: 126.7654,
    photos: [] as (string | null)[], // 실제 사진 경로 배열로 교체: ["/images/sangdong-1.jpg", ...]
    photoCount: 3,  // 플레이스홀더 개수
  },
  {
    id: "jungja",
    label: "정자",
    name: "투스카이 국어 정자점",
    address: "경기도 성남시 분당구 정자동 000-00 정자타워 4층",
    phone: "031-000-0000",
    hours: "평일 14:00 – 22:00 / 주말 10:00 – 18:00",
    lat: 37.3595,
    lng: 127.1052,
    photos: [],
    photoCount: 3,
  },
  {
    id: "hodo",
    label: "호도",
    name: "투스카이 국어 호도점",
    address: "경기도 수원시 영통구 호도동 000-00 호도센터 2층",
    phone: "031-000-0000",
    hours: "평일 14:00 – 22:00 / 주말 10:00 – 18:00",
    lat: 37.2636,
    lng: 127.0286,
    photos: [],
    photoCount: 3,
  },
];

// 사진 플레이스홀더 색상
const PHOTO_GRADIENTS = [
  "from-zinc-700 to-zinc-800",
  "from-neutral-700 to-stone-800",
  "from-slate-700 to-gray-800",
];

function PhotoCarousel({ branch }: { branch: (typeof BRANCHES)[number] }) {
  const [idx, setIdx] = useState(0);
  const total = branch.photos.length || branch.photoCount;
  const src = branch.photos[idx] ?? null;

  return (
    <div className="relative w-full h-full bg-zinc-800 overflow-hidden">
      {/* 사진 or 플레이스홀더 */}
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={`${branch.label} ${idx + 1}`} className="w-full h-full object-cover" />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${PHOTO_GRADIENTS[idx % 3]} flex flex-col items-center justify-center gap-3`}>
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-zinc-500 fill-current">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
          <p className="text-zinc-500 text-sm">{branch.name}</p>
          <p className="text-zinc-600 text-xs">사진 {idx + 1} / {total}</p>
        </div>
      )}

      {/* 이전 버튼 */}
      <button
        onClick={() => setIdx((i) => (i - 1 + total) % total)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
        aria-label="이전 사진"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      {/* 다음 버튼 */}
      <button
        onClick={() => setIdx((i) => (i + 1) % total)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
        aria-label="다음 사진"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? "bg-white" : "bg-white/40"}`}
            aria-label={`사진 ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LocationSection() {
  const [activeBranch, setActiveBranch] = useState(0);
  const branch = BRANCHES[activeBranch];

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-screen-xl mx-auto">

        {/* 헤더 */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">교육원 안내</h2>
            <p className="text-gray-500 text-sm mt-1">
              지역별 찾아오시는 방법과 이용 안내를 확인하세요.
            </p>
          </div>

          {/* 지점 탭 */}
          <div className="flex gap-2">
            {BRANCHES.map((b, i) => (
              <button
                key={b.id}
                onClick={() => setActiveBranch(i)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeBranch === i
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {/* 콘텐츠: 사진 + 지도 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-72 md:h-80">
          {/* 사진 캐러셀 */}
          <div className="rounded-xl overflow-hidden">
            <PhotoCarousel key={branch.id} branch={branch} />
          </div>

          {/* 지도 */}
          <div className="rounded-xl overflow-hidden border border-gray-100">
            <KakaoMap lat={branch.lat} lng={branch.lng} label={branch.name} />
          </div>
        </div>

        {/* 지점 상세 정보 */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z", label: "주소", value: branch.address },
            { icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z", label: "전화", value: branch.phone },
            { icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z", label: "운영시간", value: branch.hours },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-500 fill-current shrink-0 mt-0.5">
                <path d={item.icon} />
              </svg>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
