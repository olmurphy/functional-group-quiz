import { SpeedInsights } from "@vercel/speed-insights/next"
import './App.css'
import Quiz from './components/Quiz'

function App() {
  return (
    <div className="app">
      <Quiz />
      <SpeedInsights />
    </div>
  )
}

export default App
