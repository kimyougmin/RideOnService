import {APIBuilder} from "@/utils/APIBuilder";
import {SignupRequestType} from "@/types/SignupRequestType";

export default async function SignupApi({ email, password, name, phone, birthDate }: SignupRequestType): Promise<{res: string}> {
  const response = await APIBuilder.post(`/api/users/register`, {email, password, name, phone, birthDate, provider: "original" })
    .withCredentials(true)
    .timeout(2000)
    .build()
    .call<{res: string}>();

  return response.data;
}
