import Breadcrumbs from "@/app/_components/breadcrumbs/Breadcrumbs";
import Contact from "@/app/_components/contact/Contact";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Breadcrumbs />
      {children}
      <Contact />
    </>
  );
}
