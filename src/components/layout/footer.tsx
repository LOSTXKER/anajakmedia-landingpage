import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13.4a8.16 8.16 0 005.58 2.2V12.1a4.84 4.84 0 01-3.77-1.64V6.69h3.77z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0F]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
              ANAJAK
            </span>
            <span className="ml-2 text-sm font-medium tracking-widest text-muted uppercase">
              Media
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              ผู้บริหารเครือข่ายจอ LED เชียงใหม่
              <br />
              ลงโฆษณาตรง ไม่ผ่านเอเจนซี่
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              หจก. อาณาจักร์ เอ็นเตอร์ไพรส์
              <br />
              39/12 ม.8 ต.ป่าแดด อ.เมือง จ.เชียงใหม่ 50100
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-accent/40 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-accent/40 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-accent/40 hover:text-white"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-accent/40 hover:text-white"
                aria-label="LINE Official"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              จอ LED
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  จอ LED ทั้งหมด
                </Link>
              </li>
              <li>
                <Link
                  href="/products/rinkhom"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  แยกรินคำ
                </Link>
              </li>
              <li>
                <Link
                  href="/products/saengtawan"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  แยกแสงตะวัน
                </Link>
              </li>
              <li>
                <Link
                  href="/products/ruamchok"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  แยกรวมโชค
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              บริษัท
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  คำนวณราคา
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  ผลงาน
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link
                  href="/community-screen"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  Community Screen
                  <span className="ml-1.5 inline-flex rounded-full bg-[#FF2D78] px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
                    ใหม่
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              ติดต่อ
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  ติดต่อเรา
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  LINE Official
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@anajakmedia.com"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  contact@anajakmedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Anajak Media สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  );
}
