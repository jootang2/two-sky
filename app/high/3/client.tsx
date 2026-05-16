"use client";

import { useState } from "react";

// ─── 수정 포인트 ────────────────────────────────────────────────────────────
const BRANCHES = ["상동", "송도", "청라"] as const;

const REGULAR_SUBJECTS = [
  {
    label: "미적분",
    lines: [
      "수열의 극한, 함수의 극한과 연속, 미분·적분의 활용",
      "수능 수학 킬러 문항 집중 훈련 및 풀이 전략 완성",
    ],
  },
  {
    label: "기하·확통",
    lines: [
      "이차곡선, 벡터, 공간도형과 공간좌표",
      "통계적 추정, 정규분포 활용 수능 실전 문제 훈련",
    ],
  },
  {
    label: "과학탐구Ⅰ",
    lines: [
      "물리학Ⅱ / 화학Ⅱ / 생명과학Ⅱ / 지구과학Ⅱ 선택 과목",
      "수능 출제 경향 분석 및 고난도 문제 집중 완성",
    ],
  },
  {
    label: "EBS 연계",
    lines: [
      "수능 EBS 수학·과학 연계 교재 핵심 내용 정리",
      "연계율을 고려한 전략적 학습으로 효율 극대화",
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
  label: "고 3 클리닉",
  lines: [
    "월 1회 실시 (1회 90~100분), 평일 수, 목, 금 택1",
    "월례평가 후 1:1 취약 단원 집중 보완 및 풀이 과정 점검",
    "수업 이해도 확인 및 교재·개별과제 점검",
  ],
};

const TEXTBOOKS_REGULAR = [
  { type: "학원 구입 자체 교재", name: "학원 자체 수능 대비 교재", note: null },
  { type: "시중 구입 별도 교재", name: "수능특강 / 수능완성 (EBS)", note: "(원내구입가능)" },
];

const NAESHIN_WEEKS = [
  { label: "1~3 주차", desc: "학교별 교과서 기반 진도별 개념 수업 및 수능 유형 훈련" },
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
  label: "고 3 클리닉",
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
    title: "월례평가 / 모의고사",
    desc: "수능 실전 감각을 극대화하기 위해 매월 모의고사 형식의 월례평가를 실시합니다. 수능 기출 및 EBS 연계 문제를 포함한 실전형 평가로 취약 유형을 즉시 보완하고, 수능까지의 남은 기간을 효율적으로 관리합니다.",
    date: "매월 마지막 주",
    details: [
      "수능 기출·EBS 연계 문제 포함 실전형 출제",
      "성적표 및 영역별 취약 유형 분석표 제공",
    ],
  },
  {
    title: "수능 파이널 특강",
    desc: "수능 직전 최종 마무리를 위한 파이널 특강을 운영합니다. 수학과 과학탐구 전 범위를 압축 정리하고, 고난도 문항 풀이 전략과 실전 시간 배분 훈련을 집중적으로 진행합니다.",
    date: "수능 4주 전 ~ 수능 전날",
    details: [
      "수학·과학탐구 전 범위 압축 총정리",
      "킬러 문항 풀이 전략 및 실전 시간 관리 훈련",
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

export default function High3Client() {
  const [activeBranch, setActiveBranch] = useState<string>("상동");

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-36 bg-gray-700 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-bold text-white mb-1">고 3</h1>
          <p className="text-gray-300 text-sm tracking-wide">정규 및 수능 대비 프로그램 안내</p>
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
