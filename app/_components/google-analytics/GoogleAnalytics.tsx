import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1B95DXE85C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-1B95DXE85C');
            `}
        </Script>
      </>
    </>
  );
}
