import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  // console.log("AuthUser : ", authUser);
  const fromMe = selectedConversation._id === message.receiverId;

  const formattedTime = new Date(message.createdAt).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="mx-2">
      {fromMe ? (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Your Avatar" src={authUser.profilePic} />
            </div>
          </div>
          <div className="chat-header">
            <time className="text-xs opacity-50 ml-1">{formattedTime}</time>
          </div>
          <div className="chat-bubble text-white chat-bubble-info my-2 bg-[#2e91d3cd]">
            {message.message}
          </div>
        </div>
      ) : (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Receiver Avatar"
                src={selectedConversation.profilePic}
              />
            </div>
          </div>
          <div className="chat-header">
            <time className="text-xs opacity-50 ml-1">{formattedTime}</time>
          </div>
          <div className="chat-bubble bg-pink-500 my-2">{message.message}</div>
        </div>
      )}
    </div>
  );
};

export default Message;
