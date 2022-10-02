import { useAuth } from "context/Auth/AuthContext";

const Profile = () => 
{
    const { logout } = useAuth();
    return (
        <div>
            Profile Page
            <button onClick={logout}>Logout</button>
        </div> 
    );
}

export default Profile;