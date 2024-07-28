import React, { useContext, useLayoutEffect } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageComponent = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  useLayoutEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div>
      <h1>{language === 'en' ? 'Hello' : 'Hola'}</h1>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
      </button>
    </div>
  );
};

export default LanguageComponent;