import AboutUs from "./_components/about-us/AboutUs";
import Contact from "./_components/contact/Contact";
import Hero from "./_components/hero/Hero";
import Products from "./_components/products/Products";

export default function Home() {
  return (
    <>
      <Hero title="proizvodnja plastičnih auto delova" maxWidth="520px" />
      <Products />
      <AboutUs />
      <Contact />
    </>
  );
}
