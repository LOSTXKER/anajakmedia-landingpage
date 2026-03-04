"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/data";

export function NetworkLocations() {
  return (
    <section className="relative border-t border-white/5 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
                เครือข่ายของเรา
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-5xl">
                3 ทำเลยุทธศาสตร์
              </h2>
              <p className="mt-3 max-w-md text-muted">
                เครือข่ายจอ LED ที่เราบริหารโดยตรง ครอบคลุมจุดตัดหลักของเชียงใหม่
              </p>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-light"
            >
              ดูทั้งหมดพร้อมสเปก
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Staggered card layout — first card larger */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, i) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={i === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""}
            >
              <Link
                href={`/products/${location.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-white/5 transition-all hover:border-accent/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={location.heroImage}
                    alt={location.nameEn}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/40 to-transparent" />

                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 text-xs text-accent">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="font-medium">{location.nameEn}</span>
                    </div>
                    <h3 className="mt-1 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                      {location.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-sm text-white/80">
                        <Eye className="h-4 w-4 text-accent" />
                        <span className="font-semibold">
                          {location.dailyImpressions}
                        </span>
                        <span className="text-muted">/วัน</span>
                      </div>
                      <span className="text-muted">·</span>
                      <span className="text-sm text-muted">
                        {location.screenSize}
                      </span>
                    </div>

                    {/* Hover reveal CTA */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span>ดูสเปกและราคา</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
