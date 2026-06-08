import { useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";

const columnHelper = createColumnHelper<{ name: string; mastery: number; status: string }>();

const data = [
  { name: "React", mastery: 72, status: "active" },
  { name: "System Design", mastery: 46, status: "draft" }
];

export default function App() {
  const columns = useMemo(
    () => [
      columnHelper.accessor("name", { header: "Skill" }),
      columnHelper.accessor("mastery", { header: "Mastery" }),
      columnHelper.accessor("status", { header: "Status" })
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-10 text-white">
      <header className="mb-8">
        <h1 className="text-4xl font-black">Skillseta Admin</h1>
        <p className="mt-2 text-slate-300">Skill management, prompt tuning, moderation, analytics.</p>
      </header>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-4 text-2xl font-bold">Skills</h2>
        <table className="w-full text-left">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border-b border-white/10 px-4 py-3">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-white/5">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-slate-200">
                    {flexRender(cell.column.columnDef.cell, cell.getContext()) ?? cell.getValue()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
