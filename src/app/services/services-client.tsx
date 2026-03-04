"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, CheckCircle2, Check, X, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";

export function ServicesClient() {
  const service = services[0];

  return (
    <div className="min-h-screen pt-24">
      {/* Header — left-aligned */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[20%] top-0 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium tracking-[0.2em] text-accent uppercase"
            >
              บริการของเรา
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-6xl"
            >
              ลงโฆษณา
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                {" "}จอ LED
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 max-w-lg text-lg text-muted"
            >
              ลงโฆษณาตรงกับผู้บริหารจอ ไม่ผ่านเอเจนซี่ ราคาโปร่งใส
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Service */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 rounded-2xl border border-white/10 bg-surface p-8 md:grid-cols-2 md:p-12"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Monitor className="h-6 w-6 text-accent" />
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-3xl">
              {service.title}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              {service.description}
            </p>
            <ul className="mt-6 space-y-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-muted"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
              >
                คำนวณราคา
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 font-semibold text-white transition-all hover:border-accent/30 hover:bg-accent/5"
              >
                ดูจอ LED ทั้งหมด
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Compare OOH vs Digital */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            เปรียบเทียบ
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-4xl">
            ทำไมจอ LED ถึงคุ้มกว่า?
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            เปรียบเทียบสื่อโฆษณาจอ LED กับช่องทางอื่น
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-white/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-white/10 bg-surface">
                  <th className="px-6 py-4 font-medium text-muted">คุณสมบัติ</th>
                  <th className="px-6 py-4 font-bold text-accent">จอ LED Billboard</th>
                  <th className="px-6 py-4 font-medium text-muted">Facebook / IG Ads</th>
                  <th className="px-6 py-4 font-medium text-muted">ป้ายเหล็กทั่วไป</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "มองเห็นได้จริง 100%", led: true, social: false, static: true },
                  { feature: "ไม่ถูก Skip หรือ Block", led: true, social: false, static: true },
                  { feature: "เปลี่ยนชิ้นงานได้ทันที", led: true, social: true, static: false },
                  { feature: "แสดงได้ 24/7", led: true, social: true, static: "partial" },
                  { feature: "โฟกัสพื้นที่ได้", led: true, social: true, static: true },
                  { feature: "วัดผล Impressions", led: true, social: true, static: false },
                  { feature: "ภาพเคลื่อนไหว / วิดีโอ", led: true, social: true, static: false },
                  { feature: "ไม่ต้องพึ่ง Algorithm", led: true, social: false, static: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/10 last:border-0">
                    <td className="px-6 py-3.5 text-white">{row.feature}</td>
                    <td className="px-6 py-3.5">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </td>
                    <td className="px-6 py-3.5">
                      {row.social === true ? (
                        <Check className="h-5 w-5 text-white/40" />
                      ) : (
                        <X className="h-5 w-5 text-red-400/60" />
                      )}
                    </td>
                    <td className="px-6 py-3.5">
                      {row.static === true ? (
                        <Check className="h-5 w-5 text-white/40" />
                      ) : row.static === "partial" ? (
                        <Minus className="h-5 w-5 text-white/40" />
                      ) : (
                        <X className="h-5 w-5 text-red-400/60" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-4xl">
            ลงโฆษณาตรง ไม่ผ่านเอเจนซี่
          </h2>
          <p className="mt-4 text-muted">
            ปรึกษาฟรี ไม่มีค่าใช้จ่าย
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
            >
              คำนวณราคา
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/10 px-8 py-3.5 font-semibold text-white transition-all hover:border-accent/30 hover:bg-accent/5"
            >
              ปรึกษาฟรี
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
