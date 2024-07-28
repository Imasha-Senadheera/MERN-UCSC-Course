import React, { useContext, useLayoutEffect } from 'react';
import { LanguageContext } from './LanguageContext';

export default function LanguageComponent() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  // Use useLayoutEffect to update the document's language attribute
  useLayoutEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', color: '#000' }}>
      <h2>Current Language: {language === 'en' ? 'English' : 'Spanish'}</h2>
      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
}
