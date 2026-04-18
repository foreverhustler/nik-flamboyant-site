"use client";

import { motion } from "framer-motion";

export default function Page() {
  const socials = [
    { name: "Instagram", href: "https://instagram.com/nikflamboyant" },
    { name: "YouTube", href: "https://youtube.com/@nikflamboyant" },
    { name: "Spotify", href: "https://open.spotify.com/artist/4BuV2AebipXpU6TVkpxbWM" },
    { name: "TikTok", href: "https://tiktok.com/@nikflamboyant" },
  ];

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

          <nav className="hidden gap-8 text-sm uppercase tracking-[0.28em] text-white/60 md:flex">
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
                  Out Now
                </p>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
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