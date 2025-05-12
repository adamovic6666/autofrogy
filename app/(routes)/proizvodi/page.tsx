import Contact from "@/app/_components/contact/Contact";
import Hero from "@/app/_components/hero/Hero";
import Products from "@/app/_components/products/Products";

const page = () => {
  return (
    <>
      <Hero
        maxWidth="40rem"
        title="najveća ponuda
auto kopči u srbiji"
      />
      <Products />
      <Contact />
    </>
  );
};

export default page;
