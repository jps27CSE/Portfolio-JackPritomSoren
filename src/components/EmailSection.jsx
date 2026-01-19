/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import ThreadsIcon from "../../public/threads-app-icon.svg";
import YoutubeIcon from "../../public/youtube.svg";
import MediumIcon from "../../public/medium.svg";
import DevtoIcon from "../../public/dev-to.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
  return (
    <section id="contact" className="py-20 px-0 relative overflow-hidden bg-[#121212]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/20 rounded-full filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-none px-4 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold text-white mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              I'm currently looking for new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best
              to get back to you!
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { href: "https://github.com/jps27cse", icon: GithubIcon, alt: "GitHub" },
                { href: "https://www.linkedin.com/in/jps27cse/", icon: LinkedinIcon, alt: "LinkedIn" },
                { href: "https://www.threads.net/@jps.27", icon: ThreadsIcon, alt: "Threads" },
                { href: "https://www.youtube.com/@jps27", icon: YoutubeIcon, alt: "YouTube" },
                { href: "https://medium.com/@jackpritomsoren", icon: MediumIcon, alt: "Medium" },
                { href: "https://dev.to/jps27cse", icon: DevtoIcon, alt: "Dev.to" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    className="w-6 h-6 group-hover:brightness-110 transition-all"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl backdrop-blur-xl"
          >
            <form action="https://formspree.io/f/xnqkewaz" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="_replyto"
                  id="email"
                  className="glass w-full p-4 rounded-xl border border-gray-600 bg-transparent placeholder-gray-400 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="glass w-full p-4 rounded-xl border border-gray-600 bg-transparent placeholder-gray-400 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="glass w-full p-4 rounded-xl border border-gray-600 bg-transparent placeholder-gray-400 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary py-4 text-lg font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
