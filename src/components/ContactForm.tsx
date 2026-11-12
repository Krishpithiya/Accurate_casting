'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/i18n/translations';

export default function ContactForm() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || t.contactPage.successMsg,
        });
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus({
          type: 'error',
          message:
            data.error || 'Something went wrong. Please check your inputs and try again.',
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Could not connect to server. Please try again later or call us directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-xl shadow-card border border-gray-100">
      <h3 className="text-2xl font-bold text-[#171A1D] mb-2">
        {t.contactPage.formTitle}
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        {t.contactPage.formDesc}
      </p>

      {status.type === 'success' && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm">{status.message}</p>
        </div>
      )}

      {status.type === 'error' && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm">{status.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              {t.contactPage.firstName} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t.contactPage.firstName}
              className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:border-[#162088] focus:ring-1 focus:ring-[#162088] text-sm text-gray-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              {t.contactPage.lastName}
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t.contactPage.lastName}
              className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:border-[#162088] focus:ring-1 focus:ring-[#162088] text-sm text-gray-800"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              {t.contactPage.phone}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(+91) 99096-10203"
              className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:border-[#162088] focus:ring-1 focus:ring-[#162088] text-sm text-gray-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              {t.contactPage.email} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:border-[#162088] focus:ring-1 focus:ring-[#162088] text-sm text-gray-800"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
            {t.contactPage.subject}
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t.contactPage.subject}
            className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:border-[#162088] focus:ring-1 focus:ring-[#162088] text-sm text-gray-800"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
            {t.contactPage.message} <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder={t.contactPage.messagePlaceholder}
            className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:border-[#162088] focus:ring-1 focus:ring-[#162088] text-sm text-gray-800 resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded bg-[#FCBE43] hover:bg-[#e5a832] text-[#171A1D] font-bold text-sm uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{t.contactPage.sendingBtn}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{t.contactPage.submitBtn}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
