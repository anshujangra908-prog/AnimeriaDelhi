import React, { useState, useEffect } from 'react'
import { Sparkles, Bot, ArrowRight, X } from 'lucide-react'

export default function WelcomeBanner({ onOpenAi, onNavigate }) {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    // Show toast ~800ms after opening the website so it feels natural and eye-catching
    const timer = setTimeout(() => {
      setVisible(true)
    }, 800)

    // Automatically auto-dismiss after 9 seconds if user doesn't interact
    const autoDismiss = setTimeout(() => {
      handleClose()
    }, 9800)

    return () => {
      clearTimeout(timer)
      clearTimeout(autoDismiss)
    }
  }, [])

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
    }, 300)
  }

  if (!visible) return null

  return (
    <div 
      className={`fixed bottom-5 left-4 sm:left-6 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-[380px] transition-all duration-300 ${
        closing ? 'opacity-0 translate-y-4 scale-95 pointer-events-none' : 'animate-slideInUp'
      }`}
    >
      <div className="relative bg-gradient-to-br from-slate-900 via-[#0a1b38] to-indigo-950 text-white rounded-3xl p-4 sm:p-5 shadow-2xl border-2 border-blue-500/30 backdrop-blur-xl overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>

        {/* Top bar with Icon, Title, and Close */}
        <div className="flex items-start justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md border border-white/20">
                <Bot className="w-5 h-5 text-amber-300" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-900"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-black text-white tracking-tight">
                  Welcome to <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-purple-300 bg-clip-text text-transparent">Animeria.AI</span>!
                </span>
                <span>👋</span>
              </div>
              <span className="text-[10px] text-blue-200 font-semibold flex items-center gap-1">
                <span>Think Ahead. Practical Skills</span>
                <Sparkles className="w-2.5 h-2.5 text-amber-300" />
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-1 rounded-xl hover:bg-white/10 transition cursor-pointer shrink-0"
            title="Dismiss notification"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Body */}
        <p className="text-xs text-slate-300 font-medium mt-3 leading-relaxed relative z-10">
          Future career ya courses ke baare mein koi bhi confusion ho? Hamara AI Career Counselor aapki live madad ke liye tayyar hai! 🚀
        </p>

        {/* Action Buttons */}
        <div className="mt-4 flex items-center gap-2 relative z-10">
          <button
            type="button"
            onClick={() => {
              handleClose()
              if (onOpenAi) onOpenAi()
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2.5 px-3.5 rounded-xl text-xs shadow-md shadow-blue-500/20 transition transform hover:scale-[1.02] cursor-pointer"
          >
            <Bot className="w-3.5 h-3.5 text-blue-200" />
            <span>Ask Animeria AI</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            type="button"
            onClick={() => {
              handleClose()
              if (onNavigate) onNavigate('courses')
            }}
            className="inline-flex items-center justify-center text-xs font-semibold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 px-3 py-2.5 rounded-xl transition cursor-pointer"
          >
            Courses
          </button>
        </div>

        {/* Subtle auto-dismiss countdown line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-[shrink_9s_linear_forwards] origin-left"></div>
        </div>

      </div>
    </div>
  )
}
