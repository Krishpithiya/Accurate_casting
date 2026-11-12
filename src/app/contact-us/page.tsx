'use client';

import React from 'react';
import PageBanner from '@/components/PageBanner';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';

export default function ContactUsPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div className="w-full">
      <PageBanner
        title={t.contactPage.bannerTitle}
        subtitle={t.contactPage.bannerSub}
        currentPage={t.contactPage.bannerTitle}
      />

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[#FCBE43] font-black text-xs uppercase tracking-widest block mb-1">
                {t.contactPage.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#171A1D] leading-tight">
                {t.contactPage.title}
              </h2>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {t.contactPage.desc}
              </p>
            </div>

            {/* Address */}
            <div className="bg-[#F7F8F9] p-6 rounded-xl border border-gray-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#162088] text-[#FCBE43] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-sm uppercase tracking-wide text-[#171A1D]">
                  {t.contactPage.factoryAddr}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {t.footer.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#F7F8F9] p-6 rounded-xl border border-gray-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#FCBE43] text-[#171A1D] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-sm uppercase tracking-wide text-[#171A1D]">
                  {t.contactPage.phoneNumbers}
                </h4>
                <div className="space-y-1 text-xs sm:text-sm text-gray-700">
                  <p>
                    <a href="tel:+919909610203" className="hover:text-[#162088] font-bold">
                      (+91) 99096 10203
                    </a>
                  </p>
                  <p>
                    <a href="tel:+919825111486" className="hover:text-[#162088] font-bold">
                      (+91) 98251 11486
                    </a>
                  </p>
                  <p>
                    <a href="tel:+919157815285" className="hover:text-[#162088] font-bold">
                      (+91) 91578 15285
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#F7F8F9] p-6 rounded-xl border border-gray-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#162088] text-[#FCBE43] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-sm uppercase tracking-wide text-[#171A1D]">
                  {t.contactPage.emailInquiries}
                </h4>
                <div className="space-y-1 text-xs sm:text-sm text-gray-700">
                  <p>
                    <a
                      href="mailto:info@accuratecasting.com"
                      className="hover:text-[#162088] font-semibold"
                    >
                      info@accuratecasting.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:marketing@accuratecasting.com"
                      className="hover:text-[#162088] font-semibold"
                    >
                      marketing@accuratecasting.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-[#F7F8F9] p-6 rounded-xl border border-gray-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gray-800 text-[#FCBE43] flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-sm uppercase tracking-wide text-[#171A1D]">
                  {t.contactPage.operatingHours}
                </h4>
                <p className="text-xs sm:text-sm text-gray-700">
                  Mon - Fri : 9:00 am - 5:00 pm
                </p>
                <p className="text-xs text-amber-600 font-semibold">
                  {t.contactPage.wednesdayOff}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Embedded Google Maps Location */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <div className="bg-[#171A1D] text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Building2 className="w-4 h-4 text-[#FCBE43]" />
              <span>{t.contactPage.plantLocation}</span>
            </div>
            <a
              href="https://maps.google.com/maps?q=Sr.No.57%2F1%2CPlot%20No%2011%2C12%2C13%2C%20near%20Railway%20Station%2C%20Ribda%2C%20Gujarat%20360311"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#FCBE43] hover:underline"
            >
              {t.contactPage.openMaps}
            </a>
          </div>
          <iframe
            src="https://maps.google.com/maps?q=Sr.No.57%2F1%2CPlot%20No%2011%2C12%2C13%2C%20near%20Railway%20Station%2C%20Ribda%2C%20Gujarat%20360311&t=m&z=14&output=embed&iwloc=near"
            title="Accurate Casting Works Plant Location"
            className="w-full h-96 border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
