import {APIBuilder} from "@/utils/APIBuilder";
import {PostType} from "@/types/PostType";

interface GetPostsApiType {
  page: number;
  size: number;
}
export default async function GetPostsApi({ page, size }: GetPostsApiType): Promise<PostType[]> {
  const response = await APIBuilder.get(`/api/posts?page=${page}&size=${size}`)
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call<PostType[]>();

  return response.data;
}
