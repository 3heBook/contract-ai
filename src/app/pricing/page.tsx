"use client";

import Link from "next/link";
import { FileText, Check, ArrowLeft } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-600" />
            <span className="font-semibold">Pricing</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Simple, transparent pricing</h1>
          <p className="text-gray-600">Choose the plan that works best for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <h2 className="text-lg font-semibold">Free</h2>
            <p className="text-3xl font-bold mt-2">$0</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 2 contracts per month</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> PDF export</li>
            </ul>
            <button className="mt-8 w-full border border-gray-300 py-2.5 rounded-lg font-medium text-gray-700">
              Current Plan
            </button>
          </div>

          <div className="bg-white border-2 border-brand-500 rounded-xl p-6 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Most Popular
            </span>
            <h2 className="text-lg font-semibold">Pro</h2>
            <p className="text-3xl font-bold mt-2">$19 <span className="text-base font-normal text-gray-500">/ month</span></p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Unlimited contracts</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Custom clauses</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> PDF & Word export</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Priority support</li>
            </ul>
            <Link href="/success"
              className="mt-8 block w-full bg-brand-600 text-white text-center py-2.5 rounded-lg font-medium hover:bg-brand-700">
              Upgrade to Pro
            </Link>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <h2 className="text-lg font-semibold">Lifetime</h2>
            <p className="text-3xl font-bold mt-2">$149</p>
            <p className="text-sm text-gray-500">one-time</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Everything in Pro</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Pay once, use forever</li>
            </ul>
            <p className="mt-4 text-xs text-orange-600 font-medium">Limited to the first 100 users</p>
            <Link href="/success"
              className="mt-4 block w-full border border-gray-300 py-2.5 rounded-lg font-medium text-center hover:bg-gray-50">
              Get Lifetime Access
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Cancel anytime. No questions asked.
        </p>
      </main>
    </div>
  );
}
