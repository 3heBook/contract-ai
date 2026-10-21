import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContractAI – Protective Freelance Contracts",
  description: "Generate solid freelance agreements for developers and designers in minutes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
