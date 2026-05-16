"use client";

import { useState } from "react";

// ─── 수정 포인트 ──────────────────────────────────────────────────────────────
const STORIES = [
  {
    id: 1,
    year: "2026",
    student: "김◯민",
    grade: "고3",
    from: "상동고등학교",
    to: "서울대학교 수학교육과",
    subject: "수학",
    paragraphs: [
      "처음 투스카이에 왔을 때 저는 수학 3등급이었습니다. 공식은 외웠지만 왜 그 공식이 성립하는지, 어떤 상황에 써야 하는지 전혀 몰랐어요. 그냥 풀리면 맞고 안 풀리면 틀리는 식이었죠.",
      "선생님은 처음부터 개념을 다시 잡아주셨습니다. '왜?'라는 질문을 끊임없이 던지시면서 제가 스스로 생각하게 만들었어요. 처음엔 느린 것 같아 답답했는데, 어느 순간부터 처음 보는 문제도 논리적으로 접근할 수 있게 됐습니다.",
      "수능 당일, 수학 영역을 펼쳤을 때 떨리지 않았습니다. 투스카이에서 쌓아온 개념의 힘을 믿었기 때문입니다. 결과는 1등급, 그리고 서울대 합격이었습니다. 진심으로 감사드립니다.",
    ],
  },
  {
    id: 2,
    year: "2026",
    student: "이◯서",
    grade: "고3",
    from: "중동고등학교",
    to: "카이스트 물리학과",
    subject: "과학(물리)",
    paragraphs: [
      "물리는 항상 암기 과목이라고 생각했습니다. 공식을 외우고, 숫자를 대입하고, 답을 내는 것. 그런데 투스카이에서 수업을 들으면서 물리가 세상을 설명하는 언어라는 걸 처음으로 느꼈습니다.",
      "클리닉 시간이 특히 도움이 됐어요. 틀린 문제를 그냥 넘어가지 않고, 왜 그렇게 생각했는지 제 사고 과정 자체를 점검해주셨습니다. 오개념을 뿌리째 고쳐주시는 느낌이었어요.",
      "카이스트 합격 소식을 들었을 때 가장 먼저 선생님께 전화드렸습니다. 1년 동안 함께해주신 덕분에 꿈을 이룰 수 있었습니다.",
    ],
  },
  {
    id: 3,
    year: "2026",
    student: "박◯준",
    grade: "중3 → 고1",
    from: "상동중학교",
    to: "서울과학고등학교",
    subject: "수학·과학",
    paragraphs: [
      "중학교 때부터 과학고를 목표로 투스카이에 다녔습니다. 솔직히 처음엔 그냥 부모님이 등록해주셔서 왔는데, 선생님들의 수업이 너무 재미있어서 스스로 더 공부하고 싶어졌습니다.",
      "수학올림피아드 준비를 병행하면서 힘들었던 순간도 많았는데, 선생님이 제 페이스에 맞게 커리큘럼을 조율해주신 덕분에 지치지 않을 수 있었어요.",
      "서울과학고 합격 발표를 봤을 때 너무 기뻐서 눈물이 났습니다. 투스카이가 없었다면 불가능했을 결과입니다. 고등학교에서도 열심히 하겠습니다!",
    ],
  },
  {
    id: 4,
    year: "2025",
    student: "최◯아",
    grade: "고3",
    from: "이화여자고등학교",
    to: "연세대학교 화학과",
    subject: "과학(화학)",
    paragraphs: [
      "화학은 외울 게 너무 많다고 생각해서 기피했던 과목이었습니다. 그런데 투스카이 선생님은 외우게 하지 않으셨어요. 왜 이 물질이 이런 성질을 갖는지, 원리부터 이해시켜 주셨습니다.",
      "모의고사에서 계속 2등급에 머물렀을 때 포기하고 싶었는데, 선생님이 '틀린 문제가 보물'이라고 하시면서 오답 분석을 체계적으로 잡아주셨어요. 그때부터 성적이 눈에 띄게 올랐습니다.",
      "수능 화학1에서 만점을 받았을 때 정말 믿기지 않았습니다. 연세대 합격이라는 결과보다, 스스로 성장했다는 느낌이 더 값졌습니다.",
    ],
  },
  {
    id: 5,
    year: "2025",
    student: "정◯호",
    grade: "N수",
    from: "재수생",
    to: "고려대학교 수학과",
    subject: "수학",
    paragraphs: [
      "재수를 결심했을 때 주변 시선이 두려웠습니다. 하지만 투스카이에서 만난 선생님과 동료들 덕분에 긍정적인 마음으로 다시 시작할 수 있었습니다.",
      "N수반 커리큘럼은 체계적이었어요. 단순히 문제를 많이 푸는 게 아니라, 실수 패턴을 분석하고 시험장에서의 멘탈 관리까지 훈련시켜 주셨습니다. '느리게 가는 게 빠른 길'이라는 말을 그때 처음 실감했습니다.",
      "수능날 수학을 끝내고 나올 때 확신이 있었습니다. 그 확신은 1년간의 성실한 수업과 클리닉이 쌓아준 것이었습니다. 고려대 합격, 투스카이 덕분입니다.",
    ],
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function StoryCard({ story }: { story: typeof STORIES[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* 카드 헤더 */}
      <button
        className="w-full text-left px-6 py-5 flex items-center gap-4 hover:bg-gray-50 transition-colors"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {/* 연도 뱃지 */}
        <span className="shrink-0 text-xs font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full">
          {story.year}
        </span>

        {/* 합격 정보 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-gray-400 text-xs">{story.from}</span>
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-orange-400 fill-current shrink-0">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
            <span className="text-gray-900 font-bold text-sm truncate">{story.to}</span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-gray-500 text-xs">{story.student} · {story.grade}</span>
            <span className="text-xs text-gray-300">|</span>
            <span className="text-xs text-gray-400">{story.subject}</span>
          </div>
        </div>

        {/* 토글 아이콘 */}
        <svg
          viewBox="0 0 24 24"
          className={`w-5 h-5 text-gray-400 fill-current shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      {/* 카드 바디 */}
      {expanded && (
        <div className="px-6 pb-6 pt-1 border-t border-gray-100">
          <div className="space-y-3 mt-4">
            {story.paragraphs.map((para, i) => (
              <p key={i} className="text-gray-600 text-sm leading-7">
                {para}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* 히어로 */}
      <section
        className="relative py-20 flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1200 0%, #0a0a0a 100%)" }}
      >
        {/* 커튼 장식 */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px opacity-10"
            style={{
              left: `${4 + i * 8.5}%`,
              background: "linear-gradient(to bottom, transparent, #c9a84c 30%, #c9a84c 70%, transparent)",
            }}
          />
        ))}

        <div className="relative z-10 flex items-center gap-4 mb-3">
          <svg viewBox="0 0 40 56" className="w-8 h-12 opacity-80" fill="none">
            <path d="M34 28 Q30 14 20 7 Q13 14 12 24 Q15 21 19 22 Q16 29 14 34 Q18 31 22 32 Q19 39 16 44 Q22 41 25 42 Q23 49 20 52" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h1
            className="text-4xl md:text-5xl font-black"
            style={{ background: "linear-gradient(180deg, #f5e17a 0%, #c9a84c 60%, #8b6914 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            합격 수기
          </h1>
          <svg viewBox="0 0 40 56" className="w-8 h-12 opacity-80 scale-x-[-1]" fill="none">
            <path d="M34 28 Q30 14 20 7 Q13 14 12 24 Q15 21 19 22 Q16 29 14 34 Q18 31 22 32 Q19 39 16 44 Q22 41 25 42 Q23 49 20 52" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <p className="relative z-10 text-gray-400 text-sm">투스카이 수강생들의 생생한 합격 이야기</p>
      </section>

      {/* 수기 목록 */}
      <section className="max-w-screen-md mx-auto px-4 py-12">
        <p className="text-gray-400 text-xs text-right mb-4">{STORIES.length}개의 합격 수기</p>
        <div className="flex flex-col gap-3">
          {STORIES.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

    </div>
  );
}
