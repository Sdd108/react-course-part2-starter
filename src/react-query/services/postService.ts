import APIClient, { axiosInstance } from "./apiClient";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostsQuery {
  page: number;
  pageSize: number;
}

class PostService extends APIClient<Post> {
  getPaged = (query: PostsQuery): Promise<Post[]> => {
    return  axiosInstance
      .get<Post[]>(this.endpoint, {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);
  };
}

export default new PostService("/posts");