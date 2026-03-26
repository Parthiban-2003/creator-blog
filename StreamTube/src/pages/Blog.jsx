import React, { Suspense, lazy } from "react";
import SkeletonCard from "../components/common/SkeletonCard";
import yt from "../assets/images/yt.webp";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/8.png";
import img4 from "../assets/images/4.png"; 
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.png";  
import img7 from "../assets/images/7.webp";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.webp"; 

const BlogCard = lazy(() => import("../components/common/BlogCard"));
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const blogs = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `React Blog Post ${i + 1}`,
  excerpt: "This is a sample excerpt for the blog post to showcase layout in Tailwind CSS.",
  image: images[i % images.length],
  author: "Admin",
  date: `March ${i + 1}, 2026`,
  link: `/blogs/react-blog-${i + 1}`,
}));

function Blog() {
  return (
    <section id="blogs" className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Suspense
            key={blog.id}
            fallback={<SkeletonCard height="64" />}
          >
            <BlogCard {...blog} />
          </Suspense>
        ))}
      </div>
    </section>
  );
}

export default Blog;