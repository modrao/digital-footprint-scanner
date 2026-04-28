'use client';

interface ScoreMeterProps {
  score: number;
  riskLevel: 'safe' | 'medium' | 'high';
}

export function ScoreMeter({ score, riskLevel }: ScoreMeterProps) {
  const colorMap = {
    safe: '#22c55e',
    medium: '#f59e0b',
    high: '#ef4444',
  };

  const color = colorMap[riskLevel];
  const percentage = Math.min(score, 100);

  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
            Risk Score
          </p>
          <span
            className="font-mono text-7xl font-bold leading-none tabular-nums"
            style={{ color }}
          >
            {score}
          </span>
          <span className="font-mono text-2xl text-muted-foreground ml-1">/100</span>
        </div>
      </div>

      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-none"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>

      <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
        <span>0 — Safe</span>
        <span>50 — Medium</span>
        <span>100 — High</span>
      </div>
    </div>
  );
}
