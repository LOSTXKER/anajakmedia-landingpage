import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "บทความ — ป้ายโฆษณา LED เชียงใหม่",
  description:
    "บทความและข่าวสารเกี่ยวกับป้ายโฆษณาจอ LED สื่อ OOH และเทรนด์การตลาด Digital Out-of-Home ในเชียงใหม่",
  alternates: {
    canonical: "https://anajakmedia.com/blog",
  },
};

const upcomingTopics = [
  "ป้ายโฆษณา LED เชียงใหม่ ราคาเท่าไร? คุ้มค่าแค่ไหน?",
  "วิธีเลือกทำเลป้ายโฆษณาให้ตรงกลุ่มเป้าหมาย",
  "LED Billboard vs Social Media Ads: อะไรคุ้มกว่า?",
  "5 เคล็ดลับออกแบบชิ้นงานโฆษณาจอ LED ให้ปัง",
  "OOH Media Trend 2026: อะไรมาแรงในปีนี้",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            Blog
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-6xl">
            บทความ & ข่าวสาร
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            เร็วๆ นี้ เราจะเริ่มเผยแพร่บทความเกี่ยวกับสื่อโฆษณา LED
            เทรนด์การตลาด และเคล็ดลับสำหรับแบรนด์
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
            หัวข้อที่กำลังจะมา
          </h2>
          <ul className="space-y-4">
            {upcomingTopics.map((topic, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-muted"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-[10px] font-bold text-accent">
                  {i + 1}
                </span>
                {topic}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
            <p className="text-sm text-white">
              ต้องการรับข่าวสารบทความใหม่?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-light"
            >
              ติดตามข่าวสาร
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
