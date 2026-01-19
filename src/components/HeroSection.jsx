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
    <section className="min-h-screen flex items-center justify-center px-0 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="w-full max-w-none px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-7 place-self-center text-center lg:text-left"
        >
          <div className="glass p-8 mb-8 backdrop-blur-xl">
            <h1 className="text-white max-w-2xl mb-6 lg:text-7xl text-4xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Hello, I'm{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Jack Pritom Soren",
                  1000,
                  "Software Engineer",
                  1000,
                  "Full-Stack Engineer",
                  1000,
                  "Problem Solver",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </h1>
            <p className="text-[#ADB7BE] mb-8 text-lg lg:text-xl leading-relaxed">
              Passionate Full-Stack Engineer with strong frontend expertise in
              JavaScript, React, Next.js, and the MERN Stack, along with
              practical experience in backend technologies like Spring Boot,
              Supabase, and Prisma. Dedicated to building clean, efficient, and
              scalable applications through collaboration and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/#contact" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-4 text-lg font-semibold"
                >
                  Hire Me
                </motion.button>
              </Link>
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Download CV
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {[
                {
                  href: "https://github.com/jps27cse",
                  icon: GithubIcon,
                  alt: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/jps27cse/",
                  icon: LinkedinIcon,
                  alt: "LinkedIn",
                },
                {
                  href: "https://www.threads.net/@jps.27",
                  icon: ThreadsIcon,
                  alt: "Threads",
                },
                {
                  href: "https://www.youtube.com/@jps27",
                  icon: YoutubeIcon,
                  alt: "YouTube",
                },
                {
                  href: "https://medium.com/@jackpritomsoren",
                  icon: MediumIcon,
                  alt: "Medium",
                },
                {
                  href: "https://dev.to/jps27cse",
                  icon: DevtoIcon,
                  alt: "Dev.to",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass p-3 rounded-full hover:bg-white/10 transition-all duration-300 group"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    className="w-6 h-6 group-hover:brightness-110 transition-all"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="col-span-5 place-self-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.4)",
                  "0 0 40px rgba(168, 85, 247, 0.8)",
                  "0 0 20px rgba(168, 85, 247, 0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass lg:w-[400px] lg:h-[400px] w-[280px] h-[280px] rounded-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"></div>
              <Image
                src="/images/pp.png"
                alt="Jack Pritom Soren - Software Engineer"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                width={350}
                height={350}
              />
            </motion.div>

            {/* Floating tech icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass p-3 rounded-full"
            >
              <span className="text-2xl">⚛️</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 glass p-3 rounded-full"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
