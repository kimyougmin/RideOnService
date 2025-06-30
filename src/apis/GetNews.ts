import {NewsType} from "@/types/newsType";
import {APIBuilder} from "@/utils/APIBuilder";

interface GetNewsRequestType {
  newsType: "latest" | "popular"
}
export default async function GetNews({ newsType }: GetNewsRequestType): Promise<NewsType[]> {
  const response = await APIBuilder.get(`/api/news/${newsType}`)
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call<any>();

  return response.data;
}
