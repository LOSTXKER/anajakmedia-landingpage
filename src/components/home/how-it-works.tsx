"use client";

import { motion } from "framer-motion";
import { Calculator, ImageUp, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Calculator,
    title: "เลือกจอ + คำนวณราคา",
    description:
      "เลือกทำเล สล็อต จำนวนรอบ และระยะเวลา เห็นราคาทันทีบนเว็บ หรือปรึกษาเราฟรี",
    accent: "from-accent to-blue-400",
  },
  {
    number: "02",
    icon: ImageUp,
    title: "ส่งชิ้นงาน",
    description:
      "ส่งไฟล์ภาพนิ่งหรือวิดีโอ รองรับ JPG, PNG, MP4 ความละเอียด Full HD",
    accent: "from-blue-400 to-purple-400",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "ขึ้นจอ + รายงานผล",
    description:
      "ชิ้นงานขึ้นจอตามกำหนด พร้อม Proof of Play และ Impression Report",
    accent: "from-purple-400 to-accent",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-5xl">
            เริ่มต้นง่ายใน{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              3 ขั้นตอน
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            ลงโฆษณาตรงกับเรา ง่าย ไม่ซับซ้อน
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="absolute top-[3.5rem] left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent md:block" />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Number circle */}
                <div className="relative mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.accent} opacity-20`}
                  />
                  <div className="absolute inset-[3px] rounded-full bg-surface" />
                  <div className="relative flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-accent" />
                  </div>
                </div>

                <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest text-accent/80">
                  STEP {step.number}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
          >
            เริ่มคำนวณราคา
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
