export enum QuestionType {
  MCQ = 'MCQ',
  TF = 'TF',
}

export interface Question {
  id: string;
  lectureId: string;
  type: QuestionType;
  question: string;
  options?: string[]; // For MCQ
  correctAnswer: number | boolean; // Index for MCQ, boolean for TF
  explanation?: string;
  source?: string; // 'Exam 2020', 'Lecture 5', etc.
}

export interface Lecture {
  id: string;
  title: string;
  description: string;
  questionCount: number;
}

export interface QuizResult {
  score: number;
  total: number;
  wrongAnswers: { questionId: string; selected: any }[];
}