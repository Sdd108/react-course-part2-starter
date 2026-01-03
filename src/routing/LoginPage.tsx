import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "./store";

const LoginPage = () => {
  const { user, login, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  // where the user originally wanted to go
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>

      {user ? (
        <>
          <p>Logged in as {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginPage;
