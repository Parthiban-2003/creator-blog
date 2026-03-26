import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/layout/NavBar.jsx";
import { Suspense, lazy } from "react";
import { FaYoutube } from "react-icons/fa";
import Footer from "../layout/footer/Footer.jsx";
import Yt from "../../assets/images/yt.webp";

const Home = lazy(() => import("../../pages/Home.jsx"));
const Blog = lazy(() => import("../../pages/Blog.jsx"));
const Video = lazy(() => import("../../pages/Video.jsx"));
const Hero = lazy(() => import("../../components/hero/Hero.jsx"));

function AppRouter() {
    return (
        <>
            <Navbar />

            <Suspense fallback={<div className="text-center mt-20 text-xl">Loading...</div>}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero
                                    title="Explore, Learn & Create"
                                    subtitle="Watch trending videos and read blogs from your favorite creators all in one place."
                                    ctaText="Go to Blogs"
                                    ctaTargetId="blogs"
                                    bgImage={Yt}
                                    icon={<FaYoutube />}
                                />
                                <Home />
                                <Home />
                            </>
                        }
                    />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/videos" element={<Video />} />
                </Routes>
            </Suspense>
            <Footer/>
        </>
    );
}

export default AppRouter;