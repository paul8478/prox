import { useEffect, useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

import "../css/project.css";

/* =======================
   Types
======================= */
interface YouTubeItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

/* =======================
   YouTube RSS (FREE)
======================= */
const CHANNEL_ID = "UC1fYhjPdb0LmJuGikHn2t9Q"; // DevArk channel
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  FEED_URL
)}`;

export default function Youtube(): JSX.Element {
  const [videos, setVideos] = useState<YouTubeItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  /* =======================
     Fetch videos
  ======================= */
  useEffect(() => {
    const fetchVideos = async (): Promise<void> => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        const videoList: YouTubeItem[] = data.items.map((item: any) => ({
          id: item.guid,
          title: item.title,
          description: item.description.replace(/<[^>]+>/g, ""),
          thumbnail: item.thumbnail,
          link: item.link,
        }));

        setVideos(videoList);
      } catch (error) {
        console.error("Failed to fetch YouTube RSS:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  /* =======================
     Loading State
  ======================= */
  if (loading) {
    return (
      <section className="py-20 text-center text-white min-h-screen">
        Loading YouTube videos...
      </section>
    );
  }

  return (
    <section className="py-20 px-6 project-card min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            YOUTUBE CONTENT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest Videos from DevArk
          </h2>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="
                bg-white/20
                border-none text-white overflow-hidden
                hover:scale-100 transition-all duration-300
                p-6
              "
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="rounded-lg "
              />

              <h3 className="text-l text-center ">
                {video.title}
              </h3>

              <p className="text-white/70 text-sm line-clamp-3">
                {video.description}
              </p>

              <Button
                asChild
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/10"
              >
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
