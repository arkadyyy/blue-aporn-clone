import { useState } from "react";
import styles from "./styles.module.css";
import plusIcon from "@/assets/icons/plus.svg";
import minusIcon from "@/assets/icons/minus.svg";

function Accordion({ data }: { data: { header: string; text: string } }) {
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
        <h4>{data.header}</h4>
        <span className={`${animate ? styles.spin : ""}`}>
          <img src={expanded ? minusIcon : plusIcon} />
        </span>
      </div>
      <div className={styles.expanded}>{expanded && <p>{data.text}</p>}</div>
    </div>
  );
}
export default Accordion;
