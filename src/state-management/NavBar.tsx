import { LoginStatus } from "./auth-zustand";
import useCounterStore from "./counter/store";

const NavBar = () => {
  // Changing from this:
  // const { counter } = useCounterStore();
  // to this blow: will only re-render if the value of counter changes, not the max
  // the selector function: (s) => s.counter
  const counter = useCounterStore((s) => s.counter);

  console.log("Render NavBar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
