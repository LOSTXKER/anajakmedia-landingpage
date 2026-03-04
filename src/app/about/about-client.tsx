"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Eye,
  BarChart3,
  Shield,
  Clock,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";

const milestones = [
  { year: "2550", event: "ก่อตั้งบริษัท เริ่มธุรกิจสื่อโฆษณากลางแจ้ง" },
  { year: "2558", event: "ติดตั้งจอ LED แรก ณ แยกรินคำ ใจกลางเชียงใหม่" },
  { year: "2563", event: "ขยายเครือข่ายครอบคลุม 3 ทำเลยุทธศาสตร์" },
  { year: "2567", event: "เปิดตัวระบบคำนวณราคาออนไลน์ ลงโฆษณาตรงไม่ผ่านตัวแทน" },
];

const strengths = [
  {
    icon: Shield,
    title: "ประสบการณ์กว่า 17 ปี",
    description: "จดทะเบียนตั้งแต่ปี 2550 เราบริหารจอ LED โดยตรง",
  },
  {
    icon: MapPin,
    title: "ทำเลดีที่สุดในเชียงใหม่",
    description: "จุดตัดหลักที่มีปริมาณรถหนาแน่นที่สุด",
  },
  {
    icon: Users,
    title: "ครอบคลุม 3 แยกยุทธศาสตร์",
    description: "เข้าถึงผู้คนกว่า 150,000 ครั้งต่อวัน",
  },
  {
    icon: Zap,
    title: "ลงโฆษณาตรง ไม่ผ่านตัวแทน",
    description: "ราคาโปร่งใส คำนวณเองได้ทันที",
  },
  {
    icon: Clock,
    title: "เริ่มได้ทันที",
    description: "ตอบกลับภายใน 24 ชั่วโมง พร้อมเริ่มแคมเปญได้เลย",
  },
  {
    icon: BarChart3,
    title: "วัดผลได้จริง",
    description: "Proof of Play และ Impression Report ทุกแคมเปญ",
  },
];

const coreValues = [
  {
    icon: MapPin,
    title: "ทำเลระดับพรีเมียม",
    description:
      "เราเลือกเฉพาะทำเลที่ดีที่สุด จุดตัดหลักที่มีปริมาณรถและคนสูงสุด",
  },
  {
    icon: Eye,
    title: "ผลกระทบทางสายตาสูง",
    description:
      "ทุก Campaign ต้องสวยและทรงพลัง สร้างการจดจำให้แบรนด์",
  },
  {
    icon: BarChart3,
    title: "ขับเคลื่อนด้วยข้อมูล",
    description:
      "วัดผลได้ เห็นตัวเลขจริง รายงาน Proof of Play ทุกแคมเปญ",
  },
];

export function AboutClient() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero — two-column with image */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left — text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-medium tracking-[0.2em] text-accent uppercase"
              >
                เกี่ยวกับเรา
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight text-white md:text-6xl"
              >
                ผู้บริหารเครือข่าย
                <br />
                <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                  จอ LED เชียงใหม่
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
              >
                เราไม่ใช่เอเจนซี่สื่อ เราคือผู้บริหารจอ LED โดยตรง
                ดำเนินธุรกิจสื่อโฆษณามากว่า 17 ปี ตั้งแต่ปี 2550
              </motion.p>
            </div>

            {/* Right — hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/locations/rinkhom-hero.jpg"
                alt="จอ LED แยกรินคำ เชียงใหม่"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story + Timeline — with image */}
      <section className="border-t border-white/10 bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Left — story + image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-4xl">
                เรื่องราวของเรา
              </h2>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  ด้วยประสบการณ์ที่สั่งสมมา เราคัดเลือกทำเลที่ดีที่สุด 3
                  จุดตัดหลักของเชียงใหม่ และบริหารจอทุกจอด้วยตัวเอง
                  ลูกค้าติดต่อเราตรงๆ ไม่ต้องผ่านตัวแทน
                </p>
                <p>
                  เป้าหมายของเราคือการขยายเครือข่ายจอ LED
                  ให้ครอบคลุมพื้นที่สำคัญทั่วภาคเหนือ
                  เพื่อให้แบรนด์ทุกระดับเข้าถึงผู้คนได้โดยตรง
                </p>
              </div>

              {/* Inline image */}
              <div className="mt-8 overflow-hidden rounded-xl">
                <Image
                  src="/images/locations/saengtawan-hero.jpg"
                  alt="จอ LED แยกแสงตะวัน เชียงใหม่"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right — timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative pl-8">
                <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />
                <div className="space-y-8">
                  {milestones.map((m, i) => (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute -left-8 top-1.5 h-[10px] w-[10px] rounded-full border-2 border-accent bg-background" />
                      <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-accent">
                        {m.year}
                      </p>
                      <p className="mt-1 text-muted">{m.event}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Second inline image */}
              <div className="mt-10 overflow-hidden rounded-xl">
                <Image
                  src="/images/locations/ruamchok-hero.jpg"
                  alt="จอ LED แยกรวมโชค เชียงใหม่"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-width image strip */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
          {[
            "/images/gallery/gallery-1.jpg",
            "/images/gallery/gallery-2.jpg",
            "/images/gallery/gallery-3.jpg",
          ].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[16/9]"
            >
              <Image
                src={src}
                alt={`ผลงานบนจอ LED ${i + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-4xl"
          >
            ค่านิยมของเรา
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-8"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent-light" />
                <value.icon className="mb-4 h-7 w-7 text-accent" />
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-white/10 bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-4xl">
              ทำไมต้อง Anajak Media
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group rounded-2xl border border-white/10 bg-[#0A0A0F]/50 p-6 transition-all hover:border-accent/20"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {[
            { value: "17+", label: "ปีประสบการณ์" },
            { value: "3", label: "ทำเลยุทธศาสตร์" },
            { value: "150K+", label: "การมองเห็น/วัน" },
            { value: "24/7", label: "เปิดตลอดเวลา" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-10 text-center"
            >
              <p className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-5xl"
          >
            พร้อมเริ่มต้นกับเรา?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
            >
              คำนวณราคา
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-8 py-3.5 font-semibold text-white transition-all hover:border-accent/40 hover:bg-accent/5"
            >
              ติดต่อเรา
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
