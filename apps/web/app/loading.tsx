export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background z-50">
      
      {/* Container for the spectral animation */}
      <div className="relative flex items-center justify-center mb-8">
        
        {/* Outer Ring - Slow rotation */}
        <div className="absolute w-32 h-32 border-2 border-muted/20 border-t-primary rounded-full animate-[spin_3s_linear_infinite]" />
        
        {/* Middle Ring - Medium rotation, reverse direction */}
        <div className="absolute w-24 h-24 border-2 border-muted/20 border-b-primary/80 rounded-full animate-[spin_2s_linear_infinite_reverse]" />
        
        {/* Inner Core - Fast pulse & spin */}
        <div className="relative w-16 h-16 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/40 shadow-[0_0_30px_rgba(var(--primary),0.3)] animate-pulse">
          <div className="w-8 h-8 bg-primary rounded-full animate-ping opacity-20"></div>
          <div className="absolute w-2 h-2 bg-primary rounded-full"></div>
        </div>
        
      </div>

      {/* Loading Text with "typing" effect simulation via standard animate-pulse */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-serif font-bold text-foreground tracking-tight">
          Wraith<span className="text-primary">Repo</span>
        </h2>
        
        <div className="flex items-center gap-1 text-sm font-mono text-muted-foreground">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
          <span className="ml-2">Initializing sequence...</span>
        </div>
      </div>
      
    </div>
  );
}