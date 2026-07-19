import { useState } from 'react';
import { 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, LineChart, Line, Legend 
} from 'recharts';
import { HelpCircle, FileSpreadsheet, Activity, CheckCircle, Clock } from 'lucide-react';

export default function ConsumerCellularUseCase() {
  const [activeTab, setActiveTab] = useState<'overview' | 'cohorts' | 'correlation'>('overview');

  // Simulated data for charts
  const cohortData = [
    { name: 'Cohort A (Jan)', OnboardingCompletion: 94, CSAT: 82, FCR: 76, AHT: 340 },
    { name: 'Cohort B (Feb)', OnboardingCompletion: 89, CSAT: 79, FCR: 72, AHT: 365 },
    { name: 'Cohort C (Mar)', OnboardingCompletion: 92, CSAT: 85, FCR: 79, AHT: 310 },
    { name: 'Cohort D (Apr)', OnboardingCompletion: 96, CSAT: 88, FCR: 81, AHT: 295 }
  ];

  const correlationData = [
    { scoreRange: '60-70%', AvgCSAT: 72, AvgFCR: 68, AvgAHT: 410 },
    { scoreRange: '70-80%', AvgCSAT: 78, AvgFCR: 73, AvgAHT: 350 },
    { scoreRange: '80-90%', AvgCSAT: 84, AvgFCR: 79, AvgAHT: 315 },
    { scoreRange: '90-100%', AvgCSAT: 91, AvgFCR: 85, AvgAHT: 280 }
  ];

  const questions = [
    'Do agents who complete training faster reach proficiency sooner?',
    'Are higher assessment scores associated with better quality scores?',
    'Which programs are associated with improved CSAT?',
    'Which teams require additional coaching?',
    'Does knowledge-base usage improve first-call resolution?',
    'Which courses have low completion or low engagement?',
    'How does training performance vary by cohort, manager, or location?'
  ];

  return (
    <section id="use-case" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="border-l-4 border-navy-800 pl-4 mb-12">
          <p className="text-[10px] uppercase font-bold text-teal-500 tracking-wider">Business Analytics Case Study</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            Connecting Training Analytics to Call Center Performance
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Conceptual Context */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-extrabold text-navy-950 mb-3 uppercase tracking-wide">
                Business Scenario
              </h3>
              <p className="text-xs text-slate-650 leading-relaxed mb-4">
                A customer-service organization needs to evaluate whether employee onboarding and training programs are successfully driving operational efficiency and customer care success in the call center.
              </p>
              
              <h4 className="text-[10px] font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                Simulated Data Sources Connected
              </h4>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-605">
                <div className="flex items-center gap-1.5">
                  <FileSpreadsheet className="h-3.5 w-3.5 text-teal-500" />
                  <span>LMS Course Completions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-teal-500" />
                  <span>Assessment Scores</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-teal-500" />
                  <span>AHT (Handle Time)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-teal-500" />
                  <span>CSAT & FCR Indices</span>
                </div>
              </div>
            </div>

            {/* Questions Answered */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-extrabold text-navy-950 mb-3.5 uppercase tracking-wide flex items-center gap-1.5">
                <HelpCircle className="h-4.5 w-4.5 text-teal-500" />
                Analytical Questions Addressed
              </h3>
              <ul className="space-y-2.5">
                {questions.map((q, idx) => (
                  <li key={idx} className="text-[11px] text-slate-600 leading-normal flex items-start gap-2">
                    <span className="font-bold text-teal-500 shrink-0">{idx + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Mock Dashboard */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-navy-950 px-5 py-4 border-b border-navy-900 flex flex-wrap justify-between items-center gap-3">
              <div>
                <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
                  Conceptual Onboarding & Care Analytics Portal
                </h3>
                <span className="text-[9px] text-slate-400 font-mono">Dataset status: Simulated</span>
              </div>
              
              <div className="flex items-center gap-1 bg-navy-900 p-1 rounded-lg">
                {(['overview', 'cohorts', 'correlation'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeTab === tab
                        ? 'bg-teal-500 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 space-y-6">
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                      <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-widest">Completion Rate</span>
                      <p className="text-lg font-bold font-mono text-navy-950 mt-0.5">92%</p>
                      <span className="text-[8px] text-slate-405 block mt-0.5">Simulated Cohort Avg</span>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                      <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-widest">Avg Assessment</span>
                      <p className="text-lg font-bold font-mono text-navy-950 mt-0.5">86%</p>
                      <span className="text-[8px] text-slate-405 block mt-0.5">Simulated Benchmark</span>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                      <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-widest">Avg Care CSAT</span>
                      <p className="text-lg font-bold font-mono text-navy-950 mt-0.5">83.5%</p>
                      <span className="text-[8px] text-slate-405 block mt-0.5">Simulated Target: 80%</span>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                      <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-widest">Avg Handle Time</span>
                      <p className="text-lg font-bold font-mono text-navy-950 mt-0.5">327s</p>
                      <span className="text-[8px] text-slate-405 block mt-0.5">Simulated Goal: &lt;340s</span>
                    </div>
                  </div>

                  {/* Summary Text */}
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg">
                    <h4 className="text-[10px] font-extrabold text-navy-950 uppercase tracking-wider mb-1">
                      Key Analytical Finding (Simulated Demo)
                    </h4>
                    <p className="text-[11px] text-slate-650 leading-relaxed">
                      Cohorts demonstrating high assessment benchmarks (&gt;85%) achieve expected AHT proficiency targets within 12 days, compared to 18 days for low-benchmarking cohorts. First Call Resolution (FCR) levels also show positive association indicators with learning engagement.
                    </p>
                  </div>
                </div>
              )}

              {/* Cohorts Tab */}
              {activeTab === 'cohorts' && (
                <div className="space-y-4">
                  <h4 className="text-[10px] font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                    Simulated Onboarding Performance & FCR by Cohort
                  </h4>
                  <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={cohortData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="name" tick={{ fontSize: 9 }} />
                        <YAxis tick={{ fontSize: 9 }} domain={[0, 100]} />
                        <Tooltip contentStyle={{ fontSize: 10 }} />
                        <Legend wrapperStyle={{ fontSize: 9 }} />
                        <Bar name="LMS Onboarding Comp %" dataKey="OnboardingCompletion" fill="#1e3a8a" radius={[2, 2, 0, 0]} />
                        <Bar name="Care FCR %" dataKey="FCR" fill="#0d9488" radius={[2, 2, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Correlation Tab */}
              {activeTab === 'correlation' && (
                <div className="space-y-4">
                  <h4 className="text-[10px] font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                    Training Assessment Score Range vs Avg Handle Time (AHT)
                  </h4>
                  <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={correlationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="scoreRange" tick={{ fontSize: 9 }} />
                        <YAxis tick={{ fontSize: 9 }} unit="s" />
                        <Tooltip contentStyle={{ fontSize: 10 }} />
                        <Legend wrapperStyle={{ fontSize: 9 }} />
                        <Line name="Avg Handle Time (AHT)" type="monotone" dataKey="AvgAHT" stroke="#0f766e" strokeWidth={2} dot={{ r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <span className="text-[9px] text-slate-400 block text-right font-semibold">
                    Lower AHT (in seconds) represents faster proficiency (positive operational trend).
                  </span>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
