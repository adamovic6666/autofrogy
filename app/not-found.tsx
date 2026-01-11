import Link from "next/link";
import styles from "./not-found.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stranica nije pronađena - 404 | Auto Frogy",
  description: "Tražena stranica ne postoji ili je premeštena.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>Stranica nije pronađena</h2>
          <p className={styles.description}>
            Žao nam je, stranica koju tražite ne postoji ili je premeštena.
          </p>
          <div className={styles.actions}>
            <Link href="/" className="link-red">
              Nazad na početnu
            </Link>
            <Link href="/proizvodi" className={styles.productsLink}>
              Pogledaj proizvode
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
