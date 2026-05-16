import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "관별 소개",
  description: "투스카이 수학과학 학원 상동·송도·청라 각 교육원 소개.",
};

// ─── 수정 포인트 ───────────────────────────────────────────────────────────────
// 캠퍼스 추가 시 CAMPUSES 배열에 항목 추가
// heroImage / photos의 src: null → 실제 경로로 교체 (예: "/images/campus-sangdong-hero.jpg")
const CAMPUSES = [
  {
    id: "sangdong",
    name: "상동교육원",
    brandName: "투스카이 수학과학",
    address: "경기 부천시 원미구 상동 000-00 투스카이빌딩 3층",
    phone: "032-000-0000",
    heroImage: null as string | null,
    photos: [
      { src: null as string | null, caption: "상동교육원 로비" },
      { src: null as string | null, caption: "상동교육원 합격 현황판" },
      { src: null as string | null, caption: "상동교육원 강의실" },
    ],
  },
  // 캠퍼스 추가 예시:
  // {
  //   id: "jungja",
  //   name: "정자교육원",
  //   brandName: "투스카이 수학과학",
  //   address: "경기 성남시 분당구 정자동 000-00 4층",
  //   phone: "031-000-0000",
  //   heroImage: null,
  //   photos: [
  //     { src: null, caption: "정자교육원 로비" },
  //   ],
  // },
];
// ──────────────────────────────────────────────────────────────────────────────

function HeroPlaceholder({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)" }}>
      {/* 격자 장식 */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <p className="text-white/10 font-black text-6xl md:text-8xl select-none">{name}</p>
    </div>
  );
}

function PhotoPlaceholder({ caption }: { caption: string }) {
  return (
    <div className="w-full h-full bg-zinc-200 flex flex-col items-center justify-center gap-2">
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-zinc-400 fill-current">
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
      </svg>
      <p className="text-zinc-400 text-xs">{caption}</p>
    </div>
  );
}

export default function CampusPage() {
  return (
    <div className="min-h-screen bg-white">
      {CAMPUSES.map((campus) => (
        <div key={campus.id} className="mb-20 last:mb-0">

          {/* 히어로 배너 */}
          <div className="relative w-full h-72 md:h-96 overflow-hidden">
            {campus.heroImage ? (
              <Image src={campus.heroImage} alt={campus.name} fill className="object-cover object-center" />
            ) : (
              <HeroPlaceholder name={campus.name} />
            )}

            {/* 오버레이 */}
            <div className="absolute inset-0 bg-black/50" />

            {/* 캠퍼스 정보 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <p className="text-orange-400 text-sm font-semibold tracking-widest mb-2">
                {campus.brandName}
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-[0.2em] mb-6">
                {campus.name.split("").join("·")}
              </h2>
              <div className="flex flex-col items-center gap-1.5">
                <p className="flex items-center gap-2 text-gray-200 text-sm">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-orange-400 shrink-0">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                  {campus.address}
                </p>
                <p className="flex items-center gap-2 text-gray-200 text-sm">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-orange-400 shrink-0">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  {campus.phone}
                </p>
              </div>
            </div>
          </div>

          {/* 내부 사진 갤러리 */}
          {campus.photos.length > 0 && (
            <div className="max-w-screen-xl mx-auto px-6 py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {campus.photos.map((photo, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                      {photo.src ? (
                        <Image src={photo.src} alt={photo.caption} fill className="object-cover" />
                      ) : (
                        <PhotoPlaceholder caption={photo.caption} />
                      )}
                    </div>
                    <p className="text-gray-500 text-xs text-center">{photo.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}
