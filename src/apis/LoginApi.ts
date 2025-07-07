import {APIBuilder} from "@/utils/APIBuilder";
import {UserType} from "@/types/UserType";
import {LoginRequestType} from "@/types/LoginRequestType";

export default async function LoginApi({ email, password }: LoginRequestType): Promise<UserType> {
  const response = await APIBuilder.post(`/api/users/login`, {email, password})
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call<UserType>();
  return response.data;
}
