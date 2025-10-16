import { useEffect, useRef, useState, type JSX } from "react";
import videoSrc from "@/assets/video.mp4";
import { useIsMobile } from "@/hooks";

export default function Video({
  videoRef,
  children,
}: {
  videoRef: React.Ref<HTMLDivElement>;
  children: JSX.Element;
}) {
  const isMobile = useIsMobile();

  const widthValue = isMobile ? 16 * 22 : 16 * 96;
  const heightValue = isMobile ? 16 * 40 : 16 * 78;

  const [width, setWidth] = useState(widthValue);
  const [height, setHeight] = useState(heightValue);

  const targetWidth = useRef(width);
  const targetHeight = useRef(height);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      //width
      targetWidth.current = Math.min(
        +widthValue + scrollY * (isMobile ? 0.2 : 1.4),
        isMobile ? 600 : 2000
      );
      //height
      targetHeight.current = Math.min(
        +heightValue + scrollY * (isMobile ? 0.2 : 1.4),
        isMobile ? 600 : 1000
      );
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
      ref={videoRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: "12px",
        overflow: "hidden",
        border: "2px solid black",
        marginTop: "20rem",
        backgroundColor: "green",
      }}
    >
      {children}
      <video
        src={videoSrc}
        loop
        muted
        playsInline
        autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
