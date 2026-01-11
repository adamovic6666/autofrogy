import Contact from "@/app/_components/contact/Contact";
import ContactHero from "@/app/_components/hero/ContactHero";
import Wellcome from "@/app/_components/wellcome/Wellcome";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "O nama | Auto Frogy",
  description:
    "Sa preko 20 godina iskustva, Auto Frogy je lider u proizvodnji i distribuciji auto kopči i auto žabica u Srbiji i regionu, kao i ostalih delova i proizvoda od plastike za auto industriju.",
  alternates: {
    canonical: "/o-nama",
  },
};
const page = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/v1/list-products?data=all&cc=W4E)C9($8n=n*S(OBJMUR_hQ0.$t6P/xOx4a3v/|D@>U3LU8a,`
  );
  const data = await res.json();

  return (
    <>
      <ContactHero />
      <Wellcome allProducts={data ?? []} />
      <Contact />
    </>
  );
};

export default page;
