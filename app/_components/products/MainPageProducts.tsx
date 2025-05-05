import Link from "next/link";
import Card from "../card/Card";
import styles from "./MainPageProducts.module.css";

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
          <Card image="image" title="AUTO KOPČE" />
          <Card image="image" title="KOPČE PODIZAČA STAKLA" />
          <Card image="image" title="FIKSATORI ZA PATOSNICE" />
          <Card image="image" title="UKRASNE KAPICE ZA ŠRAFOVE" />
          <Card image="image" title="Auto delovi" />
          <Card image="image" title="NOSAČI I RAMOVI ZA TABLICE" />
        </div>
        <Link href="/products" className="link-red">
          Kompletna ponuda
        </Link>
      </div>
    </section>
  );
};

export default MainPageProducts;
