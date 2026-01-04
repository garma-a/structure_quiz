import { Question, QuestionType } from '../types';

export const questions: Question[] = [
  // --- Remedial Exam 2019-2020 Questions ---
  {
    id: 'rem-1', lectureId: 'exam1', type: QuestionType.MCQ, source: 'Remedial Exam 2019-2020',
    question: 'What is the main advantage of "call by value-result" parameter passing?',
    options: [
      'It allows the formal parameter to be modified, and the actual parameter is updated with the new value after the subprogram finishes.',
      'It reduces memory usage by passing references to the actual parameters.',
      'It avoids side effects by not modifying any actual parameters.',
      'It guarantees that the actual parameter will not be changed during the subprogram execution.'
    ],
    correctAnswer: 0
  },
  {
    id: 'rem-2', lectureId: 'exam1', type: QuestionType.MCQ, source: 'Remedial Exam 2019-2020',
    question: 'Which of the following is a difference between static and dynamic typing?',
    options: [
      'Static typing is determined at runtime, while dynamic typing is determined at compile time.',
      'In static typing, the type of a variable is fixed at compile time, whereas in dynamic typing, the type can change during runtime.',
      'Dynamic typing is more efficient than static typing.',
      'Static typing allows for more polymorphism than dynamic typing.'
    ],
    correctAnswer: 1
  },
  {
    id: 'rem-3', lectureId: 'exam1', type: QuestionType.MCQ, source: 'Remedial Exam 2019-2020',
    question: 'Which of the following languages is an example of a language that supports both procedural and object-oriented programming?',
    options: ['JavaScript', 'C', 'Java', 'Ruby'],
    correctAnswer: 1 // Faithful to PDF exam key
  },
  {
    id: 'rem-4', lectureId: 'exam1', type: QuestionType.MCQ, source: 'Remedial Exam 2019-2020',
    question: 'Which of the following is the primary purpose of the "stack" in subprogram implementation?',
    options: [
      'To store the values of function parameters at runtime',
      'To handle the dynamic memory allocation for recursive function calls',
      'To hold global variables and static data for the program',
      'To store activation records for each subprogram call'
    ],
    correctAnswer: 3
  },
  {
    id: 'rem-5', lectureId: 'exam1', type: QuestionType.MCQ, source: 'Remedial Exam 2019-2020',
    question: 'Which of the following is characteristic of a "lazy evaluation" strategy?',
    options: [
      'Expressions are evaluated only when their values are needed during execution.',
      'Expressions are evaluated in a strict left-to-right order.',
      'All expressions are evaluated as soon as they are bound to variables.',
      'Variables are evaluated only if they are modified.'
    ],
    correctAnswer: 0
  },
  {
    id: 'rem-6', lectureId: 'exam1', type: QuestionType.MCQ, source: 'Remedial Exam 2019-2020',
    question: 'Which is an advantage of using an interpreted language over a compiled language?',
    options: [
      'Faster execution speed',
      'Easier debugging and portability',
      'More efficient memory usage',
      'Better support for low-level system programming'
    ],
    correctAnswer: 1
  },
  {
    id: 'rem-7', lectureId: 'exam1', type: QuestionType.MCQ, source: 'Remedial Exam 2019-2020',
    question: 'What does "type equivalence" refer to?',
    options: [
      'The relationship between two types where one can be converted into another.',
      'The ability of a variable to hold values of different types.',
      'Whether two types are considered the same for comparison and assignment.',
      'The rules governing the relationship between variables of the same type.'
    ],
    correctAnswer: 2
  },
  {
    id: 'rem-8', lectureId: 'exam1', type: QuestionType.MCQ, source: 'Remedial Exam 2019-2020',
    question: 'Difference between static and dynamic typing?',
    options: [
      'Static typing is determined at runtime.',
      'Static typing allows for more polymorphism.',
      'Dynamic typing is more efficient.',
      'In static typing, the type of a variable is fixed at compile time; in dynamic, it can change during runtime.'
    ],
    correctAnswer: 3
  },
  {
    id: 'rem-9', lectureId: 'exam1', type: QuestionType.MCQ, source: 'Remedial Exam 2019-2020',
    question: 'Which language feature does garbage collection address?',
    options: [
      'Automatic memory management',
      'Function overloading',
      'Operator overloading',
      'Syntax errors handling'
    ],
    correctAnswer: 0
  },
  {
    id: 'rem-10', lectureId: 'exam1', type: QuestionType.MCQ, source: 'Remedial Exam 2019-2020',
    question: 'Key characteristic of imperative programming languages?',
    options: [
      'Focus on declarative statements',
      'Execution flows are controlled via statements and functions',
      'Use of recursion as a primary construct',
      'Computation is modeled through logical assertions'
    ],
    correctAnswer: 1
  },
  {
    id: 'rem-tf-1', lectureId: 'exam1', type: QuestionType.TF, source: 'Remedial Exam 2019-2020',
    question: 'An abstract method is one that does not include a protocol.',
    correctAnswer: false,
    explanation: 'An abstract method includes a protocol (definition/signature) but no implementation.'
  },
  {
    id: 'rem-tf-2', lectureId: 'exam1', type: QuestionType.TF, source: 'Remedial Exam 2019-2020',
    question: 'Names in Java and C# have a length limit, and all characters in them are significant.',
    correctAnswer: false,
    explanation: 'They have NO length limit.'
  },
  {
    id: 'rem-tf-3', lectureId: 'exam1', type: QuestionType.TF, source: 'Remedial Exam 2019-2020',
    question: 'In Logic Programming Languages, to prove a goal is true, one must find a chain of inference rules and/or facts.',
    correctAnswer: true
  },
  {
    id: 'rem-tf-5', lectureId: 'exam1', type: QuestionType.TF, source: 'Remedial Exam 2019-2020',
    question: 'Size of a dynamic array can change during its lifetime.',
    correctAnswer: true
  },
  {
    id: 'rem-tf-6', lectureId: 'exam1', type: QuestionType.TF, source: 'Remedial Exam 2019-2020',
    question: 'Java does not allow dangling references at all, since there is no explicit pointer in the language.',
    correctAnswer: true
  },

  // --- 12th Examination 2024 ---
  {
    id: 'exam12-1', lectureId: 'exam2', type: QuestionType.MCQ, source: '12th Exam 2024',
    question: 'In "simple" subprograms implementation, which action is NOT required during return semantics?',
    options: [
      'Move current values of pass-by-value-result parameters',
      'Restore execution status of caller',
      'Transfer control back to caller',
      'Allocate stack-dynamic local variables'
    ],
    correctAnswer: 3,
    explanation: 'Allocation happens at the start (call), not return.'
  },
  {
    id: 'exam12-2', lectureId: 'exam2', type: QuestionType.MCQ, source: '12th Exam 2024',
    question: 'A subprogram __________ describes the interface to and the actions of the subprogram.',
    options: [
      'abstraction',
      'definition',
      'call',
      'declaration'
    ],
    correctAnswer: 1
  },
  {
    id: 'exam12-3', lectureId: 'exam2', type: QuestionType.MCQ, source: '12th Exam 2024',
    question: 'In which language are all parameters passed by value, but object parameters are passed by reference?',
    options: ['C', 'C++', 'Java', 'Python'],
    correctAnswer: 2
  },
  {
    id: 'exam12-tf-1', lectureId: 'exam2', type: QuestionType.TF, source: '12th Exam 2024',
    question: 'The function prototype is a subprogram’s parameter profile and, if it is a function, its return type.',
    correctAnswer: false
  },
  {
    id: 'exam12-tf-2', lectureId: 'exam2', type: QuestionType.TF, source: '12th Exam 2024',
    question: 'Python and Ruby treat methods as first-class objects.',
    correctAnswer: true
  },
  {
    id: 'exam-mix-1', lectureId: 'exam2', type: QuestionType.MCQ, source: '12th Exam 2024',
    question: 'Which binding method uses the environment of the call statement?',
    options: ['Deep binding', 'Shallow binding', 'Ad hoc binding', 'Dynamic binding'],
    correctAnswer: 1
  },
  {
    id: 'exam-mix-2', lectureId: 'exam2', type: QuestionType.MCQ, source: '12th Exam 2024',
    question: 'Which implementation of dynamic scoping involves searching activation records on the dynamic chain?',
    options: ['Shallow Access', 'Deep Access', 'Ad hoc Access', 'Displays Access'],
    correctAnswer: 1
  },
  {
    id: 'exam-mix-3', lectureId: 'exam2', type: QuestionType.MCQ, source: '12th Exam 2024',
    question: 'What is a closure?',
    options: [
      'A subprogram along with its referencing environment',
      'An overloaded subprogram',
      'A coroutine',
      'A function pointer'
    ],
    correctAnswer: 0
  },

  // --- L1: Introduction ---
  {
    id: 'l1-1', lectureId: 'L1', type: QuestionType.MCQ, source: 'Lecture 1',
    question: 'Which of the following is NOT a reason to study programming language concepts?',
    options: ['Increased capacity to express ideas', 'Improved background for choosing appropriate languages', 'To design hardware circuits', 'Better understanding of implementation significance'],
    correctAnswer: 2
  },
  {
    id: 'l1-2', lectureId: 'L1', type: QuestionType.MCQ, source: 'Lecture 1',
    question: 'The first language for scientific applications was:',
    options: ['COBOL', 'Fortran', 'Lisp', 'Ada'],
    correctAnswer: 1
  },
  {
    id: 'l1-3', lectureId: 'L1', type: QuestionType.MCQ, source: 'Lecture 1',
    question: 'Which domain is characterized by symbolic rather than numeric computations?',
    options: ['Scientific', 'Business', 'Artificial Intelligence', 'Systems Programming'],
    correctAnswer: 2
  },
  {
    id: 'l1-4', lectureId: 'L1', type: QuestionType.MCQ, source: 'Lecture 1',
    question: 'Which criterion refers to the ease with which a program can be read and understood?',
    options: ['Readability', 'Writability', 'Reliability', 'Cost'],
    correctAnswer: 0
  },
  {
    id: 'l1-5', lectureId: 'L1', type: QuestionType.TF, source: 'Lecture 1',
    question: 'Orthogonality allows a relatively small set of primitive constructs to be combined in a relatively small number of ways to build the control and data structures.',
    correctAnswer: true
  },
  {
    id: 'l1-6', lectureId: 'L1', type: QuestionType.MCQ, source: 'Lecture 1',
    question: 'The Von Neumann architecture uses which cycle?',
    options: ['Fetch-Decode-Execute', 'Read-Write-Modify', 'Compile-Link-Load', 'Input-Process-Output'],
    correctAnswer: 0
  },
  {
    id: 'l1-7', lectureId: 'L1', type: QuestionType.TF, source: 'Lecture 1',
    question: 'Pure interpretation generally leads to faster execution speeds than compilation.',
    correctAnswer: false
  },
  {
    id: 'l1-8', lectureId: 'L1', type: QuestionType.MCQ, source: 'Lecture 1',
    question: 'JIT (Just-In-Time) systems are an example of:',
    options: ['Pure Compilation', 'Pure Interpretation', 'Hybrid Implementation Systems', 'Hardware Emulation'],
    correctAnswer: 2
  },

  // --- L2: History ---
  {
    id: 'l2-1', lectureId: 'L2', type: QuestionType.MCQ, source: 'Lecture 2',
    question: 'Which architecture are most imperative languages based on?',
    options: ['Harvard', 'Von Neumann', 'Dataflow', 'Neural'],
    correctAnswer: 1
  },
  {
    id: 'l2-2', lectureId: 'L2', type: QuestionType.MCQ, source: 'Lecture 2',
    question: 'Which language introduced the concept of "Write once, run anywhere"?',
    options: ['C++', 'Ada', 'Java', 'Smalltalk'],
    correctAnswer: 2
  },
  {
    id: 'l2-3', lectureId: 'L2', type: QuestionType.MCQ, source: 'Lecture 2',
    question: 'Which language is considered the ancestor of most modern structured languages?',
    options: ['Fortran', 'ALGOL', 'COBOL', 'Lisp'],
    correctAnswer: 1
  },
  {
    id: 'l2-4', lectureId: 'L2', type: QuestionType.MCQ, source: 'Lecture 2',
    question: 'Which language was the first to fully support Object-Oriented Programming (OOP)?',
    options: ['Simula 67', 'Smalltalk', 'C++', 'Java'],
    correctAnswer: 1
  },
  {
    id: 'l2-5', lectureId: 'L2', type: QuestionType.TF, source: 'Lecture 2',
    question: 'LISP is a purely imperative language designed for business applications.',
    correctAnswer: false
  },
  {
    id: 'l2-6', lectureId: 'L2', type: QuestionType.MCQ, source: 'Lecture 2',
    question: 'The first high-level language, Plankalkul, was designed by:',
    options: ['Konrad Zuse', 'Grace Hopper', 'John Backus', 'Alan Turing'],
    correctAnswer: 0
  },
  {
    id: 'l2-7', lectureId: 'L2', type: QuestionType.MCQ, source: 'Lecture 2',
    question: 'COBOL was primarily designed for:',
    options: ['Scientific Computing', 'System Administration', 'Business Applications', 'Artificial Intelligence'],
    correctAnswer: 2
  },

  // --- L3: Syntax & Semantics ---
  {
    id: 'l3-1', lectureId: 'L3', type: QuestionType.MCQ, source: 'Lecture 3',
    question: 'What does a compiler check first?',
    options: ['Semantics', 'Syntax', 'Logic', 'Runtime errors'],
    correctAnswer: 1
  },
  {
    id: 'l3-2', lectureId: 'L3', type: QuestionType.MCQ, source: 'Lecture 3',
    question: 'Which notation is commonly used to describe syntax?',
    options: ['UML', 'BNF', 'XML', 'JSON'],
    correctAnswer: 1
  },
  {
    id: 'l3-3', lectureId: 'L3', type: QuestionType.TF, source: 'Lecture 3',
    question: 'Ambiguity in a grammar allows a single sentence to have two or more distinct parse trees.',
    correctAnswer: true
  },
  {
    id: 'l3-4', lectureId: 'L3', type: QuestionType.MCQ, source: 'Lecture 3',
    question: 'Which semantics approach describes meaning by showing how statements change the state of a machine?',
    options: ['Axiomatic', 'Denotational', 'Operational', 'Static'],
    correctAnswer: 2
  },
  {
    id: 'l3-5', lectureId: 'L3', type: QuestionType.MCQ, source: 'Lecture 3',
    question: 'In BNF, what does the symbol "::=" mean?',
    options: ['Is equal to', 'Is defined as', 'Approximates', 'Points to'],
    correctAnswer: 1
  },
  {
    id: 'l3-6', lectureId: 'L3', type: QuestionType.TF, source: 'Lecture 3',
    question: 'Left recursion in a grammar is problematic for top-down parsers.',
    correctAnswer: true
  },
  {
    id: 'l3-7', lectureId: 'L3', type: QuestionType.MCQ, source: 'Lecture 3',
    question: 'Which form of semantics uses mathematical logic and preconditions/postconditions?',
    options: ['Operational', 'Denotational', 'Axiomatic', 'Structural'],
    correctAnswer: 2
  },
  {
    id: 'l3-8', lectureId: 'L3', type: QuestionType.MCQ, source: 'Lecture 3',
    question: 'A grammar is ambiguous if:',
    options: ['It has too many rules', 'It generates two different parse trees for the same string', 'It contains left recursion', 'It cannot be parsed'],
    correctAnswer: 1
  },

  // --- L5: Names & Binding ---
  {
    id: 'l5-1', lectureId: 'L5', type: QuestionType.MCQ, source: 'Lecture 5',
    question: 'Which of the following is NOT an attribute of a variable?',
    options: ['Name', 'Address', 'Value', 'Compilation Time'],
    correctAnswer: 3
  },
  {
    id: 'l5-2', lectureId: 'L5', type: QuestionType.MCQ, source: 'Lecture 5',
    question: 'When two or more variable names refer to the same memory location, they are called:',
    options: ['Pointers', 'Aliases', 'Constants', 'Globals'],
    correctAnswer: 1
  },
  {
    id: 'l5-3', lectureId: 'L5', type: QuestionType.MCQ, source: 'Lecture 5',
    question: 'Which binding occurs before run time and remains unchanged?',
    options: ['Dynamic Binding', 'Static Binding', 'Late Binding', 'Virtual Binding'],
    correctAnswer: 1
  },
  {
    id: 'l5-4', lectureId: 'L5', type: QuestionType.MCQ, source: 'Lecture 5',
    question: 'A keyword is different from a reserved word because:',
    options: [
      'Keywords can be redefined by the user in some languages, reserved words cannot',
      'Keywords are longer',
      'Reserved words are only for system use',
      'There is no difference'
    ],
    correctAnswer: 0
  },
  {
    id: 'l5-5', lectureId: 'L5', type: QuestionType.MCQ, source: 'Lecture 5',
    question: 'The "lifetime" of a variable is:',
    options: [
      'The time during which the variable is bound to a specific memory location',
      'The scope in which it is visible',
      'The total execution time of the program',
      'The time it takes to compile'
    ],
    correctAnswer: 0
  },
  {
    id: 'l5-6', lectureId: 'L5', type: QuestionType.MCQ, source: 'Lecture 5',
    question: 'Which variables are allocated on the stack?',
    options: ['Static variables', 'Stack-dynamic variables', 'Explicit heap-dynamic variables', 'Implicit heap-dynamic variables'],
    correctAnswer: 1
  },
  {
    id: 'l5-7', lectureId: 'L5', type: QuestionType.TF, source: 'Lecture 5',
    question: 'Explicit heap-dynamic variables are allocated and deallocated by explicit instructions (e.g., new/delete).',
    correctAnswer: true
  },

  // --- L6: Scopes ---
  {
    id: 'l6-1', lectureId: 'L6', type: QuestionType.MCQ, source: 'Lecture 6',
    question: 'In static scoping, the scope of a variable is determined by:',
    options: ['The sequence of function calls', 'The program text/structure', 'The operating system', 'User input'],
    correctAnswer: 1
  },
  {
    id: 'l6-2', lectureId: 'L6', type: QuestionType.MCQ, source: 'Lecture 6',
    question: 'Dynamic scoping is based on:',
    options: ['Spatial relationship of code', 'Calling sequence of subprograms', 'Alphabetical order', 'Compiler settings'],
    correctAnswer: 1
  },
  {
    id: 'l6-3', lectureId: 'L6', type: QuestionType.TF, source: 'Lecture 6',
    question: 'Variables declared outside any function are generally considered global.',
    correctAnswer: true
  },
  {
    id: 'l6-4', lectureId: 'L6', type: QuestionType.MCQ, source: 'Lecture 6',
    question: 'The "Referencing Environment" of a statement is:',
    options: [
      'The collection of all names that are visible in the statement',
      'The list of all global variables',
      'The operating system environment variables',
      'The set of all active subprograms'
    ],
    correctAnswer: 0
  },
  {
    id: 'l6-5', lectureId: 'L6', type: QuestionType.TF, source: 'Lecture 6',
    question: 'A block (enclosed in braces) can create a new static scope in C-based languages.',
    correctAnswer: true
  },
  {
    id: 'l6-6', lectureId: 'L6', type: QuestionType.MCQ, source: 'Lecture 6',
    question: 'What is a disadvantage of dynamic scoping?',
    options: [
      'It makes programs hard to read and reliability is reduced',
      'It is too slow to compile',
      'It uses too much memory',
      'It requires type checking at compile time'
    ],
    correctAnswer: 0
  },

  // --- L7: Expressions ---
  {
    id: 'l7-1', lectureId: 'L7', type: QuestionType.MCQ, source: 'Lecture 7',
    question: 'A narrowing conversion converts a value into a:',
    options: ['Larger type', 'Smaller/less expressive type', 'String', 'Boolean'],
    correctAnswer: 1
  },
  {
    id: 'l7-2', lectureId: 'L7', type: QuestionType.MCQ, source: 'Lecture 7',
    question: 'Short-circuit evaluation means:',
    options: [
      'All operands are evaluated first',
      'The result is determined without evaluating all operands',
      'The expression causes a circuit break',
      'The expression is ignored'
    ],
    correctAnswer: 1
  },
  {
    id: 'l7-3', lectureId: 'L7', type: QuestionType.MCQ, source: 'Lecture 7',
    question: 'Operator overloading allows:',
    options: [
      'An operator to have multiple meanings depending on operand types',
      'An operator to be removed',
      'An operator to run faster',
      'An operator to take infinite arguments'
    ],
    correctAnswer: 0
  },
  {
    id: 'l7-4', lectureId: 'L7', type: QuestionType.TF, source: 'Lecture 7',
    question: 'In functional languages, expressions do not have side effects.',
    correctAnswer: true
  },
  {
    id: 'l7-5', lectureId: 'L7', type: QuestionType.MCQ, source: 'Lecture 7',
    question: 'Which of the following describes a "side effect" in an expression?',
    options: [
      'When a function changes a two-way parameter or a non-local variable',
      'When an expression returns zero',
      'When a variable is declared',
      'When an error occurs'
    ],
    correctAnswer: 0
  },

  // --- L11: Control Structures ---
  {
    id: 'l11-1', lectureId: 'L11', type: QuestionType.MCQ, source: 'Lecture 11',
    question: 'The "Dangling Else" problem arises in which type of statement?',
    options: ['Switch', 'Nested If-Else', 'While Loop', 'For Loop'],
    correctAnswer: 1
  },
  {
    id: 'l11-2', lectureId: 'L11', type: QuestionType.MCQ, source: 'Lecture 11',
    question: 'Which loop checks the condition *after* the body executes?',
    options: ['Pretest Loop', 'Posttest Loop', 'For Loop', 'Counter Loop'],
    correctAnswer: 1
  },
  {
    id: 'l11-3', lectureId: 'L11', type: QuestionType.MCQ, source: 'Lecture 11',
    question: 'Guarded commands were proposed by:',
    options: ['Dijkstra', 'Turing', 'Von Neumann', 'Knuth'],
    correctAnswer: 0
  },
  {
    id: 'l11-4', lectureId: 'L11', type: QuestionType.MCQ, source: 'Lecture 11',
    question: 'What is the primary purpose of a "selector" in a multiple-selection statement (switch/case)?',
    options: [
      'To decide which path to execute based on a value',
      'To loop over a collection',
      'To declare variables',
      'To terminate the program'
    ],
    correctAnswer: 0
  },
  {
    id: 'l11-5', lectureId: 'L11', type: QuestionType.TF, source: 'Lecture 11',
    question: 'In a counter-controlled loop (for loop), the loop variable is typically an integer.',
    correctAnswer: true
  },
  {
    id: 'l11-6', lectureId: 'L11', type: QuestionType.MCQ, source: 'Lecture 11',
    question: 'Which of the following is NOT a design issue for two-way selection statements?',
    options: [
      'What is the form and type of the control expression?',
      'How are then and else clauses specified?',
      'How should the meaning of nested selectors be specified?',
      'How much memory does it consume?'
    ],
    correctAnswer: 3
  },

  // --- L12: Subprograms ---
  {
    id: 'l12-1', lectureId: 'L12', type: QuestionType.MCQ, source: 'Lecture 12',
    question: 'Which parameter passing method copies the value to the formal parameter at call time?',
    options: ['Pass-by-Reference', 'Pass-by-Value', 'Pass-by-Name', 'Pass-by-Result'],
    correctAnswer: 1
  },
  {
    id: 'l12-2', lectureId: 'L12', type: QuestionType.MCQ, source: 'Lecture 12',
    question: 'A coroutine is a subprogram that has multiple:',
    options: ['Parameters', 'Return values', 'Entry points', 'Names'],
    correctAnswer: 2
  },
  {
    id: 'l12-3', lectureId: 'L12', type: QuestionType.MCQ, source: 'Lecture 12',
    question: 'Which local variables retain their values between subprogram calls?',
    options: ['Stack-dynamic', 'Static', 'Heap-dynamic', 'Transient'],
    correctAnswer: 1
  },
  {
    id: 'l12-4', lectureId: 'L12', type: QuestionType.MCQ, source: 'Lecture 12',
    question: 'What is an "Activation Record"?',
    options: [
      'The format/layout of the non-code part of an executing subprogram',
      'A record of all errors',
      'The list of global variables',
      'The source code of the function'
    ],
    correctAnswer: 0
  },
  {
    id: 'l12-5', lectureId: 'L12', type: QuestionType.MCQ, source: 'Lecture 12',
    question: 'Which parameter passing mode is an implementation model for in-out parameters?',
    options: ['Pass-by-Value', 'Pass-by-Result', 'Pass-by-Value-Result', 'Pass-by-Name'],
    correctAnswer: 2
  },
  {
    id: 'l12-6', lectureId: 'L12', type: QuestionType.TF, source: 'Lecture 12',
    question: 'A generic subprogram takes types as parameters.',
    correctAnswer: true
  },
  {
    id: 'l12-7', lectureId: 'L12', type: QuestionType.MCQ, source: 'Lecture 12',
    question: 'Polymorphism in subprograms usually refers to:',
    options: [
      'The ability to take parameters of different types',
      'The ability to run on different OS',
      'The ability to have multiple names',
      'The ability to return multiple values'
    ],
    correctAnswer: 0
  },

  // --- Additional Practice Questions to reach 100+ count ---
  {
    id: 'gen-1', lectureId: 'L5', type: QuestionType.MCQ, source: 'Practice',
    question: 'Which of the following is a mechanism for static binding?',
    options: ['Explicit declaration', 'Assignment statement', 'Input statement', 'Parameter passing'],
    correctAnswer: 0
  },
  {
    id: 'gen-2', lectureId: 'L5', type: QuestionType.MCQ, source: 'Practice',
    question: 'Type inference is an example of:',
    options: ['Implicit declaration', 'Explicit declaration', 'Dynamic scoping', 'Exception handling'],
    correctAnswer: 0
  },
  {
    id: 'gen-3', lectureId: 'L6', type: QuestionType.TF, source: 'Practice',
    question: 'A named constant is a variable that is bound to a value only when it is bound to storage.',
    correctAnswer: true
  },
  {
    id: 'gen-4', lectureId: 'L2', type: QuestionType.MCQ, source: 'Practice',
    question: 'Which language was the first to implement exception handling?',
    options: ['PL/I', 'C', 'Fortran', 'Basic'],
    correctAnswer: 0
  },
  {
    id: 'gen-5', lectureId: 'L7', type: QuestionType.MCQ, source: 'Practice',
    question: 'What is a "mixed-mode" expression?',
    options: ['An expression with operands of different types', 'An expression with both + and -', 'An expression with integers only', 'An expression in two languages'],
    correctAnswer: 0
  },
  {
    id: 'gen-6', lectureId: 'L7', type: QuestionType.TF, source: 'Practice',
    question: 'Coercion is an explicit type conversion.',
    correctAnswer: false,
    explanation: 'Coercion is implicit; Casting is explicit.'
  },
  {
    id: 'gen-7', lectureId: 'L11', type: QuestionType.MCQ, source: 'Practice',
    question: 'An "iterator" is a construct used to:',
    options: ['Traverse the elements of a data structure', 'Repeat a calculation', 'Calculate factorials', 'Define a function'],
    correctAnswer: 0
  },
  {
    id: 'gen-8', lectureId: 'L12', type: QuestionType.MCQ, source: 'Practice',
    question: 'Pass-by-reference simulates parameter passing by transmitting:',
    options: ['An access path (address)', 'The value itself', 'The name of the variable', 'The type of the variable'],
    correctAnswer: 0
  },
  {
    id: 'gen-9', lectureId: 'L3', type: QuestionType.MCQ, source: 'Practice',
    question: 'A syntax analyzer is also known as a:',
    options: ['Parser', 'Lexer', 'Linker', 'Loader'],
    correctAnswer: 0
  },
  {
    id: 'gen-10', lectureId: 'L3', type: QuestionType.MCQ, source: 'Practice',
    question: 'A lexical analyzer matches:',
    options: ['Pattern of characters to form tokens', 'Parse trees to code', 'Types to variables', 'Input to Output'],
    correctAnswer: 0
  },
  {
    id: 'gen-11', lectureId: 'L2', type: QuestionType.MCQ, source: 'Practice',
    question: 'Which language is known for its dominance in systems programming (UNIX)?',
    options: ['C', 'Pascal', 'Ada', 'Lisp'],
    correctAnswer: 0
  },
  {
    id: 'gen-12', lectureId: 'L1', type: QuestionType.TF, source: 'Practice',
    question: 'Aliasing is considered a dangerous feature because it decreases reliability.',
    correctAnswer: true
  },
  {
    id: 'gen-13', lectureId: 'L12', type: QuestionType.MCQ, source: 'Practice',
    question: 'In C++, default parameters must appear:',
    options: ['At the end of the parameter list', 'At the beginning', 'Anywhere', 'In a separate file'],
    correctAnswer: 0
  },
  {
    id: 'gen-14', lectureId: 'L5', type: QuestionType.MCQ, source: 'Practice',
    question: 'Strong typing generally implies that:',
    options: ['Type errors are always detected', 'Variables have long names', 'Only integers are used', 'The language is fast'],
    correctAnswer: 0
  },
  {
    id: 'gen-15', lectureId: 'L6', type: QuestionType.MCQ, source: 'Practice',
    question: 'The scope of a variable in a "let" expression in functional languages is:',
    options: ['Local to the let expression', 'Global', 'Undefined', 'Dynamic'],
    correctAnswer: 0
  },
  {
    id: 'gen-16', lectureId: 'L11', type: QuestionType.MCQ, source: 'Practice',
    question: 'Which is NOT a valid loop mechanism?',
    options: ['Goto-controlled', 'Counter-controlled', 'Logically-controlled', 'User-controlled'],
    correctAnswer: 3
  },
  {
    id: 'gen-17', lectureId: 'L7', type: QuestionType.MCQ, source: 'Practice',
    question: 'What is the precedence of the assignment operator usually?',
    options: ['Very low', 'Very high', 'Same as addition', 'Same as multiplication'],
    correctAnswer: 0
  },
  {
    id: 'gen-18', lectureId: 'L12', type: QuestionType.MCQ, source: 'Practice',
    question: 'Deep binding binds the environment at the time of:',
    options: ['Procedure definition', 'Procedure call', 'Program start', 'Compilation'],
    correctAnswer: 0
  },
  {
    id: 'gen-19', lectureId: 'L12', type: QuestionType.MCQ, source: 'Practice',
    question: 'Shallow binding binds the environment at the time of:',
    options: ['Procedure call', 'Procedure definition', 'Program start', 'Compilation'],
    correctAnswer: 0
  },
  {
    id: 'gen-20', lectureId: 'L5', type: QuestionType.MCQ, source: 'Practice',
    question: 'Which of the following is a union type?',
    options: ['A type that can store different types of values at different times', 'A type that stores multiple values at once', 'A pointer type', 'A generic type'],
    correctAnswer: 0
  }
];