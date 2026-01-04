import React, { useEffect, useState } from "react";
import { Question, QuestionType } from "../types";

interface Props {
  questions: Question[];
  initialProgress?: {
    questions: Question[];
    currentIndex: number;
    selectedOption: any;
    isAnswered: boolean;
    score: number;
  } | null;
  onProgressSave?: (
    progress: {
      questions: Question[];
      currentIndex: number;
      selectedOption: any;
      isAnswered: boolean;
      score: number;
    } | null
  ) => void;
  onFinish: (
    score: number,
    total: number,
    answeredQuestions: Question[],
    correctAnswers: Set<string>
  ) => void;
  onExit: () => void;
}

export const QuizRunner: React.FC<Props> = ({
  questions,
  initialProgress,
  onProgressSave,
  onFinish,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(
    initialProgress?.currentIndex ?? 0
  );
  const [selectedOption, setSelectedOption] = useState<any>(
    initialProgress?.selectedOption ?? null
  );
  const [isAnswered, setIsAnswered] = useState(
    initialProgress?.isAnswered ?? false
  );
  const [score, setScore] = useState(initialProgress?.score ?? 0);
  const [correctAnswers, setCorrectAnswers] = useState<Set<string>>(
    new Set((initialProgress as any)?.correctAnswers || [])
  );

  const currentQ = questions[currentIndex];

  // Persist progress whenever state changes
  useEffect(() => {
    if (!onProgressSave) return;
    onProgressSave({
      questions,
      currentIndex,
      selectedOption,
      isAnswered,
      score,
      correctAnswers: Array.from(correctAnswers),
    });
  }, [
    questions,
    currentIndex,
    selectedOption,
    isAnswered,
    score,
    correctAnswers,
    onProgressSave,
  ]);

  const handleOptionSelect = (option: any) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    setIsAnswered(true);
    let isCorrect = false;
    if (currentQ.type === QuestionType.MCQ) {
      // For MCQ, option is the index
      if (selectedOption === currentQ.correctAnswer) isCorrect = true;
    } else {
      // For TF, option is boolean
      if (selectedOption === currentQ.correctAnswer) isCorrect = true;
    }

    if (isCorrect) {
      setScore(score + 1);
      setCorrectAnswers((prev) => new Set(prev).add(currentQ.id));
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onProgressSave?.(null);
      onFinish(score, questions.length, questions, correctAnswers);
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header / Progress */}
      <div className="mb-6 flex justify-between items-center">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-300">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <button
          onClick={onExit}
          className="text-sm text-red-600 hover:text-red-800 dark:text-red-300 dark:hover:text-red-200 font-medium"
        >
          Exit Quiz
        </button>
      </div>
      <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-2.5 mb-8">
        <div
          className="bg-emerald-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 mb-6 border border-slate-200 dark:border-slate-800">
        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-200 text-xs font-bold mb-4">
          {currentQ.source || "General"}
        </span>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          {currentQ.question}
        </h2>

        <div className="space-y-3">
          {currentQ.type === QuestionType.MCQ &&
            currentQ.options?.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedOption === idx
                    ? isAnswered
                      ? idx === currentQ.correctAnswer
                        ? "border-green-500 bg-green-50 dark:bg-green-900/40"
                        : "border-red-500 bg-red-50 dark:bg-red-900/40"
                      : "border-emerald-600 bg-emerald-50 dark:bg-emerald-900/30"
                    : "border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600"
                } ${
                  isAnswered && idx === currentQ.correctAnswer
                    ? "border-green-500 bg-green-50 dark:bg-green-900/40"
                    : ""
                }`}
              >
                {opt}
              </button>
            ))}

          {currentQ.type === QuestionType.TF && (
            <div className="flex gap-4">
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  onClick={() => handleOptionSelect(val)}
                  disabled={isAnswered}
                  className={`flex-1 p-4 rounded-lg border-2 font-medium transition-all ${
                    selectedOption === val
                      ? isAnswered
                        ? val === currentQ.correctAnswer
                          ? "border-green-500 bg-green-50 dark:bg-green-900/40"
                          : "border-red-500 bg-red-50 dark:bg-red-900/40"
                        : "border-emerald-600 bg-emerald-50 dark:bg-emerald-900/30"
                      : "border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600"
                  } ${
                    isAnswered && val === currentQ.correctAnswer
                      ? "border-green-500 bg-green-50 dark:bg-green-900/40"
                      : ""
                  }`}
                >
                  {val ? "TRUE" : "FALSE"}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Feedback Area */}
        {isAnswered && (
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div
              className={`text-lg font-bold mb-2 ${
                (currentQ.type === QuestionType.MCQ &&
                  selectedOption === currentQ.correctAnswer) ||
                (currentQ.type === QuestionType.TF &&
                  selectedOption === currentQ.correctAnswer)
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {(currentQ.type === QuestionType.MCQ &&
                selectedOption === currentQ.correctAnswer) ||
              (currentQ.type === QuestionType.TF &&
                selectedOption === currentQ.correctAnswer)
                ? "Correct!"
                : "Incorrect"}
            </div>

            {/* Always show the correct answer */}
            <div className="mb-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-1">
                ✓ Correct Answer:
              </p>
              <p className="text-emerald-700 dark:text-emerald-300">
                {currentQ.type === QuestionType.MCQ
                  ? currentQ.options?.[currentQ.correctAnswer as number]
                  : currentQ.correctAnswer
                  ? "TRUE"
                  : "FALSE"}
              </p>
            </div>

            {/* Show explanation if available */}
            {currentQ.explanation && (
              <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                  📚 Explanation:
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            <button
              onClick={nextQuestion}
              className="mt-4 w-full bg-slate-900 text-white px-6 py-2 rounded-md hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition-colors font-medium"
            >
              {currentIndex < questions.length - 1
                ? "Next Question"
                : "Finish Quiz"}
            </button>
          </div>
        )}

        {!isAnswered && (
          <button
            onClick={checkAnswer}
            disabled={selectedOption === null}
            className="mt-8 w-full bg-emerald-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        )}
      </div>
    </div>
  );
};
