import { Query, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = () =>
  axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _start: (query.page - 1) * query.pageSize,
        _limit: query.pageSize
      },
    })
    .then((res) => res.data);
  
  return useQuery<Post[], Error>({
    queryKey: ["users", query, "posts"],  // similar to URL pattern: /users/1/posts
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, // 1 min
    keepPreviousData: true, // 获取下一页时，保持当前页内容直到获取下一页内容，然后瞬间替换
  });
}

export default usePosts;
