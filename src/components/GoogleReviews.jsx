import React, { useState } from 'react'
import { Star, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react'
import { googleReviews } from '../data/mockData'

export default function GoogleReviews() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Google Rating Left Card (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              {/* Google G Logo & Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center font-bold text-xl">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    <span>Google </span>
                    <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">Reviews</span>
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Rating text */}
              <div className="mt-5">
                <div className="text-3xl font-extrabold text-slate-900">
                  4.8 <span className="text-sm font-semibold text-slate-400">/ 5.0</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Verified rating based on 500+ student reviews across branches
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 text-xs font-semibold shadow-2xs transition"
              >
                Write a Review
              </a>
            </div>
          </div>

          {/* Student Reviews Cards (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
              {googleReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Header with avatar & stars */}
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 leading-tight">
                          {rev.name}
                        </h4>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {Array.from({ length: rev.stars }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 font-normal leading-relaxed italic">
                      "{rev.review}"
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Student</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro quote note */}
            <div className="mt-3 text-right">
              <span className="text-[11px] text-slate-400 font-medium">
                Showing top verified Google feedback
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
