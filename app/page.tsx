import HeroSection from "@/components/home/HeroSection";
import AchievementSection from "@/components/home/AchievementSection";
import PassStorySection from "@/components/home/PassStorySection";
import BrandSection from "@/components/home/BrandSection";
import VideoSection from "@/components/home/VideoSection";
import LocationSection from "@/components/home/LocationSection";
import WhySection from "@/components/home/WhySection";
import ScheduleSection from "@/components/home/ScheduleSection";

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
