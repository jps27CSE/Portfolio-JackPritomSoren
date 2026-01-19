"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="font-bold">Expertise:</span> JavaScript, React JS,
          HTML, CSS, Tailwind CSS
        </li>

        <li>
          <span className="font-bold">Comfortable:</span> Angular JS, Node JS,
          Express JS, MongoDB, Spring Boot, Supabase
        </li>

        <li>
          <span className="font-bold">Familiar:</span> Next JS, TypeScript,
          MySQL, Stripe, PrimeNG, Strapi, Spring Security, Docker, Prisma
        </li>

        <li>
          <span className="font-bold">Architecture Knowledge:</span> Monolithic
          Architecture, Microservice Architecture
        </li>

        <li>
          <span className="font-bold">Version Control, DevOps & OS:</span> Git &
          GitHub, Windows, Linux
        </li>

        <li>
          <span className="font-bold">Editor/IDE:</span> VS Code, Code Blocks,
          Visual Studio, IntelliJ IDEA, WebStorm
        </li>

        <li>
          <span className="font-bold">Tools and Software:</span> Postman, Chrome
          Dev Tool, MS Excel, MS Word, MS PowerPoint
        </li>

        <li>
          <span className="font-bold">Problem Solving:</span> LeetCode
          (jps27CSE), Codewars (jps27CSE)
        </li>

        <li>
          <span className="font-bold">Interpersonal Skills:</span> Teamwork,
          Leadership, Communication
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          B.Sc in Computer Science and Engineering (CSE) | Bangladesh University
          of Business and Technology (BUBT), Dhaka, Bangladesh (2023)
        </li>
        <li>
          Higher Secondary Certificate | Science Group | Shahid Bulbul
          Government College (2019)
        </li>
        <li>
          Secondary School Certificate | Science Group | Pabna Zilla School
          (2017)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Introduction to Cybersecurity (Cisco Networking Academy)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div>
        <span className="font-bold">Software Engineer Trainee (Frontend)</span>
        <br />
        <span className="text-gray-500">
          Square Health Ltd. | Dhaka, Bangladesh | Mar 2024 - Jun 2024
        </span>

        <ul className="list-disc pl-2">
          <ul className="list-disc pl-4">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <li>
              Developed a map-based application using AngularJS to visualize
              doctors' prescription patterns across different locations.
            </li>
            <li>
              Collaborated with a backend team using Spring Boot to integrate
              frontend and backend functionalities.
            </li>
            <li>
              Implemented features for detailed location insights and search
              capabilities by division.
            </li>
            <li>
              Analyzed requirements and provided functionalities for detailed
              prescription data visualization.
            </li>
          </ul>
        </ul>
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
