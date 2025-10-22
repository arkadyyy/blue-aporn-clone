import { create } from "zustand";

type FaqScrollState = {
  isFaqAtTop: boolean;
  setFaqAtTop: (value: boolean) => void;
};

export const useFaqScrollStore = create<FaqScrollState>((set) => ({
  isFaqAtTop: false,
  setFaqAtTop: (value) => {
    set({ isFaqAtTop: value });
  },
}));
