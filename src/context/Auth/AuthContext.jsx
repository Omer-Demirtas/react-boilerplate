import { useState, createContext, useContext, useEffect } from "react";

const Context = createContext({ user: false, setUser: () => {} });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const logout = () => setUser(false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Context.Provider value={{ user, setUser, logout }}>{children}</Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
