import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AchievementSection from "@/components/home/AchievementSection";
import PassStorySection from "@/components/home/PassStorySection";
import BrandSection from "@/components/home/BrandSection";
import VideoSection from "@/components/home/VideoSection";
import LocationSection from "@/components/home/LocationSection";
import WhySection from "@/components/home/WhySection";
import ScheduleSection from "@/components/home/ScheduleSection";

export const metadata: Metadata = {
  title: "투스카이 수학과학 학원",
  description: "투스카이 수학과학 학원 — 상동·송도·청라 3개 교육원. 중등·고등 수학·과학 전문, 1:1 개별 클리닉으로 실력을 하늘로.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AchievementSection />
      <PassStorySection />
      <BrandSection />
      <VideoSection />
      <LocationSection />
      <WhySection />
      <ScheduleSection />
    </>
  );
}
