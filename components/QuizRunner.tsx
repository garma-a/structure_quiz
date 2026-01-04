import React, { useState } from 'react';
import { Question, QuestionType } from '../types';
import { explainAnswer, askTutor } from '../services/geminiService';

interface Props {
  questions: Question[];
  onFinish: (score: number, total: number) => void;
  onExit: () => void;
}

export const QuizRunner: React.FC<Props> = ({ questions, onFinish, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loadingExplanation, setLoadingExplanation] = useState(false);
  const [tutorQuery, setTutorQuery] = useState('');
  const [tutorResponse, setTutorResponse] = useState<string | null>(null);
  const [loadingTutor, setLoadingTutor] = useState(false);

  const currentQ = questions[currentIndex];

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

    if (isCorrect) setScore(score + 1);
  };

  const handleExplain = async () => {
    setLoadingExplanation(true);
    const exp = await explainAnswer(
      currentQ.question, 
      currentQ.options, 
      String(currentQ.correctAnswer), 
      String(selectedOption)
    );
    setExplanation(exp);
    setLoadingExplanation(false);
  };

  const handleTutorAsk = async () => {
    if(!tutorQuery.trim()) return;
    setLoadingTutor(true);
    const ans = await askTutor(tutorQuery, currentQ.question);
    setTutorResponse(ans);
    setLoadingTutor(false);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setExplanation(null);
      setTutorResponse(null);
      setTutorQuery('');
    } else {
      onFinish(score, questions.length);
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header / Progress */}
      <div className="mb-6 flex justify-between items-center">
        <span className="text-sm font-medium text-slate-500">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <button onClick={onExit} className="text-sm text-red-600 hover:text-red-800 font-medium">
          Exit Quiz
        </button>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
        <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-4">
          {currentQ.source || 'General'}
        </span>
        <h2 className="text-xl font-bold text-slate-900 mb-6">{currentQ.question}</h2>

        <div className="space-y-3">
          {currentQ.type === QuestionType.MCQ && currentQ.options?.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedOption === idx
                  ? isAnswered 
                    ? idx === currentQ.correctAnswer 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-red-500 bg-red-50'
                    : 'border-emerald-600 bg-emerald-50'
                  : 'border-slate-200 hover:border-slate-300'
              } ${isAnswered && idx === currentQ.correctAnswer ? 'border-green-500 bg-green-50' : ''}`}
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
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : 'border-emerald-600 bg-emerald-50'
                      : 'border-slate-200 hover:border-slate-300'
                  } ${isAnswered && val === currentQ.correctAnswer ? 'border-green-500 bg-green-50' : ''}`}
                >
                  {val ? 'TRUE' : 'FALSE'}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Feedback Area */}
        {isAnswered && (
          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className={`text-lg font-bold mb-2 ${
              (currentQ.type === QuestionType.MCQ && selectedOption === currentQ.correctAnswer) ||
              (currentQ.type === QuestionType.TF && selectedOption === currentQ.correctAnswer)
                ? 'text-green-600'
                : 'text-red-600'
            }`}>
              {(currentQ.type === QuestionType.MCQ && selectedOption === currentQ.correctAnswer) ||
              (currentQ.type === QuestionType.TF && selectedOption === currentQ.correctAnswer)
                ? 'Correct!'
                : 'Incorrect'}
            </div>
            
            {currentQ.explanation && (
              <p className="text-slate-600 mb-4">{currentQ.explanation}</p>
            )}

            <div className="flex flex-wrap gap-3 mt-4">
              <button 
                onClick={handleExplain} 
                disabled={loadingExplanation}
                className="text-sm bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-200 transition-colors disabled:opacity-50"
              >
                {loadingExplanation ? 'Thinking...' : '✨ Explain with AI'}
              </button>
              
              <button 
                onClick={nextQuestion}
                className="ml-auto bg-slate-900 text-white px-6 py-2 rounded-md hover:bg-slate-800 transition-colors font-medium"
              >
                {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            </div>

            {explanation && (
              <div className="mt-4 p-4 bg-indigo-50 rounded-lg text-sm text-indigo-900 border border-indigo-100">
                <h4 className="font-bold mb-1 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                  AI Explanation
                </h4>
                {explanation}
              </div>
            )}
          </div>
        )}

        {!isAnswered && (
          <button
            onClick={checkAnswer}
            disabled={selectedOption === null}
            className="mt-8 w-full bg-emerald-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        )}
      </div>

      {/* AI Tutor Section */}
      <div className="bg-slate-100 rounded-xl p-6 border border-slate-200">
        <h3 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
           🤖 AI Tutor (Thinking Mode)
        </h3>
        <p className="text-xs text-slate-500 mb-4">Stuck? Ask a complex question about this topic.</p>
        <div className="flex gap-2">
          <input 
            type="text" 
            value={tutorQuery}
            onChange={(e) => setTutorQuery(e.target.value)}
            placeholder="e.g., Why is static scope safer?"
            className="flex-grow px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button 
            onClick={handleTutorAsk}
            disabled={loadingTutor || !tutorQuery}
            className="bg-slate-700 text-white px-4 py-2 rounded-md text-sm hover:bg-slate-600 disabled:opacity-50"
          >
            Ask
          </button>
        </div>
        {tutorResponse && (
           <div className="mt-4 p-3 bg-white rounded border text-sm text-slate-800 leading-relaxed">
             {tutorResponse}
           </div>
        )}
      </div>
    </div>
  );
};