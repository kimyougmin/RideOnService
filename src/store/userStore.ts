import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {UserStoreType, UserType} from '@/types/UserType';
import {APIBuilder} from "@/utils/APIBuilder";
import {RefreshTokenType} from "@/types/RefreshTokenType";

export const userStore = create<UserStoreType>()(
  persist(
    (set) => ({
      token: '',
      email: '',
      name: '',
      profileImage: '',
      phone: '',
      setUser: (user: UserType) =>
        set(() => ({
          ...user,
        })),
      refreshToken: async () => {
        const response = await APIBuilder.post('/auth/refresh', {})
          .withCredentials(true)
          .timeout(2000)
          .build()
          .call<RefreshTokenType>();
        set({ token: response.data.token});
      },
      clearUser: () =>
        set(() => ({
          token: '',
          email: '',
          name: '',
          profileImage: '',
          phone: '',
        })),
    }),
    {
      name: 'user-storage', // 로컬스토리지 키 이름
    }
  )
);
