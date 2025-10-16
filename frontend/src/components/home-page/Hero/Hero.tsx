import styles from "./styles.module.css";
import VideoHeader from "../VideoHeader/VideoHeader";
import Video from "../Video/Video";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const heroRef = useRef(null);
  const headerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    let observer: any;
    if (videoRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          console.log("asdasd");
          setIsIntersecting(entry.isIntersecting);
        },
        {
          root: null,
          // root: videoRef.current, // viewport
          rootMargin: "-300px", // expand the "visible" range
          threshold: 0.15, // fire as soon as it enters/exits
        }
      );
      if (headerRef.current) {
        observer.observe(headerRef.current);
      }
    }
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <div ref={heroRef} className={styles.hero_container}>
      <Video videoRef={videoRef}>
        <VideoHeader
          isIntersecting={isIntersecting}
          headerRef={headerRef}
          heroRef={heroRef}
        />
      </Video>
    </div>
  );
}
