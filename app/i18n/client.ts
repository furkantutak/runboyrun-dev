import { useState, useEffect } from 'react';
import { i18n, Locale } from '../i18n-settings';

// Global cache for translations
const translationCache: Record<string, Record<string, any>> = {};

// Function to load translations
async function loadTranslations(lng: Locale, ns: string) {
  const cacheKey = `${lng}:${ns}`;
  if (!translationCache[cacheKey]) {
    try {
      const module = await import(`../../public/locales/${lng}/${ns}.json`);
      translationCache[cacheKey] = module.default;
    } catch (error) {
      console.error(`Failed to load translations for ${cacheKey}:`, error);
      translationCache[cacheKey] = {};
    }
  }
  return translationCache[cacheKey];
}

// Function to get a translation value
function getTranslationValue(translations: Record<string, any>, key: string, options: { returnObjects?: boolean } = {}) {
  const keys = key.split('.');
  let value = translations;

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }

  if (options.returnObjects && typeof value === 'object') {
    return value;
  }

  return value || key;
}

// React hook for translations
export function useTranslation(ns: string, lng: Locale = i18n.defaultLocale) {
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function init() {
      const data = await loadTranslations(lng, ns);
      if (mounted) {
        setTranslations(data);
        setReady(true);
      }
    }

    init();

    return () => {
      mounted = false;
    };
  }, [ns, lng]);

  const t = (key: string, options = {}) => getTranslationValue(translations, key, options);

  return { t, ready };
} 