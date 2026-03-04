import type { Metadata } from "next";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "Anajak Media โดย หจก. อาณาจักร์ เอ็นเตอร์ไพรส์ ผู้บริหารเครือข่ายจอ LED โดยตรง ดำเนินธุรกิจมากว่า 17 ปี 3 ทำเลยุทธศาสตร์ในเชียงใหม่ ไม่ใช่เอเจนซี่",
  alternates: {
    canonical: "https://anajakmedia.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
