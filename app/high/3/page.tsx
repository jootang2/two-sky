import type { Metadata } from "next";
import High3Client from "./client";

export const metadata: Metadata = {
  title: "고3 프로그램",
  description: "투스카이 수학과학 학원 고3 수능 대비 프로그램. 미적분, 기하·확통, 과학탐구Ⅱ, EBS 연계 수업 및 파이널 특강 안내.",
};

export default function High3Page() {
  return <High3Client />;
}
