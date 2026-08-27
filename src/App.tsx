import { SpeedInsights } from "@vercel/speed-insights/react";
import { Languages, Settings } from "lucide-react";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="site-brand">Quiz</div>
        <nav className="site-actions" aria-label="Site navigation">
          <button className="sign-in-button" type="button">
            Sign In
          </button>
          <button className="icon-button" type="button" aria-label="Choose language">
            <Languages size={22} strokeWidth={2} />
          </button>
          <button className="icon-button" type="button" aria-label="Settings">
            <Settings size={22} strokeWidth={2} />
          </button>
        </nav>
      </header>
      <Quiz />
      <SpeedInsights />
    </div>
  );
}

export default App;
