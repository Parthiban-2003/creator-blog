import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "../../pages/Blog.jsx";
import Home from "../../pages/Home.jsx";
import Video from "../../pages/Video.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/videos" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;