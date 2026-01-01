import { ReactNode, useReducer } from "react";
import TaskContext from "./tasksContext";

/**
 * Here TaskProvider is just an example demonstrating how to use React Context.
 * In the real world application, the task is more of a server state and will be managed by React Query.
 */

export interface Task {
  id: number;
  title: string;
}

// Reducer
interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

// Provider
interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
