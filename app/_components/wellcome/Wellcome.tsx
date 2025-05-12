import ProductRange from "../about-us/ProductRange";
import styles from "./Wellcome.module.css";

const Wellcome = () => {
  return (
    <section className={styles.wellcome}>
      <div className="container-small">
        <h2>DOBRO DOŠLI U AUTO FROGY</h2>
        <p>
          <strong>SZTR UGREN</strong> je osnovan 2002. godine i bavi se
          proizvodnjom delova od plastike za auto- industriju.
        </p>
        <br />
        <p>
          Na samom početku firma se bavila isključivo proizvodnjom auto-kopči,
          ali konstantim ulaganjem u proizvodnju i razvoj novih proizvoda
          razvijen je prepoznatljiv brend <strong>AUTO FROGY</strong>, koji
          danas predstavlja garanciju kvaliteta u industriji. U ponudi, pored
          auto-kopči i žabica, imamo i kopče podizača stakla, univerzalne
          nastavke i reducire, ukrasne kapice za šrafove, čepove za patosnice,
          ramove i nosače za tablice – i još mnogo toga.
        </p>
        <br />
        <p>
          U 2024. godini <strong>AUTO FROGY</strong> je otvorio novi, moderni
          objekat koji integriše naš proizvodni pogon i magacin, kao i
          kancelarije i izložbeni prostor. Pozivamo vas da nas posetite i
          uverite se u kvalitet i inovacije koje nudimo. Čekamo vas u ulici Cara
          Dušana 144 u Inđiji! Vidimo se!
        </p>
        <div className={styles.wellcomeVideo}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XTSWPEi8yx8?si=7sVIFBm-vEuKP5VG"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <ProductRange />
      </div>
    </section>
  );
};

export default Wellcome;
