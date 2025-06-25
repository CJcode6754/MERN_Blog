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
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/10">
      <h1 className="text-xl font-semibold py-4 text-gray-600">All blogs</h1>

      <div className="relative h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hidden bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs tect-gray-600 text-left uppercase">
            <tr>
              <th scope="col" className="px-2 py-4 xl:px-6">
                ID
              </th>
              <th scope="col" className="px-2 py-4">
                Blog Title
              </th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">
                Status
              </th>
              <th scope="col" className="px-2 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {blog.map((blog, index) => {
              return (
                <BlogTableItem
                  key={blog.id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlogs;
