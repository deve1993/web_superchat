'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

export function TermsContent() {
  const t = useTranslations('termsPage');

  const rich = {
    bold: (chunks: React.ReactNode) => <span className="font-medium text-white">{chunks}</span>,
    email: (chunks: React.ReactNode) => (
      <a href="mailto:info@fl1.cz" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">{chunks}</a>
    ),
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s1Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s1Text', rich)}
      </p>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s2Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s2Text', rich)}
      </p>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s3Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s3Text', rich)}
      </p>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s4Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t('s4Intro')}
      </p>
      <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
        {(t.raw('s4Items') as string[]).map((_, i) => (
          <li key={i}>{t.rich(`s4Items.${i}`, rich)}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s5Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s5Text', rich)}
      </p>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s6Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s6Text', rich)}
      </p>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s7Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s7Text', rich)}
      </p>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s8Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s8Text', rich)}
      </p>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s9Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s9Text', rich)}
      </p>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s10Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s10Text', rich)}
      </p>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s10Company', rich)}<br />
        {t('s10Address')}
      </p>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s11Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s11Text', rich)}
      </p>
    </div>
  );
}
