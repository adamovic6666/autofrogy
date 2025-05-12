import Contact from "@/app/_components/contact/Contact";
import ContactForm from "@/app/_components/forms/ContactForm";
import ContactHero from "@/app/_components/hero/ContactHero";

const page = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <Contact />
    </>
  );
};

export default page;
