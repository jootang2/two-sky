import type { Metadata } from "next";
import Middle3Client from "./client";

export const metadata: Metadata = {
  title: "중3 프로그램",
  description: "투스카이 수학과학 학원 중3 정규·내신 프로그램. 실수·제곱근, 인수분해·이차방정식, 이차함수, 과학 수업 안내.",
};

export default function Middle3Page() {
  return <Middle3Client />;
}
