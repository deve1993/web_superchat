'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import React from 'react';

export function PrivacyContent() {
  const t = useTranslations('privacyPage');

  const rich = {
    bold: (chunks: React.ReactNode) => <span className="font-medium text-white">{chunks}</span>,
    email: (chunks: React.ReactNode) => (
      <a href="mailto:info@fl1.cz" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">{chunks}</a>
    ),
    cookieLink: (chunks: React.ReactNode) => (
      <Link href="/cookie-policy" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">{chunks}</Link>
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
      <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
        {(t.raw('s2Items') as string[]).map((_, i) => (
          <li key={i}>{t.rich(`s2Items.${i}`, rich)}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s3Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t('s3Intro')}
      </p>
      <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
        {(t.raw('s3Items') as string[]).map((_, i) => (
          <li key={i}>{t.rich(`s3Items.${i}`, rich)}</li>
        ))}
      </ul>

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
        {t('s5Intro')}
      </p>
      <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
        {(t.raw('s5Items') as string[]).map((_, i) => (
          <li key={i}>{t.rich(`s5Items.${i}`, rich)}</li>
        ))}
      </ul>

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
        {(t.raw('s7Items') as string[]).map((_, i) => (
          <li key={i}>{t.rich(`s7Items.${i}`, rich)}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-white mt-12 mb-4">
        {t('s8Title')}
      </h2>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t('s8Intro')}
      </p>
      <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
        {(t.raw('s8Items') as string[]).map((_, i) => (
          <li key={i}>{t.rich(`s8Items.${i}`, rich)}</li>
        ))}
      </ul>
      <p className="text-[#73799B] leading-relaxed mb-4">
        {t.rich('s8Outro', rich)}
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
    </div>
  );
}
