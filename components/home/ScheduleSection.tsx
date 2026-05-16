import Link from "next/link";

// 수업 카드 — 수정 시 여기만 변경
const CLASSES = [
  {
    id: "pre-h3",
    grade: "예비고3·N수",
    period: "12/19(개강)~3/1",
    desc: "정규반 12주, 겨울방학 무료특강, 수능 수학·과학 입문 강좌를 통해 탄탄한 기본기를 다져보세요.",
    href: "/schedule#pre-h3",
  },
  {
    id: "pre-h2",
    grade: "예비고2",
    period: "12/19(개강)~3/1",
    desc: "정규반 11주, 고난도 수학·과학 문제 훈련을 통해 실력을 한 단계 업그레이드하세요.",
    href: "/schedule#pre-h2",
  },
  {
    id: "pre-h1",
    grade: "예비고1",
    period: "12/19(개강)~3/1",
    desc: "선수능집중반, 선내신몰입반, 수학·과학 겨울방학 특강으로 고등학교 첫 시작을 완벽하게!",
    href: "/schedule#pre-h1",
  },
  {
    id: "pre-m3",
    grade: "예비중3",
    period: "12/19(개강)~2/22",
    desc: "정규반 10주, 수학·과학 겨울방학 재원생 무료특강으로 중학교 마지막을 알차게!",
    href: "/schedule#pre-m3",
  },
  {
    id: "pre-m2",
    grade: "예비중2",
    period: "12/19(개강)~2/22",
    desc: "정규반 10주, 겨울방학 재원생 무료특강으로 수학·과학 실력의 기반을 다지세요.",
    href: "/schedule#pre-m2",
  },
  {
    id: "pre-m1",
    grade: "예비중1",
    period: "12/19(개강)~2/22",
    desc: "정규반 10주, 겨울방학 재원생 무료특강으로 중학교 수학·과학 첫 발걸음을 미리 준비하세요.",
    href: "/schedule#pre-m1",
  },
];

// 외부 링크 — URL 수정 시 여기만 변경
const QUICK_LINKS = [
  {
    id: "youtube",
    label: "투스카이 유튜브",
    tag: "YOUTUBE",
    href: "https://youtube.com",
    bg: "bg-black",
    icon: (
      <svg viewBox="0 0 90 64" className="w-20 h-14" fill="none">
        <rect width="90" height="64" rx="14" fill="#FF0000" />
        <path d="M37 20l24 12-24 12V20z" fill="white" />
      </svg>
    ),
  },
  {
    id: "call",
    label: "상담문의",
    tag: "CALL",
    href: "tel:032-000-0000",
    bg: "bg-gray-100",
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 text-indigo-300 fill-current">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    id: "kakao",
    label: "카카오 채널",
    tag: "KAKAO CHANNEL",
    href: "https://pf.kakao.com",
    bg: "bg-yellow-400",
    icon: (
      <svg viewBox="0 0 90 80" className="w-20 h-16" fill="none">
        <path
          d="M45 4C22.9 4 5 18.3 5 36c0 11.4 7.1 21.4 17.9 27.3L19.5 76l15.8-10.4C37.5 65.9 41.2 66 45 66c22.1 0 40-14.3 40-32S67.1 4 45 4z"
          fill="#3C1E1E"
        />
        <text x="45" y="45" textAnchor="middle" dominantBaseline="middle" fill="#FAE300" fontSize="22" fontWeight="900" fontFamily="Arial">
          TALK
        </text>
      </svg>
    ),
  },
];

export default function ScheduleSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-screen-xl mx-auto">

        {/* 시간표 헤더 */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">투스카이 수학·과학 시간표</h2>
          <p className="text-gray-500 text-sm mt-2">꿈을 향한 당신의 여정, 투스카이가 함께합니다.</p>
        </div>

        {/* 수업 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {CLASSES.map((cls) => (
            <div key={cls.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cls.grade}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1.5 mb-3">
                <span>🗓</span>
                {cls.period}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">{cls.desc}</p>
              <Link
                href={cls.href}
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-3 rounded-lg transition-colors"
              >
                시간표 확인하기 →
              </Link>
            </div>
          ))}
        </div>

        {/* 퀵 링크 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`${link.bg} rounded-2xl overflow-hidden flex flex-col justify-between aspect-[4/3] p-5 group`}
            >
              {/* 태그 */}
              <p className={`text-xs font-bold tracking-widest ${link.id === "call" ? "text-gray-400" : link.id === "kakao" ? "text-yellow-700" : "text-gray-400"}`}>
                {link.tag}
              </p>

              {/* 아이콘 */}
              <div className="flex items-center justify-center flex-1">
                {link.icon}
              </div>

              {/* 하단 레이블 + 화살표 */}
              <div className="flex items-center justify-between mt-2">
                <span className={`text-sm font-semibold ${link.id === "call" ? "text-gray-700" : link.id === "kakao" ? "text-yellow-900" : "text-white"}`}>
                  {link.label}
                </span>
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${link.id === "call" ? "bg-gray-300 text-gray-600" : "bg-white/20 text-white"} group-hover:opacity-80 transition-opacity`}>
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
