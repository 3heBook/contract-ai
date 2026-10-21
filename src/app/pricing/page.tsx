"use client";

import Link from "next/link";
import { FileText, Check, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string) => {
    setLoading(priceId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to start checkout. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link href="/" className="text-slate-400 hover:text-slate-600">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-600 flex items-center justify-center">
              <FileText className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold">Pricing</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Simple, transparent pricing</h1>
          <p className="text-slate-600">Choose the plan that works best for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Free</h2>
            <p className="text-3xl font-bold mt-2">$0</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 2 contracts per month</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> PDF export</li>
            </ul>
            <button className="mt-8 w-full border border-slate-200 py-2.5 rounded-xl font-medium text-slate-700">
              Current Plan
            </button>
          </div>

          {/* Pro */}
          <div className="bg-white border-2 border-sky-500 rounded-2xl p-6 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Most Popular
            </span>
            <h2 className="text-lg font-semibold">Pro</h2>
            <p className="text-3xl font-bold mt-2">$19 <span className="text-base font-normal text-slate-500">/ month</span></p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Unlimited contracts</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Custom clauses</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> PDF & Word export</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Priority support</li>
            </ul>
            <button
              onClick={() => handleCheckout("price_pro_monthly")}
              disabled={loading === "price_pro_monthly"}
              className="mt-8 w-full bg-sky-600 text-white py-2.5 rounded-xl font-medium hover:bg-sky-700 disabled:opacity-60"
            >
              {loading === "price_pro_monthly" ? "Loading..." : "Upgrade to Pro"}
            </button>
          </div>

          {/* Lifetime */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Lifetime</h2>
            <p className="text-3xl font-bold mt-2">$149</p>
            <p className="text-sm text-slate-500">one-time</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Everything in Pro</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Pay once, use forever</li>
            </ul>
            <p className="mt-4 text-xs text-orange-600 font-medium">Limited to the first 100 users</p>
            <button
              onClick={() => handleCheckout("price_lifetime")}
              disabled={loading === "price_lifetime"}
              className="mt-4 w-full border border-slate-200 py-2.5 rounded-xl font-medium hover:bg-slate-50 disabled:opacity-60"
            >
              {loading === "price_lifetime" ? "Loading..." : "Get Lifetime Access"}
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-10">
          Cancel anytime. No questions asked.
        </p>
      </main>
    </div>
  );
}
