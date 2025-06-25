import React from "react";
import { FaXmark } from "react-icons/fa6";

function BlogTableItem({ blog, fetchBlogs, index }) {
  const { title, created_at } = blog;

  const blogDate = new Date(created_at);
  return (
    <tr className="bordey-y border-gray-300">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{blogDate.toDateString()}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${
            blog.isPublished ? "text-green-600" : "text-orange-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      <td className="px-2 py-4 flex items-center text-sm gap-4">
        <button className="border px-2 py-1 mt-1 rounded-lg cursor-pointer">
          {blog.isPublished ? "Unpublished" : "Publish"}
        </button>
        <button
          className="bg-red-300 hover:bg-red-500 hover:scale-105 text-white px-2 py-1 rounded-full shadow-md transition-all duration-200 ease-in-out"
          aria-label="Close"
        >
          <FaXmark className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}

export default BlogTableItem;
