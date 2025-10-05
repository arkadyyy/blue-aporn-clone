import styles from "./styles.module.css";
import arrow_right from "@/assets/icons/arrow_right.svg";
import arrow_left from "@/assets/icons/arrow_left.svg";
import standing from "@/assets/svg/standing.svg";
import star from "@/assets/icons/star.svg";
import { useState } from "react";
import BrowseMenuCTA from "../BrowseMenuCTA/BrowseMenuCTA";

const reviews = [
  {
    text: "This is hands down the best meal I have ever had in my life!!!",
    reviewer_name: "Heather J.",
  },
  {
    text: "I got home from work, changed, cooked this meal, we ate it and cleaned up all in under 45 minutes!!!!",
    reviewer_name: "James W.",
  },
  {
    text: "My husband and I had a blast cooking together. It was easy, and there was no waste.",
    reviewer_name: "Laura D.",
  },
  {
    text: "This meal was absolutely delicious and so easy to prepare. We loved it.",
    reviewer_name: "Bernadette C.",
  },
  {
    text: "This was absolutely delicious and simple to make. Love it!!! 10/10!!!",
    reviewer_name: "Lexi M.",
  },
  {
    text: "Easy to make,quite tasty and generous portions. Was large enough for 3 people.",
    reviewer_name: "Carmen O.",
  },
];

function Review({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className={styles.reviews_card_review}>
      <div>
        {new Array(5).fill(null).map((_) => (
          <img src={star} alt="review star" />
        ))}
      </div>
      <h2>{review.text}</h2>
      <p>{review.reviewer_name}</p>
    </div>
  );
}
export default function Reviews() {
  // inside your Reviews component
  const [index, setIndex] = useState(0);

  // total number of slides (3 cards per slide)
  const itemsPerSlide = 3;
  const maxIndex = Math.ceil(reviews.length / itemsPerSlide) - 1;
  const rightBtnDisabled = index === maxIndex;
  const leftBtnDisabled = index === 0;
  // handlers
  const next = () => {
    setIndex((prev) => prev + 1);
  };
  const prev = () => {
    setIndex((prev) => prev - 1);
  };
  return (
    <div
      style={{
        height: "50rem",
      }}
    >
      <div className={styles.reviews_container}>
        <img className={styles.svg_standing} src={standing} />
        <div className={styles.reviews_heading}>
          <div>
            <h4 className={styles.header_label}>Over 50,000 5-star reviews</h4>
            <h2 className={styles.header}>What customers are saying</h2>
          </div>
          <div className={styles.reviews_buttons_container}>
            <button
              disabled={leftBtnDisabled}
              onClick={prev}
              className={styles.review_nav_btn}
            >
              <img src={arrow_left} alt="left arrow" />
            </button>
            <button
              disabled={rightBtnDisabled}
              onClick={next}
              className={styles.review_nav_btn}
            >
              <img src={arrow_right} alt="right arrow" />
            </button>
          </div>
        </div>
        <div className={styles.reviews_slider_wrapper}>
          <div
            className={styles.reviews_cards_container}
            style={{ transform: `translateX(-${index * 51}%)` }}
          >
            {reviews.map((review, i) => (
              <Review key={i} review={review} />
            ))}
          </div>
        </div>
        <BrowseMenuCTA />
      </div>
    </div>
  );
}
