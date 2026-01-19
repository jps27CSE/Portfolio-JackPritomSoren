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
    <main className="flex min-h-screen flex-col bg-[#121212] relative">
      <div className="animated-bg"></div>
      {/* Floating particles */}
      <div className="particle w-2 h-2 bg-purple-500 opacity-60 absolute top-20 left-10"></div>
      <div className="particle w-3 h-3 bg-pink-500 opacity-40 absolute top-40 right-20"></div>
      <div className="particle w-1 h-1 bg-blue-500 opacity-80 absolute bottom-60 left-1/4"></div>
      <div className="particle w-2 h-2 bg-indigo-500 opacity-50 absolute top-1/3 right-1/3"></div>

      <Navbar />
      <HeroSection />
      <div className="container mt-0 mx-auto px-12 py-4 relative z-10">
        {/* <AchievementsSection/> */}
        <AboutSection />
        <ProjectsSection />
        <MediumBlogsSection />
        <YouTubeVideosSection />
        <ResearchPaperOverview />
        <OfficeMemories />
      </div>
      <EmailSection />
      <Footer />
    </main>
  );
}
