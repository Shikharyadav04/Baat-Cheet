import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeleton/MessageSkeleton";
import useListenMessage from "../../hooks/useListenMessage";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  useListenMessage();

  return (
    <div className="p-2 flex flex-col overflow-auto scrollbar-hide">
      {!loading &&
        Array.isArray(messages) &&
        messages.length > 0 &&
        messages.map((message, index) => {
          const isLastMessage = index === messages.length - 1;
          return (
            <div key={message._id} ref={isLastMessage ? lastMessageRef : null}>
              <Message message={message} />
            </div>
          );
        })}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && (!messages || messages.length === 0) && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
