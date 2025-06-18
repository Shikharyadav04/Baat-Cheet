import React from "react";

const InputMessage = () => {
  return (
    <div className="w-full px-2 py-2">
      <form className="flex items-center bg-black/10 rounded-xl overflow-hidden focus-within:bg-black/20 transition-all">
        <input
          type="text"
          placeholder="Type here..."
          className="bg-transparent border-none focus:outline-none px-4 py-3 text-white flex-1 placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="h-12 w-12 flex items-center justify-center hover:bg-black/30 transition"
        >
          <img src="/send.png" alt="Send" className="h-6 w-6 object-contain" />
        </button>
      </form>
    </div>
  );
};

export default InputMessage;
