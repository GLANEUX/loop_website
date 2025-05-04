import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// const Poppins_Font = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   style: ["normal", "italic"],
// });

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
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
