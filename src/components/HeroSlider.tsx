'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';

const slideImages = ['/images/Slider-1.jpg', '/images/Slider-2.jpg'];

export default function HeroSlider() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slideImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slideImages.length) % slideImages.length);

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[700px] overflow-hidden bg-black select-none">
      {slideImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000"
            style={{ backgroundImage: `url(${img})` }}
          />

          {/* Dark Overlay for optimal text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35" />

          {/* Slide Content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="max-w-2xl text-white space-y-4 sm:space-y-6">
              <span className="inline-block text-[#FCBE43] text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-black/40 px-3.5 py-1 rounded border-l-4 border-[#FCBE43]">
                {t.slider.weAre}
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white uppercase drop-shadow-md">
                {t.slider.title}
              </h1>

              <p className="text-lg sm:text-2xl text-gray-200 font-medium leading-relaxed drop-shadow">
                {t.slider.description}
              </p>

              <div className="pt-2 sm:pt-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#FCBE43] hover:bg-[#e5a832] text-[#171A1D] font-bold text-sm sm:text-base px-8 py-3.5 rounded shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <span>{t.slider.contactNow}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Chevrons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#FCBE43] text-white hover:text-black flex items-center justify-center transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#FCBE43] text-white hover:text-black flex items-center justify-center transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slideImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? 'w-8 bg-[#FCBE43]' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
