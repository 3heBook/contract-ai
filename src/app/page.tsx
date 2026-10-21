"use client";

import Link from "next/link";
import { FileText, Plus, ArrowRight, Shield, Zap, FileCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center">
              <FileText className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">ContractAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/create" className="hover:text-slate-900 transition">New Contract</Link>
            <Link href="/contracts" className="hover:text-slate-900 transition">My Contracts</Link>
            <Link href="/pricing" className="hover:text-slate-900 transition">Pricing</Link>
            <Link href="/account" className="hover:text-slate-900 transition">Account</Link>
          </nav>
          <Link
            href="/create"
            className="bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sky-700 transition shadow-sm"
          >
            + New Contract
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-medium mb-6">
            <Shield className="w-3.5 h-3.5" />
            Built for freelancers who value clear agreements
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5 leading-tight">
            Create protective freelance<br className="hidden sm:block" /> contracts in minutes
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Stop wasting hours on vague agreements. Generate solid, professional contracts designed specifically for developers and designers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/create"
              className="inline-flex items-center justify-center gap-2 bg-sky-600 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-sky-700 transition shadow-md shadow-sky-200"
            >
              <Plus className="w-5 h-5" />
              New Contract
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white text-slate-700 px-6 py-3.5 rounded-xl font-medium hover:bg-slate-50 transition"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">2 free contracts remaining this month</p>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Fast generation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Create a professional contract in under 3 minutes with clear, protective clauses.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Protective by default</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Built-in limits on revisions, late payments, and scope changes so you stay protected.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Ready to send</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Export as PDF or copy text and send directly to your client.</p>
            </div>
          </div>
        </section>

        {/* Recent */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Contracts</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-7 h-7 text-slate-400" />
            </div>
            <p className="text-slate-500 mb-4">No contracts yet. Create your first one to get started.</p>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition"
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
