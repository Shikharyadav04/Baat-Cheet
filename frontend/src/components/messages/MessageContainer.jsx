import React from "react";
import Messages from "./Messages";
import HeaderName from "./HeaderName";
import InputMessage from "./InputMessage";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col flex-1">
      <HeaderName />
      <div className="divider mt-0"></div>
      <div className="flex-1 overflow-auto px-2">
        <Messages />
      </div>
      <InputMessage />
    </div>
  );
};

export default MessageContainer;
