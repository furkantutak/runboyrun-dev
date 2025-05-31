"use client";

import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useTranslation } from "next-i18next";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { t, i18n } = useTranslation("common");

  const languages = [
    { code: "tr", flag: "🇹🇷", name: "Türkçe" },
    { code: "en", flag: "🇺🇸", name: "English" },
  ];

  const changeLanguage = (locale: string) => {
    const currentLocale = i18n.language;
    const newPath = pathname?.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath || `/${locale}`);
  };

  return (
    <div className="relative group">
      <motion.div
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/5 dark:bg-white/5 cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{t("footer.language")}</span>
      </motion.div>

      {/* Dropdown */}
      <div className="absolute right-0 mt-2 w-40 py-2 bg-background rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="w-full px-4 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
            {i18n.language === lang.code && (
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary ml-auto"
                layoutId="activeLang"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
} 