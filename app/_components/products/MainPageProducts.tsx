import Link from "next/link";
import Card from "../card/Card";
import styles from "./MainPageProducts.module.css";
import { categories } from "@/app/utils/categories";

const MainPageProducts = () => {
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
          {categories.slice(0, 6).map(({ title, image }) => (
            <Card key={title} title={title} image={image} />
          ))}
        </div>
        <Link href="/products" className="link-red">
          Kompletna ponuda
        </Link>
      </div>
    </section>
  );
};

export default MainPageProducts;
