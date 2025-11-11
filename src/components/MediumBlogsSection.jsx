"use client";
import React from "react";
import Image from "next/image";

const BLOGS = [
  {
    title:
      "Understanding Microservices Architecture — From Monolith to Modern Scalability",
    link: "https://medium.com/@jackpritomsoren/understanding-microservices-architecture-from-monolith-to-modern-scalability-22e6d45971e8",
    thumbnail: "/images/medium/1.png", // place your blog thumbnail in public/images
  },
  {
    title:
      "Understanding JavaScript Asynchronous Programming: Callbacks, Promises, and Async/Await",
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
  return (
    <section
      id="medium-blogs"
      className="py-16 px-4 lg:px-16 bg-[#121212] text-white"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">My Medium Blogs</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {BLOGS.map((blog, idx) => (
          <a
            key={idx}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#181818] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <div className="relative w-full h-48">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{blog.title}</h3>
            </div>
          </a>
        ))}
      </div>
      {/* For More Reading Button */}
      <div className="flex justify-center mt-8">
        <a
          href="https://medium.com/@jackpritomsoren"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-950 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-full transition-colors"
        >
          For More Reading
        </a>
      </div>
    </section>
  );
};

export default MediumBlogsSection;
