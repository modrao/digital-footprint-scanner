import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';

interface RiskBadgeProps {
  level: 'safe' | 'medium' | 'high';
}

export function RiskBadge({ level }: RiskBadgeProps) {
  const configs = {
    safe: {
      label: 'Safe',
      color: 'bg-safe/10 text-safe border-safe/20',
      icon: ShieldCheck
    },
    medium: {
      label: 'Medium Risk',
      color: 'bg-medium/10 text-medium border-medium/20',
      icon: ShieldAlert
    },
    high: {
      label: 'High Risk',
      color: 'bg-high/10 text-high border-high/20',
      icon: ShieldX
    }
  };

  const config = configs[level];
  const Icon = config.icon;

  return (
    <Badge 
      variant="outline" 
      className={cn("px-3 py-1 gap-1.5 font-mono text-[10px] uppercase tracking-wider rounded-full", config.color)}
    >
      <Icon className="h-3 w-3" />
      {config.label}
    </Badge>
  );
}
