"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-600" />
            <span className="font-semibold">Account & Settings</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white border rounded-xl p-6">
          <h2 className="font-semibold mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input defaultValue="Alex Rivera" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input defaultValue="alex@example.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50" readOnly />
            </div>
            <button className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700">
              Save Changes
            </button>
          </div>
        </section>

        <section className="bg-white border rounded-xl p-6">
          <h2 className="font-semibold mb-4">Subscription</h2>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Current Plan: Free</p>
              <p className="text-sm text-gray-500">2 contracts remaining this month</p>
            </div>
            <Link href="/pricing" className="text-brand-600 font-medium text-sm hover:underline">
              Upgrade to Pro
            </Link>
          </div>
        </section>

        <section className="bg-white border rounded-xl p-6">
          <h2 className="font-semibold mb-4">Preferences</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Default Export Format</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option>PDF</option>
                <option>Word</option>
                <option>Both</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Email notifications for product updates</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
          </div>
        </section>

        <section className="bg-white border rounded-xl p-6">
          <h2 className="font-semibold mb-4">Security</h2>
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
            Change Password
          </button>
        </section>

        <section className="bg-white border border-red-200 rounded-xl p-6">
          <h2 className="font-semibold text-red-600 mb-2">Danger Zone</h2>
          <p className="text-sm text-gray-600 mb-4">
            Permanently delete your account and all contracts. This action cannot be undone.
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700">
            Delete Account
          </button>
        </section>
      </main>
    </div>
  );
}
