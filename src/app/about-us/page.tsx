'use client';

import React from 'react';
import PageBanner from '@/components/PageBanner';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';
import {
  Wrench,
  Compass,
  TestTube,
  Activity,
  CheckCircle,
  Flame,
  Scan,
  Cpu,
  Sparkles,
  ArrowRight,
  Target,
} from 'lucide-react';

export default function AboutUsPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const servicesList = [
    {
      title: 'DESIGN ASSISTANCE',
      desc: 'CAD/CAM modeling and gating system simulation for optimal fluidity, reduced porosity, and maximum casting yield.',
      icon: Compass,
    },
    {
      title: 'TOOL DEVELOPMENT',
      desc: 'In-house pattern tooling and precision aluminum dies designed for long batch runs and repeatable dimensional tolerances.',
      icon: Wrench,
    },
    {
      title: 'CHEMICAL ANALYSIS THROUGH SPECTROMETER',
      desc: '24-channel optical emission spectrometer testing Fe, Ni, Co, and Al alloys for 100% online chemical composition verification.',
      icon: TestTube,
    },
    {
      title: 'PHYSICAL PROPERTY ANALYSIS',
      desc: 'Universal tensile testing, yield strength verification, impact testing, and hardness checking (BHN/HRC).',
      icon: Activity,
    },
    {
      title: 'DIMENSIONAL TESTING',
      desc: 'High-precision coordinate measuring, gauges, and surface profilometers ensuring tolerance conformance to ISO 2768 & VDA P 690 D2.',
      icon: CheckCircle,
    },
    {
      title: 'HEAT TREATMENT',
      desc: 'Lloyds Register certified heat treatment furnaces for annealing, normalizing, solution annealing, and quenching cycles.',
      icon: Flame,
    },
    {
      title: 'RADIOGRAPHY',
      desc: 'Non-destructive testing (NDT), X-ray radiography, dye penetrant, and magnetic particle testing (MPT) to guarantee internal soundness.',
      icon: Scan,
    },
    {
      title: 'MACHINING',
      desc: 'Full supply of proof-machined or finish-machined castings through precision CNC turning, VMC milling, and grinding.',
      icon: Cpu,
    },
    {
      title: 'FINISHING OPERATIONS',
      desc: 'Gate cutting, grinding, shot blasting, glass bead blasting, passivation, electro-polishing, and surface protective coatings.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="w-full">
      <PageBanner
        title={t.aboutPage.bannerTitle}
        subtitle={t.aboutPage.bannerSub}
        currentPage={t.aboutPage.bannerTitle}
      />

      {/* Main About Story */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-[#FCBE43] font-black text-xs uppercase tracking-widest block mb-1">
                {t.aboutPage.meltInFidelity}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#171A1D] leading-tight">
                {t.aboutPage.title}
              </h2>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {t.aboutPage.p1}
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {t.aboutPage.p2}
            </p>

            {/* Key Specs Card */}
            <div className="bg-[#F7F8F9] p-6 rounded-xl border border-gray-200 space-y-3">
              <h3 className="font-black text-base text-[#162088] uppercase tracking-wide">
                {t.aboutPage.keySpecsTitle}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FCBE43] font-bold">•</span>
                  <span><strong>Capacity:</strong> {t.aboutPage.specCapacity}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FCBE43] font-bold">•</span>
                  <span><strong>Piece Weight:</strong> {t.aboutPage.specWeight}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FCBE43] font-bold">•</span>
                  <span><strong>Tolerance:</strong> {t.aboutPage.specTolerance}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FCBE43] font-bold">•</span>
                  <span><strong>Metals:</strong> {t.aboutPage.specMetals}</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {t.aboutPage.p3}
            </p>
          </div>

          {/* Right Imagery */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/abou_sec-1024x684.jpg"
                alt="Accurate Casting Works"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#171A1D] text-white p-5 rounded-xl border-l-4 border-[#FCBE43]">
                <div className="text-3xl font-black text-[#FCBE43]">550 MT</div>
                <div className="text-xs uppercase font-semibold text-gray-300 mt-1">
                  {t.aboutPage.annualCapacity}
                </div>
              </div>
              <div className="bg-[#162088] text-white p-5 rounded-xl border-l-4 border-[#FCBE43]">
                <div className="text-3xl font-black text-white">ISO 9001</div>
                <div className="text-xs uppercase font-semibold text-gray-200 mt-1">
                  {t.aboutPage.pedCertified}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Services */}
      <section className="py-20 bg-[#F7F8F9] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-[#FCBE43] font-black text-xs uppercase tracking-widest block">
              {t.aboutPage.infraBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#171A1D]">
              {t.aboutPage.infraTitle}
            </h2>
            <p className="text-gray-600 text-sm">
              {t.aboutPage.infraDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="bg-white p-7 rounded-xl shadow-card hover:shadow-cardHover border border-gray-100 flex flex-col justify-between transition-all transform hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-amber-50 text-[#162088] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-black text-base text-[#171A1D] tracking-tight">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img
              src="/images/OUR-VISION.jpg"
              alt="Our Vision - Accurate Casting"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-[#FCBE43]" />
              <span className="text-[#FCBE43] font-black text-xs uppercase tracking-widest">
                {t.aboutPage.futureReady}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#171A1D] leading-tight">
              {t.aboutPage.visionTitle}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {t.aboutPage.visionP1}
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {t.aboutPage.visionP2}
            </p>

            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#FCBE43] hover:bg-[#e5a832] text-[#171A1D] font-bold text-sm px-7 py-3.5 rounded shadow transition-all"
              >
                <span>{t.aboutPage.partnerBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
