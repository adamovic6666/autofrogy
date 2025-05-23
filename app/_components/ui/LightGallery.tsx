"use client";
import { useState, useEffect } from "react";
import styles from "./LightGallery.module.css";
import Image from "next/image";

interface LightGalleryProps {
  media: string[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
}

const LightGallery = ({
  media,
  isOpen,
  currentIndex,
  onClose,
}: LightGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onClose, media.length, activeIndex, currentIndex]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.lightgallery}>
      <div className={styles.backdrop} onClick={onClose}></div>

      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close gallery"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={styles.galleryContent}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={goToPrev}
          aria-label="Previous image"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.imageContainer}>
          {media[activeIndex].startsWith("/sites") ? (
            <Image
              className={styles.galleryImage}
              src={process.env.NEXT_PUBLIC_API_URL + media[activeIndex]}
              alt={`Gallery image ${activeIndex + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          ) : (
            <iframe
              src={
                media[activeIndex].includes("youtube.com/watch")
                  ? media[activeIndex].replace(
                      /youtube\.com\/watch\?v=([^&]+)/,
                      "youtube.com/embed/$1"
                    )
                  : media[activeIndex]
              }
              className={styles.galleryVideo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: "16/9",
                border: "none",
                display: "block",
                maxHeight: "80vh",
                background: "#000",
              }}
              title={`Gallery video ${activeIndex + 1}`}
            />
          )}
        </div>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={goToNext}
          aria-label="Next image"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.counter}>
        {activeIndex + 1} / {media.length}
      </div>
    </div>
  );
};

export default LightGallery;
