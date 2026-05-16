import Image from "next/image";

// 수정 시 여기만 변경
const FEATURES = [
  {
    id: "custom",
    title: "개인 맞춤형 수업",
    desc: "학생의 수준과 목표에 맞춘 맞춤형 커리큘럼으로 수학·과학 실력을 효율적으로 끌어올립니다.",
    imageSrc: null as string | null,
    bg: "#1e3a5f",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  {
    id: "clinic",
    title: "90분 이상의 개별 클리닉",
    desc: "보충이 필요한 학생은 수업 외 90분 이상의 개별 클리닉을 통해 취약 단원을 완벽히 잡아드립니다.",
    imageSrc: null,
    bg: "#7c2d12",
    icon: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
  },
  {
    id: "concept",
    title: "개념 중심 심화 학습",
    desc: "단순 문제풀이가 아닌 개념의 원리를 이해하는 심화 학습으로 처음 보는 문제도 스스로 해결하는 힘을 키웁니다.",
    imageSrc: null,
    bg: "#064e3b",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
  },
  {
    id: "roadmap",
    title: "입시 로드맵 제공",
    desc: "중학교 수학·과학부터 수능·내신까지 완벽하게 연결되는 단계별 입시 로드맵을 제공합니다.",
    imageSrc: null,
    bg: "#3b0764",
    icon: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z",
  },
];

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
            왜<br />투스카이<br />수학과학인가?
          </h2>
        </div>

        {/* 우측 카드 2×2 */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl overflow-hidden h-52 sm:h-auto sm:aspect-[4/3] flex flex-col justify-end"
              style={{ backgroundColor: feature.bg }}
            >
              {/* 실제 이미지 (있을 때만) */}
              {feature.imageSrc && (
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              )}

              {/* 플레이스홀더 아이콘 (이미지 없을 때) */}
              {!feature.imageSrc && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg viewBox="0 0 24 24" className="w-20 h-20 fill-current" style={{ color: "rgba(255,255,255,0.08)" }}>
                    <path d={feature.icon} />
                  </svg>
                </div>
              )}

              {/* 어두운 오버레이 */}
              <div
                className="absolute inset-0 transition-opacity group-hover:opacity-80"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
              />

              {/* 텍스트 */}
              <div className="relative z-10 p-5">
                <h3 className="text-white font-bold text-base mb-1">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed">
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
