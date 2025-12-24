import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type Todo } from "./hooks/useTodo";
import axios from "axios";

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    // Optimistic Update
    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];

      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      if (ref.current) ref.current.value = "";

      return { previousTodos };
    }, // this function is called before the mutation gets executed
    onSuccess: (savedTodo, newTodo) => {
      console.log(savedTodo);
      // Optimistic update: replace the newTodo with savedTodo if success because newTodo doesn't have the generated id by the backend
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
      // To update the Todo list:
      // Approach #1: invalidate the cache (doesn't work on fake api backend)
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"],
      // });

      // Approach #2: update the data in the cache
      // queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
      //   newTodo,
      //   ...(todos || []),
      // ]);

      // if (ref.current) ref.current.value = "";
    },

    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isLoading}>
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
