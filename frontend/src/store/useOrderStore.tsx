import { create } from "zustand";

type Order = {
  id : string,
  servings : number,
  option : string,
  price : number,
  amount : number,
  name : string,
}

type ModalState = {
 orders : Order[],
 addOrder : (order : Order) => void
};

export const useOrderStore = create<ModalState>((set) => ({
  orders: [],
  addOrder: (order : Order) =>
    set((state) => ({
      ...state,
      orders : [...state.orders,order]
    })),
  deleteOrder:(id : string) => 
    set((state) => ({
      ...state,
      orders : state.orders.filter((order) => order.id !== id);
    })),
}));
