import Image from "next/image";
import Link from "next/link";

// 문구 수정 시 여기만 변경
const HERO_CONTENT = {
  eyebrow: "진짜 수학·과학 공부 이제 시작",
  headlinePrimary: "Two-sky",
  headlineAccent: "수학과학",
  sub: "개념은 쌓이고,\n실력은 하늘로 솟는다",
  cta: "무료 진단평가 신청",
  ctaHref: "/diagnosis",
};

// 이미지 교체 시 여기만 변경 (실제 이미지 경로로 대체)
const HERO_IMAGE = {
  src: null as string | null, // 예: "/images/hero-teacher.png"
  alt: "투스카이 선생님",
};

function PersonPlaceholder() {
  return (
    <svg
      viewBox="0 0 300 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain"
      aria-hidden="true"
    >
      {/* Head */}
      <ellipse cx="150" cy="80" rx="52" ry="58" fill="#c8b8a2" />
      {/* Hair */}
      <ellipse cx="150" cy="54" rx="52" ry="32" fill="#3a2e26" />
      {/* Neck */}
      <rect x="132" y="130" width="36" height="36" rx="6" fill="#c8b8a2" />
      {/* Suit body */}
      <path
        d="M60 200 Q60 170 100 160 L132 148 L150 185 L168 148 L200 160 Q240 170 240 200 L255 400 L45 400 Z"
        fill="#2c3e50"
      />
      {/* Shirt / tie area */}
      <path
        d="M132 148 L150 185 L168 148 L160 160 L150 200 L140 160 Z"
        fill="#ecf0f1"
      />
      <path d="M150 175 L155 240 L150 260 L145 240 Z" fill="#e67e22" />
      {/* Left lapel */}
      <path d="M100 160 L132 148 L118 200 L80 195 Z" fill="#243342" />
      {/* Right lapel */}
      <path d="M200 160 L168 148 L182 200 L220 195 Z" fill="#243342" />
      {/* Left arm */}
      <path
        d="M60 200 Q30 220 28 300 Q28 340 50 360 L80 350 Q70 310 75 270 L90 240 Z"
        fill="#2c3e50"
      />
      {/* Right arm */}
      <path
        d="M240 200 Q270 220 272 300 Q272 340 250 360 L220 350 Q230 310 225 270 L210 240 Z"
        fill="#2c3e50"
      />
      {/* Left hand */}
      <ellipse cx="46" cy="368" rx="20" ry="14" fill="#c8b8a2" />
      {/* Right hand */}
      <ellipse cx="254" cy="368" rx="20" ry="14" fill="#c8b8a2" />
      {/* Legs */}
      <rect x="88" y="398" width="54" height="110" rx="8" fill="#1a252f" />
      <rect x="158" y="398" width="54" height="110" rx="8" fill="#1a252f" />
      {/* Shoes */}
      <ellipse cx="115" cy="510" rx="34" ry="12" fill="#111" />
      <ellipse cx="185" cy="510" rx="34" ry="12" fill="#111" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#f2f0ed] overflow-hidden min-h-[420px] md:min-h-[500px]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-full flex items-center relative">
        {/* Text content */}
        <div className="relative z-10 pt-14 pb-12 md:pt-20 md:pb-16 max-w-lg">
          <p className="text-sm md:text-base text-gray-500 mb-3 tracking-wide">
            {HERO_CONTENT.eyebrow}
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
            <span className="text-gray-900">{HERO_CONTENT.headlinePrimary}</span>
            <span className="text-orange-500 ml-3">{HERO_CONTENT.headlineAccent}</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 whitespace-pre-line">
            {HERO_CONTENT.sub}
          </p>
          <Link
            href={HERO_CONTENT.ctaHref}
            className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors text-sm md:text-base"
          >
            {HERO_CONTENT.cta}
          </Link>
        </div>

        {/* Person image */}
        <div className="absolute right-0 bottom-0 h-full w-[45%] md:w-[40%] flex items-end justify-center pointer-events-none select-none">
          {HERO_IMAGE.src ? (
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              fill
              className="object-contain object-bottom"
              priority
            />
          ) : (
            <div className="w-full max-w-xs h-[90%]">
              <PersonPlaceholder />
            </div>
          )}
        </div>

        {/* Slide dots (우측 장식) */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`block w-2 h-2 rounded-full ${
                i === 0 ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
