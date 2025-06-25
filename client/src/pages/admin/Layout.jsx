import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

function Layout() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="flex items-center justify-between py-1 mx-4 sm:mx-20 xl:mx-32">
        <div className="flex items-center gap-1">
          <img
            onClick={() => navigate("/")}
            src={assets.logo}
            alt="Logo"
            className="w-16 cursor-pointer sm:w-20"
          />
          <h2 className="text-xl font-medium text-blue-500">Blog</h2>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 border-0 rounded-lg cursor-pointer hover:bg-blue-700 hover:scale-105"
        >
          Logout
          <LuArrowRight />
        </button>
      </div>

      <div className="flex h-[calc(100vh-70px)]">
          <aside>
            <Sidebar/>
          </aside>
          <Outlet/>
      </div>
    </div>
  );
}

export default Layout;
