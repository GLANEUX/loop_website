// src/components/CommunitySection.tsx
"use client";

import { Users, Mic, Star } from "lucide-react";

export default function CommunitySection() {
  return (
    <section className="bg-[#020d15] text-white py-16 px-6">
      {/* Title + intro */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="flex items-center justify-center text-3xl md:text-4xl font-bold gap-2">
          <span className="text-2xl">🎤</span>
          Une communauté pour les musiciens d’aujourd’hui.
        </h2>
        <p className="mt-4 text-gray-300">
          Que tu sois beatmaker, chanteur ou guitariste, l&apos;app te connecte
          à des musiciens qui partagent ton univers. Collabore, partage et fais
          vibrer la scène ensemble.
        </p>
      </div>

      {/* Features */}
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#e56a33] p-4 rounded-full">
            <Users size={32} />
          </div>
          <h3 className="mt-4 text-xl font-semibold">
            Matching musical intelligent
          </h3>
          <p className="mt-2 text-gray-300 text-sm">
            Trouve instantanément des musiciens qui te correspondent selon ton
            style, ton niveau et tes instruments.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-[#e56a33] p-4 rounded-full">
            <Mic size={32} />
          </div>
          <h3 className="mt-4 text-xl font-semibold">
            Collaboration simplifiée
          </h3>
          <p className="mt-2 text-gray-300 text-sm">
            Échange, partage des idées, envoie des démos et construis tes
            projets directement dans l&apos;app.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-[#e56a33] p-4 rounded-full">
            <Star size={32} />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Une vraie communauté</h3>
          <p className="mt-2 text-gray-300 text-sm">
            Rejoins un réseau d&apos;artistes passionnés, collabore, apprends,
            inspire et fais évoluer ton univers musical.
          </p>
        </div>
      </div>
    </section>
  );
}
