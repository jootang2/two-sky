"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "학원소개",
    href: "/about",
    children: [
      { label: "인사말 / 연혁", href: "/about/intro" },
      { label: "학원 특징", href: "/about/features" },
      { label: "관별 소개", href: "/about/campus" },
      { label: "오시는 길", href: "/about/location" },
      { label: "합격 수기", href: "/about/stories" },
    ],
  },
  {
    label: "중등과정",
    href: "/middle",
    children: [
      { label: "중1", href: "/middle/1" },
      { label: "중2", href: "/middle/2" },
      { label: "중3", href: "/middle/3" },
      { label: "시스템 / 클리닉", href: "/middle/system" },
    ],
  },
  {
    label: "고등과정",
    href: "/high",
    children: [
      { label: "고1", href: "/high/1" },
      { label: "고2", href: "/high/2" },
      { label: "고3", href: "/high/3" },
      { label: "시스템 / 클리닉", href: "/high/system" },
    ],
  },
  {
    label: "강사소개",
    href: "/teachers",
    children: [
      { label: "강사소개", href: "/teachers/staff" },
    ],
  },
  // { label: "진단평가", href: "/diagnosis" },
  // { label: "공지사항", href: "/notice" },
  // { label: "Q&A", href: "/qna" },
  // { label: "게시판", href: "/board" },
];

function DesktopNavItem({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    timerRef.current = setTimeout(() => setOpen(false), 80);
  }

  return (
    <div className="relative h-14 flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {item.children ? (
        <button
          className={`px-4 h-14 flex items-center text-sm font-medium transition-colors whitespace-nowrap ${
            isActive ? "bg-orange-500 text-white" : "text-gray-200 hover:text-white hover:bg-white/10"
          }`}
        >
          {item.label}
        </button>
      ) : (
        <Link
          href={item.href}
          className={`px-4 h-14 flex items-center text-sm font-medium transition-colors whitespace-nowrap ${
            isActive ? "bg-orange-500 text-white" : "text-gray-200 hover:text-white hover:bg-white/10"
          }`}
        >
          {item.label}
        </Link>
      )}

      {/* 드롭다운 */}
      {item.children && open && (
        <div className="absolute top-full left-0 bg-[#2a2a2a] min-w-[140px] z-50 py-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-5 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 whitespace-nowrap"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="bg-[#1a1a1a] text-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center h-14 px-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 shrink-0 mr-6">
          <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            투
          </span>
          <span className="text-white font-bold text-base leading-tight">
            투스카이
            <br />
            <span className="text-[10px] font-normal text-gray-400 tracking-widest">
              we&apos;re for you
            </span>
          </span>
        </Link>

        {/* 데스크탑 네비 */}
        <nav className="hidden md:flex items-center flex-1">
          {navItems.map((item) => (
            <DesktopNavItem
              key={item.href}
              item={item}
              isActive={pathname === item.href || pathname.startsWith(item.href + "/")}
            />
          ))}
        </nav>

        {/* 우측 버튼 — 추후 활성화
        <div className="hidden md:flex items-center gap-2 ml-auto shrink-0">
          <button aria-label="공유" className="p-2 text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
          <Link href="/signup" className="px-4 py-1.5 border border-white text-white text-sm rounded hover:bg-white hover:text-[#1a1a1a] transition-colors">
            가입하기
          </Link>
          <Link href="/login" className="px-4 py-1.5 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition-colors">
            로그인하기
          </Link>
        </div>
        */}

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden ml-auto p-2 text-gray-300 hover:text-white"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="메뉴"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 네비 */}
      {mobileOpen && (
        <nav className="md:hidden bg-[#111] border-t border-white/10">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const isExpanded = mobileExpanded === item.href;

            return (
              <div key={item.href}>
                <div className="flex items-center">
                  {item.children ? (
                    <span className={`flex-1 px-6 py-3 text-sm ${isActive ? "text-orange-400" : "text-gray-300"}`}>
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex-1 px-6 py-3 text-sm ${isActive ? "text-orange-400" : "text-gray-300"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && (
                    <button
                      onClick={() => setMobileExpanded(isExpanded ? null : item.href)}
                      className="px-4 py-3 text-gray-500 hover:text-white"
                      aria-label="서브메뉴 열기"
                    >
                      <svg viewBox="0 0 24 24" className={`w-4 h-4 fill-current transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </button>
                  )}
                </div>

                {item.children && isExpanded && (
                  <div className="bg-[#0d0d0d]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-10 py-2.5 text-sm text-gray-400 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* 가입하기 / 로그인하기 — 추후 활성화
          <div className="flex gap-2 px-6 py-4 border-t border-white/10">
            <Link href="/signup" className="flex-1 text-center py-2 border border-white text-white text-sm rounded">
              가입하기
            </Link>
            <Link href="/login" className="flex-1 text-center py-2 bg-orange-500 text-white text-sm rounded">
              로그인하기
            </Link>
          </div>
          */}
        </nav>
      )}
    </header>
  );
}
