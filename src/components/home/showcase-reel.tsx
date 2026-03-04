"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { campaigns } from "@/lib/data";

export function ShowcaseReel() {
  const doubled = [...campaigns, ...campaigns];

  return (
    <section className="overflow-hidden border-y border-white/5 bg-surface py-20 md:py-24">
      <div className="mb-10 flex items-end justify-between px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            ผลงานของเรา
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-4xl">
            แคมเปญบนจอ LED
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/showcase"
            className="group hidden items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-light md:inline-flex"
          >
            ดูทั้งหมด
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <div className="relative">
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

        <motion.div
          animate={{ x: [0, -50 * campaigns.length * 16] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-5"
          style={{ width: "max-content" }}
        >
          {doubled.map((campaign, i) => (
            <div
              key={`${campaign.slug}-${i}`}
              className="group relative h-[280px] w-[420px] flex-shrink-0 overflow-hidden rounded-xl md:h-[320px] md:w-[480px]"
            >
              <Image
                src={campaign.image}
                alt={`${campaign.brand} — ${campaign.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium tracking-wider text-accent uppercase">
                  {campaign.location}
                </p>
                <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                  {campaign.brand}
                </p>
                <p className="text-sm text-white/70">{campaign.title}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
