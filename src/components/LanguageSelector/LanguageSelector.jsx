import { useRef, useState } from "react";
import cls from "./languageselector.module.scss";
import { Globe, ChevronDown, ChevronUp } from "lucide-react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";

const langs = {
  en: {
    value: "en",
    label: "English",
  },
  ru: {
    value: "ru",
    label: "Русский",
  },
};

const langsArray = Object.values(langs);

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const languageRef = useRef(null);
  const currentLanguage = i18n.language;
  const normalizeLang = currentLanguage.split("-")[0];

  useClickOutside(languageRef, () => {
    setIsOpen(false);
  });

  const handleSelect = (option) => {
    i18n.changeLanguage(option.value);
    setIsOpen(false);
  };

  return (
    <div ref={languageRef} className={cls.LanguageSelector}>
      <button onClick={() => setIsOpen(!isOpen)} className={cls.selector_label}>
        <span className={cls.selector_label__content}>
          <Globe />
          {langs[normalizeLang].label}
        </span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && (
        <div className={cls.selector_options}>
          {langsArray.map((option) => {
            return (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={cls.option_button}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
