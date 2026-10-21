"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, ArrowLeft, Plus, Trash2 } from "lucide-react";

interface Contract {
  id: string;
  projectName: string;
  documentType: string;
  totalFee: string;
  createdAt: string;
  status: string;
  role: string;
  clientType: string;
}

export default function ContractsPage() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("contracts") || "[]");
    setContracts(stored);
  }, []);

  const handleDelete = (id: string) => {
    const updated = contracts.filter((c) => c.id !== id);
    setContracts(updated);
    localStorage.setItem("contracts", JSON.stringify(updated));
  };

  const filtered = filter === "All"
    ? contracts
    : contracts.filter((c) => c.status === filter);

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-slate-400 hover:text-slate-600 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold text-lg text-slate-900">My Contracts</h1>
          </div>
          <Link href="/create"
            className="inline-flex items-center gap-1.5 bg-sky-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-sky-700 transition shadow-sm">
            <Plus className="w-4 h-4" />
            New Contract
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-6">
          {["All", "Draft", "Downloaded"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                filter === f
                  ? "bg-slate-900 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-7 h-7 text-slate-400" />
            </div>
            <p className="text-slate-500 mb-4">You haven’t created any contracts yet.</p>
            <Link href="/create"
              className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition">
              Create Your First Contract
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((c) => (
              <div
                key={c.id}
                className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex items-center justify-between gap-4 hover:border-slate-300 transition"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-slate-900 truncate">{c.projectName}</h3>
                    <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {c.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    {c.documentType} · {c.totalFee} · {formatDate(c.createdAt)}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/result?id=${c.id}`}
                    className="text-sm font-medium text-sky-600 hover:text-sky-700 px-3 py-1.5 rounded-lg hover:bg-sky-50 transition"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
