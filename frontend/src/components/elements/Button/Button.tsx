import type React from "react";
import styles from "./styles.module.css";

type ButtonProps = {
  children: React.ReactElement;
  type?: "primary" | "secondary";
};

const Button = ({ children, type = "primary", ...rest }: ButtonProps) => {
  const btnStyles = `${styles.button} ${styles[type]}`;
  return (
    <button className={btnStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
