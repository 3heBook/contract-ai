"use client";

import Link from "next/link";
import { FileText, ArrowLeft, Plus } from "lucide-react";

export default function ContractsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold text-lg">My Contracts</h1>
          </div>
          <Link href="/create"
            className="inline-flex items-center gap-1.5 bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700">
            <Plus className="w-4 h-4" />
            New Contract
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-6">
          <button className="px-4 py-1.5 rounded-full bg-gray-900 text-white text-sm font-medium">All</button>
          <button className="px-4 py-1.5 rounded-full bg-white border text-sm font-medium text-gray-600 hover:bg-gray-50">Drafts</button>
          <button className="px-4 py-1.5 rounded-full bg-white border text-sm font-medium text-gray-600 hover:bg-gray-50">Downloaded</button>
        </div>

        <div className="bg-white border rounded-xl p-16 text-center">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">You haven’t created any contracts yet.</p>
          <Link href="/create"
            className="inline-flex items-center gap-2 text-brand-600 font-medium hover:underline">
            Create Your First Contract
          </Link>
        </div>
      </main>
    </div>
  );
}
