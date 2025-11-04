import styles from "./styles.module.css";
import { Text, Header } from "@/components";

const ingredientsData = {
  ingredients: [
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },

    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
    {
      name: "Skin-On Salmon Fillets",
      amount: "2 each",
    },
  ],
  img: "https://rfprodv2-ba-image.azureedge.net/image/origin/blueapron/1aa9aadd-e63e-4651-bb06-20d1379455f7.png",
};

type IngredientType = (typeof ingredientsData.ingredients)[0];
function Ingredient({ ingredient }: { ingredient: IngredientType }) {
  return (
    <div className={styles.ingredient}>
      <Text size="lg">{ingredient.amount}</Text>
      <Text size="lg" weight="medium">
        {ingredient.name}
      </Text>
    </div>
  );
}

export default function Ingredients() {
  return (
    <div className={styles.container}>
      <div className={styles.ingredients_wrapper}>
        <Header>Ingredients</Header>
        <div className={styles.ingredients_container}>
          {/* TODO - ingredients container change size according to num of ingredients */}
          {/* less than 9 ingredients -> max-height is 420px , over 9 is 800px */}
          {ingredientsData.ingredients.map((ingredient) => (
            <Ingredient ingredient={ingredient} />
          ))}
        </div>
      </div>
      <div className={styles.image}>
        <img src={ingredientsData.img} />
      </div>
    </div>
  );
}
