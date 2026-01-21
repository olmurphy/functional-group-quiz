# Future API Integration Examples

This file contains example code for advanced features that could be added later.

## 1. localStorage - Save Quiz Progress

```typescript
// Save progress to browser
export const saveQuizProgress = (score: number, totalTime: number) => {
  const progress = {
    score,
    totalTime,
    date: new Date().toISOString(),
    sessionId: Math.random().toString(36),
  };
  
  const allSessions = JSON.parse(localStorage.getItem('quizSessions') || '[]');
  allSessions.push(progress);
  localStorage.setItem('quizSessions', JSON.stringify(allSessions));
};

// Retrieve statistics
export const getQuizStats = () => {
  const sessions = JSON.parse(localStorage.getItem('quizSessions') || '[]');
  return {
    totalSessions: sessions.length,
    bestScore: Math.max(...sessions.map(s => s.score)),
    averageScore: sessions.reduce((sum, s) => sum + s.score, 0) / sessions.length,
    totalTime: sessions.reduce((sum, s) => sum + s.totalTime, 0),
  };
};
```

## 2. Add Categories

```typescript
// Enhanced interface with categories
interface FunctionalGroup {
  id: string;
  name: string;
  category: 'oxygen' | 'nitrogen' | 'sulfur' | 'aromatic' | 'halogen' | 'phosphorus';
  difficulty: 'easy' | 'medium' | 'hard';
  alternateNames?: string[];
  svg: string;
  explanation?: string; // For hints
}

// Filter by category
export const filterByCategory = (
  groups: FunctionalGroup[],
  category: string
): FunctionalGroup[] => {
  if (category === 'all') return groups;
  return groups.filter(g => g.category === category);
};

// Filter by difficulty
export const filterByDifficulty = (
  groups: FunctionalGroup[],
  difficulty: string
): FunctionalGroup[] => {
  if (difficulty === 'all') return groups;
  return groups.filter(g => g.difficulty === difficulty);
};
```

## 3. Hints System

```typescript
// Add hints to Quiz component
const [showHints, setShowHints] = useState(false);
const [usedHints, setUsedHints] = useState<Set<string>>(new Set());

const getHint = (groupId: string, inputValue: string) => {
  if (usedHints.has(groupId)) return null;
  
  const group = quizItems.find(item => item.group.id === groupId);
  if (!group) return null;
  
  // Show first letter of answer
  const firstLetter = group.group.name[0];
  return `Starts with "${firstLetter}"`;
};

const useHint = (groupId: string) => {
  setUsedHints(prev => new Set([...prev, groupId]));
  setScore(s => Math.max(0, s - 1)); // Penalty for hint
};
```

## 4. Dark Mode Toggle

```typescript
// Add to Quiz component
const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.style.setProperty('--color-bg-primary', '#1a1a1a');
    document.documentElement.style.setProperty('--color-bg-secondary', '#2d2d2d');
    document.documentElement.style.setProperty('--color-text-primary', '#ffffff');
    document.documentElement.style.setProperty('--color-text-secondary', '#b0b0b0');
  } else {
    // Reset to light mode defaults
    document.documentElement.style.setProperty('--color-bg-primary', '#f8f9fa');
    document.documentElement.style.setProperty('--color-bg-secondary', '#ffffff');
    document.documentElement.style.setProperty('--color-text-primary', '#2c3e50');
    document.documentElement.style.setProperty('--color-text-secondary', '#7f8c8d');
  }
}, [isDarkMode]);

return (
  <button onClick={() => setIsDarkMode(!isDarkMode)}>
    {isDarkMode ? '☀️ Light' : '🌙 Dark'}
  </button>
);
```

## 5. Sound Effects

```typescript
// Create audio utility
export const playSound = (type: 'correct' | 'wrong' | 'complete') => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  switch(type) {
    case 'correct':
      oscillator.frequency.value = 800; // Higher pitch
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
      break;
    case 'wrong':
      oscillator.frequency.value = 400; // Lower pitch
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
      break;
  }
};
```

## 6. Keyboard Navigation

```typescript
const handleKeyDown = (e: KeyboardEvent) => {
  // Tab to next input
  if (e.key === 'Tab') {
    const currentIdx = Object.keys(inputRefs.current).indexOf(document.activeElement?.id || '');
    if (currentIdx !== -1 && currentIdx < quizItems.length - 1) {
      inputRefs.current[Object.keys(inputRefs.current)[currentIdx + 1]]?.focus();
    }
  }
  
  // Shift+Tab for previous
  if (e.key === 'Tab' && e.shiftKey) {
    const currentIdx = Object.keys(inputRefs.current).indexOf(document.activeElement?.id || '');
    if (currentIdx > 0) {
      inputRefs.current[Object.keys(inputRefs.current)[currentIdx - 1]]?.focus();
    }
  }
  
  // Skip current input with Space
  if (e.key === ' ' && e.ctrlKey) {
    e.preventDefault();
    // Move focus to next input
  }
};

useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);
```

## 7. Statistics Dashboard

```typescript
export interface QuizSession {
  id: string;
  score: number;
  total: number;
  timeSpent: number;
  date: Date;
  category?: string;
  difficulty?: string;
}

export const StatsComponent = ({ sessions }: { sessions: QuizSession[] }) => {
  const stats = {
    totalQuizzes: sessions.length,
    bestScore: Math.max(...sessions.map(s => s.score), 0),
    averageScore: sessions.length > 0 
      ? sessions.reduce((sum, s) => sum + s.score, 0) / sessions.length 
      : 0,
    totalTime: sessions.reduce((sum, s) => sum + s.timeSpent, 0),
    lastQuiz: sessions[sessions.length - 1]?.date,
  };

  return (
    <div className="stats-dashboard">
      <h2>Your Stats</h2>
      <div className="stat-card">
        <h3>Total Quizzes</h3>
        <p>{stats.totalQuizzes}</p>
      </div>
      <div className="stat-card">
        <h3>Best Score</h3>
        <p>{stats.bestScore}/{TOTAL_ITEMS}</p>
      </div>
      <div className="stat-card">
        <h3>Average Score</h3>
        <p>{stats.averageScore.toFixed(1)}/{TOTAL_ITEMS}</p>
      </div>
    </div>
  );
};
```

## 8. Multiplayer Mode (WebSocket)

```typescript
// Client-side
export class MultiplayerQuiz {
  private socket: WebSocket;
  
  constructor(roomId: string) {
    this.socket = new WebSocket(`wss://your-server.com/quiz/${roomId}`);
    
    this.socket.onmessage = (event) => {
      const { type, data } = JSON.parse(event.data);
      
      switch(type) {
        case 'opponent-answered':
          this.updateOpponentScore(data.playerId, data.score);
          break;
        case 'quiz-complete':
          this.endQuiz(data.results);
          break;
      }
    };
  }
  
  submitAnswer(groupId: string, answer: string, isCorrect: boolean) {
    this.socket.send(JSON.stringify({
      type: 'answer',
      groupId,
      answer,
      isCorrect,
      timestamp: Date.now(),
    }));
  }
}
```

## 9. Admin Panel for Adding Groups

```typescript
// Admin component to add groups dynamically
export const AdminPanel = () => {
  const [groupName, setGroupName] = useState('');
  const [svg, setSvg] = useState('');
  
  const addNewGroup = async () => {
    const newGroup: FunctionalGroup = {
      id: groupName.toLowerCase().replace(/\s/g, '-'),
      name: groupName,
      svg,
      alternateNames: [],
    };
    
    // Save to database or localStorage
    const groups = JSON.parse(localStorage.getItem('customGroups') || '[]');
    groups.push(newGroup);
    localStorage.setItem('customGroups', JSON.stringify(groups));
  };

  return (
    <div className="admin-panel">
      <h2>Add New Functional Group</h2>
      <input 
        value={groupName} 
        onChange={(e) => setGroupName(e.target.value)} 
        placeholder="Group name"
      />
      <textarea 
        value={svg} 
        onChange={(e) => setSvg(e.target.value)} 
        placeholder="SVG code"
      />
      <button onClick={addNewGroup}>Add Group</button>
    </div>
  );
};
```

## 10. Export Results as PDF

```typescript
// Install: npm install html2pdf
import html2pdf from 'html2pdf.js';

export const exportResultsAsPDF = (score: number, totalTime: number, accuracy: number) => {
  const element = document.createElement('div');
  element.innerHTML = `
    <h1>Quiz Results</h1>
    <p>Score: ${score}/25</p>
    <p>Time: ${totalTime}s</p>
    <p>Accuracy: ${accuracy}%</p>
    <p>Date: ${new Date().toLocaleDateString()}</p>
  `;
  
  const opt = {
    margin: 10,
    filename: 'quiz-results.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
  };
  
  html2pdf().set(opt).from(element).save();
};
```

---

These examples show how to expand the quiz with professional features. Start with the simplest (localStorage) and build up to more complex features (multiplayer, admin panel).
