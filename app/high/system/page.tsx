// ─── 수정 포인트 ────────────────────────────────────────────────────────────
const BRIEFING_POINTS = [
  "학교 고유의 내신 시험 문항 유형을 중점으로 분석",
  "선생님께서 발표 후 질의응답 하는 시간",
  "교과목별 학생 및 학부모 선생님이 일대일 상담",
  "해당 학교 진학을 위한 정보를 제공합니다.",
];

const MANAGEMENT_CARDS = [
  { num: "01", title: "1:1 관리",      desc: "이번주 수업 내용과 다음주 수업 및 일정 안내" },
  { num: "02", title: "과제 안내",     desc: "전체 과제 안내" },
  { num: "03", title: "성적표",        desc: "월례평가 성적표 발송" },
  { num: "04", title: "학생 학습 상황", desc: "담임선생님의 학생 학습 상황 보고" },
];

const CLINIC_ITEMS = [
  {
    label: "내신 클리닉",
    lines: [
      "주말 수업 내용 중심으로 질의응답",
      "수업 내용 복습 및 오답 테스트",
      "숙제 검사",
    ],
  },
  {
    label: "정규 클리닉",
    lines: [
      "주말 수업 내용 중심으로 질의응답",
      "모의고사 풀이 및 오답정리, 1:1 피드백 및 질의응답",
      "숙제 검사",
    ],
  },
];

const MATERIALS = [
  "정규교과서 사용시",
  "정규교과서 보충 워크북",
  "학생 개별 분석 성적표",
];

const MONTHLY_EVAL_FEATURES = [
  {
    title: "모의고사형 시험지",
    desc: "실제 시험과 유사한 환경에서 평가를 진행하여 시험에 대한 긴장감을 줄이고 실전 대응력을 높일 수 있어요.",
  },
  {
    title: "객관적 등급과 학습 방향 설정",
    desc: "등급 산출을 통해 현재 위치를 객관적으로 파악하고, 그에 맞는 학습 방향을 설정할 수 있어요.",
  },
  {
    title: "1:1 개별 피드백 제공",
    desc: "평가 후 담당 선생님과의 1:1 피드백을 통해 취약 영역을 점검하고 맞춤형 학습 계획을 세울 수 있어요.",
  },
];

const PERFORMANCE_STEPS = [
  { title: "학교 수행평가 과제 발표",         desc: "학교에서 수행평가 주제와 평가 기준 공지" },
  { title: "선생님과 함께 수행평가 계획 수립", desc: "진로와 연계성을 고려하여 작성 방향 계획 수립" },
  { title: "학생 초안 작성",                 desc: "계획을 바탕으로 직접 초안 작성" },
  { title: "선생님의 개별 피드백",             desc: "평가 기준에 맞게 작성되었는지 확인하며 구체적인 피드백 제공" },
  { title: "피드백 반영하여 작성한 글을 재첨삭", desc: "여러 차례 반복하여 완성도를 높입니다." },
  { title: "최종 제출",                      desc: "수행평가 고득점" },
];
// ────────────────────────────────────────────────────────────────────────────

function OrangeBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-4 py-1.5 bg-orange-400 text-white text-sm font-semibold rounded-full whitespace-nowrap shrink-0">
      {children}
    </span>
  );
}

export default function HighSystemPage() {
  return (
    <div className="min-h-screen">

      {/* ① 히어로 */}
      <section className="bg-orange-500 flex items-center justify-center py-20">
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">시스템</h1>
      </section>

      {/* ② 학교별 설명회 */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 text-white">
            <h2 className="text-2xl font-bold mb-5">학교별 설명회</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              매년 각 학교 배정 학생들을 위한 학부모 진학 안내 및 고등학교 맞춤 설명회를 진행합니다.
            </p>
            <ul className="space-y-2">
              {BRIEFING_POINTS.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-orange-400 mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* 이미지 플레이스홀더 */}
          <div className="w-full md:w-80 h-52 bg-gray-700 rounded-xl shrink-0" />
        </div>
      </section>

      {/* ③ 1:1 관리 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <h2 className="text-3xl font-black text-gray-900 shrink-0 md:w-28">1:1 관리</h2>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {MANAGEMENT_CARDS.map((card) => (
              <div key={card.num} className="flex flex-col items-center gap-3">
                <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                  <span className="absolute top-2 left-2 w-7 h-7 rounded-full bg-orange-400 text-white text-xs font-bold flex items-center justify-center">
                    {card.num}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-800">{card.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ 클리닉 */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-3">클리닉</h2>
          <p className="text-center text-gray-500 text-sm mb-12">
            수업 시간의 학습 공백을 촘촘하게 채워주는 학습 관리 시스템
          </p>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-72 h-56 bg-gray-300 rounded-xl shrink-0" />
            <div className="flex-1 space-y-5">
              {CLINIC_ITEMS.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <OrangeBadge>{item.label}</OrangeBadge>
                  <ol className="text-sm text-gray-700 space-y-1 pt-0.5">
                    {item.lines.map((line, i) => (
                      <li key={i}>{i + 1}. {line}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ 교재 자료 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {MATERIALS.map((label) => (
            <div key={label} className="flex flex-col items-center gap-4">
              <div className="w-full aspect-[3/4] bg-gray-100 rounded-xl border border-gray-200" />
              <p className="text-sm font-semibold text-gray-700 text-center">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⑥ 월례평가 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-600 text-base leading-relaxed mb-2">
            매월 고등부 전 교육원 1,500여 명이 동시에 응시하는 월례평가는
          </p>
          <p className="text-center text-gray-900 text-lg font-bold mb-12">
            실전과 동일한 환경에서 이루어지는 평가 시스템입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {MONTHLY_EVAL_FEATURES.map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-6 bg-white">
                <h3 className="text-base font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ 수행평가 첨삭 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-8">수행평가 첨삭</h2>
          <ol className="space-y-4">
            {PERFORMANCE_STEPS.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-6 h-6 rounded-full bg-orange-400 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold">{step.title}</span>
                  {step.desc && <span className="text-gray-500"> — {step.desc}</span>}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ⑧ 수행평가 예시 이미지 */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-gray-200 rounded-xl border border-gray-200" />
          ))}
        </div>
      </section>

    </div>
  );
}
