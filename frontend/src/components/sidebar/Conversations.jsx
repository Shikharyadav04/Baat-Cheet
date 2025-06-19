import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";

const Conversations = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { conversations, loading } = useGetConversation();

  // console.log(conversations.users);

  return (
    <div className="p-2 flex flex-col overflow-auto scrollbar-hide">
      {conversations.users?.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}

      {loading ? (
        <span className="loading loading-infinity loading-xl"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
