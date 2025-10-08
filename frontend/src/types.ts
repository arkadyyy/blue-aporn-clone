export type Meal = {
  id?: string | null;
  name: string;
  subtitle?: string | null;
  image?: string | null;
  thumbnail?: string | null;
  description?: string;
  price?: number | null;
  formatted_price?: string | null;
  min_cook_time?: number | null;
  max_cook_time?: number | null;
  average_cook_time?: number | null;
  badges?: { primary: string | null; secondary: string[] };
  category?: string | null;
  category_description?: string | null;
};

export type MealsPayload = {
  categories: Array<{ id?: string; name?: string; description?: string }>;
  meals: Meal[];
};
