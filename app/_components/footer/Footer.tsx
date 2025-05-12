import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div>© {new Date().getFullYear()} Ugren SZTR - Auto Frogy</div>
        <Link href="/politika-privatnosti">Politika privatnosti</Link>
      </div>
    </footer>
  );
};

export default Footer;
