import React, { useState } from 'react'
import { Sparkles, Building2, Play, Pause, ExternalLink } from 'lucide-react'

// WhatsApp Icon
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.497 2 12.034c0 1.83.493 3.553 1.348 5.043L2 22l5.053-1.326a9.972 9.972 0 0 0 4.978 1.327c5.535 0 10.031-4.497 10.031-10.034C22.062 6.497 17.566 2 12.031 2zm5.82 14.173c-.244.686-1.42 1.32-1.956 1.378-.49.052-1.127.08-3.64-1.002-3.21-1.38-5.267-4.66-5.428-4.873-.16-.214-1.303-1.733-1.303-3.305 0-1.572.825-2.348 1.118-2.668.293-.32.64-.4.854-.4.213 0 .426 0 .613.01.2.01.468-.076.732.56.267.64.908 2.215.988 2.375.08.16.133.347.027.56-.107.213-.16.347-.32.533-.16.187-.337.417-.481.56-.16.16-.328.334-.141.654.186.32.83 1.36 1.78 2.207 1.222 1.09 2.25 1.428 2.57 1.588.32.16.507.133.694-.08.187-.214.8-1.04 1.013-1.4.214-.36.427-.3.72-.187.294.107 1.868.88 2.188 1.04.32.16.534.24.614.374.08.133.08.773-.16 1.46z" />
    </svg>
  )
}

export default function HiringPartners() {
  const [isPaused, setIsPaused] = useState(false)

  const row1Partners = [
    { name: 'Google', category: 'Tech Giant', color: 'text-blue-600 font-extrabold', borderHover: 'hover:border-blue-300 hover:shadow-blue-50' },
    { name: 'Microsoft', category: 'Cloud & AI', color: 'text-slate-800 font-bold', borderHover: 'hover:border-slate-400 hover:shadow-slate-50' },
    { name: 'amazon', category: 'E-Commerce & AWS', color: 'text-amber-600 font-black tracking-tight', borderHover: 'hover:border-amber-300 hover:shadow-amber-50' },
    { name: 'accenture', category: 'Global Consulting', color: 'text-purple-600 font-black', borderHover: 'hover:border-purple-300 hover:shadow-purple-50' },
    { name: 'TATA / TCS', category: 'Tata Consultancy', color: 'text-blue-800 font-black tracking-wide', borderHover: 'hover:border-blue-300 hover:shadow-blue-50' },
    { name: 'Infosys', category: 'IT Services MNC', color: 'text-sky-600 font-extrabold', borderHover: 'hover:border-sky-300 hover:shadow-sky-50' },
    { name: 'WPP', category: 'Creative & Ads', color: 'text-slate-950 font-black tracking-widest', borderHover: 'hover:border-slate-400 hover:shadow-slate-50' },
    { name: 'IBM', category: 'AI & Hybrid Cloud', color: 'text-blue-700 font-mono font-black tracking-widest', borderHover: 'hover:border-blue-400 hover:shadow-blue-50' },
    { name: 'DELL', category: 'Hardware & Tech', color: 'text-sky-700 font-extrabold tracking-wider', borderHover: 'hover:border-sky-400 hover:shadow-sky-50' },
  ]

  const row2Partners = [
    { name: 'Adobe', category: 'Design & Creative', color: 'text-red-600 font-black tracking-wide', borderHover: 'hover:border-red-300 hover:shadow-red-50' },
    { name: 'Deloitte.', category: 'Audit & Consulting', color: 'text-emerald-700 font-bold tracking-tight', borderHover: 'hover:border-emerald-300 hover:shadow-emerald-50' },
    { name: 'Capgemini', category: 'Digital Transformation', color: 'text-blue-600 font-extrabold', borderHover: 'hover:border-blue-300 hover:shadow-blue-50' },
    { name: 'Flipkart', category: 'E-Commerce Unicorn', color: 'text-blue-600 font-black italic', borderHover: 'hover:border-blue-300 hover:shadow-blue-50' },
    { name: 'Zomato', category: 'FoodTech & Logistics', color: 'text-red-600 font-black italic tracking-tight', borderHover: 'hover:border-red-300 hover:shadow-red-50' },
    { name: 'Paytm', category: 'FinTech Services', color: 'text-sky-600 font-black', borderHover: 'hover:border-sky-300 hover:shadow-sky-50' },
    { name: 'Cognizant', category: 'Enterprise IT', color: 'text-blue-900 font-bold', borderHover: 'hover:border-blue-300 hover:shadow-blue-50' },
    { name: 'HCLTech', category: 'Engineering Tech', color: 'text-purple-700 font-extrabold tracking-wider', borderHover: 'hover:border-purple-300 hover:shadow-purple-50' },
    { name: 'Tech Mahindra', category: 'Digital & Telecom', color: 'text-red-700 font-bold', borderHover: 'hover:border-red-300 hover:shadow-red-50' },
  ]

  // Duplicated arrays for seamless, gapless 360-degree looping
  const duplicatedRow1 = [...row1Partners, ...row1Partners, ...row1Partners]
  const duplicatedRow2 = [...row2Partners, ...row2Partners, ...row2Partners]

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        {/* Header with Live Ticker Badge & Play/Pause Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Placement Network • 350+ Recruiters
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="text-slate-900">Our </span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 bg-clip-text text-transparent">Hiring Partners</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Top MNCs, unicorns, and fast-growing tech startups that regularly hire Animeria graduates.
            </p>
          </div>

          {/* Controls: Auto-sliding Status & Pause/Resume */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs transition"
              title={isPaused ? "Resume auto-slider" : "Pause auto-slider"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-slate-500" />
                  <span>Auto-Sliding</span>
                </>
              )}
            </button>
            <span className="text-[11px] text-slate-400 hidden lg:inline">
              (Hover over logos to inspect)
            </span>
          </div>
        </div>

      </div>

      {/* Outer Slider Wrapper with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left Gradient Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        {/* Right Gradient Edge Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        {/* ROW 1: Automatic Slider moving Left */}
        <div 
          className="animate-marquee flex gap-4 sm:gap-6 py-2.5"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {duplicatedRow1.map((partner, idx) => (
            <div
              key={`row1-${idx}`}
              className={`flex-shrink-0 bg-white border border-slate-200/90 rounded-2xl px-6 py-3.5 flex items-center gap-3.5 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer group select-none ${partner.borderHover}`}
            >
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className={`text-base sm:text-lg block leading-none ${partner.color}`}>
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium group-hover:text-slate-600 transition">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: Automatic Slider moving in Reverse Direction (Right) */}
        <div 
          className="animate-marquee-reverse flex gap-4 sm:gap-6 py-2.5 mt-2"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {duplicatedRow2.map((partner, idx) => (
            <div
              key={`row2-${idx}`}
              className={`flex-shrink-0 bg-white border border-slate-200/90 rounded-2xl px-6 py-3.5 flex items-center gap-3.5 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer group select-none ${partner.borderHover}`}
            >
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className={`text-base sm:text-lg block leading-none ${partner.color}`}>
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium group-hover:text-slate-600 transition">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom WhatsApp Channel for Job Updates Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-100 text-center">
        <a
          href="https://whatsapp.com/channel/0029VbD07MUChq6QT3GeXl2K"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 group"
        >
          <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
          <span>Join Our Channel for Job Updates</span>
          <ExternalLink className="w-3.5 h-3.5 text-emerald-200 group-hover:translate-x-0.5 transition shrink-0" />
        </a>
      </div>
    </section>
  )
}
