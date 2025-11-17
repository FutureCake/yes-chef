import { create } from "zustand";
import { UserType } from "../../domain/user/types";

interface OnboardingStore {
    userType: UserType;
    setUserType: (userType: UserType) => void;
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
    userType: "individual",
    setUserType: (userType: UserType) => {
        set({ userType })
    },
}));