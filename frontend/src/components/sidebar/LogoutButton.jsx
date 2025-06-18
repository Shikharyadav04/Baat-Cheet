import React from "react";
import useLogout from "../../hooks/useLogout.js";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-1 pl-1">
      {!loading ? (
        <button
          onClick={() => logout()}
          className="my-auto h-8 w-8  p-1 transition duration-500 hover:scale-125 "
        >
          <img src="/icon-2.png" className="object-cover rounded-lg" />
        </button>
      ) : (
        <span className="loading loading-infinity loading-xl"></span>
      )}
    </div>
  );
};

export default LogoutButton;
