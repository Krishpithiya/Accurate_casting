'use client';

import React, { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import Link from 'next/link';
import { ArrowRight, Eye } from 'lucide-react';
import { productsData } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';

export default function ProductPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [selectedProduct, setSelectedProduct] = useState<typeof productsData[0] | null>(null);

  return (
    <div className="w-full">
      <PageBanner
        title={t.nav.product}
        subtitle={t.productsSection.desc}
        currentPage={t.nav.product}
      />

      <section className="py-20 max-w-7xl mx-auto px-4">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#FCBE43] font-black text-xs uppercase tracking-widest block">
            {t.productsSection.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171A1D]">
            {t.productsSection.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {t.productsSection.desc}
          </p>
        </div>

        {/* 9 Product Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-cardHover border border-gray-100 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/75 text-white text-[11px] font-bold px-3 py-1 rounded backdrop-blur-sm">
                    {prod.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-black text-xl text-[#171A1D] group-hover:text-[#162088] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 border-t border-gray-100/60 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#162088] hover:text-[#FCBE43] transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>{t.productsSection.quickView}</span>
                </button>
                <Link
                  href={`/contact-us?product=${encodeURIComponent(prod.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#FCBE43] hover:bg-[#e5a832] text-[#171A1D] px-3.5 py-2 rounded transition"
                >
                  <span>{t.productsSection.inquire}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Quick View */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 bg-gray-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-sm font-bold hover:bg-black"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FCBE43]">
                      {selectedProduct.category}
                    </span>
                    <h3 className="text-2xl font-black text-[#171A1D]">
                      {selectedProduct.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="pt-2 flex gap-3">
                  <Link
                    href={`/contact-us?product=${encodeURIComponent(selectedProduct.title)}`}
                    className="flex-1 bg-[#162088] hover:bg-[#0e155c] text-white text-center py-2.5 rounded font-bold text-sm shadow transition"
                  >
                    {t.productsSection.modalBtn}
                  </Link>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-4 py-2.5 rounded border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
                  >
                    {t.productsSection.modalClose}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Custom Solution Card */}
        <div className="mt-16 bg-[#F7F8F9] rounded-2xl p-8 sm:p-12 border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-[#171A1D]">
              {t.productsSection.customTitle}
            </h3>
            <p className="text-sm text-gray-600 max-w-xl">
              {t.productsSection.customDesc}
            </p>
          </div>
          <Link
            href="/contact-us"
            className="flex-shrink-0 bg-[#FCBE43] hover:bg-[#e5a832] text-[#171A1D] font-bold px-8 py-3.5 rounded shadow transition"
          >
            {t.productsSection.customBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}
