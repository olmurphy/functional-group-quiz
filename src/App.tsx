import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Languages, Settings } from "lucide-react";
import "./App.css";
import Quiz from "./components/Quiz";
import { languageOptions, translations, type LanguageCode } from "./data/translations";

function App() {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const copy = translations[language];

  return (
    <div className="app">
      <header className="site-header">
        <div className="site-brand">{copy.brand}</div>
        <nav className="site-actions" aria-label="Site navigation">
          <button className="sign-in-button" type="button">
            {copy.signIn}
          </button>
          <label className="language-picker">
            <Languages size={22} strokeWidth={2} />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as LanguageCode)}
              aria-label={copy.chooseLanguage}
            >
              {Object.entries(languageOptions).map(([code, label]) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <button className="icon-button" type="button" aria-label={copy.settings}>
            <Settings size={22} strokeWidth={2} />
          </button>
        </nav>
      </header>
      <Quiz language={language} />
      <SpeedInsights />
    </div>
  );
}

export default App;
