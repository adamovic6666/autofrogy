"use client";

import Link from "next/link";
import Card from "../card/Card";
import styles from "./Products.module.css";
import { categories } from "@/app/utils/categories";
import { usePathname } from "next/navigation";

const Products = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const products = isMainPage ? categories.slice(0, 6) : categories;

  return (
    <section className={styles.products}>
      <div className="container-small">
        <h2>proizvodni asortiman</h2>
        <p className={styles.description}>
          Sa više od 20 godina iskustva u proizvodnji, izgradili smo reputaciju
          pouzdanog proizvođača visokokvalitetnih plastičnih auto delova koji
          odgovaraju najvišim standardima savremenih vozila.
        </p>
        <div className={styles.grid}>
          {products.map(({ title, image }) => (
            <Card key={title} title={title} image={image} />
          ))}
        </div>
        {isMainPage && (
          <Link href="/proizvodi" className="link-red">
            Kompletna ponuda
          </Link>
        )}
      </div>
    </section>
  );
};

export default Products;
