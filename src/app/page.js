import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MediumBlogsSection from "@/components/MediumBlogsSection";
import Navbar from "@/components/Navbar";
import OfficeMemories from "@/components/PhotoAlbum";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchPaperOverview from "@/components/ResearchPaperSection";
import YouTubeVideosSection from "@/components/YouTubeVideosSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection/> */}
        <AboutSection />
        <ProjectsSection />
        <MediumBlogsSection />
        <YouTubeVideosSection />
        <ResearchPaperOverview />
        <OfficeMemories />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
