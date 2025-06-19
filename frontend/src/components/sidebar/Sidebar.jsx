import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import useGetConversation from "../../hooks/useGetConversations";

const Sidebar = () => {
  const [search, setSearch] = useState("");

  const { conversations, loading } = useGetConversation();
  // console.log(conversations.users);
  const [filteredConversations, setFilteredConversations] = useState([]);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredConversations(conversations.users);
    } else {
      const result = conversations.users.filter((conversation) => {
        return conversation.fullName
          .toLowerCase()
          .includes(search.toLowerCase());
      });

      setFilteredConversations(result);
    }
  }, [conversations, search]);

  return (
    <div className="overflow-y-auto scrollbar-hide  border-r  border-slate-300 flex flex-col">
      <SearchInput search={search} setSearch={setSearch} />
      <div className="divider mt-0 w-full"></div>
      <Conversations conversations={filteredConversations} loading={loading} />
      <div className="mt-auto p-2">
        <LogoutButton />
      </div>
      {/* <Conversations /> */}
    </div>
  );
};

export default Sidebar;
