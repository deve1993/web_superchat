"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-8xl font-bold text-red-500">!</p>
      <h1 className="mt-6 text-3xl font-bold text-white md:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-md text-base text-[#73799B]">
        {t("description")}
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full border border-[#4F60FA] px-8 py-3 text-sm font-semibold text-[#4F60FA] transition-colors hover:bg-[#4F60FA] hover:text-white"
        >
          {t("retry")}
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#4F60FA] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d4ed8]"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
