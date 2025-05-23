import AboutUs from "./_components/about-us/AboutUs";
import Contact from "./_components/contact/Contact";
import Hero from "./_components/hero/Hero";
import Products from "./_components/products/Products";

export default async function Home() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/v1/list-products?data=all&cc=W4E)C9($8n=n*S(OBJMUR_hQ0.$t6P/xOx4a3v/|D@>U3LU8a,`
  );
  const data = await res.json();
  return (
    <>
      <Hero title="proizvodnja plastičnih auto delova" maxWidth="520px" />
      <Products allProducts={data ?? []} />
      <AboutUs />
      <Contact />
    </>
  );
}
