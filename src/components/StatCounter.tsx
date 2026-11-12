'use client';

import React, { useState, useEffect } from 'react';
import { Award, Briefcase, Users, Wrench } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';

export default function StatCounter() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const stats = [
    { label: t.stats.projects, value: 500, suffix: '+', icon: Briefcase },
    { label: t.stats.equipment, value: 45, suffix: '+', icon: Wrench },
    { label: t.stats.clients, value: 120, suffix: '+', icon: Users },
    { label: t.stats.expertise, value: 25, suffix: ` ${t.stats.years}`, icon: Award },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 40;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts(
        stats.map((s) => {
          const progress = Math.min(step / steps, 1);
          return Math.floor(s.value * progress);
        })
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#171A1D] text-white py-12 border-y-4 border-[#FCBE43]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="space-y-2 group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#212429] text-[#FCBE43] mb-1 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  <span>{counts[idx]}</span>
                  <span className="text-[#FCBE43]">{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 font-semibold">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
