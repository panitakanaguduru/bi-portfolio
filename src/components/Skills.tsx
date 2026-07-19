import { Monitor, Database, Settings, Grid, Award } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Business Intelligence',
      icon: Monitor,
      skills: [
        'Power BI',
        'DAX',
        'Semantic Models',
        'KPI Dashboards',
        'Report Design',
        'Row-Level Security',
        'Power BI Service',
        'Scheduled Refresh'
      ]
    },
    {
      title: 'Data & Programming',
      icon: Database,
      skills: [
        'SQL',
        'Python',
        'R',
        'Excel',
        'pandas',
        'CTEs',
        'Window Functions',
        'Data Cleaning',
        'Statistical Analysis'
      ]
    },
    {
      title: 'Automation & Integration',
      icon: Settings,
      skills: [
        'Power Automate',
        'Power Query',
        'Microsoft Forms',
        'SharePoint',
        'ETL/ELT',
        'Data Pipelines',
        'Data Integration'
      ]
    },
    {
      title: 'Microsoft 365',
      icon: Grid,
      skills: [
        'Excel Pivot Tables',
        'XLOOKUP',
        'Advanced Formulas',
        'PowerPoint',
        'Teams',
        'SharePoint',
        'Microsoft Forms'
      ]
    },
    {
      title: 'Analytics Delivery',
      icon: Award,
      skills: [
        'KPI Definitions',
        'Data Governance',
        'Data Validation',
        'Executive Reporting',
        'Requirements Gathering',
        'Documentation',
        'AI-Assisted Analytics'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="border-l-4 border-navy-800 pl-4 mb-12">
          <p className="text-[10px] uppercase font-bold text-teal-500 tracking-wider">Capabilities</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">Technical Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx} 
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-350 hover:shadow-md transition-all flex flex-col"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 pb-3.5 border-b border-slate-200 mb-4">
                  <div className="h-8 w-8 rounded bg-navy-800 flex items-center justify-center text-teal-400 shrink-0">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-xs font-extrabold text-navy-950 leading-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 flex-grow">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-2.5 py-1.5 rounded-md text-[10px] font-bold bg-white text-slate-700 border border-slate-200 hover:border-teal-500/35 hover:text-teal-650 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
