// src/components/FAQSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const data: {
  title: string;
  icon: string;
  faqs?: FAQ[];
  content?: React.ReactNode;
}[] = [
  {
    title: "Questions fréquentes (FAQ)",
    icon: "💡",
    faqs: [
      {
        question: "À quoi sert Loop ?",
        answer: (
          <p className="px-4 py-2 text-gray-300">
            Loop est une plateforme de mise en relation pour musiciens : trouve
            des partenaires, collabore sur des projets, partage tes extraits et
            participe à des challenges.
          </p>
        ),
      },
      {
        question: "Comment trouver des musiciens compatibles ?",
        answer: (
          <p className="px-4 py-2 text-gray-300">
            Utilise les filtres (style, niveau, instruments, localisation) et
            swipe sur les profils pour matcher avec ceux qui correspondent le
            mieux à ton univers.
          </p>
        ),
      },
    ],
  },
  {
    title: "Compte & inscription",
    icon: "👤",
    faqs: [
      {
        question: "Je n’ai pas reçu le code de vérification SMS, que faire ?",
        answer: (
          <p className="px-4 py-2 text-gray-300">
            Vérifie que ton numéro est correct et que tu as du réseau. Si le
            problème persiste, contacte-nous à{" "}
            <Link
              href="mailto:loop@gmail.com"
              className="underline hover:text-white"
            >
              loop@gmail.com
            </Link>
            .
          </p>
        ),
      },
      {
        question:
          "Puis-je modifier mon style musical ou mon instrument après l’inscription ?",
        answer: (
          <p className="px-4 py-2 text-gray-300">
            Oui ! Dans ton profil, rubrique « Paramètres », tu peux mettre à
            jour ton style et tes instruments à tout moment.
          </p>
        ),
      },
      {
        question: "Comment supprimer mon compte ?",
        answer: (
          <p className="px-4 py-2 text-gray-300">
            Envoie-nous un email à{" "}
            <Link
              href="mailto:loop@gmail.com"
              className="underline hover:text-white"
            >
              loop@gmail.com
            </Link>{" "}
            et nous procéderons à la suppression dans les 48 h.
          </p>
        ),
      },
    ],
  },
  {
    title: "Technique & bugs",
    icon: "🛠️",
    faqs: [
      {
        question: "L’app plante ou un bug apparaît",
        answer: (
          <p className="px-4 py-2 text-gray-300">
            Essaie de redémarrer l’app et de mettre à jour la dernière version.
            Si ça ne suffit pas, signale-nous le bug avec une capture d’écran à{" "}
            <Link
              href="mailto:loop@gmail.com"
              className="underline hover:text-white"
            >
              loop@gmail.com
            </Link>
            .
          </p>
        ),
      },
      {
        question: "Je ne reçois pas les notifications",
        answer: (
          <p className="px-4 py-2 text-gray-300">
            Vérifie que les notifications sont activées dans les paramètres de
            ton appareil et dans ton profil Loop.
          </p>
        ),
      },
    ],
  },
  {
    title: "Contacte-nous",
    icon: "📬",
    content: (
      <p className="px-4 py-2 text-gray-300">
        Tu peux nous écrire à{" "}
        <Link
          href="mailto:loop@gmail.com"
          className="underline hover:text-white"
        >
          loop@gmail.com
        </Link>
        . On te répond sous 48 h (souvent bien plus vite !).
      </p>
    ),
  },
  {
    title: "Signaler un problème ou un utilisateur",
    icon: "🚩",
    content: (
      <p className="px-4 py-2 text-gray-300">
        Nous prenons la sécurité et le respect très au sérieux. Tu peux signaler
        un comportement inapproprié depuis n’importe quel profil ou nous
        contacter directement.
      </p>
    ),
  },
];

export default function FAQSection() {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setOpenMap((m) => ({ ...m, [key]: !m[key] }));

  return (
    <section className="bg-[#020d15] text-white py-16 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-12">
        {data.map((section, sIdx) => {
          const hasFaqs = Array.isArray(section.faqs);
          const keyBase = `sec-${sIdx}`;

          return (
            <div key={keyBase} className="">
              <h3 className="flex items-center text-2xl font-bold gap-2">
                <span>{section.icon}</span> {section.title}
              </h3>

              {hasFaqs &&
                section.faqs!.map((faq, qIdx) => {
                  const key = `${keyBase}-q-${qIdx}`;
                  const isOpen = !!openMap[key];
                  return (
                    <div key={key} className="border-b border-gray-700">
                      <button
                        className="w-full flex justify-between items-center py-4 text-left"
                        onClick={() => toggle(key)}
                      >
                        <span className="font-medium">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </button>
                      {isOpen && <div>{faq.answer}</div>}
                    </div>
                  );
                })}

              {!hasFaqs && section.content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
