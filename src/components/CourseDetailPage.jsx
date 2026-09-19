import React, { useState, useEffect } from 'react'
import { 
  Calendar, 
  Laptop, 
  Award, 
  BarChart3, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Database, 
  FileSpreadsheet, 
  Code2, 
  PieChart, 
  FolderGit2, 
  Headphones, 
  Lock, 
  HelpCircle, 
  Sparkles, 
  TrendingUp,
  Check,
  BookOpen,
  GraduationCap
} from 'lucide-react'
import { allCoursesData, resolveCourseData } from '../data/coursesDetailData'

// WhatsApp Icon
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.497 2 12.034c0 1.83.493 3.553 1.348 5.043L2 22l5.053-1.326a9.972 9.972 0 0 0 4.978 1.327c5.535 0 10.031-4.497 10.031-10.034C22.062 6.497 17.566 2 12.031 2zm5.82 14.173c-.244.686-1.42 1.32-1.956 1.378-.49.052-1.127.08-3.64-1.002-3.21-1.38-5.267-4.66-5.428-4.873-.16-.214-1.303-1.733-1.303-3.305 0-1.572.825-2.348 1.118-2.668.293-.32.64-.4.854-.4.213 0 .426 0 .613.01.2.01.468-.076.732.56.267.64.908 2.215.988 2.375.08.16.133.347.027.56-.107.213-.16.347-.32.533-.16.187-.337.417-.481.56-.16.16-.328.334-.141.654.186.32.83 1.36 1.78 2.207 1.222 1.09 2.25 1.428 2.57 1.588.32.16.507.133.694-.08.187-.214.8-1.04 1.013-1.4.214-.36.427-.3.72-.187.294.107 1.868.88 2.188 1.04.32.16.534.24.614.374.08.133.08.773-.16 1.46z" />
    </svg>
  )
}

export default function CourseDetailPage({ 
  selectedCourse = 'Data Analytics', 
  onSelectCourse, 
  onOpenEnquire, 
  onNavigate 
}) {
  const [activeCourseKey, setActiveCourseKey] = useState(selectedCourse || 'Data Analytics')
  const [activeTab, setActiveTab] = useState('overview')
  const [openModules, setOpenModules] = useState({ 0: true })
  const [openFaqs, setOpenFaqs] = useState({ 0: true })

  // Synchronize when parent passes a new selected course
  useEffect(() => {
    if (selectedCourse) {
      setActiveCourseKey(selectedCourse)
    }
  }, [selectedCourse])

  const currentCourse = resolveCourseData(activeCourseKey)

  const handleCourseSwitch = (courseTitle) => {
    setActiveCourseKey(courseTitle)
    if (onSelectCourse) onSelectCourse(courseTitle)
    setOpenModules({ 0: true })
    setOpenFaqs({ 0: true })
    window.scrollTo({ top: 120, behavior: 'smooth' })
  }

  const toggleModule = (index) => {
    setOpenModules(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const toggleFaq = (index) => {
    setOpenFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const scrollToSection = (sectionId, tabId) => {
    setActiveTab(tabId)
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const courseList = Object.keys(allCoursesData)

  const tabs = [
    { id: 'overview', name: 'Overview', target: 'course-overview' },
    { id: 'curriculum', name: 'Curriculum', target: 'course-curriculum' },
    { id: 'tools', name: 'Tools & Skills', target: 'course-tools' },
    { id: 'fees', name: 'Fee & Scholarships', target: 'course-fee' },
    { id: 'faqs', name: 'FAQs', target: 'course-faqs' },
  ]

  return (
    <div id="courses-section" className="bg-white text-slate-900 border-t border-slate-200 scroll-mt-20">
      
      {/* 1. Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200/70 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-1.5 flex-wrap">
          <button 
            type="button"
            onClick={() => onNavigate && onNavigate('home')} 
            className="hover:text-blue-600 font-medium cursor-pointer"
          >
            Home
          </button>
          <span>&gt;</span>
          <span className="text-slate-600 font-medium">Courses</span>
          <span>&gt;</span>
          <span className="text-blue-600 font-semibold">{currentCourse.title}</span>
        </div>
      </div>


      {/* 3. Dynamic Course Hero Banner */}
      <section id="course-overview" className="relative pt-8 pb-12 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Hero Content */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black shadow-xs tracking-wide bg-blue-100 text-blue-800">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{currentCourse.badge || 'Professional Certification'}</span>
              </div>

              {/* Course Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  <span className={`bg-gradient-to-r ${currentCourse.accentColor || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
                    {currentCourse.title}
                  </span>
                </h1>
                <h2 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                  {currentCourse.subtitle}
                </h2>
              </div>

              {/* Subtitle / Description */}
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {currentCourse.desc}
              </p>

              {/* 4 Meta Badges / Info Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Duration</span>
                    <span className="text-xs font-bold text-slate-800">{currentCourse.duration}</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 shrink-0">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Mode</span>
                    <span className="text-xs font-bold text-slate-800">{currentCourse.mode}</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Certificate</span>
                    <span className="text-xs font-bold text-slate-800">Govt Verified</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Level</span>
                    <span className="text-xs font-bold text-slate-800">{currentCourse.level}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => onOpenEnquire(currentCourse.title)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md shadow-blue-500/20 transition cursor-pointer"
                >
                  Apply / Enquire for {currentCourse.title.split(' ')[0]}
                </button>
                <a
                  href={`https://wa.me/917979823383?text=Hi%20Animeria,%20I%20am%20interested%20in%20${encodeURIComponent(currentCourse.title)}.%20Please%20share%20details.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl text-xs shadow-md shadow-emerald-600/20 transition"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Counsellor</span>
                </a>
              </div>

            </div>

            {/* Right Column Hero Graphic / Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm">
                
                {/* Visual Image with Branded Frame */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <img
                    src={currentCourse.image}
                    alt={currentCourse.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-72 sm:h-80 object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Laptop Mockup Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/80 shadow-lg text-center">
                    <div className="text-xs font-black text-blue-800">
                      Animeria Institute
                    </div>
                    <div className="text-[10px] text-slate-500 italic">
                      {currentCourse.cert}
                    </div>
                  </div>
                </div>

                {/* Floating Growth Stats Card */}
                <div className="absolute top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-left text-[11px] font-bold text-slate-800 leading-tight">
                    <span>100% Practical</span><br />
                    <span className="text-emerald-600">Placement Drive</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Sticky Section Tabs (Smooth-Scroll Directly to Each Area) */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => scrollToSection(tab.target, tab.id)}
                className={`text-xs sm:text-sm font-bold whitespace-nowrap transition-colors py-1.5 px-3 rounded-lg cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (8 cols): Syllabus, Tools, FAQs */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Quote Box */}
            <div className="p-4 rounded-2xl bg-blue-50/80 border-l-4 border-blue-600 text-slate-700">
              <p className="text-xs sm:text-sm italic font-medium">
                "{currentCourse.quote}"
              </p>
              <span className="text-[11px] font-bold text-blue-700 block mt-1">
                — Animeria Academy Faculty Team
              </span>
            </div>

            {/* Section: Key Tools & Technologies */}
            <div id="course-tools" className="space-y-4 scroll-mt-36">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  <span>Tools & </span>
                  <span className="text-blue-600">Technologies Covered</span>
                </h2>
                <span className="text-xs font-semibold text-slate-400">Industry Standard</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {currentCourse.tools.map((tool, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/30 transition flex items-center gap-3 shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800">{tool}</div>
                      <div className="text-[10px] text-slate-400">Hands-on practice</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Course Curriculum Accordion */}
            <div id="course-curriculum" className="space-y-4 scroll-mt-36">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  <span>Detailed </span>
                  <span className="text-rose-600">Curriculum & Syllabus</span>
                </h2>
                <span className="text-xs font-bold text-slate-500">
                  {currentCourse.modules.length} Comprehensive Modules
                </span>
              </div>

              {/* Accordion list */}
              <div className="space-y-3">
                {currentCourse.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs transition"
                  >
                    <button
                      type="button"
                      onClick={() => toggleModule(idx)}
                      className="w-full px-5 py-3.5 text-left flex items-center justify-between bg-slate-50/80 hover:bg-blue-50/50 transition cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-extrabold text-slate-800">
                        {mod.title}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform ${
                          openModules[idx] ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>

                    {openModules[idx] && (
                      <div className="p-5 bg-white border-t border-slate-100 space-y-2">
                        {mod.topics.map((topic, ti) => (
                          <div key={ti} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Frequently Asked Questions */}
            <div id="course-faqs" className="space-y-4 scroll-mt-36">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                <span>Frequently Asked </span>
                <span className="text-amber-600">Questions</span>
              </h2>

              <div className="space-y-3">
                {currentCourse.faqs.map((faq, fi) => (
                  <div
                    key={fi}
                    className="border border-slate-200/80 rounded-2xl p-4 bg-white shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(fi)}
                      className="w-full text-left flex items-start justify-between gap-2 cursor-pointer"
                    >
                      <div className="flex items-start gap-2.5">
                        <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                          {faq.q}
                        </h5>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          openFaqs[fi] ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>

                    {openFaqs[fi] && (
                      <p className="text-xs text-slate-600 mt-2.5 pl-6 leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column Sticky Sidebar (4 cols): Fee Card & Assistance */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              
              {/* Card 1: Course Fee Card */}
              <div id="course-fee" className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xl space-y-5 scroll-mt-36">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {currentCourse.title.split(' ')[0]} Training Fee
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                    0% EMI Available
                  </span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">
                    Affordable Fee Plan
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    (Scholarships & Early-Bird Discounts Available)
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Monthly EMI Facility Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Free Demo & Counselling Session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Official Verified Certificate on Completion</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenEnquire(currentCourse.title)}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs shadow-md shadow-blue-500/20 transition cursor-pointer"
                  >
                    <span>Enquire About Fee & Batches</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/917979823383?text=Hi%20Animeria,%20please%20share%20the%20fee%20structure%20for%20${encodeURIComponent(currentCourse.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold py-2.5 rounded-xl text-xs shadow-2xs transition"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                    <span>Get Fee on WhatsApp</span>
                  </a>
                </div>

                <div className="pt-2 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>100% transparent & verified fee structure</span>
                </div>
              </div>

              {/* Card 2: Need Help? Talk to Counsellor */}
              <div className="bg-blue-50/70 rounded-2xl p-5 border border-blue-200/80 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">
                    Need Help Choosing?
                  </h5>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Speak directly with our senior counsellor
                  </p>
                  <a
                    href="tel:+917979823383"
                    className="text-xs font-extrabold text-blue-700 hover:underline block mt-0.5"
                  >
                    +91-7979823383
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 6. Pre-Footer Call to Action */}
      <section className="bg-[#081c3c] text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Ready to Master {currentCourse.title}?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Join our next batch and get hands-on practical training with placement assistance.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenEnquire(currentCourse.title)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm shadow-md transition cursor-pointer"
              >
                Book Free Demo Class
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
