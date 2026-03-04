"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Clock,
  Eye,
  Car,
  Compass,
  Maximize2,
  Monitor,
  Calculator,
  ShieldCheck,
} from "lucide-react";
import { locations, slotDurations, galleryImages } from "@/lib/data";

export function ProductDetailClient() {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-24">
        <p className="text-muted">ไม่พบจอ LED นี้</p>
      </div>
    );
  }

  const otherLocations = locations.filter((l) => l.slug !== slug);
  const startingPrice = slotDurations[0]?.pricePerPlay[slug] ?? 0;

  const specs = [
    { icon: Maximize2, label: "ขนาดจอ", value: location.screenSize },
    { icon: Monitor, label: "ความละเอียด", value: location.resolution },
    { icon: Compass, label: "รูปแบบจอ", value: location.orientation },
    { icon: Clock, label: "เวลาทำการ", value: location.operatingHours },
    { icon: Car, label: "ปริมาณรถ/วัน", value: location.dailyTraffic },
    { icon: Eye, label: "การรับชม/วัน", value: location.dailyImpressions },
    { icon: MapPin, label: "ระยะมองเห็น", value: location.visibility },
    { icon: Compass, label: "ทิศทาง", value: location.directions },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden md:h-[60vh]">
        <Image
          src={location.heroImage}
          alt={location.nameEn}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0A0F]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 backdrop-blur-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span className="text-sm font-semibold text-accent">
                  ลงโฆษณาตรง ไม่ผ่านเอเจนซี่
                </span>
              </div>
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-6xl">
                {location.name}
              </h1>
              <p className="mt-2 text-lg text-muted">
                {location.nameEn} — เชียงใหม่
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-sm text-muted">เริ่มต้น</span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-accent">
                  ฿{startingPrice.toLocaleString()}
                </span>
                <span className="text-sm text-muted">/รอบ (15 วินาที)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-[#0A0A0F]/50 p-5"
              >
                <spec.icon className="mb-3 h-5 w-5 text-accent" />
                <p className="text-sm font-medium tracking-wider text-muted uppercase">
                  {spec.label}
                </p>
                <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description + Map */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
              เกี่ยวกับทำเลนี้
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {location.description}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/pricing?location=${slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
              >
                <Calculator className="h-4 w-4" />
                คำนวณราคาจอนี้
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent/30 hover:bg-accent/5"
              >
                สอบถามเพิ่มเติม
              </Link>
            </div>
          </div>

          <div className="relative h-[250px] overflow-hidden rounded-xl border border-white/10 bg-surface md:h-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-accent/60" />
                <p className="text-sm text-muted">Google Maps</p>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-accent hover:text-accent-light"
                >
                  เปิดใน Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="mb-8 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
            รูปภาพจอ LED
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10"
              >
                <Image
                  src={src}
                  alt={`${location.name} ภาพที่ ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-surface to-[#0A0A0F] mx-6 my-16 p-8 md:mx-auto md:max-w-7xl md:p-12 lg:px-14">
        <h2 className="mb-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-3xl">
          ตัวเลือกการลงโฆษณา
        </h2>
        <p className="mb-10 text-muted">
          เลือกสล็อต จำนวนรอบ และระยะเวลาที่เหมาะกับแคมเปญของคุณ
        </p>

        {/* Slot durations — accent-filled cards */}
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold tracking-wider text-white/60 uppercase">
            ความยาวสล็อต
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {slotDurations.map((s, i) => (
              <div
                key={s.duration}
                className={`rounded-2xl p-6 text-center ${
                  i === 1
                    ? "bg-accent/15 ring-1 ring-accent/40"
                    : "bg-white/[0.04] ring-1 ring-white/10"
                }`}
              >
                <p className="text-lg font-semibold text-white">
                  {s.label}
                </p>
                <p className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white">
                  ฿{(s.pricePerPlay[slug] ?? 0).toLocaleString()}
                </p>
                <p className="mt-1 text-muted">ต่อรอบ</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plays per day */}
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold tracking-wider text-white/60 uppercase">
            จำนวนรอบ/วัน
          </p>
          <div className="flex flex-wrap gap-3">
            {[10, 20, 30, 50].map((p) => (
              <div
                key={p}
                className="rounded-full bg-white/[0.06] px-6 py-3 ring-1 ring-white/10"
              >
                <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                  {p}
                </span>
                <span className="ml-1.5 text-muted">รอบ/วัน</span>
              </div>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className="mb-12">
          <p className="mb-4 text-sm font-semibold tracking-wider text-white/60 uppercase">
            ระยะเวลา & ส่วนลด
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "รายวัน", discount: "" },
              { label: "1 สัปดาห์", discount: "5%" },
              { label: "1 เดือน", discount: "15%" },
              { label: "3 เดือน", discount: "25%" },
              { label: "6 เดือน", discount: "30%" },
              { label: "12 เดือน", discount: "35%" },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-full px-5 py-2.5 ring-1 ${
                  item.discount
                    ? "bg-emerald-500/[0.08] ring-emerald-500/20"
                    : "bg-white/[0.04] ring-white/10"
                }`}
              >
                <span className="font-medium text-white">{item.label}</span>
                {item.discount && (
                  <span className="ml-2 font-bold text-emerald-400">
                    -{item.discount}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 border-t border-white/10 pt-10">
          <Link
            href={`/pricing?location=${slug}`}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
          >
            <Calculator className="h-5 w-5" />
            คำนวณราคาจอนี้
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-muted">
            เห็นราคาทันที ไม่ต้องรอใบเสนอราคา
          </p>
        </div>
      </section>

      {/* Other Products */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="mb-8 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
            จอ LED ทำเลอื่น
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/products/${loc.slug}`}
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0F]/50 transition-all hover:border-accent/20"
              >
                <div className="grid sm:grid-cols-5">
                  <div className="relative aspect-[16/9] overflow-hidden sm:col-span-2 sm:aspect-auto sm:min-h-[160px]">
                    <Image
                      src={loc.heroImage}
                      alt={loc.nameEn}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-5 sm:col-span-3">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                      {loc.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{loc.nameEn}</p>
                    <div className="mt-3 flex items-center gap-4 text-sm text-muted">
                      <span>
                        <Eye className="mr-1 inline h-3 w-3 text-accent" />
                        {loc.dailyImpressions}/วัน
                      </span>
                      <span>
                        <Car className="mr-1 inline h-3 w-3 text-accent" />
                        {loc.dailyTraffic}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-sm font-medium text-accent">
                      ดูสเปกและราคา
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="text-sm font-medium text-muted transition-colors hover:text-white"
            >
              ← กลับไปหน้าจอ LED ทั้งหมด
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
