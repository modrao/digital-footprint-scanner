interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 mb-12">
      {badge && (
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)]">
          <div className="h-1 w-1 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/70">
            {badge.replace('// ', '')}
          </span>
        </div>
      )}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
        {title}
      </h1>
      {description && (
        <p className="max-w-[600px] text-lg text-muted-foreground font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
