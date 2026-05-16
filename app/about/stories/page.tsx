import type { Metadata } from "next";
import StoriesClient from "./client";

export const metadata: Metadata = {
  title: "합격 수기",
  description: "투스카이 수학과학 학원 수강생들의 서울대·카이스트·연세대 등 합격 수기 모음.",
};

export default function StoriesPage() {
  return <StoriesClient />;
}
