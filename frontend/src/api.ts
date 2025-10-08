import type { MealsPayload } from "@/types";

export async function fetchMeals(): Promise<MealsPayload> {
  const res = await fetch("/api/meals");
  if (!res.ok) throw new Error(`/api/meals failed: ${res.status}`);
  return res.json();
}
