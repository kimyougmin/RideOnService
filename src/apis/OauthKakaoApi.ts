import {APIBuilder} from "@/utils/APIBuilder";
import {UserType} from "@/types/UserType";
import {LoginRequestType} from "@/types/LoginRequestType";

export default async function OauthKakaoApi(): Promise<UserType> {
  const response = await APIBuilder.post(`/oauth2/authorization/kakao`, {})
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call<UserType>();

  return response.data;
}
