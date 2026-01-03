import useAuthStore from "./store";

const LoginUser = () => {
  const { user, login, logout } = useAuthStore();

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      {user ? (
        <>
          <span>Hi, {user.name}</span>
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
