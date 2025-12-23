import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const useInfinitePosts = (query: PostQuery) => {  
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["users", query, "posts"],  // similar to URL pattern: /users/1/posts
    queryFn: ({ pageParam = 1 }) =>
  axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _start: (pageParam - 1) * query.pageSize,
        _limit: query.pageSize
      },
    })
    .then((res) => res.data),
    staleTime: 1 * 60 * 1000, // 1 min
    keepPreviousData: true, // 获取下一页时，保持当前页内容直到获取下一页内容，然后瞬间替换
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    }
  });
}

export default useInfinitePosts;
