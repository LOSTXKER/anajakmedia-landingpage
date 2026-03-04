"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  Eye,
  Car,
  Clock,
  Maximize2,
  Compass,
  ArrowRight,
  Calculator,
  MapPin,
} from "lucide-react";
import { locations, slotDurations } from "@/lib/data";

const specIcons: Record<string, typeof Monitor> = {
  screenSize: Maximize2,
  resolution: Monitor,
  orientation: Compass,
  operatingHours: Clock,
  dailyTraffic: Car,
  dailyImpressions: Eye,
};

function getStartingPrice(slug: string) {
  const slot = slotDurations[0];
  return slot.pricePerPlay[slug] ?? 0;
}

export function ProductsClient() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium tracking-[0.2em] text-accent uppercase"
          >
            จอ LED ของเรา
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-6xl"
          >
            เลือกจอ LED ที่ใช่
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-lg text-muted"
          >
            เครือข่ายจอ LED 3 ทำเลยุทธศาสตร์ที่เราบริหารโดยตรง
            เลือกทำเลที่เหมาะกับกลุ่มเป้าหมายของคุณ
          </motion.p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="space-y-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-surface"
            >
              <div className="grid md:grid-cols-5">
                {/* Image */}
                <div className="relative aspect-[16/9] md:col-span-2 md:aspect-auto md:min-h-[380px]">
                  <Image
                    src={loc.heroImage}
                    alt={loc.nameEn}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0F]/30 md:bg-gradient-to-r md:from-transparent md:to-surface" />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between p-6 md:col-span-3 md:p-8">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-3xl">
                          {loc.nameEn}
                        </h2>
                        <div className="mt-1 flex items-center gap-2 text-sm text-muted">
                          <MapPin className="h-3.5 w-3.5" />
                          {loc.name}, เชียงใหม่
                        </div>
                      </div>
                      <div className="hidden text-right sm:block">
                        <p className="text-sm text-muted">เริ่มต้น</p>
                        <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-accent">
                          ฿{getStartingPrice(loc.slug).toLocaleString()}
                        </p>
                        <p className="text-sm text-muted">/รอบ (15 วินาที)</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {loc.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {[
                        { key: "screenSize", label: "ขนาดจอ", value: loc.screenSize },
                        { key: "dailyImpressions", label: "Impressions/วัน", value: loc.dailyImpressions },
                        { key: "dailyTraffic", label: "ปริมาณรถ", value: loc.dailyTraffic },
                        { key: "resolution", label: "ความละเอียด", value: loc.resolution },
                        { key: "operatingHours", label: "เวลาทำการ", value: loc.operatingHours },
                        { key: "orientation", label: "มองเห็นได้", value: `${loc.directions} ${loc.visibility}` },
                      ].map((spec) => {
                        const Icon = specIcons[spec.key] ?? Monitor;
                        return (
                          <div
                            key={spec.key}
                            className="rounded-lg border border-white/10 bg-[#0A0A0F]/50 p-3"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="h-3.5 w-3.5 text-accent" />
                              <span className="text-sm font-medium tracking-wider text-muted uppercase">
                                {spec.label}
                              </span>
                            </div>
                            <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-white">
                              {spec.value}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Mobile price */}
                    <div className="mt-4 flex items-baseline gap-2 sm:hidden">
                      <span className="text-sm text-muted">เริ่มต้น</span>
                      <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-accent">
                        ฿{getStartingPrice(loc.slug).toLocaleString()}
                      </span>
                      <span className="text-sm text-muted">/รอบ (15 วินาที)</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/pricing?location=${loc.slug}`}
                      className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
                    >
                      <Calculator className="h-4 w-4" />
                      คำนวณราคา
                    </Link>
                    <Link
                      href={`/products/${loc.slug}`}
                      className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent/30 hover:bg-accent/5"
                    >
                      ดูรายละเอียด
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Compare */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-4xl">
            เปรียบเทียบจอทั้ง 3 ทำเล
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-white/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-surface">
                  <th className="px-6 py-4 font-medium text-muted">สเปก</th>
                  {locations.map((loc) => (
                    <th
                      key={loc.slug}
                      className="px-6 py-4 font-bold text-white"
                    >
                      <div>{loc.nameEn}</div>
                      <div className="mt-0.5 text-sm font-normal text-muted">
                        {loc.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "ขนาดจอ", key: "screenSize" as const },
                  { label: "ความละเอียด", key: "resolution" as const },
                  { label: "Impressions/วัน", key: "dailyImpressions" as const },
                  { label: "ปริมาณรถ/วัน", key: "dailyTraffic" as const },
                  { label: "มองเห็น", key: "visibility" as const },
                  { label: "ทิศทาง", key: "directions" as const },
                  { label: "เวลาทำการ", key: "operatingHours" as const },
                ].map((row) => (
                  <tr
                    key={row.key}
                    className="border-b border-white/10 last:border-0"
                  >
                    <td className="px-6 py-3.5 text-muted">{row.label}</td>
                    {locations.map((loc) => (
                      <td
                        key={loc.slug}
                        className="px-6 py-3.5 font-medium text-white"
                      >
                        {loc[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-b border-white/10">
                  <td className="px-6 py-3.5 text-muted">
                    ราคาเริ่มต้น/รอบ
                  </td>
                  {locations.map((loc) => (
                    <td
                      key={loc.slug}
                      className="px-6 py-3.5 font-[family-name:var(--font-space-grotesk)] font-bold text-accent"
                    >
                      ฿{getStartingPrice(loc.slug).toLocaleString()}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Multi-Location CTA */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-4xl">
            ลงครบ 3 ทำเล ลด 20%
          </h2>
          <p className="mt-4 text-muted">
            เลือก Multi-Location Package ครอบคลุมทั้งเชียงใหม่ พร้อมส่วนลดพิเศษ
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/pricing?location=rinkhom&location=saengtawan&location=ruamchok"
              className="flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
            >
              <Calculator className="h-4 w-4" />
              คำนวณราคา 3 ทำเล
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-accent/30 hover:bg-accent/5"
            >
              ปรึกษาฟรี
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
