"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

const comparisonRows = [
  { label: "ราคา", agency: "บวกค่า margin 20-40%", direct: "ราคาจริงจากผู้บริหารจอ" },
  { label: "ความโปร่งใส", agency: "รอใบเสนอราคา 3-5 วัน", direct: "คำนวณราคาเองได้ทันที" },
  { label: "ความเร็ว", agency: "ผ่านหลายขั้นตอน", direct: "คุยตรง ขึ้นจอเร็ว" },
  { label: "Proof of Play", agency: "ไม่ได้ทุกราย", direct: "รายงานทุกแคมเปญ" },
  { label: "ค่าใช้จ่ายแอบแฝง", agency: "อาจมี service charge เพิ่ม", direct: "ไม่มี จ่ายตามที่เห็น" },
  { label: "ความยืดหยุ่น", agency: "เปลี่ยนงานยาก", direct: "เปลี่ยนชิ้นงานได้ระหว่างสัญญา" },
];

export function SolutionsPreview() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,144,255,0.06)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-5xl">
            ผ่านเอเจนซี่{" "}
            <span className="text-muted">vs</span>{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              ลงตรงกับเรา
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            เปรียบเทียบให้เห็นชัดๆ ทำไมลงตรงถึงคุ้มกว่า
          </p>
        </motion.div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          {/* Header row */}
          <div className="grid min-w-[600px] grid-cols-[1fr_1fr_1fr] border-b border-white/10 bg-surface/80">
            <div className="p-4 md:p-5" />
            <div className="border-l border-white/10 p-4 text-center md:p-5">
              <span className="text-sm font-semibold text-muted">
                ผ่านเอเจนซี่
              </span>
            </div>
            <div className="border-l border-accent/30 bg-accent/5 p-4 text-center md:p-5">
              <span className="text-sm font-bold text-accent">
                ลงตรงกับเรา
              </span>
            </div>
          </div>

          {/* Data rows */}
          {comparisonRows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`grid min-w-[600px] grid-cols-[1fr_1fr_1fr] ${
                i < comparisonRows.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <div className="flex items-center p-4 md:p-5">
                <span className="text-sm font-medium text-white">
                  {row.label}
                </span>
              </div>

              <div className="flex items-center gap-2 border-l border-white/5 p-4 md:p-5">
                <X className="h-4 w-4 flex-shrink-0 text-red-400/70" />
                <span className="text-sm text-muted">{row.agency}</span>
              </div>

              <div className="flex items-center gap-2 border-l border-accent/10 bg-accent/[0.03] p-4 md:p-5">
                <Check className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                <span className="text-sm font-medium text-white">
                  {row.direct}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-light"
          >
            ดูจอ LED ทั้งหมด
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
