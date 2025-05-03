// src/components/IntroSection.tsx
"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden">
      {/* Background image */}
      <Image
        src="/musician-bg.png"
        alt="Musicien en concert"
        fill
        className="object-cover"
      />

      {/* Overlay texte */}
      <div className="relative z-10 bg-black/40 px-6 py-12 md:px-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">LOOP</h2>
        <p className="text-base md:text-lg text-white max-w-2xl leading-relaxed">
          Grâce à un système de matching intelligent, tu découvres des profils
          compatibles selon ton style et ton univers musical. Partage tes sons,
          échange avec la communauté, et participe à des challenges
          hebdomadaires pour te faire repérer.
        </p>
      </div>
    </section>
  );
}
