"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Location-Based Prescription Analysis Tool",
    description:
      "It's a location-based tool for prescription analysis, featuring easy search, detailed drug insights, and comprehensive medicine data",
    image: "/images/projects/project0.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jps27CSE/RxLocate-Full",
    previewUrl:
      "https://drive.google.com/file/d/1GTYBzkJIc6WB1HYUo-h6J2vGbVTcwQF4/view",
  },
  {
    id: 2,
    title: "Devstacker (NPM CLI)",
    description:
      "Devstacker CLI scaffolds fullstack apps with popular frontend frameworks, Express backend, and MongoDB. Supports JS & TS.",
    image: "/images/projects/project8.png",
    tag: ["All", "NPM Package"],
    gitUrl: "https://www.npmjs.com/package/devstacker",
    previewUrl: "https://www.youtube.com/watch?v=Vy8WJS645FA",
  },
  {
    id: 3,
    title: "Glorify Worship Platform",
    description:
      "Glorify Worship is a personal project aimed at preserving and sharing the worship songs sung by the members of our family. ",
    image: "/images/projects/project11.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/jps27CSE/Glorify_NextJS_Supabase_PostgreSQL_Tailwind",
    previewUrl: "https://glorifyworship.vercel.app/",
  },
  {
    id: 4,
    title: "Atmos Weather App",
    description:
      "Atmos Weather App is your go-to solution for accurate and comprehensive weather information.  ",
    image: "/images/projects/project9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jps27CSE/Atmos_Tanstack_Query_Shadcn_Recharts",
    previewUrl: "https://weather-atmos.netlify.app/",
  },
  {
    id: 5,
    title: "LinkUp Video Conference App",
    description:
      "LinkUp is a video conferencing application that allows users to connect, collaborate, and communicate seamlessly through video calls. ",
    image: "/images/projects/project10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jps27CSE/Atmos_Tanstack_Query_Shadcn_Recharts",
    previewUrl: "https://link-up-video.vercel.app/",
  },
  {
    id: 6,
    title: "Social App MERN",
    description:
      "MERN-based Social App: User-friendly platform for account creation, profile customization, post interaction, and admin controls.",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jps27CSE/Social_App_MERN",
    previewUrl:
      "https://drive.google.com/file/d/1MI0auvwdQjL745ziqD8uaB-y1p_29CvS/view?usp=drive_link",
  },
  {
    id: 7,
    title: "NoteApp MERN",
    description:
      "Users effortlessly craft profiles, post notes, edit and delete, while updating personal information seamlessly on-demand.",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jps27CSE/NoteHut_MERN",
    previewUrl: "",
  },
  {
    id: 8,
    title: "JobBidPro",
    description:
      "Effortless login/register, Google login, job addition, updating, bidding, viewing bid requests, accepting/rejecting, and job completion.",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jps27CSE/Job_Bid_Pro_Client",
    previewUrl: "https://jobbidpro.web.app/",
  },
  {
    id: 9,
    title: "Project Management App",
    description:
      "Project Management App streamlines collaboration: account creation, task addition, assignment, team tracking, and efficient communication.",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jps27CSE/Project-Management_React_Firebase",
    previewUrl: "https://project-management-react-23.netlify.app/",
  },
  {
    id: 10,
    title: "Github Finder",
    description:
      "GitHub Finder simplifies GitHub profile discovery, follower exploration, public repository viewing, and user location checking seamlessly.",
    image: "/images/projects/project5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jps27CSE/Github_Finder_React",
    previewUrl: "https://react-github-profile-finder.netlify.app/",
  },
  {
    id: 11,
    title: "Ecommerce App",
    description:
      "E-commerce Store integrates Strapi admin for effortless management and ensures secure payments through Stripe.",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jps27CSE/Ecommerce_React_Strapi_Stripe",
    previewUrl: "",
  },
  {
    id: 12,
    title: "LuminaShade",
    description:
      "Transform your editor with LuminaShade — sleek dark themes for developers who prioritize style, readability, and focus. Enjoy smooth coding with high contrast.",
    image: "/images/projects/project12.png",
    tag: ["All", "VS Code Extension"],
    gitUrl:
      "https://marketplace.visualstudio.com/items?itemName=JackPritomSoren.luminashade",
    previewUrl: "https://youtu.be/wr0DKzqsttc?si=J6AGBKLJ22fdFVFE",
  },
  {
    id: 13,
    title: "MarkTap",
    description:
      "MarkTap is a fast, lightweight bookmark manager that lets you instantly save, organize, and search your links, keeping everything neatly accessible.",
    image: "/images/projects/project13.png",
    tag: ["All", "Browser Extension"],
    gitUrl:
      "https://microsoftedge.microsoft.com/addons/detail/marktap/ecadpdabhodocncmpgbogmllgilaeonf",
    previewUrl: "https://youtu.be/tYlfEcNih7c?si=7bkWuxyup66FppDO",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold text-white mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-row justify-center items-center gap-3 text-white mb-12 flex-wrap"
        >
          <ProjectTag
            name="All"
            onClick={handleTagChange}
            isSelected={tag === "All"}
          />
          <ProjectTag
            name="Web"
            onClick={handleTagChange}
            isSelected={tag === "Web"}
          />
          <ProjectTag
            name="NPM Package"
            onClick={handleTagChange}
            isSelected={tag === "NPM Package"}
          />
          <ProjectTag
            name="VS Code Extension"
            onClick={handleTagChange}
            isSelected={tag === "VS Code Extension"}
          />
          <ProjectTag
            name="Browser Extension"
            onClick={handleTagChange}
            isSelected={tag === "Browser Extension"}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="h-full"
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
