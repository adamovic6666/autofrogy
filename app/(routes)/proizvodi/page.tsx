import Contact from "@/app/_components/contact/Contact";
import Hero from "@/app/_components/hero/Hero";
import Products from "@/app/_components/products/Products";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Auto Frogy | Prodaja auto kopči i žabica",
  description:
    "Najveći izbor auto kopči, kopči podizača stakla, fiksatora za patosnice, nosača za tablice, ramova za tablice i ostale auto opreme. Pronađite sve na jednom mestu!",
};
const page = () => {
  return (
    <>
      <Hero
        maxWidth="40rem"
        rotate={true}
        title="najveća ponuda
auto kopči u srbiji"
      />
      <Products />
      <Contact />
    </>
  );
};

export default page;
