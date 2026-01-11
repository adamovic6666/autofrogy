import Contact from "@/app/_components/contact/Contact";
import ContactForm from "@/app/_components/forms/ContactForm";
import AboutUsHero from "@/app/_components/hero/AboutUsHero";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kontaktirajte nas | Auto Frogy",
  description:
    "Imate pitanja o auto kopčama i auto žabicama? Kontaktirajte naš tim i saznajte više o našim proizvodima i uslugama",
  alternates: {
    canonical: "/kontakt",
  },
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
