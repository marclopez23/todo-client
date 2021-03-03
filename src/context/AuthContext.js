import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const initialState = {
  user: localStorage.getItem("user"),
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(initialState);

  return (
    <AuthContext.Provider value={{ ...user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
