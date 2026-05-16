import type { Metadata } from "next";
import High1Client from "./client";

export const metadata: Metadata = {
  title: "고1 프로그램",
  description: "투스카이 수학과학 학원 고1 정규·내신 프로그램. 다항식·방정식, 도형의 방정식, 수열·지수·로그, 통합과학 수업 안내.",
};

export default function High1Page() {
  return <High1Client />;
}
