// ─── 수정 포인트 ────────────────────────────────────────────────────────────
const PRINCIPAL = {
  name: "이 재 식",
  role: "대표원장",
  keyword: "줄탁동시(啐啄同時)",
  paragraphs: [
    "닭이 알을 깔 때에 알속의 병아리가 껍질을 깨뜨리고 나오기 위하여 껍질 안에서 쪼는 것을 줄이라 하고 어미 닭이 밖에서 쪼아 깨뜨리는 것을 탁이라 합니다.",
    "자신의 꿈을 향해 도전하는 학생들의 노력과 함께 손잡고 바른 방향으로 이끌어주는 선생님의 노력이 만날 때 우리의 교육은 완성됩니다.",
  ],
};

const TEACHERS = [
  {
    name: "김민준",
    role: "수학 수석강사",
    subject: "고등 수학",
    career: [
      "서울대학교 수학교육과 졸업",
      "수능 수학 전문 15년 경력",
      "상위권 대학 합격생 다수 배출",
    ],
  },
  {
    name: "박서준",
    role: "물리 전임강사",
    subject: "고등 물리학",
    career: [
      "KAIST 물리학과 졸업",
      "물리학Ⅰ·Ⅱ 및 수능 물리 전문",
      "물리올림피아드 지도 경력",
    ],
  },
  {
    name: "최지영",
    role: "수학 전임강사",
    subject: "중등 수학",
    career: [
      "연세대학교 수학과 졸업",
      "중학교 수학 내신 전문 10년",
      "개념 기초 완성 특화 수업",
    ],
  },
  {
    name: "정수연",
    role: "화학 전임강사",
    subject: "고등 화학",
    career: [
      "성균관대학교 화학교육과 졸업",
      "화학Ⅰ·Ⅱ 수능 전문 강사",
      "화학올림피아드 입상자 다수 배출",
    ],
  },
  {
    name: "한동훈",
    role: "수학 전임강사",
    subject: "고등 수학",
    career: [
      "고려대학교 수학과 졸업",
      "수학Ⅰ·Ⅱ·미적분·기하 전담",
      "수능 수학 1등급 배출 다수",
    ],
  },
  {
    name: "이수아",
    role: "생명과학 강사",
    subject: "고등 생명과학",
    career: [
      "이화여자대학교 생물학과 졸업",
      "생명과학Ⅰ·Ⅱ 수능 전문",
      "세밀한 개념 정리와 암기법 특화",
    ],
  },
  {
    name: "김태훈",
    role: "수학 강사",
    subject: "중등 수학",
    career: [
      "한양대학교 수학교육과 졸업",
      "중1~중3 전 학년 내신 전담",
      "취약 유형 맞춤 클리닉 전문",
    ],
  },
  {
    name: "박지민",
    role: "지구과학 강사",
    subject: "고등 지구과학",
    career: [
      "부산대학교 지구과학교육과 졸업",
      "지구과학Ⅰ·Ⅱ 수능 전문 강사",
      "자료 분석형 문제 풀이 특화",
    ],
  },
  {
    name: "오세훈",
    role: "수학 강사",
    subject: "중등 수학",
    career: [
      "중앙대학교 수학과 졸업",
      "중등 심화·선행 과정 전담",
      "수학 경시대회 지도 경력",
    ],
  },
];
// ────────────────────────────────────────────────────────────────────────────

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* 대표 선생님 */}
      <section className="px-6 pt-14 pb-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-gray-900 mb-6">대표 선생님</h2>

        {/* 대표원장 카드 */}
        <div className="relative bg-gray-950 rounded-2xl overflow-hidden flex min-h-64">
          {/* 텍스트 */}
          <div className="flex-1 p-8 md:p-12 z-10 relative">
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-[0.15em]">
                {PRINCIPAL.name}
              </h3>
              <span className="text-gray-400 text-sm font-medium">{PRINCIPAL.role}</span>
            </div>
            <p className="text-yellow-400 font-bold text-sm mb-4">{PRINCIPAL.keyword}</p>
            <div className="space-y-3">
              {PRINCIPAL.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 text-sm leading-relaxed">{p}</p>
              ))}
            </div>
          </div>

          {/* 이미지 영역 (플레이스홀더) */}
          <div className="hidden md:block relative w-72 shrink-0">
            {/* 사진 배경 */}
            <div className="absolute inset-0 bg-gray-700" />
            {/* 대각선 오버레이 */}
            <div
              className="absolute inset-0 bg-gray-950"
              style={{ clipPath: "polygon(0 0, 38% 0, 0 100%)" }}
            />
          </div>
        </div>
      </section>

      {/* 강사진 */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-gray-900 mb-8">강사진</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEACHERS.map((teacher) => (
            <div
              key={teacher.name}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* 사진 플레이스홀더 */}
              <div className="bg-gray-100 h-48 w-full" />

              {/* 정보 */}
              <div className="p-5">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-lg font-black text-gray-900">{teacher.name}</span>
                  <span className="text-xs text-gray-400 font-medium">{teacher.role}</span>
                </div>
                <span className="inline-block text-xs font-semibold text-orange-500 bg-orange-50 px-2.5 py-0.5 rounded-full mb-3">
                  {teacher.subject}
                </span>
                <ul className="space-y-1">
                  {teacher.career.map((item, i) => (
                    <li key={i} className="flex gap-1.5 text-xs text-gray-500 leading-snug">
                      <span className="text-orange-400 mt-0.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
