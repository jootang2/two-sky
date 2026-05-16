"use client";

// 합격생 명단 배열 — 항목 추가/수정 시 여기만 변경
const PASS_LIST = [
  { school: "포스코고", from: "부원여중", name: "백◯민" },
  { school: "양서고", from: "부평중", name: "김◯빈" },
  { school: "양서고", from: "부평중", name: "김◯연" },
  { school: "양서고", from: "부평중", name: "김◯율" },
  { school: "외부고", from: "석천중", name: "김◯유" },
  { school: "외부고", from: "중룡중", name: "홍◯민" },
  { school: "하늘고", from: "부곡중", name: "정◯호" },
  { school: "하늘고", from: "상동중", name: "전◯민" },
  { school: "하늘고", from: "석천중", name: "김◯욱" },
  { school: "하늘고", from: "석천중", name: "자◯진" },
  { school: "하늘고", from: "신성중", name: "구◯희" },
  { school: "하늘고", from: "진산중", name: "이◯원" },
  { school: "대원외고", from: "덕양중", name: "박◯서" },
  { school: "한영외고", from: "신도중", name: "이◯준" },
  { school: "이화외고", from: "목동중", name: "최◯아" },
  { school: "서울과학고", from: "수서중", name: "김◯현" },
  { school: "경기과학고", from: "분당중", name: "오◯진" },
  { school: "민사고", from: "강남중", name: "장◯우" },
  { school: "상산고", from: "전주중", name: "임◯솔" },
  { school: "현대고", from: "역삼중", name: "정◯연" },
];

export default function PassStorySection() {
  // 애니메이션 무한 루프를 위해 배열 2배 복제
  const doubled = [...PASS_LIST, ...PASS_LIST];

  return (
    <section className="bg-[#0d0d0d]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row min-h-[400px]">
      {/* ── 좌측: 합격 수기 타이틀 ── */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center py-16 px-8 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, #1a1200 0%, #0a0a0a 70%)",
        }}
      >
        {/* 커튼 줄기 장식 */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px opacity-10"
            style={{
              left: `${8 + i * 9}%`,
              background:
                "linear-gradient(to bottom, transparent, #c9a84c 30%, #c9a84c 70%, transparent)",
            }}
          />
        ))}

        {/* 로고 엠블럼 */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg mb-5 relative z-10"
          style={{
            background: "radial-gradient(circle, #e67e22 40%, #b35810 100%)",
            boxShadow: "0 0 20px rgba(230,126,34,0.5)",
          }}
        >
          투
        </div>

        {/* 월계관 + 메인 타이틀 */}
        <div className="relative z-10 flex items-center gap-3 mb-4">
          {/* 좌측 월계관 */}
          <svg viewBox="0 0 60 80" className="w-10 h-14 opacity-90" fill="none">
            <path
              d="M50 40 Q45 20 30 10 Q20 20 18 35 Q22 30 28 32 Q24 42 20 48 Q26 44 32 46 Q28 56 24 62 Q32 58 36 60 Q34 70 30 74"
              stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" fill="none"
            />
            <path
              d="M46 38 Q48 28 42 20 Q38 26 38 34"
              stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" fill="none"
            />
          </svg>

          <h2
            className="text-5xl md:text-6xl font-black tracking-tight text-center"
            style={{
              background: "linear-gradient(180deg, #f5e17a 0%, #c9a84c 50%, #8b6914 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            합격 수기
          </h2>

          {/* 우측 월계관 (뒤집기) */}
          <svg viewBox="0 0 60 80" className="w-10 h-14 opacity-90 scale-x-[-1]" fill="none">
            <path
              d="M50 40 Q45 20 30 10 Q20 20 18 35 Q22 30 28 32 Q24 42 20 48 Q26 44 32 46 Q28 56 24 62 Q32 58 36 60 Q34 70 30 74"
              stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" fill="none"
            />
            <path
              d="M46 38 Q48 28 42 20 Q38 26 38 34"
              stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" fill="none"
            />
          </svg>
        </div>

        {/* 서브 타이틀 */}
        <p className="relative z-10 text-gray-400 text-sm md:text-base text-center leading-relaxed">
          투스카이 수강생들의<br />
          <span className="text-gray-300">생생한 수학·과학 합격 스토리</span>
        </p>
      </div>

      {/* ── 우측: 무한 스크롤 명단 ── */}
      <div className="flex-1 bg-[#111] flex flex-col justify-center overflow-hidden py-6">
        {/* 상단 페이드 */}
        <div className="relative h-full overflow-hidden" style={{ maxHeight: 360 }}>
          <div
            className="pointer-events-none absolute top-0 left-0 right-0 h-12 z-10"
            style={{
              background: "linear-gradient(to bottom, #111 0%, transparent 100%)",
            }}
          />

          {/* 스크롤 영역 */}
          <div
            style={{
              animation: `scroll-up ${PASS_LIST.length * 1.4}s linear infinite`,
            }}
          >
            {doubled.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-6 py-2 border-b border-white/5"
              >
                <span className="text-orange-400 text-sm font-semibold w-24 shrink-0">
                  {item.school}
                </span>
                <span className="text-gray-500 text-xs w-16 text-center shrink-0">
                  {item.from}
                </span>
                <span className="text-gray-300 text-sm font-medium w-14 text-right shrink-0">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* 하단 페이드 */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 z-10"
            style={{
              background: "linear-gradient(to top, #111 0%, transparent 100%)",
            }}
          />
        </div>

        {/* 안내 문구 */}
        <p className="text-center text-gray-600 text-xs mt-4 px-6">
          합격생 명단은 계속 업데이트됩니다
        </p>
      </div>
      </div>
    </section>
  );
}
