import { create } from "zustand";

export interface CheckoutPlan {
    title: string;
    price: number;
    tokens: number;
    currency: string;
    variant: string;
}

interface CheckoutStore {
    plan: CheckoutPlan | null;
    setPlan: (plan: CheckoutPlan) => void;
    clearPlan: () => void;
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
    plan: null,
    setPlan: (plan) => set({ plan }),
    clearPlan: () => set({ plan: null }),
}));
