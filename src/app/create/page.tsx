"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText, ArrowLeft } from "lucide-react";

export default function CreateContractPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    role: "Full-stack Developer",
    documentType: "Project Agreement",
    projectName: "E-commerce Website Redesign",
    clientType: "Startup",
    totalFee: "$8,000",
    paymentTerms: "30% upfront, 40% at midpoint, 30% on final delivery",
    timeline: "6–8 weeks",
    revisions: "3 rounds of revisions",
    ipOwnership: "Ownership transferred to client upon full payment",
    specialTerms: "Rush requests outside business hours will incur additional fees. Client feedback must be provided within 48 hours.",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    sessionStorage.setItem("generatedContract", JSON.stringify(form));
    router.push("/result");
  };

  const inputClass = "w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition";
  const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link href="/" className="text-slate-400 hover:text-slate-600 transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-600 flex items-center justify-center">
              <FileText className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-slate-900">Create New Contract</span>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-5 p-3.5 bg-sky-50 border border-sky-100 rounded-xl text-sm text-sky-800">
          Example values are pre-filled for easy testing. Edit them or just click Generate.
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Role</label>
              <select name="role" value={form.role} onChange={handleChange} className={inputClass}>
                <option>Full-stack Developer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>UI/UX Designer</option>
                <option>Graphic Designer</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Document Type</label>
              <select name="documentType" value={form.documentType} onChange={handleChange} className={inputClass}>
                <option>Project Agreement</option>
                <option>NDA</option>
                <option>Proposal</option>
                <option>Scope of Work</option>
                <option>Change Order</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Project Name</label>
            <input name="projectName" value={form.projectName} onChange={handleChange} required className={inputClass} />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Client Type</label>
              <select name="clientType" value={form.clientType} onChange={handleChange} className={inputClass}>
                <option>Startup</option>
                <option>Agency</option>
                <option>Individual</option>
                <option>Enterprise</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Total Fee</label>
              <input name="totalFee" value={form.totalFee} onChange={handleChange} required className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Payment Terms</label>
            <input name="paymentTerms" value={form.paymentTerms} onChange={handleChange} required className={inputClass} />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Timeline</label>
              <input name="timeline" value={form.timeline} onChange={handleChange} required className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Included Revisions</label>
              <input name="revisions" value={form.revisions} onChange={handleChange} required className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Intellectual Property</label>
            <select name="ipOwnership" value={form.ipOwnership} onChange={handleChange} className={inputClass}>
              <option>Ownership transferred to client upon full payment</option>
              <option>Freelancer retains ownership, client receives a license</option>
              <option>Custom terms</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Special Terms <span className="text-slate-400 font-normal">(optional)</span></label>
            <textarea name="specialTerms" value={form.specialTerms} onChange={handleChange} rows={3} className={inputClass} />
          </div>

          <div className="pt-3 flex flex-col sm:flex-row gap-3">
            <button type="button"
              className="flex-1 border border-slate-200 text-slate-700 py-3 rounded-xl font-medium hover:bg-slate-50 transition text-sm">
              Save as Draft
            </button>
            <button type="submit" disabled={loading}
              className="flex-1 bg-sky-600 text-white py-3 rounded-xl font-medium hover:bg-sky-700 transition disabled:opacity-60 text-sm shadow-sm shadow-sky-200">
              {loading ? "Generating..." : "Generate Contract"}
            </button>
          </div>
          <p className="text-xs text-slate-500 text-center pt-1">
            You can edit any clause after the contract is generated.
          </p>
        </form>
      </main>
    </div>
  );
}
