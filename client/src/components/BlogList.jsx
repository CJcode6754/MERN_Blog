import React, { useState } from "react";
import { blodCategories, blogs } from "../assets/assets";
import { motion } from "motion/react";
import BlogCard from "./BlogCard";

export default function BlogList() {
  const [menu, setMenu] = useState("All");
  return (
    <>
      <div className="relative flex justify-center gap-4 my-10 sm:gap-6">
        {blodCategories.map((category) => (
          <div key={category} className="relative">
            <button
              onClick={() => setMenu(category)}
              className={`text-gray-500 cursor-pointer ${
                menu == category && "text-white px-4 pt-0.5"
              }`}
            >
              {category}
              {menu == category && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-0 left-0 right-0 bg-blue-500 rounded-full h-7 -z-1"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 mx-8 mb-24 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:mx-16 xl:mx-30">
        {blogs
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
      </div>
    </>
  );
}
