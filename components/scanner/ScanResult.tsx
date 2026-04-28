'use client';

import { ScanResult } from '@/lib/types';
import { RiskBadge } from './RiskBadge';
import { ScoreMeter } from './ScoreMeter';
import { BreachList } from './BreachList';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScanResultProps {
  result: ScanResult;
  onReset: () => void;
}

export function ScanResult({ result, onReset }: ScanResultProps) {
  return (
    <div className="w-full space-y-6 border border-border rounded-md bg-card p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <RiskBadge level={result.riskLevel} />
        </div>
        <span className="font-mono text-sm text-muted-foreground truncate">{result.email}</span>
      </div>

      <Separator className="bg-border" />

      {/* Score Meter */}
      <ScoreMeter score={result.score} riskLevel={result.riskLevel} />

      <Separator className="bg-border" />

      {/* Score Breakdown */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-1 bg-muted-foreground rounded-full" />
          <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Score Breakdown
          </h2>
        </div>
        <div className="space-y-2">
          {result.breakdown.map((item) => (
            <div
              key={item.label}
              className={cn(
                'flex items-start justify-between gap-4 p-3 rounded-md border transition-all',
                item.triggered
                  ? 'border-white/10 bg-white/5'
                  : 'border-transparent bg-transparent opacity-30'
              )}
            >
              <div className="flex items-start gap-2.5 min-w-0">
                {item.triggered ? (
                  <div className="h-4 w-4 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                ) : (
                  <div className="h-4 w-4 rounded-full border border-white/10 shrink-0 mt-0.5" />
                )}
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{item.description}</p>
                </div>
              </div>
              <span
                className={cn(
                  'font-mono text-sm font-bold shrink-0',
                  item.triggered ? 'text-white' : 'text-muted-foreground'
                )}
              >
                {item.triggered ? `+${item.points}` : '+0'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-white/5" />

      {/* Breach List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 bg-muted-foreground rounded-full" />
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {result.breachCount > 0
                ? `${result.breachCount} records detected`
                : 'Clear background'}
            </h2>
          </div>
          {result.breachCount > 0 && (
            <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
              Aggregated from HIBP & XON
            </span>
          )}
        </div>

        {result.breachCount > 0 ? (
          <>
            <p className="text-[11px] text-muted-foreground mb-4 leading-relaxed">
              Matched against real-time HIBP & XON records. These databases contain information from large-scale service leaks.
            </p>
            <BreachList breaches={result.breaches} />
          </>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            No specific records found in the current public database for this domain. 
          </p>
        )}

        <div className="mt-6 p-3 rounded-md bg-white/[0.02] border border-white/5">
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            <strong className="text-white/60">Disclaimer:</strong> This is a heuristic scan for educational purposes. While we aggregate real data, matching is domain-based and may not reflect your specific account status. Results should not be used as definitive security advice.
          </p>
        </div>
      </div>

      <Separator className="bg-white/5" />

      {/* Footer actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 bg-muted-foreground rounded-full" />
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            Scan complete: {new Date(result.scannedAt).toLocaleTimeString()}
          </p>
        </div>
        <Button
          onClick={onReset}
          variant="outline"
          size="sm"
          className="gap-2 border-white/10 bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-[10px] font-mono uppercase tracking-widest"
        >
          <RotateCcw className="h-3 w-3" />
          Reset Scanner
        </Button>
      </div>
    </div>
  );
}

