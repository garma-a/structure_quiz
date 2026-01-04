import React, { useState } from 'react';
import { Lecture } from '../types';

interface Props {
  lectures: Lecture[];
  onGenerate: (selectedLectureIds: string[], questionCount: number) => void;
}

export const QuizGenerator: React.FC<Props> = ({ lectures, onGenerate }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [questionCount, setQuestionCount] = useState<number>(20);

  // Filter out the 'all' pseudo-lecture and exams for the specific topic list if desired,
  // or keep them. Let's keep distinct lectures for clarity.
  const topicLectures = lectures.filter(l => !l.id.startsWith('exam') && l.id !== 'all');

  const toggleLecture = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
  };

  const selectAll = () => {
    if (selectedIds.size === topicLectures.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(topicLectures.map(l => l.id)));
    }
  };

  const handleGenerate = () => {
    if (selectedIds.size === 0) return;
    onGenerate(Array.from(selectedIds), questionCount);
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 mb-8 animate-fade-in">
      <div className="mb-6 border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          Custom Quiz Generator
        </h2>
        <p className="text-slate-600 mt-1">Select specific lectures to build a targeted practice exam.</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-slate-700">Topics</h3>
          <button 
            onClick={selectAll}
            className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
          >
            {selectedIds.size === topicLectures.length ? 'Deselect All' : 'Select All'}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {topicLectures.map(lecture => (
            <div 
              key={lecture.id}
              onClick={() => toggleLecture(lecture.id)}
              className={`cursor-pointer border rounded-lg p-3 flex items-center gap-3 transition-all ${
                selectedIds.has(lecture.id) 
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm' 
                  : 'hover:bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                 selectedIds.has(lecture.id) ? 'bg-emerald-600 border-emerald-600' : 'border-slate-300 bg-white'
              }`}>
                {selectedIds.has(lecture.id) && <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>}
              </div>
              <div>
                <div className="font-medium text-sm">{lecture.title.split(':')[0]}</div>
                <div className="text-xs opacity-80 truncate w-40">{lecture.title.split(':').slice(1).join(':') || lecture.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="block font-semibold text-slate-700 mb-2">Number of Questions</label>
        <div className="flex items-center gap-4">
          <input 
            type="range" 
            min="5" 
            max="100" 
            step="5" 
            value={questionCount}
            onChange={(e) => setQuestionCount(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <span className="font-bold text-slate-800 w-16 text-right">{questionCount}</span>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={selectedIds.size === 0}
        className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold text-lg shadow-md transition-all transform active:scale-95"
      >
        Generate Custom Quiz
      </button>
    </div>
  );
};