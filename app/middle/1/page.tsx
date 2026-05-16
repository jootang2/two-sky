import type { Metadata } from "next";
import Middle1Client from "./client";

export const metadata: Metadata = {
  title: "중1 프로그램",
  description: "투스카이 수학과학 학원 중1 정규·내신 프로그램. 수와 연산, 문자와 식, 함수·그래프, 과학 수업 안내.",
};

export default function Middle1Page() {
  return <Middle1Client />;
}
