import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { CACHE_KEY_TODOS } from "../constants";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const apiClient = new APIClient<Todo>('/todos');

const useTodos = () => {
  
  return useQuery<Todo[], Error>({
    // Properties of query: data, error, isLoading, isError, refetch, etc.
    queryKey: CACHE_KEY_TODOS, // A unique identifier for the query, for caching purposes.  Can be set to an array with multiple values.
    queryFn: apiClient.getAll, // The function that fetches the data.
    staleTime: 1000 * 10, // Data is considered fresh for 10 seconds.
  });
}

export default useTodos;
