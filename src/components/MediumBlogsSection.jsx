"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const MediumBlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMediumBlogs = async () => {
      try {
        // Using RSS2JSON service to convert RSS to JSON (avoids CORS issues)
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jackpritomsoren`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();

        // Get the latest 3 blogs
        const latestBlogs = data.items.slice(0, 3).map(item => {
          // Try to extract thumbnail from description or use fallback
          let thumbnail = item.thumbnail;

          if (!thumbnail && item.description) {
            // Try to find image in description HTML
            const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch && imgMatch[1]) {
              thumbnail = imgMatch[1];
            }
          }

          return {
            title: item.title,
            link: item.link,
            thumbnail: thumbnail || '/images/medium/default.png', // fallback image
            pubDate: item.pubDate,
            description: item.description
          };
        });

        setBlogs(latestBlogs);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Medium blogs:', err);
        setError('Failed to load blogs');
        setLoading(false);

        // Fallback to static blogs if API fails
        setBlogs([
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
        ]);
      }
    };

    fetchMediumBlogs();
  }, []);

  return (
    <section
      id="medium-blogs"
      className="py-16 px-4 lg:px-16 bg-[#121212] text-white"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">My Medium Blogs</h2>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-red-400 mb-4">{error}</p>
          <p className="text-gray-400">Showing featured blogs instead</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
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
                  onError={(e) => {
                    e.target.src = '/images/medium/default.png'; // fallback on error
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg line-clamp-2">{blog.title}</h3>
                {blog.pubDate && (
                  <p className="text-gray-400 text-sm mt-2">
                    {new Date(blog.pubDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      )}

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
