import React from "react";

const PLAYLIST_ID = "PLiGGopVZ-5D3M-sZgSgpAmaJdNKctKnlt";
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;

const fallbackVideos = [
  {
    id: "GqX0lhBNHkU",
    title:
      "From Idea to Database Schema — Real System Design Explained in Bangla",
    thumbnail: "https://i4.ytimg.com/vi/GqX0lhBNHkU/hqdefault.jpg",
    url: `https://www.youtube.com/watch?v=GqX0lhBNHkU&list=${PLAYLIST_ID}`,
  },
  {
    id: "aEvHuCyHhv8",
    title:
      "Master Database Relationships in Bangla | Design Scalable Databases Like a Pro",
    thumbnail: "https://i2.ytimg.com/vi/aEvHuCyHhv8/hqdefault.jpg",
    url: `https://www.youtube.com/watch?v=aEvHuCyHhv8&list=${PLAYLIST_ID}`,
  },
  {
    id: "Wvc9kQ_BMZA",
    title:
      "The 1% Rule for Programmers 🚀 Improve Your Coding Every Day (Bangla)",
    thumbnail: "https://i4.ytimg.com/vi/Wvc9kQ_BMZA/hqdefault.jpg",
    url: `https://www.youtube.com/watch?v=Wvc9kQ_BMZA&list=${PLAYLIST_ID}`,
  },
  {
    id: "j6DcY1YbYXE",
    title:
      "CORS Explained in Bangla 🔐 Why Browsers Block Requests (With Real Example)",
    thumbnail: "https://i.ytimg.com/vi/j6DcY1YbYXE/hqdefault.jpg",
    url: `https://www.youtube.com/watch?v=j6DcY1YbYXE&list=${PLAYLIST_ID}`,
  },
  {
    id: "Sa3Vnc-1ykg",
    title:
      "AI Coding Assistant ঠিকভাবে ব্যবহার করবেন কীভাবে? | Prompt Engineering for Developers (Bangla)",
    thumbnail: "https://i.ytimg.com/vi/Sa3Vnc-1ykg/hqdefault.jpg",
    url: `https://www.youtube.com/watch?v=Sa3Vnc-1ykg&list=${PLAYLIST_ID}`,
  },
  {
    id: "fbTb7PnzAiU",
    title: "Why Array Index Starts from 0? Explained in Bangla",
    thumbnail: "https://i.ytimg.com/vi/fbTb7PnzAiU/hqdefault.jpg",
    url: `https://www.youtube.com/watch?v=fbTb7PnzAiU&list=${PLAYLIST_ID}`,
  },
  {
    id: "__51PvJA1Y4",
    title:
      "System Design in Bangla | Choosing the Right Database for Video Streaming Platform",
    thumbnail: "https://i.ytimg.com/vi/__51PvJA1Y4/hqdefault.jpg",
    url: `https://www.youtube.com/watch?v=__51PvJA1Y4&list=${PLAYLIST_ID}`,
  },
  {
    id: "EDOK1DWYy4I",
    title:
      "System Design in Bangla | High Level Architecture of Video Streaming Platform",
    thumbnail: "https://i.ytimg.com/vi/EDOK1DWYy4I/hqdefault.jpg",
    url: `https://www.youtube.com/watch?v=EDOK1DWYy4I&list=${PLAYLIST_ID}`,
  },
  {
    id: "xE35ZC9PMjw",
    title:
      "SSL Explained in Bangla 🔐 How HTTPS Works Behind the Scenes (Symmetric vs Asymmetric)",
    thumbnail: "https://i.ytimg.com/vi/xE35ZC9PMjw/hqdefault.jpg",
    url: `https://www.youtube.com/watch?v=xE35ZC9PMjw&list=${PLAYLIST_ID}`,
  },
  {
    id: "_c_wDV_3ktI",
    title:
      "System Design in Bangla | Video Upload & Streaming API Design (Step-by-Step)",
    thumbnail: "https://i.ytimg.com/vi/_c_wDV_3ktI/hqdefault.jpg",
    url: `https://www.youtube.com/watch?v=_c_wDV_3ktI&list=${PLAYLIST_ID}`,
  },
];

const decodeValue = (value) =>
  value
    .replace(/\\u0026/g, "&")
    .replace(/\\\\/g, "\\")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const parsePlaylist = (html) => {
  const matches = [
    ...html.matchAll(
      /"videoId":"([^"]+)".{0,300}?"title":\{"runs":\[\{"text":"([^"]+)"/g,
    ),
  ];
  const seen = new Set();

  return matches
    .map(([, id, title]) => ({
      id,
      title: decodeValue(title),
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      url: `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST_ID}`,
    }))
    .filter((video) => {
      if (!video.id || !video.title || seen.has(video.id)) {
        return false;
      }

      seen.add(video.id);
      return true;
    })
    .slice(0, 10);
};

const getPlaylistVideos = async () => {
  try {
    const response = await fetch(PLAYLIST_URL, {
      next: { revalidate: 21600 },
      headers: {
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    if (!response.ok) {
      throw new Error(`YouTube playlist request failed: ${response.status}`);
    }

    const html = await response.text();
    const videos = parsePlaylist(html);

    return videos.length ? videos : fallbackVideos;
  } catch (error) {
    console.error("Failed to load YouTube playlist", error);
    return fallbackVideos;
  }
};

const YouTubeVideosSection = async () => {
  const videosData = await getPlaylistVideos();
  const carouselVideos = [...videosData, ...videosData];

  return (
    <section id="youtube" className="py-16 px-4 overflow-hidden">
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        My YouTube Coding Tutorials
      </h2>

      <div className="youtube-carousel-mask">
        <div className="youtube-carousel-track">
          {carouselVideos.map((video, index) => (
            <a
              key={`${video.id}-${index}`}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-carousel-card group"
            >
              <div className="youtube-carousel-image-wrap">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-56 md:h-52 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 md:p-5">
                <h3
                  className="text-white font-semibold text-base md:text-lg leading-snug h-[72px] md:h-[84px] overflow-hidden text-ellipsis"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {video.title}
                </h3>
                <span className="inline-flex mt-4 text-sm font-medium text-red-300 group-hover:text-white transition-colors">
                  Watch Video
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href={PLAYLIST_URL}
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
