import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'SuperWorld',
      role: 'Business Intelligence & Analytics Analyst',
      date: 'May 2025 – May 2026',
      location: 'Remote',
      type: 'BI & Analytics',
      bullets: [
        'Analyzed more than 100,000 customer, CRM, transaction, campaign, and engagement records using SQL, Python, Excel, Power BI, and Tableau.',
        'Monitored business performance, identified trends, and supported decisions across Product, Marketing, and Operations.',
        'Built automated dashboards, semantic models, DAX measures, and reporting workflows.',
        'Improved reporting accuracy by 30% through standardized schema alignment and automated validation runs.',
        'Reduced manual reporting effort by 40% by modernizing weekly Excel distribution pipelines into Power BI scheduled dashboards.'
      ]
    },
    {
      company: 'University of Central Florida',
      role: 'Data & Business Intelligence Analyst',
      date: 'May 2025 – May 2026',
      location: 'Oviedo, Florida',
      type: 'Higher Ed Analytics',
      bullets: [
        'Used Python, R, SQL, Excel, Power Query, and Power BI to clean, integrate, and analyze operational and program datasets.',
        'Defined KPIs, validated reporting records, and evaluated program performance to support administrative initiatives.',
        'Gathered reporting requirements from faculty and program stakeholders and documented metric definitions in a centralized glossary.',
        'Investigated and resolved data-quality issues, delivering dashboards and executive-ready reports.',
        'Worked with Webcourses@UCF, which is powered by Canvas, as part of the university learning environment to assess engagement.'
      ]
    },
    {
      company: 'SOTI Inc.',
      role: 'Business Systems Analyst',
      date: 'July 2022 – July 2024',
      location: 'Kerala, India',
      type: 'Enterprise Systems',
      bullets: [
        'Collaborated with Product, Engineering, QA, Operations, and Support teams to align technology assets with business workflows.',
        'Gathered detailed requirements and analyzed complex business workflows to support enterprise reporting systems.',
        'Utilized SQL, Excel, Jira, GitLab, and API validation tools to analyze system data flows and resolve data synchronization errors.',
        'Investigated data issues, performed root-cause analysis, and validated business logic for database entries.',
        'Reduced recurring reporting and data-quality issues by 15% through proactive error logging and verification procedures.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="border-l-4 border-navy-800 pl-4 mb-12">
          <p className="text-[10px] uppercase font-bold text-teal-500 tracking-wider">Timeline</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">Professional Experience</h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-300 ml-4 md:ml-6 space-y-10 pl-6 md:pl-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 h-4.5 w-4.5 rounded-full bg-white border-4 border-teal-500 shadow-sm z-10 group-hover:scale-110 transition-transform" />
              
              {/* Card wrapper */}
              <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2.5 pb-4 border-b border-slate-100 mb-4">
                  <div>
                    <h3 className="text-base font-extrabold text-navy-950">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 mt-1">
                      <span className="text-sm font-bold text-teal-650">{exp.company}</span>
                      <span className="text-slate-300 text-xs">|</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 font-semibold font-mono">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => {
                    // Check if bullet contains highlighted SuperWorld or SOTI numbers to draw attention
                    const isKeyMetric = bullet.includes('30%') || bullet.includes('40%') || bullet.includes('15%');
                    return (
                      <li 
                        key={bIdx} 
                        className={`text-xs leading-relaxed flex items-start gap-2.5 ${
                          isKeyMetric 
                            ? 'text-navy-900 font-medium' 
                            : 'text-slate-650'
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full mt-1.5 shrink-0 ${
                          isKeyMetric ? 'bg-teal-500' : 'bg-slate-400'
                        }`} />
                        <span>{bullet}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
