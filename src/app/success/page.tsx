"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border rounded-2xl p-8 text-center shadow-sm">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Payment successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for upgrading. Your account has been updated.
        </p>

        <div className="bg-gray-50 rounded-xl p-4 text-left mb-8">
          <p className="font-medium">You’re now on the Pro plan</p>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>• Unlimited contracts</li>
            <li>• Custom clauses</li>
            <li>• PDF & Word export</li>
            <li>• Priority support</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">Your subscription renews on November 20, 2026</p>
        </div>

        <div className="space-y-3">
          <Link href="/"
            className="block w-full bg-brand-600 text-white py-2.5 rounded-lg font-medium hover:bg-brand-700">
            Go to Dashboard
          </Link>
          <Link href="/create"
            className="block w-full border border-gray-300 py-2.5 rounded-lg font-medium hover:bg-gray-50">
            Create Your First Contract
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          A confirmation email has been sent to your inbox.
        </p>
      </div>
    </div>
  );
}
