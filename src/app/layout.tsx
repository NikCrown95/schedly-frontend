import type { Metadata } from "next";
import "./globals.css";
import "./home-polish.css";
import "./marketing-pages.css";
import "./product-reference.css";
import "./logo.css";
import "./how-approved.css";
import "./home-reference-fix.css";
import "./mobile-mockup.css";

export const metadata: Metadata = {
  title: "Schedly — Appuntamenti, senza perdere tempo",
  description: "Schedly gestisce automaticamente gli appuntamenti dei tuoi clienti.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
