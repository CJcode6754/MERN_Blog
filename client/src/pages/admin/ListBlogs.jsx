import React, { useEffect, useState } from "react";
import { blogs } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";

const ListBlogs = () => {
  const [blog, setBlog] = useState([]);

  const fetchBlogs = async () => {
    setBlog(blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 h-screen pt-5 px-5 bg-blue-50/10">
      <h1 className="text-xl font-semibold py-4 text-gray-600">All Blogs</h1>

      <div className="relative h-[80vh] w-full max-w-6xl overflow-y-auto shadow rounded-lg scrollbar-hidden bg-white">
        <table className="w-full text-sm text-gray-700">
          <thead className="text-xs text-gray-500 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-4">
                ID
              </th>
              <th scope="col" className="px-6 py-4">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-4 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-6 py-4 max-sm:hidden">
                Status
              </th>
              <th scope="col" className="px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {blog.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No blogs found.
                </td>
              </tr>
            ) : (
              blog.map((blog, index) => (
                <BlogTableItem
                  key={blog.id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlogs;
