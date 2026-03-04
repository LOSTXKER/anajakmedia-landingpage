import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "บทความ",
    description: "บทความเกี่ยวกับป้ายโฆษณาจอ LED และสื่อ OOH ในเชียงใหม่",
  };
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            Coming Soon
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-5xl">
            บทความนี้กำลังจะมา
          </h1>
          <p className="mt-4 text-muted">
            เรากำลังเตรียมเนื้อหาที่มีคุณภาพสำหรับคุณ
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-block rounded-full border border-white/10 px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-accent/30 hover:bg-accent/5"
          >
            กลับหน้าบทความ
          </Link>
        </div>
      </section>
    </div>
  );
}
