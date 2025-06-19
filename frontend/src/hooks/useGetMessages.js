import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);

  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const otherPersonId = selectedConversation?._id;

        const res = await fetch(`/api/message/${otherPersonId}`);

        const data = await res.json();
        if (data.error) throw new Error(data.error);
        // console.log(data);
        setMessages(data.messages);
        // console.log("sadkjsb", data.messages);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [setMessages, selectedConversation?._id]);

  return { messages, loading };
};

export default useGetMessages;
