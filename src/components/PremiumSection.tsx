// src/components/PremiumSection.tsx
"use client";

import Link from "next/link";

export default function PremiumSection() {
  return (
    <section className="bg-[#020d15] text-white py-16 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-bold">
          🔥 Prenez une longueur d'avance avec Loop + !
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          Accédez à une nouvelle dimension : visibilité renforcée, outils
          créatifs avancés, bonus exclusifs sur les challenges et une expérience
          sans limite. Parfait pour les musiciens qui veulent aller plus loin.
        </p>
        <Link
          href="#"
          className="inline-block bg-[#e56a33] hover:bg-[#d14f27] transition font-semibold px-8 py-3 rounded-full"
        >
          🔒 Découvrez bientôt Loop Premium
        </Link>
      </div>
    </section>
  );
}
