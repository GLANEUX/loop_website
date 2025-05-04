// src/components/HeroSection.tsx
"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#020d15] text-white py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Collabore avec des musiciens{" "}
            <span className="text-[#e56a33]">qui</span>{" "}
            <span className="text-[#dd602d]">te ressemblent</span>.
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            Une app pensée pour les musiciens qui veulent rencontrer, créer et
            progresser. Match avec des profils compatibles et lance des projets
            qui sonnent juste.
          </p>

          {/* Badges App Store / Google Play
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              aria-label="Download on the App Store"
              className="block w-40"
            >
              <Image
                src="/appstore-badge.png"
                alt="App Store"
                width={160}
                height={48}
                className="object-contain"
              />
            </Link>
            <Link
              href="#"
              aria-label="Get it on Google Play"
              className="block w-40"
            >
              <Image
                src="/googleplay-badge.png"
                alt="Google Play"
                width={160}
                height={48}
                className="object-contain"
              />
            </Link>
          </div> */}
        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/phone-prez.svg"
            alt="Phone mockup"
            width={300}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
}
