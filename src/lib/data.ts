export interface Location {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  dailyImpressions: string;
  screenSize: string;
  resolution: string;
  orientation: string;
  operatingHours: string;
  dailyTraffic: string;
  visibility: string;
  directions: string;
  mapUrl: string;
  heroImage: string;
  images: string[];
  campaigns: Campaign[];
}

export interface Campaign {
  slug: string;
  brand: string;
  title: string;
  location: string;
  locationSlug: string;
  duration: string;
  image: string;
  category: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export const locations: Location[] = [
  {
    slug: "rinkhom",
    name: "แยกรินคำ",
    nameEn: "Rinkhom Junction",
    description:
      "ทำเลใจกลางเชียงใหม่ จุดตัดถนนสายหลัก มองเห็นได้จากทุกทิศทาง ผู้คนสัญจรหนาแน่นตลอดทั้งวัน",
    dailyImpressions: "50,000+",
    screenSize: "8 x 4 เมตร",
    resolution: "1920 x 1080 px",
    orientation: "Landscape 16:9",
    operatingHours: "06:00 – 00:00",
    dailyTraffic: "30,000+ คัน/วัน",
    visibility: "≤200 เมตร",
    directions: "4 ทิศทาง",
    mapUrl: "https://maps.google.com/?q=แยกรินคำ+เชียงใหม่",
    heroImage: "/images/locations/rinkhom-hero.jpg",
    images: [
      "/images/locations/rinkhom-hero.jpg",
    ],
    campaigns: [],
  },
  {
    slug: "saengtawan",
    name: "แยกแสงตะวัน",
    nameEn: "Saengtawan Junction",
    description:
      "ทำเลยุทธศาสตร์บนถนนสายหลัก จุดเชื่อมต่อสำคัญที่มีผู้สัญจรจำนวนมากทั้งรถยนต์และคนเดินเท้า",
    dailyImpressions: "45,000+",
    screenSize: "6 x 3 เมตร",
    resolution: "1920 x 1080 px",
    orientation: "Landscape 16:9",
    operatingHours: "06:00 – 00:00",
    dailyTraffic: "25,000+ คัน/วัน",
    visibility: "≤150 เมตร",
    directions: "3 ทิศทาง",
    mapUrl: "https://maps.google.com/?q=แยกแสงตะวัน+เชียงใหม่",
    heroImage: "/images/locations/saengtawan-hero.jpg",
    images: [
      "/images/locations/saengtawan-hero.jpg",
    ],
    campaigns: [],
  },
  {
    slug: "ruamchok",
    name: "แยกรวมโชค",
    nameEn: "Ruamchok Junction",
    description:
      "โซนธุรกิจและไลฟ์สไตล์ ใกล้ห้างสรรพสินค้าและมหาวิทยาลัย กลุ่มเป้าหมายหลากหลายทั้งวัยทำงานและนักศึกษา",
    dailyImpressions: "55,000+",
    screenSize: "8 x 4 เมตร",
    resolution: "1920 x 1080 px",
    orientation: "Landscape 16:9",
    operatingHours: "06:00 – 00:00",
    dailyTraffic: "35,000+ คัน/วัน",
    visibility: "≤200 เมตร",
    directions: "4 ทิศทาง",
    mapUrl: "https://maps.google.com/?q=แยกรวมโชค+เชียงใหม่",
    heroImage: "/images/locations/ruamchok-hero.jpg",
    images: [
      "/images/locations/ruamchok-hero.jpg",
    ],
    campaigns: [],
  },
];

export const campaigns: Campaign[] = [
  {
    slug: "brand-launch-alpha",
    brand: "Brand Alpha",
    title: "Grand Opening Campaign",
    location: "แยกรินคำ",
    locationSlug: "rinkhom",
    duration: "1 Month",
    image: "/images/showcase/campaign-1.jpg",
    category: "อีเวนต์",
  },
  {
    slug: "food-festival-2026",
    brand: "Food Festival",
    title: "Chiang Mai Food Fest 2026",
    location: "แยกแสงตะวัน",
    locationSlug: "saengtawan",
    duration: "2 Weeks",
    image: "/images/showcase/campaign-2.jpg",
    category: "อาหาร",
  },
  {
    slug: "real-estate-luxury",
    brand: "The Aurum",
    title: "Luxury Residence Launch",
    location: "แยกรวมโชค",
    locationSlug: "ruamchok",
    duration: "1 Month",
    image: "/images/showcase/campaign-3.jpg",
    category: "อสังหาริมทรัพย์",
  },
  {
    slug: "fashion-brand-x",
    brand: "Echoes of Silence",
    title: "AW24 Collection",
    location: "แยกรินคำ",
    locationSlug: "rinkhom",
    duration: "3 Weeks",
    image: "/images/showcase/campaign-4.jpg",
    category: "แฟชั่น",
  },
  {
    slug: "tech-launch",
    brand: "Nebula One",
    title: "The Future Is Now",
    location: "แยกแสงตะวัน",
    locationSlug: "saengtawan",
    duration: "2 Weeks",
    image: "/images/showcase/campaign-5.jpg",
    category: "เทคโนโลยี",
  },
  {
    slug: "auto-show",
    brand: "Aurum Hyperion",
    title: "Pure Performance",
    location: "แยกรวมโชค",
    locationSlug: "ruamchok",
    duration: "1 Month",
    image: "/images/showcase/campaign-6.jpg",
    category: "ยานยนต์",
  },
];

export const services: Service[] = [
  {
    title: "ลงโฆษณาจอ LED",
    description:
      "ลงโฆษณาบนเครือข่ายจอ LED ที่เราบริหารโดยตรง 3 ทำเลยุทธศาสตร์ ครอบคลุมเชียงใหม่",
    icon: "monitor",
    image: "/images/services/service-billboard.jpg",
    features: [
      "จอ LED คุณภาพสูง Full HD",
      "3 ทำเลยุทธศาสตร์",
      "เลือกสล็อต 15 / 30 / 60 วินาที",
      "Multi-Location Package ลดสูงสุด 20%",
      "Proof of Play Report ทุกแคมเปญ",
      "เปลี่ยนชิ้นงานได้ระหว่างสัญญา",
    ],
  },
];

export interface SlotPricing {
  duration: number;
  label: string;
  pricePerPlay: Record<string, number>;
}

export interface DurationOption {
  key: string;
  label: string;
  days: number;
  discount: number;
}

export const slotDurations: SlotPricing[] = [
  {
    duration: 15,
    label: "15 วินาที",
    pricePerPlay: { rinkhom: 150, saengtawan: 120, ruamchok: 130 },
  },
  {
    duration: 30,
    label: "30 วินาที",
    pricePerPlay: { rinkhom: 250, saengtawan: 200, ruamchok: 220 },
  },
  {
    duration: 60,
    label: "60 วินาที",
    pricePerPlay: { rinkhom: 450, saengtawan: 360, ruamchok: 400 },
  },
];

export const playsPerDayOptions = [10, 20, 30, 50];

export const durationOptions: DurationOption[] = [
  { key: "1d", label: "1 วัน", days: 1, discount: 0 },
  { key: "1w", label: "1 สัปดาห์", days: 7, discount: 0.05 },
  { key: "2w", label: "2 สัปดาห์", days: 14, discount: 0.1 },
  { key: "1m", label: "1 เดือน", days: 30, discount: 0.15 },
  { key: "3m", label: "3 เดือน", days: 90, discount: 0.25 },
  { key: "6m", label: "6 เดือน", days: 180, discount: 0.3 },
  { key: "12m", label: "12 เดือน", days: 365, discount: 0.35 },
];

export const multiLocationDiscount: Record<number, number> = {
  1: 0,
  2: 0.1,
  3: 0.2,
};

export interface AddOn {
  key: string;
  label: string;
  description: string;
  price: number;
  unit: string;
}

export const addOns: AddOn[] = [
  {
    key: "priority",
    label: "จัดลำดับช่วงเวลาไพร์ม",
    description: "จัดลำดับการเล่นให้อยู่ช่วง Prime Time (ช่วงเช้า/เย็น เวลารถติด)",
    price: 2000,
    unit: "เดือน",
  },
  {
    key: "express",
    label: "ขึ้นจอด่วน",
    description: "เริ่มขึ้นจอภายใน 24 ชั่วโมงหลังชำระเงิน",
    price: 1500,
    unit: "ครั้ง",
  },
];

export const galleryImages = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
];

export const stats = [
  { value: "17+", label: "Years", labelTh: "ปีประสบการณ์" },
  { value: "3", label: "Locations", labelTh: "ทำเลยุทธศาสตร์" },
  { value: "150,000+", label: "Daily Impressions", labelTh: "การมองเห็นต่อวัน" },
  { value: "24/7", label: "Always On", labelTh: "เปิดให้เห็นตลอด" },
];
