"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "학원소개", href: "/about" },
  { label: "중등과정", href: "/middle" },
  { label: "고등과정", href: "/high" },
  { label: "강사소개", href: "/teachers" },
  { label: "진단평가", href: "/diagnosis" },
  { label: "공지사항", href: "/notice" },
  { label: "Q&A", href: "/qna" },
  { label: "게시판", href: "/board" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#1a1a1a] text-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center h-14 px-4">
        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 h-14 flex items-center text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2 ml-auto shrink-0">
          <button
            aria-label="공유"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
          <Link
            href="/signup"
            className="px-4 py-1.5 border border-white text-white text-sm rounded hover:bg-white hover:text-[#1a1a1a] transition-colors"
          >
            가입하기
          </Link>
          <Link
            href="/login"
            className="px-4 py-1.5 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition-colors"
          >
            로그인하기
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden ml-auto p-2 text-gray-300 hover:text-white"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="메뉴"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-[#111] border-t border-white/10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 text-sm ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-300 hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="flex gap-2 px-6 py-4 border-t border-white/10">
            <Link
              href="/signup"
              className="flex-1 text-center py-2 border border-white text-white text-sm rounded"
            >
              가입하기
            </Link>
            <Link
              href="/login"
              className="flex-1 text-center py-2 bg-orange-500 text-white text-sm rounded"
            >
              로그인하기
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
