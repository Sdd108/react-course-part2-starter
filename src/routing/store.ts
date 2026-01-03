import { create } from "zustand";

interface User {
  id: number;
  name: string;
}

interface AuthStore {
  user: User | null;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: () => set({ user: { id: 1, name: "Zhipeng Liu" } }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;