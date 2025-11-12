"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
    <section id="about" className="text-white">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 lg:px-16">
        <Image
          src="/images/about-image.jpg"
          width={500}
          height={500}
          alt="jack pritom soren is coding"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
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

          <div className="flex flex-row justify-start mt-8">
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
