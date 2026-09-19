import React, { useState } from 'react'
import { 
  ShieldCheck, 
  Lock, 
  Laptop, 
  CheckCircle2, 
  User, 
  Calendar, 
  Mail, 
  Phone, 
  Upload, 
  ArrowRight, 
  ArrowLeft, 
  GraduationCap, 
  Users, 
  BarChart3, 
  Award, 
  Globe, 
  Headphones, 
  Check, 
  FileText, 
  CreditCard, 
  Send,
  Building,
  MapPin,
  Sparkles
} from 'lucide-react'

// WhatsApp Icon
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.497 2 12.034c0 1.83.493 3.553 1.348 5.043L2 22l5.053-1.326a9.972 9.972 0 0 0 4.978 1.327c5.535 0 10.031-4.497 10.031-10.034C22.062 6.497 17.566 2 12.031 2zm5.82 14.173c-.244.686-1.42 1.32-1.956 1.378-.49.052-1.127.08-3.64-1.002-3.21-1.38-5.267-4.66-5.428-4.873-.16-.214-1.303-1.733-1.303-3.305 0-1.572.825-2.348 1.118-2.668.293-.32.64-.4.854-.4.213 0 .426 0 .613.01.2.01.468-.076.732.56.267.64.908 2.215.988 2.375.08.16.133.347.027.56-.107.213-.16.347-.32.533-.16.187-.337.417-.481.56-.16.16-.328.334-.141.654.186.32.83 1.36 1.78 2.207 1.222 1.09 2.25 1.428 2.57 1.588.32.16.507.133.694-.08.187-.214.8-1.04 1.013-1.4.214-.36.427-.3.72-.187.294.107 1.868.88 2.188 1.04.32.16.534.24.614.374.08.133.08.773-.16 1.46z" />
    </svg>
  )
}

export default function AdmissionFormPage({ onNavigate }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [sameAsMobile, setSameAsMobile] = useState(true)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [assignedId, setAssignedId] = useState('')

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: 'Male',
    mobile: '',
    whatsapp: '',
    email: '',
    course: 'Data Analytics Course',
    qualification: 'Graduate',
    mode: 'Offline (Classroom)',
    batchTime: 'Weekday (Morning)',
    guardianName: '',
    guardianPhone: '',
    address: '',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '',
    paymentOption: 'Token Registration (₹2,000)',
    agreed: false,
  })

  const handleMobileChange = (val) => {
    setFormData(prev => ({
      ...prev,
      mobile: val,
      whatsapp: sameAsMobile ? val : prev.whatsapp
    }))
  }

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPhotoPreview(url)
    }
  }

  const handleNext = async (e) => {
    e.preventDefault()
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 300, behavior: 'smooth' })
    } else {
      setSubmitting(true)
      try {
        const res = await fetch('/api/admissions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        const data = await res.json()
        if (data.success) {
          setAssignedId(data.data?.id || '')
        }
      } catch (err) {
        console.warn('Admission API submission fallback:', err)
      } finally {
        setSubmitting(false)
        setSubmitted(true)
        window.scrollTo({ top: 200, behavior: 'smooth' })
      }
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 300, behavior: 'smooth' })
    }
  }

  const stepsList = [
    { num: 1, title: 'Personal Details', desc: 'Tell us about yourself' },
    { num: 2, title: 'Education & Course', desc: 'Select your course and preferences' },
    { num: 3, title: 'Parent & Address', desc: 'Provide parent/guardian and address details' },
    { num: 4, title: 'Documents', desc: 'Upload required documents' },
    { num: 5, title: 'Fee & Payment', desc: 'Complete your payment' },
    { num: 6, title: 'Review & Submit', desc: 'Check details and submit' },
  ]

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      
      {/* 1. Hero Banner */}
      <section className="relative pt-10 pb-12 bg-gradient-to-b from-blue-50/80 via-white to-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                START YOUR LEARNING JOURNEY
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span className="text-slate-900">Online </span>
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Admission Form</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-medium max-w-lg leading-relaxed">
                Join Animeria and gain future-ready skills for a brighter tomorrow. Fill out your details below to secure your seat.
              </p>

              {/* 4 Feature Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3">
                {[
                  { icon: ShieldCheck, text: 'Easy Online Admission' },
                  { icon: Lock, text: 'Secure Payment' },
                  { icon: Laptop, text: 'Learn Online or Offline' },
                  { icon: CheckCircle2, text: 'Get Instant Confirmation' },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2"
                    >
                      <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 leading-tight">
                        {item.text}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Hero Graphic */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                    alt="Admission Candidate"
                    className="w-full h-64 sm:h-72 object-cover object-top"
                  />
                </div>
                {/* Script Motif */}
                <div className="absolute -top-3 -right-3 rotate-6 bg-white px-3.5 py-1.5 rounded-2xl shadow-lg border border-blue-100">
                  <span className="font-serif italic text-xs sm:text-sm font-bold text-blue-700">
                    Skills · Education · Opportunity · A Better You
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Stepper Header Indicator */}
      <div className="bg-white border-b border-slate-200/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            {/* Horizontal Line behind numbers */}
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-slate-200 -z-0"></div>

            {stepsList.map((step) => {
              const isCompleted = currentStep > step.num
              const isCurrent = currentStep === step.num

              return (
                <div
                  key={step.num}
                  onClick={() => setCurrentStep(step.num)}
                  className="relative z-10 flex flex-col items-center cursor-pointer group"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                    isCurrent
                      ? 'bg-blue-600 text-white ring-4 ring-blue-100 shadow-md scale-110'
                      : isCompleted
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white border-2 border-slate-300 text-slate-500'
                  }`}>
                    {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : step.num}
                  </div>
                  <span className={`text-[11px] font-bold mt-2 text-center max-w-[80px] hidden sm:block leading-tight ${
                    isCurrent ? 'text-blue-700 font-extrabold' : 'text-slate-600'
                  }`}>
                    {step.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* 3. Main Form Section & Right Journey Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form Body Card (Left 8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            
            {!submitted ? (
              <form onSubmit={handleNext}>
                
                {/* Step Header */}
                <div className="flex items-center gap-3.5 pb-6 border-b border-slate-100 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shadow-xs">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                      Step {currentStep} of 6
                    </span>
                    <h2 className="text-xl font-extrabold text-slate-900">
                      {stepsList[currentStep - 1].title}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      {stepsList[currentStep - 1].desc}
                    </p>
                  </div>
                </div>

                {/* STEP 1: Personal Details */}
                {currentStep === 1 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    
                    {/* Full Name & DOB */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Date of Birth *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={formData.dob}
                            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Gender Radio */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Gender *
                      </label>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
                        {['Male', 'Female', 'Other', 'Prefer not to say'].map((gen) => (
                          <label key={gen} className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="gender"
                              value={gen}
                              checked={formData.gender === gen}
                              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span>{gen}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Mobile & WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Mobile Number *
                        </label>
                        <div className="flex rounded-xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-600">
                          <span className="bg-slate-100 px-3 py-2.5 text-xs font-bold text-slate-700 border-r border-slate-200 flex items-center gap-1">
                            🇮🇳 +91
                          </span>
                          <input
                            type="tel"
                            required
                            value={formData.mobile}
                            onChange={(e) => handleMobileChange(e.target.value)}
                            placeholder="Enter mobile number"
                            className="w-full px-3 py-2 text-xs sm:text-sm outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-bold text-slate-700">
                            WhatsApp Number *
                          </label>
                          <label className="flex items-center gap-1 text-[11px] text-blue-600 cursor-pointer font-semibold">
                            <input
                              type="checkbox"
                              checked={sameAsMobile}
                              onChange={(e) => {
                                setSameAsMobile(e.target.checked)
                                if (e.target.checked) {
                                  setFormData(prev => ({ ...prev, whatsapp: prev.mobile }))
                                }
                              }}
                              className="rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span>Same as mobile</span>
                          </label>
                        </div>
                        <div className="flex rounded-xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-600">
                          <span className="bg-slate-100 px-3 py-2.5 text-xs font-bold text-slate-700 border-r border-slate-200 flex items-center gap-1">
                            🇮🇳 +91
                          </span>
                          <input
                            type="tel"
                            required
                            disabled={sameAsMobile}
                            value={formData.whatsapp}
                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                            placeholder="Enter WhatsApp number"
                            className="w-full px-3 py-2 text-xs sm:text-sm outline-none disabled:bg-slate-50 disabled:text-slate-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    {/* Profile Photo Upload */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Profile Photo *
                      </label>
                      <div className="border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-2xl p-6 text-center transition cursor-pointer relative bg-slate-50/50">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        {photoPreview ? (
                          <div className="flex flex-col items-center gap-2">
                            <img
                              src={photoPreview}
                              alt="Uploaded profile preview"
                              className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 shadow-md"
                            />
                            <span className="text-xs font-bold text-emerald-600">Photo Uploaded Successfully! (Click to change)</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-1.5">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                              <Upload className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-bold text-slate-800">Upload Photo</span>
                            <span className="text-[11px] text-slate-400 font-medium">JPG, PNG (Max 2 MB)</span>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                )}

                {/* STEP 2: Education & Course */}
                {currentStep === 2 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Select Preferred Course *
                        </label>
                        <select
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white"
                        >
                          <option>Data Analytics Course</option>
                          <option>Python Full Stack Development</option>
                          <option>Web Designing & React JS</option>
                          <option>Graphic Designing Master</option>
                          <option>Video Editing & Motion Graphics</option>
                          <option>Digital Marketing & SEO</option>
                          <option>Tally Prime with GST</option>
                          <option>SAP ERP Training</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Highest Qualification *
                        </label>
                        <select
                          value={formData.qualification}
                          onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white"
                        >
                          <option>10th Standard</option>
                          <option>12th Standard</option>
                          <option>Undergraduate (Pursuing)</option>
                          <option>Graduate (Completed)</option>
                          <option>Post Graduate / Working</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Training Mode *
                        </label>
                        <select
                          value={formData.mode}
                          onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white"
                        >
                          <option>Offline (Dwarka Sector 7 Campus)</option>
                          <option>Online (Live Interactive Virtual Classroom)</option>
                          <option>Hybrid (Weekend Classroom + Online Labs)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Batch Timing *
                        </label>
                        <select
                          value={formData.batchTime}
                          onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white"
                        >
                          <option>Weekday (Morning 10 AM - 1 PM)</option>
                          <option>Weekday (Afternoon 2 PM - 5 PM)</option>
                          <option>Weekend (Sat & Sun 11 AM - 3 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Parent & Address */}
                {currentStep === 3 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Father's / Guardian's Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.guardianName}
                          onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                          placeholder="Enter guardian's name"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Guardian's Contact Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.guardianPhone}
                          onChange={(e) => setFormData({ ...formData, guardianPhone: e.target.value })}
                          placeholder="+91 98765 00000"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Residential Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="House / Flat No., Colony / Street"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">City *</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">State *</label>
                        <input
                          type="text"
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Pincode *</label>
                        <input
                          type="text"
                          required
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          placeholder="110075"
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Documents Upload */}
                {currentStep === 4 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <p className="text-xs text-slate-500 font-medium">
                      Please upload scanned copies or clear photos of your verification documents (PDF, JPG or PNG).
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 space-y-2">
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <h4 className="text-xs font-bold text-slate-800">10th / 12th / Degree Marksheet</h4>
                        </div>
                        <input type="file" className="text-xs file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        <span className="text-[10px] text-slate-400 block">Max size: 5 MB</span>
                      </div>

                      <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5 text-emerald-600" />
                          <h4 className="text-xs font-bold text-slate-800">Govt ID Proof (Aadhaar / Passport)</h4>
                        </div>
                        <input type="file" className="text-xs file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" />
                        <span className="text-[10px] text-slate-400 block">Max size: 5 MB</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: Fee & Payment */}
                {currentStep === 5 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-900">Selected Program</span>
                        <span className="text-xs font-black text-blue-900">{formData.course}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-blue-700">
                        <span>Registration & Seat Booking Fee</span>
                        <span className="font-bold">₹2,000 (Adjustable in total tuition)</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-xs font-bold text-slate-700">
                        Choose Fee Payment Preference *
                      </label>

                      {['Token Registration (₹2,000)', 'Full Course Fee (With 10% One-Time Discount)', 'Flexible 0% Monthly EMI'].map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition ${
                            formData.paymentOption === opt
                              ? 'border-blue-600 bg-blue-50/50 font-bold text-blue-900'
                              : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="paymentOption"
                              value={opt}
                              checked={formData.paymentOption === opt}
                              onChange={(e) => setFormData({ ...formData, paymentOption: e.target.value })}
                              className="text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-xs">{opt}</span>
                          </div>
                          <CreditCard className="w-4 h-4 text-slate-400" />
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 6: Review & Submit */}
                {currentStep === 6 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Application Summary
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div><span className="text-slate-500">Applicant:</span> <strong className="text-slate-900">{formData.fullName || 'Candidate'}</strong></div>
                        <div><span className="text-slate-500">Program:</span> <strong className="text-blue-700">{formData.course}</strong></div>
                        <div><span className="text-slate-500">Mobile:</span> <strong className="text-slate-900">+91 {formData.mobile}</strong></div>
                        <div><span className="text-slate-500">Email:</span> <strong className="text-slate-900">{formData.email}</strong></div>
                        <div><span className="text-slate-500">Mode:</span> <strong className="text-slate-900">{formData.mode}</strong></div>
                        <div><span className="text-slate-500">Payment:</span> <strong className="text-slate-900">{formData.paymentOption}</strong></div>
                      </div>
                    </div>

                    <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer pt-2">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                        className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>
                        I hereby declare that the details furnished above are true and complete to the best of my knowledge and agree to abide by the admission regulations of Animeria Institute.
                      </span>
                    </label>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-8">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : <div></div>}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-full shadow-lg shadow-blue-500/25 transition-all hover:scale-105 disabled:opacity-60 cursor-pointer"
                  >
                    <span>
                      {submitting 
                        ? 'Registering Application...' 
                        : (currentStep === 6 ? 'Submit Application' : 'Save & Next')}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            ) : (
              /* Success Submission Card */
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                    Admission Form Submitted!
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    Welcome to Animeria, {formData.fullName}!
                  </h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Your application ID is <strong className="text-blue-700 font-mono font-bold bg-blue-50 px-2 py-0.5 rounded">{assignedId || 'ADM-2026-PENDING'}</strong>. Our admissions officer will verify your documents and send your enrollment letter within 24 hours.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/917979823383?text=${encodeURIComponent(`Hi Animeria, I have completed my online admission application.\nApp ID: ${assignedId || 'ADM-2026'}\nName: ${formData.fullName}\nPhone: ${formData.mobile}\nCourse: ${formData.course}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-md transition transform hover:scale-105 cursor-pointer"
                  >
                    <span>💬 Send Application to WhatsApp (+91-7979823383)</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setCurrentStep(1)
                    }}
                    className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate('home')
                    }}
                    className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 shadow-md cursor-pointer"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Admission Journey & Support (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 1. Your Admission Journey Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">Your Admission Journey</h4>
                  <p className="text-[11px] text-slate-500">A few simple steps to a brighter future.</p>
                </div>
              </div>

              {/* Vertical Stepper List */}
              <div className="space-y-3.5 relative">
                {stepsList.map((st) => {
                  const isDone = currentStep > st.num
                  const isCur = currentStep === st.num

                  return (
                    <div key={st.num} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 ${
                        isCur 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : isDone 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : st.num}
                      </div>
                      <div>
                        <h5 className={`text-xs font-bold leading-tight ${isCur ? 'text-blue-700 font-extrabold' : 'text-slate-800'}`}>
                          {st.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 2. Need Help? Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Need Help?</h4>
                  <p className="text-[11px] text-slate-500">Our admission team is here to assist you.</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 font-medium pt-1">
                <a href="tel:+917979823383" className="flex items-center gap-2 hover:text-blue-600 transition">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>+91-7979823383</span>
                </a>

                <a href="mailto:info@animeria.com" className="flex items-center gap-2 hover:text-blue-600 transition">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>info@animeria.com</span>
                </a>

                <a 
                  href="https://wa.me/917979823383?text=Hi%20Animeria,%20I%20need%20help%20with%20my%20admission%20form." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-emerald-700 font-semibold hover:underline"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="flex items-center gap-2 text-slate-400 text-[11px] pt-1">
                  <span>🕒 Mon - Sat, 10:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 4. Five Pillars Feature Strip */}
      <section className="py-10 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {[
              { title: 'Job-Oriented Courses', icon: GraduationCap },
              { title: 'Expert Trainers', icon: Users },
              { title: 'Practical Learning', icon: BarChart3 },
              { title: 'Career Guidance', icon: Award },
              { title: 'Global Online Training', icon: Globe },
            ].map((pillar, pi) => {
              const Icon = pillar.icon
              return (
                <div key={pi} className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {pillar.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Blue CTA Banner */}
      <section className="bg-[#0b2b6d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold text-blue-300 uppercase tracking-widest">
                INVEST IN YOUR FUTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
                Learn Today, Build a Better Tomorrow
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 font-medium mt-1">
                Join thousands of learners who are growing with Animeria.
              </p>
            </div>

            <div>
              <button
                onClick={() => {
                  if (onNavigate) onNavigate('courses')
                }}
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition"
              >
                <span>Explore Our Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
