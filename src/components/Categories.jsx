import React, { useState } from 'react'
import { 
  ArrowRight, 
  Monitor, 
  PenTool, 
  Video, 
  BarChart3, 
  Code2, 
  Binary, 
  Megaphone, 
  Calculator, 
  Layers,
  Clock,
  Laptop,
  CheckCircle2,
  Sparkles,
  Award
} from 'lucide-react'
import { courseCategories } from '../data/mockData'

const iconMap = {
  Monitor,
  PenTool,
  Video,
  BarChart3,
  Code2,
  Binary,
  Megaphone,
  Calculator,
  Layers,
}

export default function Categories({ onSelectCategory, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [courses, setCourses] = useState(courseCategories)

  React.useEffect(() => {
    fetch('/api/content/courses')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setCourses(data.data)
        }
      })
      .catch(err => console.debug('Using cached courses:', err))
  }, [])

  const filterTabs = [
    { id: 'all', label: 'All Programs' },
    { id: 'design', label: 'Design & Media' },
    { id: 'tech', label: 'Tech & Coding' },
    { id: 'analytics', label: 'Data & Marketing' },
    { id: 'finance', label: 'Finance & ERP' },
  ]

  const filteredCategories = selectedFilter === 'all' 
    ? courses 
    : courses.filter(cat => cat.group === selectedFilter)

  return (
    <section id="courses" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50/70 via-white to-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Job-Oriented Curriculum</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-1">
              <span className="text-slate-900">Explore Our </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Course Categories</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
              Industry-designed programs with live practical projects, 100% placement assistance, and recognized certificates.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid (3 Columns Responsive with Rich Photo Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Monitor
            const isSelected = activeCategory === cat.id

            return (
              <div
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                  if (onSelectCategory) onSelectCategory(cat)
                }}
                className={`group relative rounded-3xl border transition-all duration-300 cursor-pointer bg-white overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 ${
                  isSelected 
                    ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl' 
                    : 'border-slate-200/90 hover:border-blue-400/80 shadow-sm'
                }`}
              >
                {/* 1. Card Top Photo Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Top Left Floating Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-black tracking-wide shadow-md ${cat.badgeColor || 'bg-blue-600 text-white'}`}>
                      <Sparkles className="w-3 h-3" />
                      {cat.badge || 'Professional'}
                    </span>
                  </div>

                  {/* Bottom Right Floating Icon Badge */}
                  <div className="absolute -bottom-3 right-5 w-12 h-12 rounded-2xl bg-white p-2.5 shadow-lg border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-6 h-6 ${cat.iconColor}`} />
                  </div>
                </div>

                {/* 2. Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Course Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {cat.title}
                    </h3>

                    {/* Course Description */}
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                      {cat.desc}
                    </p>

                    {/* Tools Covered Pills */}
                    {cat.tools && (
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                          Key Tools & Skills
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.tools.split(',').map((tool, idx) => (
                            <span 
                              key={idx}
                              className="text-[10px] font-semibold text-slate-700 bg-slate-100/90 group-hover:bg-blue-50 group-hover:text-blue-700 px-2 py-0.5 rounded-md transition-colors"
                            >
                              {tool.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3. Card Meta Strip & Action Button */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        {cat.duration || '4 - 6 Months'}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Laptop className="w-3.5 h-3.5 text-emerald-500" />
                        Online / Offline
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* View All Programs CTA Button */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => {
              if (onNavigate) onNavigate('courses')
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-lg shadow-blue-600/25 transition-all transform hover:scale-105 cursor-pointer"
          >
            <span>View All Programs & Full Syllabus</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Feature Badges Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto mb-1.5" />
            <div className="text-xs font-bold text-slate-900">100% Practical Labs</div>
            <div className="text-[10px] text-slate-500">Live projects every week</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <Award className="w-5 h-5 text-blue-500 mx-auto mb-1.5" />
            <div className="text-xs font-bold text-slate-900">Recognized Certification</div>
            <div className="text-[10px] text-slate-500">Industry-valid credentials</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <Clock className="w-5 h-5 text-amber-500 mx-auto mb-1.5" />
            <div className="text-xs font-bold text-slate-900">Flexible Batch Timings</div>
            <div className="text-[10px] text-slate-500">Weekday & Weekend batches</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <Sparkles className="w-5 h-5 text-purple-500 mx-auto mb-1.5" />
            <div className="text-xs font-bold text-slate-900">Placement Assistance</div>
            <div className="text-[10px] text-slate-500">Direct interview drives</div>
          </div>
        </div>

      </div>
    </section>
  )
}

