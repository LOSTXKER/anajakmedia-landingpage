import type { Metadata } from "next";
import { ProductsClient } from "./products-client";

export const metadata: Metadata = {
  title: "จอ LED โฆษณา เชียงใหม่ — เลือกทำเลที่ใช่",
  description:
    "เลือกจอ LED โฆษณา 3 ทำเลยุทธศาสตร์ในเชียงใหม่ ลงโฆษณาตรงกับผู้บริหารจอ พร้อมสเปกจอ ราคา และเครื่องคำนวณราคาละเอียด",
  alternates: {
    canonical: "https://anajakmedia.com/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
