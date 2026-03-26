import React, { Suspense, lazy } from "react";
import SkeletonCard from "../components/common/SkeletonCard";

const VideoCard = lazy(() => import("../components/common/VideoCard"));

const videos = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `React Video Tutorial ${i + 1}`,
  thumbnail: `https://source.unsplash.com/400x300/?video,code,${i}`,
  duration: `${Math.floor(Math.random() * 20) + 5}:00`,
  views: `${Math.floor(Math.random() * 50) + 10}k`,
  link: `/videos/react-video-${i + 1}`,
}));

function Video() {
  return (
    <section id="videos" className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <Suspense
            key={video.id}
            fallback={<SkeletonCard height="64" />}
          >
            <VideoCard {...video} />
          </Suspense>
        ))}
      </div>
    </section>
  );
}

export default Video;