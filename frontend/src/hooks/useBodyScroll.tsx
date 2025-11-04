import { useEffect } from "react";
import { useModalStore } from "@/store/useModalStore";

export default function useBodyScroll() {
  const { isOpen, close } = useModalStore();

  useEffect(() => {
    if (isOpen) {
      // prevents background scroll
      document.body.style.overflow = "hidden";

      // esc press
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          close();
        }
      };
      document.addEventListener("keydown", handleEsc);

      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEsc);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
}
