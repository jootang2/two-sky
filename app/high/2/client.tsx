"use client";

import { useState } from "react";

// ─── 수정 포인트 ────────────────────────────────────────────────────────────
const BRANCHES = ["상동", "송도", "청라"] as const;

const REGULAR_SUBJECTS = [
  {
    label: "삼각함수·미분",
    lines: [
      "삼각함수 그래프, 극한과 미분의 기초 개념",
      "미분을 활용한 함수의 증가·감소, 최댓값·최솟값 분석",
    ],
  },
  {
    label: "확률과 통계",
    lines: [
      "경우의 수, 순열·조합, 이항정리",
      "확률의 성질과 조건부확률, 확률분포 개념 완성",
    ],
  },
  {
    label: "물리학Ⅰ",
    lines: [
      "역학적 에너지, 전기·자기, 파동과 빛",
      "개념 이해 중심 수업과 수능 유형별 문제 풀이",
    ],
  },
  {
    label: "화학Ⅰ",
    lines: [
      "화학 결합, 산화·환원 반응, 화학 평형",
      "개념 원리 이해와 계산 문제 집중 훈련",
    ],
  },
];

const REGULAR_SCHEDULE = [
  { label: "1타임", slots: ["토 09:00~12:00"] },
  { label: "2타임", slots: ["토 13:00~16:00", "일 13:00~16:00"] },
  { label: "과학반", slots: ["토 16:00~19:00"] },
];

const CLINIC_REGULAR = {
  subtitle: "월 1회 클리닉: 1:1 밀착지도 진행",
  label: "고 2 클리닉",
  lines: [
    "월 1회 실시 (1회 90~100분), 평일 수, 목, 금 택1",
    "월례평가 후 1:1 취약 단원 집중 보완 및 풀이 과정 점검",
    "수업 이해도 확인 및 교재·개별과제 점검",
  ],
};

const TEXTBOOKS_REGULAR = [
  { type: "학원 구입 자체 교재", name: "학원 자체 개념서 / 워크북", note: null },
  { type: "시중 구입 별도 교재", name: "수학의 정석 / 일품", note: "(원내구입가능)" },
];

const NAESHIN_WEEKS = [
  { label: "1~3 주차", desc: "학교별 교과서 기반 진도별 개념 수업 및 유형 훈련" },
  { label: "4~5 주차", desc: "내신 기출 문제집으로 실전 기출 문제 풀이 수업" },
  { label: "6 주차", desc: "시험 전날 파이널 직전 수업으로 전범위 총정리" },
];

const NAESHIN_SCHEDULE = [
  { time: "09:00 ~ 12:00", sat: "상일고", sun: "중원고" },
  { time: "13:00 ~ 16:00", sat: "석천고", sun: "계남고" },
  { time: "16:00 ~ 19:00", sat: "중흥고", sun: "상도고" },
];

const CLINIC_NAESHIN = {
  subtitle: "월 2회 클리닉: 1:1 밀착지도 진행",
  label: "고 2 클리닉",
  lines: [
    "월 1회 실시 (1회 90~100분), 평일 수, 목, 금 택1",
    "전차시 복습 테스트 후 1:1 오답 분석 및 학습 상담 진행",
    "수업 이해도 확인 및 교재·개별과제 점검",
  ],
};

const TEXTBOOKS_NAESHIN = [
  { type: "학원 구입 자체 교재", name: "학교별 내신대비집", note: null },
  { type: "시중 구입 별도 교재", name: "자습서 / 평가문제집", note: "출판사별" },
];

const ASSESSMENTS = [
  {
    title: "월례평가",
    desc: "매월 실시하는 월례평가를 통해 학생의 현재 수준을 객관적으로 파악하고, 취약 단원을 조기에 발견하여 집중 보완합니다. 평가 결과는 개인 성적표로 제공되며, 누적 데이터를 통해 성장 추이를 확인할 수 있습니다.",
    date: "매월 마지막 주",
    details: [
      "수학·과학 전 범위 수준별 문제 출제",
      "평가 결과: 성적표 및 취약 유형 분석표 제공",
    ],
  },
  {
    title: "모의고사 대비",
    desc: "교육청·수능 기출 모의고사를 통해 실전 감각을 키웁니다. 수학과 과학탐구 각 영역의 시간 배분 전략과 유형별 풀이법을 체계적으로 훈련하여 고3 수능 대비의 기초를 완성합니다.",
    date: "연 4회 (3월 / 6월 / 9월 / 11월)",
    details: [
      "교육청·수능 기출 문제 집중 분석 및 풀이 전략 수립",
      "취약 유형별 집중 보완 및 시간 관리 훈련",
    ],
  },
];
// ────────────────────────────────────────────────────────────────────────────

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center px-4 py-1.5 bg-orange-400 text-white text-sm font-semibold rounded-full whitespace-nowrap shrink-0">
      {children}
    </span>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-3 mb-6">
      <h2 className="text-xl font-bold text-orange-400">{title}</h2>
      {subtitle && <span className="text-sm text-orange-400">{subtitle}</span>}
    </div>
  );
}

function BookCard({ type, name, note }: { type: string; name: string; note: string | null }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 flex gap-4 items-center">
      <div className="w-16 h-20 bg-gray-200 rounded shrink-0" />
      <div>
        <p className="text-sm font-semibold text-gray-800">{type}</p>
        <p className="text-sm text-gray-600 mt-1">{name}</p>
        {note && <p className="text-xs text-gray-400 mt-0.5">{note}</p>}
      </div>
    </div>
  );
}

function ClinicCard({ config }: { config: typeof CLINIC_REGULAR }) {
  return (
    <section className="mb-10">
      <SectionHeading title="개별클리닉" subtitle={config.subtitle} />
      <div className="bg-gray-100 rounded-xl p-5 flex gap-4">
        <Badge>{config.label}</Badge>
        <div className="text-sm text-gray-700 leading-relaxed space-y-1 pt-0.5">
          {config.lines.map((line, i) => <p key={i}>{line}</p>)}
        </div>
      </div>
    </section>
  );
}

export default function High2Client() {
  const [activeBranch, setActiveBranch] = useState<string>("상동");

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-36 bg-gray-700 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-bold text-white mb-1">고 2</h1>
          <p className="text-gray-300 text-sm tracking-wide">정규 및 내신 프로그램 안내</p>
        </div>
      </section>

      <div className="flex justify-center gap-4 py-8">
        {BRANCHES.map((branch) => (
          <button
            key={branch}
            onClick={() => setActiveBranch(branch)}
            className={`px-8 py-2 rounded-full border text-sm font-medium transition-colors ${
              activeBranch === branch
                ? "border-orange-400 bg-orange-400 text-white"
                : "border-gray-300 text-gray-600 hover:border-orange-300"
            }`}
          >
            {branch}
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-24">
        <section className="mb-12">
          <SectionHeading title="정규수업" subtitle="월 4회 수업 (주 1회, 3시간)" />
          <div className="space-y-5">
            {REGULAR_SUBJECTS.map((subject) => (
              <div key={subject.label} className="flex gap-4">
                <Badge>{subject.label}</Badge>
                <div className="text-sm text-gray-700 leading-relaxed pt-0.5">
                  {subject.lines.map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading title="정규시간표" />
          <div className="space-y-4">
            {REGULAR_SCHEDULE.map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <Badge>{row.label}</Badge>
                <span className="text-sm text-gray-700">{row.slots.join("  |  ")}</span>
              </div>
            ))}
          </div>
        </section>

        <ClinicCard config={CLINIC_REGULAR} />

        <section className="mb-20">
          <SectionHeading title="교재안내" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEXTBOOKS_REGULAR.map((book) => <BookCard key={book.type} {...book} />)}
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="내신수업" />
          <div className="space-y-5">
            {NAESHIN_WEEKS.map((week) => (
              <div key={week.label} className="flex gap-4 items-start">
                <Badge>{week.label}</Badge>
                <p className="text-sm text-gray-700 pt-0.5">{week.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading title="내신시간표" />
          <div className="space-y-4">
            {NAESHIN_SCHEDULE.map((row) => (
              <div key={row.time} className="flex items-center gap-4">
                <Badge>{row.time}</Badge>
                <span className="text-sm text-gray-700">
                  토 {row.sat}&nbsp;&nbsp;|&nbsp;&nbsp;일 {row.sun}
                </span>
              </div>
            ))}
          </div>
        </section>

        <ClinicCard config={CLINIC_NAESHIN} />

        <section className="mb-20">
          <SectionHeading title="교재안내" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEXTBOOKS_NAESHIN.map((book) => <BookCard key={book.type} {...book} />)}
          </div>
        </section>

        <div className="space-y-16">
          {ASSESSMENTS.map((item) => (
            <section key={item.title}>
              <h2 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.desc}</p>
              <div className="flex items-center gap-4 mb-4">
                <Badge>일시</Badge>
                <span className="text-sm text-gray-700">{item.date}</span>
              </div>
              <div className="flex gap-4 items-start">
                <Badge>상세 내용</Badge>
                <ul className="text-sm text-gray-700 space-y-1 pt-0.5">
                  {item.details.map((d, i) => (
                    <li key={i} className="flex gap-2"><span>•</span><span>{d}</span></li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
