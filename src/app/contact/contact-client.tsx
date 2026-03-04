"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Clock,
} from "lucide-react";

const contactChannels = [
  {
    icon: MessageCircle,
    title: "LINE Official",
    subtitle: "ช่องทางที่เร็วที่สุด ตอบภายใน 5 นาที",
    value: "@anajakmedia",
    href: "#",
    cta: "แชทเลย",
    highlight: true,
  },
  {
    icon: Phone,
    title: "โทรศัพท์",
    subtitle: "จ.-ศ. 09:00–18:00 น.",
    value: "0XX-XXX-XXXX",
    href: "tel:+66000000000",
    cta: "โทรเลย",
    highlight: false,
  },
  {
    icon: Mail,
    title: "อีเมล",
    subtitle: "ตอบกลับภายใน 24 ชั่วโมง",
    value: "contact@anajakmedia.com",
    href: "mailto:contact@anajakmedia.com",
    cta: "ส่งอีเมล",
    highlight: false,
  },
];

const faqs = [
  {
    q: "อัตราค่าโฆษณาเริ่มต้นเท่าไร?",
    a: "อัตราค่าโฆษณาเริ่มต้นขึ้นอยู่กับทำเลและระยะเวลาการลง โดยเราจะมีแพ็กเกจหลากหลายให้เลือก ตั้งแต่รายวันไปจนถึงรายปี สามารถติดต่อทีมงานเพื่อรับใบเสนอราคาได้ทันที",
  },
  {
    q: "สามารถเปลี่ยนชิ้นงานโฆษณาระหว่างทางได้ไหม?",
    a: "ได้ครับ สามารถเปลี่ยนชิ้นงานได้ตลอดระยะเวลาสัญญา โดยแจ้งล่วงหน้าอย่างน้อย 24 ชั่วโมง ทีมงานจะอัปเดตชิ้นงานใหม่ให้ภายในวันทำการถัดไป",
  },
  {
    q: "ไฟล์โฆษณาต้องเป็นฟอร์แมตอะไร?",
    a: "รองรับไฟล์วิดีโอ MP4 (H.264) และภาพนิ่ง JPG/PNG ความละเอียดแนะนำที่ Full HD (1920x1080) ขึ้นไป ทีมงานสามารถช่วยปรับไฟล์ให้เหมาะสมกับจอได้",
  },
  {
    q: "ต้องเตรียมไฟล์อะไรมาเอง?",
    a: "ลูกค้าเตรียมชิ้นงานภาพนิ่ง (JPG/PNG) หรือวิดีโอ (MP4) ความละเอียด Full HD (1920x1080) มาได้เลย ทีมงานจะช่วยตรวจสอบและปรับไฟล์ให้เหมาะกับจอก่อนขึ้นฉาย",
  },
  {
    q: "สามารถจองหลายทำเลพร้อมกันได้ไหม?",
    a: "ได้ครับ เรามี Multi-Location Package ที่ให้คุณลงโฆษณาพร้อมกันทั้ง 3 ทำเลในราคาพิเศษ ครอบคลุมจุดสำคัญของเชียงใหม่",
  },
  {
    q: "มีรายงานผลการลงโฆษณาให้ไหม?",
    a: "ทุกแคมเปญจะได้รับรายงานผลโฆษณา รวมถึงจำนวน Impressions, ระยะเวลาเผยแพร่, และภาพ/วิดีโอหลักฐานการลง",
  },
];

export function ContactClient() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute -right-[15%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium tracking-[0.2em] text-accent uppercase"
            >
              ติดต่อเรา
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-6xl"
            >
              พร้อมให้คำปรึกษา
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 max-w-lg text-lg text-muted"
            >
              สอบถามราคาลงจอ LED ตรงกับผู้บริหารจอ ไม่ผ่านเอเจนซี่
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        {/* LINE — Featured card */}
        <motion.a
          href={contactChannels[0].href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="group relative mb-8 block overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] via-surface to-surface p-8 transition-all hover:border-accent/40 md:p-10"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/[0.06] blur-[60px]" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/15">
                <MessageCircle className="h-7 w-7 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-accent">
                  ช่องทางที่เร็วที่สุด
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                  LINE Official
                </h3>
                <p className="mt-1 text-lg text-white/80">@anajakmedia</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted">
                  <Clock className="h-4 w-4" />
                  ตอบภายใน 5 นาทีในเวลาทำการ
                </div>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition-all group-hover:bg-accent-light group-hover:shadow-[0_0_20px_rgba(74,144,255,0.3)]">
              แชทเลย
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </motion.a>

        {/* Phone + Email + Office */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Phone */}
          <motion.a
            href="tel:+66000000000"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group rounded-2xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-white">โทรศัพท์</h3>
                <p className="mt-1 text-lg font-medium text-white/80">
                  0XX-XXX-XXXX
                </p>
                <p className="mt-1 text-sm text-muted">จ.-ศ. 09:00–18:00 น.</p>
              </div>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:contact@anajakmedia.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="group rounded-2xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-white">อีเมล</h3>
                <p className="mt-1 text-lg font-medium text-white/80">
                  contact@anajakmedia.com
                </p>
                <p className="mt-1 text-sm text-muted">
                  ตอบกลับภายใน 24 ชั่วโมง
                </p>
              </div>
            </div>
          </motion.a>

          {/* Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl border border-white/10 bg-surface p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-white">สำนักงาน</h3>
                <p className="mt-1 font-medium text-white/80">
                  หจก. อาณาจักร์ เอ็นเตอร์ไพรส์
                </p>
                <p className="mt-1 text-sm text-muted">
                  39/12 ม.8 ต.ป่าแดด อ.เมือง จ.เชียงใหม่ 50100
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
          คำถามที่พบบ่อย
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">
          FAQ
        </h2>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-white/10 bg-surface"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="pr-4 font-medium text-white">{faq.q}</span>
              <ChevronDown
                className={`h-4 w-4 flex-shrink-0 text-muted transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/10 px-6 py-5">
                    <p className="leading-relaxed text-muted">{faq.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
