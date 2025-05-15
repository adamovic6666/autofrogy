import Contact from "@/app/_components/contact/Contact";
import ContactForm from "@/app/_components/forms/ContactForm";
import AboutUsHero from "@/app/_components/hero/AboutUsHero";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Auto Frogy | Kontaktirajte nas",
  description:
    "Kontaktirajte Auto Frogy tim – tu smo da odgovorimo na sva Vaša pitanja.",
};
const page = () => {
  return (
    <>
      <AboutUsHero />
      <ContactForm />
      <Contact />
    </>
  );
};

export default page;
