import create from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      user: { id: 0, username: "", roles: ["ADMIN"] },
      setUser: (username) =>
        set((s) => ({ user: { ...s.user, id: s.user.id + 1, username } })),
    }),
    {
      name: "user",
    }
  )
);
