import { CircleCheck, TicketIcon, Trash2 } from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

function CommentsTableItem({ comment, fetchComments }) {
  const { blog, created_at, _id } = comment;
  const BlogDate = new Date(created_at);

  const { axios } = useAppContext();

  const approvedComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approved-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
    }
  };

  const deleteComment = async () => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this comment?"
      );
      if (!confirm) {
        return;
      }

      const { data } = await axios.post("/api/admin/delete-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
    }
  };

  return (
    <tr className="bordey-y border-gray-300 text-center">
      <td className="px-6 py-4">
        <strong>Blog: </strong> {blog.title}
        <br />
        <strong>Name: </strong> {comment.name}
        <br />
        <strong>Comment: </strong> {comment.content}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <CircleCheck
              onClick={approvedComment}
              className="w-5 text-green-600 hover:scale-110 transition-all cursor-pointer"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}

          <button
            onClick={deleteComment}
            className="bg-red-300 hover:bg-red-500 hover:scale-105 text-white px-2 py-1 rounded-full shadow-md transition-all duration-200 ease-in-out"
            aria-label="Close"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CommentsTableItem;
