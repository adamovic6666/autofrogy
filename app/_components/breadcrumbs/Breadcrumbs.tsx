"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  referrerPath?: string;
}

const Breadcrumbs = ({ referrerPath }: BreadcrumbsProps = {}) => {
  const pathname = usePathname() || "/";
  const pathSegments = [
    "/",
    ...pathname.split("/").filter((segment) => segment !== ""),
  ];
  const modifiedPathSegments = pathSegments.map((segment) =>
    segment === "/" ? segment : "/" + segment
  );

  return (
    <section className={styles.breadcrumbs}>
      <div className="container">
        <nav>
          <ul>
            {pathSegments.map((segment, index) => {
              const isLastSegment = index === modifiedPathSegments.length - 1;
              const href =
                index !== 0
                  ? `${modifiedPathSegments.slice(1, index + 1).join("")}`
                  : "/";

              if (
                isLastSegment &&
                referrerPath &&
                referrerPath !== pathname &&
                referrerPath !== "/"
              ) {
                return (
                  <li key={href}>
                    <Link href={referrerPath}>
                      {segment === "/" ? "početna" : segment}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={href}>
                  {!isLastSegment ? (
                    <Link href={href}>
                      {segment === "/" ? "početna" : segment}
                    </Link>
                  ) : (
                    <span>{segment}</span>
                  )}
                  {!isLastSegment && (
                    <span className={styles.greaterThan}>&gt;</span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumbs;
