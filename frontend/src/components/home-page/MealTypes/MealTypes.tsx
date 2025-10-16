// import { Link } from "@tanstack/react-router";
import { Link } from "@/components";
import styles from "./styles.module.css";
import { useState } from "react";

const mealTypes = [
  {
    header: "Meal Kits",
    text: "Classic recipes perfectly portioned.",
    img: "https://rfprodv2-ba-image.azureedge.net/image/origin/blueapron/a6096704-e202-4c8b-a000-c44fd015072d.jpg",
    btnText: "Shop Meal Kits",
  },
  {
    header: "Assemble & Bake",
    text: "One-pan meals with minimal prep.",
    img: "https://rfprodv2-ba-image.azureedge.net/image/origin/blueapron/ab907fad-bbab-495f-8dca-9ee4babcff5f.jpg",
    btnText: "Shop Dish by Blue Apron",
  },
  {
    header: "Dish by blue apron",
    text: "One-pan meals with minimal prep.",
    img: "https://rfprodv2-ba-image.azureedge.net/image/origin/blueapron/4d0d62c1-5bb3-43e9-9b8f-8f60050bdfca.jpg",
    btnText: "Shop Assemble & Bake",
  },
];

function Card({
  meal,
  index,
  hoveredCard,
  handler,
}: {
  meal: (typeof mealTypes)[0];
  index: number;
  hoveredCard: number | null;
  handler: (index: number | null) => void;
}) {
  const { header, text, img, btnText } = meal;
  const hideText = hoveredCard !== index;
  return (
    <div
      onMouseLeave={() => handler(null)}
      onMouseEnter={() => handler(index)}
      className={styles.card}
    >
      <div className={styles.img_wrapper}>
        <img src={img} alt={header + " img"} />
      </div>
      <h2 className={styles.card_header}>{header}</h2>
      <h2
        className={`${styles.card_text} ${hoveredCard === null ? "" : hideText ? styles.hide_card_text : ""}`}
      >
        {text}
      </h2>
      <button className={styles.button}>{btnText}</button>
    </div>
  );
}

export default function MealTypes() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const hoverHandler = (index: number | null) => {
    setHoveredCard(index);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header_label}>NEW ASSORTMENT</h3>
      <h1 className={styles.header}>
        More easy ways to get dinner on the table
      </h1>
      <Link type="classic" to="/menu">
        Browse the full menu
      </Link>
      <div className={styles.cards_container}>
        {mealTypes.map((meal, index) => (
          <Card
            meal={meal}
            index={index}
            hoveredCard={hoveredCard}
            handler={hoverHandler}
          />
        ))}
      </div>
    </div>
  );
}
