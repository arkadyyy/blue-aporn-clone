import ingredients_svg from "@/assets/svg/ingredients.svg";
import styles from "./styles.module.css";
import { useState } from "react";
import plusIcon from "@/assets/icons/plus.svg";
import minusIcon from "@/assets/icons/minus.svg";
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

function Section({ section }: { section: (typeof faq)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggle = () => {
    setExpanded((prev) => !prev);
    setAnimate(true);

    // remove animation class after it runs
    setTimeout(() => setAnimate(false), 600);
  };
  return (
    <div onClick={toggle} className={styles.section_container}>
      <div className={styles.section_header}>
        <h4>{section.header}</h4>
        <span className={`${animate ? styles.spin : ""}`}>
          <img src={expanded ? minusIcon : plusIcon} />
        </span>
      </div>
      <div className={styles.expanded}>{expanded && <p>{section.text}</p>}</div>
    </div>
  );
}
export default function Faq() {
  return (
    <div className={styles.faq_container}>
      <div>
        <h2>
          Over the years, we've shipped more than 530 million meal kits. Now,
          we're making Blue Apron more convenient than ever.
        </h2>
        <img src={ingredients_svg} alt="ingredients image" />
      </div>
      <div>
        {faq.map((section) => (
          <Section section={section} />
        ))}
      </div>
    </div>
  );
}
