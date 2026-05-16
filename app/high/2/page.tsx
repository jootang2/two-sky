import type { Metadata } from "next";
import High2Client from "./client";

export const metadata: Metadata = {
  title: "고2 프로그램",
  description: "투스카이 수학과학 학원 고2 정규·내신 프로그램. 삼각함수·미분, 확률과 통계, 물리학Ⅰ, 화학Ⅰ 수업 안내.",
};

export default function High2Page() {
  return <High2Client />;
}
