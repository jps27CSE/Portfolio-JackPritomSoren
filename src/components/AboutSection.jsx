"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInViewOnce } from "@/lib/utils";
import TabButton from "./TabButton";

const GRADIENTS = {
  expertise: 'linear-gradient(135deg, #34d399, #10b981)',
  comfortable: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
  familiar: 'linear-gradient(135deg, #fbbf24, #f97316)',
  ai: 'linear-gradient(135deg, #a78bfa, #ec4899)',
  architecture: 'linear-gradient(135deg, #818cf8, #6366f1)',
  vcs: 'linear-gradient(135deg, #2dd4bf, #14b8a6)',
  editors: 'linear-gradient(135deg, #38bdf8, #3b82f6)',
  tools: 'linear-gradient(135deg, #f472b6, #f43f5e)',
  problem: 'linear-gradient(135deg, #facc15, #f97316)',
  soft: 'linear-gradient(135deg, #c084fc, #a855f7)',
};

const SKILL_CATEGORIES = [
  { title: "Expertise", grad: GRADIENTS.expertise, skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Angular", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend", grad: GRADIENTS.comfortable, skills: ["Node.js", "NestJS", "Express.js", "Spring Boot", "Supabase", "Strapi"] },
  { title: "Databases & ORM", grad: GRADIENTS.familiar, skills: ["MongoDB", "MySQL", "Prisma", "Mongoose", "Vector Databases"] },
  { title: "AI & LLM", grad: GRADIENTS.ai, skills: ["Generative AI", "Prompt Engineering", "RAG", "Agentic AI", "LLM Integration", "AI Application Development"] },
  { title: "Architecture", grad: GRADIENTS.architecture, skills: ["Monolithic Architecture", "Microservices", "RESTful API Design"] },
  { title: "Tools & DevOps", grad: GRADIENTS.tools, skills: ["Docker", "Git", "GitHub", "Postman", "Chrome DevTools"] },
  { title: "AI Dev Tools", grad: GRADIENTS.vcs, skills: ["Claude Code", "Cursor", "OpenCode", "GitHub Copilot"] },
  { title: "Languages", grad: GRADIENTS.editors, skills: ["JavaScript", "TypeScript", "Java", "C", "C++"] },
  { title: "Editors & IDEs", grad: GRADIENTS.editors, skills: ["VS Code", "IntelliJ IDEA", "WebStorm", "Code Blocks", "Visual Studio"] },
  { title: "Integrations", grad: GRADIENTS.familiar, skills: ["Stripe"] },
  { title: "Problem Solving", grad: GRADIENTS.problem, skills: ["LeetCode (jps27CSE)", "Codewars (jps27CSE)"] },
  { title: "Soft Skills", grad: GRADIENTS.soft, skills: ["Teamwork", "Leadership", "Communication", "Cross-functional Collaboration"] },
];

const EDUCATION_DATA = [
  { degree: "B.Sc in Computer Science and Engineering", institution: "Bangladesh University of Business and Technology (BUBT)", location: "Dhaka, Bangladesh", year: "2023", icon: "🎓", grad: 'linear-gradient(135deg, #8b5cf6, #d946ef)' },
  { degree: "Higher Secondary Certificate - Science", institution: "Shahid Bulbul Government College", location: "Pabna, Bangladesh", year: "2019", icon: "📚", grad: 'linear-gradient(135deg, #3b82f6, #06b6d4)' },
  { degree: "Secondary School Certificate - Science", institution: "Pabna Zilla School", location: "Pabna, Bangladesh", year: "2017", icon: "🏫", grad: 'linear-gradient(135deg, #22c55e, #10b981)' },
];

const CERTIFICATION_DATA = [
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2024", icon: "🔒", grad: 'linear-gradient(135deg, #ef4444, #f97316)' },
];

const EXPERIENCE_DATA = [
  {
    position: "Software Engineer Trainee", company: "Square Health Ltd.", location: "Dhaka, Bangladesh", period: "Mar 2024 - Jun 2024", icon: "💼", grad: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    achievements: [
      "Developed a map-based application using AngularJS to visualize doctors' prescription patterns across locations",
      "Collaborated with backend team using Spring Boot to integrate frontend and backend functionalities",
      "Implemented features for detailed location insights and search capabilities by division",
      "Analyzed requirements and provided functionalities for detailed prescription data visualization",
    ],
  },
];

const techStackIcons = [
  { name: "JavaScript", icon: "js" }, { name: "TypeScript", icon: "ts" }, { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" }, { name: "Angular", icon: "angular" }, { name: "Node.js", icon: "nodejs" },
  { name: "NestJS", icon: "nestjs" }, { name: "Express", icon: "express" }, { name: "Spring Boot", icon: "spring" },
  { name: "Supabase", icon: "supabase" }, { name: "MongoDB", icon: "mongodb" }, { name: "MySQL", icon: "mysql" },
  { name: "Prisma", icon: "prisma" }, { name: "Docker", icon: "docker" }, { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" }, { name: "Postman", icon: "postman" }, { name: "Tailwind CSS", icon: "tailwind" },
];

const TAB_DATA = [
  {
    title: "Skills", id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SKILL_CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            className="glass p-4 rounded-xl hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full group-hover:scale-150 transition-transform" style={{ background: cat.grad }} />
              <h3 className="text-base font-bold text-white">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04 + si * 0.02, duration: 0.2 }}
                  className="px-3 py-1 rounded-full text-xs font-medium text-white hover:scale-110 transition-all duration-200" style={{ background: cat.grad }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Education", id: "education",
    content: (
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-fuchsia-500/50 to-transparent" />
        <div className="space-y-8">
          {EDUCATION_DATA.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-14"
            >
              <div className="absolute left-2 w-9 h-9 rounded-full flex items-center justify-center text-lg shadow-lg" style={{ background: edu.grad }}>
                {edu.icon}
              </div>
              <div className="glass p-5 rounded-xl hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-violet-300 text-sm font-medium">{edu.institution}</p>
                <p className="text-gray-500 text-xs mt-1">{edu.location}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: edu.grad }}>{edu.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Certifications", id: "certifications",
    content: (
      <div className="space-y-4">
        {CERTIFICATION_DATA.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="glass p-6 rounded-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-lg" style={{ background: cert.grad }}>{cert.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">Verified</span>
                </div>
                <p className="text-violet-300 text-sm">{cert.issuer}</p>
                <span className="inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-medium text-white" style={{ background: cert.grad }}>{cert.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Experience", id: "experience",
    content: (
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((exp, i) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass p-6 rounded-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-lg" style={{ background: exp.grad }}>{exp.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                <p className="text-violet-300 text-sm font-medium">{exp.company}</p>
                <p className="text-gray-500 text-xs">{exp.location}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: exp.grad }}>{exp.period}</span>
              </div>
            </div>
            <div className="space-y-2 pl-4 border-l border-violet-500/20">
              {exp.achievements.map((ach, ai) => (
                <div key={ai} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{ach}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [sectionRef, inView] = useInViewOnce();

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 relative"
          >
            <div className="sticky top-24">
              <div className="glass-strong rounded-2xl overflow-hidden p-1">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/about-image.jpg"
                    width={500}
                    height={500}
                    alt="Jack Pritom Soren"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070d]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold">Jack Pritom Soren</h3>
                    <p className="text-gray-300 text-sm">Full-Stack Engineer</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 glass rounded-2xl p-5"
              >
                <p className="text-white text-sm leading-relaxed mb-4">
                  Software Engineer (SWE) specializing in Frontend Engineering with hands-on Full Stack Development experience, passionate about building scalable, high-performance, and AI-powered web applications using React.js, Next.js, Angular, Node.js, NestJS, Spring Boot, and TypeScript.
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStackIcons.slice(0, 8).map((tech) => (
                    <motion.img
                      key={tech.name}
                      src={`https://skillicons.dev/icons?i=${tech.icon}`}
                      alt={tech.name}
                      title={tech.name}
                      className="w-7 h-7"
                      whileHover={{ scale: 1.3, rotate: 10 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {TAB_DATA.map((t) => (
                <TabButton key={t.id} selectTab={() => setTab(t.id)} active={tab === t.id}>
                  {t.title}
                </TabButton>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {TAB_DATA.find((t) => t.id === tab).content}
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {techStackIcons.map((tech) => (
                <motion.img
                  key={tech.name}
                  src={`https://skillicons.dev/icons?i=${tech.icon}`}
                  alt={tech.name}
                  title={tech.name}
                  className="w-6 h-6"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
