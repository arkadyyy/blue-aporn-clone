import styles from "./styles.module.css";
import { Link } from "@tanstack/react-router";
import plusIcon from "@/assets/icons/plus.svg";
const exampleMeals = [
  {
    header: "Meal Kits",
    meals: [
      {
        header: "Miso Glazed Salmon",
        desc: "with Veggie Fried Rice",
        time: "45 min",
        price: "12.84",
        img: "https://rfprodv2-ba-image.azureedge.net/image/1080x720/blueapron/64cb0a8b-c8ec-48eb-9f25-68db53bcdcb1.jpg",
      },
      {},
      {},
    ],
    jumpUrl: "",
  },
  {
    header: "Assemble & Bake",
  },
];
function Example() {
  return (
    <div className={styles.meal_types_example_card}>
      <div
        style={{
          backgroundImage: `url("https://rfprodv2-ba-image.azureedge.net/image/1080x720/blueapron/64cb0a8b-c8ec-48eb-9f25-68db53bcdcb1.jpg")`,
          backgroundSize: "cover", // optional
          backgroundPosition: "center", // optional
          width: "300px",
          height: "200px",
        }}
      >
        <button>
          <img src={plusIcon} alt="" />
        </button>
      </div>
      <p>Customer Favorite</p>
      <p>with Veggie Fried Rice</p>
      <div>$12.84/serv · 45 min</div>
    </div>
  );
}
export default function MealTypesExamples() {
  return (
    <div className={styles.meal_types_example_container}>
      <div className={styles.meal_types_exam}>
        <div className={styles.meal_types_example_header}>
          <h2>Meal Kits</h2>
          <Link to="/menu">See all</Link>
        </div>
        <div className={styles.meal_types_exmaple_cards_container}>
          <Example />
          <Example />
          <Example />
        </div>
      </div>
    </div>
  );
}
