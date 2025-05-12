import styles from "./Hero.module.css";

const Hero = ({ title, maxWidth }: { title: string; maxWidth: string }) => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1
          style={{
            maxWidth: maxWidth,
          }}
        >
          {title}
        </h1>
        <a
          className="link-red"
          href="/pdf/katalog.pdf"
          target="_blank"
          download={true}
        >
          Preuzmi katalog proizvoda
        </a>
      </div>
    </section>
  );
};

export default Hero;
