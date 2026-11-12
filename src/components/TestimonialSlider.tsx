'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';

export default function TestimonialSlider() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const testimonials = [
    {
      id: 1,
      name: t.testimonialsSection.r1Name,
      role: t.testimonialsSection.r1Role,
      content: t.testimonialsSection.r1Quote,
      rating: 5,
      avatar: '/images/review_1.jpg',
    },
    {
      id: 2,
      name: t.testimonialsSection.r2Name,
      role: t.testimonialsSection.r2Role,
      content: t.testimonialsSection.r2Quote,
      rating: 5,
      avatar: '/images/review_1.jpg',
    },
    {
      id: 3,
      name: t.testimonialsSection.r3Name,
      role: t.testimonialsSection.r3Role,
      content: t.testimonialsSection.r3Quote,
      rating: 5,
      avatar: '/images/review_1.jpg',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="relative py-24 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/Lets-See-What-Our-Client-Say.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#171A1D]/85" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <span className="text-[#FCBE43] font-bold text-xs uppercase tracking-widest block mb-2">
          {t.testimonialsSection.badge}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          {t.testimonialsSection.title}
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-12 text-sm sm:text-base">
          {t.testimonialsSection.desc}
        </p>

        {/* Testimonial Card */}
        <div className="relative bg-[#212429]/90 border border-gray-700/60 rounded-xl p-8 sm:p-12 shadow-2xl backdrop-blur-sm min-h-[260px] flex flex-col justify-center items-center">
          <Quote className="w-12 h-12 text-[#FCBE43]/30 mb-4" />

          <p className="text-base sm:text-lg text-gray-200 italic leading-relaxed mb-6 max-w-2xl">
            &ldquo;{testimonials[current].content}&rdquo;
          </p>

          {/* Rating Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FCBE43] text-[#FCBE43]" />
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              className="w-12 h-12 rounded-full border-2 border-[#FCBE43] object-cover"
            />
            <div className="text-left">
              <h4 className="font-bold text-white text-base">
                {testimonials[current].name}
              </h4>
              <span className="text-xs text-[#FCBE43] font-semibold">
                {testimonials[current].role}
              </span>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-[#FCBE43] hover:text-black text-white flex items-center justify-center transition"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-[#FCBE43] hover:text-black text-white flex items-center justify-center transition"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current ? 'w-6 bg-[#FCBE43]' : 'w-2 bg-gray-500'
              }`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
