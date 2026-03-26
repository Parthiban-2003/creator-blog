import BlogCard from "../components/common/BlogCard.jsx";
import VideoCard from "../components/common/VideoCard.jsx";

const blogs = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `React Blog Post ${i + 1}`,
  excerpt: "This is a sample excerpt for the blog post to showcase layout in Tailwind CSS.",
  image: `https://source.unsplash.com/400x300/?coding,programming,${i}`,
  author: "Admin",
  date: `March ${i + 1}, 2026`,
  link: `/blogs/react-blog-${i + 1}`,
}));

const videos = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `React Video Tutorial ${i + 1}`,
  thumbnail: `https://source.unsplash.com/400x300/?video,code,${i}`,
  duration: `${Math.floor(Math.random() * 20) + 5}:00`,
  views: `${Math.floor(Math.random() * 50) + 10}k`,
  link: `/videos/react-video-${i + 1}`,
}));

function Home() {
  return (
    <>
      {/* Blogs Section */}
      <section id="blogs" className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;