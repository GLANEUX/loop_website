// src/components/Navbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import "@/components/Navbar.css";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
    setIsOpen(false); // ferme le menu mobile éventuel
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href="/">
            <Image
              src="/logo_loop_blanc.svg"
              alt="Loop Logo"
              width={100}
              height={24}
            />
          </Link>
        </div>

        <button
          className="burger"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link className="support-btn" href="/Support">
              Support
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="download-button"
              onClick={handleDownloadClick}
            >
              Télécharger l'app
            </a>
          </li>
        </ul>
      </nav>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-4 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>
            <h3 className="text-xl font-bold mb-4">🚧 Bientôt disponible !</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              L’application n’est pas encore prête, mais tu peux t’inscrire à
              notre newsletter pour être tenu·e au courant du lancement.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block bg-[#dd3726] text-white px-5 py-2 rounded-full hover:bg-[#c04b29] transition"
              onClick={() => setShowModal(false)}
            >
              S’inscrire à la newsletter
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
