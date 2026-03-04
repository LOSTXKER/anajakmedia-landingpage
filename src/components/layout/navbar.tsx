"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "หน้าแรก" },
  { href: "/products", label: "จอ LED" },
  { href: "/community-screen", label: "Community Screen", badge: "ใหม่" },
  { href: "/showcase", label: "ผลงาน" },
  { href: "/about", label: "เกี่ยวกับเรา" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-tight text-white">
              ANAJAK
            </span>
            <span className="text-xs font-medium tracking-widest text-muted uppercase">
              Media
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1.5 inline-flex rounded-full bg-[#FF2D78] px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <Link
              href="/pricing"
              className="rounded-full border border-accent/50 px-5 py-2 text-sm font-semibold text-accent transition-all hover:border-accent hover:bg-accent/10"
            >
              คำนวณราคา
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_20px_rgba(74,144,255,0.3)]"
            >
              ติดต่อเรา
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#0A0A0F]/98 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
                ANAJAK
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white transition-colors hover:text-accent"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="ml-2 inline-flex rounded-full bg-[#FF2D78] px-2 py-1 text-xs font-bold leading-none text-white align-middle">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                <Link
                  href="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-accent/50 px-8 py-3 text-lg font-semibold text-accent"
                >
                  คำนวณราคา
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-accent px-8 py-3 text-lg font-semibold text-white"
                >
                  ติดต่อเรา
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
