"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calculator, ArrowRight, Check, Zap } from "lucide-react";

const perks = [
  "ราคาโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง",
  "ลด 10-20% เมื่อลงหลายทำเล",
  "ลดเพิ่มเมื่อลงระยะยาว",
  "เปลี่ยนชิ้นงานได้ระหว่างสัญญา",
];

export function PricingPreview() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,102,255,0.08)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left — headline & perks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
              ราคา
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-tight text-white md:text-5xl">
              คำนวณราคาเอง
              <br />
              <span className="text-muted">ใน 30 วินาที</span>
            </h2>
            <p className="mt-5 max-w-md text-muted">
              ไม่ต้องรอใบเสนอราคา เลือกจอ เลือกสล็อต กำหนดรอบ
              ระบบคำนวณให้ทันที
            </p>

            <ul className="mt-8 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <Check className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <span className="text-sm text-white/90">{perk}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — pricing teaser card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] via-surface to-surface p-8 md:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/10 blur-[80px]" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                    <Calculator className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      เครื่องคำนวณราคา
                    </p>
                    <p className="text-xs text-muted">
                      เห็นราคาจริงทันที ไม่มี markup
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-sm text-muted">เริ่มต้นเพียง</span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-5xl">
                    ฿120
                  </span>
                  <span className="text-sm text-muted">/รอบ</span>
                </div>

                <div className="mb-8 space-y-3 text-sm text-muted">
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                    <span>สล็อต 15 วินาที</span>
                    <span className="font-semibold text-white">
                      ฿120 – ฿150
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                    <span>สล็อต 30 วินาที</span>
                    <span className="font-semibold text-white">
                      ฿200 – ฿250
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                    <span>สล็อต 60 วินาที</span>
                    <span className="font-semibold text-white">
                      ฿360 – ฿450
                    </span>
                  </div>
                </div>

                <Link
                  href="/pricing"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
                >
                  <Zap className="h-4 w-4" />
                  คำนวณราคาเลย
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <p className="mt-4 text-center text-xs text-muted">
                  ราคาขึ้นอยู่กับทำเล ระยะเวลา และจำนวนรอบ
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
