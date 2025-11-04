import type React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "@tanstack/react-router";
import { router } from "@/main";

export type AppRoutePath = keyof typeof router.routesByPath;

type ButtonProps = {
  children: React.ReactNode;
  appearnceType?: "primary" | "secondary";
  to?: AppRoutePath;
  onClick?: () => void;
  hoverEffect?: boolean;
  round?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  children,
  appearnceType = "primary",
  to,
  onClick,
  hoverEffect = true,
  round = false,
  ...rest
}: ButtonProps) => {
  const navigate = useNavigate();
  const btnStyles = `${styles.button} ${styles[appearnceType]}`;

  const handler = () => {
    if (to) navigate({ to });
    if (!to) onClick!();
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
