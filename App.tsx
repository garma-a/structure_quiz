import React, { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { QuizCard } from "./components/QuizCard";
import { QuizRunner } from "./components/QuizRunner";
import { lectures } from "./data/lectures";
import { questions } from "./data/questionBank";
import { Question } from "./types";

const App: React.FC = () => {
  type StoredProgress = {
    lectureId: string;
    questions: Question[];
    currentIndex: number;
    selectedOption: any;
    isAnswered: boolean;
    score: number;
    correctAnswers: string[];
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
  const [completedQuestions, setCompletedQuestions] = useState<
    Record<string, Set<string>>
  >({});

  const STORAGE_KEY = "pl-quiz-progress";
  const COMPLETED_KEY = "pl-quiz-completed";

  // Load saved progress and completed questions on first mount
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed?.questions?.length) {
          setSavedProgress(parsed);
          setActiveQuestions(parsed.questions);
        }
      } catch (err) {
        console.error("Failed to load saved progress", err);
      }
    }

    const completedRaw = localStorage.getItem(COMPLETED_KEY);
    if (completedRaw) {
      try {
        const parsed = JSON.parse(completedRaw);
        const mapped: Record<string, Set<string>> = {};
        for (const [lectureId, ids] of Object.entries(parsed)) {
          mapped[lectureId] = new Set(ids as string[]);
        }
        setCompletedQuestions(mapped);
      } catch (err) {
        console.error("Failed to load completed questions", err);
      }
    }
  }, []);

  const startPresetQuiz = (id: string) => {
    // Check if there's saved progress for this lecture
    if (savedProgress && savedProgress.lectureId === id) {
      setActiveQuestions(savedProgress.questions);
      setQuizScore(null);
      return;
    }

    let q: Question[] = [];
    if (id === "all") {
      q = [...questions];
    } else {
      q = questions.filter((item) => item.lectureId === id);
    }

    // Filter out already completed questions
    const completed = completedQuestions[id] || new Set();
    q = q.filter((question) => !completed.has(question.id));

    // Shuffle
    q = q.sort(() => Math.random() - 0.5);

    if (q.length === 0) {
      alert("You've completed all questions in this lecture! Great job!");
      return;
    }

    setActiveQuestions(q);
    setQuizScore(null);
    const initialProgress: StoredProgress = {
      lectureId: id,
      questions: q,
      currentIndex: 0,
      selectedOption: null,
      isAnswered: false,
      score: 0,
      correctAnswers: [],
    };
    setSavedProgress(initialProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProgress));
  };

  const finishQuiz = (
    score: number,
    total: number,
    answeredQuestions: Question[],
    correctAnswers: Set<string>
  ) => {
    setQuizScore({ score, total });
    setActiveQuestions(null);
    setSavedProgress(null);
    localStorage.removeItem(STORAGE_KEY);

    // Mark correctly answered questions as completed
    const updated = { ...completedQuestions };
    answeredQuestions.forEach((q) => {
      if (correctAnswers.has(q.id)) {
        if (!updated[q.lectureId]) {
          updated[q.lectureId] = new Set();
        }
        updated[q.lectureId].add(q.id);
      }
    });
    setCompletedQuestions(updated);

    // Persist to localStorage
    const serialized: Record<string, string[]> = {};
    for (const [lectureId, ids] of Object.entries(updated)) {
      serialized[lectureId] = Array.from(ids);
    }
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(serialized));
  };

  const exitQuiz = () => {
    // Save any correctly answered questions from current session
    if (savedProgress && savedProgress.correctAnswers.length > 0) {
      const updated = { ...completedQuestions };
      const lectureId = savedProgress.lectureId;
      if (!updated[lectureId]) {
        updated[lectureId] = new Set();
      }
      savedProgress.correctAnswers.forEach((qId) => {
        updated[lectureId].add(qId);
      });
      setCompletedQuestions(updated);

      // Persist to localStorage
      const serialized: Record<string, string[]> = {};
      for (const [lid, ids] of Object.entries(updated)) {
        serialized[lid] = Array.from(ids);
      }
      localStorage.setItem(COMPLETED_KEY, JSON.stringify(serialized));
    }

    setActiveQuestions(null);
    setQuizScore(null);
  };

  const handleProgressSave = (
    progress:
      | (Omit<StoredProgress, "lectureId"> & { correctAnswers: string[] })
      | null
  ) => {
    if (!progress) {
      localStorage.removeItem(STORAGE_KEY);
      setSavedProgress(null);
      return;
    }
    const fullProgress: StoredProgress = {
      ...progress,
      lectureId: savedProgress?.lectureId || "unknown",
    };
    setSavedProgress(fullProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fullProgress));
  };

  const resetSavedProgress = () => {
    // Clear current quiz progress
    localStorage.removeItem(STORAGE_KEY);
    setSavedProgress(null);
    setActiveQuestions(null);
    setQuizScore(null);

    // Clear all completed questions (reset all progress bars)
    localStorage.removeItem(COMPLETED_KEY);
    setCompletedQuestions({});
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
                  .map((lecture) => {
                    const completed =
                      completedQuestions[lecture.id] || new Set();
                    const total = questions.filter(
                      (q) => q.lectureId === lecture.id
                    ).length;
                    const progress =
                      total > 0 ? (completed.size / total) * 100 : 0;
                    return (
                      <QuizCard
                        key={lecture.id}
                        lecture={lecture}
                        onStart={startPresetQuiz}
                        progress={progress}
                        completedCount={completed.size}
                        totalCount={total}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default App;
