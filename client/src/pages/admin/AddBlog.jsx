import { Upload } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { blogCategories } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { parse } from "marked";

const AddBlog = () => {
  const { axios } = useAppContext();
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async () => {
    if (!title) return toast.error("Please enter a title");

    try {
      setLoading(true);
      const { data } = await axios.post("/api/blog/generate", {
        prompt: title,
      });
      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsAdding(true);

      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      };

      const formData = new FormData();

      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      const { data } = await axios.post("/api/blog/add", formData);

      if (data.success) {
        toast.success(data.message);
        setImage(false);
        setTitle("");
        quillRef.current.root.innerHTML = "";
        setCategory("Startup");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-4xl h-[95vh] overflow-y-auto p-6 bg-white shadow-md rounded-md"
      >
        {/* Upload Thumbnail */}
        <div className="mb-4">
          <p className="block text-gray-700 font-medium mb-2">
            Upload thumbnail
          </p>
          <div className="w-32 h-32 flex items-center justify-center border border-dashed border-gray-300 rounded-md bg-gray-50">
            <label
              htmlFor="image"
              className="cursor-pointer flex flex-col items-center justify-center w-full h-full"
            >
              {!image ? (
                <Upload className="h-8 w-8 text-gray-400" />
              ) : (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Thumbnail preview"
                  className="h-full w-full object-cover rounded-md"
                />
              )}
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="hidden"
                required
              />
            </label>
          </div>
        </div>

        {/* Blog Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Blog title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
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
            onChange={(e) => setSubTitle(e.target.value)}
            value={subTitle}
            type="text"
            placeholder="Type here"
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-blue-400"
          />
        </div>

        {/* Blog description */}
        <div className="mb-6 relative">
          <label className="block text-gray-700 font-semibold mb-2">
            Blog Description
          </label>

          <div
            ref={editorRef}
            className="min-h-40 p-3 border border-gray-300 rounded-md bg-white focus:outline-none"
          ></div>

          {loading && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-10 rounded-md">
              <div className="w-6 h-6 border-2 border-t-transparent border-gray-700 rounded-full animate-spin"></div>
            </div>
          )}

          <div className="flex justify-end mt-3">
            <button
              disabled={loading}
              onClick={generateContent}
              className={`text-sm px-4 py-2 rounded transition-colors duration-200 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-700 hover:bg-gray-800 text-white"
              }`}
            >
              {loading ? "Generating..." : "Generate with AI"}
            </button>
          </div>
        </div>

        {/* Blog category */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Blog category
          </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-blue-400"
          >
            <option>Select Categories</option>
            {blogCategories
              .filter((item) => item !== "All")
              .map((item, index) => {
                return (
                  <option className="text-gray-600" key={index} value={item}>
                    {item}
                  </option>
                );
              })}
          </select>
        </div>

        {/* Publish now */}
        <div className="mb-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="publish"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />
          <label htmlFor="publish" className="text-sm text-gray-700">
            Publish Now
          </label>
        </div>

        {/* Submit */}
        <button
          disabled={isAdding}
          type="submit"
          className="w-full py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-all text-sm"
        >
          {isAdding ? "Adding..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
