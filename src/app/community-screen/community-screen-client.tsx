"use client";

import { motion } from "framer-motion";
import {
  Timer,
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
  ArrowRight,
  TrendingUp,
  Image,
  QrCode,
  CheckCircle2,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

/* ─── Color tokens ─── */
const cyan = "#00D4FF";
const purple = "#7B2FFF";
const pink = "#FF2D78";

/* ─── Data ─── */
const durationExamples = [
  { seconds: 15, price: 45, label: "ขั้นต่ำ" },
  { seconds: 30, price: 90, label: "แนะนำ" },
  { seconds: 45, price: 135, label: "" },
  { seconds: 60, price: 180, label: "สูงสุด" },
];

const steps = [
  {
    icon: Timer,
    title: "เลือกความยาว",
    desc: "เลือก 15–60 วินาที ระบบคำนวณราคาให้ทันที (ราคาเปลี่ยนตาม Demand)",
  },
  {
    icon: Upload,
    title: "อัปโหลดคอนเทนต์",
    desc: "อัปโหลดรูปภาพหรือวิดีโอที่ทำมาเอง (JPG, PNG, MP4)",
  },
  {
    icon: CreditCard,
    title: "จ่ายเงิน",
    desc: "สแกน PromptPay QR จบในขั้นตอนเดียว",
  },
  {
    icon: Monitor,
    title: "ขึ้นจอ!",
    desc: "รอแอดมิน Approve แล้วขึ้นจอตามคิว + ได้หลักฐาน Proof of Play",
  },
];

const audiences = [
  {
    icon: Heart,
    group: "Fandom / ติ่ง",
    behavior: "โปรเจกต์วันเกิดศิลปิน ดีไซน์ภาพมาเอง",
    example: "60 วิ = ฿180",
    color: pink,
  },
  {
    icon: Users,
    group: "วัยรุ่น / นักศึกษา มช.",
    behavior: "แกล้งเพื่อน อวยพรวันเกิด บอกรัก",
    example: "15 วิ = ฿45",
    color: cyan,
  },
  {
    icon: Store,
    group: "Influencer / พ่อค้าแม่ค้า",
    behavior: "โปรโมทร้าน สร้างคอนเทนต์ถ่ายหน้าจอ",
    example: "30 วิ = ฿90",
    color: purple,
  },
  {
    icon: Building2,
    group: "องค์กร / SME",
    behavior: "โฆษณาระยะยาว เหมาช่วงเวลา",
    example: "ติดต่อสอบถาม",
    color: cyan,
  },
];

const faqs = [
  {
    q: "วินาทีละ 3 บาท หมายความว่าอย่างไร?",
    a: "ราคาเริ่มต้นคือ 3 บาทต่อวินาที เลือกความยาวได้ 15–60 วินาที เช่น 15 วิ = 45 บาท, 30 วิ = 90 บาท แต่ราคาอาจเปลี่ยนแปลงขึ้นอยู่กับความต้องการ (Demand) ณ ช่วงเวลานั้น",
  },
  {
    q: "ราคาประมูลทำงานยังไง?",
    a: "ช่วงเวลาที่มีคนจองเยอะ (เช่น ช่วงเย็นวันเสาร์) ราคาต่อวินาทีจะปรับเพิ่มขึ้นตาม Demand อัตโนมัติ ช่วงที่คนน้อยก็จะกลับมาราคาปกติ เหมือนระบบ Surge Pricing",
  },
  {
    q: "ต้องทำคอนเทนต์มาเองหรือเปล่า?",
    a: "ใช่ครับ ตอนนี้ยังไม่มีเทมเพลตสำเร็จรูป ต้องอัปโหลดรูปภาพ (JPG, PNG) หรือวิดีโอ (MP4) ที่ทำมาเอง ระบบจะแสดง Guideline ขนาดไฟล์และ Resolution ที่แนะนำ",
  },
  {
    q: "ภาพจะขึ้นจอนานแค่ไหน?",
    a: "ขั้นต่ำ 15 วินาที สูงสุด 60 วินาที เลือกได้ตามต้องการ",
  },
  {
    q: "ต้องรอนานไหมกว่าจะขึ้นจอ?",
    a: "หลังจากแอดมิน Approve แล้ว จะเข้าคิวฉายอัตโนมัติ ปกติไม่เกิน 1 ชั่วโมง",
  },
  {
    q: "ถ้าภาพไม่ผ่าน Approve จะได้เงินคืนไหม?",
    a: "ได้คืน 100% อัตโนมัติ พร้อมแจ้งเหตุผลการปฏิเสธ",
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
              ลงจอยักษ์กลางเชียงใหม่
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${cyan}, ${purple})`,
                }}
              >
                วินาทีละ 3 บาท
              </span>
            </h1>

            <p className="mt-5 text-xl text-muted md:text-2xl">
              เลือกความยาว 15–60 วินาที อัปโหลดคอนเทนต์ จ่ายเงิน ขึ้นจอ{" "}
              <span className="font-semibold text-white">
                เริ่มต้นแค่ 45 บาท
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Timer, text: "วินาทีละ ฿3" },
                { icon: TrendingUp, text: "ราคาประมูลตาม Demand" },
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
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${cyan}, ${purple})`,
                }}
              >
                ดูราคา & วิธีใช้
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

      {/* ━━━ PRICING ━━━ */}
      <section id="pricing" className="relative py-24 md:py-32">
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
              ราคา
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-4xl">
              เรียบง่าย — วินาทีละ 3 บาท
            </h2>
            <p className="mt-3 text-lg text-muted">
              เลือกความยาวที่ต้องการ ราคาคำนวณอัตโนมัติ ยิ่ง Demand สูง ราคายิ่งเพิ่ม
            </p>
          </motion.div>

          {/* Big price display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#00D4FF]/[0.06] via-transparent to-[#7B2FFF]/[0.04]"
          >
            <div className="grid md:grid-cols-2">
              {/* Left — base price */}
              <div className="flex flex-col items-center justify-center p-10 md:p-14">
                <p className="text-sm font-semibold text-white/50 uppercase">ราคาเริ่มต้น</p>
                <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-7xl font-bold text-white md:text-8xl">
                  ฿3
                </p>
                <p className="mt-1 text-lg text-white/60">ต่อวินาที</p>
                <div className="mt-6 flex items-center gap-2 rounded-full bg-[#FF2D78]/10 px-4 py-2 ring-1 ring-[#FF2D78]/30">
                  <TrendingUp className="h-4 w-4 text-[#FF2D78]" />
                  <span className="text-sm font-medium text-[#FF2D78]">
                    ราคาประมูลตาม Demand
                  </span>
                </div>
                <p className="mt-4 max-w-xs text-center text-sm text-muted">
                  ช่วงที่คนจองเยอะ ราคาต่อวินาทีจะปรับเพิ่มอัตโนมัติ ช่วงคนน้อยราคาปกติ
                </p>
              </div>

              {/* Right — duration examples */}
              <div className="border-t border-white/10 p-8 md:border-l md:border-t-0 md:p-10">
                <p className="mb-6 text-sm font-semibold text-white/50 uppercase">
                  ตัวอย่างราคา (ราคาปกติ)
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {durationExamples.map((d) => (
                    <div
                      key={d.seconds}
                      className={`rounded-2xl p-5 text-center ring-1 ${
                        d.label === "แนะนำ"
                          ? "bg-[#00D4FF]/[0.08] ring-[#00D4FF]/30"
                          : "bg-white/[0.03] ring-white/10"
                      }`}
                    >
                      {d.label && (
                        <p
                          className="mb-1 text-xs font-bold uppercase"
                          style={{ color: d.label === "แนะนำ" ? cyan : "rgba(255,255,255,0.4)" }}
                        >
                          {d.label}
                        </p>
                      )}
                      <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                        {d.seconds} <span className="text-base font-normal text-white/50">วินาที</span>
                      </p>
                      <p
                        className="mt-1 font-[family-name:var(--font-space-grotesk)] text-xl font-bold"
                        style={{ color: cyan }}
                      >
                        ฿{d.price}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/10">
                  <div className="flex items-start gap-3">
                    <Upload className="mt-0.5 h-5 w-5 shrink-0 text-white/40" />
                    <div>
                      <p className="font-medium text-white">ต้องอัปโหลดคอนเทนต์เอง</p>
                      <p className="mt-1 text-sm text-muted">
                        รองรับ JPG, PNG (ภาพนิ่ง) และ MP4 (วิดีโอ) ยังไม่มีเทมเพลตสำเร็จรูป
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            {/* Screen 1: เลือกความยาว */}
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
                <div className="flex items-center justify-between bg-[#0D0D1A] px-5 pt-3 pb-2">
                  <span className="text-xs text-white/40">9:41</span>
                  <div className="mx-auto h-5 w-20 rounded-full bg-white/10" />
                  <span className="text-xs text-white/40">100%</span>
                </div>
                <div className="space-y-3 px-4 pb-5">
                  <p className="text-center text-sm font-bold text-white">
                    เลือกความยาว
                  </p>
                  <div className="text-center">
                    <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold" style={{ color: cyan }}>30 วิ</p>
                    <div className="mx-auto mt-2 h-1.5 w-full rounded-full bg-white/10">
                      <div className="h-1.5 w-1/2 rounded-full" style={{ background: `linear-gradient(90deg, ${cyan}, ${purple})` }} />
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-white/40">
                      <span>15 วิ</span>
                      <span>60 วิ</span>
                    </div>
                  </div>
                  <div className="rounded-xl p-3 ring-1 ring-white/10" style={{ background: `${cyan}08` }}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">ราคาปัจจุบัน</span>
                      <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold" style={{ color: cyan }}>฿3/วินาที</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-sm text-white/60">รวม</span>
                      <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">฿90</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-[#FF2D78]/10 px-3 py-2">
                    <TrendingUp className="h-3.5 w-3.5 text-[#FF2D78]" />
                    <p className="text-xs text-white/60">Demand ปกติ (x1.0)</p>
                  </div>
                  <div
                    className="rounded-xl py-2.5 text-center text-sm font-semibold text-white"
                    style={{ backgroundImage: `linear-gradient(135deg, ${cyan}, ${purple})` }}
                  >
                    ถัดไป
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-white">เลือกความยาว</p>
              <p className="mt-0.5 text-sm text-muted">เลื่อนเลือก 15–60 วินาที</p>
            </motion.div>

            {/* Screen 2: อัปโหลดคอนเทนต์ */}
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
                    อัปโหลดคอนเทนต์
                  </p>
                  {/* Upload area */}
                  <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: `${cyan}15` }}>
                      <Upload className="h-6 w-6" style={{ color: cyan }} />
                    </div>
                    <p className="text-sm font-medium text-white">แตะเพื่ออัปโหลด</p>
                    <p className="text-xs text-white/40">JPG, PNG หรือ MP4</p>
                  </div>
                  {/* Guidelines */}
                  <div className="space-y-2 rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/10">
                    <p className="text-xs font-semibold text-white/50 uppercase">Guideline</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/50">Resolution</span>
                      <span className="text-white/80">1920 x 1080</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/50">ขนาดไฟล์สูงสุด</span>
                      <span className="text-white/80">50 MB</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/50">ความยาววิดีโอ</span>
                      <span className="text-white/80">15–60 วินาที</span>
                    </div>
                  </div>
                  <div
                    className="rounded-xl py-2.5 text-center text-sm font-semibold text-white"
                    style={{ backgroundImage: `linear-gradient(135deg, ${cyan}, ${purple})` }}
                  >
                    ดูตัวอย่างบนจอ
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-white">อัปโหลดคอนเทนต์</p>
              <p className="mt-0.5 text-sm text-muted">ทำคอนเทนต์มาเอง ไม่มีเทมเพลต</p>
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
                        <span className="text-white/70">ความยาว</span>
                        <span className="text-white">30 วินาที</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">ราคา/วินาที</span>
                        <span className="text-white">฿3.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Demand (x1.0)</span>
                        <span className="text-white/50">ปกติ</span>
                      </div>
                      <div className="border-t border-white/10 pt-1.5">
                        <div className="flex justify-between text-sm font-bold">
                          <span className="text-white">รวม</span>
                          <span style={{ color: cyan }}>฿90</span>
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
                              s.active ? "ring-2 ring-[#00D4FF]/50" : ""
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
                          className={`pt-0.5 text-xs ${
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
                    <p className="mt-2 text-[10px] text-white/40">ฉายเมื่อ 14:32 น. | 30 วินาที</p>
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
                    {aud.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ LOCATION ━━━ */}
      <section className="relative py-24 md:py-32">
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
      <section className="relative border-t border-white/5 bg-surface/50 py-24 md:py-32">
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
