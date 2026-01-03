import useAuth from "./hooks/useAuth";

const LoginUser = () => {
  const { user, login, logout } = useAuth();

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      {user ? (
        <>
          <span>{user.name}</span>
          <a onClick={logout} href="#">
            Logout
          </a>
        </>
      ) : (
        <a onClick={login} href="#">
          Login
        </a>
      )}
    </div>
  );
};

export default LoginUser;
