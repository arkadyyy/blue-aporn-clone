import styles from "./styles.module.css";
import { Button, Header } from "@/components";
import React, { useEffect } from "react";

export default function VideoHeader({
  headerRef,
  heroRef, // renamed from containerRef
  isIntersecting,
}: {
  headerRef: React.Ref<HTMLDivElement>;
  heroRef: React.Ref<HTMLDivElement>; // parent Hero ref
  isIntersecting: boolean;
}) {
  useEffect(() => {
    const handleScroll = () => {
      const el = (headerRef as React.MutableRefObject<HTMLDivElement | null>)
        .current;
      const hero = (heroRef as React.MutableRefObject<HTMLDivElement | null>)
        .current;

      if (!el || !hero) return;

      const scrollY = window.scrollY;
      const elHeight = el.offsetHeight;
      const heroRect = hero.getBoundingClientRect();
      const heroTop = scrollY + heroRect.top;
      const heroBottom = heroTop + hero.offsetHeight;

      const maxTop = heroBottom - elHeight;

      el.style.top = `${Math.min(scrollY * 1.2, maxTop - 50)}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef, heroRef]);

  return (
    <div
      ref={headerRef}
      className={styles.container}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        // backgroundColor: isIntersecting ? "green" : "red",
        transition: "all 0.05s ease-out",
      }}
    >
      <Header style={{ color: isIntersecting ? "white" : "black" }} size="lg">
        Meet the <span>new</span> Blue Apron
      </Header>

      <Button to="/menu">Shop now</Button>
    </div>
  );
}
