import type React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "@tanstack/react-router";

import { router } from "@/main";

export type AppRoutePath = keyof typeof router.routesByPath;

type ButtonProps = {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  to?: AppRoutePath;
  onClick?: () => void;
  hoverEffect?: boolean;
  round?: boolean;
};

const Button = ({
  children,
  type = "primary",
  to,
  onClick,
  hoverEffect = true,
  round = false,
  ...rest
}: ButtonProps) => {
  const navigate = useNavigate();
  const btnStyles = `${styles.button} ${styles[type]}`;
  const handler = () => {
    if (to) navigate({ to });
    if (!to) onClick;
  };
  return (
    <button
      onClick={handler}
      className={btnStyles}
      data-hover={hoverEffect}
      data-rounded={round}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
