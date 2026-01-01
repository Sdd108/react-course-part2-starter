import React, { Dispatch } from "react";
import type { Task, TaskAction } from "./TasksProvider";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TasksContextType>({} as TasksContextType);

export default TaskContext;
