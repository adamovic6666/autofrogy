import Link from "next/link";
import styles from "./Contact.module.css";
import Facebook from "@/app/_svg/Facebook";
import YouTube from "@/app/_svg/YouTube";
const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="container-small">
        <div className={styles.contactInfo}>
          <div>
            <h5>SZTR UGREN</h5>
            <span>Cara Dušana 144,</span>
            <span>22320 Inđija, Srbija</span>
            <span>
              T: <a href="tel:+38122551121">+381.22.551.121</a>
            </span>
            <span>
              E: <a href="mailto:office@autofrogy.com">office@autofrogy.com</a>
            </span>
          </div>
          <div>
            <h5>Pratite nas:</h5>
            <a
              className={styles.social}
              href="https://www.facebook.com/autofrogy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook /> Facebook
            </a>
            <a
              className={styles.social}
              href="https://www.youtube.com/c/autofrogy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube /> YouTube
            </a>
            <Link href="/">Podaci o preduzeću</Link>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.3440910754903!2d20.065121851589954!3d45.03823886772982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475af8c0c82bf4b3%3A0x201d26bcf95ca299!2sAuto%20Frogy%20-%20SZTR%20Ugren!5e0!3m2!1ssr!2srs!4v1746655270627!5m2!1ssr!2srs"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
