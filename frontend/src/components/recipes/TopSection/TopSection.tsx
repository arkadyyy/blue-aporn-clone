import styles from "./styles.module.css";
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Nutrition from "./components/Nutrition/Nutrition";
import TryApronPlus from "@/components/global/TryApronPlus/TryApronPlus";

import { useDraftOrder } from "../draftOrderContext";
export default function TopSection() {
  // const { draftOrder, setDraftOrder } = useDraftOrder();

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          src="https://rfprodv2-ba-image.azureedge.net/image/943x629/blueapron/f82f0a46-62a8-4eab-80d4-97dcff6d3c0a.jpg"
          alt="recipe image"
        />
      </div>
      <div className={styles.details}>
        <div>
          <Header />
          <Options />
          <Nutrition />
          <TryApronPlus />
        </div>
      </div>
    </div>
  );
}
