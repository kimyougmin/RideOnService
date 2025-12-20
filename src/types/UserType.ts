export interface UserType {
  token: string;
  email: string;
  name: string;
  profileImage: string;
  phone: string;
}

export interface UserStoreType extends UserType {
  setUser: (user: UserType) => void;
  clearUser: () => void;
}
