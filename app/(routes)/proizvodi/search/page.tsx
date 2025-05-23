import { Product } from "@/app/_types";
import styles from "./search.module.css";
import Link from "next/link";

export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { q = "" } = await searchParams;
  const url = `https://backend.autofrogy.com/api/v1/search?q=${q}&cc=W4E)C9($8n=n*S(OBJMUR_hQ0.$t6P/xOx4a3v/|D@>U3LU8a,`;
  const response = await fetch(url);
  const data = await response.json();

  return (
    <main className={styles.searchResults}>
      <div className="container-small">
        <h1>Rezultati pretrage: {q}</h1>

        {data.length > 0 ? (
          <div className={styles.resultsList}>
            {data.map((product: Product) => (
              <Link
                href={product.alias}
                key={product.id}
                className={styles.resultItem}
              >
                {/* <div className={styles.resultImage}>
                  {result.imageUrl ? (
                    <img src={result.imageUrl} alt={result.title} />
                  ) : (
                    <div className={styles.placeholder}></div>
                  )}
                </div>
                <div className={styles.resultContent}>
                  <h2>{result.title}</h2>
                  {result.description && <p>{result.description}</p>}
                  {result.category && (
                    <span className={styles.category}>{result.category}</span>
                  )}
                </div> */}
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <p>
              Nema rezultata za &quot;<strong>{q}</strong>&quot;
            </p>
            <p>
              Pokušajte sa drugačijim ključnim rečima ili pregledajte kategorije
              proizvoda.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
