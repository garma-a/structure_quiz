import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { QuizCard } from './components/QuizCard';
import { QuizRunner } from './components/QuizRunner';
import { QuizGenerator } from './components/QuizGenerator';
import { lectures } from './data/lectures';
import { questions } from './data/questionBank';
import { Question } from './types';

const App: React.FC = () => {
  const [activeQuestions, setActiveQuestions] = useState<Question[] | null>(null);
  const [quizScore, setQuizScore] = useState<{score: number, total: number} | null>(null);

  const startPresetQuiz = (id: string) => {
    let q: Question[] = [];
    if (id === 'all') {
      q = [...questions];
    } else {
      q = questions.filter(item => item.lectureId === id);
    }
    // Shuffle
    q = q.sort(() => Math.random() - 0.5);
    if (q.length === 0) {
      alert("No questions available for this selection yet.");
      return;
    }
    setActiveQuestions(q);
    setQuizScore(null);
  };

  const startCustomQuiz = (selectedLectureIds: string[], count: number) => {
    let q = questions.filter(item => selectedLectureIds.includes(item.lectureId));
    // Shuffle
    q = q.sort(() => Math.random() - 0.5);
    // Slice
    q = q.slice(0, count);
    
    if (q.length === 0) {
      alert("No questions found for the selected topics.");
      return;
    }
    setActiveQuestions(q);
    setQuizScore(null);
  };

  const finishQuiz = (score: number, total: number) => {
    setQuizScore({ score, total });
    setActiveQuestions(null);
  };

  const exitQuiz = () => {
    setActiveQuestions(null);
    setQuizScore(null);
  };

  return (
    <Layout>
      {activeQuestions ? (
        <QuizRunner 
          questions={activeQuestions} 
          onFinish={finishQuiz} 
          onExit={exitQuiz} 
        />
      ) : (
        <>
          {quizScore && (
            <div className="mb-12 bg-white border border-emerald-100 rounded-xl p-8 text-center shadow-lg animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Quiz Complete!</h2>
              <p className="text-slate-600 mb-6">You scored</p>
              <div className="text-5xl font-black text-emerald-600 mb-6">
                {Math.round((quizScore.score / quizScore.total) * 100)}%
              </div>
              <p className="text-sm text-slate-500">
                {quizScore.score} out of {quizScore.total} correct
              </p>
              <button 
                onClick={() => setQuizScore(null)}
                className="mt-6 text-emerald-600 font-medium hover:text-emerald-700 underline"
              >
                Take another quiz
              </button>
            </div>
          )}

          <div className="max-w-4xl mx-auto">
            <QuizGenerator lectures={lectures} onGenerate={startCustomQuiz} />

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                 <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 Quick Start Presets
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lectures.filter(l => l.id !== 'all').map((lecture) => (
                  <QuizCard key={lecture.id} lecture={lecture} onStart={startPresetQuiz} />
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