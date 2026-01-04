import { Question, QuestionType } from "../types";

export const questions: Question[] = [
  // --- Remedial Exam 2019-2020 Questions ---
  {
    id: "rem-1",
    lectureId: "exam1",
    type: QuestionType.MCQ,
    source: "Remedial Exam 2019-2020",
    question:
      'What is the main advantage of "call by value-result" parameter passing?',
    options: [
      "It allows the formal parameter to be modified, and the actual parameter is updated with the new value after the subprogram finishes.",
      "It reduces memory usage by passing references to the actual parameters.",
      "It avoids side effects by not modifying any actual parameters.",
      "It guarantees that the actual parameter will not be changed during the subprogram execution.",
    ],
    correctAnswer: 0,
  },
  {
    id: "rem-2",
    lectureId: "exam1",
    type: QuestionType.MCQ,
    source: "Remedial Exam 2019-2020",
    question:
      "Which of the following is a difference between static and dynamic typing?",
    options: [
      "Static typing is determined at runtime, while dynamic typing is determined at compile time.",
      "In static typing, the type of a variable is fixed at compile time, whereas in dynamic typing, the type can change during runtime.",
      "Dynamic typing is more efficient than static typing.",
      "Static typing allows for more polymorphism than dynamic typing.",
    ],
    correctAnswer: 1,
  },
  {
    id: "rem-3",
    lectureId: "exam1",
    type: QuestionType.MCQ,
    source: "Remedial Exam 2019-2020",
    question:
      "Which of the following languages is an example of a language that supports both procedural and object-oriented programming?",
    options: ["JavaScript", "C", "Java", "Ruby"],
    correctAnswer: 1, // Faithful to PDF exam key
  },
  {
    id: "rem-4",
    lectureId: "exam1",
    type: QuestionType.MCQ,
    source: "Remedial Exam 2019-2020",
    question:
      'Which of the following is the primary purpose of the "stack" in subprogram implementation?',
    options: [
      "To store the values of function parameters at runtime",
      "To handle the dynamic memory allocation for recursive function calls",
      "To hold global variables and static data for the program",
      "To store activation records for each subprogram call",
    ],
    correctAnswer: 3,
  },
  {
    id: "rem-5",
    lectureId: "exam1",
    type: QuestionType.MCQ,
    source: "Remedial Exam 2019-2020",
    question:
      'Which of the following is characteristic of a "lazy evaluation" strategy?',
    options: [
      "Expressions are evaluated only when their values are needed during execution.",
      "Expressions are evaluated in a strict left-to-right order.",
      "All expressions are evaluated as soon as they are bound to variables.",
      "Variables are evaluated only if they are modified.",
    ],
    correctAnswer: 0,
  },
  {
    id: "rem-6",
    lectureId: "exam1",
    type: QuestionType.MCQ,
    source: "Remedial Exam 2019-2020",
    question:
      "Which is an advantage of using an interpreted language over a compiled language?",
    options: [
      "Faster execution speed",
      "Easier debugging and portability",
      "More efficient memory usage",
      "Better support for low-level system programming",
    ],
    correctAnswer: 1,
  },
  {
    id: "rem-7",
    lectureId: "exam1",
    type: QuestionType.MCQ,
    source: "Remedial Exam 2019-2020",
    question: 'What does "type equivalence" refer to?',
    options: [
      "The relationship between two types where one can be converted into another.",
      "The ability of a variable to hold values of different types.",
      "Whether two types are considered the same for comparison and assignment.",
      "The rules governing the relationship between variables of the same type.",
    ],
    correctAnswer: 2,
  },
  {
    id: "rem-8",
    lectureId: "exam1",
    type: QuestionType.MCQ,
    source: "Remedial Exam 2019-2020",
    question: "Difference between static and dynamic typing?",
    options: [
      "Static typing is determined at runtime.",
      "Static typing allows for more polymorphism.",
      "Dynamic typing is more efficient.",
      "In static typing, the type of a variable is fixed at compile time; in dynamic, it can change during runtime.",
    ],
    correctAnswer: 3,
  },
  {
    id: "rem-9",
    lectureId: "exam1",
    type: QuestionType.MCQ,
    source: "Remedial Exam 2019-2020",
    question: "Which language feature does garbage collection address?",
    options: [
      "Automatic memory management",
      "Function overloading",
      "Operator overloading",
      "Syntax errors handling",
    ],
    correctAnswer: 0,
  },
  {
    id: "rem-10",
    lectureId: "exam1",
    type: QuestionType.MCQ,
    source: "Remedial Exam 2019-2020",
    question: "Key characteristic of imperative programming languages?",
    options: [
      "Focus on declarative statements",
      "Execution flows are controlled via statements and functions",
      "Use of recursion as a primary construct",
      "Computation is modeled through logical assertions",
    ],
    correctAnswer: 1,
  },
  {
    id: "rem-tf-1",
    lectureId: "exam1",
    type: QuestionType.TF,
    source: "Remedial Exam 2019-2020",
    question: "An abstract method is one that does not include a protocol.",
    correctAnswer: false,
    explanation:
      "An abstract method includes a protocol (definition/signature) but no implementation.",
  },
  {
    id: "rem-tf-2",
    lectureId: "exam1",
    type: QuestionType.TF,
    source: "Remedial Exam 2019-2020",
    question:
      "Names in Java and C# have a length limit, and all characters in them are significant.",
    correctAnswer: false,
    explanation: "They have NO length limit.",
  },
  {
    id: "rem-tf-3",
    lectureId: "exam1",
    type: QuestionType.TF,
    source: "Remedial Exam 2019-2020",
    question:
      "In Logic Programming Languages, to prove a goal is true, one must find a chain of inference rules and/or facts.",
    correctAnswer: true,
  },
  {
    id: "rem-tf-5",
    lectureId: "exam1",
    type: QuestionType.TF,
    source: "Remedial Exam 2019-2020",
    question: "Size of a dynamic array can change during its lifetime.",
    correctAnswer: true,
  },
  {
    id: "rem-tf-6",
    lectureId: "exam1",
    type: QuestionType.TF,
    source: "Remedial Exam 2019-2020",
    question:
      "Java does not allow dangling references at all, since there is no explicit pointer in the language.",
    correctAnswer: true,
  },

  // --- 12th Examination 2024 ---
  {
    id: "exam12-1",
    lectureId: "exam2",
    type: QuestionType.MCQ,
    source: "12th Exam 2024",
    question:
      'In "simple" subprograms implementation, which action is NOT required during return semantics?',
    options: [
      "Move current values of pass-by-value-result parameters",
      "Restore execution status of caller",
      "Transfer control back to caller",
      "Allocate stack-dynamic local variables",
    ],
    correctAnswer: 3,
    explanation: "Allocation happens at the start (call), not return.",
  },
  {
    id: "exam12-2",
    lectureId: "exam2",
    type: QuestionType.MCQ,
    source: "12th Exam 2024",
    question:
      "A subprogram __________ describes the interface to and the actions of the subprogram.",
    options: ["abstraction", "definition", "call", "declaration"],
    correctAnswer: 1,
  },
  {
    id: "exam12-3",
    lectureId: "exam2",
    type: QuestionType.MCQ,
    source: "12th Exam 2024",
    question:
      "In which language are all parameters passed by value, but object parameters are passed by reference?",
    options: ["C", "C++", "Java", "Python"],
    correctAnswer: 2,
  },
  {
    id: "exam12-tf-1",
    lectureId: "exam2",
    type: QuestionType.TF,
    source: "12th Exam 2024",
    question:
      "The function prototype is a subprogram’s parameter profile and, if it is a function, its return type.",
    correctAnswer: false,
  },
  {
    id: "exam12-tf-2",
    lectureId: "exam2",
    type: QuestionType.TF,
    source: "12th Exam 2024",
    question: "Python and Ruby treat methods as first-class objects.",
    correctAnswer: true,
  },
  {
    id: "exam-mix-1",
    lectureId: "exam2",
    type: QuestionType.MCQ,
    source: "12th Exam 2024",
    question:
      "Which binding method uses the environment of the call statement?",
    options: [
      "Deep binding",
      "Shallow binding",
      "Ad hoc binding",
      "Dynamic binding",
    ],
    correctAnswer: 1,
  },
  {
    id: "exam-mix-2",
    lectureId: "exam2",
    type: QuestionType.MCQ,
    source: "12th Exam 2024",
    question:
      "Which implementation of dynamic scoping involves searching activation records on the dynamic chain?",
    options: [
      "Shallow Access",
      "Deep Access",
      "Ad hoc Access",
      "Displays Access",
    ],
    correctAnswer: 1,
  },
  {
    id: "exam-mix-3",
    lectureId: "exam2",
    type: QuestionType.MCQ,
    source: "12th Exam 2024",
    question: "What is a closure?",
    options: [
      "A subprogram along with its referencing environment",
      "An overloaded subprogram",
      "A coroutine",
      "A function pointer",
    ],
    correctAnswer: 0,
  },

  // --- L1: Introduction ---
  {
    id: "l1-1",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "Which of the following is NOT a reason to study programming language concepts?",
    options: [
      "Increased capacity to express ideas",
      "Improved background for choosing appropriate languages",
      "To design hardware circuits",
      "Better understanding of implementation significance",
    ],
    correctAnswer: 2,
    explanation:
      "According to the slides, reasons to study PL concepts include: increased capacity to express ideas, improved background for choosing appropriate languages, increased ability to learn new languages, better understanding of implementation significance, better use of known languages, and overall advancement of computing. Hardware circuit design is NOT a reason listed.",
  },
  {
    id: "l1-2",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "The first language for scientific applications was:",
    options: ["COBOL", "Fortran", "Lisp", "Ada"],
    correctAnswer: 1,
    explanation:
      "Fortran (FORmula TRANslation) was the first high-level programming language, developed in the 1950s specifically for scientific applications involving large floating-point arithmetic computations.",
  },
  {
    id: "l1-3",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "Which domain is characterized by symbolic rather than numeric computations?",
    options: [
      "Scientific",
      "Business",
      "Artificial Intelligence",
      "Systems Programming",
    ],
    correctAnswer: 2,
    explanation:
      "According to the slides, Artificial Intelligence is characterized by the use of symbolic rather than numeric computations; use of linked lists; flexibility (ability to create code and execute on the fly). LISP was the first widely used AI programming language.",
  },
  {
    id: "l1-4",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "Which criterion refers to the ease with which a program can be read and understood?",
    options: ["Readability", "Writability", "Reliability", "Cost"],
    correctAnswer: 0,
    explanation:
      "Readability is defined as the ease with which programs can be read and understood. It must be considered in the context of the problem domain. The slides state that readability is the most important criterion for judging a programming language.",
  },
  {
    id: "l1-5",
    lectureId: "L1",
    type: QuestionType.TF,
    source: "Lecture 1",
    question:
      "Orthogonality allows a relatively small set of primitive constructs to be combined in a relatively small number of ways to build the control and data structures.",
    correctAnswer: true,
    explanation:
      "This is the definition from the slides: Orthogonality means a relatively small set of primitive constructs can be combined in a relatively small number of ways to build the control and data structures of the language. Every possible combination is legal.",
  },
  {
    id: "l1-6",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "The Von Neumann architecture uses which cycle?",
    options: [
      "Fetch-Decode-Execute",
      "Read-Write-Modify",
      "Compile-Link-Load",
      "Input-Process-Output",
    ],
    correctAnswer: 0,
    explanation:
      "The Von Neumann architecture operates on the Fetch-Decode-Execute cycle: fetch an instruction, decode it, and then execute it. This is the fundamental operation cycle of Von Neumann computers.",
  },
  {
    id: "l1-7",
    lectureId: "L1",
    type: QuestionType.TF,
    source: "Lecture 1",
    question:
      "Pure interpretation generally leads to faster execution speeds than compilation.",
    correctAnswer: false,
    explanation:
      "FALSE. Pure interpretation is 10-100 times SLOWER than compiled programs because statements are decoded every time they are executed. Compilation translates source code to machine code once, resulting in faster execution.",
  },
  {
    id: "l1-8",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "JIT (Just-In-Time) systems are an example of:",
    options: [
      "Pure Compilation",
      "Pure Interpretation",
      "Hybrid Implementation Systems",
      "Hardware Emulation",
    ],
    correctAnswer: 2,
    explanation:
      "JIT (Just-In-Time) compilation is a hybrid implementation system. It compiles intermediate language (like Java bytecode) into machine code at runtime, combining benefits of both interpretation (portability) and compilation (speed).",
  },
  {
    id: "l1-9",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "Which of the following is a benefit of studying programming language concepts?",
    options: [
      "Increased ability to learn new languages",
      "Decreased programming speed",
      "Reduced code readability",
      "Limited language choice",
    ],
    correctAnswer: 0,
    explanation:
      "The slides list 'Increased ability to learn new languages' as one of the key reasons to study programming language concepts. Understanding fundamental concepts makes learning new languages easier.",
  },
  {
    id: "l1-10",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "What was the primary focus of early programming languages in the 1940s and 1950s?",
    options: [
      "Business applications",
      "Scientific applications",
      "Web development",
      "Mobile applications",
    ],
    correctAnswer: 1,
    explanation:
      "According to the slides, scientific applications were the primary focus in the late 1940s and early 1950s, characterized by simple data structures but large numbers of floating-point arithmetic computations.",
  },
  {
    id: "l1-11",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "Which language was designed for business data processing?",
    options: ["Fortran", "Lisp", "COBOL", "C"],
    correctAnswer: 2,
    explanation:
      "COBOL (COmmon Business-Oriented Language) was specifically designed for business applications. Business applications are characterized by facilities for producing elaborate reports, precise ways of describing and storing decimal numbers and character data.",
  },
  {
    id: "l1-12",
    lectureId: "L1",
    type: QuestionType.TF,
    source: "Lecture 1",
    question:
      "Before 1970, software development was largely thought of in terms of writing code from the computer's perspective rather than the programmer's perspective.",
    correctAnswer: true,
    explanation:
      "TRUE. The slides state that before 1970, software development was largely thought of in terms of writing code, focusing on the computer's perspective. After 1970, the focus shifted to software development methodology and the programmer's perspective.",
  },
  {
    id: "l1-13",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "Readability must be considered in the context of:",
    options: [
      "The hardware being used",
      "The problem domain",
      "The programmer's age",
      "The company size",
    ],
    correctAnswer: 1,
    explanation:
      "According to the slides: 'Readability must be considered in the context of the problem domain.' A language suitable for one domain may not be readable in another context.",
  },
  {
    id: "l1-14",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "What does writability refer to in language evaluation?",
    options: [
      "The ease with which a language can be used to create programs",
      "The speed of program execution",
      "The size of compiled code",
      "The cost of the compiler",
    ],
    correctAnswer: 0,
    explanation:
      "Writability is defined as the ease with which a language can be used to create programs for a chosen problem domain. It is a measure of how easily a language can be used to create programs.",
  },
  {
    id: "l1-15",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "Which of the following is a characteristic of systems programming languages?",
    options: [
      "Focus on symbolic computation",
      "Need for efficiency due to continuous use",
      "English-like syntax",
      "Large floating-point computations",
    ],
    correctAnswer: 1,
    explanation:
      "Systems programming languages (like C for UNIX) need efficiency because of continuous use. They are used for operating systems and other system-level software where performance is critical.",
  },
  {
    id: "l1-16",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "The depth at which people can think is influenced by:",
    options: [
      "The expressive power of the language",
      "The speed of the computer",
      "The size of memory",
      "The number of programmers",
    ],
    correctAnswer: 0,
    explanation:
      "The slides quote: 'The depth at which people can think is influenced by the expressive power of the language in which they communicate their thoughts.' This applies to programming languages as well.",
  },
  {
    id: "l1-17",
    lectureId: "L1",
    type: QuestionType.TF,
    source: "Lecture 1",
    question:
      "Orthogonality in a programming language means having many primitive constructs that can only be combined in specific ways.",
    correctAnswer: false,
    explanation:
      "FALSE. Orthogonality means a RELATIVELY SMALL set of primitive constructs can be combined in a RELATIVELY SMALL NUMBER of ways. Every possible combination is legal. The statement describes the opposite of orthogonality.",
  },
  {
    id: "l1-18",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "What characterizes artificial intelligence programming domains?",
    options: [
      "Numeric computations",
      "Symbolic rather than numeric computations",
      "Record processing",
      "System control",
    ],
    correctAnswer: 1,
    explanation:
      "AI programming is characterized by: (1) Use of symbolic rather than numeric computations, (2) Use of linked lists (rather than arrays), (3) Flexibility - ability to create code and execute on the fly.",
  },
  {
    id: "l1-19",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "UNIX's C language was developed for which domain?",
    options: [
      "Scientific",
      "Business",
      "Systems Programming",
      "Artificial Intelligence",
    ],
    correctAnswer: 2,
    explanation:
      "C was developed for systems programming, specifically for the UNIX operating system. Systems programming requires efficiency because of continuous use in OS and utility software.",
  },
  {
    id: "l1-20",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "Which language was the first widely used for AI applications?",
    options: ["Fortran", "Lisp", "COBOL", "Pascal"],
    correctAnswer: 1,
    explanation:
      "LISP (LISt Processing) was the first widely used AI programming language. It was designed for symbolic rather than numeric computations and uses linked lists as its primary data structure.",
  },
  {
    id: "l1-21",
    lectureId: "L1",
    type: QuestionType.TF,
    source: "Lecture 1",
    question:
      "Reliability in a programming language refers to the program performing to its specifications under all conditions.",
    correctAnswer: true,
    explanation:
      "TRUE. The slides define Reliability as: 'A program is said to be reliable if it performs to its specifications under all conditions.' Type checking, exception handling, and aliasing affect reliability.",
  },
  {
    id: "l1-22",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "What is one reason programmers should understand implementation details?",
    options: [
      "To write slower programs",
      "To find and fix certain kinds of bugs",
      "To avoid using the language",
      "To increase compilation time",
    ],
    correctAnswer: 1,
    explanation:
      "Understanding implementation details helps programmers understand why a language feature was designed the way it was, and find and fix certain kinds of bugs that arise from implementation issues.",
  },
  {
    id: "l1-23",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "Web software functionality can be provided by embedding programming code in HTML, often in the form of:",
    options: [
      "Machine language",
      "Assembly language",
      "Scripting languages like JavaScript or PHP",
      "Binary code",
    ],
    correctAnswer: 2,
    explanation:
      "Web software uses scripting languages like JavaScript (client-side) and PHP (server-side) embedded in HTML documents. The slides mention JavaScript and PHP as common web programming languages.",
  },
  {
    id: "l1-24",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "Which of the following is NOT a programming domain discussed in Lecture 1?",
    options: [
      "Scientific Applications",
      "Business Applications",
      "Gaming Applications",
      "Systems Programming",
    ],
    correctAnswer: 2,
    explanation:
      "The slides discuss: Scientific Applications, Business Applications, Artificial Intelligence, Systems Programming, and Web Software. Gaming Applications is NOT listed as a separate programming domain in the lecture.",
  },
  {
    id: "l1-25",
    lectureId: "L1",
    type: QuestionType.TF,
    source: "Lecture 1",
    question:
      "Cost is one of the language evaluation criteria that includes training programmers and maintaining programs.",
    correctAnswer: true,
    explanation:
      "TRUE. The slides list Cost as an evaluation criterion including: training programmers to use the language, writing programs, compiling programs, executing programs, language implementation system (cost of free compilers?), reliability (cost of poor reliability), and maintaining programs.",
  },
  {
    id: "l1-26",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "Business applications in the 1950s were characterized by facilities for:",
    options: [
      "Matrix operations",
      "Producing elaborate reports",
      "Recursive functions",
      "Pointer manipulation",
    ],
    correctAnswer: 1,
    explanation:
      "According to the slides, business applications are characterized by: facilities for producing elaborate reports, precise ways of describing and storing decimal numbers and character data. COBOL was designed for these needs.",
  },
  {
    id: "l1-27",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "Better understanding of language features leads to:",
    options: [
      "Slower program execution",
      "Better use of languages already known",
      "More compilation errors",
      "Reduced code functionality",
    ],
    correctAnswer: 1,
    explanation:
      "The slides state that studying programming language concepts leads to 'Better use of languages that are already known' - you can utilize features more effectively when you understand the underlying concepts.",
  },
  {
    id: "l1-28",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "What is the primary characteristic of scientific applications from the 1940s-1950s?",
    options: [
      "Complex data structures",
      "Large numbers of floating-point arithmetic computations",
      "String processing",
      "Object-oriented design",
    ],
    correctAnswer: 1,
    explanation:
      "The slides state that scientific applications in the late 1940s and 1950s were characterized by 'simple data structures but large numbers of floating-point arithmetic computations.' Fortran was designed for this purpose.",
  },
  {
    id: "l1-29",
    lectureId: "L1",
    type: QuestionType.TF,
    source: "Lecture 1",
    question:
      "Programming languages for business applications are characterized by precise ways of describing decimal numbers and character data.",
    correctAnswer: true,
    explanation:
      "TRUE. The slides state business applications require 'precise ways of describing and storing decimal numbers and character data' - essential for financial calculations and report generation.",
  },
  {
    id: "l1-30",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question: "The overall advancement of computing benefits from:",
    options: [
      "Using only one programming language",
      "Well-informed language selection",
      "Avoiding new languages",
      "Using the oldest languages available",
    ],
    correctAnswer: 1,
    explanation:
      "The slides list 'Overall advancement of computing' as a reason to study PL concepts, achieved through well-informed language selection. Choosing the right language for the task advances the field.",
  },
  {
    id: "l1-31",
    lectureId: "L1",
    type: QuestionType.MCQ,
    source: "Lecture 1",
    question:
      "What did digital computers in the late 1940s and early 1950s primarily use?",
    options: [
      "Web applications",
      "Scientific applications",
      "Mobile apps",
      "Social media",
    ],
    correctAnswer: 1,
    explanation:
      "Digital computers in the late 1940s and early 1950s were used primarily for scientific applications, involving floating-point arithmetic computations with simple data structures.",
  },
  {
    id: "l1-32",
    lectureId: "L1",
    type: QuestionType.TF,
    source: "Lecture 1",
    question: "RPG is an example of a business-oriented programming language.",
    correctAnswer: true,
    explanation:
      "TRUE. RPG (Report Program Generator) is listed in the slides as an example of a business-oriented programming language, alongside COBOL.",
  },

  // --- L2: History ---
  {
    id: "l2-1",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Which architecture are most imperative languages based on?",
    options: ["Harvard", "Von Neumann", "Dataflow", "Neural"],
    correctAnswer: 1,
    explanation:
      "Most imperative languages are based on the Von Neumann architecture, which features memory storing both instructions and data, a CPU with ALU and control unit, and the fetch-decode-execute cycle.",
  },
  {
    id: "l2-2",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question:
      'Which language introduced the concept of "Write once, run anywhere"?',
    options: ["C++", "Ada", "Java", "Smalltalk"],
    correctAnswer: 2,
    explanation:
      "Java introduced 'Write once, run anywhere' (WORA) through its bytecode compilation and JVM execution model. Java programs compile to platform-independent bytecode that runs on any system with a JVM.",
  },
  {
    id: "l2-3",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question:
      "Which language is considered the ancestor of most modern structured languages?",
    options: ["Fortran", "ALGOL", "COBOL", "Lisp"],
    correctAnswer: 1,
    explanation:
      "ALGOL (ALGOrithmic Language) is considered the ancestor of most modern structured languages. It introduced block structure, nested scopes, and was the first language to use BNF for syntax description.",
  },
  {
    id: "l2-4",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question:
      "Which language was the first to fully support Object-Oriented Programming (OOP)?",
    options: ["Simula 67", "Smalltalk", "C++", "Java"],
    correctAnswer: 1,
    explanation:
      "Smalltalk (developed by Alan Kay) was the first language to FULLY support OOP. While Simula 67 introduced classes, Smalltalk made everything an object and fully embraced OOP principles.",
  },
  {
    id: "l2-5",
    lectureId: "L2",
    type: QuestionType.TF,
    source: "Lecture 2",
    question:
      "LISP is a purely imperative language designed for business applications.",
    correctAnswer: false,
    explanation:
      "FALSE. LISP (LISt Processing) is a FUNCTIONAL programming language designed for ARTIFICIAL INTELLIGENCE, not business applications. It uses symbolic computation and linked lists, not imperative programming.",
  },
  {
    id: "l2-6",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "The first high-level language, Plankalkul, was designed by:",
    options: ["Konrad Zuse", "Grace Hopper", "John Backus", "Alan Turing"],
    correctAnswer: 0,
    explanation:
      "Plankalkül was designed by Konrad Zuse in the 1940s. It was the first high-level programming language, though it was never implemented during Zuse's lifetime.",
  },
  {
    id: "l2-7",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "COBOL was primarily designed for:",
    options: [
      "Scientific Computing",
      "System Administration",
      "Business Applications",
      "Artificial Intelligence",
    ],
    correctAnswer: 2,
    explanation:
      "COBOL (COmmon Business-Oriented Language) was designed in 1960 specifically for business data processing applications. It features English-like syntax and excellent file handling capabilities.",
  },
  {
    id: "l2-8",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Who developed Fortran?",
    options: [
      "John McCarthy",
      "John Backus",
      "Dennis Ritchie",
      "Niklaus Wirth",
    ],
    correctAnswer: 1,
    explanation:
      "Fortran was developed by John Backus at IBM. It was the first widely used high-level programming language (1957). John McCarthy created LISP, Dennis Ritchie created C, and Niklaus Wirth created Pascal.",
  },
  {
    id: "l2-9",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "What year was Fortran created?",
    options: ["1950", "1957", "1960", "1972"],
    correctAnswer: 1,
    explanation:
      "Fortran was created in 1957 by John Backus at IBM. It was the first widely-used high-level programming language for scientific computing.",
  },
  {
    id: "l2-10",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Lisp was created by:",
    options: [
      "John Backus",
      "John McCarthy",
      "Dennis Ritchie",
      "Bjarne Stroustrup",
    ],
    correctAnswer: 1,
    explanation:
      "LISP was created by John McCarthy in 1958 at MIT. It was designed for artificial intelligence research and is based on mathematical functions and linked lists.",
  },
  {
    id: "l2-11",
    lectureId: "L2",
    type: QuestionType.TF,
    source: "Lecture 2",
    question:
      "ALGOL is considered the ancestor of most modern structured languages.",
    correctAnswer: true,
    explanation:
      "TRUE. ALGOL (ALGOrithmic Language) introduced block structure, nested scopes, and formal syntax description (BNF). It influenced Pascal, C, Ada, and many other modern languages.",
  },
  {
    id: "l2-12",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "What key feature did ALGOL introduce?",
    options: [
      "Pointers",
      "Block structure and nested scopes",
      "Object-oriented programming",
      "Garbage collection",
    ],
    correctAnswer: 1,
    explanation:
      "ALGOL introduced block structure and nested scopes, allowing variables to be declared within blocks with local scope. This was revolutionary for structured programming.",
  },
  {
    id: "l2-13",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "COBOL was designed in which year?",
    options: ["1957", "1958", "1960", "1972"],
    correctAnswer: 2,
    explanation:
      "COBOL was designed in 1960 by a committee (CODASYL). Key dates: Fortran (1957), LISP (1958), COBOL (1960), C (1972).",
  },
  {
    id: "l2-14",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question:
      "Which language was based on mathematical functions and linked lists?",
    options: ["Fortran", "COBOL", "Lisp", "Pascal"],
    correctAnswer: 2,
    explanation:
      "LISP is based on mathematical functions (lambda calculus) and linked lists as its primary data structure. The name stands for LISt Processing.",
  },
  {
    id: "l2-15",
    lectureId: "L2",
    type: QuestionType.TF,
    source: "Lecture 2",
    question:
      "Machine language programs were hardware dependent and very difficult to write.",
    correctAnswer: true,
    explanation:
      "TRUE. Machine language consists of binary codes specific to each processor, making programs hardware-dependent and extremely difficult to write, read, and maintain.",
  },
  {
    id: "l2-16",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Pascal was designed by:",
    options: [
      "Dennis Ritchie",
      "Niklaus Wirth",
      "John Backus",
      "Bjarne Stroustrup",
    ],
    correctAnswer: 1,
    explanation:
      "Pascal was designed by Niklaus Wirth in 1970 for teaching structured programming. Dennis Ritchie created C, John Backus created Fortran, and Bjarne Stroustrup created C++.",
  },
  {
    id: "l2-17",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "C language was developed at:",
    options: ["IBM", "MIT", "Bell Labs", "Sun Microsystems"],
    correctAnswer: 2,
    explanation:
      "C was developed at Bell Labs by Dennis Ritchie in 1972. Bell Labs (AT&T) was also where UNIX was developed.",
  },
  {
    id: "l2-18",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Who created the C programming language?",
    options: [
      "Brian Kernighan",
      "Dennis Ritchie",
      "Ken Thompson",
      "Niklaus Wirth",
    ],
    correctAnswer: 1,
    explanation:
      "Dennis Ritchie created C at Bell Labs in 1972. Brian Kernighan co-authored 'The C Programming Language' book with Ritchie. Ken Thompson created B (C's predecessor).",
  },
  {
    id: "l2-19",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "What year was C language created?",
    options: ["1960", "1970", "1972", "1983"],
    correctAnswer: 2,
    explanation:
      "C was created in 1972 at Bell Labs. Timeline: COBOL (1960), Pascal (1970), C (1972), C++ (1983).",
  },
  {
    id: "l2-20",
    lectureId: "L2",
    type: QuestionType.TF,
    source: "Lecture 2",
    question: "C language was used to write Unix operating system.",
    correctAnswer: true,
    explanation:
      "TRUE. C was specifically designed for systems programming and was used to rewrite the UNIX operating system, making UNIX portable across different hardware platforms.",
  },
  {
    id: "l2-21",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Ada was designed for:",
    options: [
      "Business applications",
      "Large-scale reliable systems",
      "Web development",
      "Mobile applications",
    ],
    correctAnswer: 1,
    explanation:
      "Ada was designed for large-scale, safety-critical, reliable systems. It was sponsored by the US Department of Defense for embedded systems in military applications.",
  },
  {
    id: "l2-22",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Which organization sponsored the development of Ada?",
    options: ["IBM", "MIT", "US Department of Defense", "Sun Microsystems"],
    correctAnswer: 2,
    explanation:
      "The US Department of Defense (DoD) sponsored Ada development to standardize programming for its embedded systems. The language is named after Ada Lovelace.",
  },
  {
    id: "l2-23",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Ada was created in which year?",
    options: ["1970", "1972", "1980", "1983"],
    correctAnswer: 3,
    explanation:
      "Ada was standardized in 1983 (Ada 83). It was designed by Jean Ichbiah's team after winning a DoD competition.",
  },
  {
    id: "l2-24",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Smalltalk demonstrated which programming paradigm?",
    options: ["Procedural", "Functional", "Pure Object-Oriented", "Logic"],
    correctAnswer: 2,
    explanation:
      "Smalltalk demonstrated pure Object-Oriented Programming where EVERYTHING is an object, including numbers and classes. It was developed by Alan Kay at Xerox PARC.",
  },
  {
    id: "l2-25",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "C++ was created in which year?",
    options: ["1972", "1980", "1983", "1995"],
    correctAnswer: 2,
    explanation:
      "C++ was created by Bjarne Stroustrup in 1983 as 'C with Classes'. It added object-oriented features to C including classes, inheritance, and polymorphism.",
  },
  {
    id: "l2-26",
    lectureId: "L2",
    type: QuestionType.TF,
    source: "Lecture 2",
    question:
      "C++ is an extension of C that added object-oriented programming features.",
    correctAnswer: true,
    explanation:
      "TRUE. C++ was designed as 'C with Classes' by Bjarne Stroustrup, adding OOP features (classes, inheritance, polymorphism, encapsulation) while maintaining backward compatibility with C.",
  },
  {
    id: "l2-27",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Java was created by:",
    options: ["Microsoft", "IBM", "Sun Microsystems", "Bell Labs"],
    correctAnswer: 2,
    explanation:
      "Java was created by Sun Microsystems (James Gosling) in 1995. It was later acquired by Oracle. Microsoft created C#, IBM contributed to many languages, Bell Labs created C.",
  },
  {
    id: "l2-28",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "What key feature did Java introduce?",
    options: [
      "Pointers",
      "JVM portability and automatic garbage collection",
      "Multiple inheritance",
      "Assembly integration",
    ],
    correctAnswer: 1,
    explanation:
      "Java's key features include JVM portability ('write once, run anywhere') and automatic garbage collection. Java deliberately avoided pointers and multiple inheritance for safety.",
  },
  {
    id: "l2-29",
    lectureId: "L2",
    type: QuestionType.TF,
    source: "Lecture 2",
    question:
      "Before the 1970s, programs commonly used goto statements making them messy and unstructured.",
    correctAnswer: true,
    explanation:
      "TRUE. Before structured programming (1970s), goto statements were common, creating 'spaghetti code' that was difficult to read and maintain. Dijkstra's 'Go To Statement Considered Harmful' paper advocated for structured programming.",
  },
  {
    id: "l2-30",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Structured programming emerged in which era?",
    options: ["1940s-1950s", "1950s-1960s", "1970s-1980s", "1990s-2000s"],
    correctAnswer: 2,
    explanation:
      "Structured programming emerged in the 1970s-1980s, advocating for control structures (if-then-else, loops) instead of goto statements. This era saw languages like Pascal and C.",
  },
  {
    id: "l2-31",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Pascal was designed in which year?",
    options: ["1960", "1970", "1972", "1983"],
    correctAnswer: 1,
    explanation:
      "Pascal was designed in 1970 by Niklaus Wirth. It was created specifically for teaching structured programming and good programming practices.",
  },
  {
    id: "l2-32",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "What was Pascal primarily used for?",
    options: [
      "Systems programming",
      "Teaching structured programming",
      "Web development",
      "Database management",
    ],
    correctAnswer: 1,
    explanation:
      "Pascal was primarily designed for teaching structured programming and good programming practices. It emphasized clear, readable code and proper program structure.",
  },
  {
    id: "l2-33",
    lectureId: "L2",
    type: QuestionType.TF,
    source: "Lecture 2",
    question:
      "Lisp uses recursion instead of loops as its primary control structure.",
    correctAnswer: true,
    explanation:
      "TRUE. LISP is a functional language that relies heavily on recursion rather than iterative loops. Functions call themselves to process lists and perform computations.",
  },
  {
    id: "l2-34",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question:
      "Which language introduced classes, inheritance, and polymorphism to C?",
    options: ["Java", "C#", "C++", "Objective-C"],
    correctAnswer: 2,
    explanation:
      "C++ (originally 'C with Classes') introduced OOP features to C including classes, inheritance, and polymorphism. Created by Bjarne Stroustrup in 1983.",
  },
  {
    id: "l2-35",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "Assembly language used symbolic names for:",
    options: [
      "Variables",
      "Instructions",
      "Memory addresses",
      "All of the above",
    ],
    correctAnswer: 1,
    explanation:
      "Assembly language used symbolic names (mnemonics) for machine instructions (like ADD, MOV, JMP) instead of binary codes. This made programming easier than machine language.",
  },
  {
    id: "l2-36",
    lectureId: "L2",
    type: QuestionType.TF,
    source: "Lecture 2",
    question:
      "COBOL is known for its English-like syntax designed for business readability.",
    correctAnswer: true,
    explanation:
      "TRUE. COBOL was designed with English-like syntax (PERFORM, MOVE, ADD) to be readable by business managers, not just programmers. This was a key design goal.",
  },
  {
    id: "l2-37",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "What does Fortran stand for?",
    options: [
      "Formula Translation",
      "Forward Transfer",
      "Formal Transition",
      "Function Transport",
    ],
    correctAnswer: 0,
    explanation:
      "Fortran stands for FORmula TRANslation. It was designed to translate mathematical formulas into machine code for scientific computing.",
  },
  {
    id: "l2-38",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Lecture 2",
    question: "The machine and assembly language era was during:",
    options: ["1930s-1940s", "1940s-1950s", "1950s-1960s", "1960s-1970s"],
    correctAnswer: 1,
    explanation:
      "The machine and assembly language era was during the 1940s-1950s, before high-level languages like Fortran (1957) emerged.",
  },

  // --- L3: Syntax & Semantics ---
  {
    id: "l3-1",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "What does a compiler check first?",
    options: ["Semantics", "Syntax", "Logic", "Runtime errors"],
    correctAnswer: 1,
    explanation:
      "A compiler checks syntax first through lexical and syntactic analysis. Only after verifying the program is syntactically correct does it proceed to semantic analysis.",
  },
  {
    id: "l3-2",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "Which notation is commonly used to describe syntax?",
    options: ["UML", "BNF", "XML", "JSON"],
    correctAnswer: 1,
    explanation:
      "BNF (Backus-Naur Form) is the most widely used formal notation for describing programming language syntax. It provides a concise and unambiguous way to define grammar rules.",
  },
  {
    id: "l3-3",
    lectureId: "L3",
    type: QuestionType.TF,
    source: "Lecture 3",
    question:
      "Ambiguity in a grammar allows a single sentence to have two or more distinct parse trees.",
    correctAnswer: true,
    explanation:
      "TRUE. A grammar is ambiguous if a sentence can have multiple distinct parse trees. This is problematic because different parse trees may lead to different semantic interpretations.",
  },
  {
    id: "l3-4",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question:
      "Which semantics approach describes meaning by showing how statements change the state of a machine?",
    options: ["Axiomatic", "Denotational", "Operational", "Static"],
    correctAnswer: 2,
    explanation:
      "Operational semantics describes meaning by simulating execution on an idealized machine, showing how program statements change the machine state step by step.",
  },
  {
    id: "l3-5",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: 'In BNF, what does the symbol "::=" mean?',
    options: ["Is equal to", "Is defined as", "Approximates", "Points to"],
    correctAnswer: 1,
    explanation:
      "In BNF notation, '::=' means 'is defined as'. It separates the non-terminal being defined (left side) from its definition (right side).",
  },
  {
    id: "l3-6",
    lectureId: "L3",
    type: QuestionType.TF,
    source: "Lecture 3",
    question:
      "Left recursion in a grammar is problematic for top-down parsers.",
    correctAnswer: true,
    explanation:
      "TRUE. Left recursion (e.g., A → Aα) causes infinite loops in top-down parsers because they keep trying to expand the same non-terminal without consuming input. The grammar must be rewritten to remove left recursion.",
  },
  {
    id: "l3-7",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question:
      "Which form of semantics uses mathematical logic and preconditions/postconditions?",
    options: ["Operational", "Denotational", "Axiomatic", "Structural"],
    correctAnswer: 2,
    explanation:
      "Axiomatic semantics uses mathematical logic with preconditions and postconditions (assertions) to prove program correctness. It's based on Hoare logic: {P}S{Q} where P is precondition, S is statement, Q is postcondition.",
  },
  {
    id: "l3-8",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "A grammar is ambiguous if:",
    options: [
      "It has too many rules",
      "It generates two different parse trees for the same string",
      "It contains left recursion",
      "It cannot be parsed",
    ],
    correctAnswer: 1,
    explanation:
      "A grammar is ambiguous when a single sentence can be derived in multiple ways, producing different parse trees. This is problematic because different trees may yield different meanings.",
  },
  {
    id: "l3-9",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "What is the difference between syntax and semantics?",
    options: [
      "Syntax is the structure, semantics is the meaning",
      "Syntax is the meaning, semantics is the structure",
      "They are the same thing",
      "Syntax is for compilers, semantics is for interpreters",
    ],
    correctAnswer: 0,
    explanation:
      "Syntax deals with the form/structure of expressions and statements (how they look), while semantics deals with the meaning of those expressions and statements (what they do).",
  },
  {
    id: "l3-10",
    lectureId: "L3",
    type: QuestionType.TF,
    source: "Lecture 3",
    question: "A lexeme is the smallest meaningful unit in a program.",
    correctAnswer: true,
    explanation:
      "TRUE. A lexeme is the lowest-level syntactic unit, such as identifiers (sum, index), operators (+, -), keywords (if, while), and literals (42, 'hello').",
  },
  {
    id: "l3-11",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "Which of the following is a lexeme?",
    options: ["sum", "+", "5", "All of the above"],
    correctAnswer: 3,
    explanation:
      "All are lexemes: 'sum' is an identifier lexeme, '+' is an operator lexeme, and '5' is a literal lexeme. Lexemes are the actual character sequences in source code.",
  },
  {
    id: "l3-12",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "Lexical analysis converts source code into:",
    options: [
      "Parse trees",
      "Stream of tokens",
      "Machine code",
      "Assembly code",
    ],
    correctAnswer: 1,
    explanation:
      "Lexical analysis (scanning) reads source code and produces a stream of tokens. Each token represents a lexeme with its category (e.g., identifier, keyword, operator).",
  },
  {
    id: "l3-13",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "A grammar consists of how many components (tuple)?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    explanation:
      "A grammar is a 4-tuple G = (V, T, S, P) where V = variables (non-terminals), T = terminals, S = start symbol, and P = production rules.",
  },
  {
    id: "l3-14",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "In a grammar tuple (V, T, S, P), what does S represent?",
    options: [
      "Set of symbols",
      "Start symbol",
      "Syntax rules",
      "Semantic rules",
    ],
    correctAnswer: 1,
    explanation:
      "S is the start symbol (or goal symbol) in the grammar. It's a special non-terminal from which all valid strings in the language can be derived.",
  },
  {
    id: "l3-15",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "What does P represent in a grammar tuple?",
    options: ["Parameters", "Productions (rules)", "Programs", "Parsers"],
    correctAnswer: 1,
    explanation:
      "P represents the production rules (or productions). Each rule defines how a non-terminal can be replaced by a sequence of terminals and/or non-terminals.",
  },
  {
    id: "l3-16",
    lectureId: "L3",
    type: QuestionType.TF,
    source: "Lecture 3",
    question:
      "Terminal symbols are the actual symbols that appear in the language.",
    correctAnswer: true,
    explanation:
      "TRUE. Terminals are the actual symbols (tokens) that appear in the final program text - like keywords, operators, identifiers. Non-terminals are abstract categories used in grammar rules.",
  },
  {
    id: "l3-17",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "What is a derivation in formal grammars?",
    options: [
      "A sequence of rule applications showing how a sentence is generated",
      "A type of parser",
      "A compilation error",
      "A semantic analysis",
    ],
    correctAnswer: 0,
    explanation:
      "A derivation is a sequence of production rule applications that transforms the start symbol into a sentence. Each step replaces one non-terminal with its production's right-hand side.",
  },
  {
    id: "l3-18",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "BNF stands for:",
    options: [
      "Binary Normal Form",
      "Backus-Naur Form",
      "Basic Notation Format",
      "Binary Notation Form",
    ],
    correctAnswer: 1,
    explanation:
      "BNF stands for Backus-Naur Form, named after John Backus and Peter Naur who developed it. It was first used to describe ALGOL 60 syntax.",
  },
  {
    id: "l3-19",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "In BNF, non-terminals are typically enclosed in:",
    options: [
      "Parentheses ()",
      "Angle brackets <>",
      "Square brackets []",
      "Curly braces {}",
    ],
    correctAnswer: 1,
    explanation:
      "In BNF notation, non-terminals (syntactic categories) are enclosed in angle brackets, e.g., <expression>, <statement>, <identifier>.",
  },
  {
    id: "l3-20",
    lectureId: "L3",
    type: QuestionType.TF,
    source: "Lecture 3",
    question:
      "Context-free grammars (CFG) are used to define syntactic structure.",
    correctAnswer: true,
    explanation:
      "TRUE. Context-free grammars are powerful enough to describe the syntactic structure of most programming languages. BNF is a notation for writing CFGs.",
  },
  {
    id: "l3-21",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "Which symbol is used in BNF to separate alternatives?",
    options: ["&", "|", ";", ","],
    correctAnswer: 1,
    explanation:
      "The pipe symbol '|' is used in BNF to separate alternatives. For example: <digit> ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9.",
  },
  {
    id: "l3-22",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "A syntax analyzer is also known as a:",
    options: ["Lexer", "Parser", "Compiler", "Interpreter"],
    correctAnswer: 1,
    explanation:
      "A syntax analyzer is called a parser. It takes the token stream from the lexer and builds a parse tree according to the grammar rules.",
  },
  {
    id: "l3-23",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "Lexical structure is defined by:",
    options: ["BNF", "Regular expressions", "Parse trees", "Semantic rules"],
    correctAnswer: 1,
    explanation:
      "Lexical structure (tokens like identifiers, numbers, keywords) is defined by regular expressions. BNF/CFG is used for syntactic structure, which is more complex.",
  },
  {
    id: "l3-24",
    lectureId: "L3",
    type: QuestionType.TF,
    source: "Lecture 3",
    question: "Natural language descriptions of syntax are often ambiguous.",
    correctAnswer: true,
    explanation:
      "TRUE. Natural language (like English) is inherently ambiguous, which is why formal notations like BNF are used to precisely describe programming language syntax.",
  },
  {
    id: "l3-25",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "What is the purpose of formal grammars?",
    options: [
      "To recursively define language structure precisely",
      "To execute programs",
      "To optimize code",
      "To debug programs",
    ],
    correctAnswer: 0,
    explanation:
      "Formal grammars provide a precise, mathematical way to recursively define the structure of a language. They eliminate the ambiguity of natural language descriptions.",
  },
  {
    id: "l3-26",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question:
      "Which of the following is an example of syntactically incorrect code?",
    options: ["sum = 3 + 5", "sum = 3 +", "sum = count + 5", "3 = sum"],
    correctAnswer: 1,
    explanation:
      "'sum = 3 +' is syntactically incorrect because the + operator is missing its right operand. The grammar rules require an expression on both sides of +.",
  },
  {
    id: "l3-27",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question:
      "Which statement is syntactically correct but semantically meaningless?",
    options: ["sum = 3 + 5", "3 = sum", "sum = 3 +", "sum +"],
    correctAnswer: 1,
    explanation:
      "'3 = sum' is syntactically correct (it follows the grammar pattern) but semantically meaningless because you cannot assign a value to a literal number. This is a semantic error.",
  },
  {
    id: "l3-28",
    lectureId: "L3",
    type: QuestionType.TF,
    source: "Lecture 3",
    question:
      "Describing semantics is generally easier than describing syntax.",
    correctAnswer: false,
    explanation:
      "FALSE. Describing semantics is harder than describing syntax. Syntax can be formally defined with BNF, but semantics (meaning) is more complex and often requires natural language or complex formal methods.",
  },
  {
    id: "l3-29",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "A parse tree represents:",
    options: [
      "The hierarchical syntactic structure of a program",
      "The execution flow",
      "Memory allocation",
      "Variable types",
    ],
    correctAnswer: 0,
    explanation:
      "A parse tree (or syntax tree) represents the hierarchical syntactic structure of a sentence, showing how it was derived from the grammar rules.",
  },
  {
    id: "l3-30",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "Variables (non-terminals) in a grammar represent:",
    options: [
      "Actual program symbols",
      "Syntactic categories",
      "Semantic meanings",
      "Execution states",
    ],
    correctAnswer: 1,
    explanation:
      "Non-terminals (variables) represent syntactic categories like <expression>, <statement>, <identifier>. They are abstract placeholders that get replaced during derivation.",
  },
  {
    id: "l3-31",
    lectureId: "L3",
    type: QuestionType.TF,
    source: "Lecture 3",
    question: "A compiler first checks syntax, then analyzes semantics.",
    correctAnswer: true,
    explanation:
      "TRUE. The compilation process starts with lexical analysis, then syntax analysis (parsing), and only then semantic analysis. Syntax must be correct before meaning can be analyzed.",
  },
  {
    id: "l3-32",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question:
      'In the expression "a + b * c", which operations would be performed based on standard precedence?',
    options: [
      "(a + b) * c",
      "a + (b * c)",
      "Both are valid",
      "Neither is valid",
    ],
    correctAnswer: 1,
    explanation:
      "Standard operator precedence gives * higher priority than +, so b * c is evaluated first, then added to a. This yields a + (b * c).",
  },
  {
    id: "l3-33",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "Operational semantics describes program meaning by:",
    options: [
      "Showing how statements change machine state",
      "Using mathematical functions",
      "Using logical assertions",
      "Using natural language",
    ],
    correctAnswer: 0,
    explanation:
      "Operational semantics describes meaning by simulating program execution on an abstract machine, tracking how each statement changes the machine's state (memory, registers, etc.).",
  },
  {
    id: "l3-34",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "Denotational semantics uses:",
    options: [
      "State transitions",
      "Mathematical functions",
      "Logical proofs",
      "Natural language",
    ],
    correctAnswer: 1,
    explanation:
      "Denotational semantics defines meaning by mapping programs to mathematical objects (functions). Each program construct denotes a mathematical function that transforms inputs to outputs.",
  },
  {
    id: "l3-35",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "Axiomatic semantics is based on:",
    options: [
      "Machine states",
      "Mathematical logic with preconditions and postconditions",
      "Parse trees",
      "Tokens",
    ],
    correctAnswer: 1,
    explanation:
      "Axiomatic semantics uses mathematical logic with preconditions and postconditions to reason about program correctness. The Hoare triple {P}S{Q} states: if P is true before S, then Q is true after.",
  },
  {
    id: "l3-36",
    lectureId: "L3",
    type: QuestionType.TF,
    source: "Lecture 3",
    question:
      "BNF is a concise and universally accepted notation for syntax description.",
    correctAnswer: true,
    explanation:
      "TRUE. BNF (Backus-Naur Form) is universally accepted as a concise, formal notation for describing programming language syntax. It was developed for ALGOL 60 and is still widely used.",
  },
  {
    id: "l3-37",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "Which of the following best describes a token?",
    options: [
      "A category for a lexeme",
      "A single character",
      "A semantic meaning",
      "A compiler error",
    ],
    correctAnswer: 0,
    explanation:
      "A token is a category or classification for a lexeme. For example, the lexeme 'count' has token type 'identifier', and the lexeme '42' has token type 'integer_literal'.",
  },
  {
    id: "l3-38",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: "In programming languages, recursive structures allow:",
    options: [
      "Expressions inside expressions",
      "Only simple statements",
      "No nesting",
      "Single-level programs only",
    ],
    correctAnswer: 0,
    explanation:
      "Recursive grammar rules allow nested structures like expressions inside expressions (e.g., (a + (b * c))). This is essential for complex language constructs.",
  },
  {
    id: "l3-39",
    lectureId: "L3",
    type: QuestionType.TF,
    source: "Lecture 3",
    question:
      "Formal methods are employed to describe syntax precisely because natural language is ambiguous.",
    correctAnswer: true,
    explanation:
      "TRUE. Natural language descriptions can be interpreted in multiple ways. Formal methods like BNF provide precise, unambiguous specifications that can be used for parser generation.",
  },
  {
    id: "l3-40",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Lecture 3",
    question: 'The symbol "→" in grammar productions means:',
    options: [
      "Is equal to",
      "Can be replaced by",
      "Points to",
      "Inherits from",
    ],
    correctAnswer: 1,
    explanation:
      "The arrow '→' in a production rule means 'can be replaced by' or 'produces'. For example, <expr> → <term> + <expr> means <expr> can be replaced by <term> + <expr>.",
  },

  // --- L5: Names & Binding ---
  {
    id: "l5-1",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Which of the following is NOT an attribute of a variable?",
    options: ["Name", "Address", "Value", "Compilation Time"],
    correctAnswer: 3,
    explanation:
      "The six attributes of a variable are: Name, Address (l-value), Value (r-value), Type, Lifetime, and Scope. Compilation Time is not a variable attribute.",
  },
  {
    id: "l5-2",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question:
      "When two or more variable names refer to the same memory location, they are called:",
    options: ["Pointers", "Aliases", "Constants", "Globals"],
    correctAnswer: 1,
    explanation:
      "Aliases occur when two or more variable names access the same memory location. This can happen through pointers, reference variables, or union types.",
  },
  {
    id: "l5-3",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Which binding occurs before run time and remains unchanged?",
    options: [
      "Dynamic Binding",
      "Static Binding",
      "Late Binding",
      "Virtual Binding",
    ],
    correctAnswer: 1,
    explanation:
      "Static binding (early binding) occurs before runtime and remains fixed throughout execution. Examples include binding types at compile time in statically typed languages.",
  },
  {
    id: "l5-4",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "A keyword is different from a reserved word because:",
    options: [
      "Keywords can be redefined by the user in some languages, reserved words cannot",
      "Keywords are longer",
      "Reserved words are only for system use",
      "There is no difference",
    ],
    correctAnswer: 0,
    explanation:
      "Keywords are special only in certain contexts. Reserved words cannot be used as user-defined names at all. In Fortran, keywords like REAL could be redefined (REAL = 3.5).",
  },
  {
    id: "l5-5",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: 'The "lifetime" of a variable is:',
    options: [
      "The time during which the variable is bound to a specific memory location",
      "The scope in which it is visible",
      "The total execution time of the program",
      "The time it takes to compile",
    ],
    correctAnswer: 0,
    explanation:
      "Lifetime is the time during which a variable is bound to a specific memory cell. It begins at allocation and ends at deallocation.",
  },
  {
    id: "l5-6",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Which variables are allocated on the stack?",
    options: [
      "Static variables",
      "Stack-dynamic variables",
      "Explicit heap-dynamic variables",
      "Implicit heap-dynamic variables",
    ],
    correctAnswer: 1,
    explanation:
      "Stack-dynamic variables are allocated on the runtime stack when their declaration is reached. They are automatically deallocated when the function returns.",
  },
  {
    id: "l5-7",
    lectureId: "L5",
    type: QuestionType.TF,
    source: "Lecture 5",
    question:
      "Explicit heap-dynamic variables are allocated and deallocated by explicit instructions (e.g., new/delete).",
    correctAnswer: true,
    explanation:
      "TRUE. Explicit heap-dynamic variables require explicit allocation (new, malloc) and deallocation (delete, free) by the programmer.",
  },
  {
    id: "l5-8",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "What is a storage binding?",
    options: [
      "The connection between a variable and a specific memory cell",
      "The type of a variable",
      "The scope of a variable",
      "The name of a variable",
    ],
    correctAnswer: 0,
    explanation:
      "Storage binding is the association between a variable and a memory cell (address). This binding determines where the variable's value is stored.",
  },
  {
    id: "l5-9",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Allocation means:",
    options: [
      "Releasing memory back to the free pool",
      "Taking a block of memory from the free pool and assigning it to a variable",
      "Declaring a variable",
      "Initializing a variable",
    ],
    correctAnswer: 1,
    explanation:
      "Allocation is the process of taking a block of memory from the available pool and binding it to a variable. This creates the storage binding.",
  },
  {
    id: "l5-10",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Deallocation means:",
    options: [
      "Assigning memory to a variable",
      "Releasing memory back to the free pool",
      "Changing variable type",
      "Renaming a variable",
    ],
    correctAnswer: 1,
    explanation:
      "Deallocation is the process of releasing memory back to the free pool when a variable's lifetime ends or it's explicitly freed.",
  },
  {
    id: "l5-11",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question:
      "How many categories of scalar variables exist based on their lifetimes?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    explanation:
      "There are 4 categories: Static, Stack-dynamic, Explicit heap-dynamic, and Implicit heap-dynamic. Each has different allocation/deallocation timing.",
  },
  {
    id: "l5-12",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Static variables are bound to memory cells:",
    options: [
      "At runtime when needed",
      "Before execution begins",
      "After the first function call",
      "When explicitly allocated",
    ],
    correctAnswer: 1,
    explanation:
      "Static variables are bound to memory before program execution begins and remain bound until the program terminates. Examples: C/C++ 'static' variables, global variables.",
  },
  {
    id: "l5-13",
    lectureId: "L5",
    type: QuestionType.TF,
    source: "Lecture 5",
    question: "Static variables retain their values between function calls.",
    correctAnswer: true,
    explanation:
      "TRUE. Static variables maintain their values across function invocations because they remain bound to the same memory location throughout program execution.",
  },
  {
    id: "l5-14",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Which is an advantage of static variables?",
    options: [
      "Memory reuse",
      "Support for recursion",
      "Efficient direct memory access",
      "Flexible allocation",
    ],
    correctAnswer: 2,
    explanation:
      "Static variables allow efficient direct addressing because their memory location is fixed and known at compile time. No runtime allocation overhead.",
  },
  {
    id: "l5-15",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Which is a disadvantage of static variables?",
    options: [
      "Slow access time",
      "Cannot support recursion",
      "Must be manually deallocated",
      "Type errors at runtime",
    ],
    correctAnswer: 1,
    explanation:
      "Static variables cannot support recursion because there's only one memory location per variable. Recursive calls need separate storage for each activation.",
  },
  {
    id: "l5-16",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Stack-dynamic variables are allocated:",
    options: [
      "Before program execution",
      "When declaration is reached at runtime",
      "Only when explicitly requested",
      "Never automatically",
    ],
    correctAnswer: 1,
    explanation:
      "Stack-dynamic variables are allocated when their declaration is elaborated (reached during execution). This happens on the runtime stack.",
  },
  {
    id: "l5-17",
    lectureId: "L5",
    type: QuestionType.TF,
    source: "Lecture 5",
    question:
      "Stack-dynamic variables enable recursion because each call gets its own copy.",
    correctAnswer: true,
    explanation:
      "TRUE. Each function call creates a new activation record on the stack with its own copies of local variables, enabling recursive functions to work correctly.",
  },
  {
    id: "l5-18",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Stack-dynamic variables are freed:",
    options: [
      "Manually by programmer",
      "Automatically when the function returns",
      "At program termination",
      "Never",
    ],
    correctAnswer: 1,
    explanation:
      "Stack-dynamic variables are automatically deallocated when the function returns and its activation record is popped from the stack.",
  },
  {
    id: "l5-19",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Which is an advantage of stack-dynamic variables?",
    options: [
      "No allocation overhead",
      "History-sensitive behavior",
      "Memory reuse and support for recursion",
      "Fastest possible access",
    ],
    correctAnswer: 2,
    explanation:
      "Stack-dynamic variables support recursion (each call gets new storage) and allow memory reuse (the same stack space is reused for different function calls).",
  },
  {
    id: "l5-20",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Which is a disadvantage of stack-dynamic variables?",
    options: [
      "Cannot support recursion",
      "Overhead of allocation and deallocation",
      "Memory leaks",
      "Type checking impossible",
    ],
    correctAnswer: 1,
    explanation:
      "Stack-dynamic variables have runtime overhead for allocation/deallocation and indirect addressing (accessing via stack pointer offset).",
  },
  {
    id: "l5-21",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question:
      "Explicit heap-dynamic variables are allocated using commands like:",
    options: ["static", "new or malloc", "auto", "register"],
    correctAnswer: 1,
    explanation:
      "Explicit heap-dynamic variables are allocated using explicit runtime instructions: 'new' in C++/Java, 'malloc' in C, and freed with 'delete' or 'free'.",
  },
  {
    id: "l5-22",
    lectureId: "L5",
    type: QuestionType.TF,
    source: "Lecture 5",
    question:
      "Explicit heap-dynamic variables can only be referenced through pointer or reference variables.",
    correctAnswer: true,
    explanation:
      "TRUE. Heap-allocated objects don't have names; they can only be accessed through pointers or references that store their memory addresses.",
  },
  {
    id: "l5-23",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Java objects are:",
    options: [
      "Static variables",
      "Stack-dynamic variables",
      "Explicit heap-dynamic variables",
      "Implicit heap-dynamic variables",
    ],
    correctAnswer: 2,
    explanation:
      "Java objects are explicit heap-dynamic: created with 'new', stored on the heap, and accessed through references. However, Java uses garbage collection instead of explicit delete.",
  },
  {
    id: "l5-24",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question:
      "Which data structures benefit from explicit heap-dynamic variables?",
    options: [
      "Arrays only",
      "Linked lists, trees, and graphs",
      "Simple integers",
      "Static arrays",
    ],
    correctAnswer: 1,
    explanation:
      "Dynamic data structures like linked lists, trees, and graphs require heap allocation because their size can grow and shrink during execution.",
  },
  {
    id: "l5-25",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Which is a disadvantage of explicit heap-dynamic variables?",
    options: [
      "Too fast",
      "Error-prone with memory leaks and dangling pointers",
      "Cannot store complex data",
      "Limited to integers only",
    ],
    correctAnswer: 1,
    explanation:
      "Explicit heap management is error-prone: forgetting to free causes memory leaks; using freed memory creates dangling pointers. This is why many languages use garbage collection.",
  },
  {
    id: "l5-26",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Implicit heap-dynamic variables are allocated:",
    options: [
      "Before program execution",
      "Automatically when assigned a value",
      "Only with explicit commands",
      "On the stack",
    ],
    correctAnswer: 1,
    explanation:
      "Implicit heap-dynamic variables are bound to heap storage when assigned values. Languages like JavaScript and Python use this model.",
  },
  {
    id: "l5-27",
    lectureId: "L5",
    type: QuestionType.TF,
    source: "Lecture 5",
    question:
      "In implicit heap-dynamic variables, all attributes (type, size, value) are bound dynamically.",
    correctAnswer: true,
    explanation:
      "TRUE. Implicit heap-dynamic variables have all attributes (type, size, value) bound at runtime when values are assigned, providing maximum flexibility.",
  },
  {
    id: "l5-28",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question:
      "In JavaScript, if a variable is assigned a string and then an array, what happens?",
    options: [
      "Compilation error",
      "The variable now references the new array",
      "Both values are stored",
      "Runtime error",
    ],
    correctAnswer: 1,
    explanation:
      "JavaScript uses implicit heap-dynamic variables, so a variable can hold any type. When reassigned, it simply references the new value; the old value may be garbage collected.",
  },
  {
    id: "l5-29",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Which is an advantage of implicit heap-dynamic variables?",
    options: [
      "Fastest execution",
      "Strong type checking",
      "Extremely flexible, can hold any kind of data",
      "No memory overhead",
    ],
    correctAnswer: 2,
    explanation:
      "Implicit heap-dynamic variables offer extreme flexibility: the same variable can hold different types at different times. This enables rapid prototyping and generic programming.",
  },
  {
    id: "l5-30",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Which is a disadvantage of implicit heap-dynamic variables?",
    options: [
      "Too rigid",
      "Performance cost and runtime overhead",
      "Cannot change types",
      "Requires manual memory management",
    ],
    correctAnswer: 1,
    explanation:
      "Implicit heap-dynamic variables have significant runtime overhead: type checking at runtime, dynamic memory management, and potential garbage collection pauses.",
  },
  {
    id: "l5-31",
    lectureId: "L5",
    type: QuestionType.TF,
    source: "Lecture 5",
    question:
      "In C99, only the first 63 characters of internal names are significant.",
    correctAnswer: true,
    explanation:
      "TRUE. C99 specifies that only the first 63 characters of internal names (local variables, function names) are significant for distinguishing identifiers.",
  },
  {
    id: "l5-32",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "In Java and C#, identifier length is:",
    options: [
      "Limited to 31 characters",
      "Limited to 63 characters",
      "Unlimited and all characters are significant",
      "Limited to 255 characters",
    ],
    correctAnswer: 2,
    explanation:
      "In Java and C#, identifiers have no length limit and all characters are significant. This supports descriptive, readable naming conventions.",
  },
  {
    id: "l5-33",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "In PHP, all variable names must begin with:",
    options: [
      "An underscore",
      "A letter",
      "A dollar sign ($)",
      "An at sign (@)",
    ],
    correctAnswer: 2,
    explanation:
      "PHP requires all variable names to start with a dollar sign ($), e.g., $name, $count. This distinguishes variables from other identifiers.",
  },
  {
    id: "l5-34",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "In Ruby, what does @name indicate?",
    options: [
      "Global variable",
      "Instance variable",
      "Class variable",
      "Local variable",
    ],
    correctAnswer: 1,
    explanation:
      "In Ruby, @name indicates an instance variable (belongs to a specific object instance). This convention makes variable scope immediately visible.",
  },
  {
    id: "l5-35",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "In Ruby, what does @@name indicate?",
    options: [
      "Global variable",
      "Instance variable",
      "Class variable",
      "Local variable",
    ],
    correctAnswer: 2,
    explanation:
      "In Ruby, @@name indicates a class variable (shared by all instances of a class). Double @ distinguishes it from instance variables (@name).",
  },
  {
    id: "l5-36",
    lectureId: "L5",
    type: QuestionType.TF,
    source: "Lecture 5",
    question:
      "Case sensitivity in names can reduce readability as similar-looking names may refer to different entities.",
    correctAnswer: true,
    explanation:
      "TRUE. Case sensitivity (Count vs count vs COUNT being different) can reduce readability and cause confusion. However, many modern languages are case-sensitive.",
  },
  {
    id: "l5-37",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question: "Fortran allowed up to how many characters in variable names?",
    options: ["1", "6", "31", "Unlimited"],
    correctAnswer: 1,
    explanation:
      "Early Fortran limited variable names to 6 characters due to memory constraints. Modern Fortran 90+ allows 31 characters.",
  },
  {
    id: "l5-38",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Lecture 5",
    question:
      "What is the term used for a string of characters that identifies an entity in a program?",
    options: ["Token", "Name", "Lexeme", "Symbol"],
    correctAnswer: 1,
    explanation:
      "A name (or identifier) is a string of characters used to identify a program entity like variables, functions, classes, etc.",
  },

  // --- L6: Scopes ---
  {
    id: "l6-1",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "In static scoping, the scope of a variable is determined by:",
    options: [
      "The sequence of function calls",
      "The program text/structure",
      "The operating system",
      "User input",
    ],
    correctAnswer: 1,
    explanation:
      "Static (lexical) scoping determines variable scope from the program's textual structure. The scope can be determined at compile time by examining the code.",
  },
  {
    id: "l6-2",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "Dynamic scoping is based on:",
    options: [
      "Spatial relationship of code",
      "Calling sequence of subprograms",
      "Alphabetical order",
      "Compiler settings",
    ],
    correctAnswer: 1,
    explanation:
      "Dynamic scoping resolves variable references based on the runtime calling sequence. The most recent declaration in the call chain is used.",
  },
  {
    id: "l6-3",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question:
      "Variables declared outside any function are generally considered global.",
    correctAnswer: true,
    explanation:
      "TRUE. Variables declared outside all functions have global scope - they are visible throughout the entire program from their declaration point onward.",
  },
  {
    id: "l6-4",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: 'The "Referencing Environment" of a statement is:',
    options: [
      "The collection of all names that are visible in the statement",
      "The list of all global variables",
      "The operating system environment variables",
      "The set of all active subprograms",
    ],
    correctAnswer: 0,
    explanation:
      "The referencing environment is the collection of all names (variables, functions, etc.) that are visible and can be referenced at a particular statement.",
  },
  {
    id: "l6-5",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question:
      "A block (enclosed in braces) can create a new static scope in C-based languages.",
    correctAnswer: true,
    explanation:
      "TRUE. In C, C++, Java, and C#, a block { } creates a new scope. Variables declared inside are local to that block and not visible outside.",
  },
  {
    id: "l6-6",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "What is a disadvantage of dynamic scoping?",
    options: [
      "It makes programs hard to read and reliability is reduced",
      "It is too slow to compile",
      "It uses too much memory",
      "It requires type checking at compile time",
    ],
    correctAnswer: 0,
    explanation:
      "Dynamic scoping reduces readability because you cannot determine which variable is referenced by just reading the code - it depends on the runtime call sequence.",
  },
  {
    id: "l6-7",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "The four categories of variables by lifetime are:",
    options: [
      "Named Static, Stack-dynamic, Explicit Heap-dynamic, Implicit Heap-dynamic",
      "Local, Global, Static, Dynamic",
      "Integer, Float, String, Boolean",
      "Public, Private, Protected, Internal",
    ],
    correctAnswer: 0,
    explanation:
      "Variables are categorized by lifetime as: Static (bound before execution), Stack-dynamic (bound when declaration reached), Explicit heap-dynamic (explicit new/malloc), Implicit heap-dynamic (bound on assignment).",
  },
  {
    id: "l6-8",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question:
      "In C++, Java, and C#, static modifier on a class variable makes it shared across all objects.",
    correctAnswer: true,
    explanation:
      "TRUE. A static class variable is shared by all instances of the class. There's only one copy, unlike instance variables which have one copy per object.",
  },
  {
    id: "l6-9",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question:
      "Stack-dynamic local variables in Java, C++, and C# are allocated:",
    options: [
      "On the heap",
      "On the runtime stack",
      "In static memory",
      "In registers only",
    ],
    correctAnswer: 1,
    explanation:
      "Local variables in these languages are stack-dynamic: allocated on the runtime stack when the function is called and deallocated when it returns.",
  },
  {
    id: "l6-10",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question:
      "In Python and JavaScript, non-primitive objects like lists and dictionaries are stored in:",
    options: ["Stack", "Heap", "Registers", "Static memory"],
    correctAnswer: 1,
    explanation:
      "In Python and JavaScript, complex objects (lists, dictionaries, objects) are stored on the heap because they can grow dynamically and have variable size.",
  },
  {
    id: "l6-11",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question:
      "Python lists are stored in the heap because they are mutable and need flexible memory space.",
    correctAnswer: true,
    explanation:
      "TRUE. Python lists can grow/shrink dynamically and are mutable, so they require heap storage which allows flexible memory allocation.",
  },
  {
    id: "l6-12",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "Static scoping searches for variable declarations based on:",
    options: [
      "The calling sequence",
      "The lexical (textual) structure of the program",
      "Runtime execution order",
      "User input",
    ],
    correctAnswer: 1,
    explanation:
      "Static scoping uses the lexical (textual) structure - it searches outward through enclosing scopes in the source code to find variable declarations.",
  },
  {
    id: "l6-13",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "Dynamic scoping searches for variable declarations based on:",
    options: [
      "The program text",
      "The calling sequence of subprograms",
      "Alphabetical order",
      "Declaration order",
    ],
    correctAnswer: 1,
    explanation:
      "Dynamic scoping searches through the chain of function calls (activation records) at runtime to find the most recent declaration of a variable.",
  },
  {
    id: "l6-14",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question:
      "Most modern languages use static scoping rather than dynamic scoping.",
    correctAnswer: true,
    explanation:
      "TRUE. Most modern languages (C, C++, Java, Python) use static scoping because it's easier to understand and allows compile-time checking. Dynamic scoping is rare (early Lisp, some shells).",
  },
  {
    id: "l6-15",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "A block in C-based languages creates:",
    options: [
      "A new dynamic scope",
      "A new static scope",
      "No scope change",
      "A global scope",
    ],
    correctAnswer: 1,
    explanation:
      "A block { } in C, C++, Java, C# creates a new static scope. Variables declared inside are local to that block.",
  },
  {
    id: "l6-16",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "The lifetime of a variable begins when:",
    options: [
      "It is declared",
      "Memory is allocated for it",
      "It is used",
      "The program starts",
    ],
    correctAnswer: 1,
    explanation:
      "A variable's lifetime begins when memory is allocated (bound) to it. This may happen at compile time (static) or runtime (dynamic).",
  },
  {
    id: "l6-17",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "The lifetime of a variable ends when:",
    options: [
      "It goes out of scope",
      "That memory is released",
      "The function returns",
      "The program terminates",
    ],
    correctAnswer: 1,
    explanation:
      "A variable's lifetime ends when its memory is deallocated (released). For stack variables, this happens on function return; for heap variables, when freed.",
  },
  {
    id: "l6-18",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question: "Scope and lifetime are the same concept.",
    correctAnswer: false,
    explanation:
      "FALSE. Scope is where a variable can be referenced (visibility). Lifetime is when the variable exists in memory. A static local variable has limited scope but program-long lifetime.",
  },
  {
    id: "l6-19",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question:
      "Which implementation method for dynamic scoping searches activation records on the dynamic chain?",
    options: ["Shallow Access", "Deep Access", "Display Access", "Hash Access"],
    correctAnswer: 1,
    explanation:
      "Deep Access searches through activation records on the dynamic chain (call stack) to find variable bindings. Shallow Access uses a central table instead.",
  },
  {
    id: "l6-20",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "Local variables in most languages have which scope?",
    options: ["Global", "Static", "Dynamic", "Block"],
    correctAnswer: 3,
    explanation:
      "Local variables typically have block scope - they're visible only within the block (function, loop, or { }) where they're declared.",
  },
  {
    id: "l6-21",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question: "Global variables are visible throughout the entire program.",
    correctAnswer: true,
    explanation:
      "TRUE. Global variables (declared outside all functions) are visible throughout the program, from their declaration point to the end of the program.",
  },
  {
    id: "l6-22",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question:
      "In static scoping, which declaration is used for a variable reference?",
    options: [
      "The most recent during execution",
      "The closest enclosing scope in the program text",
      "The first declaration in the file",
      "The global declaration",
    ],
    correctAnswer: 1,
    explanation:
      "Static scoping uses the closest enclosing scope in the source code. The compiler searches outward through lexically enclosing blocks.",
  },
  {
    id: "l6-23",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question:
      "In dynamic scoping, which declaration is used for a variable reference?",
    options: [
      "The closest in the program text",
      "The most recent during execution",
      "The first declaration",
      "The global declaration",
    ],
    correctAnswer: 1,
    explanation:
      "Dynamic scoping uses the most recent declaration encountered during runtime execution - searching back through the call chain.",
  },
  {
    id: "l6-24",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question: "Static scoping can be determined at compile time.",
    correctAnswer: true,
    explanation:
      "TRUE. Static scoping is based on the program's textual structure, which is known at compile time. No runtime information is needed.",
  },
  {
    id: "l6-25",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question:
      "Dynamic scoping requires runtime determination of variable bindings.",
    correctAnswer: true,
    explanation:
      "TRUE. Dynamic scoping depends on the calling sequence, which is only known at runtime. Variable bindings cannot be determined until the program executes.",
  },
  {
    id: "l6-26",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "Nested subprograms in static scoping can access:",
    options: [
      "Only global variables",
      "Variables in all enclosing scopes",
      "Only local variables",
      "No external variables",
    ],
    correctAnswer: 1,
    explanation:
      "In static scoping, nested functions can access variables from all enclosing (outer) scopes, not just global or local variables.",
  },
  {
    id: "l6-27",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "A referencing environment includes:",
    options: [
      "All variables in the program",
      "All names visible at that statement",
      "Only global variables",
      "Only local variables",
    ],
    correctAnswer: 1,
    explanation:
      "The referencing environment at any point includes all names (variables, functions, etc.) that are visible and can be referenced from that location.",
  },
  {
    id: "l6-28",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question: "Blocks allow for temporary variables with limited scope.",
    correctAnswer: true,
    explanation:
      "TRUE. Blocks { } allow declaring temporary variables that exist only within that block, reducing namespace pollution and improving memory usage.",
  },
  {
    id: "l6-29",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "Declaration order in a block matters for:",
    options: [
      "All languages equally",
      "Languages requiring forward declaration",
      "No languages",
      "Only functional languages",
    ],
    correctAnswer: 1,
    explanation:
      "In languages like C/C++ that require forward declarations, declaration order matters - you must declare before use. Other languages like JavaScript hoist declarations.",
  },
  {
    id: "l6-30",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "Shadowing occurs when:",
    options: [
      "A variable is deleted",
      "A local variable has the same name as one in an outer scope",
      "Two functions have the same name",
      "A variable is undefined",
    ],
    correctAnswer: 1,
    explanation:
      "Shadowing (or hiding) occurs when an inner scope declares a variable with the same name as one in an outer scope, making the outer one inaccessible.",
  },
  {
    id: "l6-31",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question: "Shadowing hides the outer variable in the inner scope.",
    correctAnswer: true,
    explanation:
      "TRUE. When shadowing occurs, the outer variable is hidden (not visible) within the inner scope. References use the inner variable.",
  },
  {
    id: "l6-32",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "In most languages, which scope takes precedence?",
    options: [
      "Global scope",
      "The innermost (most local) scope",
      "The oldest scope",
      "The largest scope",
    ],
    correctAnswer: 1,
    explanation:
      "The innermost (most local) scope takes precedence. When a name is referenced, the search starts from the innermost scope and works outward.",
  },
  {
    id: "l6-33",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "Which languages primarily use dynamic scoping?",
    options: [
      "Java and C++",
      "Early Lisp dialects and some shell languages",
      "Python and Ruby",
      "All modern languages",
    ],
    correctAnswer: 1,
    explanation:
      "Dynamic scoping was used in early Lisp dialects and is still used in some shell languages (Bash). Modern languages predominantly use static scoping.",
  },
  {
    id: "l6-34",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Lecture 6",
    question: "Static scoping makes programs easier to read and understand.",
    correctAnswer: true,
    explanation:
      "TRUE. Static scoping improves readability because you can determine which variable is referenced by just reading the code, without needing to trace runtime execution.",
  },
  {
    id: "l6-35",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Lecture 6",
    question: "A closure in functional programming captures:",
    options: [
      "Only parameters",
      "The function and its referencing environment",
      "Only global variables",
      "Return values",
    ],
    correctAnswer: 1,
    explanation:
      "A closure captures both the function code and its referencing environment (the variables visible at its definition). This allows the function to access those variables later.",
  },

  // --- L7: Expressions ---
  {
    id: "l7-1",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "A narrowing conversion converts a value into a:",
    options: [
      "Larger type",
      "Smaller/less expressive type",
      "String",
      "Boolean",
    ],
    correctAnswer: 1,
    explanation:
      "A narrowing conversion converts to a smaller type that cannot represent all values of the original type (e.g., double to int). May lose precision or cause overflow.",
  },
  {
    id: "l7-2",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Short-circuit evaluation means:",
    options: [
      "All operands are evaluated first",
      "The result is determined without evaluating all operands",
      "The expression causes a circuit break",
      "The expression is ignored",
    ],
    correctAnswer: 1,
    explanation:
      "Short-circuit evaluation stops as soon as the result is known: in 'a && b', if a is false, b is not evaluated; in 'a || b', if a is true, b is not evaluated.",
  },
  {
    id: "l7-3",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Operator overloading allows:",
    options: [
      "An operator to have multiple meanings depending on operand types",
      "An operator to be removed",
      "An operator to run faster",
      "An operator to take infinite arguments",
    ],
    correctAnswer: 0,
    explanation:
      "Operator overloading lets the same operator symbol have different implementations based on operand types. E.g., '+' adds numbers but concatenates strings.",
  },
  {
    id: "l7-4",
    lectureId: "L7",
    type: QuestionType.TF,
    source: "Lecture 7",
    question: "In functional languages, expressions do not have side effects.",
    correctAnswer: true,
    explanation:
      "TRUE. Pure functional languages prohibit side effects in expressions. Functions only compute and return values without modifying external state.",
  },
  {
    id: "l7-5",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question:
      'Which of the following describes a "side effect" in an expression?',
    options: [
      "When a function changes a two-way parameter or a non-local variable",
      "When an expression returns zero",
      "When a variable is declared",
      "When an error occurs",
    ],
    correctAnswer: 0,
    explanation:
      "A side effect is when a function or expression modifies something outside its local scope - like changing a global variable or a parameter passed by reference.",
  },
  {
    id: "l7-6",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "An expression is a combination of:",
    options: [
      "Only operators",
      "Operators, operands, parentheses, and function calls",
      "Only variables",
      "Only constants",
    ],
    correctAnswer: 1,
    explanation:
      "An expression combines operators, operands (variables, constants), parentheses for grouping, and function calls to compute a value.",
  },
  {
    id: "l7-7",
    lectureId: "L7",
    type: QuestionType.TF,
    source: "Lecture 7",
    question: "Every expression has both syntax and semantics.",
    correctAnswer: true,
    explanation:
      "TRUE. Syntax defines the form of the expression (how it's written); semantics defines its meaning (what value it produces and how it's evaluated).",
  },
  {
    id: "l7-8",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Binary operators operate on:",
    options: ["One operand", "Two operands", "Three operands", "Four operands"],
    correctAnswer: 1,
    explanation:
      "Binary operators take two operands (e.g., a + b, x * y, m / n). 'Binary' refers to the number of operands, not binary numbers.",
  },
  {
    id: "l7-9",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Which is an example of a unary operator?",
    options: ["+", "-", "++", "All of the above"],
    correctAnswer: 3,
    explanation:
      "All can be unary operators: unary + and - change sign of a single operand; ++ and -- increment/decrement a single operand.",
  },
  {
    id: "l7-10",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "The ternary operator has the form:",
    options: ["a + b + c", "condition ? x : y", "a * b * c", "x && y && z"],
    correctAnswer: 1,
    explanation:
      "The ternary operator ?: takes three operands: condition ? value_if_true : value_if_false. It's the only ternary operator in most languages.",
  },
  {
    id: "l7-11",
    lectureId: "L7",
    type: QuestionType.TF,
    source: "Lecture 7",
    question: "In mainstream languages, 5x must be written as 5 * x.",
    correctAnswer: true,
    explanation:
      "TRUE. Unlike mathematical notation, most programming languages require explicit multiplication operators. '5x' would be interpreted as an identifier named '5x'.",
  },
  {
    id: "l7-12",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Infix notation places the operator:",
    options: [
      "Before operands",
      "Between operands",
      "After operands",
      "Anywhere",
    ],
    correctAnswer: 1,
    explanation:
      "Infix notation places operators between operands (e.g., a + b). Prefix puts operators before (+ a b), postfix puts them after (a b +).",
  },
  {
    id: "l7-13",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "In Scheme and Lisp, all operators are:",
    options: ["Infix", "Postfix", "Prefix", "Mixed"],
    correctAnswer: 2,
    explanation:
      "Scheme and Lisp use prefix notation with parentheses: (+ a b) instead of a + b. All operators come before their operands.",
  },
  {
    id: "l7-14",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Operator precedence determines:",
    options: [
      "Which operator is evaluated first",
      "Which operand is larger",
      "Variable types",
      "Memory allocation",
    ],
    correctAnswer: 0,
    explanation:
      "Operator precedence defines the order of operations when different operators appear in an expression without parentheses (e.g., * before +).",
  },
  {
    id: "l7-15",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Which has higher precedence: multiplication or addition?",
    options: [
      "Addition",
      "Multiplication",
      "They are equal",
      "It depends on the language",
    ],
    correctAnswer: 1,
    explanation:
      "Multiplication (*) has higher precedence than addition (+) in virtually all languages. So 2 + 3 * 4 = 14, not 20.",
  },
  {
    id: "l7-16",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Operator associativity handles:",
    options: [
      "Different operator types",
      "Operators with equal precedence",
      "Variable declarations",
      "Type conversions",
    ],
    correctAnswer: 1,
    explanation:
      "Associativity determines evaluation order when operators of equal precedence appear together. Left-associative: a - b - c = (a - b) - c. Right-associative: a = b = c = a = (b = c).",
  },
  {
    id: "l7-17",
    lectureId: "L7",
    type: QuestionType.TF,
    source: "Lecture 7",
    question: "Most arithmetic operators are left-associative.",
    correctAnswer: true,
    explanation:
      "TRUE. Most arithmetic operators (+, -, *, /) are left-associative: a - b - c evaluates as (a - b) - c. Exception: exponentiation is often right-associative.",
  },
  {
    id: "l7-18",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "A widening conversion:",
    options: [
      "Converts to a smaller type",
      "Converts to a larger/more expressive type",
      "Always causes errors",
      "Is not allowed",
    ],
    correctAnswer: 1,
    explanation:
      "A widening conversion converts to a larger type that can represent all values of the original (e.g., int to double). It's safe and typically done implicitly.",
  },
  {
    id: "l7-19",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Type coercion is:",
    options: [
      "Explicit type conversion",
      "Implicit type conversion",
      "Type declaration",
      "Type deletion",
    ],
    correctAnswer: 1,
    explanation:
      "Coercion is implicit (automatic) type conversion done by the compiler. For example, in '3 + 2.5', the int 3 is coerced to a double.",
  },
  {
    id: "l7-20",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Casting is:",
    options: [
      "Implicit conversion",
      "Explicit type conversion",
      "Automatic conversion",
      "Error handling",
    ],
    correctAnswer: 1,
    explanation:
      "Casting is explicit type conversion written in code by the programmer, e.g., (int)3.14 in C/C++ or int(3.14) in Python.",
  },
  {
    id: "l7-21",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "A mixed-mode expression contains:",
    options: [
      "Only integers",
      "Operands of different types",
      "Only strings",
      "No operands",
    ],
    correctAnswer: 1,
    explanation:
      "A mixed-mode (or mixed-type) expression has operands of different types, like '3 + 2.5' (int and double). The language must coerce one type.",
  },
  {
    id: "l7-22",
    lectureId: "L7",
    type: QuestionType.TF,
    source: "Lecture 7",
    question:
      "Short-circuit evaluation evaluates all operands before returning a result.",
    correctAnswer: false,
    explanation:
      "FALSE. Short-circuit evaluation does NOT evaluate all operands. It stops early when the result is determined (false && x skips x; true || x skips x).",
  },
  {
    id: "l7-23",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "In short-circuit evaluation of 'a && b', if a is false:",
    options: [
      "b is still evaluated",
      "b is not evaluated",
      "Both are always evaluated",
      "The expression causes an error",
    ],
    correctAnswer: 1,
    explanation:
      "In 'a && b', if a is false, the entire expression must be false regardless of b. So b is not evaluated (short-circuited).",
  },
  {
    id: "l7-24",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "The assignment operator typically has:",
    options: [
      "Very high precedence",
      "Very low precedence",
      "Medium precedence",
      "No precedence",
    ],
    correctAnswer: 1,
    explanation:
      "Assignment (=) has very low precedence so that expressions like 'x = a + b * c' evaluate the right side completely before assigning.",
  },
  {
    id: "l7-25",
    lectureId: "L7",
    type: QuestionType.TF,
    source: "Lecture 7",
    question:
      "Parentheses can be used to override default operator precedence.",
    correctAnswer: true,
    explanation:
      "TRUE. Parentheses have the highest precedence and force enclosed expressions to be evaluated first, overriding default precedence rules.",
  },
  {
    id: "l7-26",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Postfix increment (i++) returns:",
    options: [
      "The incremented value",
      "The value before incrementing",
      "Zero",
      "An error",
    ],
    correctAnswer: 1,
    explanation:
      "Postfix i++ returns the original value, then increments. So if i=5, 'x = i++' sets x=5 and i becomes 6.",
  },
  {
    id: "l7-27",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Prefix increment (++i) returns:",
    options: [
      "The value before incrementing",
      "The incremented value",
      "Zero",
      "An error",
    ],
    correctAnswer: 1,
    explanation:
      "Prefix ++i increments first, then returns the new value. So if i=5, 'x = ++i' sets i=6 first, then x=6.",
  },
  {
    id: "l7-28",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Unary minus has which precedence compared to exponentiation?",
    options: [
      "Different languages handle it differently",
      "Always higher",
      "Always lower",
      "Always equal",
    ],
    correctAnswer: 0,
    explanation:
      "Languages differ: in some, -2^2 = (-2)^2 = 4 (unary minus higher precedence); in others, -2^2 = -(2^2) = -4 (exponentiation higher).",
  },
  {
    id: "l7-29",
    lectureId: "L7",
    type: QuestionType.TF,
    source: "Lecture 7",
    question:
      "Operator overloading allows an operator to have multiple meanings based on operand types.",
    correctAnswer: true,
    explanation:
      "TRUE. Operator overloading lets the same operator symbol perform different operations based on operand types (e.g., + for numbers vs. strings).",
  },
  {
    id: "l7-30",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Lecture 7",
    question: "Which languages commonly support operator overloading?",
    options: ["C and Java", "C++ and Python", "Assembly only", "No languages"],
    correctAnswer: 1,
    explanation:
      "C++ and Python allow user-defined operator overloading. C doesn't support it; Java only has built-in overloading (e.g., + for String concatenation).",
  },

  // --- L11: Control Structures ---
  {
    id: "l11-1",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: 'The "Dangling Else" problem arises in which type of statement?',
    options: ["Switch", "Nested If-Else", "While Loop", "For Loop"],
    correctAnswer: 1,
    explanation:
      "The dangling else problem occurs in nested if-else statements when it's ambiguous which 'if' an 'else' belongs to. Most languages match else with the nearest unmatched if.",
  },
  {
    id: "l11-2",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "Which loop checks the condition *after* the body executes?",
    options: ["Pretest Loop", "Posttest Loop", "For Loop", "Counter Loop"],
    correctAnswer: 1,
    explanation:
      "A posttest loop (like do-while) executes the body first, then checks the condition. This guarantees at least one execution of the loop body.",
  },
  {
    id: "l11-3",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "Guarded commands were proposed by:",
    options: ["Dijkstra", "Turing", "Von Neumann", "Knuth"],
    correctAnswer: 0,
    explanation:
      "Edsger Dijkstra proposed guarded commands as a way to introduce nondeterminism in programming, supporting verification and formal reasoning about programs.",
  },
  {
    id: "l11-4",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question:
      'What is the primary purpose of a "selector" in a multiple-selection statement (switch/case)?',
    options: [
      "To decide which path to execute based on a value",
      "To loop over a collection",
      "To declare variables",
      "To terminate the program",
    ],
    correctAnswer: 0,
    explanation:
      "The selector is the expression whose value is matched against case labels to determine which branch of the switch statement to execute.",
  },
  {
    id: "l11-5",
    lectureId: "L11",
    type: QuestionType.TF,
    source: "Lecture 11",
    question:
      "In a counter-controlled loop (for loop), the loop variable is typically an integer.",
    correctAnswer: true,
    explanation:
      "TRUE. Counter-controlled loops typically use an integer loop variable that starts at an initial value, is incremented each iteration, and stops at a terminal value.",
  },
  {
    id: "l11-6",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question:
      "Which of the following is NOT a design issue for two-way selection statements?",
    options: [
      "What is the form and type of the control expression?",
      "How are then and else clauses specified?",
      "How should the meaning of nested selectors be specified?",
      "How much memory does it consume?",
    ],
    correctAnswer: 3,
    explanation:
      "Design issues for selection statements include expression form/type, clause specification, and handling nested selectors. Memory consumption is not a design issue for selection statements.",
  },
  {
    id: "l11-7",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "A selection statement allows a program to:",
    options: [
      "Loop indefinitely",
      "Choose between different execution paths based on a condition",
      "Declare variables",
      "Import libraries",
    ],
    correctAnswer: 1,
    explanation:
      "Selection statements (if, switch) allow programs to choose between different execution paths based on the value of a condition or expression.",
  },
  {
    id: "l11-8",
    lectureId: "L11",
    type: QuestionType.TF,
    source: "Lecture 11",
    question:
      "Böhm and Jacopini proved that any algorithm can be written using only sequence, selection, and iteration.",
    correctAnswer: true,
    explanation:
      "TRUE. The Böhm-Jacopini theorem (1966) proved that any computable function can be computed by a program using only sequence, selection (if-then-else), and iteration (loops).",
  },
  {
    id: "l11-9",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "A two-way selection statement has:",
    options: [
      "One path",
      "Two paths (then and else)",
      "Three paths",
      "Unlimited paths",
    ],
    correctAnswer: 1,
    explanation:
      "A two-way selection (if-else) has exactly two paths: the 'then' clause executed when condition is true, and the 'else' clause when false.",
  },
  {
    id: "l11-10",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question:
      "In C/Java/C++, are parentheses required around the control expression?",
    options: ["No", "Yes", "Sometimes", "Only for strings"],
    correctAnswer: 1,
    explanation:
      "Yes, in C, Java, and C++, parentheses are required around the control expression in if/while statements: if (condition) { ... }.",
  },
  {
    id: "l11-11",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "In Ruby, parentheses around control expressions are:",
    options: [
      "Required",
      "Optional because 'then' is used",
      "Forbidden",
      "Always needed",
    ],
    correctAnswer: 1,
    explanation:
      "Ruby uses 'then' (or newline) to separate the condition from the body, making parentheses optional: 'if x > 5 then puts x end'.",
  },
  {
    id: "l11-12",
    lectureId: "L11",
    type: QuestionType.TF,
    source: "Lecture 11",
    question:
      "Modern languages like Java and C# only allow Boolean expressions in control statements.",
    correctAnswer: true,
    explanation:
      "TRUE. Java and C# require Boolean expressions in if/while conditions. Unlike C, you cannot use integers (0 = false, non-zero = true).",
  },
  {
    id: "l11-13",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "In Python, the then-clause is indicated by:",
    options: ["then keyword", "Colon and indentation", "Braces", "Parentheses"],
    correctAnswer: 1,
    explanation:
      "Python uses a colon after the condition followed by indented code for the then-clause: 'if x > 0:\n    print(x)'. No braces or 'then' keyword.",
  },
  {
    id: "l11-14",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "The dangling else problem involves:",
    options: [
      "Missing semicolons",
      "Ambiguity about which 'if' an 'else' belongs to",
      "Type errors",
      "Memory leaks",
    ],
    correctAnswer: 1,
    explanation:
      "The dangling else is a syntactic ambiguity when an 'else' could belong to multiple nested 'if' statements. Most languages resolve it by matching else to the nearest if.",
  },
  {
    id: "l11-15",
    lectureId: "L11",
    type: QuestionType.TF,
    source: "Lecture 11",
    question:
      "Indentation alone does NOT affect semantics in most languages like C and Java.",
    correctAnswer: true,
    explanation:
      "TRUE. In C, Java, and C++, indentation is purely cosmetic - only braces define blocks. Misleading indentation doesn't change program behavior (unlike Python).",
  },
  {
    id: "l11-16",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "In most languages, an else clause is associated with:",
    options: [
      "The first if",
      "The nearest unmatched if",
      "All ifs equally",
      "The last if in the file",
    ],
    correctAnswer: 1,
    explanation:
      "Most languages use the 'nearest if' rule: an else is associated with the closest preceding if that doesn't already have an else.",
  },
  {
    id: "l11-17",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "A multiple-selection statement (switch/case) uses a:",
    options: [
      "Loop variable",
      "Selector to decide which path to execute",
      "Random number",
      "Boolean only",
    ],
    correctAnswer: 1,
    explanation:
      "A switch statement uses a selector expression whose value is matched against case labels to determine which code path to execute.",
  },
  {
    id: "l11-18",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "A pretest loop checks the condition:",
    options: [
      "After executing the body",
      "Before executing the body",
      "Never",
      "In the middle of the body",
    ],
    correctAnswer: 1,
    explanation:
      "A pretest loop (like while) checks the condition before each iteration. If the condition is initially false, the body never executes.",
  },
  {
    id: "l11-19",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "A posttest loop checks the condition:",
    options: [
      "Before the body executes",
      "After the body executes",
      "Never",
      "Only on errors",
    ],
    correctAnswer: 1,
    explanation:
      "A posttest loop (like do-while) executes the body first, then checks the condition. This guarantees at least one execution.",
  },
  {
    id: "l11-20",
    lectureId: "L11",
    type: QuestionType.TF,
    source: "Lecture 11",
    question:
      "A counter-controlled loop typically uses an integer loop variable.",
    correctAnswer: true,
    explanation:
      "TRUE. Counter-controlled loops (for loops) use an integer counter that increments through a range of values from initial to terminal value.",
  },
  {
    id: "l11-21",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "The 'for' loop is an example of:",
    options: [
      "Posttest loop",
      "Counter-controlled loop",
      "Infinite loop",
      "Unstructured loop",
    ],
    correctAnswer: 1,
    explanation:
      "The 'for' loop is typically a counter-controlled loop: it initializes a counter, tests a condition, and updates the counter each iteration.",
  },
  {
    id: "l11-22",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "The 'while' loop is an example of:",
    options: [
      "Posttest loop",
      "Pretest loop",
      "Counter loop only",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "The 'while' loop is a pretest loop - it evaluates the condition before each iteration. If condition is false initially, the body never executes.",
  },
  {
    id: "l11-23",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "The 'do-while' loop is an example of:",
    options: [
      "Pretest loop",
      "Posttest loop",
      "No loop at all",
      "Selection statement",
    ],
    correctAnswer: 1,
    explanation:
      "The 'do-while' loop is a posttest loop - it executes the body first, then tests the condition. The body always executes at least once.",
  },
  {
    id: "l11-24",
    lectureId: "L11",
    type: QuestionType.TF,
    source: "Lecture 11",
    question: "Guarded commands were proposed by Dijkstra.",
    correctAnswer: true,
    explanation:
      "TRUE. Edsger Dijkstra introduced guarded commands in 1975 for concurrent and nondeterministic programming, supporting formal program verification.",
  },
  {
    id: "l11-25",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "An iterator is a construct used to:",
    options: [
      "Declare variables",
      "Traverse elements of a data structure",
      "Delete files",
      "Compile code",
    ],
    correctAnswer: 1,
    explanation:
      "An iterator provides a way to access elements of a collection sequentially without exposing the underlying structure. Used in for-each loops.",
  },
  {
    id: "l11-26",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "Control expressions in modern languages should be:",
    options: ["Strings only", "Boolean type", "Any type", "Integers only"],
    correctAnswer: 1,
    explanation:
      "Modern languages like Java and C# require Boolean expressions in control statements for type safety and clarity, unlike C which allowed integers.",
  },
  {
    id: "l11-27",
    lectureId: "L11",
    type: QuestionType.TF,
    source: "Lecture 11",
    question:
      "In C89, there was no Boolean type, so arithmetic expressions were used for conditions.",
    correctAnswer: true,
    explanation:
      "TRUE. C89 had no Boolean type; zero was false, any non-zero value was true. C99 added _Bool and stdbool.h for explicit Boolean support.",
  },
  {
    id: "l11-28",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "In Perl, both then and else clauses must be:",
    options: [
      "Single statements",
      "Compound statements",
      "Empty",
      "On one line",
    ],
    correctAnswer: 1,
    explanation:
      "Perl requires compound statements (braces) for both then and else clauses, which eliminates the dangling else problem.",
  },
  {
    id: "l11-29",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "Python uses what to delimit blocks instead of braces?",
    options: ["Semicolons", "Indentation", "Parentheses", "Keywords only"],
    correctAnswer: 1,
    explanation:
      "Python uses indentation (whitespace) to delimit code blocks instead of braces. This enforces readable, consistent code structure.",
  },
  {
    id: "l11-30",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Lecture 11",
    question: "Logically-controlled loops continue based on:",
    options: [
      "A counter reaching a limit",
      "A Boolean condition",
      "User input only",
      "Random chance",
    ],
    correctAnswer: 1,
    explanation:
      "Logically-controlled loops (like while) continue based on a Boolean condition. Unlike counter-controlled loops, they don't have a predetermined number of iterations.",
  },

  // --- L12: Subprograms ---
  {
    id: "l12-1",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question:
      "Which parameter passing method copies the value to the formal parameter at call time?",
    options: [
      "Pass-by-Reference",
      "Pass-by-Value",
      "Pass-by-Name",
      "Pass-by-Result",
    ],
    correctAnswer: 1,
    explanation:
      "Pass-by-value copies the actual parameter's value to the formal parameter at call time. Changes to the formal parameter do not affect the actual parameter. This is an implementation model for 'in mode' parameters.",
  },
  {
    id: "l12-2",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "A coroutine is a subprogram that has multiple:",
    options: ["Parameters", "Return values", "Entry points", "Names"],
    correctAnswer: 2,
    explanation:
      "A coroutine has multiple entry points, allowing it to suspend and resume execution at various points. Unlike regular subprograms that run to completion, coroutines can yield control and be reactivated later.",
  },
  {
    id: "l12-3",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question:
      "Which local variables retain their values between subprogram calls?",
    options: ["Stack-dynamic", "Static", "Heap-dynamic", "Transient"],
    correctAnswer: 1,
    explanation:
      "Static local variables are bound to storage before execution begins and retain their values between subprogram calls. Unlike stack-dynamic locals, they are not created/destroyed with each call.",
  },
  {
    id: "l12-4",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: 'What is an "Activation Record"?',
    options: [
      "The format/layout of the non-code part of an executing subprogram",
      "A record of all errors",
      "The list of global variables",
      "The source code of the function",
    ],
    correctAnswer: 0,
    explanation:
      "An activation record (also called stack frame) is the format/layout of the non-code part of an executing subprogram. It typically contains local variables, parameters, return address, and dynamic link.",
  },
  {
    id: "l12-5",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question:
      "Which parameter passing mode is an implementation model for in-out parameters?",
    options: [
      "Pass-by-Value",
      "Pass-by-Result",
      "Pass-by-Value-Result",
      "Pass-by-Name",
    ],
    correctAnswer: 2,
    explanation:
      "Pass-by-value-result (also called pass-by-copy) combines pass-by-value (copying in at call) and pass-by-result (copying out at return). It's an implementation model for in-out mode parameters.",
  },
  {
    id: "l12-6",
    lectureId: "L12",
    type: QuestionType.TF,
    source: "Lecture 12",
    question: "A generic subprogram takes types as parameters.",
    correctAnswer: true,
    explanation:
      "Generic subprograms (like C++ templates or Java generics) take types as parameters, allowing the same code to work with different types. This is called parametric polymorphism.",
  },
  {
    id: "l12-7",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "Polymorphism in subprograms usually refers to:",
    options: [
      "The ability to take parameters of different types",
      "The ability to run on different OS",
      "The ability to have multiple names",
      "The ability to return multiple values",
    ],
    correctAnswer: 0,
    explanation:
      "Polymorphism allows a subprogram to accept parameters of different types on different activations. This includes ad-hoc polymorphism (overloading), subtype polymorphism (inheritance), and parametric polymorphism (generics).",
  },
  {
    id: "l12-8",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "Subprograms support which type of abstraction?",
    options: [
      "Data abstraction",
      "Process abstraction",
      "Memory abstraction",
      "File abstraction",
    ],
    correctAnswer: 1,
    explanation:
      "Subprograms provide process abstraction - a way to specify a computation without the implementation details being visible to the caller. The caller only needs to know what the subprogram does, not how.",
  },
  {
    id: "l12-9",
    lectureId: "L12",
    type: QuestionType.TF,
    source: "Lecture 12",
    question: "Most subprograms have a single entry point.",
    correctAnswer: true,
    explanation:
      "Most subprograms have a single entry point - execution begins at the first statement and proceeds sequentially. Coroutines are an exception, having multiple entry points for suspend/resume.",
  },
  {
    id: "l12-10",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "When a subprogram is called, the caller:",
    options: [
      "Continues executing",
      "Is suspended",
      "Is terminated",
      "Runs in parallel",
    ],
    correctAnswer: 1,
    explanation:
      "In traditional subprogram calls, the caller's execution is suspended until the called subprogram completes and returns control. The call semantics involve saving the caller's state and transferring control.",
  },
  {
    id: "l12-11",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "Control always returns to:",
    options: [
      "The operating system",
      "The caller",
      "The beginning of the program",
      "A random location",
    ],
    correctAnswer: 1,
    explanation:
      "Control always returns to the caller after a subprogram completes execution. The return address is stored in the activation record to enable this.",
  },
  {
    id: "l12-12",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "The two main kinds of subprograms are:",
    options: [
      "Functions and variables",
      "Procedures and functions",
      "Classes and objects",
      "Arrays and lists",
    ],
    correctAnswer: 1,
    explanation:
      "The two fundamental kinds of subprograms are procedures and functions. Procedures perform actions but don't return values; functions are modeled after mathematical functions and produce return values.",
  },
  {
    id: "l12-13",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "Procedures:",
    options: [
      "Always return a value",
      "Perform actions but do not return values",
      "Cannot have parameters",
      "Are the same as variables",
    ],
    correctAnswer: 1,
    explanation:
      "Procedures are subprograms that perform actions (side effects) but do not return values. They are called as statements rather than used in expressions. Functions, by contrast, return values.",
  },
  {
    id: "l12-14",
    lectureId: "L12",
    type: QuestionType.TF,
    source: "Lecture 12",
    question:
      "Functions return a value and are modeled after mathematical functions.",
    correctAnswer: true,
    explanation:
      "Functions are designed to produce results (return values) and are modeled after mathematical functions. Unlike procedures, they can be used in expressions where their return value is needed.",
  },
  {
    id: "l12-15",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "A subprogram definition includes:",
    options: [
      "Only the name",
      "The interface and the body (actions)",
      "Only parameters",
      "Only return type",
    ],
    correctAnswer: 1,
    explanation:
      "A subprogram definition includes both the interface (header with name, parameters, return type) and the body (the actual code/actions). The definition provides the complete implementation.",
  },
  {
    id: "l12-16",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "A subprogram declaration provides:",
    options: [
      "The full implementation",
      "Parameter types and return type, but no body",
      "Only the name",
      "Memory allocation",
    ],
    correctAnswer: 1,
    explanation:
      "A subprogram declaration (also called a prototype in C/C++) provides the interface information (parameter types and return type) but not the body. It allows the subprogram to be called before its definition.",
  },
  {
    id: "l12-17",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "In C/C++, subprogram declarations are called:",
    options: [
      "Function definitions",
      "Function prototypes",
      "Function calls",
      "Function pointers",
    ],
    correctAnswer: 1,
    explanation:
      "In C/C++, subprogram declarations are called function prototypes. They provide the name, parameter types, and return type but not the body. Prototypes allow forward references and separate compilation.",
  },
  {
    id: "l12-18",
    lectureId: "L12",
    type: QuestionType.TF,
    source: "Lecture 12",
    question: "Pass-by-value transmits the value itself to the subprogram.",
    correctAnswer: true,
    explanation:
      "Pass-by-value transmits a copy of the actual parameter's value to the formal parameter. Changes to the formal parameter do not affect the actual parameter since only a copy was passed.",
  },
  {
    id: "l12-19",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "Pass-by-reference transmits:",
    options: [
      "A copy of the value",
      "An access path (address) to the variable",
      "The variable name",
      "Nothing",
    ],
    correctAnswer: 1,
    explanation:
      "Pass-by-reference transmits an access path (memory address) to the actual parameter. Changes to the formal parameter affect the actual parameter directly since they share the same memory location.",
  },
  {
    id: "l12-20",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "Pass-by-value-result is an implementation model for:",
    options: [
      "In parameters",
      "In-out parameters",
      "Out parameters",
      "Constant parameters",
    ],
    correctAnswer: 1,
    explanation:
      "Pass-by-value-result is an implementation model for in-out parameters. It copies the value in at call time (in mode) and copies it back out at return time (out mode), hence 'in-out'.",
  },
  {
    id: "l12-21",
    lectureId: "L12",
    type: QuestionType.TF,
    source: "Lecture 12",
    question: "A generic subprogram takes types as parameters.",
    correctAnswer: true,
    explanation:
      "Generic subprograms (templates in C++, generics in Java) take types as parameters, enabling the same code to work with different types. This is parametric polymorphism.",
  },
  {
    id: "l12-22",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "An activation record contains:",
    options: [
      "Only the return address",
      "The format/layout of the non-code part of an executing subprogram",
      "Only global variables",
      "The source code",
    ],
    correctAnswer: 1,
    explanation:
      "An activation record contains the format/layout of the non-code part of an executing subprogram: local variables, parameters, return address, dynamic link, and temporary storage for expression evaluation.",
  },
  {
    id: "l12-23",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "Static local variables:",
    options: [
      "Lose their values between calls",
      "Retain their values between subprogram calls",
      "Cannot be accessed",
      "Are always global",
    ],
    correctAnswer: 1,
    explanation:
      "Static local variables retain their values between subprogram calls because they are allocated in static memory before execution begins, not on the stack. They persist throughout program execution.",
  },
  {
    id: "l12-24",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "A coroutine has:",
    options: [
      "One entry point",
      "Multiple entry points",
      "No entry points",
      "Only one parameter",
    ],
    correctAnswer: 1,
    explanation:
      "A coroutine has multiple entry points, allowing it to suspend execution and resume from where it left off. This differs from regular subprograms which always start from the beginning.",
  },
  {
    id: "l12-25",
    lectureId: "L12",
    type: QuestionType.TF,
    source: "Lecture 12",
    question:
      "Babbage's Analytical Engine in the 1840s supported instruction reuse.",
    correctAnswer: true,
    explanation:
      "The concept of subprograms/procedures dates back to Babbage's Analytical Engine in the 1840s which supported instruction reuse. This historical foundation led to modern subprogram concepts.",
  },
  {
    id: "l12-26",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "Methods in object-oriented languages are:",
    options: [
      "Unrelated to subprograms",
      "Closely related to subprograms but associated with classes/objects",
      "The same as variables",
      "Only for data storage",
    ],
    correctAnswer: 1,
    explanation:
      "Methods in OOP languages are closely related to subprograms but are associated with classes/objects. They have an implicit 'this' or 'self' parameter and can access the object's state.",
  },
  {
    id: "l12-27",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "In Java, all parameters are passed by:",
    options: [
      "Reference for all types",
      "Value, but object parameters are passed by reference",
      "Name",
      "Result",
    ],
    correctAnswer: 1,
    explanation:
      "In Java, primitives are passed by value (copy), while object references are also passed by value - but since the value is a reference, changes to the object are visible to the caller (effectively pass-by-reference for objects).",
  },
  {
    id: "l12-28",
    lectureId: "L12",
    type: QuestionType.TF,
    source: "Lecture 12",
    question:
      "Subprograms improve code readability and reduce code duplication.",
    correctAnswer: true,
    explanation:
      "Subprograms improve code readability by providing named abstractions for computations. They reduce code duplication (DRY principle) by allowing the same code to be called from multiple places.",
  },
  {
    id: "l12-29",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question: "The header of a subprogram includes:",
    options: [
      "Only the name",
      "Name, type (procedure/function), and formal parameters",
      "Only the body",
      "Only comments",
    ],
    correctAnswer: 1,
    explanation:
      "A subprogram header includes the name, the kind/type (procedure or function), and the formal parameters. For functions, it also includes the return type. This forms the subprogram's interface.",
  },
  {
    id: "l12-30",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Lecture 12",
    question:
      "What is returned during subprogram return semantics in simple implementations?",
    options: [
      "Nothing",
      "Control transfers back to caller and pass-by-value-result parameters are moved",
      "Only memory",
      "The entire program state",
    ],
    correctAnswer: 1,
    explanation:
      "Return semantics include: transferring control back to the caller, copying out pass-by-value-result parameters, and returning any function value. The activation record is popped from the stack.",
  },

  // --- Additional Practice Questions to reach 100+ count ---
  {
    id: "gen-1",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "Which of the following is a mechanism for static binding?",
    options: [
      "Explicit declaration",
      "Assignment statement",
      "Input statement",
      "Parameter passing",
    ],
    correctAnswer: 0,
  },
  {
    id: "gen-2",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "Type inference is an example of:",
    options: [
      "Implicit declaration",
      "Explicit declaration",
      "Dynamic scoping",
      "Exception handling",
    ],
    correctAnswer: 0,
  },
  {
    id: "gen-3",
    lectureId: "L6",
    type: QuestionType.TF,
    source: "Practice",
    question:
      "A named constant is a variable that is bound to a value only when it is bound to storage.",
    correctAnswer: true,
  },
  {
    id: "gen-4",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "Which language was the first to implement exception handling?",
    options: ["PL/I", "C", "Fortran", "Basic"],
    correctAnswer: 0,
  },
  {
    id: "gen-5",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Practice",
    question: 'What is a "mixed-mode" expression?',
    options: [
      "An expression with operands of different types",
      "An expression with both + and -",
      "An expression with integers only",
      "An expression in two languages",
    ],
    correctAnswer: 0,
  },
  {
    id: "gen-6",
    lectureId: "L7",
    type: QuestionType.TF,
    source: "Practice",
    question: "Coercion is an explicit type conversion.",
    correctAnswer: false,
    explanation: "Coercion is implicit; Casting is explicit.",
  },
  {
    id: "gen-7",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Practice",
    question: 'An "iterator" is a construct used to:',
    options: [
      "Traverse the elements of a data structure",
      "Repeat a calculation",
      "Calculate factorials",
      "Define a function",
    ],
    correctAnswer: 0,
  },
  {
    id: "gen-8",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "Pass-by-reference simulates parameter passing by transmitting:",
    options: [
      "An access path (address)",
      "The value itself",
      "The name of the variable",
      "The type of the variable",
    ],
    correctAnswer: 0,
  },
  {
    id: "gen-9",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "A syntax analyzer is also known as a:",
    options: ["Parser", "Lexer", "Linker", "Loader"],
    correctAnswer: 0,
  },
  {
    id: "gen-10",
    lectureId: "L3",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "A lexical analyzer matches:",
    options: [
      "Pattern of characters to form tokens",
      "Parse trees to code",
      "Types to variables",
      "Input to Output",
    ],
    correctAnswer: 0,
  },
  {
    id: "gen-11",
    lectureId: "L2",
    type: QuestionType.MCQ,
    source: "Practice",
    question:
      "Which language is known for its dominance in systems programming (UNIX)?",
    options: ["C", "Pascal", "Ada", "Lisp"],
    correctAnswer: 0,
  },
  {
    id: "gen-12",
    lectureId: "L1",
    type: QuestionType.TF,
    source: "Practice",
    question:
      "Aliasing is considered a dangerous feature because it decreases reliability.",
    correctAnswer: true,
  },
  {
    id: "gen-13",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "In C++, default parameters must appear:",
    options: [
      "At the end of the parameter list",
      "At the beginning",
      "Anywhere",
      "In a separate file",
    ],
    correctAnswer: 0,
  },
  {
    id: "gen-14",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "Strong typing generally implies that:",
    options: [
      "Type errors are always detected",
      "Variables have long names",
      "Only integers are used",
      "The language is fast",
    ],
    correctAnswer: 0,
  },
  {
    id: "gen-15",
    lectureId: "L6",
    type: QuestionType.MCQ,
    source: "Practice",
    question:
      'The scope of a variable in a "let" expression in functional languages is:',
    options: ["Local to the let expression", "Global", "Undefined", "Dynamic"],
    correctAnswer: 0,
  },
  {
    id: "gen-16",
    lectureId: "L11",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "Which is NOT a valid loop mechanism?",
    options: [
      "Goto-controlled",
      "Counter-controlled",
      "Logically-controlled",
      "User-controlled",
    ],
    correctAnswer: 3,
  },
  {
    id: "gen-17",
    lectureId: "L7",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "What is the precedence of the assignment operator usually?",
    options: [
      "Very low",
      "Very high",
      "Same as addition",
      "Same as multiplication",
    ],
    correctAnswer: 0,
  },
  {
    id: "gen-18",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "Deep binding binds the environment at the time of:",
    options: [
      "Procedure definition",
      "Procedure call",
      "Program start",
      "Compilation",
    ],
    correctAnswer: 0,
  },
  {
    id: "gen-19",
    lectureId: "L12",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "Shallow binding binds the environment at the time of:",
    options: [
      "Procedure call",
      "Procedure definition",
      "Program start",
      "Compilation",
    ],
    correctAnswer: 0,
  },
  {
    id: "gen-20",
    lectureId: "L5",
    type: QuestionType.MCQ,
    source: "Practice",
    question: "Which of the following is a union type?",
    options: [
      "A type that can store different types of values at different times",
      "A type that stores multiple values at once",
      "A pointer type",
      "A generic type",
    ],
    correctAnswer: 0,
  },
];
