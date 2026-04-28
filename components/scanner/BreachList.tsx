import { BreachEntry } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Database, Calendar, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreachListProps {
  breaches: BreachEntry[];
}

export function BreachList({ breaches }: BreachListProps) {
  if (breaches.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground text-sm">
        No specific breach records found for this domain.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {breaches.map((breach) => {
        const hasPasswords = breach.DataClasses?.includes('Passwords');
        return (
          <div
            key={breach.Name}
            className={cn(
              "flex flex-col gap-3 p-4 rounded-md border transition-colors",
              hasPasswords 
                ? "border-high/20 bg-high/5" 
                : "border-border bg-secondary/30"
            )}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <Database className="h-4 w-4 text-muted-foreground shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white truncate">{breach.Title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    {breach.Domain && (
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{breach.Domain}</p>
                    )}
                    <div className="flex gap-1">
                      {breach.sources.map(src => (
                        <Badge key={src} variant="outline" className="text-[8px] h-3.5 px-1 bg-white/5 border-white/10 text-white/50">
                          {src}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {breach.PwnCount && (
                  <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground mr-2">
                    <Users className="h-3 w-3" />
                    {breach.PwnCount.toLocaleString()}
                  </span>
                )}
                {breach.BreachDate && (
                  <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground mr-2">
                    <Calendar className="h-3 w-3" />
                    {breach.BreachDate}
                  </span>
                )}
                {breach.DataClasses?.slice(0, 3).map((dc) => (
                  <Badge
                    key={dc}
                    variant="outline"
                    className={`text-[9px] font-mono uppercase tracking-wide px-1.5 py-0 rounded-sm ${
                      dc === 'Passwords'
                        ? 'border-high/50 text-high bg-high/20'
                        : 'border-border text-muted-foreground'
                    }`}
                  >
                    {dc}
                  </Badge>
                ))}
              </div>
            </div>
            
            {breach.Description && (
              <p 
                className="text-xs text-muted-foreground leading-relaxed line-clamp-2 hover:line-clamp-none transition-all cursor-help"
                dangerouslySetInnerHTML={{ __html: breach.Description }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
