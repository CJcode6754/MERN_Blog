import React, { useEffect, useState } from "react";
import { RiBloggerLine, RiDraftLine } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { dashboard_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const {axios} = useAppContext();

  const fetchDashboard = async () => {
    try {
      const {data} = await axios.get('/api/admin/dashboard');
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
    } catch (error) {
      toast.error(data.message)
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const stats = [
    {
      icon: <RiBloggerLine />,
      label: "Blogs",
      count: dashboardData.blogs,
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <BiCommentDetail />,
      label: "Comments",
      count: dashboardData.comments,
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <RiDraftLine />,
      label: "Drafts",
      count: dashboardData.drafts,
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <section className="min-h-screen w-full px-4 sm:px-8 pt-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map(({ icon, label, count, color }, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`p-4 rounded-full text-2xl ${color}`}>
                {icon}
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">{count}</p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Blogs */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <RiBloggerLine className="text-blue-500 text-xl" />
            <h2 className="text-lg font-semibold text-gray-800">Latest Blogs</h2>
          </div>

          <div className="overflow-x-auto rounded-xl shadow-sm bg-white">
            <table className="w-full text-sm max-w-6xl">
              <thead className="text-xs text-gray-500 uppercase bg-gray-100">
                <tr className="text-center">
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Blog Title</th>
                  <th className="px-4 py-3 hidden sm:table-cell">Date</th>
                  <th className="px-4 py-3 hidden sm:table-cell">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.recentBlogs.length > 0 ? (
                  dashboardData.recentBlogs.map((blog, index) => (
                    <BlogTableItem
                      key={blog.id}
                      blog={blog}
                      fetchBlogs={fetchDashboard}
                      index={index + 1}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-gray-400">
                      No recent blogs available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
