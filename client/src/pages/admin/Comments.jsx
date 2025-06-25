import React, { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";
import CommentsTableItem from "../../components/admin/CommentsTableItem";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Approved");

  const fetchComments = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const filteredComments = comments.filter((comment) =>
    filter === "Approved" ? comment.isApproved : !comment.isApproved
  );

  return (
    <div className="flex-1 pt-5 px-5 max-h-screen">
      {/* Header + Filter */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full px-4 py-4 max-w-6xl">
        <h1 className="text-xl text-gray-600 py-4 font-semibold">Comments</h1>
        <div className="flex gap-4">
          {["Approved", "Not Approved"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`shadow-sm border rounded-full px-4 py-1 cursor-pointer text-xs transition-all duration-150 ${
                filter === type ? "text-blue-500 border-blue-500" : "text-gray-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="relative h-[80vh] w-full max-w-6xl overflow-y-auto shadow rounded-lg scrollbar-hidden bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-500 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-4">
                Blog Title & Comments
              </th>
              <th scope="col" className="px-6 py-4 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-6 py-4 max-sm:hidden">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredComments.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center text-gray-400">
                  No {filter.toLowerCase()} comments found.
                </td>
              </tr>
            ) : (
              filteredComments.map((comment) => (
                <CommentsTableItem
                  key={comment.id}
                  comment={comment}
                  fetchComments={fetchComments}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
