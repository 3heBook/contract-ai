"use client";

import Link from "next/link";
import { FileText, Plus, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-brand-600" />
            <span className="font-bold text-xl">ContractAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/create" className="hover:text-gray-900">New Contract</Link>
            <Link href="/contracts" className="hover:text-gray-900">My Contracts</Link>
            <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
            <Link href="/account" className="hover:text-gray-900">Account</Link>
          </nav>
          <Link
            href="/create"
            className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition"
          >
            + New Contract
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Create protective freelance contracts in minutes
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Built specifically for developers and designers. Stop wasting hours on vague agreements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/create"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-700 transition"
            >
              <Plus className="w-5 h-5" />
              New Contract
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">2 free contracts remaining this month</p>
        </div>

        {/* Recent Contracts */}
        <section className="mt-20">
          <h2 className="text-xl font-semibold mb-6">Recent Contracts</h2>
          <div className="bg-white border rounded-xl p-12 text-center">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No contracts yet. Create your first one to get started.</p>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 text-brand-600 font-medium hover:underline"
            >
              Create Your First Contract
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
