import React from 'react'
import { NavLink } from 'react-router-dom'
import { HomeIcon } from 'lucide-react'
import { RiBloggerLine } from "react-icons/ri"
import { IoAddCircleOutline } from 'react-icons/io5'
import { BiComment } from 'react-icons/bi'

function Sidebar() {
  return (
    <nav className="bg-white md:w-64 w-full md:h-screen shadow-sm fixed md:relative bottom-0 z-10">
      <div className="flex flex-col md:items-start md:justify-start md:pt-10 md:space-y-2">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-full">
          <NavItem to="/admin" icon={<HomeIcon className="w-5 h-5" />} label="Dashboard" />
          <NavItem to="/admin/addBlog" icon={<IoAddCircleOutline className="w-5 h-5" />} label="Add Blog" />
          <NavItem to="/admin/listBlog" icon={<RiBloggerLine className="w-5 h-5" />} label="List of Blogs" />
          <NavItem to="/admin/comments" icon={<BiComment className="w-5 h-5" />} label="Comments" />
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="flex md:hidden justify-around w-full py-2 border-t bg-white shadow-md">
          <NavItem to="/admin" icon={<HomeIcon className="w-5 h-5" />} label="" />
          <NavItem to="/admin/addBlog" icon={<IoAddCircleOutline className="w-5 h-5" />} label="" />
          <NavItem to="/admin/listBlog" icon={<RiBloggerLine className="w-5 h-5" />} label="" />
          <NavItem to="/admin/comments" icon={<BiComment className="w-5 h-5" />} label="" />
        </div>
      </div>
    </nav>
  )
}

const NavItem = ({ to, icon, label }) => (
  <NavLink
    end
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200 ${
        isActive
          ? 'bg-blue-600/10 text-blue-700 border-r-4 border-blue-600 md:font-semibold'
          : 'text-gray-600 hover:bg-gray-50'
      }`
    }
  >
    {icon}
    {label && <span className="hidden md:inline-block">{label}</span>}
  </NavLink>
)

export default Sidebar
