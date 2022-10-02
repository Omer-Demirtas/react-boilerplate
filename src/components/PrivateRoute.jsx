import { useAuth } from "context/Auth/AuthContext";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => 
{
    const  { user } = useAuth();

    console.log(user);

    if(!user) return <Navigate to="/auth/login" />
    
    return children;
}

export default PrivateRoute;