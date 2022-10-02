import { useAuth } from "context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => 
{
    const { setUser } = useAuth();
    const navigate = useNavigate();

    return (
        <div style={{ padding: "5rem", textAlign: "center" }}>
            <h1>Please Login!</h1>
            <button onClick={() => {
                setUser({ id: 1, name: "Ömer", roles: ["ADMIN"] });
                navigate("/");
            }}>Login</button>
        </div>
    );
}

export default Login;