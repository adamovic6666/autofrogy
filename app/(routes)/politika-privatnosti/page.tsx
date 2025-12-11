import PrivacyPolicy from "@/app/_components/privacy-policy/PrivacyPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Frogy | Politika privatnosti",
  description:
    "Politika privatnosti Auto Frogy - saznajte kako prikupljamo, koristimo i štitimo vaše lične podatke.",
  alternates: {
    canonical: "/politika-privatnosti",
  },
};

const page = () => {
  return <PrivacyPolicy />;
};

export default page;
