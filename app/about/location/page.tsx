import type { Metadata } from "next";
import LocationClient from "./client";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "투스카이 수학과학 학원 상동·송도·청라 교육원 위치 및 오시는 길 안내.",
};

export default function LocationPage() {
  return <LocationClient />;
}
