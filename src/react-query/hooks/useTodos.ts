import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { type Todo } from "../services/todoService";

const useTodos = () => {
  
  return useQuery<Todo[], Error>({
    // Properties of query: data, error, isLoading, isError, refetch, etc.
    queryKey: CACHE_KEY_TODOS, // A unique identifier for the query, for caching purposes.  Can be set to an array with multiple values.
    queryFn: todoService.getAll, // The function that fetches the data.
    staleTime: 1000 * 10, // Data is considered fresh for 10 seconds.
  });
}

export default useTodos;
