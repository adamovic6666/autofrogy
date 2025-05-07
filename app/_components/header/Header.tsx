"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpen((prev) => !prev);
    document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
  };

  const handleOpenSearch = () => {
    setSearchIsOpen((prev) => !prev);
    document.body.style.overflow = searchIsOpen ? "hidden" : "auto";
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          <Image src={"/images/logo.webp"} alt="logo" fill />
        </div>
        <nav className={`${styles.nav} ${menuIsOpen ? styles.open : ""}`}>
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

        <div className={styles.actions}>
          <div className={styles.mobileSearch} onClick={handleOpenSearch} />
          <div className={styles.burger} onClick={handleOpenMenu} />
        </div>
      </div>

      {/* Mobile Search Overlay */}
      <div
        className={`${styles.mobileSearchOverlay} ${
          searchIsOpen ? styles.open : ""
        }`}
      >
        <div className={styles.mobileSearchContainer}>
          <div className={styles.mobileSearchClose} onClick={handleOpenSearch}>
            ✕
          </div>
          <div className={styles.mobileSearchInput}>
            <input type="text" placeholder="Pretraži..." />
            {/* <button className={styles.mobileSearchButton}>
              <Image
                src="/images/search-red.svg"
                alt="Search"
                width={24}
                height={24}
              />
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
