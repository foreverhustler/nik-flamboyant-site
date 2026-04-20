"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function Page() {
  const socials = [
    { name: "Instagram", href: "https://instagram.com/nikflamboyant" },
    { name: "YouTube", href: "https://youtube.com/@nikflamboyant" },
    { name: "Spotify", href: "https://open.spotify.com/artist/4BuV2AebipXpU6TVkpxbWM" },
    { name: "TikTok", href: "https://tiktok.com/@nikflamboyant" },
  ];

  const isReleased = false;

  const [showPresave, setShowPresave] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePresaveSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);

    const { error } = await supabase.from("emails").insert([{ email }]);

    setLoading(false);

    if (!error) {
      setEmail("");
      setSuccess(true);
    } else {
      console.error(error);
    }
  };

  const closePresave = () => {
    setShowPresave(false);
    setSuccess(false);
    setEmail("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_20%),linear-gradient(to_bottom,#090909,#000000_35%,#000000)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:90px_90px]" />

        <motion.header
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10"
        >
          <div className="text-sm uppercase tracking-[0.45em] text-white/85">
            Nik Flamboyant
          </div>

          <nav className="flex gap-5 text-[11px] uppercase tracking-[0.24em] text-white/60 md:gap-8 md:text-sm md:tracking-[0.28em]">
            <a href="#music" className="transition hover:text-white">
              Music
            </a>
            <a href="/shop" className="transition hover:text-white">
              Shop
            </a>
          </nav>
        </motion.header>

        <section className="relative z-10 grid min-h-[92vh] items-center px-6 pb-12 pt-16 md:px-10 lg:grid-cols-[1fr_1fr] lg:gap-8 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl self-center flex flex-col items-center text-center"
          >
            <h1 className="max-w-5xl text-6xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] md:text-8xl lg:text-[8.8rem]">
              Nik
              <br />
              Flamboyant
            </h1>

            <div className="mt-10 flex max-w-4xl flex-col items-center text-center">
              <div className="space-y-4">
                <p className="text-2xl uppercase tracking-[0.22em] text-white/88 md:text-4xl">
                  Sybarite
                </p>
                <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/88 md:text-xl">
                  {isReleased ? "Out Now" : "Upcoming"}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {isReleased ? (
                  <>
                    <motion.a
                      href="#music"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                      className="group relative overflow-hidden rounded-full border border-white/15 px-10 py-4 text-sm font-medium uppercase tracking-[0.28em] text-white transition hover:border-white/50"
                    >
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
                      <span className="relative z-10">Listen</span>
                    </motion.a>

                    <motion.a
                      href="https://youtube.com/@nikflamboyant"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                      className="group relative overflow-hidden rounded-full border border-white/15 px-10 py-4 text-sm font-medium uppercase tracking-[0.28em] text-white transition hover:border-white/50"
                    >
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
                      <span className="relative z-10">Watch</span>
                    </motion.a>
                  </>
                ) : (
                  <>
                    <motion.button
                      type="button"
                      onClick={() => setShowPresave(true)}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                      className="group relative overflow-hidden rounded-full border border-white/15 px-10 py-4 text-sm font-medium uppercase tracking-[0.28em] text-white transition hover:border-white/50"
                    >
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
                      <span className="relative z-10">Presave</span>
                    </motion.button>

                    <motion.a
                      href="https://youtube.com/@nikflamboyant"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                      className="group relative overflow-hidden rounded-full border border-white/15 px-10 py-4 text-sm font-medium uppercase tracking-[0.28em] text-white transition hover:border-white/50"
                    >
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
                      <span className="relative z-10">Watch</span>
                    </motion.a>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 flex items-center justify-center lg:mt-0 lg:justify-end"
          >
            <div className="aspect-square w-full lg:w-[90%] xl:w-[95%] overflow-hidden rounded-[1.6rem] border border-white/10">
              <img
                src="/cover.jpg"
                alt="Sybarite cover"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        <AnimatePresence>
          {showPresave && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-sm rounded-[1.6rem] border border-white/15 bg-black p-8 text-center"
              >
                <p className="text-sm uppercase tracking-[0.4em] text-white/70 mb-6">
                  Get Access
                </p>

                {success ? (
                  <p className="text-sm uppercase tracking-[0.3em] text-white/80">
                    You&apos;re in.
                  </p>
                ) : (
                  <form onSubmit={handlePresaveSubmit} className="flex flex-col gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full border border-white px-4 py-3 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition disabled:opacity-60"
                    >
                      {loading ? "..." : "Join"}
                    </button>
                  </form>
                )}

                <button
                  type="button"
                  onClick={closePresave}
                  className="mt-6 text-xs uppercase tracking-[0.3em] text-white/50 transition hover:text-white"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-white/10 px-6 py-10 md:px-10"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/45 md:text-xs">
              Contact
            </p>
            <a
              href="mailto:booking@nikflamboyant.com"
              className="mt-3 inline-block text-2xl font-semibold tracking-[-0.04em] text-white/90 transition hover:text-white"
            >
              booking@nikflamboyant.com
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.28em] text-white/50">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  );
}