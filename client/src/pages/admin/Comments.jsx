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

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <div className="flex justify-between items-center max-w-4xl">
        <h1 className="text-xl text-gray-600 py-4 font-semibold">Comments</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setFilter("Approved")}
            className={`shadow-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${
              filter === "Approved" ? "text-blue-500" : "text-gray-700"
            }`}
          >
            Approved
          </button>

          <button
            onClick={() => setFilter("Not Approved")}
            className={`shadow-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${
              filter === "Not Approved" ? "text-blue-500" : "text-gray-700"
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      <div className="relative h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hidden bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase">
            <tr>
              <th scope="col" className="px-6 py-4">
                Blog Title & Comments
              </th>
              <th scope="col" className="px-6 py-4 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {comments.filter((comment) =>
              filter === "Approved" ? comment.isApproved : !comment.isApproved
            ).length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-400">
                  No {filter.toLowerCase()} comments found.
                </td>
              </tr>
            ) : (
              comments
                .filter((comment) =>
                  filter === "Approved"
                    ? comment.isApproved
                    : !comment.isApproved
                )
                .map((comment) => (
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
