"use client";

import dynamic from "next/dynamic";

const KakaoMap = dynamic(() => import("@/components/home/KakaoMap"), { ssr: false });

// ─── 수정 포인트 ──────────────────────────────────────────────────────────────
const LOCATIONS = [
  {
    id: "sangdong",
    name: "상동교육원",
    address: "경기 부천시 원미구 상동로 000 (상동, 투스카이빌딩) 3층",
    phone: "032-000-0000",
    hours: "평일 14:00 – 22:00 / 주말 10:00 – 18:00",
    lat: 37.4954,   // 실제 좌표로 교체
    lng: 126.7654,
  },
  {
    id: "jungja",
    name: "정자교육원",
    address: "경기 성남시 분당구 정자동 000-00 정자타워 4층",
    phone: "031-000-0000",
    hours: "평일 14:00 – 22:00 / 주말 10:00 – 18:00",
    lat: 37.3595,   // 실제 좌표로 교체
    lng: 127.1052,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const INFO_ROWS = [
  {
    key: "address" as const,
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z",
  },
  {
    key: "phone" as const,
    icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  },
  {
    key: "hours" as const,
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",
  },
];

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white">
      {LOCATIONS.map((loc, i) => (
        <div
          key={loc.id}
          className={`py-14 px-6 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-screen-lg mx-auto">

            {/* 제목 */}
            <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
              {loc.name} 오시는 길
            </h2>

            {/* 지도 */}
            <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden border border-gray-200 mb-6">
              <KakaoMap lat={loc.lat} lng={loc.lng} label={loc.name} level={3} />
            </div>

            {/* 상세 정보 */}
            <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
              {INFO_ROWS.map((row) => (
                <div key={row.key} className="flex items-start gap-4 py-4">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-500 fill-current shrink-0 mt-0.5">
                    <path d={row.icon} />
                  </svg>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {loc[row.key]}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
