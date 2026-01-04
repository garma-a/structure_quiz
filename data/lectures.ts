import { Lecture } from '../types';

export const lectures: Lecture[] = [
  { id: 'all', title: 'Comprehensive Exam Mode', description: 'Mix of all questions from all exams and lectures', questionCount: 120 },
  { id: 'exam1', title: 'Remedial Exam 2019-2020', description: 'Questions from the 2019-2020 Remedial Exam', questionCount: 20 },
  { id: 'exam2', title: '12th Examination 2024', description: 'Questions from the 12th Exam Dec 2024', questionCount: 15 },
  { id: 'L1', title: 'L1: Introduction', description: 'Reasons for studying PL, Domains, Evaluation Criteria', questionCount: 10 },
  { id: 'L2', title: 'L2: History & Paradigms', description: 'Evolution of Major PLs, Influences, Categories', questionCount: 10 },
  { id: 'L3', title: 'L3: Syntax & Semantics', description: 'BNF, Parse Trees, Ambiguity, Semantics', questionCount: 15 },
  { id: 'L5', title: 'L5: Names & Binding', description: 'Variables, Binding Time, Static vs Dynamic', questionCount: 15 },
  { id: 'L6', title: 'L6: Scopes', description: 'Static/Dynamic Scope, Referencing Environments', questionCount: 10 },
  { id: 'L7', title: 'L7: Expressions', description: 'Operators, Overloading, Type Conversions', questionCount: 10 },
  { id: 'L11', title: 'L11: Control Structures', description: 'Selection, Iteration, Guarded Commands', questionCount: 10 },
  { id: 'L12', title: 'L12: Subprograms', description: 'Parameter Passing, Implementation, Coroutines', questionCount: 15 },
];