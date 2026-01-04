import React from "react";
import { Lecture } from "../types";

interface Props {
  lecture: Lecture;
  onStart: (id: string) => void;
  progress?: number;
  completedCount?: number;
  totalCount?: number;
}

export const QuizCard: React.FC<Props> = ({
  lecture,
  onStart,
  progress = 0,
  completedCount = 0,
  totalCount = 0,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow p-6 flex flex-col">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
          {lecture.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
          {lecture.description}
        </p>
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-2 py-1 rounded-full font-medium">
            {completedCount}/{totalCount} Completed
          </span>
          {progress === 100 && (
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              ✓ Done
            </span>
          )}
        </div>
        {totalCount > 0 && (
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mb-2">
            <div
              className="bg-emerald-600 dark:bg-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
      <button
        onClick={() => onStart(lecture.id)}
        className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white py-2 rounded-md font-medium transition-colors"
      >
        {progress === 100 ? "Review Again" : "Start Quiz"}
      </button>
    </div>
  );
};
