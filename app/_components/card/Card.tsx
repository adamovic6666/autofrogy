import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ image, title }: { image: string; title: string }) => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image src={image} alt={title} fill />
      </div>
      <div className={styles.title}>
        {title.includes("`") ? (
          <h4>
            <span>{title.split("`")[0]}</span>
            <br />
            <span>{title.split("`").slice(1).join(" ")}</span>
          </h4>
        ) : (
          <h4>{title}</h4>
        )}
      </div>
    </article>
  );
};

export default Card;
