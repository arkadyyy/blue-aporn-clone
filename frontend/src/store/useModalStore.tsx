import { create } from "zustand";

type ModalType =
  | "login-email"
  | "login-phone"
  | "signup"
  | "meal"
  | "account-exsists"
  | "otp"
  | "zipcode-edit"
  | "filters"
  | "nutrition"
  | "add-promo"
  | "blue-apron-plus-trial"
  | "autoship-step-1"
  | "autoship-step-2"
  | "autoship-step-3"
  | "autoship-step-4"
  | "update-password"
  | null;

type ModalState = {
  modals: ModalType[];
  open: (t: ModalType) => void;
  changeType: (t: ModalType) => void;
  close: () => void;
  closeAll: () => void;
  type: ModalType | null;
  isOpen: boolean;
};

export const useModalStore = create<ModalState>((set) => ({
  modals: [],
  isOpen: false,
  type: null,

  open: (type) =>
    set((state) => ({
      modals: [...state.modals, type],
      type,
      isOpen: true,
    })),

  changeType: (type) =>
    set((state) => {
      if (state.modals.length === 0) return state;
      const newModals = [...state.modals];
      newModals[newModals.length - 1] = type;
      return {
        modals: newModals,
        type,
        isOpen: true,
      };
    }),

  close: () =>
    set((state) => {
      const newModals = state.modals.slice(0, -1);
      return {
        modals: newModals,
        type: newModals[newModals.length - 1] || null,
        isOpen: newModals.length > 0,
      };
    }),

  closeAll: () => ({
    modals: [],
    type: null,
    isOpen: false,
  }),
}));
