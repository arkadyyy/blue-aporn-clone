import styles from "./styles.module.css";
import closeIcon from "@/assets/icons/close.svg";
import { useModalStore } from "@/store/useModalStore";
import LoginEmail from "./types/LoginEmail/LoginEmail";

export default function Modal() {
  const { isOpen, close } = useModalStore();
  return (
    <div
      onClick={() => close()}
      data-open={isOpen}
      className={styles.container}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        data-open={isOpen}
        className={styles.modal}
      >
        <div
          style={{
            width: "100%",
            height: "52px",

            position: "relative",
          }}
        >
          <img
            className={styles.close}
            onClick={() => close()}
            src={closeIcon}
          />
        </div>

        <LoginEmail />
      </div>
    </div>
  );
}
