import { useState, createContext, useContext } from "react";

const Context = createContext({ user: false, setUser: () => {} });

export const AuthProvider = ({ children }) => 
{
    const [user, setUser] = useState(false);
    return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
}

export const useAuth = () => useContext(Context);