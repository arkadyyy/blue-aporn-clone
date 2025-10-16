import styles from "./styles.module.css";
import { Link } from "@tanstack/react-router";
import Qr from "@/assets/icons/Qr.svg";

const COLS = [
  {
    title: "BLUE APRON",
    links: [
      { label: "Menu", to: "/Menu" },
      { label: "Blue Apron+", to: "/" },
      { label: "Autoship & Save", to: "/" },
      { label: "About us", to: "/" },
      { label: "Gift Cards", to: "/" },
      { label: "Recipes", to: "/" },
      { label: "Blog", to: "/" },
      { label: "Careers", to: "/" },
      { label: "Affiliates", to: "/" },
    ],
  },
  {
    title: "SUPPORT & SERVICES",
    links: [
      { label: "Help Center & FAQ", to: "/" },
      { label: "Supply Chains Act", to: "/" },
      { label: "Terms & Conditions", to: "/" },
      { label: "Privacy Policy", to: "/" },
      { label: "Do Not Sell or Share My Info", to: "/" },
      { label: "Notice to California Residents", to: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.frame}>
        <h3 className={styles.brand}>Blue Apron</h3>

        <div className={styles.grid}>
          <aside className={styles.appCard}>
            <div className={styles.appCopy}>
              <div className={styles.appTitle}>Get the Blue Apron app</div>
              <p className={styles.appDesc}>
                Receive notifications, live updates, <br />
                and easily track your order
              </p>
            </div>

            <div className={styles.qrWrap}>
              <img className={styles.qr} src={Qr} alt="Download app QR" />
            </div>
          </aside>

          {COLS.map((col) => (
            <nav key={col.title} className={styles.col}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul className={styles.list}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link className={styles.link} to={l.to}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="Facebook">
              FB
            </a>
            <a href="#" aria-label="TikTok">
              TT
            </a>
          </div>
          <div className={styles.copy}>©Blue Apron 2025</div>
        </div>
      </div>
    </footer>
  );
}
