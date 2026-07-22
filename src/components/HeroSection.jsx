"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParticleBackground from "./ParticleBackground";

const socialLinks = [
  { href: "https://github.com/jps27cse", icon: "/github-icon.svg", alt: "GitHub" },
  { href: "https://www.linkedin.com/in/jps27cse/", icon: "/linkedin-icon.svg", alt: "LinkedIn" },
  { href: "https://www.threads.net/@jps.27", icon: "/threads-app-icon.svg", alt: "Threads" },
  { href: "https://www.youtube.com/@jps27", icon: "/youtube.svg", alt: "YouTube" },
  { href: "https://medium.com/@jackpritomsoren", icon: "/medium.svg", alt: "Medium" },
  { href: "https://dev.to/jps27cse", icon: "/dev-to.svg", alt: "Dev.to" },
];

const floatingTechs = [
  { icon: "/nextjs-icon.svg", label: "Next.js", x: "85%", y: "12%", delay: 0 },
  { icon: "/angular-icon.svg", label: "Angular", x: "15%", y: "10%", delay: 0.5 },
  { icon: "/springboot-icon.svg", label: "Spring Boot", x: "10%", y: "72%", delay: 1 },
  { icon: "/ai-icon.svg", label: "AI", x: "88%", y: "68%", delay: 1.5 },
  { icon: "/nodejs-icon.svg", label: "Node.js", x: "5%", y: "42%", delay: 2 },
];

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const resumeLink = "https://drive.usercontent.google.com/u/0/uc?id=1bfN0q31juRxuzT7hsPZDsbgtRO-DWlUF&export=download";

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground count={80} color="rgba(168, 85, 247, 0.3)" />

      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] pulse-glow" style={{ animationDelay: "-1.5s" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pulse-glow" style={{ animationDelay: "-3s" }} />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center lg:text-left"
        >


          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white/90">Hi, I&apos;m </span>
            <span className="gradient-text">Jack Pritom Soren</span>
            <br />
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full-Stack Engineer",
                2000,
                "Problem Solver",
                2000,
                "Content Creator",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text-duo text-4xl sm:text-5xl lg:text-6xl"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
          >
            Full-Stack Software Engineer specializing in React.js, Next.js, Angular, TypeScript, Node.js, NestJS, Spring Boot, and Docker. Passionate about building scalable, high-performance, and AI-powered web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4 text-lg"
              >
                Hire Me
              </motion.button>
            </a>
            <motion.a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-4 text-lg inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="glass p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
              >
                <Image src={social.icon} alt={social.alt} width={22} height={22} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ boxShadow: ["0 0 30px rgba(168,85,247,0.3)", "0 0 60px rgba(168,85,247,0.6)", "0 0 30px rgba(168,85,247,0.3)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden glass-strong"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-full" />
            <Image
              src="/images/pp.png"
              alt="Jack Pritom Soren"
              className="object-cover object-center"
              fill
              priority
              sizes="(max-width: 768px) 300px, 400px"
            />
          </motion.div>

          {floatingTechs.map((tech) => (
            <motion.div
              key={tech.label}
              className="absolute glass p-3 rounded-xl hidden lg:flex items-center gap-2 shadow-lg"
              style={{ left: tech.x, top: tech.y }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: tech.delay }}
            >
              <Image src={tech.icon} alt={tech.label} width={20} height={20} className="opacity-90" />
              <span className="text-xs font-medium text-white/80">{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-violet-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
