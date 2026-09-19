import React, { useState } from 'react'
import { 
  Search, 
  ArrowRight, 
  Menu, 
  X,
  ChevronDown,
  Award,
  Users,
  Layers,
  ShieldCheck,
  Bot,
  Sparkles,
  BarChart3,
  Code2,
  Layout,
  Palette,
  Film,
  TrendingUp,
  FileSpreadsheet,
  Building2,
  GraduationCap
} from 'lucide-react'

export const COURSE_TRACKS = [
  {
    title: 'Data & Software Tech',
    icon: Code2,
    color: 'bg-blue-100 text-blue-700',
    durationNote: '4 - 6 Months • 100% Practical',
    courses: [
      {
        key: 'Data Analytics',
        title: 'Data Analytics Master Course',
        tools: 'SQL • Power BI • Python • Advanced Excel',
        duration: '4-6 Months',
        badge: 'Bestseller',
        badgeColor: 'bg-blue-100 text-blue-700',
        icon: BarChart3,
        iconBg: 'bg-blue-50 text-blue-600',
      },
      {
        key: 'Python Full Stack',
        title: 'Python Full Stack Web Dev',
        tools: 'Python • Django • FastAPI • React.js • PostgreSQL',
        duration: '6 Months',
        badge: 'Job Guaranteed',
        badgeColor: 'bg-amber-100 text-amber-800',
        icon: Code2,
        iconBg: 'bg-amber-50 text-amber-600',
      },
      {
        key: 'Web Designing',
        title: 'Web Designing & UI/UX',
        tools: 'HTML5 • Tailwind CSS • JavaScript • React • Figma',
        duration: '4-6 Months',
        badge: 'Career Track',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        icon: Layout,
        iconBg: 'bg-emerald-50 text-emerald-600',
      }
    ]
  },
  {
    title: 'Creative Media & Growth',
    icon: Palette,
    color: 'bg-purple-100 text-purple-700',
    durationNote: '3 - 6 Months • Studio Workstation Labs',
    courses: [
      {
        key: 'Graphic Designing',
        title: 'Graphic Designing Pro',
        tools: 'Photoshop • Illustrator • InDesign • CorelDraw',
        duration: '4-6 Months',
        badge: 'Trending',
        badgeColor: 'bg-pink-100 text-pink-700',
        icon: Palette,
        iconBg: 'bg-pink-50 text-pink-600',
      },
      {
        key: 'Video Editing',
        title: 'Video Editing & Motion VFX',
        tools: 'Premiere Pro • After Effects • DaVinci Resolve',
        duration: '4-6 Months',
        badge: 'High Demand',
        badgeColor: 'bg-rose-100 text-rose-700',
        icon: Film,
        iconBg: 'bg-rose-50 text-rose-600',
      },
      {
        key: 'Digital Marketing',
        title: 'Digital Marketing & Growth',
        tools: 'Google Ads • Meta Ads • SEO • Analytics GA4',
        duration: '3-5 Months',
        badge: 'High Growth',
        badgeColor: 'bg-indigo-100 text-indigo-700',
        icon: TrendingUp,
        iconBg: 'bg-indigo-50 text-indigo-600',
      }
    ]
  },
  {
    title: 'Corporate Finance & ERP',
    icon: FileSpreadsheet,
    color: 'bg-emerald-100 text-emerald-700',
    durationNote: '3 - 6 Months • CA & Enterprise Cases',
    courses: [
      {
        key: 'Tally Prime with GST',
        title: 'Tally Prime with GST & Tax',
        tools: 'Accounting • GST Returns • TDS • Balance Sheet',
        duration: '3-4 Months',
        badge: 'Govt Compliant',
        badgeColor: 'bg-teal-100 text-teal-700',
        icon: FileSpreadsheet,
        iconBg: 'bg-teal-50 text-teal-600',
      },
      {
        key: 'SAP Course',
        title: 'SAP ERP Financials & Systems',
        tools: 'SAP GUI • S/4HANA • FI/CO Module • Enterprise',
        duration: '4-6 Months',
        badge: 'Enterprise',
        badgeColor: 'bg-cyan-100 text-cyan-800',
        icon: Building2,
        iconBg: 'bg-cyan-50 text-cyan-600',
      },
      {
        key: 'Computer Courses',
        title: 'Computer Fundamentals',
        tools: 'MS Office 365 • Excel • Typing Speed (35+ WPM)',
        duration: '3-6 Months',
        badge: 'Foundational',
        badgeColor: 'bg-purple-100 text-purple-700',
        icon: GraduationCap,
        iconBg: 'bg-purple-50 text-purple-600',
      }
    ]
  }
]

// Flattened list for instant live search
const ALL_SEARCHABLE_COURSES = COURSE_TRACKS.flatMap(t => t.courses)

export default function Navbar({ onOpenEnquire, onNavigate, onToggleSidebar, onOpenAi }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const dropdownRef = React.useRef(null)

  // Click outside listener to close dropdown when user clicks anywhere else
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCoursesDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const searchResults = searchQuery.trim().length > 0
    ? ALL_SEARCHABLE_COURSES.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.tools.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.key.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-2xs h-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Left Side: Mobile Menu Button + Logo + Facebook-Style Search */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Mobile / Tablet Sidebar Toggle Button */}
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition cursor-pointer"
              aria-label="Toggle Navigation Sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Official Animeria.AI Logo */}
            <button 
              type="button" 
              onClick={() => {
                if (onNavigate) onNavigate('home')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center group shrink-0 border-none bg-transparent p-0 cursor-pointer text-left"
            >
              <img
                src="/logo.jpg"
                alt="Animeria.AI - India's Most Trusted Educational Brand"
                decoding="async"
                fetchPriority="high"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain py-1 group-hover:scale-[1.03] transition-transform duration-200"
              />
            </button>

            {/* Facebook-Style Search Bar with Live Instant Autocomplete */}
            <div className="relative hidden md:block">
              <div className="flex items-center bg-slate-100/90 hover:bg-slate-200/70 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 rounded-full px-4 py-2 border border-slate-200/80 transition-all w-52 lg:w-72">
                <Search className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                <input
                  type="text"
                  placeholder="Search courses, tools, skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 250)}
                  className="bg-transparent text-xs text-slate-800 placeholder:text-slate-400 outline-none w-full"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-slate-400 hover:text-slate-600 ml-1 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Instant Search Results Dropdown */}
              {searchFocused && searchResults.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Matching Programs ({searchResults.length})
                  </div>
                  <div className="space-y-1 max-h-72 overflow-y-auto">
                    {searchResults.map((course, idx) => {
                      const CIcon = course.icon
                      return (
                        <button
                          key={idx}
                          type="button"
                          onMouseDown={() => {
                            setSearchQuery('')
                            onNavigate('courses', null, course.key)
                          }}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50 transition flex items-center gap-3 group cursor-pointer"
                        >
                          <div className={`p-1.5 rounded-lg ${course.iconBg}`}>
                            <CIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 truncate">
                              {course.title}
                            </div>
                            <div className="text-[10px] text-slate-400 truncate">
                              {course.tools}
                            </div>
                          </div>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${course.badgeColor}`}>
                            {course.badge}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Navigation Links with Dropdown for Desktop */}
          <nav className="hidden xl:flex items-center gap-1 text-xs font-bold text-slate-700">
            <button
              onClick={() => onNavigate('home')}
              className="px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-slate-100 transition cursor-pointer"
            >
              Home
            </button>
            
            {/* Rich Courses Mega Menu Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative py-1.5"
            >
              <button
                type="button"
                onClick={() => setCoursesDropdownOpen(prev => !prev)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  coursesDropdownOpen ? 'text-blue-600 bg-blue-50 font-extrabold' : 'hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                <span>Courses</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  coursesDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`} />
              </button>

              {/* Mega Dropdown Panel */}
              <div 
                className={`absolute top-full left-[-160px] lg:left-[-220px] xl:left-[-260px] w-[880px] xl:w-[960px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-5 transition-all duration-200 z-50 transform ${
                  coursesDropdownOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible pointer-events-none translate-y-2'
                }`}
              >
                {/* 1. Header with Requested Taglines */}
                <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 text-white p-4 sm:p-5 rounded-2xl mb-4 border border-blue-800/40 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        MNC Standards Curriculum
                      </span>
                      <span className="text-slate-400 text-xs hidden md:inline">•</span>
                      <span className="text-[11px] text-slate-300 font-medium hidden md:inline">100% Practical & Placement-Focused</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
                      Crafted Courses Meeting MNC Standards
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-amber-400">
                      Get Practical Skills, Join Now !
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setCoursesDropdownOpen(false)
                        onNavigate('courses')
                      }}
                      className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-2 rounded-xl transition shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Full Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCoursesDropdownOpen(false)
                        if (onOpenEnquire) onOpenEnquire('Free Demo Class')
                      }}
                      className="text-xs font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-xl transition border border-white/15 cursor-pointer"
                    >
                      Free Demo
                    </button>
                  </div>
                </div>

                {/* 2. Three Specialized Learning Tracks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {COURSE_TRACKS.map((track, ti) => {
                    const TrackIcon = track.icon
                    return (
                      <div key={ti} className="bg-slate-50/70 border border-slate-200/70 rounded-xl p-3 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-200/80">
                            <div className={`p-1.5 rounded-lg ${track.color}`}>
                              <TrackIcon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                              {track.title}
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            {track.courses.map((c, ci) => {
                              const CIcon = c.icon
                              return (
                                <button
                                  key={ci}
                                  type="button"
                                  onClick={() => {
                                    setCoursesDropdownOpen(false)
                                    onNavigate('courses', null, c.key)
                                  }}
                                  className="w-full text-left p-2 rounded-xl hover:bg-white hover:shadow-xs transition border border-transparent hover:border-slate-200/80 group cursor-pointer"
                                >
                                  <div className="flex items-start gap-2.5">
                                    <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${c.iconBg} group-hover:scale-105 transition-transform`}>
                                      <CIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-1">
                                        <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 truncate">
                                          {c.title}
                                        </span>
                                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${c.badgeColor}`}>
                                          {c.badge}
                                        </span>
                                      </div>
                                      <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5 font-medium">
                                        {c.tools}
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        <div className="pt-2 mt-2 border-t border-slate-200/60 text-right">
                          <span className="text-[10px] font-semibold text-slate-400">
                            {track.durationNote}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* 3. Bottom AI Counselor Bar */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Need help deciding the right course for your career?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setCoursesDropdownOpen(false)
                        if (onOpenAi) onOpenAi()
                      }}
                      className="inline-flex items-center gap-1 font-bold text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-2.5 py-1 rounded-lg transition"
                    >
                      <Bot className="w-3 h-3" />
                      <span>Ask Animeria AI</span>
                    </button>
                    <span className="text-slate-300">|</span>
                    <a
                      href="tel:+917979823383"
                      className="font-bold text-blue-600 hover:underline"
                    >
                      Call: +91-7979823383
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* About Us Dropdown Menu (Contains Certifications) */}
            <div className="relative group/navdrop py-1.5">
              <button
                onClick={() => onNavigate('about')}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-slate-100 transition"
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/navdrop:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-60 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 opacity-0 invisible group-hover/navdrop:opacity-100 group-hover/navdrop:visible transition-all duration-200 z-50 transform translate-y-1 group-hover/navdrop:translate-y-0">
                <button
                  onClick={() => onNavigate('certifications')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50 transition flex items-center gap-2.5 text-xs text-slate-800 hover:text-amber-900"
                >
                  <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold flex items-center gap-1.5">
                      <span>Certifications</span>
                      <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full font-black">Verified</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-normal">MCA, PAN, GST, MSME Reg</div>
                  </div>
                </button>
              </div>
            </div>

            <button
              onClick={() => onNavigate('admission')}
              className="px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-slate-100 transition"
            >
              Admission
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-3 py-1.5 rounded-lg hover:text-blue-600 hover:bg-slate-100 transition"
            >
              Contact
            </button>
          </nav>

          {/* Right Side: Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* AI Counselor Button */}
            <button
              type="button"
              onClick={onOpenAi}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-full shadow-md shadow-blue-600/20 transition-all cursor-pointer transform hover:scale-[1.02]"
              title="Ask AI Career Counselor"
            >
              <Bot className="w-4 h-4 text-blue-200" />
              <span className="hidden sm:inline">Animeria AI</span>
              <span className="sm:hidden">AI</span>
              <Sparkles className="w-3 h-3 text-amber-300" />
            </button>

            {/* Mobile search toggle */}
            <button
              onClick={() => onOpenEnquire('Search Query')}
              className="md:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-full"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Enquire Now CTA Button */}
            <button
              onClick={() => onOpenEnquire('Enquiry')}
              className="inline-flex items-center gap-1.5 border border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-2xs transition-all"
            >
              <span>Enquire Now</span>
            </button>

            {/* Enroll Now CTA Button -> Opens Online Admission Form */}
            <button
              onClick={() => {
                if (onNavigate) onNavigate('admission')
              }}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full shadow-md shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}
