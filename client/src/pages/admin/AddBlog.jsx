import React from "react";

const AddBlog = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-full max-w-4xl h-[95vh] overflow-y-auto p-6 bg-white shadow-md rounded-md">
        {/* Upload Thumbnail */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Upload thumbnail
          </label>
          <div className="w-32 h-32 flex items-center justify-center border border-dashed border-gray-300 rounded-md bg-gray-50">
            <label className="cursor-pointer flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-gray-400 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 12l8-8 8 8M12 4v16"
                />
              </svg>
              <span className="text-sm text-gray-500">Upload</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        {/* Blog Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Blog title
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-blue-400"
          />
        </div>

        {/* Sub title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Sub title
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-blue-400"
          />
        </div>

        {/* Blog description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Blog description
          </label>
          <textarea
            placeholder="Write your blog description..."
            rows={5}
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-blue-400 resize-none"
          ></textarea>
          <div className="flex justify-end mt-2">
            <button className="text-sm px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800">
              Generate with AI
            </button>
          </div>
        </div>

        {/* Blog category */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Blog category
          </label>
          <select className="w-full border rounded-md px-4 py-2 text-sm focus:outline-blue-400">
            <option>Technology</option>
            <option>Start Up</option>
            <option>Finance</option>
            <option>Lifestyle</option>
          </select>
        </div>

        {/* Publish now */}
        <div className="mb-6 flex items-center gap-2">
          <input type="checkbox" id="publish" />
          <label htmlFor="publish" className="text-sm text-gray-700">
            Publish Now
          </label>
        </div>

        {/* Submit */}
        <button className="w-full py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-all text-sm">
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
