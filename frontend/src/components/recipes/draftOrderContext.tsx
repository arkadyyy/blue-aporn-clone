import { createContext, useContext, useState, type ReactNode } from "react";

type DraftOrder = {
  id: string | null;
  servings: string;
  option?: string | null;
  price: string | null;
  amount: string;
  name: string | null;
};

type DraftOrderContextType = {
  draftOrder: DraftOrder;
  setDraftOrder: React.Dispatch<React.SetStateAction<DraftOrder>>;
};

const DraftOrderContext = createContext<DraftOrderContextType | null>(null);

export function DraftOrderProvider({ children }: { children: ReactNode }) {
  const initialState = {
    id: null,
    servings: "2",
    option: null,
    price: null,
    amount: "1",
    name: null,
  };
  const [draftOrder, setDraftOrder] = useState<DraftOrder>(initialState);
  return (
    <DraftOrderContext.Provider value={{ draftOrder, setDraftOrder }}>
      {children}
    </DraftOrderContext.Provider>
  );
}

export function useDraftOrder() {
  const ctx = useContext(DraftOrderContext);
  if (!ctx)
    throw new Error("useDraftOrder must be used within a DraftOrderProvider");
  return ctx;
}
