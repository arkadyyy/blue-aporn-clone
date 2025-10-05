import { useEffect, useRef, useState } from "react";
import videoSrc from "@/assets/video.mp4";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // separate states for width and height
  const [width, setWidth] = useState(16 * 90);
  const [height, setHeight] = useState(16 * 58);

  // refs to store the target values for smooth animation
  const targetWidth = useRef(width);
  const targetHeight = useRef(height);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      targetWidth.current = Math.min(16 * 90 + scrollY * 1.4, 2000);
      targetHeight.current = Math.min(16 * 58 + scrollY * 1.4, 800);
    };

    window.addEventListener("scroll", handleScroll);

    // smooth animation loop
    let animationFrame: number;
    const animate = () => {
      setWidth((prev) => prev + (targetWidth.current - prev) * 0.3); // 0.1 = easing factor
      setHeight((prev) => prev + (targetHeight.current - prev) * 0.3);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: "16px",
        overflow: "hidden",
        display: "inline-block",
        border: "2px solid black",
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        playsInline
        autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
