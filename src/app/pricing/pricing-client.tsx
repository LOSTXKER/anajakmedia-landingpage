"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Play,
  Calendar,
  Sparkles,
  Check,
  Calculator,
  MessageCircle,
  Info,
} from "lucide-react";
import {
  locations,
  slotDurations,
  playsPerDayOptions,
  durationOptions,
  multiLocationDiscount,
  addOns,
} from "@/lib/data";

function PricingCalculator() {
  const searchParams = useSearchParams();

  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [playsPerDay, setPlaysPerDay] = useState(10);
  const [durationKey, setDurationKey] = useState("1m");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  useEffect(() => {
    const locParams = searchParams.getAll("location");
    if (locParams.length > 0) {
      const valid = locParams.filter((l) =>
        locations.some((loc) => loc.slug === l)
      );
      if (valid.length > 0) setSelectedLocations(valid);
    }
  }, [searchParams]);

  const toggleLocation = (slug: string) => {
    setSelectedLocations((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const toggleAddOn = (key: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const slot = slotDurations[slotIndex];
  const duration = durationOptions.find((d) => d.key === durationKey)!;
  const locCount = selectedLocations.length;
  const multiDiscount = multiLocationDiscount[locCount] ?? 0;

  const calculation = useMemo(() => {
    if (locCount === 0) return null;

    const perLocationBreakdown = selectedLocations.map((slug) => {
      const loc = locations.find((l) => l.slug === slug)!;
      const pricePerPlay = slot.pricePerPlay[slug] ?? 0;
      const dailyCost = pricePerPlay * playsPerDay;
      const totalBeforeDiscount = dailyCost * duration.days;

      return {
        slug,
        name: loc.name,
        nameEn: loc.nameEn,
        pricePerPlay,
        dailyCost,
        totalBeforeDiscount,
      };
    });

    const subtotalAllLocations = perLocationBreakdown.reduce(
      (sum, loc) => sum + loc.totalBeforeDiscount,
      0
    );

    const durationDiscountAmount = subtotalAllLocations * duration.discount;
    const afterDurationDiscount = subtotalAllLocations - durationDiscountAmount;

    const multiDiscountAmount = afterDurationDiscount * multiDiscount;
    const afterMultiDiscount = afterDurationDiscount - multiDiscountAmount;

    const addOnTotal = selectedAddOns.reduce((sum, key) => {
      const addon = addOns.find((a) => a.key === key);
      return sum + (addon?.price ?? 0);
    }, 0);

    const grandTotal = afterMultiDiscount + addOnTotal;
    const totalDiscount = durationDiscountAmount + multiDiscountAmount;

    return {
      perLocationBreakdown,
      subtotalAllLocations,
      durationDiscount: duration.discount,
      durationDiscountAmount,
      multiDiscount,
      multiDiscountAmount,
      addOnTotal,
      totalDiscount,
      grandTotal,
    };
  }, [selectedLocations, slotIndex, playsPerDay, durationKey, selectedAddOns, locCount, slot, duration, multiDiscount]);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-left lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium tracking-[0.2em] text-accent uppercase"
          >
            เครื่องคำนวณราคา
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-6xl"
          >
            คำนวณราคาลงจอ LED
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-muted"
          >
            เลือกทำเล สล็อต จำนวนรอบ และระยะเวลา ดูราคาทันที
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Calculator Form */}
          <div className="space-y-8 lg:col-span-3">
            {/* Step 1: Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-surface p-6 md:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-accent">
                  1
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                    เลือกทำเล
                  </h3>
                  <p className="text-sm text-muted">เลือกได้หลายทำเล ยิ่งเลือกมาก ยิ่งได้ส่วนลด</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {locations.map((loc) => {
                  const selected = selectedLocations.includes(loc.slug);
                  return (
                    <button
                      key={loc.slug}
                      onClick={() => toggleLocation(loc.slug)}
                      className={`rounded-xl border p-4 text-left transition-all ${
                        selected
                          ? "border-accent/40 bg-accent/5 ring-1 ring-accent/20"
                          : "border-white/10 bg-[#0A0A0F]/50 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <MapPin
                          className={`h-4 w-4 ${selected ? "text-accent" : "text-muted"}`}
                        />
                        {selected && (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-white">
                        {loc.name}
                      </p>
                      <p className="text-sm text-muted">{loc.nameEn}</p>
                      <p className="mt-2 text-sm text-muted">
                        {loc.dailyImpressions} imp/วัน
                      </p>
                    </button>
                  );
                })}
              </div>

              {locCount >= 2 && (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-accent/5 px-4 py-2.5 text-sm">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-accent">
                    หลายทำเล ลด {multiDiscount * 100}%
                  </span>
                </div>
              )}
            </motion.div>

            {/* Step 2: Slot Duration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="rounded-2xl border border-white/10 bg-surface p-6 md:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-accent">
                  2
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                    ความยาวสล็อต
                  </h3>
                  <p className="text-sm text-muted">ระยะเวลาที่โฆษณาแสดงต่อรอบ</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {slotDurations.map((s, idx) => (
                  <button
                    key={s.duration}
                    onClick={() => setSlotIndex(idx)}
                    className={`rounded-xl border p-4 text-center transition-all ${
                      slotIndex === idx
                        ? "border-accent/40 bg-accent/5"
                        : "border-white/10 bg-[#0A0A0F]/50 hover:border-white/10"
                    }`}
                  >
                    <Clock
                      className={`mx-auto h-5 w-5 ${slotIndex === idx ? "text-accent" : "text-muted"}`}
                    />
                    <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                      {s.duration}s
                    </p>
                    <p className="text-sm text-muted">{s.label}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 3: Plays per day */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-white/10 bg-surface p-6 md:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-accent">
                  3
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                    จำนวนรอบ/วัน
                  </h3>
                  <p className="text-sm text-muted">จำนวนครั้งที่โฆษณาเล่นต่อวัน</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {playsPerDayOptions.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlaysPerDay(p)}
                    className={`rounded-xl border p-4 text-center transition-all ${
                      playsPerDay === p
                        ? "border-accent/40 bg-accent/5"
                        : "border-white/10 bg-[#0A0A0F]/50 hover:border-white/10"
                    }`}
                  >
                    <Play
                      className={`mx-auto h-4 w-4 ${playsPerDay === p ? "text-accent" : "text-muted"}`}
                    />
                    <p className="mt-1.5 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                      {p}
                    </p>
                    <p className="text-sm text-muted">รอบ/วัน</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 4: Duration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="rounded-2xl border border-white/10 bg-surface p-6 md:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-accent">
                  4
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                    ระยะเวลา
                  </h3>
                  <p className="text-sm text-muted">ยิ่งนาน ยิ่งได้ส่วนลด</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                {durationOptions.map((d) => (
                  <button
                    key={d.key}
                    onClick={() => setDurationKey(d.key)}
                    className={`rounded-xl border p-3 text-center transition-all ${
                      durationKey === d.key
                        ? "border-accent/40 bg-accent/5"
                        : "border-white/10 bg-[#0A0A0F]/50 hover:border-white/10"
                    }`}
                  >
                    <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-white">
                      {d.label}
                    </p>
                    {d.discount > 0 && (
                      <p className="mt-1 text-sm font-semibold text-accent">
                        ลด {d.discount * 100}%
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 5: Add-ons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl border border-white/10 bg-surface p-6 md:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-accent">
                  5
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                    บริการเสริม
                  </h3>
                  <p className="text-sm text-muted">เลือกเพิ่มได้ตามต้องการ (ไม่บังคับ)</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {addOns.map((addon) => {
                  const selected = selectedAddOns.includes(addon.key);
                  return (
                    <button
                      key={addon.key}
                      onClick={() => toggleAddOn(addon.key)}
                      className={`rounded-xl border p-4 text-left transition-all ${
                        selected
                          ? "border-accent/40 bg-accent/5"
                          : "border-white/10 bg-[#0A0A0F]/50 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {addon.label}
                          </p>
                          <p className="mt-1 text-sm text-muted">
                            {addon.description}
                          </p>
                        </div>
                        {selected && (
                          <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-accent">
                        ฿{addon.price.toLocaleString()}
                        <span className="text-sm font-normal text-muted">
                          /{addon.unit}
                        </span>
                      </p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Price Summary (Sticky) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-28 rounded-2xl border border-white/10 bg-surface">
              <div className="border-b border-white/10 p-6">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-accent" />
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                    สรุปราคา
                  </h3>
                </div>
              </div>

              <div className="p-6">
                {!calculation ? (
                  <div className="py-8 text-center">
                    <MapPin className="mx-auto mb-3 h-8 w-8 text-muted/30" />
                    <p className="text-sm text-muted">
                      เลือกทำเลอย่างน้อย 1 แห่ง
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Config summary */}
                    <div className="space-y-2 rounded-lg bg-[#0A0A0F]/50 p-4 text-sm">
                      <div className="flex justify-between text-muted">
                        <span>สล็อต</span>
                        <span className="text-white">{slot.label}</span>
                      </div>
                      <div className="flex justify-between text-muted">
                        <span>รอบ/วัน</span>
                        <span className="text-white">{playsPerDay} รอบ</span>
                      </div>
                      <div className="flex justify-between text-muted">
                        <span>ระยะเวลา</span>
                        <span className="text-white">
                          {duration.label} ({duration.days} วัน)
                        </span>
                      </div>
                    </div>

                    {/* Per-location breakdown */}
                    <div className="space-y-3">
                      {calculation.perLocationBreakdown.map((loc) => (
                        <div
                          key={loc.slug}
                          className="rounded-lg border border-white/10 p-3"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {loc.name}
                              </p>
                              <p className="text-sm text-muted">
                                {loc.nameEn}
                              </p>
                            </div>
                            <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-white">
                              ฿{loc.totalBeforeDiscount.toLocaleString()}
                            </p>
                          </div>
                          <p className="mt-1.5 text-sm text-muted">
                            ฿{loc.pricePerPlay.toLocaleString()}/รอบ × {playsPerDay}{" "}
                            รอบ × {duration.days} วัน
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Discounts */}
                    <div className="space-y-2 border-t border-white/10 pt-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted">รวมก่อนส่วนลด</span>
                        <span className="text-white">
                          ฿{calculation.subtotalAllLocations.toLocaleString()}
                        </span>
                      </div>

                      {calculation.durationDiscount > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-green-400">
                            ส่วนลดระยะเวลา (-{calculation.durationDiscount * 100}%)
                          </span>
                          <span className="text-green-400">
                            -฿{calculation.durationDiscountAmount.toLocaleString()}
                          </span>
                        </div>
                      )}

                      {calculation.multiDiscount > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-green-400">
                            ส่วนลดหลายทำเล (-{calculation.multiDiscount * 100}%)
                          </span>
                          <span className="text-green-400">
                            -฿{Math.round(calculation.multiDiscountAmount).toLocaleString()}
                          </span>
                        </div>
                      )}

                      {calculation.addOnTotal > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted">บริการเสริม</span>
                          <span className="text-white">
                            +฿{calculation.addOnTotal.toLocaleString()}
                          </span>
                        </div>
                      )}

                      {calculation.totalDiscount > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-green-400">ประหยัดทั้งหมด</span>
                          <span className="font-semibold text-green-400">
                            ฿{Math.round(calculation.totalDiscount).toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Grand total */}
                    <div className="rounded-lg bg-accent/5 p-4">
                      <div className="flex items-end justify-between">
                        <span className="text-sm font-medium text-white">
                          ราคารวมทั้งหมด
                        </span>
                        <div className="text-right">
                          <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-accent">
                            ฿{Math.round(calculation.grandTotal).toLocaleString()}
                          </p>
                          {duration.days > 1 && (
                            <p className="text-sm text-muted">
                              ≈ ฿{Math.round(calculation.grandTotal / duration.days).toLocaleString()}/วัน
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3 pt-2">
                      <Link
                        href="/contact"
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,144,255,0.3)]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        ขอใบเสนอราคา
                      </Link>
                      <p className="text-center text-sm text-muted">
                        ปรึกษาฟรี ตอบกลับภายใน 24 ชั่วโมง
                      </p>
                    </div>

                    <div className="flex items-start gap-2 rounded-lg border border-white/10 p-3">
                      <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted" />
                      <p className="text-sm leading-relaxed text-muted">
                        ราคาเป็นการประมาณเบื้องต้น ราคาจริงอาจแตกต่าง
                        ติดต่อเราเพื่อรับใบเสนอราคาอย่างเป็นทางการ
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export function PricingClient() {
  return (
    <Suspense>
      <PricingCalculator />
    </Suspense>
  );
}
