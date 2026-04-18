"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ShopPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="absolute top-6 left-6">
        <a
          href="/"
          className="text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white transition"
        >
          Back
        </a>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl uppercase tracking-[0.3em] mb-6">
          Coming Soon
        </h1>

        <p className="text-sm uppercase tracking-[0.4em] text-white/70 mb-4 mt-2">
          Get Access
        </p>

        {success ? (
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mt-6">
            You&apos;re in.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 w-full max-w-sm"
          >
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
      </div>
    </div>
  );
}