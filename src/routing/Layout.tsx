import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main">
        {/* This is the key! */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
