import Link from 'next/link';
import { Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-border bg-black py-6 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-muted-foreground">
          <div>
            © {currentYear} Digital Footprint Scanner. Open Source.
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a 
              href="https://github.com/modrao/digital-footprint-scanner"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border hover:border-border-hover transition-colors group"
            >
              <Github className="h-4 w-4 text-white" />
              <span className="text-xs font-medium text-white">Open Source</span>
            </a>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/donate" className="hover:text-white transition-colors">
                Donate
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-center text-[11px] text-muted-foreground/60">
          Developed by Shahriyar Fahim
        </div>
      </div>
    </footer>
  );
}
