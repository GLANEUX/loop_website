// src/components/FooterSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020d15] text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-3  lg:grid-cols-5 gap-8 items-center">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <Image src="/LOOP.svg" alt="Loop Logo" width={100} height={24} />
        </div>

        {/* Colonne Entreprise */}
        <div>
          <h4 className="mb-4 font-semibold">Entreprise</h4>
          <ul className="space-y-2">
            {/* <li>
              <Link href="/Support" className="hover:underline">
                À propos
              </Link>
            </li> */}
            <li>
              <Link href="/Mentions-legales" className="hover:underline">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne LOOP */}
        <div>
          <h4 className="mb-4 font-semibold">LOOP</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/Support" className="hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/Support#FAQ" className="hover:underline">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div></div>

        {/* Contact & Social */}
        <div className="flex flex-col items-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4"
            aria-label="Instagram"
          >
            <Instagram size={24} className="hover:text-gray-300 transition" />
          </a>
          <a href="mailto:loop@gmail.com" className="text-sm hover:underline">
            loop@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
