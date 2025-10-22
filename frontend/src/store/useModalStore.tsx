import { create } from "zustand";

type ModalType = "login-email" | "login-phone" | "signup" | "meal" | null;

type ModalState = {
  isOpen: boolean;
  open: (t: ModalType) => void;
  close: () => void;
  type: ModalType;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: null,
  open: (type: ModalType) => set({ isOpen: true, type }),
  close: () => set({ isOpen: false, type: null }),
}));
