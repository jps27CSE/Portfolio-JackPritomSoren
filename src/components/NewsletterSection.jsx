"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewOnce } from "@/lib/utils";

export default function NewsletterSection() {
  const [sectionRef, inView] = useInViewOnce();

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[100px]" />

          <div className="relative z-10 text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Inside the Stack with Jack</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Full-stack engineering, system design, and AI — real-world patterns, scalable architectures, and practical programming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative group mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <Image src="/images/newsletter.jpg" alt="Newsletter" width={350} height={250} className="relative z-10 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="space-y-6">
              <div className="glass rounded-xl p-5">
                <h3 className="text-white font-semibold mb-3">What You&apos;ll Get:</h3>
                <div className="space-y-2.5">
                  {["Deep dives into full-stack architecture", "System design patterns and best practices", "Software engineering career tips", "RAG, AI topics, and practical programming"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7429800998791196672" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center text-sm">
                  Subscribe on LinkedIn
                </a>
                <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7429800998791196672" target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center text-sm">
                  View Latest Post
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="glass rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold gradient-text">1000+</div>
                  <div className="text-xs text-gray-400">Active Subscribers</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
