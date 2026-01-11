import "./globals.css";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";
import ogImage from "../public/images/og.png";
import GoogleAnalytics from "./_components/google-analytics/GoogleAnalytics";
import StructuredData from "./_components/structured-data/StructuredData";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "700", "800"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.autofrogy.com/"),
  applicationName: "Auto Frogy",
  title: "Najveći izbor auto kopči i auto žabica u Srbiji | Auto Frogy",
  description:
    "Najveći izbor auto kopči i žabica za sve tipove automobila, kao i kopči podizača stakla, fiksatora za patosnice, nosača i ramova za tablice, alata i ostale auto opreme.",
  keywords: [
    "Auto kopče",
    "Auto žabice",
    "Fiksatori za patosnice",
    "Kopče za patosnice",
    "Žabice za patosnice",
    "Kopče podizača stakla",
    "Ukrasne kapice za šrafove",
    "Nosači za tablice",
    "Skriveni nosači za tablice",
    "Ramovi za tablice",
    "T-račve",
    "Reduciri creva",
    "Nastavci creva",
    "Alati za auto limare",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Proizvodnja i prodaja plastičnih auto delova | Auto Frogy",
    description:
      "Preko 20 godina iskustva u proizvodnji plastičnih auto delova. Najveći izbor auto kopči i žabica, kopči podizača stakla, fiksatora za patosnice, nosača i ramova za tablice, alata i ostale opreme.",
    url: "https://www.autofrogy.com/",
    siteName: "Auto Frogy",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "Auto Frogy",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <meta
          name="google-site-verification"
          content="Szvnp6mCIlU4IrY9yJpR5cfJMOpgXF6i4tzx2blgg-Y"
        />
        <StructuredData />
      </head>
      <body className={openSans.variable}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
