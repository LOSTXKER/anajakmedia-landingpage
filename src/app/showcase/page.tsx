import type { Metadata } from "next";
import { ShowcaseClient } from "./showcase-client";

export const metadata: Metadata = {
  title: "ผลงานโฆษณาจอ LED",
  description:
    "รวมผลงานแคมเปญโฆษณาจอ LED จากแบรนด์ชั้นนำ บนเครือข่ายจอ Anajak Media เชียงใหม่",
  alternates: {
    canonical: "https://anajakmedia.com/showcase",
  },
};

export default function ShowcasePage() {
  return <ShowcaseClient />;
}
