import Link from "next/link";
import styles from "./AboutUs.module.css";
import Image from "next/image";
const AboutUs = () => {
  return (
    <section className={styles.about}>
      <div className="container-small">
        <h2>O NAMA</h2>
        <p>
          <strong>SZTR UGREN</strong> je osnovan 2002. godine i bavi se
          proizvodnjom delova od plastike za auto- industriju. Na samom početku
          firma se bavila isključivo proizvodnjom auto-kopči, ali konstantim
          ulaganjem u proizvodnju i razvoj novih proizvoda razvijen je
          prepoznatljiv brend <strong>AUTO FROGY</strong>, koji danas
          predstavlja garanciju kvaliteta u industriji. U ponudi, pored auto-
          kopči i žabica, imamo i kopče podizača stakla, univerzalne nastavke i
          reducire, ukrasne kapice za šrafove, čepove za patosnice, ramove i
          nosače za tablice – i još mnogo toga.
        </p>
        <div className={styles.image}>
          <Image src={"/images/about-us.webp"} alt="About Us" layout="fill" />
        </div>
        <Link href="/" className="link-red">
          Saznaj više
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
