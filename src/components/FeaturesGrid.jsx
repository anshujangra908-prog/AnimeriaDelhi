import React, { useState } from 'react'
import { 
  Building2, 
  Globe2, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Search, 
  Check, 
  AlertCircle,
  X 
} from 'lucide-react'

export default function FeaturesGrid({ onOpenEnquire }) {
  const [certId, setCertId] = useState('')
  const [certResult, setCertResult] = useState(null)
  const [verifyModalOpen, setVerifyModalOpen] = useState(false)


  const handleVerify = (e) => {
    e.preventDefault()
    if (!certId.trim()) return

    // Interactive mock verification
    if (certId.trim().toUpperCase().includes('ANIM') || certId.trim().length >= 4) {
      setCertResult({
        status: 'valid',
        student: 'Karan Sharma',
        course: 'Python Full Stack Development',
        grade: 'A+ (Distinction)',
        date: '12 August 2025',
        certCode: certId.trim().toUpperCase(),
      })
    } else {
      setCertResult({
        status: 'invalid',
        message: 'No certificate found with this ID. Please check and try again (Try: ANIM-2025-8821)',
      })
    }
  }

  return (
    <section id="corporate" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
            WHY CHOOSE ANIMERIA
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-1">
            <span className="text-slate-900">Empowering </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Careers & Enterprises</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Corporate Training • Worldwide Online Learning • Verified Certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Corporate Training (HD Image Banner with Link) */}
          <div
            onClick={onOpenEnquire}
            className="lg:col-span-4 rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] flex flex-col justify-between"
            title="Click to enquire for Corporate Training"
          >
            <div className="relative overflow-hidden w-full flex-1 min-h-[360px] bg-slate-100 flex items-center justify-center">
              <img
                src="/corporate-training.jpg"
                alt="Corporate Training - Customized Training Programs for Teams & Organizations"
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            {/* Bottom Action Bar */}
            <div className="p-4 bg-gradient-to-r from-blue-950 via-[#0b2253] to-indigo-950 text-white flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-blue-400" />
                  Corporate Training
                </p>
                <p className="text-[11px] text-blue-200">Customized Programs for Organizations</p>
              </div>
              <span className="bg-blue-600 group-hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded-full text-xs transition flex items-center gap-1 shrink-0 shadow-md">
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>


          {/* Card 2: Worldwide Online Training (HD Image Banner with Link) */}
          <div
            onClick={onOpenEnquire}
            className="lg:col-span-4 rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] flex flex-col justify-between"
            title="Click to join Worldwide Online Training"
          >
            <div className="relative overflow-hidden w-full flex-1 h-[320px] sm:h-[360px] bg-slate-100 flex items-center justify-center">
              <img
                src="/worldwide-training.jpg"
                alt="Worldwide Online Training - Live Classes. Global Community. Real Opportunities."
                className="w-full h-full object-fill group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            {/* Bottom Action Bar */}
            <div className="p-4 bg-gradient-to-r from-blue-950 via-[#0b2253] to-indigo-950 text-white flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-sky-400" />
                  Worldwide Online Training
                </p>
                <p className="text-[11px] text-blue-200">Live Interactive Classes from Anywhere</p>
              </div>
              <span className="bg-blue-600 group-hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded-full text-xs transition flex items-center gap-1 shrink-0 shadow-md">
                <span>Join Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>


          {/* Card 3: Verify Your Certificate (HD Image Banner with Link & Modal) */}
          <div
            onClick={() => setVerifyModalOpen(true)}
            className="lg:col-span-4 rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] flex flex-col justify-between"
            title="Click to verify your certificate"
          >
            <div className="relative overflow-hidden w-full flex-1 min-h-[360px] bg-slate-100 flex items-center justify-center">
              <img
                src="/verify-certificate.jpg"
                alt="Verify Your Certificate - Animeria"
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            {/* Bottom Action Bar */}
            <div className="p-4 bg-gradient-to-r from-blue-950 via-[#0b2253] to-indigo-950 text-white flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Certificate Verification
                </p>
                <p className="text-[11px] text-blue-200">Check Authenticity & Credential</p>
              </div>
              <span className="bg-blue-600 group-hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded-full text-xs transition flex items-center gap-1 shrink-0 shadow-md">
                <span>Verify Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Certificate Verification Modal */}
      {verifyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
            {/* Close Button */}
            <button
              onClick={() => {
                setVerifyModalOpen(false)
                setCertResult(null)
              }}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-extrabold text-slate-900">
              Verify Your Certificate
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Check the authenticity of your Animeria issued course completion certificate.
            </p>

            {/* Form Input */}
            <form onSubmit={handleVerify} className="mt-5 space-y-3">
              <div>
                <label htmlFor="modalCertInput" className="block text-xs font-semibold text-slate-700 mb-1">
                  Certificate Serial / ID
                </label>
                <input
                  id="modalCertInput"
                  type="text"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  placeholder="e.g. ANIM-2025-0142"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-500/20 transition flex items-center justify-center gap-2"
              >
                <span>Verify Credential</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Verification Result Dialog */}
            {certResult && (
              <div className={`mt-5 p-4 rounded-2xl text-xs border ${
                certResult.status === 'valid'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border-rose-200 text-rose-900'
              }`}>
                {certResult.status === 'valid' ? (
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-emerald-700 text-sm mb-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Verified Genuine Certificate</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <p><span className="font-semibold">Candidate:</span> {certResult.student}</p>
                      <p><span className="font-semibold">Course:</span> {certResult.course}</p>
                      <p><span className="font-semibold">Grade:</span> {certResult.grade}</p>
                      <p><span className="font-semibold">Awarded Date:</span> {certResult.date}</p>
                      <p><span className="font-semibold">Verification Code:</span> {certResult.certCode}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
                    <div>
                      <span className="font-bold text-rose-800 block mb-0.5">Verification Failed</span>
                      <span>{certResult.message}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            <p className="text-[11px] text-slate-400 mt-5 text-center">
              ISO 9001:2015 Certified & Industry Recognized Animeria Credentials
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
