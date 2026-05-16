import Link from "next/link";

const LEGAL_LINKS = [
  { label: "서비스 이용약관", href: "/terms" },
  { label: "개인정보 처리방침", href: "/privacy" },
  { label: "학습자 가이드", href: "/guide" },
];

const SOCIAL_LINKS = [
  {
    label: "인스타그램",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "유튜브",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#555555] text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-0">

        {/* 좌측: 로고 + 카피라이트 */}
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2 mb-3 w-fit">
            <span className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
              투
            </span>
            <span className="text-white font-bold text-sm leading-tight">
              투스카이
              <span className="block text-[9px] font-normal text-gray-300 tracking-widest">
                we&apos;re for you
              </span>
            </span>
          </Link>
          <p className="text-gray-300 text-xs">투스카이 수학과학 학원</p>
          <p className="text-gray-400 text-xs mt-0.5">
            ©Copyright 투스카이 수학과학 학원 All rights reserved
          </p>
        </div>

        {/* 중앙: 법적 링크 */}
        <div className="flex items-center gap-0 flex-wrap">
          {LEGAL_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="text-gray-300 hover:text-white text-xs transition-colors px-3"
              >
                {link.label}
              </Link>
              {i < LEGAL_LINKS.length - 1 && (
                <span className="text-gray-500 text-xs">|</span>
              )}
            </span>
          ))}
        </div>

        {/* 우측: 소셜 */}
        <div className="flex items-center gap-3 md:ml-8">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
