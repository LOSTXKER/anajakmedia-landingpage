"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Bell } from "lucide-react";
import { locations } from "@/lib/data";

export function LocationsClient() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium tracking-[0.2em] text-accent uppercase"
          >
            Our Network
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-6xl"
          >
            Locations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-muted"
          >
            เครือข่ายจอ LED ดิจิทัล 3 ทำเลยุทธศาสตร์ ครอบคลุมเชียงใหม่
          </motion.p>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative h-[300px] overflow-hidden rounded-2xl border border-white/5 bg-surface md:h-[400px]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,144,255,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-3 h-10 w-10 text-accent/30" />
              <p className="text-sm text-muted">Interactive Map</p>
              <p className="text-xs text-muted/60">แผนที่จะแสดงเมื่อใส่ Google Maps API</p>
            </div>
          </div>

          {/* Simulated pins */}
          {locations.map((loc, i) => {
            const positions = [
              { top: "40%", left: "45%" },
              { top: "30%", left: "60%" },
              { top: "55%", left: "35%" },
            ];
            const pos = positions[i];
            return (
              <div
                key={loc.slug}
                className="absolute"
                style={{ top: pos.top, left: pos.left }}
              >
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(74,144,255,0.6)]" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-surface/90 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    {loc.nameEn}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* Location Cards */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {locations.map((location, i) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <Link
                href={`/locations/${location.slug}`}
                className="group block overflow-hidden rounded-2xl border border-white/5 bg-surface transition-all hover:border-accent/20"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={location.heroImage}
                    alt={location.nameEn}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                    {location.nameEn}
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    {location.name}, เชียงใหม่
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {location.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex gap-6">
                      <div>
                        <p className="text-xs text-muted">Impressions</p>
                        <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-white">
                          {location.dailyImpressions}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted">Screen</p>
                        <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-white">
                          {location.orientation}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 p-12 text-center"
          >
            <Bell className="mb-4 h-10 w-10 text-muted" />
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
              Coming Soon
            </h3>
            <p className="mt-2 text-sm text-muted">
              ทำเลใหม่กำลังจะมา ลงทะเบียนรับข่าวสารก่อนใคร
            </p>
            <button className="mt-6 rounded-full border border-white/10 px-6 py-2.5 text-sm font-medium text-muted transition-all hover:border-accent/30 hover:text-white">
              ลงทะเบียน
            </button>
          </motion.div>
        </div>
      </section>

      {/* Multi-Location CTA */}
      <section className="border-t border-white/5 bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-4xl">
            ลงครบ 3 ทำเล ครอบคลุมทั้งเชียงใหม่
          </h2>
          <p className="mt-4 text-muted">
            แพ็กเกจ Multi-Location เข้าถึงคนได้มากกว่า 150,000 ครั้งต่อวัน
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
          >
            ติดต่อสอบถาม
          </Link>
        </div>
      </section>
    </div>
  );
}
