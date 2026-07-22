import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MediumBlogsSection from "@/components/MediumBlogsSection";
import Navbar from "@/components/Navbar";
import PhotoAlbum from "@/components/PhotoAlbum";
import ProjectsSection from "@/components/ProjectsSection";
import CoursesSection from "@/components/CoursesSection";
import YouTubeVideosSection from "@/components/YouTubeVideosSection";
import ResearchPaperSection from "@/components/ResearchPaperSection";
import NewsletterSection from "@/components/NewsletterSection";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="relative bg-[#07070d]">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <MediumBlogsSection />
      <SectionDivider />
      <YouTubeVideosSection />
      <SectionDivider />
      <ResearchPaperSection />
      <SectionDivider />
      <NewsletterSection />
      <SectionDivider />
      <CoursesSection />
      <SectionDivider />
      <PhotoAlbum />
      <SectionDivider />
      <EmailSection />
      <Footer />
    </main>
  );
}
