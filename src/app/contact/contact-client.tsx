"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  Send,
} from "lucide-react";

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header — left-aligned */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[120px]" />
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

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="rounded-2xl border border-accent/20 bg-surface p-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <MessageCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                  ส่งข้อความสำเร็จ!
                </h3>
                <p className="mt-3 text-muted">
                  เราจะติดต่อกลับภายใน 24 ชั่วโมง
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-white/10 bg-surface p-8 md:p-10"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                      ชื่อ-นามสกุล / บริษัท *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-white/10 bg-[#0A0A0F] px-4 py-3 text-white placeholder-muted transition-colors focus:border-accent focus:outline-none"
                      placeholder="ชื่อของคุณ"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                      เบอร์โทร / อีเมล *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-white/10 bg-[#0A0A0F] px-4 py-3 text-white placeholder-muted transition-colors focus:border-accent focus:outline-none"
                      placeholder="เบอร์โทรหรืออีเมล"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    สนใจทำเล
                  </label>
                  <select className="w-full rounded-lg border border-white/10 bg-[#0A0A0F] px-4 py-3 text-white transition-colors focus:border-accent focus:outline-none">
                    <option value="">เลือกทำเล</option>
                    <option value="rinkhom">แยกรินคำ</option>
                    <option value="saengtawan">แยกแสงตะวัน</option>
                    <option value="ruamchok">แยกรวมโชค</option>
                    <option value="all">ทุกทำเล (Multi-Location)</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    สนใจบริการ
                  </label>
                  <select className="w-full rounded-lg border border-white/10 bg-[#0A0A0F] px-4 py-3 text-white transition-colors focus:border-accent focus:outline-none">
                    <option value="">เลือกแพ็กเกจ</option>
                    <option value="single">1 ทำเล</option>
                    <option value="multi-2">2 ทำเล (ลด 10%)</option>
                    <option value="multi-3">3 ทำเล (ลด 20%)</option>
                    <option value="other">สอบถามข้อมูล</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    ข้อความเพิ่มเติม
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-white/10 bg-[#0A0A0F] px-4 py-3 text-white placeholder-muted transition-colors focus:border-accent focus:outline-none"
                    placeholder="รายละเอียดที่ต้องการ..."
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
                >
                  <Send className="h-4 w-4" />
                  ส่งข้อความ
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 md:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-surface p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">LINE Official</h3>
                  <p className="mt-1 text-sm text-muted">
                    ช่องทางที่เร็วที่สุด
                  </p>
                  <a
                    href="#"
                    className="mt-2 inline-block font-medium text-accent"
                  >
                    @anajakmedia
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-surface p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">โทรศัพท์</h3>
                  <a href="tel:+66000000000" className="mt-1 text-muted">
                    0XX-XXX-XXXX
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-surface p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">อีเมล</h3>
                  <a
                    href="mailto:contact@anajakmedia.com"
                    className="mt-1 text-muted"
                  >
                    contact@anajakmedia.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-surface p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">สำนักงาน</h3>
                  <p className="mt-1 text-muted">
                    หจก. อาณาจักร์ เอ็นเตอร์ไพรส์
                  </p>
                  <p className="mt-0.5 text-muted">
                    39/12 ม.8 ต.ป่าแดด อ.เมือง
                    <br />
                    จ.เชียงใหม่ 50100
                  </p>
                </div>
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
