import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFoundPage() {
  const t = useTranslations("notFound");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-8xl font-bold text-[#4F60FA]">404</p>
      <h1 className="mt-6 text-3xl font-bold text-white md:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-md text-base text-[#73799B]">
        {t("description")}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4F60FA] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d4ed8]"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
