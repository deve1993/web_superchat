import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en", "cs"],
  defaultLocale: "it",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/contatti": {
      it: "/contatti",
      en: "/contact",
      cs: "/kontakt",
    },
    "/privacy": "/privacy",
    "/cookie-policy": "/cookie-policy",
    "/terms": "/terms",
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
