import React from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ArrowUp, 
  Globe, 
  Sparkles,
  ExternalLink,
  Lock
} from 'lucide-react'

// Brand SVG Icons
function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  )
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function YouTubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.497 2 12.034c0 1.83.493 3.553 1.348 5.043L2 22l5.053-1.326a9.972 9.972 0 0 0 4.978 1.327c5.535 0 10.031-4.497 10.031-10.034C22.062 6.497 17.566 2 12.031 2zm5.82 14.173c-.244.686-1.42 1.32-1.956 1.378-.49.052-1.127.08-3.64-1.002-3.21-1.38-5.267-4.66-5.428-4.873-.16-.214-1.303-1.733-1.303-3.305 0-1.572.825-2.348 1.118-2.668.293-.32.64-.4.854-.4.213 0 .426 0 .613.01.2.01.468-.076.732.56.267.64.908 2.215.988 2.375.08.16.133.347.027.56-.107.213-.16.347-.32.533-.16.187-.337.417-.481.56-.16.16-.328.334-.141.654.186.32.83 1.36 1.78 2.207 1.222 1.09 2.25 1.428 2.57 1.588.32.16.507.133.694-.08.187-.214.8-1.04 1.013-1.4.214-.36.427-.3.72-.187.294.107 1.868.88 2.188 1.04.32.16.534.24.614.374.08.133.08.773-.16 1.46z" />
    </svg>
  )
}

export default function Footer({ onOpenEnquire, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNav = (page, targetId = null) => {
    if (onNavigate) onNavigate(page)
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#07162c] text-slate-300 pt-16 pb-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5-Column Grid matching Animeria Website */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info & Social Links (3.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div 
              className="cursor-pointer inline-block" 
              onClick={() => handleNav('home')}
            >
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Animeria<span className="text-blue-500">.AI</span>
              </div>
              <div className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
                Learn <span className="text-blue-500">|</span> Build <span className="text-blue-500">|</span> Grow
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A diversified brand in education, technology, manpower, education services and business consultation, creating opportunities for a brighter tomorrow.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a 
                href="https://www.facebook.com/animeriadelhincr" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition shadow-sm hover:scale-110"
                title="Facebook - @animeriadelhincr"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/animeria_delhi/" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-white flex items-center justify-center transition shadow-sm hover:scale-110"
                title="Instagram - @animeria_delhi"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@bestcomputerinstituteindwarka" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition shadow-sm hover:scale-110"
                title="YouTube - @bestcomputerinstituteindwarka"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://whatsapp.com/channel/0029VbD07MUChq6QT3GeXl2K" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition shadow-sm hover:scale-110"
                title="WhatsApp Job Updates Channel"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition shadow-sm hover:scale-110"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-blue-400 transition text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-blue-400 transition text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'verticals')} className="hover:text-blue-400 transition text-left">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-blue-400 transition text-left">
                  All Courses
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admission')} className="hover:text-blue-400 transition text-left">
                  Online Admission
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('certifications')} className="hover:text-blue-400 transition text-left">
                  Certifications & Legal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-blue-400 transition text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services (2.5 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('about', 'verticals')} className="hover:text-blue-400 transition text-left">
                  Education & Training
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'verticals')} className="hover:text-blue-400 transition text-left">
                  Animeria.AI
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'verticals')} className="hover:text-blue-400 transition text-left">
                  Animeria Technologies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'verticals')} className="hover:text-blue-400 transition text-left">
                  Manpower & Recruitment
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'verticals')} className="hover:text-blue-400 transition text-left">
                  Education Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'verticals')} className="hover:text-blue-400 transition text-left">
                  Business Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Global Presence (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Global Presence
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-xs">India</strong>
                  <span className="text-slate-400 text-[11px]">Delhi | Bangalore | Patna</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-xs">Germany</strong>
                  <span className="text-slate-400 text-[11px]">Berlin, Germany</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-xs">Online Training</strong>
                  <span className="text-slate-400 text-[11px]">Worldwide Live Interactive</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 5: Get in Touch & Mini Map (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="tel:+917979823383" className="hover:text-white transition font-medium">
                  +91-7979823383
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:info@animeria.com" className="hover:text-white transition font-medium">
                  info@animeria.com
                </a>
              </div>
            </div>

            {/* Enquire Button */}
            <div className="pt-1">
              <button
                onClick={onOpenEnquire}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-xs transition flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Chota Sa Google Map */}
            <div className="pt-2">
              <div className="rounded-xl overflow-hidden border border-slate-700/80 shadow-md relative group bg-slate-900">
                <iframe
                  title="Animeria Institute Dwarka Campus Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2477758348887!2d77.06584217550058!3d28.592323775687796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b11634bda71%3A0x6b30fef8d4b3b28b!2sRamphal%20Chowk%20Rd%2C%20Sector%207%20Dwarka%2C%20Dwarka%2C%20Delhi%2C%20110075!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-24 opacity-85 hover:opacity-100 transition-opacity"
                ></iframe>
                <a
                  href="https://maps.google.com/?q=Ramphal+Chowk+Sector+7+Dwarka+Delhi"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-1.5 right-1.5 bg-slate-950/90 hover:bg-blue-600 text-[10px] text-white font-semibold px-2 py-0.5 rounded shadow flex items-center gap-1 transition"
                  title="Open full Google Maps"
                >
                  <MapPin className="w-2.5 h-2.5 text-rose-400" />
                  <span>Dwarka Campus</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip matching Animeria Website */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Animeria. All rights reserved.</p>
          
          <div className="flex items-center gap-4 text-xs">
            <button 
              onClick={() => handleNav('admin')} 
              className="hover:text-blue-400 transition font-bold text-slate-300 flex items-center gap-1"
            >
              <Lock className="w-3 h-3 text-blue-400" />
              <span>Staff / Admin Login</span>
            </button>
            <span className="text-slate-700">|</span>
            <button 
              onClick={() => handleNav('sitemap')} 
              className="hover:text-slate-300 transition"
            >
              Sitemap
            </button>
            <span className="text-slate-700">|</span>
            <button 
              onClick={() => handleNav('policies')} 
              className="hover:text-slate-300 transition"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button 
              onClick={() => handleNav('policies')} 
              className="hover:text-slate-300 transition"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-blue-600 text-slate-400 hover:text-white transition flex items-center gap-1"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

