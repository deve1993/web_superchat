"use client";

import { useEffect, useRef, useState } from "react";
import { getConsent, type ConsentCategories } from "@/lib/consent";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function injectScript(id: string, src?: string, innerHTML?: string): void {
  if (document.getElementById(id)) return;
  const el = document.createElement("script");
  el.id = id;
  if (src) {
    el.src = src;
    el.async = true;
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  document.head.appendChild(el);
}

export function ConsentAwareAnalytics() {
  const [analyticsOk, setAnalyticsOk] = useState(false);
  const [marketingOk, setMarketingOk] = useState(false);
  const injectedRef = useRef({ gtm: false, ga4: false, meta: false });

  useEffect(() => {
    const consent = getConsent();
    if (consent) {
      setAnalyticsOk(consent.analytics);
      setMarketingOk(consent.marketing);
    }

    function onConsentUpdate(e: Event) {
      const c = (e as CustomEvent<ConsentCategories>).detail;
      setAnalyticsOk(c.analytics);
      setMarketingOk(c.marketing);
    }

    window.addEventListener("consent-updated", onConsentUpdate);
    return () =>
      window.removeEventListener("consent-updated", onConsentUpdate);
  }, []);

  useEffect(() => {
    if (!analyticsOk) return;

    if (GTM_ID && !injectedRef.current.gtm) {
      injectedRef.current.gtm = true;
      injectScript(
        "gtm-script",
        undefined,
        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
      );
    }

    if (GA4_ID && !injectedRef.current.ga4) {
      injectedRef.current.ga4 = true;
      injectScript(
        "ga4-loader",
        `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`,
      );
      injectScript(
        "ga4-config",
        undefined,
        `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`,
      );
    }
  }, [analyticsOk]);

  useEffect(() => {
    if (!marketingOk) return;

    if (META_PIXEL_ID && !injectedRef.current.meta) {
      injectedRef.current.meta = true;
      injectScript(
        "meta-pixel",
        undefined,
        `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`,
      );
    }
  }, [marketingOk]);

  return null;
}
