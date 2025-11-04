import React from "react";
import { useNavigate } from "@tanstack/react-router";
import styles from "./styles.module.css";
import { Text } from "@/components";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string;
  type?: "regular" | "classic";
  onClick?: () => void;
  params?: Record<string, string>;
  search?: Record<string, string | number | undefined>;
};

const Link: React.FC<LinkProps> = ({
  to,
  type = "regular",
  children,
  onClick,
  params,
  search,
  ...rest
}) => {
  const navigate = useNavigate();

  return (
    <Text
      onClick={(e) => {
        e.preventDefault();
        console.log("", params);
        console.log("params : ", params);
        if (to) {
          navigate({
            to,
            params,
            search,
          });
        }

        if (!to && onClick) onClick();
      }}
      className={`${styles.link} ${styles[type]}`}
      {...rest}
      as="a"
      href={to}
    >
      {children}
    </Text>
  );
};

export default Link;
