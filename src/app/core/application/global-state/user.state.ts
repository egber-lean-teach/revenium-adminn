import { create } from "zustand";

interface IUserProfile {
  id: string;
  firstName: string | null;
  fullName: string | null;
  lastName: string | null;
  imageUrl: string | null;
  emailAddress: string | undefined;
}
interface IUserState {
  user: IUserProfile;
  setUser: (value: IUserProfile) => void;
}

export const useUserState = create<IUserState>((set) => ({
  user: {
    id: "",
    firstName: "",
    fullName: "",
    lastName: "",
    imageUrl: "",
    emailAddress: "",
  },
  setUser: (value: IUserProfile) => set(() => ({ user: value })),
}));
