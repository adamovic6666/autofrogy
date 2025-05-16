import "./globals.css";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";
import ogImage from "../public/images/og.png";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "700", "800"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://autofrogy.vercel.app/"),
  applicationName: "Auto Frogy",
  title: "Auto Frogy | Proizvodnja i prodaja plastičnih auto delova",
  description:
    "Preko 20 godina iskustva u proizvodnji plastičnih auto delova. Najveći izbor auto kopči i žabica, kopči podizača stakla, fiksatora za patosnice, nosača i ramova za tablice, alata i ostale opreme.",
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Auto Frogy | Proizvodnja i prodaja plastičnih auto delova",
    description:
      "Preko 20 godina iskustva u proizvodnji plastičnih auto delova. Najveći izbor auto kopči i žabica, kopči podizača stakla, fiksatora za patosnice, nosača i ramova za tablice, alata i ostale opreme.",
    url: "https://autofrogy.vercel.app/",
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
    <html lang="en">
      <body className={openSans.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
