"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body className="bg-[#0A0A0A] text-[#ede4d4] font-sans min-h-screen flex flex-col items-center justify-center text-center p-4">
        
        <div className="space-y-6 max-w-lg">
          
          <div className="w-20 h-20 bg-red-900/20 rounded-full flex items-center justify-center mx-auto border border-red-900/50 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b5766a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
              <line x1="12" y1="2" x2="12" y2="12"></line>
            </svg>
          </div>

          <div>
            <h1 className="text-4xl font-serif font-bold text-[#b5766a] mb-2">
              Critical Core Failure
            </h1>
            <p className="text-[#a8a096] font-mono text-sm">
              The layout structure has destabilized. Manual reboot required.
            </p>
          </div>

          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[#8a9f7b] text-[#2a2521] font-bold rounded-full hover:bg-[#9db18c] transition-colors"
          >
            Reboot System
          </button>
        </div>

      </body>
    </html>
  );
}