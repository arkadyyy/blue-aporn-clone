import React from "react";
import { useNavigate } from "@tanstack/react-router";
import styles from "./styles.module.css";
import { Text } from "@/components";

type LinkProps = {
  to: string;
  type?: "regular" | "classic";
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ to, type = "regular", children }) => {
  const navigate = useNavigate();

  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        navigate({ to });
      }}
      className={`${styles.link} ${styles[type]}`}
    >
      <Text>{children}</Text>
    </a>
  );
};
export default Link;
