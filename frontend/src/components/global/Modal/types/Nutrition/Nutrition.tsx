import styles from "./styles.module.css";
import nutritionImg from "@/assets/img/nutrition.png";
import closeIcon from "@/assets/icons/close.svg";

import { Text } from "@/components";
import { useModalStore } from "@/store/useModalStore";

export default function Nutrition() {
  const { close } = useModalStore();
  return (
    // TODO - add backdrop
    <div className={styles.container}>
      <div className={styles.close_container} data-meal-modal={"nutrition"}>
        <img
          className={styles.close}
          onClick={close}
          src={closeIcon}
          alt="Close modal"
        />
        <Text weight="medium">NUTRITION</Text>
      </div>
      <img src={nutritionImg} alt="nutriiton facts" />
    </div>
  );
}
