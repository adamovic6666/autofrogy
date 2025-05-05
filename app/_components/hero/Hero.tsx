import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>proizvodnja plastičnih auto delova</h1>
        <a className="link-red" href="">
          Preuzmi katalog proizvoda
        </a>
      </div>
    </section>
  );
};

export default Hero;
