import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) => {
  const fetchPosts = () =>
  axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      params: { userId },
    })
    .then((res) => res.data);
  
  return useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],  // similar to URL pattern: /users/1/posts
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, // 1 min
  });
}

export default usePosts;
