import  { createContext, useContext } from "react";
import type { MealsPayload } from "@/types";

const MealsCtx = createContext<MealsPayload | null>(null);
export const MealsProvider = MealsCtx.Provider;
export const useMeals = () => {
  const ctx = useContext(MealsCtx);
  if (!ctx) throw new Error("useMeals must be used inside <MealsProvider>");
  return ctx;
};
