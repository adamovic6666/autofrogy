"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ProductDetails.module.css";
import LightGallery from "@/app/_components/ui/LightGallery";
import Image from "next/image";
import { ProductDetailsProps } from "@/app/_types";

const ProductDetails = ({ productDetails }: ProductDetailsProps) => {
  const mainImage = process.env.NEXT_PUBLIC_API_URL + productDetails.main_photo;

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const leftSide = useRef<HTMLDivElement>(null);
  const rightSide = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState<number | null>(
    null
  );

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        if (descriptionRef.current && rightSide.current && leftSide.current) {
          // Get the heights of left and right sides
          const leftSideHeight = leftSide.current.clientHeight;
          const rightSideWithoutDescription =
            rightSide.current.clientHeight -
            descriptionRef.current.scrollHeight;
          const deduction = !!productDetails.photo_gallery.thumb ? -6 : 0;
          // Calculate available space for description
          const availableHeight =
            leftSideHeight - (rightSideWithoutDescription - deduction);

          // Set max height for description (minimum 100px to ensure some content is visible)
          const newHeight = Math.max(availableHeight, 50);
          setDescriptionHeight(newHeight);
        }
      } else {
        setDescriptionHeight(null);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once to set the initial height

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [descriptionRef, rightSide, leftSide]);

  return (
    <section className={styles.productDetails}>
      <div className="container-small">
        <div className={styles.images} ref={leftSide}>
          <div className={styles.mainImage}>
            <Image src={mainImage} alt="Product main view" fill />
          </div>
          <div className={styles.additionalImages}>
            {productDetails?.photo_gallery?.thumb
              ?.slice(0, 3)
              .map((media, index) => {
                const origMedia = productDetails.photo_gallery.orig[index];
                const isYoutube =
                  typeof origMedia === "string" &&
                  origMedia.includes("youtube.com");

                return (
                  <div
                    key={index}
                    role="button"
                    tabIndex={isYoutube ? -1 : 0}
                    aria-label={`View product media ${index + 2}`}
                    className={styles.thumb}
                    onClick={() => openGallery(index)}
                    style={isYoutube ? { opacity: 0.7 } : {}}
                  >
                    {isYoutube ? (
                      <div className={styles.videoThumb}>
                        {/* Poster image for YouTube video */}
                        <Image
                          src={`https://img.youtube.com/vi/${
                            origMedia.split("v=")[1]?.split("&")[0]
                          }/hqdefault.jpg`}
                          alt={`YouTube video thumbnail ${index + 2}`}
                          fill
                          sizes="100vw"
                        />
                      </div>
                    ) : (
                      <Image
                        src={process.env.NEXT_PUBLIC_API_URL + media}
                        alt={`Product view ${index + 2}`}
                        fill
                      />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.details} ref={rightSide}>
          <h1>{productDetails.title}</h1>
          <p className={styles.productCode}>
            <span className="link-red">{productDetails.product_code}</span>Šifra
            proizvoda
          </p>
          {productDetails.description && (
            <div className={styles.description} ref={descriptionRef}>
              <p className={styles.bold}>Opis:</p>
              <span
                style={{
                  maxHeight: `${descriptionHeight}px`,
                  overflowY: "auto",
                }}
                dangerouslySetInnerHTML={{ __html: productDetails.description }}
              />
            </div>
          )}
          {productDetails.tip_vozila && (
            <div>
              <p className={styles.bold}>Model i marka vozila:</p>
              <p>{productDetails.tip_vozila}</p>
            </div>
          )}
          {productDetails.fabric_number && (
            <div>
              <p className={styles.bold}>Fabrički broj:</p>
              <p>{productDetails.fabric_number}</p>
            </div>
          )}
        </div>
      </div>

      <LightGallery
        media={productDetails.photo_gallery.orig}
        isOpen={isGalleryOpen}
        currentIndex={currentImageIndex}
        onClose={closeGallery}
      />
    </section>
  );
};

export default ProductDetails;
