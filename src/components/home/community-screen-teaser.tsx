"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Timer, TrendingUp, Camera } from "lucide-react";

const highlights = [
  { icon: Timer, text: "วินาทีละ 3 บาท" },
  { icon: TrendingUp, text: "ราคาประมูลตาม Demand" },
  { icon: Camera, text: "ได้หลักฐานขึ้นจอ" },
];

export function CommunityScreenTeaser() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#00D4FF]/[0.06] blur-[120px]" />
        <div className="absolute -right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#7B2FFF]/[0.06] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#00D4FF]/[0.08] via-[#7B2FFF]/[0.05] to-transparent p-8 md:p-14"
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left — text */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FF2D78]/10 px-4 py-1.5 ring-1 ring-[#FF2D78]/30">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D78] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2D78]" />
                </span>
                <span className="text-sm font-semibold text-[#FF2D78]">
                  เร็วๆ นี้
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-tight text-white md:text-5xl">
                รินคำ
                <br />
                <span className="bg-gradient-to-r from-[#00D4FF] to-[#7B2FFF] bg-clip-text text-transparent">
                  Community Screen
                </span>
              </h2>

              <p className="mt-4 text-lg text-muted">
                ลงจอยักษ์กลางเชียงใหม่{" "}
                <span className="font-semibold text-white">วินาทีละ 3 บาท</span>
                <br className="hidden sm:block" />
                เริ่มต้นแค่ 15 วินาที = 45 บาท ราคาเปลี่ยนตาม Demand
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {highlights.map((h) => (
                  <div
                    key={h.text}
                    className="flex items-center gap-2 rounded-full bg-white/[0.05] px-4 py-2 ring-1 ring-white/10"
                  >
                    <h.icon className="h-4 w-4 text-[#00D4FF]" />
                    <span className="text-sm font-medium text-white">
                      {h.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/community-screen"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B2FFF] px-8 py-3.5 font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                >
                  ดูรายละเอียด
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right — pricing visual */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#00D4FF]/20 to-[#7B2FFF]/20 blur-2xl" />
                <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0F] p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#FF2D78]" />
                    <div className="h-3 w-3 rounded-full bg-[#00D4FF]" />
                    <div className="h-3 w-3 rounded-full bg-[#7B2FFF]" />
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-white/50">ราคาเริ่มต้น</p>
                      <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-[#00D4FF]">
                        ฿3
                      </p>
                      <p className="text-sm text-white/50">ต่อวินาที</p>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">15 วิ</p>
                        <p className="text-sm text-[#00D4FF]">฿45</p>
                      </div>
                      <div className="rounded-xl bg-[#00D4FF]/[0.08] p-3 ring-1 ring-[#00D4FF]/30">
                        <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">30 วิ</p>
                        <p className="text-sm text-[#00D4FF]">฿90</p>
                      </div>
                      <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">60 วิ</p>
                        <p className="text-sm text-[#00D4FF]">฿180</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-[#FF2D78]/10 p-3 ring-1 ring-[#FF2D78]/20">
                      <TrendingUp className="h-4 w-4 text-[#FF2D78]" />
                      <p className="text-sm text-white/80">
                        ราคาขึ้นเมื่อ Demand สูง
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
