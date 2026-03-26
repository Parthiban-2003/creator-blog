import React from "react";
import { FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-red-500">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="hover:text-red-500">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/videos" className="hover:text-red-500">Videos</NavLink>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaGithub /></a>
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About StreamTube</h3>
          <p className="text-gray-400 text-sm">
            StreamTube is your one-stop platform to explore trending blogs and videos from top creators.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; 2026 StreamTube. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;