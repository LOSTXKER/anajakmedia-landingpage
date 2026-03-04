import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd } from "@/components/seo/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anajakmedia.com"),
  title: {
    default: "Anajak Media — LED Billboard Operator Chiang Mai",
    template: "%s | Anajak Media",
  },
  description:
    "บริหารเครือข่ายจอ LED โดยตรง 3 ทำเลยุทธศาสตร์ ครอบคลุมเชียงใหม่ 150,000+ Impressions ต่อวัน ลงโฆษณาตรง ไม่ผ่านเอเจนซี่ ดำเนินธุรกิจมากว่า 17 ปี",
  keywords: [
    "ป้ายโฆษณา LED เชียงใหม่",
    "จอ LED โฆษณา",
    "digital billboard chiang mai",
    "OOH media",
    "สื่อโฆษณา outdoor",
    "ป้ายโฆษณาดิจิทัล",
    "LED billboard",
    "สื่อนอกบ้าน เชียงใหม่",
    "ลงโฆษณาจอ LED ตรง",
    "ไม่ผ่านเอเจนซี่",
  ],
  openGraph: {
    title: "Anajak Media — LED Billboard Operator Chiang Mai",
    description:
      "บริหารเครือข่ายจอ LED โดยตรง 3 ทำเลยุทธศาสตร์ ครอบคลุมเชียงใหม่ ลงโฆษณาตรง ไม่ผ่านเอเจนซี่",
    type: "website",
    siteName: "Anajak Media",
    url: "https://anajakmedia.com",
    locale: "th_TH",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anajak Media — LED Billboard Operator Chiang Mai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anajak Media — LED Billboard Operator Chiang Mai",
    description:
      "บริหารเครือข่ายจอ LED โดยตรง 3 ทำเลยุทธศาสตร์ ครอบคลุมเชียงใหม่ ลงโฆษณาตรง ไม่ผ่านเอเจนซี่",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://anajakmedia.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexThai.variable} antialiased`}
      >
        <OrganizationJsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
