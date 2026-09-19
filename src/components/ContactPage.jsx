import React, { useState } from 'react'
import { 
  Phone, 
  MessageCircle, 
  PhoneCall, 
  Mail, 
  ShieldCheck, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Globe, 
  Building2, 
  Clock, 
  Plus, 
  Minus,
  Sparkles,
  Navigation
} from 'lucide-react'

// Custom WhatsApp Icon
function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.497 2 12.034c0 1.83.493 3.553 1.348 5.043L2 22l5.053-1.326a9.972 9.972 0 0 0 4.978 1.327c5.535 0 10.031-4.497 10.031-10.034C22.062 6.497 17.566 2 12.031 2zm5.82 14.173c-.244.686-1.42 1.32-1.956 1.378-.49.052-1.127.08-3.64-1.002-3.21-1.38-5.267-4.66-5.428-4.873-.16-.214-1.303-1.733-1.303-3.305 0-1.572.825-2.348 1.118-2.668.293-.32.64-.4.854-.4.213 0 .426 0 .613.01.2.01.468-.076.732.56.267.64.908 2.215.988 2.375.08.16.133.347.027.56-.107.213-.16.347-.32.533-.16.187-.337.417-.481.56-.16.16-.328.334-.141.654.186.32.83 1.36 1.78 2.207 1.222 1.09 2.25 1.428 2.57 1.588.32.16.507.133.694-.08.187-.214.8-1.04 1.013-1.4.214-.36.427-.3.72-.187.294.107 1.868.88 2.188 1.04.32.16.534.24.614.374.08.133.08.773-.16 1.46z" />
    </svg>
  )
}

export default function ContactPage({ onOpenEnquire }) {
  const [activeMapTab, setActiveMapTab] = useState('delhi')
  const [zoomLevel, setZoomLevel] = useState(15)

  return (
    <div id="contact-section" className="bg-slate-50 border-t border-slate-200 scroll-mt-20">
      
      {/* 1. Contact Us Hero Banner */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-blue-50/80 via-white to-slate-50 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                GET IN TOUCH
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                <span className="text-slate-900">Contact </span>
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 bg-clip-text text-transparent">Us</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-medium max-w-lg leading-relaxed">
                We are here to help you with admissions, course information and all your queries. For grievances and complaints, please use the dedicated options below.
              </p>

              {/* Hand-written script motif */}
              <div className="pt-2">
                <span className="font-serif italic text-2xl sm:text-3xl text-blue-900 font-bold tracking-wide block">
                  Your Learning Partner Always
                </span>
              </div>
            </div>

            {/* Right Visual (Berlin Landmark Building + Globe Graphic) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=900&auto=format&fit=crop&q=80"
                  alt="Berlin Germany Landmark"
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                />

                {/* Globe backdrop gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-blue-900/20"></div>

                {/* Top Right Tagline */}
                <div className="absolute top-5 right-5 text-right">
                  <div className="text-[11px] font-bold text-white tracking-widest uppercase drop-shadow-md">
                    GLOBAL EDUCATION<br />
                    LOCAL OPPORTUNITIES
                  </div>
                  <div className="w-10 h-0.5 bg-blue-400 ml-auto mt-1"></div>
                </div>

                {/* Floating Head Office Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 max-w-xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
                      Head Office
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      Berlin, Germany
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Global Support, Higher Standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Four Contact Channels Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Channel 1: Admission Queries */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Admission Queries
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                Call or WhatsApp
              </p>

              <div className="mt-4 space-y-1">
                <a 
                  href="tel:+917979823383" 
                  className="block text-sm font-extrabold text-slate-900 hover:text-blue-600 transition"
                >
                  +91-7979823383
                </a>
                <a 
                  href="tel:+919090679190" 
                  className="block text-sm font-extrabold text-slate-900 hover:text-blue-600 transition"
                >
                  +91-9090679190
                </a>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon - Sat | 10:00 AM - 7:00 PM</span>
            </div>
          </div>

          {/* Channel 2: Chat on WhatsApp */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                Get quick responses
              </p>
            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/917979823383?text=Hi%20Animeria,%20I%20want%20information%20regarding%20courses."
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 rounded-xl shadow-xs transition"
              >
                <span>Chat Now</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Channel 3: Landline */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Landline
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                Official Campus Desk
              </p>

              <div className="mt-4">
                <a 
                  href="tel:01145073228" 
                  className="block text-base font-extrabold text-slate-900 hover:text-blue-600 transition"
                >
                  011-45073228
                </a>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon - Sat | 10:00 AM - 7:00 PM</span>
            </div>
          </div>

          {/* Channel 4: Grievance / Complaint */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Grievance / Complaint
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                Please email us for any grievance or complaint. Our support team will assist you.
              </p>
            </div>

            <div className="mt-5">
              <a
                href="mailto:grievance@animeria.edu.in?subject=Grievance%20Registration"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 rounded-xl shadow-xs transition"
              >
                <span>Send Email</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* 3. Grievance Notice Banner */}
        <div className="mt-8 rounded-2xl bg-blue-50/70 border border-blue-200/80 p-5 flex items-start gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              All grievances and complaints will be handled directly from our Head Office in Berlin, Germany.
            </h4>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              To ensure transparency and fairness, all grievance redressal is managed by our global support team and not by any branch.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Locations ("Visit Us") */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                OUR LOCATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-1">
                <span className="text-slate-900">Visit </span>
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Our Campus & Offices</span>
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">
                Come and experience our learning environment. We'd be happy to welcome you.
              </p>
            </div>

            <div className="hidden sm:block">
              <span className="font-serif italic text-2xl text-blue-700 font-bold">
                Learn Grow Succeed
              </span>
            </div>
          </div>

          {/* Two Location Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Location 1: Main Branch (Dwarka Sector 7) */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row">
              <div className="p-7 sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold mb-3">
                    Main Branch
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Dwarka Sector 7
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mb-4">
                    New Delhi, India
                  </p>

                  <div className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>A-7, 3rd Floor, Ramphal Chowk, Sector 7, Dwarka, New Delhi - 110075</span>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://maps.google.com/?q=Ramphal+Chowk+Sector+7+Dwarka+New+Delhi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-xs transition"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="sm:w-1/2 relative min-h-[220px]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80"
                  alt="Animeria Institute Dwarka Branch Entrance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-lg text-xs font-bold text-blue-900 shadow-xs">
                  Animeria Institute
                </div>
              </div>
            </div>

            {/* Location 2: Head Office (Berlin, Germany) */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row">
              <div className="p-7 sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold mb-3">
                    Head Office
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Berlin, Germany
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mb-4">
                    International Headquarters
                  </p>

                  <div className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Friedrichstrasse 123, 10117 Berlin, Germany</span>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://maps.google.com/?q=Friedrichstrasse+123+Berlin+Germany"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-xs transition"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="sm:w-1/2 relative min-h-[220px]">
                <img
                  src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=600&auto=format&fit=crop&q=80"
                  alt="Berlin Head Office Building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-lg text-xs font-bold text-blue-900 shadow-xs">
                  Berlin Head Office
                </div>
              </div>
            </div>

          </div>

          {/* 5. Interactive Google Map Section */}
          <div className="mt-12 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg">
            
            {/* Top Bar with Map Location Switcher */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 bg-slate-50/90">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveMapTab('delhi')}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-xs ${
                    activeMapTab === 'delhi'
                      ? 'bg-blue-600 text-white shadow-blue-500/20 ring-2 ring-blue-600/30'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>Delhi Campus (Dwarka Sec 7)</span>
                </button>

                <button
                  onClick={() => setActiveMapTab('berlin')}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-xs ${
                    activeMapTab === 'berlin'
                      ? 'bg-blue-600 text-white shadow-blue-500/20 ring-2 ring-blue-600/30'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-sky-400" />
                  <span>Berlin Head Office (Germany)</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={
                    activeMapTab === 'delhi'
                      ? 'https://www.google.com/maps/dir/?api=1&destination=Ramphal+Chowk+Sector+7+Dwarka+New+Delhi'
                      : 'https://www.google.com/maps/dir/?api=1&destination=Friedrichstrasse+123+10117+Berlin+Germany'
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  Google Maps Live
                </span>
              </div>
            </div>

            {/* Google Maps Container */}
            <div className="relative w-full h-[450px] sm:h-[500px] bg-slate-100">
              {/* Actual Google Maps Iframe */}
              <iframe
                title={activeMapTab === 'delhi' ? "Animeria Delhi Campus Location" : "Animeria Berlin Head Office Location"}
                src={
                  activeMapTab === 'delhi'
                    ? "https://maps.google.com/maps?q=Ramphal+Chowk,+Sector+7,+Dwarka,+New+Delhi,+Delhi+110075&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    : "https://maps.google.com/maps?q=Friedrichstrasse+123,+10117+Berlin,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
                }
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/90 pointer-events-auto">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {activeMapTab === 'delhi' ? 'Animeria Institute - Delhi Campus' : 'Animeria Global Head Office'}
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                      {activeMapTab === 'delhi'
                        ? 'A-7, 3rd Floor, Ramphal Chowk, Sector 7, Dwarka, New Delhi - 110075'
                        : 'Friedrichstrasse 123, 10117 Berlin, Germany'}
                    </p>
                    <div className="mt-2.5 flex items-center gap-2">
                      <a
                        href={
                          activeMapTab === 'delhi'
                            ? 'https://maps.google.com/?q=Ramphal+Chowk+Sector+7+Dwarka+New+Delhi'
                            : 'https://maps.google.com/?q=Friedrichstrasse+123+Berlin+Germany'
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg shadow-xs transition"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
