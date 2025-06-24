import { HomeIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiBloggerLine } from "react-icons/ri";
import { IoAddCircleOutline } from 'react-icons/io5';
import { BiComment } from 'react-icons/bi';

function Sidebar() {
  return (
    <div>
      <NavLink
        end
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 px-8 py-3 transition-colors duration-200 
          ${isActive && "bg-blue-600/10 text-gray-700 border-r-4 border-blue-600"}`
        }
      >
        <HomeIcon className="w-5 h-5" />
        <span className="hidden md:inline-block">Dashboard</span>
      </NavLink>
      
      <NavLink
        end
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 px-8 py-3 transition-colors duration-200 
          ${isActive && "bg-blue-600/10 text-gray-700 border-r-4 border-blue-600"}`
        }
      >
        <IoAddCircleOutline  className="w-5 h-5" />
        <span className="hidden md:inline-block">Add Blog</span>
      </NavLink>

      <NavLink
        end
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 px-8 py-3 transition-colors duration-200 
          ${isActive && "bg-blue-600/10 text-gray-700 border-r-4 border-blue-600"}`
        }
      >
        <RiBloggerLine  className="w-5 h-5" />
        <span className="hidden md:inline-block">List of Blogs</span>
      </NavLink>

      <NavLink
        end
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 px-8 py-3 transition-colors duration-200 
          ${isActive && "bg-blue-600/10 text-gray-700 border-r-4 border-blue-600"}`
        }
      >
        <BiComment  className="w-5 h-5" />
        <span className="hidden md:inline-block">Comments</span>
      </NavLink>
    </div>
  )
}

export default Sidebar
