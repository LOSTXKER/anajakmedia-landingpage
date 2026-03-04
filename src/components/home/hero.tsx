"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { stats } from "@/lib/data";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasAnimated(true);
        const numericMatch = value.match(/[\d,]+/);
        if (!numericMatch) {
          setDisplay(value);
          return;
        }
        const target = parseInt(numericMatch[0].replace(/,/g, ""), 10);
        const prefix = value.slice(0, value.indexOf(numericMatch[0]));
        const suffix = value.slice(
          value.indexOf(numericMatch[0]) + numericMatch[0].length
        );
        const duration = 1500;
        const steps = 40;
        const increment = target / steps;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          const current = Math.min(Math.round(increment * step), target);
          setDisplay(prefix + current.toLocaleString() + suffix);
          if (step >= steps) clearInterval(timer);
        }, duration / steps);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{display}</span>;
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <Image
          src="/images/locations/rinkhom-hero.jpg"
          alt="LED Billboard at Rinkhom Junction"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0A0F]/75" />
      </div>

      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] animate-pulse rounded-full bg-accent/[0.07] blur-[120px]" />
        <div
          className="absolute -right-[10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-accent/[0.05] blur-[100px]"
          style={{ animation: "pulse 4s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute left-[30%] top-[60%] h-[300px] w-[300px] rounded-full bg-purple-500/[0.04] blur-[80px]"
          style={{ animation: "pulse 5s ease-in-out infinite 2s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 backdrop-blur-sm"
          >
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">
              ลงโฆษณาตรง ไม่ผ่านเอเจนซี่
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            Your Brand.
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
              Our Screens.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            บริหารจอ LED 3 ทำเลยุทธศาสตร์โดยตรง ไม่ต้องผ่านตัวแทน{" "}
            <span className="font-medium text-white/90">
              เห็นราคาชัดเจน คำนวณเองได้ทันที
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
            >
              ดูจอ LED ทั้งหมด
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-accent/5"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              คำนวณราคา
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats bar — integrated into hero bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 border-t border-white/10 bg-[#0A0A0F]/60 backdrop-blur-xl"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="px-6 py-6 text-center md:py-8"
            >
              <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white md:text-4xl">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-1 text-sm text-muted">{stat.labelTh}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
