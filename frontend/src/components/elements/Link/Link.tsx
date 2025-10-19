import React from "react";
import { useNavigate } from "@tanstack/react-router";
import styles from "./styles.module.css";
import { Text } from "@/components";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string;
  type?: "regular" | "classic";
  onClick?: () => void;
};

const Link: React.FC<LinkProps> = ({
  to,
  type = "regular",
  children,
  onClick,
  ...rest
}) => {
  const navigate = useNavigate();

  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        if (to) navigate({ to });
        if (!to && onClick) onClick();
      }}
      className={`${styles.link} ${styles[type]}`}
      {...rest}
    >
      <Text>{children}</Text>
    </a>
  );
};
export default Link;
