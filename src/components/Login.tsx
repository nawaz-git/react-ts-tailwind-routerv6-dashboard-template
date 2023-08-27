import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../Routes/IsAuthenticated";

const Login = () => {
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>Login</div>
  )
}

export default Login