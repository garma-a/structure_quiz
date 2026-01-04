import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-emerald-600 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">PL Master Quiz</h1>
          <nav className="text-sm font-medium">
            <span className="opacity-90">Prepare for Finals</span>
          </nav>
        </div>
      </header>
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        {children}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm">
        <p>Based on University Lecture Slides & Exams</p>
      </footer>
    </div>
  );
};