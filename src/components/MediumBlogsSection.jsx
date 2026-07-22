"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInViewOnce } from "@/lib/utils";

const fallbackBlogs = [
  {
    title: "Understanding Microservices Architecture — From Monolith to Modern Scalability",
    link: "https://medium.com/@jackpritomsoren/understanding-microservices-architecture-from-monolith-to-modern-scalability-22e6d45971e8",
    thumbnail: "/images/medium/1.png",
  },
  {
    title: "Understanding JavaScript Asynchronous Programming: Callbacks, Promises, and Async/Await",
    link: "https://medium.com/@jackpritomsoren/understanding-javascript-asynchronous-programming-callbacks-promises-and-async-await-f21375935eab",
    thumbnail: "/images/medium/2.png",
  },
  {
    title: "Understanding the `this` Keyword in JavaScript: A Complete Guide",
    link: "https://medium.com/@jackpritomsoren/understanding-the-this-keyword-in-javascript-a-complete-guide-9619930c277a",
    thumbnail: "/images/medium/3.png",
  },
];

const MediumBlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sectionRef, inView] = useInViewOnce();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jackpritomsoren`);
        if (!res.ok) throw new Error('Failed');
        const data = await res.json();
        const items = data.items.slice(0, 3).map((item) => {
          let thumbnail = item.thumbnail;
          if (!thumbnail && item.description) {
            const match = item.description.match(/<img[^>]+src="([^">]+)"/);
            if (match && match[1]) thumbnail = match[1];
          }
          return {
            title: item.title,
            link: item.link,
            thumbnail: thumbnail || '/images/medium/default.svg',
            pubDate: item.pubDate,
          };
        });
        setBlogs(items.length ? items : fallbackBlogs);
      } catch {
        setBlogs(fallbackBlogs);
      }
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <section id="medium-blogs" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          My Medium Blogs
        </motion.h2>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <motion.a
                key={i}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass rounded-2xl overflow-hidden glow-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = '/images/medium/default.svg'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070d]/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 glass px-3 py-1 rounded-full text-xs text-white/80">
                    {blog.pubDate ? new Date(blog.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Featured'}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold line-clamp-2 group-hover:text-violet-300 transition-colors duration-300">{blog.title}</h3>
                  <div className="flex items-center gap-2 mt-3 text-sm text-violet-400 group-hover:text-violet-300 transition-colors">
                    Read Article <span className="text-xs">→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-10"
        >
          <a href="https://medium.com/@jackpritomsoren" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24V3H0zm6.5 14.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zM15 17.5c-1.5 0-2.5-2-2.5-4.5s1-4.5 2.5-4.5 2.5 2 2.5 4.5-1 4.5-2.5 4.5zm7.5-.5h-2V7h2v10z"/></svg>
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MediumBlogsSection;
