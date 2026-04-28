export interface BreachEntry {
  Name: string;
  Title: string;
  Domain: string;
  BreachDate: string;
  AddedDate: string;
  ModifiedDate: string;
  PwnCount: number;
  Description: string;
  LogoPath: string;
  DataClasses: string[];
  IsVerified: boolean;
  IsFabricated: boolean;
  IsSensitive: boolean;
  IsRetired: boolean;
  IsSpamList: boolean;
  IsMalware: boolean;
  sources: ('HIBP' | 'XposedOrNot')[];
}

export interface ScoreBreakdown {
  label: string;
  points: number;
  description: string;
  triggered: boolean;
}

export interface ScanResult {
  email: string;
  score: number;
  riskLevel: 'safe' | 'medium' | 'high';
  breakdown: ScoreBreakdown[];
  breachCount: number;
  breaches: BreachEntry[];
  sitesFound: number;
  domainFlags: string[];
  scannedAt: string;
}
