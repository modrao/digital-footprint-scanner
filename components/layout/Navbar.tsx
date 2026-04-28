import Link from 'next/link';
import { Shield, Search, Github } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-black/50 backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 max-w-7xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex h-6 w-6 items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
              <Search className="absolute h-3 w-3 text-white" />
            </div>
            <span className="font-mono text-sm font-bold tracking-tight text-white uppercase">footprint.sh</span>
          </Link>
        </div>
        
        <nav className="flex items-center gap-6">
          <Link href="/about" className="text-xs font-medium text-secondary-foreground hover:text-white transition-colors">
            About
          </Link>
          <Link href="/privacy" className="text-xs font-medium text-secondary-foreground hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/donate" className="text-xs font-medium text-secondary-foreground hover:text-white transition-colors">
            Donate
          </Link>
          <a 
            href="https://github.com/modrao/digital-footprint-scanner" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
