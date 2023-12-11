"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Social App MERN",
    description: "MERN-based Social App: User-friendly platform for account creation, profile customization, post interaction, and admin controls.",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl:'https://github.com/jps27CSE/Social_App_MERN',
    previewUrl:'https://drive.google.com/file/d/1MI0auvwdQjL745ziqD8uaB-y1p_29CvS/view?usp=drive_link'
  },
  {
    id: 2,
    title: "NoteApp MERN",
    description: "Users effortlessly craft profiles, post notes, edit and delete, while updating personal information seamlessly on-demand.",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/jps27CSE/NoteHut_MERN",
    previewUrl:""
  },
  {
    id: 3,
    title: "JobBidPro",
    description: "Effortless login/register, Google login, job addition, updating, bidding, viewing bid requests, accepting/rejecting, and job completion.",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/jps27CSE/Job_Bid_Pro_Client",
    previewUrl:"https://jobbidpro.web.app/"
  },
  {
    id: 4,
    title: "Project Management App",
    description: "Project Management App streamlines collaboration: account creation, task addition, assignment, team tracking, and efficient communication.",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/jps27CSE/Project-Management_React_Firebase",
    previewUrl:"https://project-management-react-23.netlify.app/"
  },
  {
    id: 5,
    title: "Github Finder",
    description: "GitHub Finder simplifies GitHub profile discovery, follower exploration, public repository viewing, and user location checking seamlessly.",
    image: "/images/projects/project5.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/jps27CSE/Github_Finder_React",
    previewUrl:"https://react-github-profile-finder.netlify.app/"
  },
  {
    id: 6,
    title: "Ecommerce App",
    description: "E-commerce Store integrates Strapi admin for effortless management and ensures secure payments through Stripe.",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/jps27CSE/Ecommerce_React_Strapi_Stripe",
    previewUrl:""
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
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
        {/* <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        /> */}
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;