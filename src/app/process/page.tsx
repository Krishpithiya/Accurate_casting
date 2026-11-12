'use client';

import React from 'react';
import PageBanner from '@/components/PageBanner';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';
import {
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function ProcessPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const processSteps = [
    {
      step: '01',
      title: 'Tool & Die Development',
      desc: 'The Dies (Patterns/Tools) are manufactured using latest CAD/CAM facilities for exact replication of complex contours.',
    },
    {
      step: '02',
      title: 'Design & Technical Support',
      desc: 'Accurate Casting provides technical support to its customers to develop cost saving and more efficient products.',
    },
    {
      step: '03',
      title: 'Wax Pattern Injection',
      desc: 'Injection and production of wax patterns from Dies (Patterns/tools). All Wax patterns are 100% dimensionally checked.',
    },
    {
      step: '04',
      title: 'Ceramic Shell Moulding',
      desc: 'The Wax pattern after forming the tree or cluster undergoes ceramic coating in temperature and humidity controlled rooms for superior dimensional accuracy and finish.',
    },
    {
      step: '05',
      title: 'De-Waxing (Lost Wax Method)',
      desc: 'After completing coating, wax is removed by de-waxing in an autoclave/hot bath, creating the precision ceramic shell cavity.',
    },
    {
      step: '06',
      title: 'Shell Baking & Molten Pouring',
      desc: 'Ceramic moulds are baked at temperatures ranging from 900°C to 1150°C. Molten alloy is poured into the pre-heated ceramic moulds.',
    },
    {
      step: '07',
      title: 'Knockout & Fettling',
      desc: 'The casting undergoes fettling: Gate Cutting, Gate Machining / grinding, Sand Blasting, Shot Blasting, Leaching, and Deburring.',
    },
    {
      step: '08',
      title: 'Certified Heat Treatment',
      desc: 'Castings undergo Heat Treatment as per material specifications. Annealing, solution annealing, normalizing, or hardening.',
    },
    {
      step: '09',
      title: 'Cycle Documentation',
      desc: 'Heat Treatment graphs and cycles are recorded and documented for complete metallurgical traceability.',
    },
    {
      step: '10',
      title: 'Lloyds Register Certified',
      desc: 'Our Heat Treatment furnace is calibrated and certified by LLOYDS REGISTER OF SHIPPING for international marine/industrial compliance.',
    },
    {
      step: '11',
      title: '100% Visual Inspection',
      desc: 'All castings are subject to 100% visual inspection to verify absence of surface defects, inclusions, or flaws.',
    },
    {
      step: '12',
      title: 'Critical Dimension Testing',
      desc: 'All critical dimensions are 100% inspected before packing and shipment against tight engineering tolerances.',
    },
    {
      step: '13',
      title: 'Machined Condition Supply',
      desc: 'Accurate Casting can supply castings in fully proof-machined or finished CNC/VMC machined condition ready for assembly.',
    },
    {
      step: '14',
      title: 'Surface Finishing & Packing',
      desc: 'Castings supplied with various finishes: Passivation, Electro-polishing, Blackening, Powder Coating, Shot Blasted, Glass Bead Blasted.',
    },
  ];

  return (
    <div className="w-full">
      <PageBanner
        title={t.processPage.bannerTitle}
        subtitle={t.processPage.bannerSub}
        currentPage={t.processPage.bannerTitle}
      />

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#FCBE43] font-black text-xs uppercase tracking-widest block">
            {t.processPage.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171A1D]">
            {t.processPage.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {t.processPage.desc}
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative bg-white rounded-xl p-8 shadow-card hover:shadow-cardHover border border-gray-100 flex flex-col justify-between transition-all transform hover:-translate-y-1 group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-black text-[#FCBE43] font-mono group-hover:scale-110 transition-transform">
                    {step.step}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#162088]" />
                </div>
                <h3 className="text-lg font-black text-[#171A1D] mb-3 group-hover:text-[#162088] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-4 flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                <CheckCircle className="w-3.5 h-3.5 text-[#FCBE43]" />
                <span>{t.processPage.verifiedCheckpoint}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Summary CTA */}
        <div className="mt-16 bg-[#171A1D] text-white rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 border-t-4 border-[#FCBE43]">
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">
              {t.processPage.ctaTitle}
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              {t.processPage.ctaDesc}
            </p>
          </div>
          <Link
            href="/contact-us"
            className="flex-shrink-0 bg-[#FCBE43] hover:bg-[#e5a832] text-[#171A1D] font-bold px-8 py-3.5 rounded shadow transition-all flex items-center gap-2"
          >
            <span>{t.processPage.ctaBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
