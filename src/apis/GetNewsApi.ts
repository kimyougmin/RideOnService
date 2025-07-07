import {NewsType} from "@/types/NewsType";
import {APIBuilder} from "@/utils/APIBuilder";

interface GetNewsRequestType {
  newsType: "latest" | "popular"
}
export default async function GetNewsApi({ newsType }: GetNewsRequestType): Promise<NewsType[]> {
  const response = await APIBuilder.get(`/api/news/${newsType}`)
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call<NewsType[]>();

  return response.data;
}
