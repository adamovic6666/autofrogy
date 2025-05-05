import Image from "next/image";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          <Image src={"/images/logo.webp"} alt="logo" layout="fill" />
        </div>
        <nav>
          <ul>
            <li>početna</li>
            <li>o nama</li>
            <li>proizvodi</li>
            <li>katalog</li>
            <li>kontakt</li>
          </ul>
        </nav>
        <div className={styles.search}>
          <input type="text" placeholder="Pretraži..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
