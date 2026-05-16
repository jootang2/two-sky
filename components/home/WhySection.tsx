import Image from "next/image";

// 수정 시 여기만 변경
const FEATURES = [
  {
    id: "custom",
    title: "개인 맞춤형 수업",
    desc: "학생의 실력과 수준에 맞춘 맞춤형 커리큘럼으로 개인 맞춤형 수업을 제공합니다.",
    imageSrc: null as string | null, // 예: "/images/feature-custom.jpg"
    // 플레이스홀더용
    gradient: "from-blue-900/80 to-indigo-900/80",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  {
    id: "clinic",
    title: "90분 이상의 개별 클리닉",
    desc: "보충이 필요한 학생의 경우 수업 외 90분 이상의 개별 클리닉을 통한 밀착 관리를 지원합니다.",
    imageSrc: null,
    gradient: "from-orange-900/80 to-red-900/80",
    icon: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
  },
  {
    id: "reading",
    title: "독서 중심 문해력 강화",
    desc: "올바른 독서 습관을 중심으로 국어의 기본기를 탄탄하게 다져 수능 국어의 근본 실력을 키웁니다.",
    imageSrc: null,
    gradient: "from-emerald-900/80 to-teal-900/80",
    icon: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z",
  },
  {
    id: "roadmap",
    title: "입시 로드맵 제공",
    desc: "중학교부터 수능까지 완벽하게 연결되는 단계별 입시 로드맵을 제공합니다.",
    imageSrc: null,
    gradient: "from-violet-900/80 to-purple-900/80",
    icon: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z",
  },
];

function FeaturePlaceholder({ feature }: { feature: (typeof FEATURES)[number] }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
      <svg viewBox="0 0 24 24" className="w-16 h-16 text-white/10 fill-current">
        <path d={feature.icon} />
      </svg>
    </div>
  );
}

export default function WhySection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 items-start">

        {/* 좌측 타이틀 */}
        <div className="md:w-56 shrink-0 pt-2">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Why Us
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-snug">
            왜<br />투스카이인가?
          </h2>
        </div>

        {/* 우측 카드 2×2 */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-default"
            >
              {/* 이미지 or 플레이스홀더 */}
              {feature.imageSrc ? (
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <FeaturePlaceholder feature={feature} />
              )}

              {/* 오버레이 — 항상 표시 */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

              {/* 텍스트 */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-base md:text-lg mb-1 drop-shadow">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
