import Image from "next/image";
import Link from "next/link";

// ─── 수정 포인트 ───────────────────────────────────────────────────────────────
// href: null → 해당 페이지 완성 후 경로 입력 (예: "/middle/system")
// imageSrc: null → 실제 사진 경로 입력 (예: "/images/feature-system.jpg")
const FEATURES = [
  {
    id: "system",
    number: "강점 01",
    title: "시스템",
    keyword: "SYSTEM",
    desc: "체계적인 수업 시스템으로 수학·과학 실력을 단계적으로 완성합니다.",
    bg: "#e67e22",
    textColor: "text-white",
    labelColor: "text-orange-100",
    imageSrc: null as string | null,
    href: null as string | null,
  },
  {
    id: "clinic",
    number: "강점 02",
    title: "클리닉",
    keyword: "CLINIC",
    desc: "1:1 개별 클리닉으로 취약 단원을 완벽히 보완합니다.",
    bg: "#ffffff",
    textColor: "text-gray-900",
    labelColor: "text-gray-400",
    imageSrc: null,
    href: null,
  },
  {
    id: "curriculum",
    number: "강점 03",
    title: "커리큘럼",
    keyword: "CURRICULUM",
    desc: "중학교부터 수능까지 끊김 없이 연결되는 맞춤형 커리큘럼을 제공합니다.",
    bg: "#2d2d2d",
    textColor: "text-white",
    labelColor: "text-gray-400",
    imageSrc: null,
    href: null,
  },
  {
    id: "instructors",
    number: "강점 04",
    title: "강사진",
    keyword: "INSTRUCTORS",
    desc: "수학·과학 전문 강사진이 학생 한 명 한 명을 책임집니다.",
    bg: "#111111",
    textColor: "text-white",
    labelColor: "text-gray-500",
    imageSrc: null,
    href: null,
  },
];
// ──────────────────────────────────────────────────────────────────────────────

const PLACEHOLDER_GRADIENTS: Record<string, string> = {
  system:      "from-orange-900 to-orange-700",
  clinic:      "from-teal-900 to-teal-700",
  curriculum:  "from-indigo-900 to-indigo-700",
  instructors: "from-gray-800 to-gray-600",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {FEATURES.map((feature) => (
        <section
          key={feature.id}
          className="flex flex-col md:flex-row min-h-[280px] md:h-72"
          style={{ backgroundColor: feature.bg }}
        >
          {/* 좌측: 텍스트 */}
          <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-10 md:py-0">
            <p className={`text-sm font-medium mb-2 ${feature.labelColor}`}>
              {feature.number}
            </p>
            <h2 className={`text-3xl md:text-4xl font-black mb-3 ${feature.textColor}`}>
              {feature.title}
            </h2>
            <p className={`text-sm leading-relaxed max-w-xs ${feature.textColor} opacity-70`}>
              {feature.desc}
            </p>
          </div>

          {/* 우측: 이미지 + 키워드 + 버튼 */}
          <div className="relative flex-1 md:flex-[1.4] overflow-hidden min-h-[220px]">
            {/* 이미지 or 플레이스홀더 */}
            {feature.imageSrc ? (
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${PLACEHOLDER_GRADIENTS[feature.id]}`} />
            )}

            {/* 어두운 오버레이 */}
            <div className="absolute inset-0 bg-black/40" />

            {/* 영문 키워드 */}
            <p className="absolute bottom-14 left-5 text-white/20 font-black leading-none select-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
              {feature.keyword}
            </p>

            {/* 자세히보기 버튼 */}
            <div className="absolute bottom-5 left-5">
              {feature.href ? (
                <Link
                  href={feature.href}
                  className="inline-block px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded transition-colors"
                >
                  자세히보기
                </Link>
              ) : (
                <span className="inline-block px-5 py-2 bg-orange-500/50 text-white/70 text-xs font-semibold rounded cursor-not-allowed">
                  자세히보기
                </span>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
