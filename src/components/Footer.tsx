import { ArrowUp, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export default function Footer({ setActiveSection }: FooterProps) {
  const scrollToTop = () => {
    setActiveSection('home');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 py-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-navy-800 pb-8 mb-8">
          
          {/* Logo / Title */}
          <div className="text-center md:text-left">
            <p className="text-white font-extrabold text-sm tracking-tight">
              PANITA VAISHNAVI KANAGUDURU
            </p>
            <p className="text-[10px] text-teal-400 font-semibold uppercase tracking-wider mt-0.5">
              Business Intelligence & Analytics Portfolio
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:panitakanaguduru.18@gmail.com"
              className="h-8 w-8 rounded bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-teal-500/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            
            <a
              href="https://linkedin.com/in/panitak"
              target="_blank"
              rel="noreferrer"
              className="h-8 w-8 rounded bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-teal-500/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="h-8 px-3 rounded bg-navy-900 border border-navy-800 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white hover:border-teal-500/50 transition-colors cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 text-[10px] text-slate-500 leading-relaxed">
          <div className="max-w-3xl">
            <span className="font-extrabold text-slate-400 block mb-1">Privacy & Data Integrity Note:</span>
            All projects, dashboards, data visualizations, workflows, database schemas, and metrics illustrated in this portfolio are simulated demonstration models. No proprietary, confidential, or production datasets from current or past employers (including UCF or private entities) are used. 
          </div>
          
          <div className="lg:text-right shrink-0">
            <p>© {new Date().getFullYear()} Panita Vaishnavi Kanaguduru.</p>
            <p className="mt-0.5 text-[9px]">All Rights Reserved. Business Intelligence and Analytics Portfolio.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
