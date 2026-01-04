import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const storageKey = "pl-theme";

  // Initialize theme from saved value or OS preference
  useEffect(() => {
    const saved = localStorage.getItem(storageKey) as Theme | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
      return;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem(storageKey, next);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <header className="bg-emerald-600 dark:bg-emerald-700 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">PL Master Quiz</h1>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="opacity-90">Prepare for Finals</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
            >
              <span className="text-xs font-semibold uppercase">
                {theme === "dark" ? "Dark" : "Light"}
              </span>
              <span aria-hidden="true">{theme === "dark" ? "🌙" : "☀️"}</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        {children}
      </main>
      <footer className="bg-slate-900 text-slate-400 dark:bg-slate-950 dark:text-slate-500 py-6 text-center text-sm">
        <p>Based on University Lecture Slides & Exams</p>
      </footer>
    </div>
  );
};
