import React from "react";
import { GiFallingStar } from "react-icons/gi";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-12 space-y-8">
      <button className="flex items-center gap-4 px-6 py-2 border bg-amber-100 rounded-xl border-amber-700">
        <span>New: Ai featured integrated</span>{" "}
        <GiFallingStar className="text-amber-600" />
      </button>
      <h1 className="text-4xl font-bold text-center text-gray-600">Your own <span className="text-amber-800">Ai Blogging</span> <br/> Platform.</h1>
      <p className="text-center">
        This is your space to think out loud, to share what matters, and to
        write without filters. <br/> Whether it's one word or a thousand, your story
        starts right here.
      </p>
      <div className="flex gap-4 px-4 py-2 border border-gray-400 rounded-lg sm:gap-18">
        <input type="search" name="" id="" placeholder="Search blogs here" className="focus:outline-none" />
        <button className="px-6 py-2 text-white rounded-md bg-amber-600 hover:bg-amber-700">
          Search
        </button>
      </div>
    </section>
  );
}
