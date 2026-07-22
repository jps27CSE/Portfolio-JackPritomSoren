"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewOnce } from "@/lib/utils";

const courses = [
  { id: 1, title: "System Design Mastery Course in Bangla", description: "Learn to design scalable and efficient systems. Master fundamental concepts of system architecture and solve real-world design problems.", thumbnail: "/images/courses/systemdesign.jpg", level: "All Levels", price: "Free", category: "System Design", link: "https://www.youtube.com/playlist?list=PLiGGopVZ-5D0lSZmDPBSlg9bT4kncg9aX" },
  { id: 2, title: "JavaScript Deep Concepts Mastery Course (Bangla)", description: "Understand how JavaScript works behind the scenes. Master internals and think like an engineer with practical examples.", thumbnail: "/images/courses/javascript.jpg", level: "Advanced", price: "Free", category: "JavaScript", link: "https://www.youtube.com/playlist?list=PLiGGopVZ-5D0TGaLomf01a7NdUo6hQMzf" },
  { id: 3, title: "Web Security Essentials in Bangla", description: "Learn web authentication, cookies, sessions, JWTs, and essential security concepts explained in Bangla.", thumbnail: "/images/courses/websecurity.jpg", level: "Intermediate", price: "Free", category: "Security", link: "https://www.youtube.com/playlist?list=PLiGGopVZ-5D2SawszQ8kzJAUBCVnCNtjn" },
  { id: 4, title: "AI Engineering for Software Engineers (Bangla)", description: "Build modern AI-powered applications with LLMs, RAG systems, and AI agents.", thumbnail: "/images/courses/ai.png", level: "Beginner to Advanced", price: "Free", category: "AI Engineering", link: "https://www.youtube.com/playlist?list=PLiGGopVZ-5D1V3EDv2ciYLq5cw2AkU-XP" },
  { id: 5, title: "Docker for Developers: Complete Beginner to Pro (Bangla)", description: "Learn Docker from zero to pro with hands-on lessons on containers, images, Docker CLI, and real development workflows.", thumbnail: "/images/courses/docker.png", level: "Beginner to Intermediate", price: "Free", category: "DevOps", link: "https://www.youtube.com/playlist?list=PLiGGopVZ-5D3NSyVK8xrHLQwfPe6oSL3Q" },
];

export default function CoursesSection() {
  const [sectionRef, inView] = useInViewOnce();

  return (
    <section id="courses" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-cyan-600/5 pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Courses
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Explore courses on system design, programming deep dives, frameworks, and real projects
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.a
              key={course.id}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass rounded-2xl overflow-hidden glow-border flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <Image src={course.thumbnail} alt={course.title} width={400} height={250} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-3 left-3 glass px-3 py-1 rounded-full text-xs text-white font-medium">{course.category}</div>
                <div className="absolute bottom-3 right-3 glass px-3 py-1 rounded-full text-xs text-emerald-300 font-medium">{course.price}</div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold line-clamp-2 group-hover:text-violet-300 transition-colors">{course.title}</h3>
                  <span className="text-xs text-gray-400 shrink-0 glass px-2 py-1 rounded-full">{course.level}</span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2 flex-grow">{course.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
