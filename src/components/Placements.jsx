import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Calendar, Building, Pause, Play, Sparkles } from 'lucide-react'
import { recentPlacements } from '../data/mockData'

export default function Placements() {
  const [startIndex, setStartIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [visibleCount, setVisibleCount] = useState(4)

  // Handle responsive visible card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(4)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, recentPlacements.length - visibleCount)

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Automatic Slider Timer (Every 3.2 seconds)
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3200)
    return () => clearInterval(timer)
  }, [isPaused, maxIndex])

  return (
    <section 
      id="placements" 
      className="py-16 bg-slate-50 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row with Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Live Placement Tracker
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="text-slate-900">Our Recent </span>
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-500 bg-clip-text text-transparent">Placements</span>
            </h1>
            <p className="text-sm text-slate-600 font-medium mt-1">
              Real Students. Real Success Stories. <span className="font-bold text-blue-600">Be the Next!</span>
            </p>
          </div>

          {/* Carousel Arrows + Play/Pause Status */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            {/* Auto-Slide Status Indicator & Toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs hover:bg-slate-100 transition"
              title={isPaused ? "Resume auto-sliding" : "Pause auto-sliding"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                  <span className="text-slate-600">Paused</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-slate-600">Auto-Sliding</span>
                </>
              )}
            </button>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                aria-label="Previous placements"
                className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-xs transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next placements"
                className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-xs transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Smooth Sliding Placements Track */}
        <div className="relative overflow-hidden -mx-3">
          <div 
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ 
              transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
            }}
          >
            {recentPlacements.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3"
              >
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group hover:-translate-y-1">
                  
                  {/* Student Image Container */}
                  <div className="h-48 overflow-hidden relative bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Role Pill */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-800 shadow-xs">
                      {item.role}
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                      <span>✓ Placed</span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>

                      {/* Placed At */}
                      <div className="mt-2.5 pt-2.5 border-t border-slate-100">
                        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
                          Placed at
                        </span>
                        <div className="text-sm font-extrabold text-slate-800 mt-0.5 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="tracking-wide" style={{ color: item.companyColor }}>
                            {item.company}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata Location & Date */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                startIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
