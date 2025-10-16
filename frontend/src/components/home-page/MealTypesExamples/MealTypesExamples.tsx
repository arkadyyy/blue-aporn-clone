import styles from "./styles.module.css";
import { Link, Header, Text, Button } from "@/components";
import plusIcon from "@/assets/icons/plus.svg";
const exampleMeals = [
  {
    header: "Meal Kits",
    meals: [
      {
        header: "Miso Glazed Salmon",
        header_label: "Customer favorite",
        desc: "with Veggie Fried Rice",
        time: "45 min",
        price: "12.84",
        img: "https://rfprodv2-ba-image.azureedge.net/image/1080x720/blueapron/64cb0a8b-c8ec-48eb-9f25-68db53bcdcb1.jpg",
      },
      {
        header: "Bang Bang Chicken",
        header_label: "CUSTOMIZE IT",
        desc: "with White Rice, Poblano Pepper & Peanuts",
        time: "25 min",
        price: "11.14",
        img: "https://rfprodv2-ba-image.azureedge.net/image/1080x720/blueapron/60d81392-f719-46bb-a327-217a7bd9ed6c.jpg",
      },
      {
        header: "Maple-Sage Pork Chops",
        header_label: "CUSTOMIZE IT",
        desc: "with Buttermilk Mashed Potatoes & Roasted Carrots",
        time: "35 min",
        price: "11.44",
        img: "https://rfprodv2-ba-image.azureedge.net/image/2160x1440/blueapron/50e7bfe9-2fd5-4c41-a3d7-9cc54c67e6d3.jpg",
      },
    ],
    jumpUrl: "",
  },
  {
    header: "Assemble & Bake",
    meals: [
      {
        header: "Cheesy Baked Chicken & Peppers",
        header_label: "CUSTOMIZE IT",
        desc: "with Guajillo Sauce, Guacamole & Pre-Cooked Rice",
        time: "35 min",
        price: "11.54",
        img: "https://rfprodv2-ba-image.azureedge.net/image/2160x1440/blueapron/0546bc55-ff58-4df2-b6c9-34eff70dc679.jpg",
      },
      {
        header: "Spicy Sausage Meatball & Pasta Bake",
        header_label: "CUSTOMIZE IT",
        desc: "with Baby Kale, Artichokes & Pesto Tortellini",
        time: "45 min",
        price: "12.44",
        img: "https://rfprodv2-ba-image.azureedge.net/image/2160x1440/blueapron/4bf65f6d-4db6-41cf-956a-cac4b855289e.jpg",
      },
      {
        header: "Chorizo & Pinto Bean Tacos",
        header_label: "CUSTOMIZE IT",
        desc: "with Monterey Jack & Cheddar Cheese",
        time: "30 min",
        price: "10.94",
        img: "https://rfprodv2-ba-image.azureedge.net/image/2160x1440/blueapron/5c86542e-8fce-494c-ba78-54bf707203e2.jpg",
      },
    ],
    jumpUrl: "",
  },
  {
    header: "Dish by Blue Apron",
    meals: [
      {
        header: "Egg Noodles & Beef Meatballs",
        header_label: "Customer Favorite",
        desc: "with Creamy Mushroom Sauce & Peas",
        time: "5 min",
        price: "10.19",
        img: "https://rfprodv2-ba-image.azureedge.net/image/2160x1440/blueapron/fbd52ab3-583e-479d-bc6a-1d546d7752bb.jpg",
      },
      {
        header: "Four-Cheese Enchiladas",
        header_label: "Customer Favorite",
        desc: "with Rice & Vegetables",
        time: "5 min",
        price: "8.89",
        img: "https://rfprodv2-ba-image.azureedge.net/image/2160x1440/blueapron/d9e5c9ce-c0f3-4938-8b79-937cbaef4328.jpg",
      },
      {
        header: "Chimichurri Salmon Grain Bowl",
        header_label: "",
        desc: "with Asparagus",
        time: "5 min",
        price: "11.89",
        img: "https://rfprodv2-ba-image.azureedge.net/image/2160x1440/blueapron/dfb67770-212d-481c-a28c-90dfd09e5e14.jpg",
      },
    ],
    jumpUrl: "",
  },
];
function ExampleMeal({ meal }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.img_container}
        style={{
          backgroundImage: `url(${meal.img})`,
        }}
      >
        <Button round type="secondary">
          {/* <p>asd</p> */}
          <img src={plusIcon} alt="add to cart" />
        </Button>
      </div>
      <Text size="sm" className={styles.label}>
        {meal.header_label}
      </Text>
      <Text size="xl" weight="bold" className={styles.meal_header}>
        {meal.header}
      </Text>
      <Text style={{ marginBlock: ".4rem" }}>{meal.desc}</Text>
      <Text className={styles.price_n_time}>
        ${meal.price}/serv · {meal.time}
      </Text>
    </div>
  );
}
export default function MealTypesExamples() {
  return (
    <div className={styles.container}>
      {exampleMeals.map((section) => (
        <div className={styles.border}>
          <div className={styles.header}>
            <Header>{section.header}</Header>
            <Link type="classic" to="/menu">
              See all
            </Link>
          </div>
          <div className={styles.cards_container}>
            {section.meals.map((meal) => (
              <ExampleMeal meal={meal} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
