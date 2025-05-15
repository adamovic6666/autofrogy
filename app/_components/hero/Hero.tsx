"use client";
import Image from "next/image";
import styles from "./Hero.module.css";
import { useState } from "react";

const Hero = ({
  title,
  maxWidth,
  rotate,
}: {
  title: string;
  maxWidth: string;
  rotate?: boolean;
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/AutoFrogyKatalog2025.pdf";
    link.download = "AutoFrogyKatalog2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  return (
    <section className={styles.hero}>
      <div className={`${styles.heroImage} ${rotate ? styles.rotate : ""}`}>
        <Image src={"/images/hero.webp"} fill alt="hero-image" />
      </div>
      <div className={`container ${styles.heroContent}`}>
        <h1
          style={{
            maxWidth: maxWidth,
          }}
        >
          {title}
        </h1>
        <button className="link-red" onClick={handleDownloadClick}>
          Preuzmi katalog proizvoda
        </button>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Da li želite da preuzmete katalog?</h3>
            <div className={styles.modalButtons}>
              <button
                className={styles.closeBtn}
                onClick={() => setShowModal(false)}
              >
                Ne
              </button>
              <button className={styles.downloadBtn} onClick={handleDownload}>
                Da
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
