import { useState, useEffect, useRef } from "react";
import { functionalGroups, shuffleArray, isAnswerCorrect, type FunctionalGroup } from "../data/functionalGroups";
import { GraduationCap, ChevronDown, Pause, Play } from "lucide-react";
import FunctionalGroupImage from "./FunctionalGroupImage";
import "./Quiz.css";

interface QuizItem {
  group: FunctionalGroup;
  index: number;
  isCorrect: boolean;
  inputValue: string;
}

const TOTAL_ITEMS = functionalGroups.length;
const TOTAL_TIME = 5 * 60;

type Mode = "quiz" | "learn";
type Language = "en" | "zh";

const groupNames: Record<string, string> = {
  amine: "胺",
  aldehyde: "醛",
  peroxide: "过氧化物",
  amide: "酰胺",
  cyclopentane: "环戊烷",
  thioether: "硫醚",
  nitrile: "腈",
  epoxide: "环氧化物",
  alkyne: "炔烃",
  thiol: "硫醇",
  ester: "酯",
  alkane: "烷烃",
  carboxylic_acid: "羧酸",
  ketone: "酮",
  alkyl_halide: "卤代烷",
  alkene: "烯烃",
  ether: "醚",
  acid_anhydride: "酸酐",
  acid_chloride: "酰氯",
  alcohol: "醇",
  arene: "芳烃",
};

interface QuizProps {
  language: Language;
}

export const Quiz = ({ language }: QuizProps) => {
  const [quizItems, setQuizItems] = useState<QuizItem[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [mode, setMode] = useState<Mode>("quiz");
  const [isPaused, setIsPaused] = useState(false);
  const answerInputRef = useRef<HTMLInputElement | null>(null);
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!quizStarted || finished || mode !== "quiz" || isPaused) return;

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
  }, [quizStarted, finished, mode, isPaused]);

  useEffect(() => {
    if (quizStarted && !finished) {
      answerInputRef.current?.focus();
    }
  }, [currentIndex, quizStarted, finished]);

  const initializeQuiz = (options?: { fixedOrder?: boolean }) => {
    const groups = options?.fixedOrder ? functionalGroups : shuffleArray(functionalGroups);
    const items: QuizItem[] = groups.map((group, index) => ({
      group,
      index,
      isCorrect: false,
      inputValue: "",
    }));
    setQuizItems(items);
    setQuizStarted(false);
    setCurrentIndex(0);
    setTimeLeft(TOTAL_TIME);
    setScore(0);
    setFinished(false);
    setIsPaused(false);
  };

  useEffect(() => {
    initializeQuiz();
  }, []);

  const handleStartQuiz = () => {
    setMode("quiz");
    initializeQuiz();
    setQuizStarted(true);
  };

  const handleLearnMode = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    setMode("learn");
    setQuizStarted(false);
    setFinished(false);
    setTimeLeft(TOTAL_TIME);
    setScore(0);
    setIsPaused(false);
    initializeQuiz({ fixedOrder: true });
  };

  const findAdjacentUnansweredIndex = (startIndex: number, direction: number, wrap = false) => {
    let index = startIndex;

    for (let steps = 0; steps < quizItems.length; steps += 1) {
      index += direction;

      if (wrap) {
        index = (index + quizItems.length) % quizItems.length;
      }

      if (index < 0 || index >= quizItems.length) return startIndex;
      if (!quizItems[index].isCorrect) return index;
    }

    return startIndex;
  };

  const handleInputChange = (value: string) => {
    const currentQuizItem = quizItems[currentIndex];
    if (!currentQuizItem) return;

    const isCorrect = isAnswerCorrect(value, currentQuizItem.group.name, [
      ...(currentQuizItem.group.alternateNames ?? []),
      groupNames[currentQuizItem.group.id],
    ]);

    setQuizItems((prev) =>
      prev.map((item, idx) => {
        if (idx !== currentIndex) return item;

        const wasCorrectBefore = item.isCorrect;

        if (isCorrect && !wasCorrectBefore) {
          setScore((s) => s + 1);
        }

        return {
          ...item,
          inputValue: value,
          isCorrect,
        };
      }),
    );

    if (isCorrect) {
      setCurrentIndex(findAdjacentUnansweredIndex(currentIndex, 1));
    }
  };

  const handlePrev = () => {
    setCurrentIndex((i) => findAdjacentUnansweredIndex(i, -1, true));
  };

  const handleNext = () => {
    setCurrentIndex((i) => findAdjacentUnansweredIndex(i, 1, true));
  };

  const handleSelectItem = (index: number) => {
    if (!quizStarted || finished) return;
    setCurrentIndex(index);
  };

  const handleGiveUp = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    setFinished(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const isLearnMode = mode === "learn";
  const currentItem = quizItems[currentIndex];
  const allCorrect = score === TOTAL_ITEMS && quizStarted;
  const averageScore = Math.round((score / TOTAL_ITEMS) * 100);
  const isChinese = language === "zh";
  const getGroupName = (group: FunctionalGroup) => (isChinese ? groupNames[group.id] : group.name);

  useEffect(() => {
    if (allCorrect && !finished) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      setFinished(true);
    }
  }, [allCorrect, finished]);

  return (
    <div className="quiz-container">
      {(!quizStarted || finished) && !isLearnMode && (
        <header className="quiz-header">
          <div className="header-left">
            <button className="btn-play" onClick={handleStartQuiz}>
              {isChinese ? "开始测验" : "PLAY QUIZ"}
            </button>
            <button className="btn-learn" onClick={handleLearnMode}>
              <GraduationCap size={18} strokeWidth={2} />
              {isChinese ? "学习" : "Learn"}
            </button>
          </div>

          <div className="header-right">
            <div className="stat-block">
              <div className="stat-label">{isChinese ? "平均分" : "AVG SCORE"}</div>
              <div className="stat-value">{averageScore}%</div>
            </div>

            <div className="stat-block">
              <div className="stat-label">
                {isChinese ? "得分" : "SCORE"}
                <ChevronDown size={12} strokeWidth={2.5} />
              </div>
              <div className="stat-value">
                {score}/{TOTAL_ITEMS}
              </div>
            </div>

            <div className="stat-block">
              <div className="stat-label">
                {isChinese ? "计时器" : "TIMER"}
                <ChevronDown size={12} strokeWidth={2.5} />
              </div>
              <div className="stat-value">{formatTime(timeLeft)}</div>
            </div>
          </div>
        </header>
      )}

      {isLearnMode && (
        <header className="quiz-header">
          <div className="header-left">
            <button className="btn-play" onClick={handleStartQuiz}>
              {isChinese ? "开始测验" : "PLAY QUIZ"}
            </button>
            <button className="btn-learn active" onClick={handleLearnMode}>
              <GraduationCap size={18} strokeWidth={2} />
              {isChinese ? "学习" : "Learn"}
            </button>
          </div>
        </header>
      )}

      {quizStarted && !finished && currentItem && (
        <div className="quiz-active-panel">
          <div className="active-image-box">
            <FunctionalGroupImage group={currentItem.group} />
          </div>

          <div className="answer-section">
            <label className="answer-label" htmlFor="quiz-answer">
              {isChinese ? "请输入答案：" : "Enter answer:"}
            </label>
            <div className="answer-row">
              <button
                className="btn-nav"
                onClick={handlePrev}
                disabled={findAdjacentUnansweredIndex(currentIndex, -1, true) === currentIndex}
              >
                ← {isChinese ? "上一个" : "PREV"}
              </button>
              <input
                id="quiz-answer"
                ref={answerInputRef}
                type="text"
                className={`answer-input ${currentItem.isCorrect ? "correct" : ""}`}
                value={currentItem.inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                autoComplete="off"
                spellCheck={false}
              />
              <button
                className="btn-nav"
                onClick={handleNext}
                disabled={findAdjacentUnansweredIndex(currentIndex, 1, true) === currentIndex}
              >
                {isChinese ? "下一个" : "NEXT"} →
              </button>
            </div>
          </div>

          <div className="active-stats">
            <div className="stat-block">
              <div className="stat-label">
                {isChinese ? "得分" : "SCORE"}
                <ChevronDown size={12} strokeWidth={2.5} />
              </div>
              <div className="stat-value">
                {score}/{TOTAL_ITEMS}
              </div>
            </div>

            <button
              className="btn-pause"
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? (isChinese ? "继续计时" : "Resume timer") : isChinese ? "暂停计时" : "Pause timer"}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>

            <div className="stat-block">
              <div className="stat-label">
                {isChinese ? "计时器" : "TIMER"}
                <ChevronDown size={12} strokeWidth={2.5} />
              </div>
              <div className="stat-value">{formatTime(timeLeft)}</div>
            </div>

            <button className="btn-give-up" onClick={handleGiveUp}>
              {isChinese ? "放弃" : "Give Up"}
            </button>
          </div>
        </div>
      )}

      <div className={`quiz-grid ${(!quizStarted && !isLearnMode) || finished ? "quiz-disabled" : ""}`}>
        {quizItems.map((item, idx) => (
          <button
            key={item.group.id + idx}
            type="button"
            className={[
              "quiz-item",
              quizStarted && !finished && idx === currentIndex ? "active" : "",
              item.isCorrect ? "correct" : "",
              isLearnMode || finished ? "learn-item" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => handleSelectItem(idx)}
            disabled={(!quizStarted && !isLearnMode) || finished || item.isCorrect}
          >
            <div className="item-image">
              <FunctionalGroupImage group={item.group} />
            </div>
            {(isLearnMode || finished || item.isCorrect === true) && (
              <div className={`learn-label ${finished && !item.inputValue.trim() ? "unanswered-label" : ""}`}>
                {getGroupName(item.group)}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
