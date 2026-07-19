export default function WhyThisRole() {
  const matrix = [
    {
      need: 'Power BI Dashboards',
      alignment: 'Proven experience building clean KPI dashboards, multi-layered data models, and tailored executive-ready analytics reports.'
    },
    {
      need: 'DAX Measures',
      alignment: 'Experience writing optimized, reusable DAX measures to calculate metrics (e.g. participation, scores, time-to-proficiency) and period-over-period dynamics.'
    },
    {
      need: 'Power Query & Excel',
      alignment: 'Strong capability in connecting, profile-matching, cleaning, modeling, and consolidating unstructured source records using M and Excel formulas.'
    },
    {
      need: 'Power Automate',
      alignment: 'Hands-on demonstration implementation of automated Forms intake routing, SharePoint item additions, Slack/Teams data alerts, and weekly distribution logic.'
    },
    {
      need: 'LMS Analytics',
      alignment: 'Familiarity with LMS database models (Webcourses@UCF powered by Canvas) and modeling enrollment progress, completion, and assessment results.'
    },
    {
      need: 'Reporting Governance',
      alignment: 'Creation of data dictionary structures, KPI glossary catalogs, system inventories, naming validation rules, and scheduled refresh protocols.'
    },
    {
      need: 'Stakeholder Communication',
      alignment: 'Background gathering analysis requirements and presenting insights to program directors, university faculty, product leads, and cross-functional teams.'
    },
    {
      need: 'Operational Analytics',
      alignment: 'Experience in corporate operations and active studies of customer care operational KPIs: CSAT, First Call Resolution, Average Handle Time, and agent productivity.'
    },
    {
      need: 'Self-Direction & Growth',
      alignment: 'Self-motivated learning path covering Fabric, performance profiling, dynamic RLS security models, calculation groups, and AI validation processes.'
    }
  ];

  return (
    <section id="why-this-role" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="border-l-4 border-navy-800 pl-4 mb-12">
          <p className="text-[10px] uppercase font-bold text-teal-500 tracking-wider">Alignment</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">Why This Role</h2>
        </div>

        <div className="space-y-8">
          {/* Interest Paragraph */}
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-205/60 leading-relaxed text-sm text-slate-700">
            <span className="font-extrabold text-navy-950 block mb-2">
              Why My Background Aligns with Consumer Cellular
            </span>
            I am particularly interested in this opportunity because it combines business intelligence, learning analytics, automation, data governance, and operational reporting. Consumer Cellular’s emphasis on improving the employee training journey and connecting learning outcomes with customer-service performance closely aligns with the type of BI work I am developing and pursuing.
          </div>

          {/* Matrix Table */}
          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-navy-950 text-white uppercase font-bold tracking-wider text-[10px]">
                    <th className="px-6 py-4 border-b border-navy-900 w-1/3">Consumer Cellular Need</th>
                    <th className="px-6 py-4 border-b border-navy-900 w-2/3">Candidate Alignment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {matrix.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-extrabold text-navy-950">
                        {row.need}
                      </td>
                      <td className="px-6 py-4 text-slate-600 leading-relaxed">
                        {row.alignment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
