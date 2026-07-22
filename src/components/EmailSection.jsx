"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewOnce } from "@/lib/utils";

const socialLinks = [
  { href: "https://github.com/jps27cse", icon: "/github-icon.svg", alt: "GitHub" },
  { href: "https://www.linkedin.com/in/jps27cse/", icon: "/linkedin-icon.svg", alt: "LinkedIn" },
  { href: "https://www.threads.net/@jps.27", icon: "/threads-app-icon.svg", alt: "Threads" },
  { href: "https://www.youtube.com/@jps27", icon: "/youtube.svg", alt: "YouTube" },
  { href: "https://medium.com/@jackpritomsoren", icon: "/medium.svg", alt: "Medium" },
  { href: "https://dev.to/jps27cse", icon: "/dev-to.svg", alt: "Dev.to" },
];

const EmailSection = () => {
  const [sectionRef, inView] = useInViewOnce();
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    try {
      const res = await fetch('https://formspree.io/f/xnqkewaz', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/5 via-transparent to-violet-600/5 pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-strong rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Have a project, idea, or just want to chat? Feel free to reach out — I&apos;d love to hear from you.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass p-3.5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <Image src={social.icon} alt={social.alt} width={22} height={22} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 space-y-5">
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  name="_replyto"
                  id="email"
                  required
                  className="w-full glass rounded-xl px-4 py-3.5 text-white placeholder-gray-500 border border-white/10 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full glass rounded-xl px-4 py-3.5 text-white placeholder-gray-500 border border-white/10 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 outline-none"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full glass rounded-xl px-4 py-3.5 text-white placeholder-gray-500 border border-white/10 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className={`btn-primary w-full text-center flex items-center justify-center gap-2 ${
                  status === 'sending' ? 'opacity-70' : ''
                }`}
              >
                {status === 'idle' && (
                  <>Send Message <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg></>
                )}
                {status === 'sending' && (
                  <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</>
                )}
                {status === 'sent' && (
                  <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg> Sent! I'll get back to you soon</>
                )}
                {status === 'error' && (
                  <>Something went wrong. Try again.</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
