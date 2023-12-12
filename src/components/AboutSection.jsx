/* eslint-disable react/no-unescaped-entities */
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
        <li> <span className="font-bold">Expertise:</span> JavaScript, React JS, HTML, CSS, Tailwind CSS</li>
        <li> <span className="font-bold">Comfortable:</span> Node JS, Express JS, MongoDB</li>
        <li> <span className="font-bold">Familiar::</span> Next JS, Typescript, MySQL, Stripe, Strapi</li>
        <li> <span className="font-bold">Version Control, DevOps & OS:</span> Git & GitHub, Windows, Linux</li>
        <li> <span className="font-bold">Editor/IDE:</span> VS Code, Code Blocks, Visual Studio, IntelliJ IDEA</li>
        <li> <span className="font-bold">Tools and Software:</span> Postman, Chrome Dev Tool, MS Excel, MS Word, MS PowerPoint</li>
        <li> <span className="font-bold">Problem Solving:</span> LeetCode (jps27CSE), Codewars (jps27CSE)</li>
        <li > <span className="font-bold">Interpersonal Skills:</span> Teamwork, Leadership, Communication</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Sc in Computer Science and Engineering (CSE) | Bangladesh University of Business and Technology (BUBT), Dhaka, Bangladesh (2023)</li>
        <li>Higher Secondary Certificate | Science Group | Shahid Bulbul Government College (2019)</li>
        <li>Secondary School Certificate | Science Group | Pabna Zilla School (2017)</li>
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
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} alt="jack pritom soren is coding" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
          I'm a MERN Stack Developer who enjoys learning new technologies and writing JavaScript code. With expertise in React.js, Node.js, Express.js, and MongoDB, I'm passionate about developing scalable web applications. I'm constantly searching for fresh challenges and chances to progress as a developer.
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