import { APIBuilder } from "@/utils/APIBuilder";
import { PostType } from "@/types/PostType";

interface DeletePosts {
  code: number;
}
export async function deletePostApi(url: string): Promise<DeletePosts> {
  const response = await APIBuilder.delete(`/api/posts/${url}`)
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call<DeletePosts>();

  return response.data;
}

interface GetPostsApiType {
  page: number;
  size: number;
}
export async function getPostsApi({
  page,
  size,
}: GetPostsApiType): Promise<PostType[]> {
  const response = await APIBuilder.get(`/api/posts?page=${page}&size=${size}`)
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call<PostType[]>();

  return response.data;
}
