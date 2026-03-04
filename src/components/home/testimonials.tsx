"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "ผลตอบรับดีมากเกินคาด ลูกค้าเดินเข้าร้านมากขึ้นชัดเจนตั้งแต่สัปดาห์แรก ทีมงานดูแลดีมาก",
    name: "คุณสมชาย",
    role: "เจ้าของร้านอาหาร",
    location: "แยกรินคำ",
    featured: true,
  },
  {
    quote:
      "เราลงจอ 3 ทำเลพร้อมกัน Impressions สูงมาก คุ้มค่ากว่าซื้อสื่อออนไลน์อีก เพราะคนเห็นจริงๆ",
    name: "คุณวิภา",
    role: "Marketing Manager",
    location: "Multi-Location",
    featured: false,
  },
  {
    quote:
      "ลงตรงกับเจ้าของจอ ราคาชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง ขึ้นจอเร็ว ได้รายงานผลครบทุกรอบ แนะนำเลยครับ",
    name: "คุณธนกฤต",
    role: "เจ้าของธุรกิจอสังหาริมทรัพย์",
    location: "แยกรวมโชค",
    featured: false,
  },
];

const businessTypes = [
  "ร้านอาหาร",
  "อสังหาริมทรัพย์",
  "คลินิก",
  "อีเวนต์",
  "ยานยนต์",
  "สถาบันการศึกษา",
  "ค้าปลีก",
  "โรงแรม",
];

export function Testimonials() {
  const featured = testimonials[0];
  const others = testimonials.slice(1);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-5xl">
            ลูกค้าพูดถึงเรา
          </h2>
          <div className="mx-auto mt-5 flex flex-wrap justify-center gap-2">
            {businessTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-white/10 bg-surface px-3 py-1 text-xs text-muted"
              >
                {type}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Featured testimonial — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.06] to-transparent p-8 md:p-10"
          >
            <div>
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-white md:text-xl">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-accent">
                {featured.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{featured.name}</p>
                <p className="text-sm text-muted">
                  {featured.role} · {featured.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Other testimonials — stacked */}
          <div className="flex flex-col gap-6">
            {others.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="flex-1 rounded-2xl border border-white/10 bg-surface p-6 md:p-8"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-accent/60 text-accent/60"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-sm font-bold text-accent">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
