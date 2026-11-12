'use client';

import React from 'react';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import StatCounter from '@/components/StatCounter';
import TestimonialSlider from '@/components/TestimonialSlider';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Leaf,
  Layers,
  Settings,
  Flame,
  Award,
  PhoneCall,
  Clock,
} from 'lucide-react';

const featuredProductsList = [
  { title: 'PUMPS', img: '/images/p_1.jpg', cat: 'Fluid Handling' },
  { title: 'AGRICULTURE', img: '/images/p_2.jpg', cat: 'Farming Equipment' },
  { title: 'EARTH MOVING', img: '/images/p_3.jpg', cat: 'Heavy Machinery' },
  { title: 'HARDWARE', img: '/images/p_4.jpg', cat: 'Architectural' },
  { title: 'AUTOMOBILES', img: '/images/p_5.jpg', cat: 'OEM Parts' },
  { title: 'FOOD PROCESSING', img: '/images/p_6.jpg', cat: 'Sanitary CF8M' },
];

export default function HomePage() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const pillars = [
    {
      icon: Cpu,
      title: t.pillars.p1Title,
      desc: t.pillars.p1Desc,
    },
    {
      icon: ShieldCheck,
      title: t.pillars.p2Title,
      desc: t.pillars.p2Desc,
    },
    {
      icon: Leaf,
      title: t.pillars.p3Title,
      desc: t.pillars.p3Desc,
    },
  ];

  const services = [
    {
      id: 'investment-casting',
      title: t.servicesSection.s1Title,
      icon: Flame,
      desc: t.servicesSection.s1Desc,
      tag: t.servicesSection.s1Tag,
    },
    {
      id: 'alloy-steel',
      title: t.servicesSection.s2Title,
      icon: Layers,
      desc: t.servicesSection.s2Desc,
      tag: t.servicesSection.s2Tag,
    },
    {
      id: 'carbon-steel',
      title: t.servicesSection.s3Title,
      icon: Settings,
      desc: t.servicesSection.s3Desc,
      tag: t.servicesSection.s3Tag,
    },
    {
      id: 'stainless-steel',
      title: t.servicesSection.s4Title,
      icon: Award,
      desc: t.servicesSection.s4Desc,
      tag: t.servicesSection.s4Tag,
    },
  ];

  const readyBadges = [
    { title: t.readyToServe.b1Title, desc: t.readyToServe.b1Desc },
    { title: t.readyToServe.b2Title, desc: t.readyToServe.b2Desc },
    { title: t.readyToServe.b3Title, desc: t.readyToServe.b3Desc },
    { title: t.readyToServe.b4Title, desc: t.readyToServe.b4Desc },
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Top 3 Pillars */}
      <section className="relative -mt-10 sm:-mt-14 z-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-cardHover border-t-4 border-[#FCBE43] transition-all transform hover:-translate-y-1.5 duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-[#162088]/10 text-[#162088] flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-[#171A1D] tracking-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Welcome / About Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Layout */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/abou_sec-1024x684.jpg"
                alt="Accurate Casting Facility & Team"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Overlay Badge Graphic */}
            <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-40 sm:w-56 drop-shadow-2xl">
              <img
                src="/images/Group-1.png"
                alt="Accurate Casting Quality Badge"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[#FCBE43] text-xs sm:text-sm font-extrabold uppercase tracking-widest block">
                {t.homeAbout.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171A1D] leading-tight">
                {t.homeAbout.title}
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {t.homeAbout.desc1}
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {t.homeAbout.desc2}
            </p>

            {/* Metallurgy & Capabilities Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {t.homeAbout.skills.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#171A1D] bg-[#F7F8F9] px-3.5 py-2.5 rounded-lg border border-gray-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FCBE43] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 bg-[#162088] hover:bg-[#0e155c] text-white font-bold text-sm px-7 py-3.5 rounded shadow-md hover:shadow-lg transition-all"
              >
                <span>{t.homeAbout.readMore}</span>
                <ArrowRight className="w-4 h-4 text-[#FCBE43]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stat Counter */}
      <StatCounter />

      {/* 5. Why Choose Us & Expertise */}
      <section
        className="py-20 lg:py-24 bg-cover bg-center relative text-white"
        style={{ backgroundImage: "url('/images/Why-Choose-Us-Bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#171A1D]/90" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-[#FCBE43] font-extrabold text-xs sm:text-sm uppercase tracking-widest block">
                {t.whyChoose.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                {t.whyChoose.heading}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {t.whyChoose.desc1}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {t.whyChoose.desc2}
              </p>

              <div className="pt-2">
                <Link
                  href="/technical-capabilities"
                  className="inline-flex items-center gap-2 bg-[#FCBE43] hover:bg-[#e5a832] text-[#171A1D] font-bold text-sm px-6 py-3 rounded shadow transition-all"
                >
                  <span>{t.whyChoose.btn}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Expertise Progress Bars */}
            <div className="bg-[#212429]/95 p-8 sm:p-10 rounded-2xl border border-gray-700/60 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold text-[#FCBE43] uppercase tracking-wider block mb-1">
                  {t.whyChoose.trackRecord}
                </span>
                <h3 className="text-2xl font-black text-white">
                  {t.whyChoose.expertiseTitle}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {t.whyChoose.expertiseDesc}
                </p>
              </div>

              {t.whyChoose.skills.map((skill) => (
                <div key={skill.title} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-gray-200">{skill.title}</span>
                    <span className="text-[#FCBE43]">{skill.pct}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#162088] via-[#FCBE43] to-[#FCBE43] rounded-full transition-all duration-1000"
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. We Are Always Ready To Serve Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Procedure Graphic */}
          <div className="flex justify-center">
            <img
              src="/images/Procedure-For-Getting-Our-Best-Service.png"
              alt="Procedure For Getting Our Best Service"
              className="max-w-md w-full h-auto drop-shadow-xl"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <span className="text-[#FCBE43] font-extrabold text-xs sm:text-sm uppercase tracking-widest block">
              {t.readyToServe.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#171A1D] leading-tight">
              {t.readyToServe.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {t.readyToServe.desc}
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {readyBadges.map((b) => (
                <div key={b.title} className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#162088]" />
                    <h4 className="font-bold text-sm text-[#171A1D]">{b.title}</h4>
                  </div>
                  <p className="text-xs text-gray-500 pl-6">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick Contact snippet */}
            <div className="pt-4 p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FCBE43] text-[#171A1D] flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase font-semibold">
                    {t.readyToServe.hotlineTitle}
                  </span>
                  <div className="text-sm sm:text-base font-black text-[#171A1D]">(+91) 91578 15285 / 99096 10203</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>{t.readyToServe.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Services Section */}
      <section className="py-20 bg-[#F7F8F9] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#FCBE43] font-black text-xs sm:text-sm uppercase tracking-widest block">
              {t.servicesSection.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171A1D]">
              {t.servicesSection.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {t.servicesSection.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-white rounded-xl p-7 shadow-card hover:shadow-cardHover border-b-4 border-[#FCBE43] flex flex-col justify-between transition-all transform hover:-translate-y-1.5 duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-12 h-12 rounded-lg bg-[#162088] text-[#FCBE43] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                        {srv.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-[#171A1D]">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/technical-capabilities"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#162088] hover:text-[#FCBE43] transition-colors"
                    >
                      <span>{t.servicesSection.viewSpecs}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Explore More Products */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-[#FCBE43] font-black text-xs sm:text-sm uppercase tracking-widest block mb-2">
              {t.productsSection.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#171A1D]">
              {t.productsSection.title}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {t.productsSection.desc}
            </p>
          </div>
          <Link
            href="/product"
            className="inline-flex items-center gap-2 bg-[#FCBE43] hover:bg-[#e5a832] text-[#171A1D] font-bold text-sm px-6 py-3 rounded shadow transition"
          >
            <span>{t.productsSection.browseAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProductsList.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-cardHover border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/70 text-white text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-sm">
                  {p.cat}
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white">
                <h3 className="font-black text-base text-[#171A1D] group-hover:text-[#162088] transition-colors">
                  {p.title}
                </h3>
                <Link
                  href="/product"
                  className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#FCBE43] group-hover:text-[#171A1D] flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Testimonial Slider */}
      <TestimonialSlider />

      {/* 10. Tired of Getting Costly Products after all? */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#FCBE43] font-black text-xs sm:text-sm uppercase tracking-widest block">
              {t.costEffective.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171A1D] leading-tight">
              {t.costEffective.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {t.costEffective.desc}
            </p>

            <div className="space-y-3 pt-2">
              {t.costEffective.points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 p-3.5 bg-[#F7F8F9] rounded-lg border border-gray-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#FCBE43] flex-shrink-0" />
                  <span className="text-sm font-bold text-[#171A1D]">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#162088] hover:bg-[#0e155c] text-white font-bold text-sm px-7 py-3.5 rounded shadow transition-all"
              >
                <span>{t.costEffective.btn}</span>
                <ArrowRight className="w-4 h-4 text-[#FCBE43]" />
              </Link>
            </div>
          </div>

          {/* Right Banner / Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/Why-Choose-Us-2.jpg"
                alt="High quality casting manufacturing"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA Banner: "Connect With Us" */}
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('/images/We-Are-Available-For-24-7-Emergency-Services.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#162088]/85" />
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="text-[#FCBE43] font-black text-xs sm:text-sm uppercase tracking-widest block">
            {t.cta.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {t.cta.title}
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {t.cta.desc}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact-us"
              className="bg-[#FCBE43] hover:bg-[#e5a832] text-[#171A1D] font-bold px-8 py-3.5 rounded shadow-lg transition-all"
            >
              {t.cta.btnContact}
            </Link>
            <a
              href="tel:+919909610203"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-3.5 rounded backdrop-blur-sm transition-all"
            >
              {t.cta.btnCall}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
