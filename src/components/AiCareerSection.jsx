import React, { useState, useEffect } from 'react'
import { 
  Bot, 
  Sparkles, 
  Send, 
  ArrowRight, 
  GraduationCap, 
  Compass, 
  Briefcase, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react'

export default function AiCareerSection({ onOpenAiModal, onNavigate }) {
  const [activeQuestion, setActiveQuestion] = useState(0)

  const quickTopics = [
    {
      title: 'Which course is best after 12th or Graduation?',
      tag: 'Freshers & College',
      reply: 'Freshers ke liye Data Analytics aur Graphic Designing top choices hain. Dono mein koi hard coding zaroori nahi hai aur 4-6 months mein direct job-ready portfolio ban jata hai.'
    },
    {
      title: 'Highest salary & placement demand courses in 2026?',
      tag: 'High Salary',
      reply: 'Data Analytics (BI Developer / Analyst) aur Python Full Stack Web Development highest starting salary packages offer karte hain (4.5 LPA - 12 LPA).'
    },
    {
      title: 'Non-IT or Commerce students ke liye best career path?',
      tag: 'Non-Tech & Commerce',
      reply: 'Commerce & non-IT students ke liye Tally Prime with GST, SAP ERP, aur Digital Marketing sabse profitable aur safe career paths hain.'
    },
    {
      title: 'Freelancing aur Work-From-Home kisme zyada hai?',
      tag: 'Freelance & Remote',
      reply: 'Video Editing Pro aur Graphic Designing mein worldwide client projects aur monthly freelancing income ke unlimited opportunities hain.'
    }
  ]

  return (
    <section id="ai-career-hub" className="py-16 sm:py-20 bg-gradient-to-b from-white via-indigo-50/40 to-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/80 text-blue-800 text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
            <span>AI Career Guidance Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            <span>Confused About Your Career? </span><br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ask Animeria AI Counselor
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium mt-3">
            Apne education background, future aspirations ya course fees ke hisab se exact recommendations paayein. Animeria AI 24/7 aapke future sawaalon ke answers dene ke liye ready hai.
          </p>
        </div>

        {/* Interactive AI Preview & Q&A Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Quick FAQs Selector */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 block px-1">
              Top Student Career Dilemmas
            </span>

            {quickTopics.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveQuestion(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                  activeQuestion === idx
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 scale-[1.02] border-transparent'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200/90 shadow-2xs'
                }`}
              >
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${activeQuestion === idx ? 'text-blue-200' : 'text-blue-600'}`}>
                    {item.tag}
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold leading-snug">
                    {item.title}
                  </h4>
                </div>

                <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeQuestion === idx ? 'rotate-90 text-white' : 'text-slate-400'}`} />
              </button>
            ))}
          </div>

          {/* Right: AI Answer Card with Live Interactive Chat Prompt */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
              
              {/* Top Card Badge & AI Persona */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-black text-slate-900">
                        Animeria AI Answer
                      </h4>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      Verified Career Recommendation
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-bold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-100">
                  Instant Response
                </span>
              </div>

              {/* Dynamic Answer Box */}
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-400 block mb-1">
                    Selected Question:
                  </span>
                  <p className="text-xs sm:text-sm font-black text-slate-800">
                    "{quickTopics[activeQuestion].title}"
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 border border-blue-200/70 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      {quickTopics[activeQuestion].reply}
                    </div>
                  </div>
                </div>

                {/* Interactive Action Launcher */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenAiModal}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-6 py-3.5 rounded-2xl text-xs sm:text-sm shadow-lg shadow-blue-600/25 transition transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Bot className="w-4 h-4" />
                    <span>Open Live AI Career Counselor</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate('courses')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold px-5 py-3.5 rounded-2xl text-xs transition cursor-pointer"
                  >
                    <span>View All Courses</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
