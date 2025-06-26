import { GiFallingStar } from "react-icons/gi";
import { useAppContext } from "../context/AppContext";
import { useRef } from "react";

export default function Hero() {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();
  const handleSearch = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };
  
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center">
      <div className="inline-flex items-center gap-4 px-6 py-1.5 mb-8 border border-blue-500 rounded-full text-sm ">
        <span>New: Ai featured integrated</span>{" "}
        <GiFallingStar className="text-blue-500" />
      </div>
      <h1 className="text-3xl font-semibold text-gray-700 sm:text-6xl sm:leading-16">
        Your own <span className="text-blue-500">Ai Blogging</span> <br />{" "}
        Platform.
      </h1>
      <p className="max-w-2xl m-auto my-6 text-gray-500 sm:my-8 max-sm:text-xs">
        This is your space to think out loud, to share what matters, and to
        write without filters. <br /> Whether it's one word or a thousand, your
        story starts right here.
      </p>

      <form
        onSubmit={handleSearch}
        className="flex justify-between max-w-lg overflow-hidden bg-white border border-gray-300 rounded max-sm:scale-75 max-auto"
      >
        <input
          ref={inputRef}
          type="search"
          placeholder="Search blogs here"
          className="w-full pl-4 outline-none"
          required
        />
        <button
          type="submit"
          className="px-8 py-2 m-1.25 rounded text-white hover:scale-105 transition-all cursor-pointer bg-blue-500"
        >
          Search
        </button>

        <div onClick={onClear} className="text-center mt-1 px-2">
          {input && (
            <button className="border border-blue-500 hover:bg-blue-700 hover:text-white text-gray-700 font-light text-xs py-1 px-3 rounded-sm shadow-sm cursor-pointer">
              Clear Search
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
