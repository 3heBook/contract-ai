"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Copy, ArrowLeft, Check } from "lucide-react";

export default function ResultPage() {
  const [data, setData] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("generatedContract");
    if (stored) setData(JSON.parse(stored));
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No contract data found. <Link href="/create" className="text-brand-600 underline">Create one</Link></p>
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
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/create" className="text-gray-500 hover:text-gray-700">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-semibold text-sm md:text-base">
                {data.documentType} – {data.projectName}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleCopy}
              className="inline-flex items-center gap-1.5 border border-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-50">
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy Text"}
            </button>
            <button className="inline-flex items-center gap-1.5 bg-brand-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-brand-700">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white border rounded-xl p-6 md:p-10 shadow-sm">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-gray-800">
            {contractText}
          </pre>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          This is a draft agreement. For important contracts, we recommend review by a qualified attorney.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/contracts"
            className="border border-gray-300 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50">
            Save to My Contracts
          </Link>
          <Link href="/create"
            className="bg-brand-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-700">
            Create Another
          </Link>
        </div>
      </main>
    </div>
  );
}
