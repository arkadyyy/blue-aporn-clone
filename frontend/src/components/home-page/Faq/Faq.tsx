import ingredients_svg from "@/assets/svg/ingredients.svg";
import styles from "./styles.module.css";
import { Accordion } from "@/components";
import type { RefObject } from "react";
const faq = [
  {
    header: "No subscription needed",
    text: "Life is complicated, dinner shouldn't be. Now you can order what you want without committing to weekly deliveries.",
  },
  {
    header: "Faster, easier meals",
    text: "With our new pre-made and minimal-prep meals, getting delicious food on the table couldn't be more simple.",
  },
  {
    header: "Same dedication to quality",
    text: "From chef-designed recipes to the freshest of fresh ingredients, we're (still) here to deliver meals you'll be proud to serve.",
  },
];

export default function Faq({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={ref} className={styles.container}>
      <div>
        <h2 className={styles.left_text}>
          Over the years, we've shipped more than 530 million meal kits. Now,
          we're making Blue Apron more convenient than ever.
        </h2>
        <img src={ingredients_svg} alt="ingredients image" />
      </div>
      <div>
        {faq.map((section) => (
          <Accordion data={section} />
        ))}
      </div>
    </div>
  );
}
