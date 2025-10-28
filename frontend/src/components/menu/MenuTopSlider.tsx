import {  useEffect, useState } from "react";
import styles from "./styles.module.css";

const slides = [
  { id: 1, img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600", alt: "Slide 1" },
  { id: 2, img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1600", alt: "Slide 2" },
  { id: 3, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600", alt: "Slide 3" },
];

const SLIDE_WIDTH = 80; // % of container
const SIDE_OFFSET = (100 - SLIDE_WIDTH) / 2;

export default function MenuTopSlider() {

const at = (arr: any[], i: number) => arr[(i + arr.length) % arr.length];


const rendered = [
  at(slides, slides.length - 2), 
  at(slides, slides.length - 1), 
  ...slides,
  at(slides, 0),               
  at(slides, 1),                
];

const [index, setIndex] = useState(2); 

  const [isJumping, setIsJumping] = useState(false); 
  const [isAnimating, setIsAnimating] = useState(false);

function handleTransitionEnd() {
  setIsAnimating(false);

  // If we moved to the far left clone area
  if (index === 1) {
    setIsJumping(true);
    requestAnimationFrame(() => {
      setIndex(slides.length + 1); // jump to last real slide
      requestAnimationFrame(() => setIsJumping(false));
    });
  }

  // If we moved to the far right clone area
  else if (index === slides.length + 2) {
    setIsJumping(true);
    requestAnimationFrame(() => {
      setIndex(2); // jump to first real slide
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

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 1000); 

    
    return () => clearInterval(interval);
  }, [isAnimating]);
  return (
    <section className={styles.container}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>‹</button>

      <div
        className={styles.track}
        style={{
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
