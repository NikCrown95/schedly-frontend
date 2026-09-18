"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const items = [
  { href: "/prodotto", label: "Prodotto" },
  { href: "/come-funziona", label: "Come funziona" },
  { href: "/prezzi", label: "Prezzi" },
  { href: "/demo", label: "Demo" },
  { href: "/faq", label: "FAQ" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        className={"mobileMenuButton" + (open ? " isOpen" : "")}
        type="button"
        aria-label={open ? "Chiudi menu" : "Apri menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>
      <div className={"mobileMenuPanel" + (open ? " isOpen" : "")} id="mobile-navigation">
        <nav aria-label="Navigazione mobile">
          {items.map((item) => (
            <a key={item.href} href={item.href} className={pathname === item.href ? "isCurrent" : ""} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}<span>→</span></a>
          ))}
        </nav>
        <div className="mobileMenuActions">
          <a href="/login" onClick={() => setOpen(false)}>Accedi</a>
          <a className="button" href="/demo" onClick={() => setOpen(false)}>Richiedi una demo →</a>
        </div>
      </div>
    </>
  );
}
