import React, { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { QuizCard } from "./components/QuizCard";
import { QuizRunner } from "./components/QuizRunner";
import { lectures } from "./data/lectures";
import { questions } from "./data/questionBank";
import { Question } from "./types";

const App: React.FC = () => {
  type StoredProgress = {
    questions: Question[];
    currentIndex: number;
    selectedOption: any;
    isAnswered: boolean;
    score: number;
  };

  const [activeQuestions, setActiveQuestions] = useState<Question[] | null>(
    null
  );
  const [quizScore, setQuizScore] = useState<{
    score: number;
    total: number;
  } | null>(null);
  const [savedProgress, setSavedProgress] = useState<StoredProgress | null>(
    null
  );

  const STORAGE_KEY = "pl-quiz-progress";

  // Load saved progress on first mount
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (parsed?.questions?.length) {
        setSavedProgress(parsed);
        setActiveQuestions(parsed.questions);
      }
    } catch (err) {
      console.error("Failed to load saved progress", err);
    }
  }, []);

  const startPresetQuiz = (id: string) => {
    let q: Question[] = [];
    if (id === "all") {
      q = [...questions];
    } else {
      q = questions.filter((item) => item.lectureId === id);
    }
    // Shuffle
    q = q.sort(() => Math.random() - 0.5);
    if (q.length === 0) {
      alert("No questions available for this selection yet.");
      return;
    }
    setActiveQuestions(q);
    setQuizScore(null);
    const initialProgress = {
      questions: q,
      currentIndex: 0,
      selectedOption: null,
      isAnswered: false,
      score: 0,
    };
    setSavedProgress(initialProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProgress));
  };

  const finishQuiz = (score: number, total: number) => {
    setQuizScore({ score, total });
    setActiveQuestions(null);
    setSavedProgress(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const exitQuiz = () => {
    setActiveQuestions(null);
    setQuizScore(null);
  };

  const handleProgressSave = (progress: StoredProgress | null) => {
    if (!progress) {
      localStorage.removeItem(STORAGE_KEY);
      setSavedProgress(null);
      return;
    }
    setSavedProgress(progress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  };

  const resetSavedProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSavedProgress(null);
    setActiveQuestions(null);
    setQuizScore(null);
  };

  return (
    <Layout>
      {activeQuestions ? (
        <QuizRunner
          questions={activeQuestions}
          initialProgress={savedProgress}
          onProgressSave={handleProgressSave}
          onFinish={finishQuiz}
          onExit={exitQuiz}
        />
      ) : (
        <>
          {quizScore && (
            <div className="mb-12 bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-900/50 rounded-xl p-8 text-center shadow-lg animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Quiz Complete!
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                You scored
              </p>
              <div className="text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-6">
                {Math.round((quizScore.score / quizScore.total) * 100)}%
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {quizScore.score} out of {quizScore.total} correct
              </p>
              <button
                onClick={() => setQuizScore(null)}
                className="mt-6 text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 underline"
              >
                Take another quiz
              </button>
            </div>
          )}

          <div className="max-w-4xl mx-auto">
            {savedProgress && (
              <div className="mb-6 flex items-center justify-between bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-600/40 text-amber-800 dark:text-amber-200 px-4 py-3 rounded-lg shadow-sm">
                <div>
                  <p className="font-semibold">
                    You have a saved quiz in progress.
                  </p>
                  <p className="text-sm opacity-80">
                    Close and return any time to continue where you left off, or
                    reset to start fresh.
                  </p>
                </div>
                <button
                  onClick={resetSavedProgress}
                  className="text-sm font-medium text-red-600 dark:text-red-300 hover:text-red-700 dark:hover:text-red-200 underline"
                >
                  Reset progress
                </button>
              </div>
            )}

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Quick Start Presets
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lectures
                  .filter((l) => l.id !== "all")
                  .map((lecture) => (
                    <QuizCard
                      key={lecture.id}
                      lecture={lecture}
                      onStart={startPresetQuiz}
                    />
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default App;
