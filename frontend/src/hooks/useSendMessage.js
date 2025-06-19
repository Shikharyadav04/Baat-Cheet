import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const receiverId = selectedConversation._id;
      const res = await fetch(`api/message/send/${receiverId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      //   console.log(data);
      setMessages((prev) =>
        Array.isArray(prev) ? [...prev, data.newMessage] : [data.newMessage]
      );
      //   setMessages([...(messages || []), data.newMessage]);
      //   console.log(messages);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
