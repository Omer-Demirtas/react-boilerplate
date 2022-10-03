import { useAuth } from "context/Auth/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, roles }) => {
  const { user } = useAuth();

  console.log({ user, roles });
  console.log(roles.filter((element) => user.roles.includes(element)));

  if (roles && !roles.filter((element) => user.roles.includes(element)).length )
    return <Navigate to="/notFound" />;
  if (!user) return <Navigate to="/auth/login" />;

  return children;
};

export default PrivateRoute;
