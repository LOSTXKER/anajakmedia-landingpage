"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Building2,
  Stethoscope,
  PartyPopper,
  Car,
  GraduationCap,
  ShoppingBag,
  Hotel,
} from "lucide-react";

const categories = [
  { icon: UtensilsCrossed, label: "ร้านอาหาร & คาเฟ่" },
  { icon: Building2, label: "อสังหาริมทรัพย์" },
  { icon: Stethoscope, label: "คลินิก & โรงพยาบาล" },
  { icon: PartyPopper, label: "อีเวนต์ & เทศกาล" },
  { icon: Car, label: "ยานยนต์" },
  { icon: GraduationCap, label: "สถาบันการศึกษา" },
  { icon: ShoppingBag, label: "ค้าปลีก & แฟชั่น" },
  { icon: Hotel, label: "โรงแรม & ท่องเที่ยว" },
];

export function TrustedBy() {
  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            ธุรกิจที่ใช้บริการ
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-4xl">
            หลากหลายธุรกิจไว้วางใจเรา
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-surface p-5 text-center transition-all hover:border-accent/20"
            >
              <cat.icon className="h-6 w-6 text-accent" />
              <span className="text-xs font-medium text-muted">
                {cat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
