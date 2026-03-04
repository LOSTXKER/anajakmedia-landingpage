import type { Metadata } from "next";
import { LocationsClient } from "./locations-client";

export const metadata: Metadata = {
  title: "ทำเลจอ LED ที่เราบริหารโดยตรง — เชียงใหม่",
  description:
    "เครือข่ายจอ LED 3 ทำเลยุทธศาสตร์ที่เราบริหารโดยตรง แยกรินคำ แยกแสงตะวัน แยกรวมโชค 150,000+ Impressions ต่อวัน ลงโฆษณาตรง ไม่ผ่านเอเจนซี่",
  alternates: {
    canonical: "https://anajakmedia.com/locations",
  },
};

export default function LocationsPage() {
  return <LocationsClient />;
}
