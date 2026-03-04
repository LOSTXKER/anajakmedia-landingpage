import type { Metadata } from "next";
import { ContactPageJsonLd } from "@/components/seo/json-ld";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description:
    "สอบถามราคาลงจอ LED ตรงกับผู้บริหารจอ ไม่ผ่านเอเจนซี่ ปรึกษาฟรี ตอบกลับภายใน 24 ชั่วโมง",
  alternates: {
    canonical: "https://anajakmedia.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactPageJsonLd />
      <ContactClient />
    </>
  );
}
