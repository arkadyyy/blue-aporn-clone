import { useEffect, useState } from "react";

/**
 * Detects whether the current viewport width is considered "mobile".
 * @param breakpoint - the max width (in px) for mobile view. Default: 768.
 */
export default function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
