"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Clock, Eye, Car, Compass, Maximize2, Monitor } from "lucide-react";
import { locations, galleryImages } from "@/lib/data";

export function LocationDetailClient() {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-24">
        <p className="text-muted">Location not found</p>
      </div>
    );
  }

  const otherLocations = locations.filter((l) => l.slug !== slug);

  const specs = [
    { icon: Maximize2, label: "Screen Size", value: location.screenSize },
    { icon: Monitor, label: "Resolution", value: location.resolution },
    { icon: Compass, label: "Orientation", value: location.orientation },
    { icon: Clock, label: "Operating Hours", value: location.operatingHours },
    { icon: Car, label: "Daily Traffic", value: location.dailyTraffic },
    { icon: Eye, label: "Daily Impressions", value: location.dailyImpressions },
    { icon: MapPin, label: "Visibility", value: location.visibility },
    { icon: Compass, label: "Directions", value: location.directions },
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
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-6xl">
                {location.nameEn}
              </h1>
              <p className="mt-2 text-lg text-muted">{location.name}, เชียงใหม่</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="border-t border-white/5 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-white/5 bg-[#0A0A0F]/50 p-5"
              >
                <spec.icon className="mb-3 h-5 w-5 text-accent" />
                <p className="text-xs font-medium tracking-wider text-muted uppercase">
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

      {/* Description */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
              เกี่ยวกับทำเลนี้
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {location.description}
            </p>
          </div>

          {/* Map placeholder */}
          <div className="relative h-[250px] overflow-hidden rounded-xl border border-white/5 bg-surface">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-accent/30" />
                <p className="text-xs text-muted">Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="border-t border-white/5 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="mb-8 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
            Gallery
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/5"
              >
                <Image
                  src={src}
                  alt={`${location.nameEn} gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertising Options */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="mb-8 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
          Advertising Options
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Slot Duration", items: ["15 วินาที", "30 วินาที", "60 วินาที"] },
            { title: "Loop Frequency", items: ["10 รอบ/วัน", "20 รอบ/วัน", "Custom"] },
            { title: "Booking Period", items: ["รายวัน", "รายสัปดาห์", "รายเดือน"] },
          ].map((option) => (
            <div
              key={option.title}
              className="rounded-xl border border-white/5 bg-surface p-6"
            >
              <h3 className="mb-4 text-sm font-semibold text-white">
                {option.title}
              </h3>
              <ul className="space-y-2">
                {option.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
          >
            สนใจทำเลนี้? ติดต่อเรา
          </Link>
        </div>
      </section>

      {/* Other Locations */}
      <section className="border-t border-white/5 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="mb-8 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
            ทำเลอื่น ๆ ในเครือข่าย
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0F]/50 transition-all hover:border-accent/20"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={loc.heroImage}
                    alt={loc.nameEn}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-white">
                    {loc.nameEn}
                  </h3>
                  <p className="mt-1 text-xs text-muted">{loc.name}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-muted">
                      {loc.dailyImpressions} /day
                    </span>
                    <ArrowRight className="h-3 w-3 text-muted group-hover:text-accent" />
                  </div>
                </div>
              </Link>
            ))}

            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 p-6 text-center">
              <p className="text-sm font-bold text-white">Coming Soon</p>
              <p className="mt-1 text-xs text-muted">ทำเลใหม่เร็ว ๆ นี้</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
