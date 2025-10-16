import { createFileRoute } from "@tanstack/react-router";
import {
  ApronPlusIntroduce,
  Faq,
  MealTypes,
  MealTypesExamples,
  Reviews,
  ShopNewApron,
  Hero,
} from "@/components";
import { useEffect, useRef } from "react";
import { useFaqScrollStore } from "@/store/useFaqScrollStore";
export const Route = createFileRoute("/(home-page)/")({
  component: Index,
});

function Index() {
  const faqRef = useRef<HTMLDivElement>(null);
  const setFaqAtTop = useFaqScrollStore((state) => state.setFaqAtTop);

  useEffect(() => {
    if (!faqRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.boundingClientRect.y < 0) {
          setFaqAtTop(entry.isIntersecting);
        } else {
          if (entry.boundingClientRect.y > 0) setFaqAtTop(false);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -100% 0px",
      }
    );

    observer.observe(faqRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Hero />
      <Faq ref={faqRef} />
      <MealTypes />
      <Reviews />
      <MealTypesExamples />
      <ApronPlusIntroduce />
      <ShopNewApron />
    </div>
  );
}
