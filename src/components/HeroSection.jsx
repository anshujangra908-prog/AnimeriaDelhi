import React from 'react'
import { 
  ArrowRight, 
  Laptop, 
  Award, 
  CreditCard, 
  GraduationCap, 
  Globe, 
  Users, 
  Briefcase, 
  FolderKanban, 
  Clock, 
  Sparkles,
  CheckCircle2
} from 'lucide-react'

export default function HeroSection({ onOpenEnquire, onExploreCourses }) {
  const highlights = [
    {
      icon: Laptop,
      text: 'Live & Practical Training',
      bg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      icon: Award,
      text: '100% Placement Assistance',
      bg: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      icon: CreditCard,
      text: 'Flexible EMI Options',
      bg: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      icon: GraduationCap,
      text: 'Online & Offline Classes',
      bg: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      icon: Globe,
      text: 'Worldwide Online Training',
      bg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
  ]

  const stats = [
    {
      count: '5000+',
      label: 'Students Trained',
      icon: Users,
      color: 'text-rose-500 bg-rose-50',
    },
    {
      count: '1000+',
      label: 'Students Placed',
      icon: Briefcase,
      color: 'text-amber-500 bg-amber-50',
    },
    {
      count: '50+',
      label: 'Industry Projects',
      icon: FolderKanban,
      color: 'text-emerald-500 bg-emerald-50',
    },
    {
      count: '5+ Years',
      label: 'Placement Support',
      icon: Clock,
      color: 'text-blue-500 bg-blue-50',
    },
  ]

  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-radial from-blue-50/70 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white shadow-xs">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Skills <span className="text-slate-300">|</span> Career <span className="text-slate-300">|</span> Better Tomorrow
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              <span className="text-slate-900">Think Ahead.</span><br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Build Your Future</span><br />
              <span className="text-slate-800">with Practical Skills.</span>
            </h1>

            {/* Sub-text */}
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
              Industry-Oriented Courses <span className="text-slate-400">|</span> Expert Trainers <span className="text-slate-400">|</span> 100% Practical Training <span className="text-slate-400">|</span> Placement Assistance <span className="text-slate-400">|</span> Online & Offline Classes
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreCourses}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:translate-y-[-2px] cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEnquire}
                className="inline-flex items-center font-semibold text-slate-800 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-300 px-7 py-3.5 rounded-full shadow-xs transition-all hover:border-blue-400"
              >
                Enquire Now
              </button>
            </div>

            {/* Feature Badges Row */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {highlights.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 shadow-xs hover:shadow-sm transition"
                    >
                      <div className={`p-1.5 rounded-lg border shrink-0 ${item.bg}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 leading-tight">
                        {item.text}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Hero Visual & Stats Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background circular blob */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-blue-300 to-sky-100 opacity-40 blur-xl -z-10"></div>

            {/* Student Image Container */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-blue-100 to-white border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&auto=format&fit=crop&q=80"
                  alt="Student building career"
                  fetchPriority="high"
                  decoding="async"
                  width="700"
                  height="420"
                  className="w-full h-[420px] object-cover object-center"
                />

                {/* Hand-drawn style badge */}
                <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-2xl shadow-lg border border-slate-100 -rotate-6 transform hover:rotate-0 transition-transform">
                  <div className="text-center font-serif">
                    <span className="block text-xs font-bold text-slate-400 tracking-wider">LEARN · PRACTICE</span>
                    <span className="block text-sm font-extrabold text-blue-700">GROW</span>
                    <span className="block text-xs font-bold text-emerald-600 italic">Get Placed!</span>
                  </div>
                </div>
              </div>

              {/* Floating Right Stats Card (Matching Image) */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 w-60 sm:w-64">
                <div className="border-b border-slate-100 pb-2 mb-3">
                  <h4 className="text-xs font-bold text-slate-800">Your Skills</h4>
                  <p className="text-[11px] font-medium text-slate-500">Our Support · A Brighter You</p>
                </div>

                <div className="space-y-2.5">
                  {stats.map((stat, i) => {
                    const StatIcon = stat.icon
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${stat.color}`}>
                          <StatIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 leading-tight">
                            {stat.count}
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
