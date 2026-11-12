'use client';

import React, { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  FileText,
  Maximize2,
} from 'lucide-react';

const qualityPoints = [
  'In house spectrometer with 24 channels capable of testing Fe, Ni, Co, Al based materials and also Nitrogen content.',
  'All heats poured are tested on-line on Spectrometer before tapping.',
  'All raw materials and scrap used are chemically tested before melting.',
  'Sample button specimens are securely archived and stored for full traceability.',
  'In-house Universal Testing Machine (UTM) for tensile and elongation verification.',
  'In-house Hardness Testing Machine (Rockwell & Brinell hardness).',
  'In-house Charpy Impact Testing Machine with sub-zero capability.',
  'In-house Metallurgical Microscope with digital image analysis for grain structure & phase distribution.',
  'Complete testing suite: Chemical Analysis, Tensile Test, Impact Test, Radiography (X-Ray), Dye Penetrant (DPT), Corrosion Testing, Magnetic Particle Testing (MPT), and Microstructure.',
  'Castings can also be supplied under leading third-party inspection agencies such as LLOYDS, BUREAU VERITAS, DNV-GL, TUV, and SGS.',
];

export default function QualityAssurancePage() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [activeCert, setActiveCert] = useState<string | null>(null);

  const certificates = [
    {
      title: t.qualityPage.cert1Title,
      standard: t.qualityPage.cert1Std,
      image: '/images/1-2.jpg',
    },
    {
      title: t.qualityPage.cert2Title,
      standard: t.qualityPage.cert2Std,
      image: '/images/2-2-1.png',
    },
    {
      title: t.qualityPage.cert3Title,
      standard: t.qualityPage.cert3Std,
      image: '/images/3-1-1.png',
    },
  ];

  return (
    <div className="w-full">
      <PageBanner
        title={t.qualityPage.bannerTitle}
        subtitle={t.qualityPage.bannerSub}
        currentPage={t.qualityPage.bannerTitle}
      />

      <section className="py-20 max-w-7xl mx-auto px-4">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#FCBE43] font-black text-xs uppercase tracking-widest block">
            {t.qualityPage.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171A1D]">
            {t.qualityPage.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {t.qualityPage.desc}
          </p>
        </div>

        {/* 3 Core Accreditations Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#171A1D] text-white p-8 rounded-xl border-t-4 border-[#FCBE43] flex items-start gap-4">
            <Award className="w-10 h-10 text-[#FCBE43] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-black text-white">{t.qualityPage.isoTitle}</h3>
              <p className="text-xs text-gray-400 mt-1">
                {t.qualityPage.isoDesc}
              </p>
            </div>
          </div>

          <div className="bg-[#162088] text-white p-8 rounded-xl border-t-4 border-[#FCBE43] flex items-start gap-4">
            <ShieldCheck className="w-10 h-10 text-[#FCBE43] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-black text-white">{t.qualityPage.pedTitle}</h3>
              <p className="text-xs text-gray-200 mt-1">
                {t.qualityPage.pedDesc}
              </p>
            </div>
          </div>

          <div className="bg-[#212429] text-white p-8 rounded-xl border-t-4 border-[#FCBE43] flex items-start gap-4">
            <FileText className="w-10 h-10 text-[#FCBE43] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-black text-white">{t.qualityPage.adTitle}</h3>
              <p className="text-xs text-gray-400 mt-1">
                {t.qualityPage.adDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Quality Capabilities & Checkpoints */}
        <div className="bg-[#F7F8F9] rounded-2xl p-8 sm:p-12 border border-gray-200 mb-16">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[#FCBE43] font-black text-xs uppercase tracking-widest block">
              {t.qualityPage.infraBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#171A1D]">
              {t.qualityPage.infraTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {qualityPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FCBE43] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Showcase Gallery */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[#FCBE43] font-black text-xs uppercase tracking-widest block">
              {t.qualityPage.certBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#171A1D]">
              {t.qualityPage.certTitle}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              {t.qualityPage.certSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-cardHover border border-gray-200 cursor-pointer transition-all duration-300"
                onClick={() => setActiveCert(cert.image)}
              >
                <div className="relative h-96 bg-gray-50 overflow-hidden flex items-center justify-center p-3">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="bg-[#FCBE43] text-[#171A1D] px-4 py-2 rounded font-bold text-xs flex items-center gap-1.5 shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                      <span>{t.qualityPage.viewCert}</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white border-t border-gray-100 text-center">
                  <h4 className="font-black text-sm text-[#171A1D]">{cert.title}</h4>
                  <span className="text-xs text-gray-500">{cert.standard}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Certificate Fullview */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setActiveCert(null)}
          >
            <div
              className="relative max-w-3xl max-h-[90vh] bg-white rounded-xl p-3 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center font-bold hover:bg-black"
              >
                ✕
              </button>
              <div className="overflow-auto max-h-[85vh]">
                <img
                  src={activeCert}
                  alt="Accreditation Certificate"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
