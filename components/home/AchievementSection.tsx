import Image from "next/image";

// 이미지 교체 시 여기만 변경 (src: null → 실제 경로)
const BOARDS = [
  {
    id: "university",
    year: "2026",
    title: "대학 합격자",
    caption: "2026 대학 합격자",
    desc: "보다 자세한 내용은 홈페이지를 확인해주세요",
    imageSrc: null as string | null, // 예: "/images/board-university.png"
    imageAlt: "2026 대학 합격자 명단",
    // 이미지 없을 때 표시할 플레이스홀더 데이터
    placeholder: {
      badge: "서울대·연세대·고려대",
      items: [
        "서울대학교", "연세대학교", "고려대학교", "성균관대학교",
        "한양대학교", "서강대학교", "중앙대학교", "경희대학교",
        "한국외국어대학교", "서울시립대학교", "이화여자대학교", "숙명여자대학교",
        "건국대학교", "동국대학교", "홍익대학교", "국민대학교",
        "숭실대학교", "세종대학교", "단국대학교", "인하대학교",
      ],
    },
  },
  {
    id: "special",
    year: "2026",
    title: "특목자사고 합격생",
    caption: "2026 특목자사고 합격생",
    desc: "보다 자세한 내용은 홈페이지를 확인해주세요",
    imageSrc: null as string | null,
    imageAlt: "2026 특목자사고 합격생 명단",
    placeholder: {
      badge: "외고·과학고·자사고",
      items: [
        "한국외국어대학교부설고", "대원외국어고등학교", "이화외국어고등학교",
        "서울과학고등학교", "경기과학고등학교", "한성과학고등학교",
        "휘문고등학교", "중동고등학교", "세화고등학교", "현대고등학교",
        "용인외국어고등학교", "민족사관고등학교", "상산고등학교",
        "광양제철고등학교", "포항제철고등학교", "인천과학고등학교",
        "대구과학고등학교", "부산과학고등학교", "전남과학고등학교",
        "강원과학고등학교",
      ],
    },
  },
];

function BoardPlaceholder({
  board,
}: {
  board: (typeof BOARDS)[number];
}) {
  const mid = Math.ceil(board.placeholder.items.length / 2);
  const col1 = board.placeholder.items.slice(0, mid);
  const col2 = board.placeholder.items.slice(mid);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-start pt-6 pb-4 px-5"
      style={{
        background: "linear-gradient(160deg, #1c1408 0%, #2e1f08 50%, #1c1408 100%)",
        border: "3px solid #8b6914",
        boxShadow: "inset 0 0 30px rgba(180,130,20,0.15), 0 4px 24px rgba(0,0,0,0.6)",
      }}
    >
      {/* 상단 장식선 */}
      <div className="w-full border-t border-b border-[#8b6914]/60 py-1 mb-3 text-center">
        <p className="text-[#c9a84c] text-[10px] tracking-[4px]">
          투스카이 국어학원 공식 발표
        </p>
      </div>

      {/* 연도·제목 */}
      <p className="text-[#e8c56a] text-xs tracking-widest mb-1">{board.year}</p>
      <h3 className="text-[#f0d080] text-lg font-bold tracking-wider mb-1">
        {board.title}
      </h3>
      <p className="text-[#c9a84c] text-[11px] mb-4">{board.placeholder.badge}</p>

      {/* 엠블럼 */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-black text-base"
        style={{ background: "radial-gradient(circle, #e67e22 40%, #b35810 100%)" }}
      >
        투
      </div>

      {/* 명단 */}
      <div className="flex gap-4 w-full justify-center">
        {[col1, col2].map((col, ci) => (
          <ul key={ci} className="flex flex-col gap-[5px]">
            {col.map((name, i) => (
              <li
                key={i}
                className="text-[#dbc070] text-[11px] text-center leading-none"
              >
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* 하단 장식선 */}
      <div className="w-full border-t border-[#8b6914]/60 mt-4 pt-2 text-center">
        <p className="text-[#8b6914] text-[9px] tracking-widest">
          ✦ 합격을 진심으로 축하드립니다 ✦
        </p>
      </div>
    </div>
  );
}

export default function AchievementSection() {
  return (
    <section className="bg-[#111] py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-10">
          <p className="text-orange-400 text-sm tracking-widest uppercase mb-2">
            Achievement
          </p>
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            합격자 현황
          </h2>
        </div>

        {/* 보드 2개 */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {BOARDS.map((board) => (
            <div key={board.id} className="flex flex-col items-center w-full md:w-[380px]">
              {/* 보드 이미지 or 플레이스홀더 */}
              <div className="w-full aspect-[3/4] max-w-[360px] overflow-hidden">
                {board.imageSrc ? (
                  <Image
                    src={board.imageSrc}
                    alt={board.imageAlt}
                    width={360}
                    height={480}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <BoardPlaceholder board={board} />
                )}
              </div>

              {/* 캡션 */}
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-sm">{board.caption}</p>
                <p className="text-gray-500 text-xs mt-1">{board.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
