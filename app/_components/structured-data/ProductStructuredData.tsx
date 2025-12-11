import { ProductDetail } from "@/app/_types";

interface ProductStructuredDataProps {
  product: ProductDetail;
  slug: string;
}

export default function ProductStructuredData({
  product,
  slug,
}: ProductStructuredDataProps) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description || product.metatag?.description,
    image: product.main_photo
      ? `https://backend.autofrogy.com${product.main_photo}`
      : "https://www.autofrogy.com/images/og.png",
    sku: product.product_code || product.fabric_number,
    mpn: product.fabric_number,
    brand: {
      "@type": "Brand",
      name: "Auto Frogy",
    },
    manufacturer: {
      "@type": "Organization",
      name: "SZTR UGREN",
      url: "https://www.autofrogy.com",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.autofrogy.com/proizvod/${slug}`,
      priceCurrency: "RSD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Auto Frogy",
      },
    },
    category: product.categories,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema),
      }}
    />
  );
}
