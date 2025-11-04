import styles from "./styles.module.css";
import apronPlusIcon from "@/assets/img/apron.png";
import { Text, Link } from "@/components";
export default function TryApronPlus() {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img
          src={apronPlusIcon}
          alt="aprn plus"
          style={{ width: "2rem", height: "2rem" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Text size="sm">
            Blue Apron+ Members get free shipping on this order.
          </Text>
          <Link>Learn more</Link>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex", gap: ".4rem" }}>
        <input type="checkbox" name="" id="" />
        <Text size="sm">Try Blue Apron+ free for 30-days</Text>
      </div>
    </div>
  );
}
