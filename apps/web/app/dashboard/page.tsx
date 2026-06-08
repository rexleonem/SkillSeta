import { DashboardWidget } from "@skillseta/ui";
import { SkillNode } from "@skillseta/ui";

export default function DashboardPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl p-6 lg:p-10">
      <header className="mb-8 space-y-2">
        <h1 className="text-4xl font-black text-white">Learning Dashboard</h1>
        <p className="text-slate-300">Track mastery, unlock new nodes, and follow adaptive paths.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <DashboardWidget title="Mastery" value="72%" subtitle="Across active skill paths" />
        <DashboardWidget title="Active Paths" value="4" subtitle="Personalized learning tracks" />
        <DashboardWidget title="Projects" value="2" subtitle="In review or progress" />
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <SkillNode title="React Fundamentals" mastery={72} />
        <SkillNode title="State Management" mastery={41} />
      </section>
    </main>
  );
}
