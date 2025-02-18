import { Navigation } from "@/components/navigation";
import { fontSans, fontHeading } from "../lib/fonts";
import { PageTransition } from "@/components/page-transition";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="APCsx85Q7Ng8_3Q3Sv1H3Jb-S-eeCzZ4B_26tsKaHsY"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M3G4HZKW');`,
          }}
        />
      </head>
      <body
        className={`min-h-screen ${fontSans.variable} ${fontHeading.variable} font-sans`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3G4HZKW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navigation />
        <PageTransition>
          <main>{children}</main>
          <Toaster />
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
