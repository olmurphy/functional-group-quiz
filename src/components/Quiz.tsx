import { useState, useEffect, useRef } from 'react';
import { functionalGroups, shuffleArray, isAnswerCorrect, type FunctionalGroup } from '../data/functionalGroups';
import { Play, RotateCcw } from 'lucide-react';
import './Quiz.css';

interface QuizItem {
  group: FunctionalGroup;
  index: number;
  isCorrect: boolean;
  inputValue: string;
}

const TOTAL_ITEMS = functionalGroups.length;
const TOTAL_TIME = 10 * 60; // 10 minutes in seconds

export const Quiz = () => {
  const [quizItems, setQuizItems] = useState<QuizItem[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer effect
  useEffect(() => {
    if (!quizStarted || finished) return;

    timerIntervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setFinished(true);
          if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [quizStarted, finished]);

  const initializeQuiz = () => {
    const selected = functionalGroups.slice(0, TOTAL_ITEMS);
    const shuffled = shuffleArray(selected);
    const items: QuizItem[] = shuffled.map((group, index) => ({
      group,
      index,
      isCorrect: false,
      inputValue: '',
    }));
    setQuizItems(items);
    setQuizStarted(false);
    setTimeLeft(TOTAL_TIME);
    setScore(0);
    setFinished(false);
  };

  // Initialize quiz items on mount
  useEffect(() => {
    initializeQuiz();
  }, []);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleInputChange = (itemIndex: number, value: string) => {
    setQuizItems((prev) =>
      prev.map((item, idx) => {
        if (idx !== itemIndex) return item;

        const isCorrect = isAnswerCorrect(value, item.group.name, item.group.alternateNames);
        const wasCorrectBefore = item.isCorrect;

        if (isCorrect && !wasCorrectBefore) {
          setScore((s) => s + 1);
        } else if (!isCorrect && wasCorrectBefore) {
          // setScore((s) => s - 1);
        }

        return {
          ...item,
          inputValue: value,
          isCorrect,
        };
      })
    );
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  

  const handleReset = () => {
    initializeQuiz();
  };

  return (
    <div className="quiz-container">
      {/* Header */}
      <div className="quiz-header">
        <div className="header-content">
          <h1 className="quiz-title">Functional Group Quiz</h1>
          <p className="quiz-subtitle">Identify each functional group</p>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-label">Score</div>
            <div className="stat-value">
              {score}/{TOTAL_ITEMS}
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-label">Time</div>
            <div className="stat-value timer">{formatTime(timeLeft)}</div>
          </div>
        </div>

        <div className="header-buttons">
          {!quizStarted && !finished && (
            <button className="btn btn-primary" onClick={handleStartQuiz}>
              <Play size={20} />
              Start Quiz
            </button>
          )}
          <button className="btn btn-secondary" onClick={handleReset}>
            <RotateCcw size={20} />
            Reset
          </button>
        </div>
      </div>

      {/* Results Screen */}
      {finished && (
        <div className="results-overlay">
          <div className="results-card">
            <h2 className="results-title">Quiz Finished!</h2>
            <div className="final-score">
              <div className="score-circle">
                <div className="score-number">{score}</div>
                <div className="score-total">of {TOTAL_ITEMS}</div>
              </div>
            </div>
            <div className="accuracy">Accuracy: {Math.round((score / TOTAL_ITEMS) * 100)}%</div>
            <button className="btn btn-primary" onClick={handleReset}>
              <RotateCcw size={20} />
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Quiz Grid */}
      <div className={`quiz-grid ${!quizStarted && !finished ? 'quiz-disabled' : ''}`}>
        {quizItems.map((item, idx) => (
          <div key={item.group.id + idx} className="quiz-item">
            <div className="item-image">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="functional-group-svg"
                dangerouslySetInnerHTML={{ __html: item.group.svg }}
              />
            </div>
            <input
              ref={(el) => {
                if (el) inputRefs.current[item.group.id + idx] = el;
              }}
              type="text"
              placeholder="Type name..."
              value={item.inputValue}
              onChange={(e) => handleInputChange(idx, e.target.value)}
              disabled={!quizStarted || finished}
              className={`quiz-input ${item.isCorrect ? 'correct' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
