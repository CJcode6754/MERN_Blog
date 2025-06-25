import { CircleCheck, TicketIcon, Trash2 } from "lucide-react";

function CommentsTableItem({ comment, fetchComments }) {
  const { blog, created_at, id } = comment;

  const BlogDate = new Date(created_at);
  return (
    <tr className="bordey-y border-gray-300 px">
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
            <CircleCheck  className="w-5 text-green-600 hover:scale-110 transition-all cursor-pointer" />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}

          <button
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
