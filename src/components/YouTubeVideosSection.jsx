"use client";
import React from "react";
import Image from "next/image";

const videosData = [
  {
    id: 1,
    title: "Run Web Apps in Docker (Access from Browser Easily!)",
    thumbnail: "/images/youtube/1.jpg",
    url: "https://youtu.be/3iIEs5Bqm_4?si=9jDzlpToSlW7HPJB",
  },
  {
    id: 2,
    title: "JavaScript Execution Context Simplified: Learn with Examples",
    thumbnail: "/images/youtube/2.jpg",
    url: "https://youtu.be/uLEfYEVFw_s?si=Sf2CR4e_chl-DbGf",
  },
  {
    id: 3,
    title: "NgRx Crash Course: Learn State Management in Angular",
    thumbnail: "/images/youtube/3.jpg",
    url: "https://youtu.be/3YOzxPtehrc?si=AD1txbdSyPnGg3QP",
  },
];

const YouTubeVideosSection = () => {
  return (
    <section id="youtube" className="py-16 px-4">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        My YouTube Coding Tutorials
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {videosData.map((video) => (
          <div
            key={video.id}
            className="bg-[#1F1F1F] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={400}
              height={225}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg mb-2">
                {video.title}
              </h3>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-black hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-full  transition-colors"
              >
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://youtube.com/playlist?list=PLiGGopVZ-5D3M-sZgSgpAmaJdNKctKnlt&si=_86xyxpDT50VFil_"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-950 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-full transition-colors"
        >
          Watch More on YouTube
        </a>
      </div>
    </section>
  );
};

export default YouTubeVideosSection;
