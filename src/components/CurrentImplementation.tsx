import { 
  BookOpen, Lock, RefreshCw, Layers, Zap, Shield, HardDrive, 
  LineChart, Database, FileText, BarChart3, HelpCircle, Share2, Cpu 
} from 'lucide-react';

export default function CurrentImplementation() {
  const roadmaps = [
    {
      title: 'Power BI Service',
      icon: Database,
      status: 'Actively learning',
      desc: 'Advancing depth in workspace management, report publishing, Power BI Apps, dataset configurations, scheduled refreshes, and access/permissions control configurations.'
    },
    {
      title: 'Row-Level Security (RLS)',
      icon: Lock,
      status: 'Demonstration implementation',
      desc: 'Implementing and validating static and dynamic role configurations. Using USERPRINCIPALNAME() to dynamically restrict report visibility based on department manager email scopes.'
    },
    {
      title: 'Scheduled Refresh',
      icon: RefreshCw,
      status: 'Actively learning',
      desc: 'Configuring datasets for automated data updates. Setting up gateway connections, validation credentials, refresh chains, and failure alert email routing rules.'
    },
    {
      title: 'Calculation Groups',
      icon: Layers,
      status: 'Next-stage development',
      desc: 'Exploring advanced model configurations to standardize time-intelligence measures (MTD, QTD, YTD, YoY comparisons) without measure catalog bloat.'
    },
    {
      title: 'Performance Tuning',
      icon: Zap,
      status: 'Actively learning',
      desc: 'Optimizing semantic models by reducing high-cardinality fields, removing redundant columns, using DAX variables, and profiling queries with Performance Analyzer.'
    },
    {
      title: 'Data Governance',
      icon: Shield,
      status: 'Demonstration implementation',
      desc: 'Constructing robust governance tools: data dictionaries, KPI dictionaries, central report inventories, scheduled refresh logs, and issue validation templates.'
    },
    {
      title: 'Microsoft Fabric',
      icon: HardDrive,
      status: 'Next-stage development',
      desc: 'Developing theoretical understanding of Fabric architecture: OneLake, Lakehouses, Warehouses, Dataflows Gen2, and Direct Lake dataset connection modes.'
    },
    {
      title: 'Learning Analytics',
      icon: LineChart,
      status: 'Demonstration implementation',
      desc: 'Modeling learner engagement, completion velocity, assessment distributions, and skills gap vectors over course programs and cohort demographics.'
    },
    {
      title: 'LMS Platforms',
      icon: BookOpen,
      status: 'Foundational familiarity',
      desc: 'Familiarity with Webcourses@UCF (Canvas engine), and structured LMS database exports. Understanding enrollment, activity, progress, and assessment schemas.'
    },
    {
      title: 'Knowledge Base Platforms',
      icon: HelpCircle,
      status: 'Foundational familiarity',
      desc: 'Developing concepts for NICE Expert or equivalent knowledge repositories: profiling search query logs, article feedback scores, and training validation loops.'
    },
    {
      title: 'L&D Evaluation (Kirkpatrick)',
      icon: FileText,
      status: 'Actively learning',
      desc: 'Applying Kirkpatrick framework metrics. Level 1: Course perception; Level 2: Knowledge gains; Level 3: Behavior changes; Level 4: Bottom-line operational outcomes.'
    },
    {
      title: 'Call Center Analytics',
      icon: BarChart3,
      status: 'Actively learning',
      desc: 'Connecting training performance to customer care KPIs. Tracking CSAT, First Call Resolution (FCR), Average Handle Time (AHT), Quality Scores, and Escalation Rates.'
    },
    {
      title: 'SharePoint Integration',
      icon: Share2,
      status: 'Demonstration implementation',
      desc: 'Integrating SharePoint lists with Power Query as a lightweight, structured database layer for tracking reporting inventory metadata and metric schemas.'
    },
    {
      title: 'AI-Assisted Reporting',
      icon: Cpu,
      status: 'Foundational familiarity',
      desc: 'Utilizing LLMs (Copilot, Claude) to accelerate DAX construction, optimize SQL queries, structure report documentation, and generate initial validation test rules.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Foundational familiarity':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Actively learning':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Demonstration implementation':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'Next-stage development':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="current-implementation" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="border-l-4 border-navy-800 pl-4 mb-12">
          <p className="text-[10px] uppercase font-bold text-teal-500 tracking-wider">Roadmap</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">Currently Learning & Implementing</h2>
        </div>



        {/* Kirkpatrick Explanation Card */}
        <div className="mb-10 p-6 bg-white border border-slate-250 rounded-xl shadow-sm">
          <h3 className="text-sm font-extrabold text-navy-950 mb-3 uppercase tracking-wide">
            Applying the Kirkpatrick Evaluation Model to L&D Analytics
          </h3>
          <p className="text-xs text-slate-600 mb-6 leading-relaxed">
            The candidate is actively incorporating the Kirkpatrick model into her learning and analytics design roadmaps to measure the business value of training programs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest">Level 1</span>
              <h4 className="text-xs font-extrabold text-navy-950 mt-1">Reaction</h4>
              <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                How learners perceived the training (survey evaluations, satisfaction rates).
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest">Level 2</span>
              <h4 className="text-xs font-extrabold text-navy-950 mt-1">Learning</h4>
              <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                What knowledge or skills they gained (post-assessment scores, skill vectors).
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest">Level 3</span>
              <h4 className="text-xs font-extrabold text-navy-950 mt-1">Behavior</h4>
              <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                Whether they applied learning on the job (article usage, process steps).
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest">Level 4</span>
              <h4 className="text-xs font-extrabold text-navy-950 mt-1">Results</h4>
              <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                Whether training influenced business outcomes (AHT, FCR, CSAT scores).
              </p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-250 text-[10px] text-amber-800 font-semibold leading-relaxed">
            Note: UCF\'s Student Perception of Instruction is an institutional course-evaluation survey instrument used to assess instructional delivery; it is not modeled on or defined as the Kirkpatrick Evaluation Model.
          </div>
        </div>

        {/* Operational to Learning Connection flow */}
        <div className="mb-10 p-6 bg-white border border-slate-250 rounded-xl shadow-sm">
          <h3 className="text-sm font-extrabold text-navy-950 mb-4 uppercase tracking-wide">
            Connecting Training Analytics to Call Center Performance
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center p-3.5 bg-slate-55 border border-slate-200 rounded-lg text-xs font-bold text-slate-700">
              LMS Course Completion
            </div>
            <div className="text-slate-450 text-sm font-extrabold">→</div>
            <div className="flex-1 text-center p-3.5 bg-slate-55 border border-slate-200 rounded-lg text-xs font-bold text-slate-700">
              Assessment Performance
            </div>
            <div className="text-slate-450 text-sm font-extrabold">→</div>
            <div className="flex-1 text-center p-3.5 bg-slate-55 border border-slate-200 rounded-lg text-xs font-bold text-slate-700">
              Agent Proficiency Model
            </div>
            <div className="text-slate-450 text-sm font-extrabold">→</div>
            <div className="flex-1 text-center p-3.5 bg-slate-55 border border-slate-200 rounded-lg text-xs font-bold text-slate-700">
              Care Performance (AHT, FCR, CSAT)
            </div>
            <div className="text-slate-450 text-sm font-extrabold">→</div>
            <div className="flex-1 text-center p-3.5 bg-teal-50 border border-teal-200 rounded-lg text-xs font-bold text-teal-700">
              Training Business Effectiveness
            </div>
          </div>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmaps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-slate-350 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3.5">
                    <div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center text-navy-800">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[8px] font-extrabold border ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xs font-extrabold text-navy-950 mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
