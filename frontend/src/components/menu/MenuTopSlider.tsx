import {  useState } from "react";
import styles from "./styles.module.css";

const slides = [
  { id: 1, img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600", alt: "Slide 1" },
  { id: 2, img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1600", alt: "Slide 2" },
  { id: 3, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600", alt: "Slide 3" },
];

const SLIDE_WIDTH = 80; // % of container
const SIDE_OFFSET = (100 - SLIDE_WIDTH) / 2;

export default function MenuTopSlider() {
  const total = slides.length;
  const rendered = [slides[slides.length - 1], ...slides, slides[0]];
  const [index, setIndex] = useState(1);
  const [isJumping, setIsJumping] = useState(false); // disables transition briefly
  const [isAnimating, setIsAnimating] = useState(false);

  function handleTransitionEnd() {
      setIsAnimating(false);             
    if (index === 0) {
      setIsJumping(true);
      requestAnimationFrame(() => {
        setIndex(total); 
        requestAnimationFrame(() => setIsJumping(false));
      });
    }
    else if (index === total + 1) {
      setIsJumping(true);
      requestAnimationFrame(() => {
        setIndex(1); // first real
        requestAnimationFrame(() => setIsJumping(false));
      });
    }
  }


  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((i) => i + 1);
  }
  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((i) => i - 1);
  }
  return (
    <section className={styles.container}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>‹</button>

      <div
        className={styles.track}
        style={{
          // transform: `translateX(calc(-${index} * 80% + 10%))`,
          transform: `translateX(calc(-${index} * ${SLIDE_WIDTH}% + ${SIDE_OFFSET}%))`,
          transition: isJumping ? 'none' : 'transform 0.5s ease',
        }}
        onTransitionEnd={handleTransitionEnd}

      >
        {rendered.map((s, i) => (
          <div key={`${s.id}-${i}`} className={styles.slide}>
            <img src={s.img} alt={s.alt} />
          </div>
        ))}
      </div>

      <button className={`${styles.arrow} ${styles.right}`} onClick={next}>›</button>
    </section>
  );
}
