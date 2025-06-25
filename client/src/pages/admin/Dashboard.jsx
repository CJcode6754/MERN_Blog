import React, { useEffect, useState } from "react";
import { RiBloggerLine, RiDraftLine } from "react-icons/ri";
import { dashboard_data } from "../../assets/assets";
import { BiCommentDetail } from "react-icons/bi";
import BlogTableItem from "../../components/admin/BlogTableItem";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboard = async () => {
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <section className="ml-24">
      <div className="flex-1 p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 bg-white p-6 min-w-54 rounded-xl shadow hover:scale-[1.03] transition-transform cursor-pointer">
            <div className="p-4 bg-blue-100 rounded-full text-blue-600 text-3xl">
              <RiBloggerLine />
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                {dashboardData.blogs}
              </p>
              <p className="text-gray-500">Blogs</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow hover:scale-[1.03] transition-transform cursor-pointer">
            <div className="p-4 bg-blue-100 rounded-full text-blue-600 text-3xl">
              <BiCommentDetail />
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                {dashboardData.comments}
              </p>
              <p className="text-gray-500">Comments</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow hover:scale-[1.03] transition-transform cursor-pointer">
            <div className="p-4 bg-blue-100 rounded-full text-blue-600 text-3xl">
              <RiDraftLine />
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                {dashboardData.drafts}
              </p>
              <p className="text-gray-500">Draft</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-3 mb-4 text-gray-700">
          <div className="flex items-center gap-2 text-2xl">
            <RiBloggerLine className="text-blue-500" />
            <p className="text-lg font-semibold">Latest Blog</p>
          </div>
        </div>

        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs tect-gray-600 text-left uppercase">
            <tr>
              <th scope="col" className="px-2 py-4 xl:px-6">ID</th>
              <th scope="col" className="px-2 py-4">Blog Title</th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">Date</th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">Status</th>
              <th scope="col" className="px-2 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {dashboardData.recentBlogs.map((blog, index) => {
              return <BlogTableItem key={blog.id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1}/>
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Dashboard;
