import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      console.log(newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages]);
};

export default useListenMessage;
