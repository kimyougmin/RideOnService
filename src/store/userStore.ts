import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {UserStoreType, UserType} from '@/types/UserType';

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
