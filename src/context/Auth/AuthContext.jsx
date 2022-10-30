import { useState, createContext, useContext, useEffect } from "react";

const Context = createContext({ user: false, setUser: () => {} });

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const logout = () => setUser(false);

  useEffect(() => {
    if (user) {
      setIsLogin(true);
      //localStorage.setItem("user", JSON.stringify(user));
    } else {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((json) => setUser(json));
    }
  }, [user]);

  return (
    <Context.Provider value={{ user, isLogin, setUser, logout }}>
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
