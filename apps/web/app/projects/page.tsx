export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl p-6 lg:p-10">
      <h1 className="text-4xl font-black text-white">Project Workspace</h1>
      <p className="mt-3 text-slate-300">
        Build real-world outputs that prove competence and drive progression.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">Project briefs</div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          AI-generated feedback and rubric scoring
        </div>
      </div>
    </main>
  );
}
