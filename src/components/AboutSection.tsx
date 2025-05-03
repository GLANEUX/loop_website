// src/components/AboutSection.tsx
"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#020d15] text-white py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">À propos de nous.</h2>
          <p className="text-lg leading-relaxed">
            Tout a commencé entre passionnés de musique et de création digitale.
            Trouver les bons musiciens, les bons sons, au bon moment… ce n’est
            pas si simple. Alors on a imaginé Loop, l’app qu’on aurait aimé
            avoir : un espace fluide, humain, où les artistes peuvent se
            rencontrer, partager des idées, collaborer sans pression.
          </p>
          <p className="text-lg leading-relaxed">
            Loop, c’est notre réponse à ce besoin de connexion sincère entre
            musiciens. Une plateforme pensée pour celles et ceux qui vibrent en
            créant ensemble.
          </p>
        </div>

        {/* Image */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative rounded-lg overflow-hidden">
          <Image
            src="/about-concert.png"
            alt="Scène de concert"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
