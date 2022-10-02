import { useState } from "react";
import { createContext } from "react";

const Context = createContext();

export const Provider = ({ children }) => 
{
    const [user, setUser] = useState();
    return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
}

export const useAuth = () => useAuth(Context);