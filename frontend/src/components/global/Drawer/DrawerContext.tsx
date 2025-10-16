import { createContext, useContext, useState } from "react";

type DrawerContextType = {
  isOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
};

const DrawerContext = createContext<DrawerContextType | null>(null);

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((p) => !p);
  const closeDrawer = () => setIsOpen(false);

  return (
    <DrawerContext.Provider value={{ isOpen, toggleDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawer = () => {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("useDrawer must be used within DrawerProvider");
  return ctx;
};
