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
          <Card image="/images/auto-kopce.webp" title="AUTO KOPČE" />
          <Card
            image="/images/kopce-podizaca-stakla.webp"
            title="KOPČE PODIZAČA STAKLA"
          />
          <Card
            image="/images/fiksatori-za-patosnice.webp"
            title="FIKSATORI ZA PATOSNICE"
          />
          <Card
            image="/images/ukrasne-kapice.webp"
            title="UKRASNE KAPICE ZA ŠRAFOVE"
          />
          <Card
            image="/images/reduktori-auto-delova.webp"
            title="Auto delovi"
          />
          <Card
            image="/images/ramovi-za-tablice.webp"
            title="NOSAČI I RAMOVI ZA TABLICE"
          />
        </div>
        <Link href="/products" className="link-red">
          Kompletna ponuda
        </Link>
      </div>
    </section>
  );
};

export default MainPageProducts;
