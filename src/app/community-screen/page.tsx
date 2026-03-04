import type { Metadata } from "next";
import { CommunityScreenClient } from "./community-screen-client";

export const metadata: Metadata = {
  title: "รินคำ Community Screen — จอยักษ์ของคนเชียงใหม่",
  description:
    "อวยพรวันเกิด โปรโมทร้าน โชว์โปรเจกต์บนจอ LED ยักษ์กลางเชียงใหม่ เริ่มต้นแค่ 50 บาท Self-service สั่งเอง ได้หลักฐานขึ้นจอ",
  alternates: {
    canonical: "https://anajakmedia.com/community-screen",
  },
};

export default function CommunityScreenPage() {
  return <CommunityScreenClient />;
}
