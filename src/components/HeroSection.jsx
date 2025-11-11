"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import ThreadsIcon from "../../public/threads-app-icon.svg";
import YoutubeIcon from "../../public/youtube.svg";
import MediumIcon from "../../public/medium.svg";
import DevtoIcon from "../../public/dev-to.svg";

/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
  const resumeLink =
    "https://drive.usercontent.google.com/u/0/uc?id=1bfN0q31juRxuzT7hsPZDsbgtRO-DWlUF&export=download";

  const handleDownload = () => {
    window.open(resumeLink, "_blank");
  };
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm {""}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Jack Pritom Soren",
                1000,
                "Software Engineer",
                1000,
                "Full Stack Engineer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
            Passionate Full Stack Engineer with strong frontend expertise in
            JavaScript, React, Next.js, and the MERN Stack, along with practical
            experience in backend technologies like Spring Boot, Supabase, and
            Prisma. Dedicated to building clean, efficient, and scalable
            applications through collaboration and innovation.
          </p>

          <div>
            <Link href="/#contact" passHref>
              <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
                Hire Me
              </button>
            </Link>
            <button
              onClick={handleDownload}
              className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
            <div className="flex flex-row gap-4 mt-4">
              <a
                href="https://github.com/jps27cse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={GithubIcon}
                  alt="GitHub"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/jps27cse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={LinkedinIcon}
                  alt="LinkedIn"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </a>

              <a
                href="https://www.threads.net/@jps.27"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={ThreadsIcon}
                  alt="Threads"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </a>

              <a
                href="https://www.youtube.com/@jps27"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={YoutubeIcon}
                  alt="YouTube"
                  className="w-6 h-6 hover:scale-110 transition-transform "
                />
              </a>

              <a
                href="https://medium.com/@jackpritomsoren"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={MediumIcon}
                  alt="Medium"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </a>

              <a
                href="https://dev.to/jps27cse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={DevtoIcon}
                  alt="Dev.to"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              src="/images/pp.png"
              alt="hero image of jack pritom soren"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
