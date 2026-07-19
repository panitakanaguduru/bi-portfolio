import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: 'M.S. Statistics & Data Science',
      school: 'University of Central Florida',
      date: 'May 2026',
      location: 'Oviedo, Florida',
      details: 'Focused on statistical modeling, data analysis methodology, and business intelligence architectures.'
    },
    {
      degree: 'B.S. Electrical & Electronics Engineering',
      school: 'Sree Vidyanikethan Engineering College',
      date: 'May 2023',
      location: 'Tirupati, India',
      details: 'Analytical foundation in engineering logic, systems modeling, and advanced mathematical concepts.'
    }
  ];

  const focusAreas = [
    'Learning & Development Analytics',
    'Power BI Dashboard Development',
    'Star-Schema Semantic Modeling',
    'Reporting Process Automation',
    'Data Governance Frameworks',
    'Operational KPI Analysis',
    'Microsoft Fabric Integration',
    'AI-Assisted Business Intelligence'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="border-l-4 border-navy-800 pl-4 mb-12">
          <p className="text-[10px] uppercase font-bold text-teal-500 tracking-wider">Background</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              I recently completed a Master of Science in Statistics and Data Science at the University of Central Florida. My background combines business intelligence, data analysis, business systems, reporting automation, statistical analysis, and cross-functional collaboration.
            </p>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              I have worked with product, marketing, operations, engineering, quality assurance, support, faculty, and program stakeholders to gather requirements, define KPIs, validate data, investigate reporting issues, build dashboards, automate workflows, and communicate findings.
            </p>

            <div>
              <h3 className="text-xs uppercase font-extrabold text-navy-950 tracking-wider mb-4 flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-teal-500" />
                Primary Areas of Focus
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {focusAreas.map((area, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-slate-350 transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education timeline */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-xs uppercase font-extrabold text-navy-950 tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-teal-500" />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-navy-800" />
                  
                  <h4 className="text-sm font-extrabold text-navy-950 group-hover:text-teal-500 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-slate-700 mt-1">
                    {edu.school}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3.5 pt-3.5 border-t border-slate-100 text-[10px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{edu.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-500 mt-3.5 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
