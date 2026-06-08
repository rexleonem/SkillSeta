"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const highlights = [
  "Skill graph intelligence",
  "AI tutoring orchestration",
  "Validated mastery states",
  "Real-world project workflows"
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 lg:px-10">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12"
      >
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1 text-sm text-indigo-200">
            Skillseta · Skill Intelligence System
          </span>
          <h1 className="max-w-2xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Users do not consume content. They evolve through validated skill states.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Skillseta turns user intent into adaptive learning paths, AI-guided practice, mastery
            validation, and real-world projects.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Open dashboard
            </Link>
            <Link
              href="/ai"
              className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Try AI tutor
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="grid gap-4"
        >
          {highlights.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-200"
            >
              {item}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-100"
          >
            Multi-AI routing: DeepSeek for teaching, Gemini for planning, Groq for speed.
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
