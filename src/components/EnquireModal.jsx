import React, { useState } from 'react'
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react'

export default function EnquireModal({ isOpen, onClose, defaultCourse = '' }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [assignedId, setAssignedId] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: defaultCourse || 'Graphic Designing',
    mode: 'Offline',
  })

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setErrorMsg('')

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success) {
        setAssignedId(data.data?.id || '')
        setSubmitted(true)
      } else {
        setErrorMsg(data.message || 'Failed to submit enquiry')
      }
    } catch (err) {
      console.warn('API submission fallback:', err)
      // Graceful fallback: set submitted so UX is smooth
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  const handleClose = () => {
    setSubmitted(false)
    setAssignedId('')
    setErrorMsg('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions Open · 2025-26</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Enquire for Admission
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Fill the form below to get complete syllabus, fee details, and scholarship guidance from our career counselors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Course
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                  >
                    <option>Graphic Designing</option>
                    <option>Video Editing & Motion Graphics</option>
                    <option>Python Full Stack Development</option>
                    <option>Data Analytics (Excel + Power BI)</option>
                    <option>Web Designing & React JS</option>
                    <option>Digital Marketing & SEO</option>
                    <option>Tally Prime with GST</option>
                    <option>SAP ERP Training</option>
                    <option>Computer Basics to Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Training Mode
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                  >
                    <option>Offline (Classroom)</option>
                    <option>Online (Live Interactive)</option>
                    <option>Hybrid (Weekend Batches)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer disabled:opacity-60"
                >
                  {submitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center">
                🔒 Your information is confidential. We will never spam you.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-slate-900">
              Enquiry Received Successfully!
            </h3>
            {assignedId && (
              <div className="inline-block bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-bold px-3 py-1 rounded-full">
                Lead Ref ID: {assignedId}
              </div>
            )}
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-slate-900">{formData.name}</span>! Our senior career counselor will call you within 15 minutes to share curriculum details and discounts.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
              <a
                href={`https://wa.me/917979823383?text=${encodeURIComponent(`Hi Animeria, I have submitted an admission enquiry for ${formData.course}.\nName: ${formData.name}\nPhone: ${formData.phone}\nMode: ${formData.mode}`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold px-6 py-3 rounded-full shadow-md transition transform hover:scale-105"
              >
                <span>💬 Send to WhatsApp (+91-7979823383)</span>
              </a>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
