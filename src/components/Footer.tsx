'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const quickLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.aboutUs, href: '/about-us' },
    { name: t.nav.technicalCapabilities, href: '/technical-capabilities' },
    { name: t.nav.qualityAssurance, href: '/quality-assurance' },
    { name: t.nav.process, href: '/process' },
    { name: t.nav.product, href: '/product' },
    { name: t.nav.contactUs, href: '/contact-us' },
  ];

  return (
    <footer className="bg-[#171A1D] text-gray-300 relative border-t-4 border-[#FCBE43]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About & Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white p-2.5 rounded shadow-md">
              <img
                src="/images/footer_logo.svg"
                alt="Accurate Casting Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed pt-2">
              {t.footer.aboutText}
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#FCBE43] font-bold block mb-2">
                {t.footer.followUs}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded bg-[#212429] hover:bg-[#FCBE43] hover:text-[#171A1D] flex items-center justify-center text-gray-300 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded bg-[#212429] hover:bg-[#FCBE43] hover:text-[#171A1D] flex items-center justify-center text-gray-300 transition-colors"
                  aria-label="Twitter / X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded bg-[#212429] hover:bg-[#FCBE43] hover:text-[#171A1D] flex items-center justify-center text-gray-300 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded bg-[#212429] hover:bg-[#FCBE43] hover:text-[#171A1D] flex items-center justify-center text-gray-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#FCBE43]">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#FCBE43] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FCBE43] transition-transform group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#FCBE43]">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FCBE43] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  {t.footer.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FCBE43] flex-shrink-0" />
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a
                    href="tel:+919909610203"
                    className="text-gray-400 hover:text-[#FCBE43] transition-colors"
                  >
                    (+91) 99096 10203
                  </a>
                  <span className="text-gray-600">/</span>
                  <a
                    href="tel:+919825111486"
                    className="text-gray-400 hover:text-[#FCBE43] transition-colors"
                  >
                    (+91) 98251 11486
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FCBE43] flex-shrink-0" />
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a
                    href="mailto:info@accuratecasting.com"
                    className="text-gray-400 hover:text-[#FCBE43] transition-colors"
                  >
                    info@accuratecasting.com
                  </a>
                  <span className="text-gray-600">/</span>
                  <a
                    href="mailto:marketing@accuratecasting.com"
                    className="text-gray-400 hover:text-[#FCBE43] transition-colors"
                  >
                    marketing@accuratecasting.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FCBE43] flex-shrink-0" />
                <span className="text-gray-400">
                  {t.footer.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#111316] py-5 px-4 text-center border-t border-gray-800 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>{t.footer.rights}</p>
          <p className="text-gray-400">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
