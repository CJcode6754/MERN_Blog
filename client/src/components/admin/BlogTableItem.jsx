import React from "react";
import { FaXmark } from "react-icons/fa6";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

function BlogTableItem({ blog, fetchBlogs, index }) {
  const { title, created_at } = blog;
  const blogDate = new Date(created_at);

  const { axios } = useAppContext();
  const deleteBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirm) {
      return;
    }

    try {
      const { data } = await axios.post("/api/blog/delete", { id: blog._id });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
    }
  };

  const togglePublish = async () => {
    try {
      const { data } = await axios.post("/api/blog/toggle-publish", {
        id: blog._id,
      });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
    }
  };

  return (
    <tr className="bordey-y border-gray-300 text-center">
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
      <td className="px-2 py-4 flex items-center justify-center text-sm gap-4">
        <button onClick={togglePublish} className="border w-45 px-2 py-1 mt-1 rounded-lg cursor-pointer">
          {blog.isPublished ? "Unpublished" : "Publish"}
        </button>
        <button
          onClick={deleteBlog}
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
