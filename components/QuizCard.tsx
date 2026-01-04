import React from 'react';
import { Lecture } from '../types';

interface Props {
  lecture: Lecture;
  onStart: (id: string) => void;
}

export const QuizCard: React.FC<Props> = ({ lecture, onStart }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow p-6 flex flex-col">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">{lecture.title}</h3>
        <p className="text-slate-600 text-sm mb-4">{lecture.description}</p>
        <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">
          {lecture.questionCount} Questions
        </span>
      </div>
      <button
        onClick={() => onStart(lecture.id)}
        className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md font-medium transition-colors"
      >
        Start Quiz
      </button>
    </div>
  );
};