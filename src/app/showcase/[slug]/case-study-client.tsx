"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowLeft, Calendar, Clock } from "lucide-react";
import { campaigns, galleryImages } from "@/lib/data";

export function CaseStudyClient() {
  const { slug } = useParams<{ slug: string }>();
  const campaign = campaigns.find((c) => c.slug === slug);

  if (!campaign) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-24">
        <p className="text-muted">ไม่พบแคมเปญ</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Back link */}
      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <Link
          href="/showcase"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          ← กลับไปหน้าผลงาน
        </Link>
      </div>

      {/* Hero Image */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10"
        >
          <Image
            src={campaign.image}
            alt={`${campaign.brand} — ${campaign.title}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Info */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                {campaign.category}
              </p>
              <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-5xl">
                {campaign.title}
              </h1>
              <p className="mt-2 text-xl text-muted">{campaign.brand}</p>
            </motion.div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-surface p-5">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm text-muted">ทำเล</p>
                  <p className="text-sm font-medium text-white">
                    {campaign.location}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-surface p-5">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm text-muted">ระยะเวลา</p>
                  <p className="text-sm font-medium text-white">
                    {campaign.duration}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-surface p-5">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm text-muted">รูปแบบ</p>
                  <p className="text-sm font-medium text-white">
                    Digital Billboard — LED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Gallery */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="mb-8 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
            รูปภาพแคมเปญ
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.slice(0, 3).map((src, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10"
              >
                <Image
                  src={src}
                  alt={`${campaign.brand} gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white md:text-3xl">
          ต้องการแบบนี้บ้าง?
        </h2>
        <p className="mt-3 text-muted">
          ให้เราช่วยสร้างแคมเปญที่ทรงพลังบนจอ LED
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
        >
          ติดต่อเรา
        </Link>
      </section>
    </div>
  );
}
