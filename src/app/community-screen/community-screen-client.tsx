"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Camera,
  Upload,
  CreditCard,
  Monitor,
  Heart,
  Store,
  Users,
  Building2,
  MapPin,
  Car,
  Eye,
  Clock,
  ChevronDown,
  MessageCircle,
  Send,
  Star,
  ArrowRight,
  Image,
  QrCode,
  CheckCircle2,
  Play,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

/* ─── Color tokens ─── */
const cyan = "#00D4FF";
const purple = "#7B2FFF";
const pink = "#FF2D78";

/* ─── Data ─── */
const packages = [
  {
    name: "ลงจอ 1 รอบ",
    price: "50–99",
    unit: "฿/รอบ",
    desc: "15 วินาที ฉาย 1 ครั้ง",
    fit: "ลองเล่น แกล้งเพื่อน",
    color: cyan,
    popular: false,
  },
  {
    name: "โปรโมทร้านค้า",
    price: "199",
    unit: "฿",
    desc: "เทมเพลตสวย + QR Code",
    fit: "ร้านค้าเล็ก Influencer",
    color: purple,
    popular: false,
  },
  {
    name: "HBD / โปรเจกต์ศิลปิน",
    price: "499",
    unit: "฿",
    desc: "วนขึ้น 10 รอบตลอดวัน",
    fit: "Fandom วันเกิดศิลปิน",
    color: pink,
    popular: true,
  },
  {
    name: "Fast Track (ลัดคิว)",
    price: "+50",
    unit: "฿",
    desc: "ขึ้นจอภายใน 5 นาที",
    fit: "อยู่ตรงแยกพอดี รอไม่ไหว",
    color: cyan,
    popular: false,
  },
];

const steps = [
  {
    icon: Sparkles,
    title: "เลือกแพ็กเกจ",
    desc: "เลือกสิ่งที่อยากทำ — อวยพร โปรโมท หรืออัปโหลดเอง",
  },
  {
    icon: Upload,
    title: "สร้างคอนเทนต์",
    desc: "ใช้เทมเพลตสำเร็จรูป หรืออัปโหลดไฟล์เอง",
  },
  {
    icon: CreditCard,
    title: "จ่ายเงิน",
    desc: "สแกน PromptPay QR จบในขั้นตอนเดียว",
  },
  {
    icon: Monitor,
    title: "ขึ้นจอ!",
    desc: "รอแอดมิน Approve แล้วขึ้นจอตามคิว + ได้หลักฐาน",
  },
];

const audiences = [
  {
    icon: Heart,
    group: "Fandom / ติ่ง",
    behavior: "โปรเจกต์วันเกิดศิลปิน กำลังซื้อสูง",
    pkg: "HBD 499 ฿",
    color: pink,
  },
  {
    icon: Users,
    group: "วัยรุ่น / นักศึกษา มช.",
    behavior: "แกล้งเพื่อน อวยพรวันเกิด บอกรัก",
    pkg: "Pay-per-Play 50–99 ฿",
    color: cyan,
  },
  {
    icon: Store,
    group: "Influencer / พ่อค้าแม่ค้า",
    behavior: "โปรโมทร้าน สร้างโปรไฟล์",
    pkg: "โปรโมทร้าน 199 ฿",
    color: purple,
  },
  {
    icon: Building2,
    group: "องค์กร / SME",
    behavior: "โฆษณาระยะยาว",
    pkg: "B2B แพ็กเกจ (เร็วๆ นี้)",
    color: cyan,
  },
];

const faqs = [
  {
    q: "ภาพจะขึ้นจอนานแค่ไหน?",
    a: "สล็อตละ 15 วินาที แพ็กเกจ HBD จะวนขึ้น 10 รอบตลอดทั้งวัน",
  },
  {
    q: "ต้องรอนานไหมกว่าจะขึ้นจอ?",
    a: "ปกติไม่เกิน 1 ชั่วโมงหลังจาก Approve ถ้าเลือก Fast Track ขึ้นภายใน 5 นาที",
  },
  {
    q: "อัปโหลดไฟล์อะไรได้บ้าง?",
    a: "JPG, PNG (ภาพนิ่ง) และ MP4 (วิดีโอไม่เกิน 15 หรือ 30 วินาที)",
  },
  {
    q: "ถ้าภาพไม่ผ่าน Approve จะได้เงินคืนไหม?",
    a: "ได้คืน 100% อัตโนมัติ พร้อมแจ้งเหตุผลการปฏิเสธ",
  },
  {
    q: "สามารถเลือกเวลาที่จะขึ้นจอได้ไหม?",
    a: "ในเวอร์ชันแรกจะเป็นระบบคิว เวอร์ชันถัดไปจะเพิ่มการจองช่วงเวลาได้",
  },
  {
    q: "มีหลักฐานยืนยันไหมว่าภาพขึ้นจอจริง?",
    a: "มีครับ ระบบ Proof of Play จะถ่ายภาพจากกล้องขณะคอนเทนต์กำลังฉาย พร้อม Log เวลา",
  },
];

const locationStats = [
  { icon: Eye, value: "50,000+", label: "คนเห็นต่อวัน" },
  { icon: Car, value: "30,000+", label: "คันรถ/วัน" },
  { icon: MapPin, value: "ใจกลางเมือง", label: "แยกรินคำ" },
  { icon: Clock, value: "24 ชม.", label: "เปิดตลอด" },
];

/* ─── FAQ Accordion Item ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 font-medium text-white">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted">{a}</p>
      </motion.div>
    </div>
  );
}

/* ─── Main Client Component ─── */
export function CommunityScreenClient() {
  return (
    <main className="min-h-screen">
      {/* ━━━ HERO ━━━ */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-[30%] top-[5%] h-[600px] w-[600px] rounded-full blur-[150px]"
            style={{ background: `${cyan}10` }}
          />
          <div
            className="absolute -right-[20%] bottom-[10%] h-[500px] w-[500px] rounded-full blur-[120px]"
            style={{ background: `${purple}10` }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
            style={{ background: `${pink}08` }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FF2D78]/10 px-4 py-1.5 ring-1 ring-[#FF2D78]/30">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D78] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2D78]" />
              </span>
              <span className="text-sm font-semibold text-[#FF2D78]">
                เร็วๆ นี้
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              อยากให้ใครเห็น?
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${cyan}, ${purple})`,
                }}
              >
                ลงจอยักษ์กลางเชียงใหม่
              </span>
            </h1>

            <p className="mt-5 text-xl text-muted md:text-2xl">
              อวยพรวันเกิด โปรโมทร้าน โชว์โปรเจกต์{" "}
              <span className="font-semibold text-white">
                ง่ายแค่ 3 ขั้นตอน เริ่มต้นแค่ 50 บาท
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Sparkles, text: "เริ่มต้น 50 บาท" },
                { icon: Zap, text: "Self-service สั่งเอง" },
                { icon: Camera, text: "Proof of Play ได้หลักฐาน" },
              ].map((h) => (
                <div
                  key={h.text}
                  className="flex items-center gap-2 rounded-full bg-white/[0.05] px-4 py-2 ring-1 ring-white/10"
                >
                  <h.icon className="h-4 w-4" style={{ color: cyan }} />
                  <span className="text-sm font-medium text-white">
                    {h.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#packages"
                className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${cyan}, ${purple})`,
                }}
              >
                ดูแพ็กเกจ & ราคา
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white ring-1 ring-white/20 transition-all hover:bg-white/5"
              >
                ดูวิธีใช้งาน
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ PACKAGES ━━━ */}
      <section id="packages" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: cyan }}
            >
              แพ็กเกจ & ราคา
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-4xl">
              เลือกแบบที่ใช่สำหรับคุณ
            </h2>
            <p className="mt-3 text-lg text-muted">
              ไม่ว่าจะแค่ลองเล่นหรือจัดเต็ม เรามีแพ็กเกจที่เหมาะกับทุกคน
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border p-6 transition-all hover:scale-[1.02] ${
                  pkg.popular
                    ? "border-[#FF2D78]/30 bg-[#FF2D78]/[0.05]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-[#FF2D78] px-3 py-1 text-xs font-bold text-white">
                    <Star className="h-3 w-3" />
                    ยอดนิยม
                  </div>
                )}
                <p className="text-sm font-semibold text-muted">{pkg.fit}</p>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {pkg.name}
                </h3>
                <p
                  className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold"
                  style={{ color: pkg.color }}
                >
                  {pkg.price}
                  <span className="ml-1 text-base font-normal text-muted">
                    {pkg.unit}
                  </span>
                </p>
                <p className="mt-3 text-muted">{pkg.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center text-muted"
          >
            <span className="font-semibold text-white">B2B แพ็กเกจองค์กร</span>{" "}
            — เหมาช่วงเวลา รายสัปดาห์/เดือน สำหรับแบรนด์ &amp; SME{" "}
            <span style={{ color: cyan }}>(Phase 2)</span>
          </motion.div>
        </div>
      </section>

      {/* ━━━ HOW IT WORKS ━━━ */}
      <section
        id="how-it-works"
        className="relative border-y border-white/5 bg-surface/50 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: purple }}
            >
              วิธีใช้งาน
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-4xl">
              ง่ายแค่ 4 ขั้นตอน
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-[calc(100%-3rem)] translate-x-1/2 bg-gradient-to-r from-white/10 to-transparent lg:block" />
                )}
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${cyan}20, ${purple}20)`,
                  }}
                >
                  <step.icon className="h-6 w-6" style={{ color: cyan }} />
                </div>
                <div
                  className="mb-2 font-[family-name:var(--font-space-grotesk)] text-sm font-bold"
                  style={{ color: cyan }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-1 text-muted">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ UX/UI PREVIEW ━━━ */}
      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-[150px]"
            style={{ background: `${purple}08` }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <Smartphone className="h-5 w-5" style={{ color: cyan }} />
              <p
                className="text-sm font-semibold tracking-wider uppercase"
                style={{ color: cyan }}
              >
                ตัวอย่าง UX/UI
              </p>
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-4xl">
              สั่งง่ายเหมือนสั่งอาหาร
            </h2>
            <p className="mt-3 text-lg text-muted">
              ดูตัวอย่างหน้าจอจริงที่ลูกค้าจะได้ใช้งาน — ออกแบบมาให้ง่ายที่สุด
            </p>
          </motion.div>

          {/* Phone Mockups Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Screen 1: เลือกแพ็กเกจ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className="mb-4 text-sm font-bold" style={{ color: cyan }}>
                หน้าจอที่ 1
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D0D1A] shadow-2xl">
                {/* Phone status bar */}
                <div className="flex items-center justify-between bg-[#0D0D1A] px-5 pt-3 pb-2">
                  <span className="text-xs text-white/40">9:41</span>
                  <div className="mx-auto h-5 w-20 rounded-full bg-white/10" />
                  <span className="text-xs text-white/40">100%</span>
                </div>
                {/* Screen content */}
                <div className="space-y-3 px-4 pb-5">
                  <p className="text-center text-sm font-bold text-white">
                    เลือกแพ็กเกจ
                  </p>
                  <div className="rounded-xl p-3 ring-1 ring-[#00D4FF]/30" style={{ background: `${cyan}08` }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Play className="h-4 w-4" style={{ color: cyan }} />
                        <span className="text-sm font-semibold text-white">ลงจอ 1 รอบ</span>
                      </div>
                      <span className="text-sm font-bold" style={{ color: cyan }}>฿50</span>
                    </div>
                    <p className="mt-1 text-xs text-white/50">15 วินาที ฉาย 1 ครั้ง</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Store className="h-4 w-4" style={{ color: purple }} />
                        <span className="text-sm font-semibold text-white">โปรโมทร้าน</span>
                      </div>
                      <span className="text-sm font-bold" style={{ color: purple }}>฿199</span>
                    </div>
                    <p className="mt-1 text-xs text-white/50">เทมเพลต + QR Code</p>
                  </div>
                  <div className="rounded-xl p-3 ring-1 ring-[#FF2D78]/30" style={{ background: `${pink}08` }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4" style={{ color: pink }} />
                        <span className="text-sm font-semibold text-white">HBD ศิลปิน</span>
                      </div>
                      <span className="text-sm font-bold" style={{ color: pink }}>฿499</span>
                    </div>
                    <p className="mt-1 text-xs text-white/50">วนขึ้น 10 รอบตลอดวัน</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4" style={{ color: cyan }} />
                        <span className="text-sm font-semibold text-white">Fast Track</span>
                      </div>
                      <span className="text-sm font-bold" style={{ color: cyan }}>+฿50</span>
                    </div>
                    <p className="mt-1 text-xs text-white/50">ลัดคิว ขึ้นภายใน 5 นาที</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-white">เลือกแพ็กเกจ</p>
              <p className="mt-0.5 text-sm text-muted">แตะเลือกสิ่งที่อยากทำ</p>
            </motion.div>

            {/* Screen 2: สร้างคอนเทนต์ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="mb-4 text-sm font-bold" style={{ color: cyan }}>
                หน้าจอที่ 2
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D0D1A] shadow-2xl">
                <div className="flex items-center justify-between bg-[#0D0D1A] px-5 pt-3 pb-2">
                  <span className="text-xs text-white/40">9:41</span>
                  <div className="mx-auto h-5 w-20 rounded-full bg-white/10" />
                  <span className="text-xs text-white/40">100%</span>
                </div>
                <div className="space-y-3 px-4 pb-5">
                  <p className="text-center text-sm font-bold text-white">
                    สร้างคอนเทนต์
                  </p>
                  {/* Template selector */}
                  <p className="text-xs font-semibold text-white/50 uppercase">เลือกเทมเพลต</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl ring-2 ring-[#00D4FF]/50 overflow-hidden">
                      <div className="flex aspect-[4/3] items-center justify-center" style={{ background: `linear-gradient(135deg, ${cyan}20, ${purple}20)` }}>
                        <Heart className="h-8 w-8" style={{ color: pink }} />
                      </div>
                      <p className="bg-white/[0.04] px-2 py-1.5 text-center text-xs font-medium text-white">HBD</p>
                    </div>
                    <div className="rounded-xl ring-1 ring-white/10 overflow-hidden">
                      <div className="flex aspect-[4/3] items-center justify-center bg-white/[0.03]">
                        <Store className="h-8 w-8 text-white/20" />
                      </div>
                      <p className="bg-white/[0.04] px-2 py-1.5 text-center text-xs font-medium text-white/50">ร้านค้า</p>
                    </div>
                  </div>
                  {/* Upload area */}
                  <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-4">
                    <Image className="h-6 w-6 text-white/30" />
                    <p className="text-xs text-white/40">อัปโหลดรูปของคุณ</p>
                  </div>
                  {/* Text input mock */}
                  <div className="rounded-xl bg-white/[0.04] px-3 py-2.5 ring-1 ring-white/10">
                    <p className="text-xs text-white/30">พิมพ์ข้อความอวยพร...</p>
                  </div>
                  <div
                    className="rounded-xl py-2.5 text-center text-sm font-semibold text-white"
                    style={{ backgroundImage: `linear-gradient(135deg, ${cyan}, ${purple})` }}
                  >
                    ดูตัวอย่าง
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-white">สร้างคอนเทนต์</p>
              <p className="mt-0.5 text-sm text-muted">เลือกเทมเพลตหรืออัปโหลดเอง</p>
            </motion.div>

            {/* Screen 3: ชำระเงิน */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-4 text-sm font-bold" style={{ color: cyan }}>
                หน้าจอที่ 3
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D0D1A] shadow-2xl">
                <div className="flex items-center justify-between bg-[#0D0D1A] px-5 pt-3 pb-2">
                  <span className="text-xs text-white/40">9:41</span>
                  <div className="mx-auto h-5 w-20 rounded-full bg-white/10" />
                  <span className="text-xs text-white/40">100%</span>
                </div>
                <div className="space-y-3 px-4 pb-5">
                  <p className="text-center text-sm font-bold text-white">
                    ชำระเงิน
                  </p>
                  {/* Order summary */}
                  <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                    <p className="text-xs font-semibold text-white/50 uppercase">สรุปออเดอร์</p>
                    <div className="mt-2 space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">HBD ศิลปิน</span>
                        <span className="text-white">฿499</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Fast Track</span>
                        <span className="text-white">฿50</span>
                      </div>
                      <div className="border-t border-white/10 pt-1.5">
                        <div className="flex justify-between text-sm font-bold">
                          <span className="text-white">รวม</span>
                          <span style={{ color: cyan }}>฿549</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* QR Code */}
                  <div className="flex flex-col items-center rounded-xl bg-white p-4">
                    <QrCode className="h-24 w-24 text-gray-800" />
                    <p className="mt-2 text-xs font-semibold text-gray-600">สแกน PromptPay</p>
                  </div>
                  <p className="text-center text-xs text-white/40">
                    ระบบจะตรวจสอบยอดอัตโนมัติ
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-white">จ่ายเงิน</p>
              <p className="mt-0.5 text-sm text-muted">สแกน PromptPay QR จบ</p>
            </motion.div>

            {/* Screen 4: สถานะ + Proof of Play */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="mb-4 text-sm font-bold" style={{ color: cyan }}>
                หน้าจอที่ 4
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D0D1A] shadow-2xl">
                <div className="flex items-center justify-between bg-[#0D0D1A] px-5 pt-3 pb-2">
                  <span className="text-xs text-white/40">9:41</span>
                  <div className="mx-auto h-5 w-20 rounded-full bg-white/10" />
                  <span className="text-xs text-white/40">100%</span>
                </div>
                <div className="space-y-3 px-4 pb-5">
                  <p className="text-center text-sm font-bold text-white">
                    สถานะออเดอร์
                  </p>
                  {/* Timeline */}
                  <div className="space-y-0">
                    {[
                      { label: "ชำระเงินแล้ว", done: true },
                      { label: "แอดมิน Approve", done: true },
                      { label: "อยู่ในคิว (ลำดับที่ 3)", done: true },
                      { label: "กำลังฉายบนจอ!", done: true, active: true },
                      { label: "ฉายเสร็จแล้ว", done: false },
                    ].map((s, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-full ${
                              s.active
                                ? "ring-2 ring-[#00D4FF]/50"
                                : ""
                            }`}
                            style={{
                              background: s.done ? (s.active ? cyan : `${cyan}40`) : "rgba(255,255,255,0.1)",
                            }}
                          >
                            {s.done && <CheckCircle2 className="h-3 w-3 text-white" />}
                          </div>
                          {i < 4 && (
                            <div
                              className="h-4 w-px"
                              style={{
                                background: s.done ? `${cyan}40` : "rgba(255,255,255,0.1)",
                              }}
                            />
                          )}
                        </div>
                        <p
                          className={`text-xs pt-0.5 ${
                            s.active ? "font-bold text-white" : s.done ? "text-white/60" : "text-white/30"
                          }`}
                        >
                          {s.active && "📺 "}{s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Proof of Play mock */}
                  <div className="rounded-xl p-3 ring-1 ring-[#00D4FF]/20" style={{ background: `${cyan}08` }}>
                    <p className="text-xs font-semibold" style={{ color: cyan }}>
                      Proof of Play
                    </p>
                    <div className="mt-2 flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-[#0D0D1A] to-[#1a1a2e]">
                      <div className="text-center">
                        <Camera className="mx-auto h-6 w-6 text-white/20" />
                        <p className="mt-1 text-[10px] text-white/30">ภาพจากกล้องหน้าป้าย</p>
                      </div>
                    </div>
                    <p className="mt-2 text-[10px] text-white/40">ฉายเมื่อ 14:32 น. | 15 วินาที</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-white">ติดตามสถานะ</p>
              <p className="mt-0.5 text-sm text-muted">ดูสด + ได้หลักฐานขึ้นจอ</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━ TARGET AUDIENCES ━━━ */}
      <section className="relative border-y border-white/5 bg-surface/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: pink }}
            >
              เหมาะกับใคร
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-4xl">
              Community Screen สำหรับทุกคน
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {audiences.map((aud, i) => (
              <motion.div
                key={aud.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${aud.color}15` }}
                >
                  <aud.icon className="h-6 w-6" style={{ color: aud.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{aud.group}</h3>
                  <p className="mt-1 text-muted">{aud.behavior}</p>
                  <p className="mt-2 text-sm font-semibold" style={{ color: aud.color }}>
                    แนะนำ: {aud.pkg}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ LOCATION ━━━ */}
      <section className="relative border-y border-white/5 bg-surface/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="text-sm font-semibold tracking-wider uppercase"
                style={{ color: cyan }}
              >
                ทำเล
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-4xl">
                แยกรินคำ — ใจกลางเชียงใหม่
              </h2>
              <p className="mt-4 text-lg text-muted">
                จอ LED ขนาดใหญ่ตั้งอยู่บนแยกรินคำ แม่ยา อ.เมือง จ.เชียงใหม่
                ทำเลทองที่มีคนและรถผ่านตลอดทั้งวัน ล้อมรอบด้วยศูนย์การค้า
                มหาวิทยาลัย และย่านท่องเที่ยว
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {locationStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <stat.icon className="h-5 w-5" style={{ color: cyan }} />
                    <div>
                      <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#00D4FF]/10 to-[#7B2FFF]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0!2d98.9853!3d18.7883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ3JzE4LjAiTiA5OMKwNTknMDcuMSJF!5e0!3m2!1sth!2sth!4v1"
                  className="aspect-square w-full md:aspect-[4/3]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ทำเลแยกรินคำ"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: purple }}
            >
              คำถามที่พบบ่อย
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-4xl">
              FAQ
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ CTA — Lead Capture ━━━ */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full blur-[180px]"
            style={{ background: `${cyan}08` }}
          />
          <div
            className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full blur-[150px]"
            style={{ background: `${purple}08` }}
          />
        </div>

        <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-[#FF2D78]/10 px-4 py-1.5 ring-1 ring-[#FF2D78]/30">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D78] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2D78]" />
              </span>
              <span className="text-sm font-semibold text-[#FF2D78]">
                เร็วๆ นี้
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-5xl">
              ลงทะเบียนรับข่าวสาร
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
              กรอก LINE ID หรือเบอร์โทรเพื่อรับแจ้งเตือนเมื่อ Community Screen
              เปิดให้บริการ — เป็นคนแรกที่ได้ลงจอ!
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-10 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <MessageCircle className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="LINE ID หรือเบอร์โทร"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 text-white placeholder-muted outline-none transition-all focus:border-[#00D4FF]/40 focus:ring-1 focus:ring-[#00D4FF]/40"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${cyan}, ${purple})`,
                }}
              >
                <Send className="h-4 w-4" />
                ลงทะเบียน
              </button>
            </div>
            <p className="text-sm text-muted">
              เราจะแจ้งเตือนคุณเมื่อเปิดให้บริการเท่านั้น ไม่ส่งสแปม
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <p className="text-sm text-muted">
              มีคำถาม?{" "}
              <Link
                href="/contact"
                className="font-medium transition-colors hover:text-white"
                style={{ color: cyan }}
              >
                ติดต่อเรา
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
