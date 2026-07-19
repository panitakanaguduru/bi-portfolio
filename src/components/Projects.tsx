import { useState } from 'react';
import { 
  Code, Shield, CheckSquare, 
  Workflow
} from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<'ld-dashboard' | 'governance'>('ld-dashboard');
  const [dashboardPage, setDashboardPage] = useState<number>(1);

  // DAX measures data for rendering code blocks
  const daxMeasures = [
    {
      name: 'Total Learners',
      code: `Total Learners =\nDISTINCTCOUNT(DimLearner[LearnerID])`
    },
    {
      name: 'Total Enrollments',
      code: `Total Enrollments =\nCOUNTROWS(FactTrainingActivity)`
    },
    {
      name: 'Completed Enrollments',
      code: `Completed Enrollments =\nCALCULATE(\n    COUNTROWS(FactTrainingActivity),\n    FactTrainingActivity[CompletionStatus] = "Completed"\n)`
    },
    {
      name: 'Completion Rate',
      code: `Completion Rate =\nDIVIDE(\n    [Completed Enrollments],\n    [Total Enrollments],\n    0\n)`
    },
    {
      name: 'Average Assessment Score',
      code: `Average Assessment Score =\nAVERAGE(FactAssessments[AssessmentScore])`
    },
    {
      name: 'Pass Rate',
      code: `Pass Rate =\nDIVIDE(\n    CALCULATE(\n        COUNTROWS(FactAssessments),\n        FactAssessments[Result] = "Pass"\n    ),\n    COUNTROWS(FactAssessments),\n    0\n)`
    },
    {
      name: 'Average Days to Completion',
      code: `Average Days to Completion =\nAVERAGEX(\n    FILTER(\n        FactTrainingActivity,\n        NOT ISBLANK(FactTrainingActivity[CompletionDate])\n    ),\n    DATEDIFF(\n        FactTrainingActivity[EnrollmentDate],\n        FactTrainingActivity[CompletionDate],\n        DAY\n    )\n)`
    },
    {
      name: 'Engaged Learners',
      code: `Engaged Learners =\nCALCULATE(\n    DISTINCTCOUNT(FactTrainingActivity[LearnerID]),\n    FactTrainingActivity[EngagementStatus] = "Engaged"\n)`
    },
    {
      name: 'Learner Engagement Rate',
      code: `Learner Engagement Rate =\nDIVIDE(\n    [Engaged Learners],\n    [Total Learners],\n    0\n)`
    },
    {
      name: 'Previous Period Completion Rate',
      code: `Previous Period Completion Rate =\nCALCULATE(\n    [Completion Rate],\n    DATEADD(DimDate[Date], -1, MONTH)\n)`
    },
    {
      name: 'Completion Rate Change',
      code: `Completion Rate Change =\n[Completion Rate] - [Previous Period Completion Rate]`
    },
    {
      name: 'Running Total Completions',
      code: `Running Total Completions =\nCALCULATE(\n    [Completed Enrollments],\n    FILTER(\n        ALLSELECTED(DimDate[Date]),\n        DimDate[Date] <= MAX(DimDate[Date])\n    )\n)`
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="border-l-4 border-navy-800 pl-4 mb-8">
          <p className="text-[10px] uppercase font-bold text-teal-500 tracking-wider">Showcase</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">Demonstration Projects</h2>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex border-b border-slate-200 mb-10 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveProject('ld-dashboard')}
            className={`px-5 py-4 border-b-2 font-bold text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors ${
              activeProject === 'ld-dashboard'
                ? 'border-teal-500 text-teal-650'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Project 1: L&D Analytics Dashboard
          </button>
          <button
            onClick={() => setActiveProject('governance')}
            className={`px-5 py-4 border-b-2 font-bold text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors ${
              activeProject === 'governance'
                ? 'border-teal-500 text-teal-650'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Project 2: Automation & Governance Framework
          </button>
        </div>

        {/* PROJECT 1 CONTENT */}
        {activeProject === 'ld-dashboard' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Overview */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-[9px] uppercase font-extrabold text-teal-600 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                    Portfolio Demonstration
                  </span>
                  <h3 className="text-lg font-extrabold text-navy-950 mt-1.5">
                    Learning & Development Analytics Dashboard
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 font-semibold font-mono">
                  <span>Power BI</span> · <span>DAX</span> · <span>SQL</span> · <span>Excel</span> · <span>Power Query</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                <div className="lg:col-span-7 space-y-4 text-xs text-slate-655 leading-relaxed">
                  <p className="font-semibold text-navy-900">
                    This project demonstrates how a Learning & Development team can replace fragmented spreadsheets and manual workflows with a centralized Power BI analytics solution.
                  </p>
                  <p>
                    <span className="font-bold text-navy-950">Business Problem:</span> Learning data was represented across multiple datasets. Without a centralized reporting solution, stakeholders would need to manually consolidate spreadsheets, calculate metrics, validate results, and distribute reports. This approach created inconsistent KPI definitions, delayed reporting cycles, and limited visibility into training outcomes.
                  </p>
                  <p>
                    <span className="font-bold text-navy-950">Business Objectives:</span> Track participation and completion rates, evaluate assessment performance, identify skills gaps, measure learner engagement, measure time-to-proficiency, and support executive decisions with clean dashboard metrics.
                  </p>
                </div>
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl text-xs space-y-3.5">
                  <div>
                    <span className="font-extrabold text-navy-950 block mb-1">Simulated LMS Dataset Note:</span>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      This project uses a simulated dataset modeled after standard exports from Canvas LMS. No confidential, proprietary, or production UCF student databases were used.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h4 className="text-sm font-extrabold text-navy-950 uppercase tracking-wide mb-6">
                Data Integration & Pipeline Architecture
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-3 text-center text-[10px]">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-navy-950 block mb-1">Data Sources</span>
                  <span className="text-slate-500 block">Simulated LMS Data, Assessment Results, Operational KPIs</span>
                </div>
                <div className="flex items-center justify-center text-slate-400 font-bold">→</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-navy-950 block mb-1">Power Query</span>
                  <span className="text-slate-500 block">Clean Nulls, Standardize Formats, Format Types</span>
                </div>
                <div className="flex items-center justify-center text-slate-400 font-bold">→</div>
                <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg">
                  <span className="font-bold text-teal-800 block mb-1">Semantic Model</span>
                  <span className="text-teal-650 block">Star Schema Dim/Fact Relationship Alignment</span>
                </div>
                <div className="flex items-center justify-center text-slate-400 font-bold">→</div>
                <div className="p-3 bg-slate-55 border border-slate-200 rounded-lg">
                  <span className="font-bold text-navy-950 block mb-1">Business Insights</span>
                  <span className="text-slate-500 block">DAX Calculated Measures & Interactive Reports</span>
                </div>
              </div>
            </div>

            {/* Star Schema Data Model */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h4 className="text-sm font-extrabold text-navy-950 uppercase tracking-wide mb-6">
                Centralized Semantic Star-Schema Model
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <span className="text-[10px] font-extrabold text-navy-500 uppercase tracking-wider block">Fact Tables</span>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-white border border-slate-200 rounded">
                      <span className="font-bold text-navy-950 block">FactTrainingActivity</span>
                      <span className="text-[10px] text-slate-450 mt-1 block">LearnerID, CourseID, EnrollmentDate, CompletionStatus, Duration</span>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-200 rounded">
                      <span className="font-bold text-navy-950 block">FactAssessments</span>
                      <span className="text-[10px] text-slate-450 mt-1 block">LearnerID, CourseID, AssessmentScore, Result, AssessmentDate</span>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-200 rounded">
                      <span className="font-bold text-navy-950 block">FactOperationalPerformance</span>
                      <span className="text-[10px] text-slate-450 mt-1 block">LearnerID, Date, AHT, CSAT, FCR, QA_Score</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 lg:col-span-2">
                  <span className="text-[10px] font-extrabold text-navy-500 uppercase tracking-wider block">Dimension Tables (Linked 1:N)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 bg-white border border-slate-200 rounded">
                      <span className="font-bold text-navy-950 block">DimLearner</span>
                      <span className="text-[10px] text-slate-450 mt-1 block">LearnerID (Key), Name, Email, Role, HireDate</span>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-200 rounded">
                      <span className="font-bold text-navy-950 block">DimCourse</span>
                      <span className="text-[10px] text-slate-450 mt-1 block">CourseID (Key), CourseName, Program, SkillArea, DurationDays</span>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-200 rounded">
                      <span className="font-bold text-navy-950 block">DimDepartment</span>
                      <span className="text-[10px] text-slate-450 mt-1 block">DeptID (Key), DeptName, Division, Region</span>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-200 rounded">
                      <span className="font-bold text-navy-950 block">DimDate</span>
                      <span className="text-[10px] text-slate-450 mt-1 block">Date (Key), Day, Month, Quarter, Year, DayOfWeek</span>
                    </div>
                  </div>
                  <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg text-[10px] text-teal-800 font-semibold leading-normal mt-3">
                    Centralizing dimensions ensures robust data filters, clean slicing, and uniform business metrics across multiple fact queries.
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Dashboard Page Mockups */}
            <div id="demo" className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-navy-950 px-5 py-4 border-b border-navy-900 flex flex-wrap justify-between items-center gap-3">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Interactive Power BI Mock Visuals
                  </h4>
                  <span className="text-[9px] text-slate-450 font-mono">Simulated database exports</span>
                </div>
                <div className="flex flex-wrap gap-1.5 bg-navy-900 p-1 rounded-lg">
                  {[1, 2, 3, 4, 5, 6].map((pNum) => (
                    <button
                      key={pNum}
                      onClick={() => setDashboardPage(pNum)}
                      className={`px-2.5 py-1 rounded text-[9px] font-bold uppercase transition-colors cursor-pointer ${
                        dashboardPage === pNum
                          ? 'bg-teal-500 text-white'
                          : 'text-slate-450 hover:text-white'
                      }`}
                    >
                      Pg {pNum}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 space-y-6 min-h-[300px]">
                {/* Page 1: Executive Learning Overview */}
                {dashboardPage === 1 && (
                  <div className="space-y-4">
                    <h5 className="text-[11px] font-extrabold text-navy-950 uppercase tracking-wider">Page 1: Executive Learning Overview</h5>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-center">
                        <span className="text-[8px] text-slate-400 uppercase font-bold block">Total Learners</span>
                        <span className="font-mono text-base font-extrabold text-navy-950 mt-1 block">142</span>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-center">
                        <span className="text-[8px] text-slate-400 uppercase font-bold block">Enrollments</span>
                        <span className="font-mono text-base font-extrabold text-navy-950 mt-1 block">312</span>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-center">
                        <span className="text-[8px] text-slate-400 uppercase font-bold block">Completion Rate</span>
                        <span className="font-mono text-base font-extrabold text-navy-950 mt-1 block">91.8%</span>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-center">
                        <span className="text-[8px] text-slate-400 uppercase font-bold block">Avg Assessment</span>
                        <span className="font-mono text-base font-extrabold text-navy-950 mt-1 block">85.6%</span>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-center">
                        <span className="text-[8px] text-slate-400 uppercase font-bold block">Engagement Rate</span>
                        <span className="font-mono text-base font-extrabold text-navy-950 mt-1 block">78.4%</span>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-center">
                        <span className="text-[8px] text-slate-400 uppercase font-bold block">Days to Complete</span>
                        <span className="font-mono text-base font-extrabold text-navy-950 mt-1 block">14d</span>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded text-xs space-y-1">
                      <span className="font-bold text-navy-950 block">Insights Panel (Simulated):</span>
                      <p className="text-slate-600 text-[11px]">
                        Overall completion benchmarks have risen by 2.4% MoM. Department-level breakdowns indicate customer care leads participation rates (95% completion), while IT system cohorts require additional tracking focus.
                      </p>
                    </div>
                  </div>
                )}

                {/* Page 2: Learner Engagement */}
                {dashboardPage === 2 && (
                  <div className="space-y-4">
                    <h5 className="text-[11px] font-extrabold text-navy-950 uppercase tracking-wider">Page 2: Learner Engagement</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                        <span className="text-[9px] font-bold text-navy-950 block mb-2 uppercase">Engagement Categories (Simulated)</span>
                        <ul className="space-y-2 text-[10px] text-slate-600">
                          <li className="flex justify-between"><span>Active Engaged Learners:</span> <span className="font-bold font-mono">112</span></li>
                          <li className="flex justify-between"><span>Moderate Activity:</span> <span className="font-bold font-mono">22</span></li>
                          <li className="flex justify-between"><span>At Risk (Low activity &gt;14 days):</span> <span className="font-bold font-mono">8</span></li>
                        </ul>
                      </div>
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                        <span className="text-[9px] font-bold text-navy-950 block mb-2 uppercase">Engagement by Department</span>
                        <ul className="space-y-2 text-[10px] text-slate-600">
                          <li className="flex justify-between"><span>Customer Operations:</span> <span className="font-bold text-teal-600">88%</span></li>
                          <li className="flex justify-between"><span>Quality Assurance:</span> <span className="font-bold text-teal-600">82%</span></li>
                          <li className="flex justify-between"><span>Systems Engineering:</span> <span className="font-bold text-amber-600">65%</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Page 3: Completion & Assessment */}
                {dashboardPage === 3 && (
                  <div className="space-y-4">
                    <h5 className="text-[11px] font-extrabold text-navy-950 uppercase tracking-wider">Page 3: Completion and Assessment</h5>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded">
                        <span className="text-[8px] uppercase font-bold block">Pass Rate</span>
                        <span className="text-sm font-bold font-mono">94.2%</span>
                      </div>
                      <div className="p-3 bg-amber-50 border border-amber-250 text-amber-800 rounded">
                        <span className="text-[8px] uppercase font-bold block">In Progress</span>
                        <span className="text-sm font-bold font-mono">18 Learners</span>
                      </div>
                      <div className="p-3 bg-slate-55 border border-slate-200 text-slate-700 rounded">
                        <span className="text-[8px] uppercase font-bold block">Not Started</span>
                        <span className="text-sm font-bold font-mono">8 Learners</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-normal bg-slate-50 p-3 rounded">
                      Assessment benchmarks require &gt;80% score to pass. Learners average 1.2 attempts before reaching passing validation thresholds.
                    </p>
                  </div>
                )}

                {/* Page 4: Skills Gap Analysis */}
                {dashboardPage === 4 && (
                  <div className="space-y-4">
                    <h5 className="text-[11px] font-extrabold text-navy-950 uppercase tracking-wider">Page 4: Skills Gap Analysis</h5>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                      <span className="text-[10px] font-bold text-navy-950 block mb-3 uppercase">Required vs Actual Proficiency Scores</span>
                      <div className="space-y-2 text-[10px] text-slate-650">
                        <div>
                          <div className="flex justify-between mb-1"><span>Billing Systems Tooling</span> <span className="font-bold">85% / 90% (Gap: -5%)</span></div>
                          <div className="w-full bg-slate-200 h-2 rounded"><div className="bg-teal-500 h-2 rounded" style={{width: '85%'}} /></div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1"><span>Customer Call Routing Flow</span> <span className="font-bold">92% / 90% (Competent)</span></div>
                          <div className="w-full bg-slate-200 h-2 rounded"><div className="bg-teal-500 h-2 rounded" style={{width: '92%'}} /></div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1"><span>Troubleshooting & Escapes</span> <span className="font-bold">74% / 85% (Gap: -11%)</span></div>
                          <div className="w-full bg-slate-200 h-2 rounded"><div className="bg-amber-500 h-2 rounded" style={{width: '74%'}} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Page 5: Time-to-Proficiency */}
                {dashboardPage === 5 && (
                  <div className="space-y-4">
                    <h5 className="text-[11px] font-extrabold text-navy-950 uppercase tracking-wider">Page 5: Time-to-Proficiency</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-center">
                        <span className="text-[8px] text-slate-400 uppercase font-bold block">Avg Days to Complete</span>
                        <span className="font-mono text-sm font-bold text-navy-950 mt-1 block">14.2 Days</span>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-center">
                        <span className="text-[8px] text-slate-400 uppercase font-bold block">Expected Complete Benchmark</span>
                        <span className="font-mono text-sm font-bold text-navy-950 mt-1 block">15.0 Days</span>
                      </div>
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-center">
                        <span className="text-[8px] text-emerald-800 uppercase font-bold block">Within Expected Target</span>
                        <span className="font-mono text-sm font-bold text-emerald-800 mt-1 block">88% of Agents</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Page 6: Program Effectiveness */}
                {dashboardPage === 6 && (
                  <div className="space-y-4">
                    <h5 className="text-[11px] font-extrabold text-navy-950 uppercase tracking-wider">Page 6: Program Effectiveness</h5>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg text-xs space-y-2">
                      <span className="font-bold text-navy-950 block">Operational Performance Link (Simulated Demo):</span>
                      <p className="text-slate-655 text-[11px] leading-relaxed">
                        Onboarding training completion metrics are evaluated alongside initial post-onboarding call metrics. 
                        Initial observations suggest agent cohorts completing the full onboarding training series on average maintain Average Handle Times (AHT) 25 seconds lower during their first month on the phones.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* DAX Code Matrix */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h4 className="text-sm font-extrabold text-navy-950 uppercase tracking-wide mb-6 flex items-center gap-2">
                <Code className="h-5 w-5 text-teal-500" />
                DAX Measures
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {daxMeasures.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-950 rounded-lg font-mono text-[10px] text-teal-400 border border-navy-850">
                    <div className="text-slate-450 border-b border-navy-900 pb-1.5 mb-2 font-bold flex justify-between">
                      <span>{item.name}</span>
                      <span className="text-[8px] text-teal-500/80 bg-teal-950 border border-teal-900/40 px-1 py-0.2 rounded font-sans">DAX</span>
                    </div>
                    <pre className="overflow-x-auto">{item.code}</pre>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Row Level Security RLS Demonstration */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h4 className="text-sm font-extrabold text-navy-950 uppercase tracking-wide mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal-500" />
                Row-Level Security (RLS) Configuration
              </h4>
              <div className="space-y-4 text-xs text-slate-650 leading-relaxed">
                <div>
                  <span className="font-bold text-navy-950 block mb-1">Business Purpose:</span>
                  Restricts data access so department managers can only view the learning engagement, completions, and assessment scores of their direct reports. This ensures compliance with organizational data boundaries while enabling localized operational coaching.
                </div>
                <div>
                  <span className="font-bold text-navy-950 block mb-1">Implementation Methodology:</span>
                  <ul className="list-disc pl-4 space-y-1 mt-1 text-[11px] text-slate-600">
                    <li>Create a custom security role named <code>Department Manager</code> in Power BI Desktop.</li>
                    <li>Apply a DAX filter expression on the <code>DimLearner</code> dimension table.</li>
                    <li>Since <code>DimLearner</code> has a dynamic 1-to-many relationship with the fact tables, the filter automatically propagates across the database schema to restrict fact records.</li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-navy-950 block mb-1.5">DAX Filter Expression (Applied to DimLearner Table):</span>
                  <div className="p-4 bg-slate-950 rounded-lg font-mono text-[10px] text-teal-400 border border-navy-850">
                    <pre>{`DimLearner[DepartmentID] =\nLOOKUPVALUE(\n    DimManager[DepartmentID],\n    DimManager[ManagerEmail],\n    USERPRINCIPALNAME()\n)`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Validation Checklist */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h4 className="text-sm font-extrabold text-navy-950 uppercase tracking-wide mb-6 flex items-center gap-2">
                <CheckSquare className="h-5 w-5 text-teal-500" />
                Data Validation & Quality Checklist
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <span className="font-bold text-navy-950 block">Validation Steps</span>
                  <ul className="space-y-1.5 text-[11px] text-slate-600">
                    <li className="flex items-center gap-2">✔ Compare source SQL totals with Power BI aggregates</li>
                    <li className="flex items-center gap-2">✔ Reconcile duplicate Learner-Course active enrollments</li>
                    <li className="flex items-center gap-2">✔ Validate null fields in assessment dates & outcomes</li>
                    <li className="flex items-center gap-2">✔ Test slicer interactions across date ranges</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <span className="font-bold text-navy-950 block">Audit Outcomes</span>
                  <ul className="space-y-1.5 text-[11px] text-slate-600">
                    <li className="flex items-center gap-2">✔ 100% data integrity verified</li>
                    <li className="flex items-center gap-2">✔ Star schema relationships cross-checked</li>
                    <li className="flex items-center gap-2">✔ RLS filters tested across simulated roles</li>
                    <li className="flex items-center gap-2">✔ Metric glossary validated by team review</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROJECT 2 CONTENT */}
        {activeProject === 'governance' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Overview */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-[9px] uppercase font-extrabold text-teal-600 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                    Portfolio Demonstration
                  </span>
                  <h3 className="text-lg font-extrabold text-navy-950 mt-1.5">
                    L&D Reporting Automation & Governance Framework
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 font-semibold font-mono">
                  <span>Power Automate</span> · <span>Power Query</span> · <span>Forms</span> · <span>SharePoint</span> · <span>M365</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                <div className="lg:col-span-7 space-y-4 text-xs text-slate-655 leading-relaxed">
                  <p className="font-semibold text-navy-900">
                    This project demonstrates how an L&D reporting intake and distribution process can be modernized using Microsoft Forms, Power Automate cloud flows, SharePoint list tables, and Power BI dashboards.
                  </p>
                  <p>
                    <span className="font-bold text-navy-950">Business Problem:</span> Fragmented email requests, manual spreadsheet updates, inconsistent KPI definitions, lack of dataset documentation, and missing audit trails create operational bottlenecks and data quality risks.
                  </p>
                  <p>
                    <span className="font-bold text-navy-950">Business Objectives:</span> Automate information intake, centralize tracking, establish data quality alerts, standardize definitions with a KPI dictionary, and maintain a structured report inventory database.
                  </p>
                </div>
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl text-xs space-y-3.5">
                  <div>
                    <span className="font-extrabold text-navy-950 block mb-1">Governance Note:</span>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      Presented as a governance demonstration model illustrating intake workflows and SharePoint data designs. No internal metadata from past employers is exposed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow Diagram */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h4 className="text-sm font-extrabold text-navy-950 uppercase tracking-wide mb-6">
                Intake to Notification Cloud Flow Workflow
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-9 gap-2 text-center text-[10px] items-center">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg col-span-2">
                  <span className="font-bold text-navy-950 block mb-0.5">1. Microsoft Forms</span>
                  <span className="text-slate-500 block">User submits reporting intake request</span>
                </div>
                <div className="text-slate-400 font-bold">→</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg col-span-2">
                  <span className="font-bold text-navy-950 block mb-0.5">2. Power Automate Flow</span>
                  <span className="text-slate-500 block">Triggers, gets details, validates fields</span>
                </div>
                <div className="text-slate-400 font-bold">→</div>
                <div className="p-3 bg-slate-55 border border-slate-200 rounded-lg col-span-2">
                  <span className="font-bold text-navy-950 block mb-0.5">3. SharePoint Lists</span>
                  <span className="text-slate-500 block">Creates record, sets status, updates dictionary</span>
                </div>
                <div className="text-slate-400 font-bold">→</div>
                <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg col-span-2">
                  <span className="font-bold text-teal-800 block mb-0.5">4. Notification & Refresh</span>
                  <span className="text-teal-650 block">Refreshes dashboard, sends confirmation alert</span>
                </div>
              </div>
            </div>

            {/* SharePoint Schema Details */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h4 className="text-sm font-extrabold text-navy-950 uppercase tracking-wide mb-6">
                SharePoint Governance Lists Schema
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                  <span className="font-extrabold text-navy-950 block uppercase tracking-wide">
                    List 1: Report Inventory Schema
                  </span>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse bg-white rounded border border-slate-200">
                      <thead>
                        <tr className="bg-slate-100 font-bold border-b border-slate-200 text-slate-700">
                          <th className="p-2">Column Name</th>
                          <th className="p-2">Type</th>
                          <th className="p-2">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150">
                        <tr><td className="p-2 font-bold">Report ID</td><td className="p-2">Single Text</td><td className="p-2">Unique identifier (R_001)</td></tr>
                        <tr><td className="p-2 font-bold">Report Name</td><td className="p-2">Single Text</td><td className="p-2">Official dashboard name</td></tr>
                        <tr><td className="p-2 font-bold">Business Owner</td><td className="p-2">Person</td><td className="p-2">Functional domain lead</td></tr>
                        <tr><td className="p-2 font-bold">Data Sources</td><td className="p-2">Multiple Text</td><td className="p-2">SQL, LMS exports, forms</td></tr>
                        <tr><td className="p-2 font-bold">Refresh Frequency</td><td className="p-2">Choice</td><td className="p-2">Daily, Weekly, Monthly</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                  <span className="font-extrabold text-navy-950 block uppercase tracking-wide">
                    List 2: KPI Dictionary Schema
                  </span>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse bg-white rounded border border-slate-200">
                      <thead>
                        <tr className="bg-slate-100 font-bold border-b border-slate-200 text-slate-700">
                          <th className="p-2">Column Name</th>
                          <th className="p-2">Type</th>
                          <th className="p-2">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150">
                        <tr><td className="p-2 font-bold">KPI Name</td><td className="p-2">Single Text</td><td className="p-2">Calculated KPI identifier</td></tr>
                        <tr><td className="p-2 font-bold">Formula</td><td className="p-2">Multiple Text</td><td className="p-2">DAX, SQL expression structure</td></tr>
                        <tr><td className="p-2 font-bold">Data Owner</td><td className="p-2">Person</td><td className="p-2">Owner responsible for audit</td></tr>
                        <tr><td className="p-2 font-bold">Inclusion Rules</td><td className="p-2">Multiple Text</td><td className="p-2">Filters (e.g. only active agents)</td></tr>
                        <tr><td className="p-2 font-bold">Last Reviewed</td><td className="p-2">Date</td><td className="p-2">Validation review timestamp</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Governance Dashboard Overview */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h4 className="text-sm font-extrabold text-navy-950 uppercase tracking-wide mb-4">
                Conceptual Governance & Issue Dashboard Layout
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 text-center text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                  <span className="text-[8px] uppercase font-bold text-slate-400">Total Reports</span>
                  <span className="text-base font-extrabold text-navy-950 mt-1 block">18</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                  <span className="text-[8px] uppercase font-bold text-slate-400">KPI Definitions</span>
                  <span className="text-base font-extrabold text-navy-950 mt-1 block">42</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                  <span className="text-[8px] uppercase font-bold text-slate-400">Active Refreshes</span>
                  <span className="text-base font-extrabold text-navy-950 mt-1 block">12</span>
                </div>
                <div className="p-3 bg-rose-50 border border-rose-100 rounded text-rose-800">
                  <span className="text-[8px] uppercase font-bold text-rose-450">Open Issues</span>
                  <span className="text-base font-extrabold mt-1 block">2</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                  <span className="text-[8px] uppercase font-bold text-slate-400">Refresh Success Rate</span>
                  <span className="text-base font-extrabold text-navy-950 mt-1 block">99.1%</span>
                </div>
              </div>
            </div>

            {/* Business Value */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h4 className="text-sm font-extrabold text-navy-950 uppercase tracking-wide mb-3 flex items-center gap-2">
                <Workflow className="h-5 w-5 text-teal-500" />
                Value Delivered
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-655 leading-relaxed">
                <li className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-navy-950 block mb-1">Standardized Metrics Catalog</span>
                  Eliminates formula inconsistencies and duplicate logic across reports. Guarantees stakeholders read a single source of truth.
                </li>
                <li className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-navy-950 block mb-1">Automated Operations Intake</span>
                  Moves request logging out of personal email inboxes into a central audit queue on SharePoint.
                </li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
