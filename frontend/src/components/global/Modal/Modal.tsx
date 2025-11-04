import styles from "./styles.module.css";
import closeIcon from "@/assets/icons/close.svg";
import { useModalStore } from "@/store/useModalStore";
import LoginEmail from "./types/LoginEmail/LoginEmail";
import LoginPhone from "./types/LoginPhone/LoginPhone";
import Signup from "./types/Signup/Signup";
import Meal from "./types/Meal/Meal";
import Nutrition from "./types/Nutrition/Nutrition";
import { Text } from "@/components";

export default function Modal() {
  const { isOpen, close, modals } = useModalStore();
  const type = modals[modals.length - 1];

  if (!isOpen || !type) return null;

  return (
    <div
      onClick={close}
      data-open={isOpen}
      data-meal-modal={type === "meal"}
      className={styles.backdrop}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        data-open={isOpen}
        className={styles.modal}
      >
        <div
          className={styles.close_container}
          data-meal-modal={type === "meal"}
        >
          <img
            className={styles.close}
            onClick={close}
            src={closeIcon}
            alt="Close modal"
          />
        </div>

        {type === "login-email" && <LoginEmail />}
        {type === "login-phone" && <LoginPhone />}
        {type === "signup" && <Signup />}
        {(type === "meal" || type === "nutrition") && <Meal />}
        {type === "nutrition" && <Nutrition />}
      </div>
    </div>
  );
}
