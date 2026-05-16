import Image from "next/image";

// 수정 시 여기만 변경
const CONTENT = {
  eyebrow: "진짜 수학·과학 공부 이제 시작",
  title: "투스카이 수학과학",
  quote: '"개념이 단단한 학생이 결국 정상에 오른다."',
  body: "투스카이 학원은 10년 이상 입시 현장을 함께해온 수학·과학 전문 강사진과 함께, '학생 한 명 한 명에게 맞는 공부법이 있다'는 신념 아래 단순한 문제풀이를 넘어 개념 중심 맞춤형 교육 시스템을 갖춘 수학·과학 전문 학원입니다.",
  sloganLines: [
    { prefix: "개념은", emphasis: false },
    { prefix: "쌓이고",  emphasis: false, large: true },
    { prefix: "실력은",  emphasis: false },
    { prefix: "하늘로 솟는다", emphasis: true, large: true },
  ],
};

// 이미지 교체 시 여기만 변경
const PERSON_IMAGE = {
  src: null as string | null, // 예: "/images/brand-teacher.png"
  alt: "투스카이 대표 강사",
};

function PersonPlaceholder() {
  return (
    <svg viewBox="0 0 260 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Head */}
      <ellipse cx="130" cy="72" rx="46" ry="52" fill="#f5cba7" />
      {/* Hair */}
      <ellipse cx="130" cy="48" rx="46" ry="28" fill="#2c1f14" />
      {/* Neck */}
      <rect x="116" y="116" width="28" height="28" rx="5" fill="#f5cba7" />
      {/* Shirt body */}
      <path d="M50 175 Q50 150 85 140 L116 128 L130 160 L144 128 L175 140 Q210 150 210 175 L222 370 L38 370 Z" fill="#f0f0f0" />
      {/* Left lapel */}
      <path d="M85 140 L116 128 L102 178 L65 172 Z" fill="#d8d8d8" />
      {/* Right lapel */}
      <path d="M175 140 L144 128 L158 178 L195 172 Z" fill="#d8d8d8" />
      {/* Tie */}
      <path d="M130 152 L136 210 L130 232 L124 210 Z" fill="#e67e22" />
      <path d="M124 152 L136 152 L132 162 L128 162 Z" fill="#cf6d17" />
      {/* Left arm raised */}
      <path d="M50 175 Q18 190 14 265 Q13 300 34 316 L60 305 Q48 278 52 245 L68 210 Z" fill="#f0f0f0" />
      {/* Right arm */}
      <path d="M210 175 Q242 190 246 265 Q247 300 226 316 L200 305 Q212 278 208 245 L192 210 Z" fill="#f0f0f0" />
      {/* Left hand */}
      <ellipse cx="30" cy="322" rx="18" ry="12" fill="#f5cba7" />
      {/* Right hand — slightly raised / gesturing */}
      <ellipse cx="232" cy="310" rx="18" ry="12" transform="rotate(-20 232 310)" fill="#f5cba7" />
      {/* Pants */}
      <rect x="76" y="368" width="46" height="84" rx="6" fill="#2c3e50" />
      <rect x="138" y="368" width="46" height="84" rx="6" fill="#2c3e50" />
      {/* Shoes */}
      <ellipse cx="99" cy="454" rx="30" ry="10" fill="#1a252f" />
      <ellipse cx="161" cy="454" rx="30" ry="10" fill="#1a252f" />
    </svg>
  );
}

export default function BrandSection() {
  return (
    <section className="bg-orange-500 py-14 px-6 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0">

        {/* ── 좌측: 텍스트 ── */}
        <div className="flex-1 text-white md:pr-6">
          <p className="text-orange-100 text-sm tracking-widest mb-2">
            {CONTENT.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-white drop-shadow">
            {CONTENT.title}
          </h2>
          <blockquote className="text-orange-100 text-sm md:text-base italic mb-4 leading-relaxed border-l-2 border-white/50 pl-4">
            {CONTENT.quote}
          </blockquote>
          <p className="text-orange-50 text-xs md:text-sm leading-7 max-w-sm">
            {CONTENT.body}
          </p>
        </div>

        {/* ── 중앙: 인물 이미지 ── */}
        <div className="relative flex-shrink-0 w-52 md:w-64 h-80 md:h-96 flex items-end justify-center">
          {PERSON_IMAGE.src ? (
            <Image
              src={PERSON_IMAGE.src}
              alt={PERSON_IMAGE.alt}
              fill
              className="object-contain object-bottom"
              priority
            />
          ) : (
            <PersonPlaceholder />
          )}
        </div>

        {/* ── 우측: 슬로건 ── */}
        <div className="flex-1 flex flex-col items-end text-right md:pl-6">
          {CONTENT.sloganLines.map((line, i) => (
            <span
              key={i}
              className={`block font-black leading-tight ${
                line.large
                  ? "text-4xl md:text-5xl"
                  : "text-xl md:text-2xl"
              } ${
                line.emphasis
                  ? "text-white drop-shadow-lg"
                  : "text-orange-100"
              }`}
            >
              {line.prefix}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
