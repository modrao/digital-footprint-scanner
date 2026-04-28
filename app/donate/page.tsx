'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Copy, Check, Coffee } from 'lucide-react';
import { useState } from 'react';

export default function DonatePage() {
  const [copied, setCopied] = useState(false);
  const bkashNumber = '01721873956';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bkashNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl flex flex-col items-center">
      <PageHeader 
        badge="// support"
        title="Support the Developer" 
        description="This tool is free and open source, built and maintained independently."
      />

      <Card className="w-full max-w-md p-8 bg-card border-border mt-8 flex flex-col items-center text-center">
        <div className="h-16 w-16 rounded-full bg-high/10 flex items-center justify-center mb-6">
          <Heart className="h-8 w-8 text-high fill-high/20" />
        </div>
        
        <p className="text-muted-foreground leading-relaxed mb-8">
          If this tool helped you secure your digital presence, consider buying me a coffee. Your support helps keep the server running and the code updated.
        </p>

        <div className="w-full space-y-4">
          <div className="p-4 rounded-md bg-secondary/50 border border-border flex flex-col items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Send via bKash (Personal)
            </span>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-mono font-bold text-white tracking-tighter">
                {bkashNumber}
              </span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={copyToClipboard}
                className="h-8 w-8 text-muted-foreground hover:text-white"
              >
                {copied ? <Check className="h-4 w-4 text-safe" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground italic">
            Any amount is appreciated. Thank you.
          </p>
        </div>
      </Card>

      <div className="mt-12 flex items-center gap-2 text-muted-foreground">
        <Coffee className="h-4 w-4" />
        <span className="text-sm">Built with passion by Shahriyar Fahim</span>
      </div>
    </div>
  );
}
