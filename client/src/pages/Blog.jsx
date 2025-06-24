import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blogs, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from '../components/Footer';
import Loader from "../components/Loader";

export default function Blog() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const fetchBlogData = async () => {
    const data = blogs.find((item) => item.id === id);
    setData(data);
  };

  const fetchComments = async () => {
    setComments(comments_data);
  };

  const addComment = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <>
      <Navbar />
      <div className="mt-20 text-center text-gray-600">
        <p className="py-4 font-medium text-blue-500">
          Published On {Moment(data.created_at).format("MMMM Do YYYY")}
        </p>
        <h1 className="max-w-2xl mx-auto text-2xl font-semibold text-gray-800 sm:text-5xl">
          {data.title}
        </h1>
        <h2 className="max-w-lg mx-auto my-5 truncate">{data.subtitle}</h2>
        <p className="inline-block px-4 py-1 mb-6 text-sm font-medium text-blue-500 border rounded-full border-blue-500/35 bg-blue-500/5">
          Ceejay Ibabiosa
        </p>
      </div>

      <div className="max-w-5xl mx-5 my-10 mt-6 md:mx-auto">
        <img
          src={data.image}
          alt=""
          className="object-cover w-full mb-5 rounded-3xl"
        />
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        <div className="max-w-3xl mb-10 mt-14">
          <p>Comments {comments.length}</p>
          <div className="flex flex-col gap-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="relative max-w-xl p-4 text-gray-600 border rounded bg-blue-500/2 border-blue-500/5"
              >
                <div className="flex item-center gap-2 mb-2">
                  <img src={assets.user} alt="" className="w-6" />
                  <p className="font-medium">{comment.name}</p>
                </div>
                <p className="text-sm max-2-md ml-8">{comment.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(comment.created_at).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your name"
              required
              className="w-full p-2 border border-gray-300 rouned outline-none"
            />

            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Comment here"
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">Share this article on social media</p>

          <div className="flex gap-4">
            <img src={assets.facebook} alt="" className="w-10 h-10 shadow rounded-full" />
            <img src={assets.twitter} alt="" className="w-10 h-10 shadow rounded-full"/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  ) : (
    <Loader/>
  );
}
