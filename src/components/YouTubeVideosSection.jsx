import React from 'react';

const PLAYLIST_ID = "PLiGGopVZ-5D3M-sZgSgpAmaJdNKctKnlt";
const YOUTUBE_FEED_URL = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`;

const fallbackVideos = [
  { id: "GqX0lhBNHkU", title: "From Idea to Database Schema — Real System Design Explained in Bangla", thumbnail: "https://i4.ytimg.com/vi/GqX0lhBNHkU/hqdefault.jpg" },
  { id: "aEvHuCyHhv8", title: "Master Database Relationships in Bangla | Design Scalable Databases Like a Pro", thumbnail: "https://i2.ytimg.com/vi/aEvHuCyHhv8/hqdefault.jpg" },
  { id: "Wvc9kQ_BMZA", title: "The 1% Rule for Programmers 🚀 Improve Your Coding Every Day (Bangla)", thumbnail: "https://i4.ytimg.com/vi/Wvc9kQ_BMZA/hqdefault.jpg" },
  { id: "j6DcY1YbYXE", title: "CORS Explained in Bangla 🔐 Why Browsers Block Requests (With Real Example)", thumbnail: "https://i.ytimg.com/vi/j6DcY1YbYXE/hqdefault.jpg" },
  { id: "Sa3Vnc-1ykg", title: "AI Coding Assistant ঠিকভাবে ব্যবহার করবেন কীভাবে? | Prompt Engineering for Developers (Bangla)", thumbnail: "https://i.ytimg.com/vi/Sa3Vnc-1ykg/hqdefault.jpg" },
  { id: "fbTb7PnzAiU", title: "Why Array Index Starts from 0? Explained in Bangla", thumbnail: "https://i.ytimg.com/vi/fbTb7PnzAiU/hqdefault.jpg" },
  { id: "__51PvJA1Y4", title: "System Design in Bangla | Choosing the Right Database for Video Streaming Platform", thumbnail: "https://i.ytimg.com/vi/__51PvJA1Y4/hqdefault.jpg" },
  { id: "EDOK1DWYy4I", title: "System Design in Bangla | High Level Architecture of Video Streaming Platform", thumbnail: "https://i.ytimg.com/vi/EDOK1DWYy4I/hqdefault.jpg" },
  { id: "xE35ZC9PMjw", title: "SSL Explained in Bangla 🔐 How HTTPS Works Behind the Scenes (Symmetric vs Asymmetric)", thumbnail: "https://i.ytimg.com/vi/xE35ZC9PMjw/hqdefault.jpg" },
  { id: "_c_wDV_3ktI", title: "System Design in Bangla | Video Upload & Streaming API Design (Step-by-Step)", thumbnail: "https://i.ytimg.com/vi/_c_wDV_3ktI/hqdefault.jpg" },
];

const decodeXmlValue = (value = '') =>
  value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

async function getPlaylistVideos() {
  try {
    const res = await fetch(YOUTUBE_FEED_URL, {
      next: { revalidate: 21600 },
      headers: { 'Accept-Language': 'en-US,en;q=0.9' },
    });
    if (!res.ok) throw new Error(`YouTube feed failed: ${res.status}`);
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    const videos = entries
      .map(([, entry]) => {
        const id = decodeXmlValue(entry.match(/<yt:videoId>([\s\S]*?)<\/yt:videoId>/)?.[1]);
        const title = decodeXmlValue(entry.match(/<title>([\s\S]*?)<\/title>/)?.[1]);
        if (!id || !title) return null;
        return { id, title, thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` };
      })
      .filter(Boolean)
      .slice(0, 10);
    return videos.length ? videos : fallbackVideos;
  } catch {
    return fallbackVideos;
  }
}

const YouTubeVideosSection = async () => {
  const videosData = await getPlaylistVideos();
  const carouselVideos = [...videosData, ...videosData];

  return (
    <section id="youtube" className="py-20 px-4 overflow-hidden">
      <h2 className="section-heading">YouTube Coding Tutorials</h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#07070d] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#07070d] to-transparent z-10 pointer-events-none" />
        <div className="overflow-hidden">
          <div className="flex gap-5 marquee-track" style={{ animationDuration: '120s' }}>
            {carouselVideos.map((video, i) => (
              <a
                key={`${video.id}-${i}`}
                href={`https://www.youtube.com/watch?v=${video.id}&list=${PLAYLIST_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[320px] group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="glass rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-violet-500/30 group-hover:shadow-xl group-hover:shadow-violet-500/10 group-hover:scale-[1.03] group-hover:-translate-y-1">
                  <div className="relative h-44 overflow-hidden">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07070d]/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 glass px-3 py-1 rounded-full text-xs text-white/80">Watch Video</div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full glass-strong flex items-center justify-center shadow-xl">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium text-sm leading-snug line-clamp-2">{video.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <a href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"/></svg>
          Watch More on YouTube
        </a>
      </div>
    </section>
  );
};

export default YouTubeVideosSection;
