import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { ServicesClient } from "./services-client";

export const metadata: Metadata = {
  title: "ลงโฆษณาจอ LED ตรงกับผู้บริหารจอ",
  description:
    "ลงโฆษณาจอ LED ตรงกับผู้บริหารจอ ไม่ผ่านเอเจนซี่ เครือข่าย 3 ทำเลยุทธศาสตร์ในเชียงใหม่ ราคาโปร่งใส คำนวณเองได้ทันที",
  alternates: {
    canonical: "https://anajakmedia.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceJsonLd />
      <ServicesClient />
    </>
  );
}
