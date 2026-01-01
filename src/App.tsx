import { useReducer } from "react";
import "./App.css";
import PostFlow from "./react-query/PostFlow";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TaskContext from "./state-management/contexts/tasksContext";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <>
      {/* <TodoForm />
      <TodoList /> */}
      {/* <PostList /> */}
      {/* <Counter /> */}
      {/* <TaskList /> */}
      {/* <LoginStatus /> */}
      <AuthProvider>
        <TaskContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />
          <HomePage />
        </TaskContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
