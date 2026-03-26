import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand */}
        <div className="text-white text-2xl font-bold cursor-pointer select-none">
          WebTechky
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white text-lg font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "flex items-center border-b-2 border-white pb-1 transition duration-300"
                  : "flex items-center hover:border-b-2 hover:border-gray-400 pb-1 transition duration-300"
              }
            >
              <AiFillHome className="mr-2" /> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center border-b-2 border-white pb-1 transition duration-300"
                  : "flex items-center hover:border-b-2 hover:border-gray-400 pb-1 transition duration-300"
              }
            >
              <FaBlog className="mr-2" /> Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/videos"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center border-b-2 border-white pb-1 transition duration-300"
                  : "flex items-center hover:border-b-2 hover:border-gray-400 pb-1 transition duration-300"
              }
            >
              <BsFillCameraVideoFill className="mr-2" /> Videos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;