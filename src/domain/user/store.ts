import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { mmkvStorage } from "../../libs/mmkv";
import { UserAccount } from "./types";

export interface UserStore extends UserAccount {
    setUser: (user: UserAccount) => void;
    updateUser: (changes: Partial<UserAccount>) => void;
    reset: () => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        immer((set) => ({
            id: "",
            email: "thomas.c.hoek@gmail.com",
            name: "Thomas",
            userType: "individual",
            setUser: (user: UserAccount) => set(user),
            updateUser: (changes: Partial<UserAccount>) => {
                set((state) => {
                    Object.assign(state, changes)
                })
            },
            reset: () => set({
                id: "",
                email: "",
                name: "",
                userType: "individual"
            })
        })),
        {
            name: "user-data-storage",
            storage: createJSONStorage(() => mmkvStorage)
        }
    )
)