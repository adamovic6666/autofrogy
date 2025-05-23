import styles from "./ProductRange.module.css";
import { Product } from "@/app/_types";
import CustomSwiper from "../ui/CustomSwiper";

const ProductRange = ({ allProducts }: { allProducts: Product[] }) => {
  return (
    <div className={`${styles.productRange} container-small`}>
      <h2>PROIZVODNI ASORTIMAN</h2>
      <p>
        Naši plastični auto delovi izrađeni su prema najvišim industrijskim
        standardima, sa fokusom na preciznost, izdržljivost i pouzdanost.
      </p>
      <CustomSwiper products={allProducts} />
    </div>
  );
};

export default ProductRange;
