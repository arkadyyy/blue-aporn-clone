export default {
  getFullAllMeals: `
  SELECT
    m.*,
    JSON_AGG(
    JSON_BUILD_OBJECT(
      'id', i.id,
      'name', i.name
    ) ORDER BY i.id
  ) AS ingredients
  FROM meals AS m
    INNER JOIN meals_ingredients AS mi
    ON m.id = mi.meal_id
      INNER JOIN ingredients AS i
      ON mi.ingredient_id = i.id
        GROUP BY m.id
        ORDER BY m.id;
  `,
  getMeal: `
  SELECT
  m.*,
  JSON_AGG(
  JSON_BUILD_OBJECT(
    'id', i.id,
    'name', i.name
    ) ORDER BY i.id
    ) AS ingredients
  FROM meals AS m
  INNER JOIN meals_ingredients AS mi
    ON m.id = mi.meal_id
    INNER JOIN ingredients AS i
      ON mi.ingredient_id = i.id
        WHERE m.id = $1
        GROUP BY m.id
        ORDER BY m.id;
  `,
  getAllMeals: `
  SELECT
  meal_name,
  subtitle,
  description,
  price,
  cooking_time_active_min,
  cooking_time_total_min,
  grams_protein,
  protein_types,
  calories,
  season,
  servings_options,
  options,
  badges,
  nutrition_img
  from 
  meals;`,
};
