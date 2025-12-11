import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.autofrogy.com";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/o-nama`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/politika-privatnosti`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/proizvodi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  try {
    // Fetch all products for dynamic routes
    const productsRes = await fetch(
      `${process.env.BASE_URL}/api/v1/list-products?data=all&cc=${process.env.API_HASH}`,
      { next: { revalidate: 86400 } } // Revalidate once per day
    );
    const productsData = await productsRes.json();

    // Generate product URLs - handle both array and object responses
    type Product = { url?: string; alias?: string };
    const products = Array.isArray(productsData) ? productsData : productsData?.products || [];
    const productRoutes: MetadataRoute.Sitemap = products
      .filter((product: Product) => product.url || product.alias)
      .map((product: Product) => ({
        url: `${baseUrl}${product.url || product.alias}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));

    return [...staticRoutes, ...productRoutes];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return static routes if API fetch fails
    return staticRoutes;
  }
}
