import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  let location;
  if (typeof window !== 'undefined') {
    location = window.location || "en";
  }

  useEffect(() => {
    // keep <html lang="..."> in sync with i18n language
    if (typeof document !== 'undefined') {
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);

    const currentPathWithoutLang = location.pathname.replace(/^\/(en|uk)/, '');
    navigate(`/${lang}${currentPathWithoutLang}${location.hash}`);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className={`font-bold ${i18n.language === 'en' ? 'text-white' : 'text-secondary'}`}
        onClick={() => handleLanguageChange('en')}
      >
        🇺🇸 EN
      </button>
      <div className="w-px h-5 bg-gray-500"></div>
      <button
        type="button"
        className={`font-bold ${i18n.language === 'uk' ? 'text-white' : 'text-secondary'}`}
        onClick={() => handleLanguageChange('uk')}
      >
        🇺🇦 UK
      </button>
    </div>
  );
};

export { LanguageSwitcher };