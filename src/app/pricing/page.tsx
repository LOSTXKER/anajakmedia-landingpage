import type { Metadata } from "next";
import { PricingClient } from "./pricing-client";

export const metadata: Metadata = {
  title: "คำนวณราคาลงจอ LED — เชียงใหม่",
  description:
    "คำนวณราคาลงโฆษณาจอ LED เชียงใหม่ เลือกทำเล ความยาวสล็อต จำนวนรอบ ระยะเวลา พร้อมเห็นราคาทันที ลงโฆษณาตรง ไม่ผ่านเอเจนซี่",
  alternates: {
    canonical: "https://anajakmedia.com/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
