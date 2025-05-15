import Contact from "@/app/_components/contact/Contact";
import ContactHero from "@/app/_components/hero/ContactHero";
import Wellcome from "@/app/_components/wellcome/Wellcome";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Auto Frogy | O nama",
  description:
    "Auto Frogy - preko 20 godina proizvodnje plastičnih auto delova u Srbiji. Lider u prodaji auto kopči u Srbiji i regionu.",
};
const page = () => {
  return (
    <>
      <ContactHero />
      <Wellcome />
      <Contact />
    </>
  );
};

export default page;
