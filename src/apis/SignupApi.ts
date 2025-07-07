import {APIBuilder} from "@/utils/APIBuilder";
import {SignupRequestType} from "@/types/SignupRequestType";

export default async function SignupApi({ email, password, name, phone, birthDate }: SignupRequestType): Promise<{res: string}> {
  const response = await APIBuilder.post(`/api/users/register`, {email, password, name, phone, birthDate})
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call<{res: string}>();

  return response.data;
}
