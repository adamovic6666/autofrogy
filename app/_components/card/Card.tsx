import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ image, title }: { image: string; title: string }) => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image src={image} alt={title} fill />
      </div>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default Card;
