import { useQuery } from "@tanstack/react-query";
import postService, {
  type Post,
  type PostsQuery,
} from "../services/postService";

const usePosts = (query: PostsQuery) => {
  return useQuery<Post[], Error>({
    queryKey: ["users", query, "posts"],
    queryFn: () => postService.getPaged(query),
    staleTime: 60 * 1000,
    keepPreviousData: true,
  });
};

export default usePosts;
