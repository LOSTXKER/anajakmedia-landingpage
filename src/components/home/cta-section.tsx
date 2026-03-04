"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-32 md:py-40">
      {/* Multiple gradient layers for depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,144,255,0.12)_0%,transparent_60%)]" />
        <div className="absolute -left-[30%] top-[20%] h-[600px] w-[600px] rounded-full bg-accent/[0.06] blur-[120px]" />
        <div className="absolute -right-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-purple-500/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            พร้อมให้แบรนด์ของคุณ
            <br />
            <span className="bg-gradient-to-r from-accent via-blue-400 to-accent-light bg-clip-text text-transparent">
              เปล่งประกายกลางเมือง?
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted"
        >
          ลงโฆษณาตรงกับผู้บริหารจอ ไม่ผ่านเอเจนซี่
          <br />
          เห็นราคาชัดเจน คำนวณเองได้ทันที
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 text-base font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_40px_rgba(74,144,255,0.3)]"
          >
            คำนวณราคา
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-10 py-4 text-base font-semibold text-white transition-all hover:border-accent/40 hover:bg-accent/5"
          >
            <Phone className="h-4 w-4" />
            ติดต่อเรา
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
