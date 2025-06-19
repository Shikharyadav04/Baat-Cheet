import React from "react";
import useConversation from "../../zustand/useConversation";

const HeaderName = () => {
  const { selectedConversation } = useConversation();
  return (
    <div>
      <div className="w-full my-2 mb-0 text-center ">
        <span className="text-xl font-bold ">
          {selectedConversation.fullName}{" "}
        </span>
      </div>
    </div>
  );
};

export default HeaderName;
