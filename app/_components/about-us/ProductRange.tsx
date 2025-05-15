"use client";
import { categories } from "@/app/utils/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ProductRange.module.css";
import Card from "../card/Card";

const ProductRange = () => {
  return (
    <div className={`${styles.productRange} container-small`}>
      <h2>PROIZVODNI ASORTIMAN</h2>
      <p>
        Sa više od 20 godina iskustva u proizvodnji, izgradili smo reputaciju
        pouzdanog proizvođača visokokvalitetnih plastičnih auto delova koji
        odgovaraju najvišim standardima savremenih vozila.
      </p>
      <div className={styles.sliderWrapper}>
        <Swiper
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          autoHeight={true}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 24,
            },
          }}
        >
          {categories.map(({ title, image }) => (
            <SwiperSlide key={title}>
              <Card title={title} image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.navigationButtons}>
          <button className={styles.arrowLeft}>
            <svg
              className="arrow-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#3c3c3c"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className={styles.arrowRight}>
            <svg
              className="arrow-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="#3c3c3c"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductRange;
