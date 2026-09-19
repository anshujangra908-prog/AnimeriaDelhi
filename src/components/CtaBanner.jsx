import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CtaBanner({ onOpenEnquire }) {
  return (
    <section className="bg-[#081c3c] text-white py-14 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 rounded-full bg-sky-400/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Text Content */}
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Transform Your Future</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              <span>Ready to </span>
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Upgrade Your Career?</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Join Animeria and take the next step towards a brighter future with practical industry training.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEnquire}
              className="bg-white hover:bg-slate-100 text-[#081c3c] font-bold px-7 py-3 rounded-full text-xs sm:text-sm shadow-lg transition-all hover:scale-105"
            >
              Enquire Now
            </button>

            <button
              onClick={onOpenEnquire}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-blue-600/30 text-white border border-white/40 hover:border-white font-semibold px-7 py-3 rounded-full text-xs sm:text-sm transition-all"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
