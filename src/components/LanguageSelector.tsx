'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, languageOptions, Language } from '@/context/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSelectorProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function LanguageSelector({
  className = '',
  variant = 'light',
}: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption =
    languageOptions.find((opt) => opt.code === language) || languageOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isDark = variant === 'dark';

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Selector Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
          isDark
            ? 'bg-[#212429] text-gray-200 hover:text-white hover:bg-gray-800 border border-gray-700'
            : 'bg-white text-gray-800 hover:text-[#162088] border border-gray-200 hover:border-[#FCBE43]'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-[#FCBE43]" />
        <span className="text-base leading-none">{currentOption.flag}</span>
        <span className="font-semibold tracking-wide">{currentOption.nativeName}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#FCBE43]' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-2xl bg-white border border-gray-100 ring-1 ring-black ring-opacity-5 z-50 overflow-hidden animate-fadeIn py-1">
          <div className="px-3 py-2 bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-between">
            <span>Select Language</span>
            <span className="text-[10px] text-[#162088] font-bold">4 Languages</span>
          </div>

          <div className="p-1 space-y-0.5">
            {languageOptions.map((opt) => {
              const isSelected = opt.code === language;
              return (
                <button
                  key={opt.code}
                  onClick={() => {
                    setLanguage(opt.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors text-left ${
                    isSelected
                      ? 'bg-amber-50 text-[#162088] font-bold'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-black font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{opt.flag}</span>
                    <div className="flex flex-col">
                      <span className="text-xs leading-tight">{opt.nativeName}</span>
                      <span className="text-[10px] text-gray-400 leading-tight">
                        {opt.name}
                      </span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[#FCBE43]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
