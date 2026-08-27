import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Languages, Settings } from "lucide-react";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const isChinese = language === "zh";

  return (
    <div className="app">
      <header className="site-header">
        <div className="site-brand">{isChinese ? "测验" : "Quiz"}</div>
        <nav className="site-actions" aria-label="Site navigation">
          <button className="sign-in-button" type="button">
            {isChinese ? "登录" : "Sign In"}
          </button>
          <button
            className="icon-button language-button"
            type="button"
            aria-label={isChinese ? "切换到英文" : "Switch to Chinese"}
            onClick={() => setLanguage(isChinese ? "en" : "zh")}
          >
            <Languages size={22} strokeWidth={2} />
            <span>{isChinese ? "EN" : "中文"}</span>
          </button>
          <button className="icon-button" type="button" aria-label={isChinese ? "设置" : "Settings"}>
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
