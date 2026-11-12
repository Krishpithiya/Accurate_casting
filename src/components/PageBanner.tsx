'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  currentPage: string;
}

export default function PageBanner({ title, subtitle, currentPage }: PageBannerProps) {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div
      className="relative w-full py-20 sm:py-24 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/Other-page-banner.jpg')",
      }}
    >
      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-[#171A1D]/80" />

      <div className="relative max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-3">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mb-4">
            {subtitle}
          </p>
        )}

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-300 bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm border border-gray-700/50">
          <Link href="/" className="hover:text-[#FCBE43] transition-colors">
            {t.nav.home}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#FCBE43]" />
          <span className="text-[#FCBE43]">{currentPage}</span>
        </div>
      </div>
    </div>
  );
}
