// src/components/FooterSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#020d15] text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-3  lg:grid-cols-5 gap-8 items-center">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <Link href="/">
            <Image
              src="/logo_loop_blanc.svg"
              alt="Loop Logo"
              width={100}
              height={24}
            />
          </Link>
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
          <div className="flex space-x-4 mb-4">
            <Link
              href="https://www.instagram.com/loop___app"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4"
              aria-label="Instagram"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61583750519200"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4"
              aria-label="Facebook"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@loop___app"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4"
              aria-label="TikTok"
            >
              <Image src="/tik-tok.png" alt="TikTok" width={24} height={24} />
            </Link>
          </div>
          <Link
            href="mailto:loop@gmail.com"
            className="text-sm hover:underline"
          >
            loop@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
