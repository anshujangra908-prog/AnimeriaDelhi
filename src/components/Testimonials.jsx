import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, X, Sparkles, ExternalLink } from 'lucide-react'
import { studentTestimonials } from '../data/mockData'

function YouTubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  // Close modal on Escape key for seamless UX
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveVideo(null)
    }
    if (activeVideo) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [activeVideo])

  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'reviews', label: 'Student Reviews' },
    { id: 'editing', label: 'Video Editing & VFX' },
    { id: 'design', label: 'Graphic Design' },
    { id: 'coding', label: 'Python & Tech' },
    { id: 'erp', label: 'SAP & ERP' },
  ]

  const filteredVideos = activeCategory === 'all'
    ? studentTestimonials
    : studentTestimonials.filter(item => {
        if (activeCategory === 'reviews') return item.tag.toLowerCase().includes('review') || item.tag.toLowerCase().includes('portfolio')
        if (activeCategory === 'editing') return item.course.toLowerCase().includes('editing') || item.course.toLowerCase().includes('vfx')
        if (activeCategory === 'design') return item.course.toLowerCase().includes('graphic') || item.course.toLowerCase().includes('design')
        if (activeCategory === 'coding') return item.course.toLowerCase().includes('python') || item.course.toLowerCase().includes('coding')
        if (activeCategory === 'erp') return item.course.toLowerCase().includes('sap') || item.course.toLowerCase().includes('erp')
        return true
      })

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-red-50 text-red-700 border border-red-200">
                <YouTubeIcon className="w-3.5 h-3.5 text-red-600" />
                <span>OFFICIAL YOUTUBE CHANNEL • @bestcomputerinstituteindwarka</span>
              </span>
              <span className="hidden sm:inline text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500 font-bold hidden sm:inline">100% Genuine Student Reviews</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
              <span>Student </span>
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                Testimonials & Video Reviews
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-medium leading-relaxed">
              Watch real student experiences, live portfolio showcases, and practical classroom demonstrations recorded directly at our Animeria Dwarka campus.
            </p>
          </div>

          {/* YouTube Channel CTA Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://www.youtube.com/@bestcomputerinstituteindwarka/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-red-600/20 transition-all group cursor-pointer"
            >
              <YouTubeIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Watch on YouTube (50+ Videos)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Filter Tabs for Quick Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid (Lite Facade for 0ms initial lag) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-red-400 hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              {/* Thumbnail Container with Lightweight Facade */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Animated Red Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-red-700 transition-all duration-200 ring-4 ring-white/20">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md backdrop-blur-md shadow-xs ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Campus / Duration Badge */}
                <div className="absolute bottom-2.5 right-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  <YouTubeIcon className="w-3 h-3 text-red-500" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Title, Speaker & Details */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                      {item.course}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Animeria Official
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 font-medium">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="text-slate-500 font-semibold text-[11px]">
                    Student: <strong className="text-slate-800">{item.studentName}</strong>
                  </span>
                  <span className="inline-flex items-center gap-1 text-red-600 group-hover:underline">
                    <span>Play Video</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Verification Guarantee */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm border border-blue-900/40">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-extrabold flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Want to verify student feedback in person?</span>
            </h4>
            <p className="text-xs text-slate-300">
              Visit our Dwarka Sector-7 or Dwarka Mor campus anytime between 10:00 AM – 7:00 PM to talk to ongoing batch students directly.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@bestcomputerinstituteindwarka/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-white text-slate-900 hover:bg-blue-50 text-xs font-extrabold transition shrink-0 shadow-sm flex items-center gap-1.5"
          >
            <span>Visit @bestcomputerinstituteindwarka</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Zero-Lag On-Demand YouTube Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="bg-slate-950 rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full border border-slate-800 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-slate-800 text-white bg-slate-900">
              <div className="min-w-0 pr-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-900">
                    {activeVideo.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-300 truncate">
                    {activeVideo.course}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-white truncate mt-0.5">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                title="Close Video (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Responsive 16:9 YouTube Video Embed (Lazy inserted on-demand) */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
              />
            </div>

            {/* Modal Bottom Bar */}
            <div className="p-4 bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <p className="text-slate-300 font-medium">
                  {activeVideo.subtitle}
                </p>
                <span className="text-[11px] text-slate-400">
                  Speaker: <strong className="text-white">{activeVideo.studentName}</strong> • Animeria Institute Delhi
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition"
                >
                  <YouTubeIcon className="w-3.5 h-3.5 text-white" />
                  <span>Open in YouTube</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
