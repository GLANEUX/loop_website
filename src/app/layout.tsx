import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Loop – La plateforme des musiciens",
  description:
    "Loop connecte les musiciens amateurs par matching intelligent : crée, partage et collabore au sein d’une communauté musicale active.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script id="clarity-script" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "uy82030034");
        `}</Script>
      </head>
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
