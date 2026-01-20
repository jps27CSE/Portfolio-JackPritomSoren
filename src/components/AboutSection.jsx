"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Expertise",
    color: "from-green-400 to-emerald-500",
    skills: ["JavaScript", "React JS", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Comfortable",
    color: "from-blue-400 to-cyan-500",
    skills: ["Angular JS", "Node JS", "Express JS", "MongoDB", "Spring Boot", "Supabase"]
  },
  {
    title: "Familiar",
    color: "from-orange-400 to-red-500",
    skills: ["Next JS", "TypeScript", "MySQL", "Stripe", "PrimeNG", "Strapi", "Spring Security", "Docker", "Prisma"]
  },
  {
    title: "Architecture",
    color: "from-purple-400 to-pink-500",
    skills: ["Monolithic Architecture", "Microservice Architecture"]
  },
  {
    title: "Version Control & OS",
    color: "from-indigo-400 to-purple-500",
    skills: ["Git & GitHub", "Windows", "Linux"]
  },
  {
    title: "Editors & IDEs",
    color: "from-cyan-400 to-blue-500",
    skills: ["VS Code", "Code Blocks", "Visual Studio", "IntelliJ IDEA", "WebStorm"]
  },
  {
    title: "Tools & Software",
    color: "from-pink-400 to-rose-500",
    skills: ["Postman", "Chrome Dev Tool", "MS Excel", "MS Word", "MS PowerPoint"]
  },
  {
    title: "Problem Solving",
    color: "from-yellow-400 to-orange-500",
    skills: ["LeetCode (jps27CSE)", "Codewars (jps27CSE)"]
  },
  {
    title: "Soft Skills",
    color: "from-teal-400 to-green-500",
    skills: ["Teamwork", "Leadership", "Communication"]
  }
];

const EDUCATION_DATA = [
  {
    degree: "B.Sc in Computer Science and Engineering",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    location: "Dhaka, Bangladesh",
    year: "2023",
    icon: "🎓",
    color: "from-purple-500 to-pink-500"
  },
  {
    degree: "Higher Secondary Certificate - Science",
    institution: "Shahid Bulbul Government College",
    location: "Pabna, Bangladesh",
    year: "2019",
    icon: "📚",
    color: "from-blue-500 to-cyan-500"
  },
  {
    degree: "Secondary School Certificate - Science",
    institution: "Pabna Zilla School",
    location: "Pabna, Bangladesh",
    year: "2017",
    icon: "🏫",
    color: "from-green-500 to-emerald-500"
  }
];

const CERTIFICATION_DATA = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    icon: "🔒",
    color: "from-red-500 to-orange-500",
    badge: "Verified"
  }
];

const EXPERIENCE_DATA = [
  {
    position: "Software Engineer Trainee (Frontend)",
    company: "Square Health Ltd.",
    location: "Dhaka, Bangladesh",
    period: "Mar 2024 - Jun 2024",
    icon: "💼",
    color: "from-blue-500 to-indigo-500",
    achievements: [
      "Developed a map-based application using AngularJS to visualize doctors' prescription patterns across different locations",
      "Collaborated with backend team using Spring Boot to integrate frontend and backend functionalities",
      "Implemented features for detailed location insights and search capabilities by division",
      "Analyzed requirements and provided functionalities for detailed prescription data visualization"
    ]
  }
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="glass p-4 rounded-lg hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
              <h3 className="text-base font-bold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index * 0.05) + (skillIndex * 0.02), duration: 0.2 }}
                  className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white hover:scale-105 transition-all duration-200 cursor-default`}
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
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-6">
        {EDUCATION_DATA.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 relative"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                {edu.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-purple-300 font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-400 text-sm mb-3">{edu.location}</p>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} text-white font-medium`}>
                  {edu.year}
                </div>
              </div>
            </div>
            {index < EDUCATION_DATA.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent"></div>
            )}
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-6">
        {CERTIFICATION_DATA.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-3xl`}>
                {cert.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">
                    {cert.badge}
                  </span>
                </div>
                <p className="text-purple-300 font-medium mb-2">{cert.issuer}</p>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${cert.color} text-white font-medium`}>
                  {cert.year}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                {exp.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                <p className="text-purple-300 font-medium mb-1">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white font-medium`}>
                  {exp.period}
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {exp.achievements.map((achievement, achIndex) => (
                <motion.div
                  key={achIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index * 0.2) + (achIndex * 0.1), duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills"); // Default to "skills" tab
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 rounded-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/about-image.jpg"
                  width={500}
                  height={500}
                  alt="Jack Pritom Soren - Full Stack Software Engineer working on code, showcasing development skills and passion for programming"
                  className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Passionate Developer</h3>
                  <p className="text-gray-300">Building the future, one line at a time</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Who I Am</h3>
            <p className="text-white text-base md:text-lg">
              Software Engineer (SWE) specializing in Frontend development with
              hands-on experience in Full Stack technologies. Proficient in
              JavaScript, React, Next.js, and Angular, with practical experience
              in backend development using Node.js, Express.js, Spring Boot, and
              Supabase. Skilled in working with both relational and NoSQL
              databases and familiar with Prisma ORM, Docker, and architectural
              patterns such as Monolithic and Microservice systems. Passionate
              about building scalable, maintainable applications and delivering
              clean, efficient solutions through collaboration and innovation.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 mb-8"
            >
              <div className="grid grid-cols-4 gap-1">
                {[
                  { name: "JavaScript", icon: "js" },
                  { name: "React", icon: "react" },
                  { name: "Angular", icon: "angular" },
                  { name: "Node.js", icon: "nodejs" },
                  { name: "Express", icon: "express" },
                  { name: "MongoDB", icon: "mongodb" },
                  { name: "Spring Boot", icon: "spring" },
                  { name: "Supabase", icon: "supabase" },
                  { name: "Next.js", icon: "nextjs" },
                  { name: "TypeScript", icon: "ts" },
                  { name: "Docker", icon: "docker" },
                  { name: "Prisma", icon: "prisma" },
                  { name: "GitHub", icon: "github" },
                  { name: "Git", icon: "git" },
                  { name: "Postman", icon: "postman" },
                  { name: "PostgreSQL", icon: "postgres" }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center transition-all duration-300 group cursor-pointer"
                    title={tech.name}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${tech.icon}`}
                      alt={tech.name}
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-4">
              <div className="flex flex-row justify-start gap-2 flex-wrap">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  Skills
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  Education
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("certifications")}
                  active={tab === "certifications"}
                >
                  Certifications
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("experience")}
                  active={tab === "experience"}
                >
                  Experience
                </TabButton>
              </div>

              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass p-6 rounded-xl"
              >
                {TAB_DATA.find((t) => t.id === tab).content}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
