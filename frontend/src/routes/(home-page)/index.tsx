import { createFileRoute } from "@tanstack/react-router";
import styles from "./index.module.css";
import {
  BrowseMenuCTA,
  Faq,
  MealTypes,
  MealTypesExamples,
  Reviews,
  Video,
} from "@/components";

export const Route = createFileRoute("/(home-page)/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* hero */}
      <div className={styles.hero_container}>
        <div className={styles.hero_header}>
          <h1>
            Meet the <span>new</span> Blue Apron
          </h1>
          <button className={styles.button}>Shop now</button>
        </div>
        <Video />
      </div>
      {/* FAQ */}
      <Faq />
      {/* meal types */}
      <MealTypes />
      {/* reviews */}
      <Reviews />

      {/* meals */}
      <MealTypesExamples />
      {/* blueapron+ big banner  */}
      <div></div>
      {/* another banner */}
      <div></div>
    </div>
  );
}
