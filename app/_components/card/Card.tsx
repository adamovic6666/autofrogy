import styles from "./Card.module.css";

const Card = ({ image, title }: { image: string; title: string }) => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>{image}</div>
      <h4 className={styles.title}>{title}</h4>
    </article>
  );
};

export default Card;
