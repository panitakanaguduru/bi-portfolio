import { ArrowRight, Download, Database, Code, RefreshCw, BarChart2, CheckCircle } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const pipeline = [
    { name: 'Data Sources', icon: Database, desc: 'CRM, LMS Exports, SQL DBs' },
    { name: 'Power Query', icon: RefreshCw, desc: 'ETL & Data Profiling' },
    { name: 'Semantic Model', icon: Database, desc: 'Star Schema Design' },
    { name: 'DAX Measures', icon: Code, desc: 'Time Intelligence & KPIs' },
    { name: 'Power BI Dashboard', icon: BarChart2, desc: 'Executive Analytics' },
    { name: 'Business Decisions', icon: CheckCircle, desc: 'Actionable Insights' }
  ];

  return (
    <section 
      id="home" 
      className="relative bg-navy-950 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-navy-800"
    >
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-teal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
              <span>Enterprise Analytics Specialist</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Business Intelligence Analyst Transforming Data into Actionable Business Decisions
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Power BI, DAX, SQL, Excel, Power Query, Power Automate, Microsoft 365, semantic modeling, reporting automation, data governance, and executive analytics.
            </p>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
              I am a Business Intelligence Analyst with four years of analytics, reporting, and business systems experience. I use Power BI, DAX, SQL, Python, Excel, Power Query, Power Automate, and Microsoft 365 to integrate data, modernize manual reporting, build interactive dashboards, automate workflows, improve data quality, and deliver actionable insights to technical and non-technical stakeholders.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <button
                onClick={() => handleScroll('projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-teal-500 text-white hover:bg-teal-600 shadow-md shadow-teal-500/10 cursor-pointer transition-colors"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <a
                href="/resume.pdf"
                download="Panita_Vaishnavi_Kanaguduru_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-navy-800 text-white hover:bg-navy-700 border border-navy-800 cursor-pointer transition-colors"
              >
                <Download className="h-4 w-4 text-teal-400" />
                Download Resume
              </a>
              
              <button
                onClick={() => handleScroll('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-transparent text-slate-350 hover:text-white hover:bg-white/5 border border-slate-700 hover:border-slate-500 cursor-pointer transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Pipeline Animation / Diagram Visual */}
          <div className="lg:col-span-5">
            <div className="bg-navy-900/60 border border-navy-800 rounded-2xl p-5 shadow-2xl backdrop-blur-sm relative">
              <div className="flex items-center justify-between pb-3 border-b border-navy-800 mb-4">
                <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider">Enterprise Analytics Pipeline</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              
              <div className="space-y-3">
                {pipeline.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="flex flex-col">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-950/60 border border-navy-800 hover:border-teal-500/30 transition-colors group">
                        <div className="h-8 w-8 rounded bg-navy-800 border border-navy-700 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-white leading-none mb-1">
                            {idx + 1}. {step.name}
                          </p>
                          <p className="text-[10px] text-slate-450 truncate">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                      {idx < pipeline.length - 1 && (
                        <div className="flex justify-center my-0.5">
                          <div className="w-0.5 h-3 bg-gradient-to-b from-teal-500 to-transparent opacity-60" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Performance & Experience Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-navy-800">
          
          <div className="bg-navy-900/40 border border-navy-800/80 rounded-xl p-4 sm:p-5">
            <p className="text-[10px] font-bold text-teal-450 uppercase tracking-widest mb-1.5">Focus</p>
            <p className="font-mono text-xl sm:text-2xl font-bold text-white">4 Years</p>
            <p className="text-[11px] text-slate-400 mt-1 leading-normal">
              Of professional analytics and business systems experience.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/80 rounded-xl p-4 sm:p-5">
            <p className="text-[10px] font-bold text-teal-450 uppercase tracking-widest mb-1.5">Scale</p>
            <p className="font-mono text-xl sm:text-2xl font-bold text-white">100K+ Records</p>
            <p className="text-[11px] text-slate-400 mt-1 leading-normal">
              Analyzed and modeled across complex databases.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/80 rounded-xl p-4 sm:p-5 relative group">
            <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-navy-800 px-2 py-0.5 rounded text-[8px] font-extrabold text-teal-400 border border-navy-700">
              SuperWorld Experience
            </div>
            <p className="text-[10px] font-bold text-teal-450 uppercase tracking-widest mb-1.5">Efficiency</p>
            <p className="font-mono text-xl sm:text-2xl font-bold text-white">40% Reduction</p>
            <p className="text-[11px] text-slate-400 mt-1 leading-normal">
              In manual reporting efforts via automation workflows.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/80 rounded-xl p-4 sm:p-5 relative">
            <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-navy-800 px-2 py-0.5 rounded text-[8px] font-extrabold text-teal-400 border border-navy-700">
              SuperWorld Experience
            </div>
            <p className="text-[10px] font-bold text-teal-450 uppercase tracking-widest mb-1.5">Data Quality</p>
            <p className="font-mono text-xl sm:text-2xl font-bold text-white">30% Improvement</p>
            <p className="text-[11px] text-slate-400 mt-1 leading-normal">
              In reporting accuracy through strict validation checks.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
