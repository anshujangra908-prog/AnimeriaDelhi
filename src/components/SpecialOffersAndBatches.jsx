import React from 'react'
import { ArrowRight, Calendar, Sparkles, CreditCard, Clock, CheckCircle } from 'lucide-react'
import { upcomingBatches } from '../data/mockData'

export default function SpecialOffersAndBatches({ onOpenEnquire, onNavigate }) {
  const [batches, setBatches] = React.useState(upcomingBatches)
  const [offer, setOffer] = React.useState({
    title: 'Navratri Special Offer',
    discount: '50% OFF',
    subtitle: 'on All Basic & Career Foundation Courses',
    note: '⚡ Limited time offer! Valid for first 50 registrations this festive season.'
  })

  React.useEffect(() => {
    fetch('/api/content/batches')
      .then(res => res.json())
      .then(d => { if (d.success && d.data && d.data.length > 0) setBatches(d.data) })
      .catch(e => console.debug('Using cached batches'))

    fetch('/api/content/offer')
      .then(res => res.json())
      .then(d => { if (d.success && d.data) setOffer(d.data) })
      .catch(e => console.debug('Using cached offer'))
  }, [])

  const navratriImage = offer.image || 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop&q=80'

  return (
    <section id="batches" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. Festive Special Offer Banner (Left 4 cols) */}
          <div className="lg:col-span-4 rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-amber-600 via-rose-600 to-red-700 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[420px] group">
            {/* Background Festive Photo with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={navratriImage}
                alt="Navratri Dandiya Special Offer Celebration"
                className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-rose-900/60 to-amber-900/40" />
            </div>

            {/* Background Festive Accents */}
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-yellow-400/10 pointer-events-none z-0"></div>
            <div className="absolute -left-10 -top-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none z-0"></div>

            {/* Top Tag & Sparkle */}
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 text-amber-200 text-xs font-extrabold tracking-wider uppercase border border-amber-400/30 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{offer.title || 'Navratri Dandiya Special'}</span>
                </div>
                <span className="text-[10px] font-extrabold text-amber-200 bg-amber-950/70 px-2.5 py-0.5 rounded-full border border-amber-400/30 shadow-sm">
                  💃 Dandiya Raas
                </span>
              </div>

              {/* Featured Dandiya Celebration Visual Badge */}
              <div className="my-3 relative rounded-2xl overflow-hidden border-2 border-amber-300/50 shadow-xl group-hover:border-amber-300 transition-colors">
                <img
                  src={navratriImage}
                  alt="Dandiya Celebration Photo"
                  className="w-full h-36 sm:h-40 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-amber-200 flex items-center gap-1.5 drop-shadow-md">
                    <span>🪵🪔 Shubh Navratri & Dandiya Utsav Special</span>
                  </span>
                </div>
              </div>

              <div className="mt-2">
                <span className="text-[10px] font-extrabold tracking-widest text-amber-200 uppercase block">
                  SPECIAL DANDIYA FESTIVE DISCOUNT
                </span>
                <div className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-white drop-shadow-md mt-1">
                  {offer.discount || '50% OFF'}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-rose-100 mt-1.5 leading-snug">
                  {offer.subtitle || 'on All Basic & Career Foundation Courses'}
                </p>
              </div>
            </div>

            {/* Note & CTA */}
            <div className="relative z-10 mt-4">
              <div className="mb-3 p-2.5 rounded-xl bg-black/30 backdrop-blur-md border border-white/20 text-xs text-rose-100 font-medium">
                {offer.note || '⚡ Dandiya Night Special Offer! Valid for first 50 registrations this festive season.'}
              </div>

              <button
                type="button"
                onClick={onOpenEnquire}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-extrabold px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <span>Claim Dandiya Offer Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. Upcoming Batches (Middle 5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      <span className="text-slate-900">Upcoming </span>
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Batches</span>
                    </h2>
                    <p className="text-xs text-slate-500">Stay updated with our latest batch schedules</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigate) onNavigate('courses')
                  }}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 transition whitespace-nowrap cursor-pointer"
                >
                  View All Batches →
                </button>
              </div>

              {/* Batches List */}
              <div className="space-y-3.5">
                {batches.map((batch) => (
                  <div
                    key={batch.id}
                    className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/30 transition flex items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                        {batch.course}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                        <span className="font-semibold text-amber-600">{batch.date}</span>
                        <span>•</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-200/70 text-slate-700 font-medium">
                          {batch.mode}
                        </span>
                        <span>•</span>
                        <span>{batch.type}</span>
                      </div>
                    </div>

                    <button
                      onClick={onOpenEnquire}
                      className="px-3.5 py-1.5 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-semibold whitespace-nowrap transition shadow-2xs"
                    >
                      Enroll Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mt-4 text-center">
              * Weekend and evening batches also available upon request.
            </p>
          </div>

          {/* 3. Pay in Easy Monthly EMIs (Right 3 cols) */}
          <div className="lg:col-span-3 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-cyan-50 rounded-3xl p-6 sm:p-8 border border-emerald-200/60 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 mb-5">
                <CreditCard className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                <span className="text-slate-900">Pay in </span>
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">Easy Monthly EMIs</span>
              </h3>
              
              <p className="text-xs text-slate-600 font-medium mt-2 leading-relaxed">
                <span className="font-bold text-emerald-700">Learn Now, Pay Later.</span> Flexible 0% interest EMI options available for all master diploma and certification courses.
              </p>

              <div className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No upfront financial burden</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Instant approval with KYC</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenEnquire}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-bold transition shadow-xs"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
