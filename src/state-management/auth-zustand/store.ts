import { create } from "zustand";

interface AuthStore {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

const useAuthStore =  create<AuthStore>(set => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set(() => ({user: null}))
}))

export default useAuthStore;
