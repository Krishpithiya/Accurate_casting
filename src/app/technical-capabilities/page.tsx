'use client';

import React from 'react';
import PageBanner from '@/components/PageBanner';
import Link from 'next/link';
import { ArrowRight, Layers, ShieldCheck, Flame, Download } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';

const materialCategories = [
  {
    category: 'Carbon Steel',
    description: 'High strength, standard mechanical parts, valve components, general construction.',
    items: [
      { astm: 'A216 - WCB', din: '1.0619' },
      { astm: 'A216 - WCC', din: '-' },
      { astm: 'A352 - LCC', din: '1.1138' },
      { astm: 'A352 - LCB', din: '-' },
    ],
  },
  {
    category: 'Low Alloys Steels',
    description: 'Elevated creep strength, high temperature & pressure piping and valve bodies.',
    items: [
      { astm: 'A217 - WC1', din: '1.5419' },
      { astm: 'A217 - WC4', din: '-' },
      { astm: 'A217 - WC5', din: '-' },
      { astm: 'A217 - WC6', din: '1.7356' },
      { astm: 'A217 - WC9', din: '1.7379' },
      { astm: 'A217 - WC11', din: '-' },
      { astm: 'A217 - C5', din: '1.7363' },
      { astm: 'A217 - C12', din: '-' },
      { astm: 'A217 - C12A', din: '-' },
    ],
  },
  {
    category: 'Martensitic Steels',
    description: 'High hardness, wear resistance, turbine runners, pump impellers.',
    items: [
      { astm: 'A743 - CA15', din: '1.4008' },
      { astm: 'A743 - CA40', din: '1.4028' },
      { astm: 'A743 - CA-6NM', din: '1.4313' },
    ],
  },
  {
    category: 'Heat Resisting Steel',
    description: 'Furnace parts, burner nozzles, heat treat fixtures up to 1150°C.',
    items: [
      { astm: 'A297 - HF', din: '1.4825' },
      { astm: 'A297 - HH', din: '1.4837' },
      { astm: 'A297 - HI', din: '1.4846' },
      { astm: 'A297 - HK', din: '1.4848' },
      { astm: 'A297 - HD', din: '1.4823' },
      { astm: 'DIN 1.4749', din: '1.4749' },
    ],
  },
  {
    category: 'Austenitic Stainless Steel',
    description: 'Pumps, chemical processing, marine hardware, sanitary food equipment.',
    items: [
      { astm: 'A351 - CF8 (304)', din: '1.4308' },
      { astm: 'A351 - CF8M (316)', din: '1.4408' },
      { astm: 'A351 - CF3 (304L)', din: '1.4306' },
      { astm: 'A351 - CF3M (316L)', din: '1.4404 / 1.4409' },
      { astm: 'A351 - CF8C (347)', din: '1.4827' },
      { astm: 'A351 - CF10', din: '1.4308' },
      { astm: 'A351 - CK20 (310)', din: '1.4843' },
      { astm: 'A351 - CH20', din: '-' },
      { astm: 'A351 - CN7M (Alloy 20)', din: '1.4500' },
      { astm: 'A351 - CG8M (317)', din: '1.4431' },
      { astm: 'A351 - CG3M (317L)', din: '-' },
    ],
  },
  {
    category: 'Austenitic Ferrite Duplex Steels',
    description: 'High tensile strength combined with superior chloride pitting resistance.',
    items: [
      { astm: 'A351 - CF3MN', din: '1.4435' },
      { astm: 'A351 - CD4MCu', din: '-' },
      { astm: 'A351 - CG6MMN', din: '1.3964' },
      { astm: 'A351 - CK3MCuN (254 SMO)', din: '-' },
    ],
  },
  {
    category: 'Super Duplex Stainless Steel',
    description: 'Offshore oil & gas, desalination, chemical tankers, subsea equipment.',
    items: [
      { astm: 'A890 - GR1A (CD4MCu)', din: '-' },
      { astm: 'A890 - GR2A (CE8MN)', din: '-' },
      { astm: 'A890 - GR3A (CD6MN)', din: '-' },
      { astm: 'A890 - GR4A (2205)', din: '1.4470' },
      { astm: 'A890 - GR5A (2507)', din: '1.4469' },
      { astm: 'A890 - GR6A (CD3MWCuN)', din: '-' },
    ],
  },
  {
    category: 'Nickel Based Super Alloys',
    description: 'Extreme corrosion resistance in aggressive acid and high temperature environments.',
    items: [
      { astm: 'A494 - M-35-1 (Monel 400)', din: '2.4365' },
      { astm: 'A494 - M-35-2', din: '-' },
      { astm: 'A494 - M 30 C', din: '-' },
      { astm: 'A494 - N-12MV (Hastelloy B)', din: '-' },
      { astm: 'A494 - CY40 (Inconel 600)', din: '2.4816' },
      { astm: 'A494 - CW12MW (Hastelloy C)', din: '2.4686' },
      { astm: 'A494 - CW6M', din: '-' },
      { astm: 'A494 - CW2M (Hastelloy C4)', din: '2.4610' },
      { astm: 'A494 - CW6MC (Inconel 625)', din: '2.4856' },
      { astm: 'A494 - CX2MW (Hastelloy C22)', din: '2.4602' },
      { astm: 'A494 - Cu5MCuC (Incoloy 825)', din: '2.4858' },
      { astm: 'A560 - 50Cr50Ni', din: '-' },
      { astm: 'A560 - 50Cr50Ni-Nb', din: '2.4813' },
      { astm: 'A560 - 60Cr40Ni', din: '-' },
    ],
  },
  {
    category: 'Cobalt Based Alloys',
    description: 'Extreme anti-galling, wear resistance, valve seats, turbine nozzle guides.',
    items: [
      { astm: 'Stellite 6 Equivalent', din: '-' },
      { astm: 'Stellite 12 Equivalent', din: '-' },
      { astm: 'Stellite 21 Equivalent', din: '-' },
      { astm: 'Custom Cobalt Formulations', din: '-' },
    ],
  },
];

export default function TechnicalCapabilitiesPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div className="w-full">
      <PageBanner
        title={t.capabilitiesPage.bannerTitle}
        subtitle={t.capabilitiesPage.bannerSub}
        currentPage={t.capabilitiesPage.bannerTitle}
      />

      <section className="py-20 max-w-7xl mx-auto px-4">
        {/* Intro */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-[#FCBE43] font-black text-xs uppercase tracking-widest block">
            {t.capabilitiesPage.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#171A1D]">
            {t.capabilitiesPage.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {t.capabilitiesPage.desc}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materialCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-xl shadow-card hover:shadow-cardHover border border-gray-200 overflow-hidden flex flex-col justify-between transition-all"
            >
              <div>
                <div className="bg-[#171A1D] text-white p-5 border-b-4 border-[#FCBE43]">
                  <h3 className="font-black text-lg text-white tracking-wide">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="p-4 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-400 font-bold uppercase">
                        <th className="pb-2">{t.capabilitiesPage.astmTh}</th>
                        <th className="pb-2 text-right">{t.capabilitiesPage.dinTh}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {cat.items.map((item, idx) => (
                        <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                          <td className="py-2 font-semibold text-[#171A1D]">
                            {item.astm}
                          </td>
                          <td className="py-2 text-right text-gray-500 font-mono">
                            {item.din}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <Link
                  href="/contact-us"
                  className="text-xs font-bold text-[#162088] hover:text-[#FCBE43] transition-colors flex items-center justify-between"
                >
                  <span>{t.capabilitiesPage.requestBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Foundry Capacity Banner */}
        <div className="mt-16 bg-[#162088] text-white rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-[#FCBE43] font-bold text-xs uppercase tracking-wider block">
              {t.capabilitiesPage.foundrySpecBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {t.capabilitiesPage.foundryTitle}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              {t.capabilitiesPage.foundryDesc}
            </p>
          </div>
          <Link
            href="/contact-us"
            className="flex-shrink-0 bg-[#FCBE43] hover:bg-[#e5a832] text-[#171A1D] font-bold px-8 py-3.5 rounded shadow-lg transition-all"
          >
            {t.capabilitiesPage.consultBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}
