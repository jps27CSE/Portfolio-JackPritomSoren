"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, AnimatePresence } from "framer-motion";
import { useInViewOnce } from "@/lib/utils";

const projectsData = [
  { id: 1, title: "Location-Based Prescription Analysis Tool", description: "Location-based tool for prescription analysis, featuring easy search, detailed drug insights, and comprehensive medicine data.", image: "/images/projects/project0.png", tag: ["All", "Web"], gitUrl: "https://github.com/jps27CSE/RxLocate-Full", previewUrl: "https://drive.google.com/file/d/1GTYBzkJIc6WB1HYUo-h6J2vGbVTcwQF4/view" },
  { id: 2, title: "Devstacker (NPM CLI)", description: "Devstacker CLI scaffolds fullstack apps with popular frontend frameworks, Express backend, and MongoDB. Supports JS & TS.", image: "/images/projects/project8.png", tag: ["All", "NPM Package"], gitUrl: "https://www.npmjs.com/package/devstacker", previewUrl: "https://www.youtube.com/watch?v=Vy8WJS645FA" },
  { id: 3, title: "Glorify Worship Platform", description: "Glorify Worship preserves and shares worship songs sung by family members, built with Next.js and Supabase.", image: "/images/projects/project11.png", tag: ["All", "Web"], gitUrl: "https://github.com/jps27CSE/Glorify_NextJS_Supabase_PostgreSQL_Tailwind", previewUrl: "https://glorifyworship.vercel.app/" },
  { id: 4, title: "Atmos Weather App", description: "Atmos is your go-to solution for accurate and comprehensive weather information with beautiful visualizations.", image: "/images/projects/project9.png", tag: ["All", "Web"], gitUrl: "https://github.com/jps27CSE/Atmos_Tanstack_Query_Shadcn_Recharts", previewUrl: "https://weather-atmos.netlify.app/" },
  { id: 5, title: "LinkUp Video Conference App", description: "LinkUp is a video conferencing app that allows users to connect, collaborate, and communicate seamlessly through video calls.", image: "/images/projects/project10.png", tag: ["All", "Web"], gitUrl: "https://github.com/jps27CSE/Atmos_Tanstack_Query_Shadcn_Recharts", previewUrl: "https://link-up-video.vercel.app/" },
  { id: 6, title: "Rx-Mart - Pharmacy Management", description: "Full-stack e-commerce pharmacy platform using Angular, Express.js, and NeonDB (PostgreSQL) with customer/admin interfaces.", image: "/images/projects/project14.png", tag: ["All", "Web"], gitUrl: "https://github.com/jps27CSE/Social_App_MERN", previewUrl: "https://rx-mart.vercel.app" },
  { id: 7, title: "Social App MERN", description: "MERN-based social app: User-friendly platform for account creation, profile customization, post interaction, and admin controls.", image: "/images/projects/project1.png", tag: ["All", "Web"], gitUrl: "https://github.com/jps27CSE/Social_App_MERN", previewUrl: "https://drive.google.com/file/d/1MI0auvwdQjL745ziqD8uaB-y1p_29CvS/view" },
  { id: 8, title: "JobBidPro", description: "Effortless login/register, Google login, job addition, updating, bidding, viewing bid requests, accepting/rejecting, and job completion.", image: "/images/projects/project3.png", tag: ["All", "Web"], gitUrl: "https://github.com/jps27CSE/Job_Bid_Pro_Client", previewUrl: "https://jobbidpro.web.app/" },
  { id: 12, title: "LuminaShade", description: "Transform your editor with LuminaShade — sleek dark themes for developers who prioritize style, readability, and focus.", image: "/images/projects/project12.png", tag: ["All", "VS Code Extension"], gitUrl: "https://marketplace.visualstudio.com/items?itemName=JackPritomSoren.luminashade", previewUrl: "https://youtu.be/wr0DKzqsttc" },
  { id: 13, title: "MarkTap", description: "MarkTap is a fast, lightweight bookmark manager that lets you instantly save, organize, and search your links.", image: "/images/projects/project13.png", tag: ["All", "Browser Extension"], gitUrl: "https://microsoftedge.microsoft.com/addons/detail/marktap/ecadpdabhodocncmpgbogmllgilaeonf", previewUrl: "https://youtu.be/tYlfEcNih7c" },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [sectionRef, inView] = useInViewOnce();

  const filteredProjects = projectsData.filter((p) => p.tag.includes(tag));

  const tags = ["All", "Web", "NPM Package", "VS Code Extension", "Browser Extension"];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tags.map((t) => (
            <ProjectTag key={t} name={t} onClick={setTag} isSelected={tag === t} />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tag}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
