import Image from "next/image";

// ─── 수정 포인트 ───────────────────────────────────────────
const CONTENT = {
  slogan: ["실력은", "쌓이고,", "하늘로", "솟는다"],   // 좌측 대형 슬로건 (줄 단위 배열)

  director: {
    name: "홍길동",
    title: "대표원장",
    photo: null as string | null,                     // 실제 사진: "/images/director.png"
    paragraphs: [
      "자신의 꿈을 향해 도전하는 학생들의 열정은 언제나 소중합니다. 그 꿈을 함께 키워나갈 수 있는 이유는, 올바른 방향을 제시해주는 선생님들의 따뜻한 지도와 헌신 덕분입니다.",
      "학생의 가능성과 선생님의 진심 어린 노력이 만날 때, 비로소 교육은 완성됩니다. 수학과 과학의 본질적인 개념을 이해하고, 스스로 문제를 해결하는 힘을 키우는 것이 투스카이의 목표입니다.",
      "교육은 지식 전달을 넘어 사회에서 성장을 이끄는 동행이며, 그 중심에는 늘 학생과 교사가 함께 있습니다.",
    ],
  },
};
// ────────────────────────────────────────────────────────────

function DirectorPhotoPlaceholder() {
  return (
    <svg viewBox="0 0 300 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* 배경 */}
      <rect width="300" height="480" fill="#e8e8e8" />
      {/* Head */}
      <ellipse cx="150" cy="110" rx="58" ry="66" fill="#c8b8a2" />
      {/* Hair */}
      <ellipse cx="150" cy="76" rx="58" ry="38" fill="#2c1f14" />
      {/* Neck */}
      <rect x="132" y="168" width="36" height="34" rx="6" fill="#c8b8a2" />
      {/* Shirt */}
      <path d="M55 240 Q55 205 100 192 L132 178 L150 215 L168 178 L200 192 Q245 205 245 240 L260 460 H40 Z" fill="#f5f5f5" />
      {/* Left lapel */}
      <path d="M100 192 L132 178 L115 232 L72 225 Z" fill="#e0e0e0" />
      {/* Right lapel */}
      <path d="M200 192 L168 178 L185 232 L228 225 Z" fill="#e0e0e0" />
      {/* Tie */}
      <path d="M150 208 L157 280 L150 305 L143 280 Z" fill="#555" />
      <path d="M143 208 L157 208 L153 220 L147 220 Z" fill="#444" />
      {/* Left arm */}
      <path d="M55 240 Q22 258 18 345 Q18 385 42 402 L72 390 Q58 355 62 310 L80 268 Z" fill="#f5f5f5" />
      {/* Right arm */}
      <path d="M245 240 Q278 258 282 345 Q282 385 258 402 L228 390 Q242 355 238 310 L220 268 Z" fill="#f5f5f5" />
      {/* Hands */}
      <ellipse cx="36" cy="410" rx="22" ry="14" fill="#c8b8a2" />
      <ellipse cx="264" cy="410" rx="22" ry="14" fill="#c8b8a2" />
    </svg>
  );
}

export default function IntroPage() {
  const { slogan, director } = CONTENT;

  return (
    <div className="min-h-screen bg-white">
      {/* 메인 섹션 */}
      <section className="flex flex-col md:flex-row min-h-[520px]">

        {/* 좌측: 슬로건 */}
        <div
          className="flex-1 flex flex-col justify-center px-10 py-16 md:py-0"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 60%, #3a3a3a 100%)",
          }}
        >
          <div>
            {slogan.map((line, i) => (
              <p
                key={i}
                className="font-black leading-tight text-white"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* 중앙: 원장 사진 */}
        <div className="w-full md:w-72 bg-[#d4d4d4] flex items-end justify-center overflow-hidden shrink-0">
          {director.photo ? (
            <Image
              src={director.photo}
              alt={`${director.name} ${director.title}`}
              width={288}
              height={520}
              className="object-cover object-top w-full h-full"
            />
          ) : (
            <div className="w-full h-[360px] md:h-full flex items-end">
              <DirectorPhotoPlaceholder />
            </div>
          )}
        </div>

        {/* 우측: 소개 텍스트 */}
        <div className="flex-1 flex flex-col justify-center px-10 py-16 md:py-0 bg-white">
          <p className="text-lg font-bold text-gray-900 mb-1">{director.name}</p>
          <p className="text-orange-500 text-sm font-semibold mb-6">{director.title}</p>
          <div className="space-y-4">
            {director.paragraphs.map((para, i) => (
              <p key={i} className="text-gray-600 text-sm leading-7">
                {para}
              </p>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
