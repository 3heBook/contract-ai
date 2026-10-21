"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Copy, ArrowLeft, Check, FileText } from "lucide-react";

export default function ResultPage() {
  const [data, setData] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("generatedContract");
    if (stored) setData(JSON.parse(stored));
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-slate-500 mb-3">No contract data found.</p>
          <Link href="/create" className="text-sky-600 font-medium hover:underline">Create one</Link>
        </div>
      </div>
    );
  }

  const contractText = `
PROJECT AGREEMENT

This Project Agreement (the "Agreement") is entered into as of the date of last signature below.

1. PARTIES
This Agreement is between the Freelancer (the "${data.role}") and the Client (${data.clientType}).

2. PROJECT NAME
${data.projectName}

3. SCOPE OF WORK & DELIVERABLES
The Freelancer agrees to perform the services described as "${data.projectName}" according to the specifications agreed upon by both parties.

4. TIMELINE & MILESTONES
The project shall be completed within ${data.timeline} from the start date, subject to timely feedback from the Client.

5. PAYMENT TERMS
Total Fee: ${data.totalFee}
Payment Schedule: ${data.paymentTerms}
Late payments may result in work suspension until outstanding amounts are settled.

6. REVISIONS & ADDITIONAL WORK
The fee includes ${data.revisions}. Additional revisions or work outside the original scope will be billed separately at an agreed rate.

7. INTELLECTUAL PROPERTY
${data.ipOwnership}.

8. CONFIDENTIALITY
Both parties agree to keep confidential any proprietary information shared during the project.

9. TERMINATION
Either party may terminate this Agreement with written notice. The Client shall pay for all work completed up to the termination date.

10. LIMITATION OF LIABILITY
The Freelancer's total liability under this Agreement shall not exceed the total fees paid by the Client.

11. GOVERNING LAW
This Agreement shall be governed by the laws of the applicable jurisdiction.

${data.specialTerms ? `SPECIAL TERMS\n${data.specialTerms}` : ""}

This is a draft agreement. For important contracts, we recommend review by a qualified attorney.
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(contractText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/create" className="text-slate-400 hover:text-slate-600 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2 min-w-0">
              <FileText className="w-4 h-4 text-sky-600 shrink-0" />
              <h1 className="font-medium text-sm text-slate-900 truncate">
                {data.documentType} – {data.projectName}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleCopy}
              className="inline-flex items-center gap-1.5 border border-slate-200 bg-white px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy Text"}
            </button>
            <button className="inline-flex items-center gap-1.5 bg-sky-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-sky-700 transition shadow-sm">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 sm:px-10 py-8 sm:py-10">
            <pre className="whitespace-pre-wrap font-sans text-[15px] leading-relaxed text-slate-800">
              {contractText}
            </pre>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-slate-500">
          This is a draft agreement. For important contracts, we recommend review by a qualified attorney.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/contracts"
            className="inline-flex justify-center border border-slate-200 bg-white px-5 py-2.5 rounded-xl font-medium text-sm text-slate-700 hover:bg-slate-50 transition">
            Save to My Contracts
          </Link>
          <Link href="/create"
            className="inline-flex justify-center bg-sky-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-sky-700 transition shadow-sm">
            Create Another
          </Link>
        </div>
      </main>
    </div>
  );
}
