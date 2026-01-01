import { useContext } from "react";
import TaskContext from "./tasksContext";

const useTasks = () => useContext(TaskContext);

export default useTasks;