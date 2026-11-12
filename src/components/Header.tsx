'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';
import LanguageSelector from '@/components/LanguageSelector';

export default function Header() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = getTranslations(language);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.aboutUs, href: '/about-us' },
    { name: t.nav.technicalCapabilities, href: '/technical-capabilities' },
    { name: t.nav.qualityAssurance, href: '/quality-assurance' },
    { name: t.nav.process, href: '/process' },
    { name: t.nav.product, href: '/product' },
    { name: t.nav.contactUs, href: '/contact-us' },
  ];

  return (
    <header className="w-full z-50 sticky top-0 bg-white transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'shadow-md py-2.5' : 'shadow-sm py-3.5'
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* 1. Left Brand Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <img
              src="/images/footer_logo.svg"
              alt="Accurate Casting - Melt-In Fidelity"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102 duration-200"
            />
          </Link>

          {/* 2. Desktop Navigation Menu (Matching Real Website Arrangement) */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-semibold whitespace-nowrap transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#162088]'
                      : 'text-[#171A1D] hover:text-[#162088]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2.5px] bg-[#FCBE43] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Language Selector in Desktop Nav */}
            <div className="pl-3 border-l border-gray-200 flex-shrink-0">
              <LanguageSelector variant="light" />
            </div>
          </nav>

          {/* 3. Mobile / Tablet Header Controls (< 1280px) */}
          <div className="xl:hidden flex items-center gap-3">
            <LanguageSelector variant="light" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-800 hover:text-[#162088] hover:bg-gray-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl px-4 sm:px-6 py-5 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-[#162088] font-bold border-l-4 border-[#FCBE43]'
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#162088]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
