import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, selectAuthUser] = useState(
    localStorage.getItem("authUser") || null
  );

  return (
    <AuthContext.Provider value={{ authUser, selectAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
