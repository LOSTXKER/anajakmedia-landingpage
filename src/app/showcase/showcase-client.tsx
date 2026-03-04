"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { campaigns } from "@/lib/data";
import Link from "next/link";

const categories = ["ทั้งหมด", "อีเวนต์", "อาหาร", "อสังหาริมทรัพย์", "แฟชั่น", "เทคโนโลยี", "ยานยนต์"];
const locationFilters = ["ทุกทำเล", "แยกรินคำ", "แยกแสงตะวัน", "แยกรวมโชค"];

export function ShowcaseClient() {
  const [activeCategory, setActiveCategory] = useState("ทั้งหมด");
  const [activeLocation, setActiveLocation] = useState("ทุกทำเล");

  const filtered = campaigns.filter((c) => {
    const matchCategory = activeCategory === "ทั้งหมด" || c.category === activeCategory;
    const matchLocation = activeLocation === "ทุกทำเล" || c.location === activeLocation;
    return matchCategory && matchLocation;
  });

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
            ผลงานของเรา
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-6xl"
          >
            ผลงานบนจอ LED
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-muted"
          >
            ผลงานแคมเปญที่ผ่านมาจากเครือข่ายจอ LED ทั้ง 3 ทำเล
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl space-y-4 px-6 lg:px-8">
        {/* Location filter */}
        <div className="flex flex-wrap justify-center gap-2">
          <span className="flex items-center text-sm font-medium tracking-wider text-muted uppercase mr-2">
            <MapPin className="mr-1 h-3 w-3" /> ทำเล:
          </span>
          {locationFilters.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeLocation === loc
                  ? "bg-accent/20 text-accent border border-accent/30"
                  : "border border-white/10 text-muted hover:border-accent/30 hover:text-white"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "border border-white/10 text-muted hover:border-accent/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="columns-1 gap-4 sm:columns-2 lg:columns-3"
          >
            {filtered.map((campaign, i) => {
              const heights = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[4/5]", "aspect-[16/9]"];
              const height = heights[i % heights.length];

              return (
                <motion.div
                  key={campaign.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="mb-4 break-inside-avoid"
                >
                  <Link
                    href={`/showcase/${campaign.slug}`}
                    className="group block overflow-hidden rounded-xl border border-white/10 bg-surface transition-all hover:border-accent/20"
                  >
                    <div
                      className={`${height} relative overflow-hidden`}
                    >
                      <Image
                        src={campaign.image}
                        alt={`${campaign.brand} — ${campaign.title}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="flex items-center gap-1 text-sm text-accent">
                          <MapPin className="h-3 w-3" />
                          {campaign.location}
                        </div>
                        <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white">
                          {campaign.brand}
                        </p>
                        <p className="text-sm text-muted">{campaign.title}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
