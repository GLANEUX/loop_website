"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Erreur");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="newsletter"
      className="relative bg-gradient-to-r from-[#dd3726] to-[#e56a33] rounded-2xl overflow-hidden py-12 px-6 md:px-12"
    >
      <Mail className="absolute top-4 right-4 w-10 h-10 text-white/50" />

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-2">
            <span className="mr-2">🔥</span>Reste dans le rythme
          </h2>
          <p className="text-base md:text-lg">
            Rejoins notre newsletter et sois le premier au courant des nouveaux
            défis, mises en avant et tips pour booster ta musique.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <form
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Adresse mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 rounded-full text-black bg-white/20 ring-1 ring-white focus:outline-white/50 focus:ring-2 focus:ring-white/50 "
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-white text-[#dd3726] font-semibold rounded-full hover:opacity-90 transition disabled:opacity-50"
            >
              {status === "loading" ? "…" : "S’abonner"}
            </button>
          </form>
          {status === "success" && (
            <p className="text-sm text-white/80">Merci ! 🎉</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-200">Une erreur est survenue.</p>
          )}
          <p className="text-xs text-white/80">
            Newsletter hebdomadaire uniquement. Pas de spam, désinscription
            possible à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
}
