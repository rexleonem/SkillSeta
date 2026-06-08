export default function AiPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl p-6 lg:p-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
        <h1 className="text-4xl font-black text-white">AI Tutor</h1>
        <p className="mt-3 text-slate-300">
          Router-backed teaching, planning, quizzes, and evaluation in one interface.
        </p>
        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/70 p-6 text-slate-300">
          Chat shell placeholder wired to the AI service router.
        </div>
      </div>
    </main>
  );
}
