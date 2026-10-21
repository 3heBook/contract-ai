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
    projectName: "",
    clientType: "Startup",
    totalFee: "",
    paymentTerms: "",
    timeline: "",
    revisions: "",
    ipOwnership: "Ownership transferred to client upon full payment",
    specialTerms: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2500));
    sessionStorage.setItem("generatedContract", JSON.stringify(form));
    router.push("/result");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-600" />
            <span className="font-semibold">Create New Contract</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-6 md:p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select name="role" value={form.role} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option>Full-stack Developer</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>UI/UX Designer</option>
              <option>Graphic Designer</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
            <select name="documentType" value={form.documentType} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option>Project Agreement</option>
              <option>NDA</option>
              <option>Proposal</option>
              <option>Scope of Work</option>
              <option>Change Order</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
            <input name="projectName" value={form.projectName} onChange={handleChange} required
              placeholder="e.g. E-commerce Website Redesign"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client Type</label>
            <select name="clientType" value={form.clientType} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option>Startup</option>
              <option>Agency</option>
              <option>Individual</option>
              <option>Enterprise</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Total Fee</label>
            <input name="totalFee" value={form.totalFee} onChange={handleChange} required
              placeholder="e.g. $8,000"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms</label>
            <input name="paymentTerms" value={form.paymentTerms} onChange={handleChange} required
              placeholder="e.g. 30% upfront, 40% at midpoint, 30% on final delivery"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
            <input name="timeline" value={form.timeline} onChange={handleChange} required
              placeholder="e.g. 6–8 weeks"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Included Revisions</label>
            <input name="revisions" value={form.revisions} onChange={handleChange} required
              placeholder="e.g. 3 rounds of revisions"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Intellectual Property</label>
            <select name="ipOwnership" value={form.ipOwnership} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option>Ownership transferred to client upon full payment</option>
              <option>Freelancer retains ownership, client receives a license</option>
              <option>Custom terms</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Special Terms (optional)</label>
            <textarea name="specialTerms" value={form.specialTerms} onChange={handleChange} rows={3}
              placeholder="Add any extra conditions (rush fees, response time limits, etc.)"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button type="button"
              className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition">
              Save as Draft
            </button>
            <button type="submit" disabled={loading}
              className="flex-1 bg-brand-600 text-white py-2.5 rounded-lg font-medium hover:bg-brand-700 transition disabled:opacity-60">
              {loading ? "Generating..." : "Generate Contract"}
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center">
            You can edit any clause after the contract is generated.
          </p>
        </form>
      </main>
    </div>
  );
}
