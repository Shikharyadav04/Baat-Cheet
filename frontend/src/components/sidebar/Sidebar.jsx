import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="overflow-y-auto scrollbar-hide  border-r  border-slate-300 flex flex-col">
      <SearchInput />
      <div class="divider mt-0 w-full"></div>
      <Conversations />
      <LogoutButton />
      {/* <Conversations /> */}
    </div>
  );
};

export default Sidebar;
