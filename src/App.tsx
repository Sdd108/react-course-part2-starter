import "./App.css";
import { AuthProvider } from "./state-management/auth";
import { TasksProvider } from "./state-management/tasks";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
