import type { Metadata } from "next";
import Middle2Client from "./client";

export const metadata: Metadata = {
  title: "중2 프로그램",
  description: "투스카이 수학과학 학원 중2 정규·내신 프로그램. 유리수·소수, 연립방정식, 일차함수, 과학 수업 안내.",
};

export default function Middle2Page() {
  return <Middle2Client />;
}
