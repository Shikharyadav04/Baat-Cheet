import React from "react";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isConversation = selectedConversation?._id === conversation._id;
  const setConversation = (Newconversation) => {
    setSelectedConversation(Newconversation);
    // console.log(selectedConversation);
  };
  return (
    <>
      <div
        onClick={() => setConversation(conversation)}
        className={`flex gap-2 items-center rounded-lg p-2 py-3 mt-1  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-violet-500 ${
          isConversation ? "bg-violet-700 shadow-violet-500 shadow-md" : ""
        }`}
      >
        <div className="avatar avatar-online">
          <div className="rounded-full w-12">
            <img src={conversation.profilePic} />
          </div>
        </div>
        <div className="flex-1 gap-3 justify-start">
          <span className=" font-mono font-extrabold font-manrope leading-snug text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-slate-100 to-blue-200">
            {conversation.fullName}
          </span>
        </div>
      </div>
      {/* <div class="divider mt-0"></div> */}
    </>
  );
};

export default Conversation;
