import styles from "./styles.module.css";
export default function VideoHeader() {
  return (
    <div className={styles.hero_header}>
      <h1>
        Meet the <span>new</span> Blue Apron
      </h1>
      <button>Shop now</button>
    </div>
  );
}
