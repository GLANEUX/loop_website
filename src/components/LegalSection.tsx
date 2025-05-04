// src/components/LegalSection.tsx
"use client";
import Link from "next/link";
export default function LegalSection() {
  return (
    <section className="bg-[#020d15] text-white py-16 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold">Mentions légales</h2>

        {/* Éditeur */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Éditeur de l’application</h3>
          <p className="text-gray-300">
            <span className="font-medium">Loop</span>
            <br />
            Contact :{" "}
            <a
              href="mailto:contact@loop-app.fr"
              className="underline hover:text-white"
            >
              contact@loop-app.fr
            </a>
            <br />
            Responsable de la publication
          </p>
        </div>

        {/* Hébergement */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Hébergement</h3>
          <p className="text-gray-300 space-y-1">
            L’application est hébergée par :<br />
            [Nom de l’hébergeur]
            <br />
            [Adresse de l’hébergeur]
            <br />
            [Contact]
          </p>
        </div>

        {/* Propriété intellectuelle */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Propriété intellectuelle</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              Tous les contenus présents sur l’application Loop (textes, images,
              logos, interfaces, etc.) sont protégés par le droit d’auteur et
              sont la propriété exclusive de leurs auteurs respectifs, sauf
              mention contraire. Toute reproduction, représentation ou
              exploitation sans autorisation est strictement interdite.
            </p>
            <p>
              Loop collecte uniquement les données nécessaires au bon
              fonctionnement de l’application. Aucune donnée ne sera vendue ni
              partagée sans votre consentement. Conformément à la loi «
              Informatique et Libertés » et au RGPD, vous pouvez accéder à vos
              données, demander leur rectification ou leur suppression en nous
              écrivant à{" "}
              <Link
                href="mailto:contact@loop-app.fr"
                className="underline hover:text-white"
              >
                contact@loop-app.fr
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
