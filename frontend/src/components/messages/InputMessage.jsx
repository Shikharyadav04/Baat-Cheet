import React, { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const InputMessage = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    await sendMessage(message);
    setMessage("");
  };
  return (
    <div className="w-full px-2 py-2">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-black/10 rounded-xl overflow-hidden focus-within:bg-black/20 transition-all"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type here..."
          className="bg-transparent border-none focus:outline-none px-4 py-3 text-white flex-1 placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="h-12 w-12 flex items-center justify-center hover:bg-black/30 transition"
        >
          {loading ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : (
            <img
              src="/send.png"
              alt="Send"
              className="h-6 w-6 object-contain"
            />
          )}
        </button>
      </form>
    </div>
  );
};

export default InputMessage;
