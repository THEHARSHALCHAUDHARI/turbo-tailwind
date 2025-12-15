"use client";

import { useState, useEffect, useRef } from "react";
import LoadingScreen from "./loading";

// --- Icons (SVGs) ---

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 15.13V19z"></path>
  </svg>
);

const ShadcnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  
  // Reference for the glow element
  const glowRef = useRef<HTMLDivElement>(null);

  // 1. Timer Effect: Turns off loading after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  // 2. Theme & Mouse Effect
  useEffect(() => {
    // Theme Handling
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Mouse Tracking Logic
    // We only attach this listener if NOT loading, to save performance
    if (!isLoading) {
      const handleMouseMove = (e: MouseEvent) => {
        if (glowRef.current) {
          const x = e.clientX;
          const y = e.clientY;
          glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isDark, isLoading]); // Re-run when loading finishes so mouse tracking starts

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // --- CRITICAL FIX: Render LoadingScreen if state is true ---
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen transition-colors duration-300 bg-background text-foreground flex flex-col font-sans selection:bg-primary/30 selection:text-primary-foreground overflow-hidden">
      
      {/* --- MOUSE FOLLOWER GLOW LAYER --- */}
      <div 
        className="fixed top-0 left-0 z-0 pointer-events-none"
        style={{ transform: 'translate(0vw, 0vh)' }}
      >
        <div 
          ref={glowRef} 
          className="absolute top-0 left-0 w-125 h-125 bg-primary/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out will-change-transform"
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">

        {/* Navbar */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-popover/80 backdrop-blur-md text-popover-foreground rounded-full px-6 py-3 flex items-center justify-between shadow-lg border border-border z-50">
          
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">shadcn/ui</a>
            <a href="https://github.com/THEHARSHALCHAUDHARI" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/theharshalchaudhari/" target="_blank" rel="noopener noreferrer" className="hidden sm:block hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://hashnode.com/@harshalchaudhari" target="_blank" rel="noopener noreferrer" className="hidden sm:block hover:text-primary transition-colors">Hashnode</a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle Theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a 
              href="https://github.com/THEHARSHALCHAUDHARI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
            >
              Star on GitHub
            </a>
          </div>
        </nav>

        {/* Main Hero Content */}
        <main className="grow flex flex-col items-center justify-center p-8 mt-24">
          
          <div className="mb-12 text-center relative group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 blur-2xl rounded-full -z-10"></div>
            
            <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground font-serif">
               Wraith Repo
            </h1>
            <p className="mt-4 text-muted-foreground text-lg italic">
              Where ideas become structure.
            </p>
          </div>

          <ol className="text-left mb-12 space-y-3 font-mono text-sm md:text-base border-l-2 pl-6 py-2 border-primary/30 text-muted-foreground bg-card/30 backdrop-blur-sm rounded-r-lg p-4">
            <li className="flex items-center">
              <span className="mr-4 text-primary font-bold">1.</span>
              <span>
                Initialize spectral sequence: <code className="px-2 py-1 rounded mx-1 bg-muted text-foreground font-bold">app/page.tsx</code>
              </span>
            </li>
            <li className="flex items-center">
               <span className="mr-4 text-primary font-bold">2.</span>
               <span>Inject Tailwind styles and manifest instantly.</span>
            </li>
          </ol>

          <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto px-8">
            <a
              className="group w-full md:w-auto rounded-full h-12 px-8 font-semibold transition-all duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
              href="https://github.com/THEHARSHALCHAUDHARI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              My GitHub
            </a>
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto rounded-full border border-border h-12 px-8 font-semibold transition-all duration-200 flex items-center justify-center gap-3 backdrop-blur-sm bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <ShadcnIcon />
              shadcn/ui
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}