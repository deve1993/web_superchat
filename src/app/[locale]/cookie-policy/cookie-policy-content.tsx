'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

export function CookiePolicyContent() {
  const t = useTranslations('cookiePolicyPage');

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
        {t('s2Intro')}
      </p>

      <h3 className="text-lg font-medium text-white mt-8 mb-3">
        {t('s2NecessaryTitle')}
      </h3>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s2NecessaryText', rich)}
      </p>

      <h3 className="text-lg font-medium text-white mt-8 mb-3">
        {t('s2AnalyticsTitle')}
      </h3>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s2AnalyticsText', rich)}
      </p>

      <h3 className="text-lg font-medium text-white mt-8 mb-3">
        {t('s2MarketingTitle')}
      </h3>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s2MarketingText', rich)}
      </p>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s3Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t('s3Text')}
      </p>
      <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
        {(t.raw('s3Items') as string[]).map((_, i) => (
          <li key={i}>{t.rich(`s3Items.${i}`, rich)}</li>
        ))}
      </ul>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s3Outro', rich)}
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
        {t('s7Intro')}
      </p>
      <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">{t('s7Chrome')}</a></li>
        <li><a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">{t('s7Firefox')}</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">{t('s7Safari')}</a></li>
        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">{t('s7Edge')}</a></li>
      </ul>

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
        <br />
        {t.rich('s10Email', rich)}
      </p>
    </div>
  );
}
