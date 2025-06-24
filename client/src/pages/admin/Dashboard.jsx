import React, { useEffect, useState } from "react";
import { RiBloggerLine, RiDraftLine } from "react-icons/ri";
import { dashboard_data } from "../../assets/assets";
import { BiCommentDetail } from "react-icons/bi";

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

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">How AI is Changing the Web</td>
                <td className="px-6 py-4">2025-06-24</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
                    Published
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-500 hover:underline">
                    View
                  </button>
                  <button className="ml-4 text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Repeat rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
