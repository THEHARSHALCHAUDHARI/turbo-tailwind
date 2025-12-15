"use client";

import { useEffect } from "react";

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-6 selection:bg-destructive/20 selection:text-destructive">
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </div>

      <div className="relative z-10 max-w-md w-full text-center space-y-8">
        
        <div className="relative flex justify-center">
          <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center border border-destructive/20 shadow-[0_0_30px_rgba(var(--destructive),0.2)]">
            <div className="text-destructive animate-bounce">
              <AlertIcon />
            </div>
          </div>

          <div className="absolute inset-0 flex justify-center items-center opacity-30 blur-sm scale-110">
             <div className="w-24 h-24 bg-transparent border border-destructive/40 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-serif font-bold text-destructive tracking-tight">
            Spectral Dissonance
          </h1>
          <p className="text-muted-foreground font-mono text-sm leading-relaxed border-l-2 border-destructive/30 pl-4 py-1 mx-8 text-left bg-card/50 rounded-r-md">
            <span className="text-destructive font-bold block mb-1">ERR_CONNECTION_SEVERED:</span>
            The link to the void has been interrupted. The system encountered an unexpected anomaly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={reset}
            className="group relative flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-destructive text-destructive-foreground font-semibold shadow-lg hover:bg-destructive/90 hover:shadow-destructive/25 transition-all duration-300"
          >
            <RefreshIcon />
            <span>Re-initialize Sequence</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
          </button>

          <a
            href="/"
            className="flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-all duration-300"
          >
            <HomeIcon />
            <span>Return to Base</span>
          </a>
        </div>
        
        {error.digest && (
          <div className="pt-8 opacity-50 hover:opacity-100 transition-opacity">
            <p className="text-xs font-mono text-muted-foreground">
              Trace Signature: {error.digest}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}