import AboutUs from "./_components/about-us/AboutUs";
import Contact from "./_components/contact/Contact";
import Hero from "./_components/hero/Hero";
import MainPageProducts from "./_components/products/MainPageProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <MainPageProducts />
      <AboutUs />
      <Contact />
    </>
  );
}
