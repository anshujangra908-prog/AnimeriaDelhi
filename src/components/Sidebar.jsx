import React, { useState } from 'react'
import { 
  Home, 
  BookOpen, 
  PhoneCall, 
  ShieldCheck, 
  Calendar, 
  Sparkles, 
  ChevronRight, 
  Headphones, 
  ExternalLink,
  ChevronDown,
  FileText,
  Award,
  Users,
  Scale,
  Building2,
  Layers,
  Lock,
  Bot
} from 'lucide-react'

// WhatsApp Icon
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.497 2 12.034c0 1.83.493 3.553 1.348 5.043L2 22l5.053-1.326a9.972 9.972 0 0 0 4.978 1.327c5.535 0 10.031-4.497 10.031-10.034C22.062 6.497 17.566 2 12.031 2zm5.82 14.173c-.244.686-1.42 1.32-1.956 1.378-.49.052-1.127.08-3.64-1.002-3.21-1.38-5.267-4.66-5.428-4.873-.16-.214-1.303-1.733-1.303-3.305 0-1.572.825-2.348 1.118-2.668.293-.32.64-.4.854-.4.213 0 .426 0 .613.01.2.01.468-.076.732.56.267.64.908 2.215.988 2.375.08.16.133.347.027.56-.107.213-.16.347-.32.533-.16.187-.337.417-.481.56-.16.16-.328.334-.141.654.186.32.83 1.36 1.78 2.207 1.222 1.09 2.25 1.428 2.57 1.588.32.16.507.133.694-.08.187-.214.8-1.04 1.013-1.4.214-.36.427-.3.72-.187.294.107 1.868.88 2.188 1.04.32.16.534.24.614.374.08.133.08.773-.16 1.46z" />
    </svg>
  )
}

export default function Sidebar({ 
  currentPage = 'home',
  onNavigate,
  onOpenEnquire,
  onOpenAi,
  isOpen = false,
  onClose
}) {
  const [coursesExpanded, setCoursesExpanded] = useState(false)
  const [aboutExpanded, setAboutExpanded] = useState(false)

  const handleNavClick = (pageId, scrollTarget = null, courseName = null) => {
    if (onNavigate) {
      onNavigate(pageId, scrollTarget, courseName)
    }
    if (onClose) onClose()
  }

  const menuItems = [
    {
      id: 'home',
      name: 'Home',
      icon: Home,
      action: () => handleNavClick('home'),
    },
    {
      id: 'courses',
      name: 'Courses',
      icon: BookOpen,
      action: () => handleNavClick('courses'),
      hasSubmenu: true,
      badge: 'Popular',
      badgeColor: 'bg-blue-100 text-blue-700',
    },
    {
      id: 'admission',
      name: 'Admission Form',
      icon: FileText,
      action: () => handleNavClick('admission'),
      badge: 'Apply Now',
      badgeColor: 'bg-emerald-100 text-emerald-700 font-bold',
    },
    {
      id: 'about',
      name: 'About Us',
      icon: Users,
      action: () => {
        handleNavClick('about')
        setAboutExpanded(prev => !prev)
      },
      hasSubmenu: true,
      submenuType: 'about',
    },
    {
      id: 'policies',
      name: 'Our Policies',
      icon: Scale,
      action: () => handleNavClick('policies'),
      badge: '14 Rules',
      badgeColor: 'bg-slate-100 text-slate-700 font-medium',
    },
    {
      id: 'contact',
      name: 'Contact Us',
      icon: PhoneCall,
      action: () => handleNavClick('contact'),
    },
  ]

  const aboutSubList = [
    {
      name: 'Certifications',
      icon: Award,
      badge: 'Govt Verified',
      badgeColor: 'bg-amber-100 text-amber-800 font-bold',
      action: () => handleNavClick('certifications'),
      pageId: 'certifications',
    },
  ]

  const courseSubList = [
    { name: 'Data Analytics Course', key: 'Data Analytics', badge: 'Bestseller', badgeColor: 'bg-blue-100 text-blue-700' },
    { name: 'Python Full Stack', key: 'Python Full Stack', badge: 'Job Ready', badgeColor: 'bg-amber-100 text-amber-700' },
    { name: 'Web Designing & UI/UX', key: 'Web Designing', badge: 'Career Track', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { name: 'Graphic Designing Pro', key: 'Graphic Designing', badge: 'Trending', badgeColor: 'bg-pink-100 text-pink-700' },
    { name: 'Video Editing & VFX', key: 'Video Editing', badge: 'High Demand', badgeColor: 'bg-rose-100 text-rose-700' },
    { name: 'Digital Marketing & SEO', key: 'Digital Marketing', badge: 'High Growth', badgeColor: 'bg-indigo-100 text-indigo-700' },
    { name: 'Tally Prime with GST', key: 'Tally Prime with GST', badge: 'Govt Compliant', badgeColor: 'bg-teal-100 text-teal-700' },
    { name: 'SAP ERP Training', key: 'SAP Course', badge: 'Enterprise', badgeColor: 'bg-cyan-100 text-cyan-700' },
    { name: 'Computer Foundation', key: 'Computer Courses', badge: 'Foundation', badgeColor: 'bg-purple-100 text-purple-700' },
  ]

  const shortcuts = [
    {
      name: 'Ask Animeria AI',
      icon: Bot,
      color: 'text-purple-600 bg-purple-50',
      action: () => {
        if (onOpenAi) onOpenAi()
        if (onClose) onClose()
      },
      badge: 'Live AI',
    },
    {
      name: 'Verify Certificate',
      icon: ShieldCheck,
      color: 'text-sky-600 bg-sky-50',
      action: () => handleNavClick('home', 'corporate'),
    },
    {
      name: 'Upcoming Batches',
      icon: Calendar,
      color: 'text-indigo-600 bg-indigo-50',
      action: () => handleNavClick('home', 'batches'),
    },
    {
      name: 'Festive 50% OFF',
      icon: Sparkles,
      color: 'text-rose-600 bg-rose-50',
      action: () => onOpenEnquire('Festive Offer 50%'),
      badge: 'Offer',
    },
    {
      name: 'Chat on WhatsApp',
      icon: WhatsAppIcon,
      color: 'text-emerald-600 bg-emerald-50',
      isExternal: true,
      href: 'https://wa.me/917979823383?text=Hi%20Animeria,%20I%20need%20assistance.',
    },
  ]

  const sidebarContent = (
    <div className="flex flex-col h-full overflow-y-auto px-3 py-4 space-y-6">
      
      {/* 1. Main Facebook-Style Navigation Sections */}
      <div>
        <span className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
          Pages & Navigation
        </span>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = (currentPage === item.id)

            return (
              <div key={item.id} className="space-y-1">
                <button
                  onClick={item.action}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all group ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold shadow-xs'
                      : 'text-slate-700 hover:bg-slate-100/80 hover:text-blue-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{item.name}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {item.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                    {item.hasSubmenu && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation()
                          if (item.submenuType === 'about') {
                            setAboutExpanded(!aboutExpanded)
                          } else {
                            setCoursesExpanded(!coursesExpanded)
                          }
                        }}
                        className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${
                          item.submenuType === 'about'
                            ? (aboutExpanded ? 'rotate-180' : '')
                            : (coursesExpanded ? 'rotate-180' : '')
                        }`} />
                      </span>
                    )}
                  </div>
                </button>

                {/* Submenu for courses */}
                {item.hasSubmenu && item.submenuType !== 'about' && coursesExpanded && (
                  <div className="ml-7 pl-3 border-l-2 border-blue-200 space-y-1.5 py-1.5">
                    {/* Highlighted Tagline Card */}
                    <div className="p-2.5 rounded-xl bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 text-white shadow-xs mb-2">
                      <div className="text-[9px] font-black text-amber-400 uppercase tracking-wide flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                        MNC Standards
                      </div>
                      <div className="text-[11px] font-black leading-tight mt-0.5">
                        Crafted Courses Meeting MNC Standards
                      </div>
                      <div className="text-[10px] text-blue-200 font-semibold mt-0.5">
                        Get Practical Skills, Join Now !
                      </div>
                    </div>

                    {courseSubList.map((course, ci) => (
                      <button
                        key={ci}
                        type="button"
                        onClick={() => handleNavClick('courses', null, course.key)}
                        className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 transition flex items-center justify-between gap-1 group cursor-pointer"
                      >
                        <span className="truncate group-hover:font-semibold">{course.name}</span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${course.badgeColor}`}>
                          {course.badge}
                        </span>
                      </button>
                    ))}

                    <button
                      type="button"
                      onClick={() => handleNavClick('courses')}
                      className="w-full text-center py-1.5 text-[11px] font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition mt-1 block cursor-pointer"
                    >
                      View All Programs &rarr;
                    </button>
                  </div>
                )}

                {/* Submenu for About Us (contains Certifications & Registrations) */}
                {item.hasSubmenu && item.submenuType === 'about' && aboutExpanded && (
                  <div className="ml-9 pl-2 border-l-2 border-slate-200 space-y-1.5 py-1">
                    {aboutSubList.map((sub, si) => {
                      const SubIcon = sub.icon
                      const isSubActive = (currentPage === sub.pageId && sub.pageId === 'certifications')
                      return (
                        <button
                          key={si}
                          onClick={sub.action}
                          className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition flex items-center justify-between gap-1.5 group/sub ${
                            isSubActive
                              ? 'bg-amber-50 text-amber-900 font-bold border border-amber-200 shadow-2xs'
                              : 'font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/60'
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <SubIcon className={`w-3.5 h-3.5 shrink-0 ${isSubActive ? 'text-amber-600' : 'text-slate-400 group-hover/sub:text-blue-500'}`} />
                            <span className="truncate">{sub.name}</span>
                          </span>
                          {sub.badge && (
                            <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full shrink-0 ${sub.badgeColor}`}>
                              {sub.badge}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* 2. Facebook-Style Shortcuts Section */}
      <div className="pt-2 border-t border-slate-200/80">
        <span className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
          Quick Shortcuts
        </span>

        <div className="space-y-1">
          {shortcuts.map((sc, sci) => {
            const ScIcon = sc.icon
            if (sc.isExternal) {
              return (
                <a
                  key={sci}
                  href={sc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100/80 hover:text-emerald-700 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${sc.color}`}>
                      <ScIcon className="w-4 h-4" />
                    </div>
                    <span>{sc.name}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
                </a>
              )
            }

            return (
              <button
                key={sci}
                onClick={sc.action}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100/80 hover:text-blue-600 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg ${sc.color}`}>
                    <ScIcon className="w-4 h-4" />
                  </div>
                  <span>{sc.name}</span>
                </div>

                {sc.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                    {sc.badge}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* 3. Bottom Mini Student Support Widget */}
      <div className="mt-auto pt-4">
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/80 space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-600 text-white">
              <Headphones className="w-3.5 h-3.5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Career Hotline</h5>
              <span className="text-[10px] text-slate-500">10:00 AM - 7:00 PM</span>
            </div>
          </div>
          <a
            href="tel:+917979823383"
            className="block text-xs font-extrabold text-blue-700 hover:underline"
          >
            +91-7979823383
          </a>
          <button
            onClick={() => {
              onOpenEnquire('Admissions')
              if (onClose) onClose()
            }}
            className="w-full py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold shadow-2xs transition"
          >
            Request Call Back
          </button>
        </div>

        <p className="text-[10px] text-slate-400 text-center mt-3">
          © {new Date().getFullYear()} Animeria.AI
        </p>
      </div>

    </div>
  )

  return (
    <>
      {/* Desktop Fixed Left Sidebar (Facebook Style) */}
      <aside className="hidden lg:block fixed top-20 left-0 bottom-0 w-64 xl:w-72 bg-white border-r border-slate-200/80 z-30 shadow-xs">
        {sidebarContent}
      </aside>

      {/* Mobile Slide-in Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs animate-in fade-in"
          />
          {/* Drawer content */}
          <div className="relative w-72 max-w-[80vw] bg-white h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  )
}
