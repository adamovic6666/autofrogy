"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import Facebook from "@/app/_svg/Facebook";
import YouTube from "@/app/_svg/YouTube";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const handleOpenSearch = () => {
    setSearchIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (menuIsOpen || searchIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuIsOpen, searchIsOpen]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.burger} onClick={handleOpenMenu} />
        {!searchIsOpen && (
          <div className={styles.logo}>
            <Image src={"/images/logo.webp"} alt="logo" fill />
          </div>
        )}
        <nav className={`${styles.nav} ${menuIsOpen ? styles.open : ""}`}>
          <ul>
            <li>početna</li>
            <li>o nama</li>
            <li>proizvodi</li>
            <li>katalog</li>
            <li>kontakt</li>
          </ul>

          <div className={styles.socials}>
            <Facebook fill="#000" />
            <YouTube fill="#000" />
          </div>

          <div className={styles.bgImage}></div>
        </nav>
        <div className={styles.search}>
          <input type="text" placeholder="Pretraži..." />
        </div>
        {!searchIsOpen && (
          <div className={styles.mobileSearch} onClick={handleOpenSearch} />
        )}{" "}
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
