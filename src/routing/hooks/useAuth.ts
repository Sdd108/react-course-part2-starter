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

const useAuth = create<AuthStore>((set) => ({
  user: null,
  login: () => set({ user: { id: 1, name: "Mosh" } }),
  logout: () => set({ user: null }),
}));

export default useAuth;