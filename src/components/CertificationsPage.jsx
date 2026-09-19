import React, { useState, useEffect } from 'react'
import { 
  ShieldCheck, 
  Award, 
  FileCheck, 
  Building2, 
  ExternalLink, 
  CheckCircle2, 
  X, 
  FileText, 
  Scale, 
  Globe, 
  ChevronRight, 
  Stamp, 
  BadgeCheck, 
  Eye, 
  PhoneCall, 
  Sparkles,
  Lock,
  AlertCircle
} from 'lucide-react'

export default function CertificationsPage({ onNavigate, onOpenEnquire }) {
  const [selectedDoc, setSelectedDoc] = useState(null)
  const [windowBlurred, setWindowBlurred] = useState(false)
  const [screenshotBlocked, setScreenshotBlocked] = useState(false)

  // Anti-Screenshot & Screen Capture Protection
  useEffect(() => {
    if (!selectedDoc) {
      setWindowBlurred(false)
      return
    }

    // 1. Snipping tool / App-switch detection: blur window masks the document
    const handleBlur = () => {
      setWindowBlurred(true)
    }
    const handleFocus = () => {
      setWindowBlurred(false)
    }

    // 2. Intercept PrintScreen key and save/print keyboard shortcuts
    const handleKeyDown = (e) => {
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('').catch(() => {})
        }
        setScreenshotBlocked(true)
        setTimeout(() => setScreenshotBlocked(false), 3500)
      }

      // Block Ctrl+S, Ctrl+P, Ctrl+U
      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'u'].includes(e.key.toLowerCase())) {
        e.preventDefault()
        e.stopPropagation()
        setScreenshotBlocked(true)
        setTimeout(() => setScreenshotBlocked(false), 3500)
      }
    }

    window.addEventListener('blur', handleBlur)
    window.addEventListener('focus', handleFocus)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyDown)

    return () => {
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyDown)
    }
  }, [selectedDoc])

  const certificationsList = [
    {
      id: 'incorporation',
      title: 'Company Incorporation',
      badge: 'MCA Certified',
      badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
      icon: Building2,
      regNumber: 'CIN: U74999DL2019PTC351540',
      authority: 'Ministry of Corporate Affairs (MCA), Govt. of India',
      act: 'Incorporated under Companies Act, 2013',
      date: '19th June 2019',
      status: 'Active & In Good Standing',
      description: 'Officially registered private limited entity authorized to impart specialized education, AI training, software development and professional services.',
      buttonText: 'View Certificate',
      isSecure: true,
      modalData: {
        certTitle: 'CERTIFICATE OF INCORPORATION',
        issuer: 'MINISTRY OF CORPORATE AFFAIRS - ROC DELHI',
        govtNotice: 'Government of India | Ministry of Corporate Affairs',
        subText: '[Pursuant to sub-section (2) of section 7 and sub-section (1) of section 8 of the Companies Act, 2013 and rule 18 of the Companies (Incorporation) Rules, 2014]',
        cin: 'U74999DL2019PTC351540',
        companyName: 'ANIMERIA PRIVATE LIMITED',
        address: 'E-600 Basement, Palam Extn, Sector-7, Ramphal Chowk, Dwarka, New Delhi, Delhi, 110077',
        issuedDate: '19/06/2019',
        signatory: 'Registrar of Companies, National Capital Territory of Delhi and Haryana',
      }
    },
    {
      id: 'pan',
      title: 'Permanent Account Number (PAN)',
      badge: 'Income Tax Dept',
      badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      icon: Scale,
      regNumber: 'PAN: AASCA4174C',
      authority: 'Income Tax Department, Government of India',
      act: 'Income Tax Act, 1961',
      date: '19/06/2019',
      status: 'Verified Corporate Entity',
      description: 'Permanent tax identification number issued by the Income Tax Department of India for nationwide compliance and lawful operation.',
      buttonText: 'View PAN Card',
      isSecurePan: true,
      modalData: {
        certTitle: 'INCOME TAX DEPARTMENT - GOVT. OF INDIA',
        issuer: 'GOVERNMENT OF INDIA',
        govtNotice: 'Permanent Account Number Card / स्थायी लेखा संख्या कार्ड',
        subText: 'Under Section 139A of Income Tax Act 1961',
        cin: 'AASCA4174C',
        companyName: 'ANIMERIA PRIVATE LIMITED',
        address: 'Income Tax PAN Services Unit, NSDL, Pune - 411016',
        issuedDate: '19/06/2019',
        signatory: 'Digitally signed by Income Tax PAN Services Unit, NSDL eGovernance',
      }
    },
    {
      id: 'gst',
      title: 'Goods and Services Tax (GST)',
      badge: 'CBIC Compliant',
      badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
      icon: FileCheck,
      regNumber: 'GSTIN: 07AASCA4174C1ZN',
      authority: 'Department of Revenue, Ministry of Finance, Govt. of India',
      act: 'Central Goods and Services Tax Act, 2017',
      date: '14/11/2019',
      status: 'Active Taxpayer (Regular)',
      description: 'Official GST registration issued under Form GST REG-06 for lawful educational training and IT consultation services with valid tax invoicing.',
      buttonText: 'View GST Certificate',
      isSecureGst: true,
      modalData: {
        certTitle: 'REGISTRATION CERTIFICATE (FORM GST REG-06)',
        issuer: 'GOVERNMENT OF INDIA - GST COUNCIL',
        govtNotice: 'Government of India | Form GST REG-06 [See Rule 10(1)]',
        subText: 'Registration Certificate issued under Central Goods and Services Tax Act, 2017',
        cin: '07AASCA4174C1ZN',
        companyName: 'ANIMERIA PRIVATE LIMITED',
        tradeName: 'ANIMERIA PRIVATE LIMITED',
        constitution: 'Private Limited Company',
        address: 'E-600 BASEMENT, PALAM EXTN, SECTOR-7, RAMPHAL CHOWK, DWARKA, New Delhi, Delhi, 110077',
        issuedDate: '14/11/2019',
        validity: 'From 14/11/2019 To Not Applicable',
        type: 'Regular',
        signatory: 'Jurisdictional Officer, Delhi South Ward / Range GST',
      }
    },
    {
      id: 'msme',
      title: 'MSME / Udyog Aadhaar Registration',
      badge: 'Govt. of India Recognized',
      badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
      icon: Award,
      regNumber: 'UAM No: DL03D0014451',
      authority: 'Ministry of Micro, Small & Medium Enterprises, Govt. of India',
      act: 'MSMED Act, 2006',
      date: '19/06/2019 (Filing: 26/12/2019)',
      status: 'Certified Micro Enterprise (Services)',
      description: 'Classified under National Industry Classification (NIC 74909) for professional, technical & education activities.',
      buttonText: 'View MSME Certificate',
      isSecureMsme: true,
      modalData: {
        certTitle: 'UDYOG AADHAAR REGISTRATION CERTIFICATE',
        issuer: 'MINISTRY OF MICRO, SMALL & MEDIUM ENTERPRISES',
        govtNotice: 'Government of India | सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय',
        subText: 'NIC Code 74909 - Other professional, scientific and technical activities n.e.c.',
        cin: 'DL03D0014451',
        companyName: 'ANIMERIA PRIVATE LIMITED',
        address: 'E600 KM No- 33/1, 33/2, Sec 7 Harijan Basti Palam Extn, Near Ramphal Chowk, Delhi 110045',
        issuedDate: '26/12/2019 (Commencement: 19/06/2019)',
        signatory: 'Ministry of MSME, Enterprise Verification Cell',
      }
    },
    {
      id: 'trademark',
      title: 'Trademark & Brand Protection',
      badge: 'IP India Protected',
      badgeColor: 'bg-sky-100 text-sky-700 border-sky-200',
      icon: Stamp,
      regNumber: 'App No: 5829104 (Class 41)',
      authority: 'Trade Marks Registry, Govt. of India',
      act: 'Trade Marks Act, 1999',
      date: 'Class 41: Education & Training',
      status: 'Protected Intellectual Property',
      description: 'Exclusive brand protection under Class 41 covering education, skill academies, artificial intelligence workshops, and job placement assistance.',
      buttonText: 'View Trademark Notice',
      modalData: {
        certTitle: 'INTELLECTUAL PROPERTY INDIA - TRADEMARK NOTICE',
        issuer: 'CONTROLLER GENERAL OF PATENTS, DESIGNS & TRADEMARKS',
        govtNotice: 'Government of India - Department for Promotion of Industry and Internal Trade',
        subText: 'Class 41: Educational services; skill training; AI career programs',
        cin: 'TM Application #5829104',
        companyName: 'ANIMERIA.AI / ANIMERIA EDUTECH',
        address: 'Trade Marks Registry Office, New Delhi Branch',
        issuedDate: '10/03/2023',
        signatory: 'Registrar of Trade Marks, Govt. of India',
      }
    }
  ]


  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center space-x-2 text-sm text-slate-500">
            <button 
              onClick={() => onNavigate && onNavigate('home')} 
              className="hover:text-blue-600 transition"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-500">About Us</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-blue-600 font-semibold">Certifications & Registrations</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section matching Screenshot 5 */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden py-14 lg:py-20 border-b border-blue-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Badges */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Official Statutory Credentials
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
                <span>Certifications & </span>
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">Registrations</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                A stronger foundation for a brighter tomorrow. <span className="text-white font-semibold">Animeria.AI</span> is officially incorporated, registered under the Ministry of Corporate Affairs, and compliant with all Indian statutory education frameworks.
              </p>

              {/* 3 Pill Badges from Screenshot */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-xl text-sm font-medium text-white shadow-sm">
                  <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  Government Recognized
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-xl text-sm font-medium text-white shadow-sm">
                  <Scale className="w-4 h-4 text-sky-400 shrink-0" />
                  Legally Registered
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-xl text-sm font-medium text-white shadow-sm">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  Committed to Quality Education
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/30 transition inline-flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  Explore Legal Documents
                </button>
                <button
                  onClick={() => onOpenEnquire && onOpenEnquire('Verification Request')}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 backdrop-blur-sm transition inline-flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Request Document Copy
                </button>
              </div>
            </div>

            {/* Right Column: Sleek Corporate Building / Brand Signage Visual */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-30"></div>

                {/* Main Card */}
                <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/95 to-slate-900/95 border border-slate-700 p-6 sm:p-7 shadow-2xl backdrop-blur-md">
                  {/* Top Header */}
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-base tracking-wide">ANIMERIA.AI</div>
                        <div className="text-xs text-slate-400">Headquarters • Corporate Entity</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      100% Compliant
                    </span>
                  </div>

                  {/* Visual Facade Mockup */}
                  <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 mb-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                    <div className="text-xs text-blue-400 font-mono font-semibold tracking-wider mb-1">OFFICIAL AFFILIATION ID</div>
                    <div className="text-xl font-bold text-white font-mono tracking-wide mb-3">CIN: U74999DL2023PTC412890</div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-slate-800 text-xs">
                      <div className="bg-slate-900/90 py-2 px-1 rounded-lg border border-slate-800">
                        <div className="text-blue-400 font-bold">MCA</div>
                        <div className="text-[10px] text-slate-400">Govt of India</div>
                      </div>
                      <div className="bg-slate-900/90 py-2 px-1 rounded-lg border border-slate-800">
                        <div className="text-emerald-400 font-bold">MSME</div>
                        <div className="text-[10px] text-slate-400">Registered</div>
                      </div>
                      <div className="bg-slate-900/90 py-2 px-1 rounded-lg border border-slate-800">
                        <div className="text-amber-400 font-bold">ISO 9001</div>
                        <div className="text-[10px] text-slate-400">Standard</div>
                      </div>
                    </div>
                  </div>

                  {/* Motivational Quote from Screenshot */}
                  <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/40 rounded-xl p-4 border border-blue-500/20 text-center">
                    <p className="text-blue-200 font-medium text-sm italic">
                      "Building Skills. Building Careers. Building a Better Tomorrow."
                    </p>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Trusted • Compliant • Future Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Disclaimer Strip */}
      <section className="bg-amber-50 border-y border-amber-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <div className="shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
              </svg>
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              <span className="font-bold">Disclaimer:</span> Animeria issues its own course certificates. Students who wish to obtain a university-issued diploma may pay the applicable university charges to Animeria, and we will coordinate with one of our university partners to facilitate its issuance, subject to the university's eligibility criteria and approval.
            </p>
          </div>
        </div>
      </section>


      {/* 4. Main Statutory Document Cards Grid */}
      <section id="documents" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Verified Statutory Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="text-slate-900">Legally </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Registered.</span>{' '}
            <span className="text-slate-900">Professionally </span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Managed.</span>
          </h1>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Every credential held by Animeria.AI is authenticated and publicly verifiable through official government portals.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {certificationsList.map((doc) => {
            const Icon = doc.icon
            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-200 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${doc.badgeColor}`}>
                      {doc.badge}
                    </span>
                  </div>

                  {/* Title & Registration Number */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition mb-2">
                    {doc.title}
                  </h3>

                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4 font-mono text-xs text-slate-800 font-semibold break-all flex items-center justify-between">
                    <span>{doc.regNumber}</span>
                    <span className="text-emerald-600 font-bold ml-2 shrink-0">✓ Valid</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                    <div><strong className="text-slate-800">Authority:</strong> {doc.authority}</div>
                    <div><strong className="text-slate-800">Framework:</strong> {doc.act}</div>
                    <div><strong className="text-slate-800">Status:</strong> <span className="text-emerald-700 font-semibold">{doc.status}</span></div>
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {doc.description}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="w-full bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-700 border border-slate-200 hover:border-blue-600 font-semibold py-2.5 px-4 rounded-xl transition duration-150 flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  {doc.buttonText}
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </button>
              </div>
            )
          })}

          {/* 6th Card: Additional Academic Standards & Verification Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center mb-4 text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/30 text-white inline-block mb-3">
                Third-Party Audited
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Need Verification for Corporate Tie-ups?
              </h3>
              <p className="text-blue-100 text-xs leading-relaxed mb-4">
                We supply complete certified copies of our incorporation, audited financials, and compliance reports to enterprise partners, universities, and government placement cells.
              </p>
              <div className="space-y-1.5 text-xs text-blue-100/90 mb-6">
                <div>• Vendor Onboarding Assistance</div>
                <div>• GST-Compliant B2B Billing</div>
                <div>• Direct MCA Portal Verification</div>
              </div>
            </div>

            <button
              onClick={() => onOpenEnquire && onOpenEnquire('Corporate Compliance Verification')}
              className="w-full bg-white hover:bg-blue-50 text-blue-700 font-bold py-2.5 px-4 rounded-xl transition duration-150 flex items-center justify-center gap-2 text-sm shadow"
            >
              <PhoneCall className="w-4 h-4" />
              Contact Compliance Desk
            </button>
          </div>
        </div>
      </section>

      {/* 5. Golden Laurel Trust Section matching Screenshot 5 */}
      <section className="bg-amber-50/70 border-y border-amber-200/80 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 border border-amber-300 text-amber-700 mb-4 shadow-sm">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
            <span className="text-amber-950">Transparency </span>
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">Builds Trust</span>
          </h2>
          <p className="text-amber-800 font-medium text-sm sm:text-base max-w-2xl mx-auto mb-6">
            "Learn • Grow • Succeed" — Animeria.AI believes in complete legal transparency. We empower learners, parents, and corporate partners with 100% verified legal accountability.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-100/80 px-4 py-2 rounded-full border border-amber-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Verified Ministry of Corporate Affairs, Income Tax, and MSME Recognized Entity
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Strip */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Still have questions regarding our credentials?
              </h4>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
                Our legal and academic admissions team is available 6 days a week to clarify any queries or provide formal verification documents.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-blue-600/30 flex items-center gap-2 text-sm"
              >
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate && onNavigate('admission')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition text-sm"
              >
                Go to Admission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive Document Preview Modal with Enhanced Protection */}
      {selectedDoc && (() => {
        const isProtected = true
        return (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn secure-doc-print-hide"
            onContextMenu={(e) => {
              if (isProtected) {
                e.preventDefault()
                e.stopPropagation()
              }
            }}
          >
            {/* Print protection style */}
            <style>{`
              @media print {
                .secure-doc-print-hide {
                  display: none !important;
                }
              }
            `}</style>

            <div 
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 transform transition-all relative select-none"
              onContextMenu={(e) => {
                if (isProtected) {
                  e.preventDefault()
                  e.stopPropagation()
                }
              }}
            >
              {/* Screenshot Attempt Warning Banner */}
              {screenshotBlocked && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-rose-600 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 border border-rose-300 animate-bounce">
                  <Lock className="w-4 h-4 text-white" />
                  <span>Security Notice: Screenshots, Printing & Downloads are strictly restricted.</span>
                </div>
              )}

              {/* Anti-Screen Capture / Snipping Tool Shield (Activates when window loses focus) */}
              {windowBlurred && isProtected && (
                <div className="absolute inset-0 z-40 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 border border-amber-500/40">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h5 className="text-lg font-bold">Statutory Privacy Shield Active</h5>
                  <p className="text-xs text-slate-300 max-w-sm mt-1.5 leading-relaxed">
                    Screen capture and background window loss detected. Document is hidden to protect statutory compliance. Click anywhere back on this window to resume view.
                  </p>
                </div>
              )}

              {/* Modal Header */}
              <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h4 className="font-bold text-base leading-none">{selectedDoc.title}</h4>
                    <span className="text-[11px] text-slate-300">
                      {isProtected ? 'Secure Government Statutory Record • Protected View' : 'Official Government Document Record'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Document Frame Mockup (Scrollable Container) */}
              <div className="p-5 sm:p-7 bg-amber-50/20 relative overflow-y-auto flex-1">
                
                {/* Specialized Security Watermark Layer for Protected Tax Docs */}
                {isProtected && (
                  <div 
                    className="absolute inset-0 pointer-events-none z-20 flex flex-wrap items-center justify-around opacity-15 select-none -rotate-12 scale-125"
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >
                    {Array.from({ length: 24 }).map((_, i) => (
                      <span key={i} className="text-[11px] font-black tracking-wider text-slate-800 m-4 uppercase whitespace-nowrap">
                        ANIMERIA PRIVATE LIMITED • {selectedDoc.regNumber || 'OFFICIAL RECORD'} • NOT FOR REPRODUCTION
                      </span>
                    ))}
                  </div>
                )}

                {/* Transparent Shield Layer that catches right-click and drags */}
                {isProtected && (
                  <div
                    className="absolute inset-0 z-10 pointer-events-auto"
                    onContextMenu={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onDragStart={(e) => { e.preventDefault(); }}
                  />
                )}

                {/* Document Container */}
                <div className="bg-white rounded-2xl border-4 border-double border-slate-300 p-5 sm:p-6 shadow-inner relative overflow-hidden">
                  
                  {selectedDoc.id === 'pan' ? (
                    /* Authentic e-PAN Card Structure matching Official Income Tax Dept Format */
                    <div>
                      {/* Official Income Tax Dept Header */}
                      <div className="text-center border-b-2 border-slate-200 pb-4 mb-4">
                        <div className="flex items-center justify-between text-xs sm:text-sm font-extrabold text-slate-900 pb-1">
                          <span>आयकर विभाग</span>
                          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-300">
                            GOVT. OF INDIA
                          </span>
                          <span>भारत सरकार</span>
                        </div>
                        <div className="text-xs font-bold text-slate-700 tracking-wider">
                          INCOME TAX DEPARTMENT
                        </div>
                        <div className="text-sm font-extrabold text-blue-900 mt-1">
                          ई - स्थायी लेखा संख्या कार्ड / e - Permanent Account Number (e-PAN) Card
                        </div>
                      </div>

                      {/* Official PAN Info Block */}
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <span className="text-slate-500 font-medium block">Permanent Account Number (PAN):</span>
                            <span className="text-lg font-black font-mono text-blue-700 tracking-wider">AASCA4174C</span>
                          </div>
                          <div>
                            <span className="text-slate-500 font-medium block">Name / नाम:</span>
                            <span className="font-bold text-slate-900 text-sm">ANIMERIA PRIVATE LIMITED</span>
                          </div>
                          <div>
                            <span className="text-slate-500 font-medium block">Date of Incorporation / गठन की तारीख:</span>
                            <span className="font-semibold text-slate-800">19/06/2019</span>
                          </div>
                          <div>
                            <span className="text-slate-500 font-medium block">Digital Verification:</span>
                            <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Digitally Signed (NSDL e-Governance)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Physical e-PAN Card Cutout Replica */}
                      <div className="border-2 border-dashed border-blue-400 rounded-2xl p-4 bg-gradient-to-br from-blue-50/60 to-indigo-50/40 relative">
                        <div className="flex items-center justify-between border-b border-blue-200 pb-2 mb-3">
                          <div>
                            <div className="text-[10px] font-bold text-slate-700 uppercase">आयकर विभाग • INCOME TAX DEPARTMENT</div>
                            <div className="text-[11px] font-extrabold text-blue-900">भारत सरकार • GOVT. OF INDIA</div>
                          </div>
                          <div className="px-2 py-0.5 rounded bg-emerald-600 text-white font-mono font-bold text-[10px]">
                            VALID e-PAN
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="space-y-1 text-xs">
                            <div className="text-[11px] text-slate-500">स्थायी लेखा संख्या कार्ड / Permanent Account Number Card</div>
                            <div className="text-xl font-black font-mono text-blue-950 tracking-widest">AASCA4174C</div>
                            <div className="font-bold text-slate-900 text-sm pt-1">ANIMERIA PRIVATE LIMITED</div>
                            <div className="text-[11px] text-slate-600">निगमन तारीख / Date of Incorporation: <strong className="text-slate-800">19/06/2019</strong></div>
                          </div>

                          {/* Official QR Code Box Mockup */}
                          <div className="w-20 h-20 bg-white border border-slate-300 rounded-xl flex flex-col items-center justify-center p-1 shadow-sm shrink-0">
                            <div className="grid grid-cols-4 gap-0.5 w-14 h-14 bg-slate-900 p-1 rounded">
                              <div className="bg-white rounded-xs"></div>
                              <div className="bg-slate-900"></div>
                              <div className="bg-white rounded-xs"></div>
                              <div className="bg-white rounded-xs"></div>
                              <div className="bg-slate-900"></div>
                              <div className="bg-white rounded-xs"></div>
                              <div className="bg-slate-900"></div>
                              <div className="bg-white rounded-xs"></div>
                              <div className="bg-white rounded-xs"></div>
                              <div className="bg-slate-900"></div>
                              <div className="bg-white rounded-xs"></div>
                              <div className="bg-slate-900"></div>
                              <div className="bg-slate-900"></div>
                              <div className="bg-white rounded-xs"></div>
                              <div className="bg-slate-900"></div>
                              <div className="bg-white rounded-xs"></div>
                            </div>
                            <span className="text-[8px] font-bold text-slate-500 uppercase mt-0.5">e-PAN QR</span>
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-blue-200/80 text-[10px] text-slate-500 flex justify-between">
                          <span>Section 139A Income Tax Act, 1961</span>
                          <span>NSDL e-Gov PAN Unit, Pune - 411016</span>
                        </div>
                      </div>

                      <p className="text-[10px] text-slate-400 mt-3 text-center italic">
                        Electronically issued and digitally signed valid mode of issue of Permanent Account Number (PAN).
                      </p>
                    </div>
                  ) : selectedDoc.id === 'gst' ? (
                    /* Authentic Form GST REG-06 Structure matching Official Government of India Certificate */
                    <div>
                      {/* Government of India Emblem & Header */}
                      <div className="text-center border-b-2 border-slate-200 pb-4 mb-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800 mb-1.5">
                          <span>सत्यमेव जयते</span> • <span>Government of India</span>
                        </div>
                        <div className="text-sm font-extrabold text-slate-900">
                          Form GST REG-06
                        </div>
                        <div className="text-[11px] text-slate-500 italic">
                          [See Rule 10(1)]
                        </div>
                        <div className="text-base font-black text-blue-900 mt-1 uppercase tracking-wide">
                          Registration Certificate
                        </div>
                        <div className="mt-2 inline-block bg-blue-50 border border-blue-200 px-3 py-1 rounded-xl">
                          <span className="text-[11px] text-slate-600 font-medium">Registration Number (GSTIN): </span>
                          <span className="text-sm font-black font-mono text-blue-800 tracking-wider">07AASCA4174C1ZN</span>
                        </div>
                      </div>

                      {/* Official Form GST REG-06 7-Point Table */}
                      <div className="border border-slate-200 rounded-xl overflow-hidden mb-4 text-xs">
                        <div className="grid grid-cols-12 border-b border-slate-100 p-2.5 bg-slate-50/70">
                          <div className="col-span-1 font-bold text-slate-500">1.</div>
                          <div className="col-span-4 font-semibold text-slate-700">Legal Name</div>
                          <div className="col-span-7 font-bold text-slate-900">ANIMERIA PRIVATE LIMITED</div>
                        </div>
                        <div className="grid grid-cols-12 border-b border-slate-100 p-2.5">
                          <div className="col-span-1 font-bold text-slate-500">2.</div>
                          <div className="col-span-4 font-semibold text-slate-700">Trade Name, if any</div>
                          <div className="col-span-7 font-bold text-slate-900">ANIMERIA PRIVATE LIMITED</div>
                        </div>
                        <div className="grid grid-cols-12 border-b border-slate-100 p-2.5 bg-slate-50/70">
                          <div className="col-span-1 font-bold text-slate-500">3.</div>
                          <div className="col-span-4 font-semibold text-slate-700">Constitution of Business</div>
                          <div className="col-span-7 font-medium text-slate-900">Private Limited Company</div>
                        </div>
                        <div className="grid grid-cols-12 border-b border-slate-100 p-2.5">
                          <div className="col-span-1 font-bold text-slate-500">4.</div>
                          <div className="col-span-4 font-semibold text-slate-700">Address of Principal Place of Business</div>
                          <div className="col-span-7 font-medium text-slate-800 leading-relaxed">
                            E-600 BASEMENT, PALAM EXTN, SECTOR-7, RAMPHAL CHOWK, DWARKA, New Delhi, Delhi, 110077
                          </div>
                        </div>
                        <div className="grid grid-cols-12 border-b border-slate-100 p-2.5 bg-slate-50/70">
                          <div className="col-span-1 font-bold text-slate-500">5.</div>
                          <div className="col-span-4 font-semibold text-slate-700">Period of Validity</div>
                          <div className="col-span-7 font-medium text-slate-900">From 14/11/2019 To Not Applicable</div>
                        </div>
                        <div className="grid grid-cols-12 border-b border-slate-100 p-2.5">
                          <div className="col-span-1 font-bold text-slate-500">6.</div>
                          <div className="col-span-4 font-semibold text-slate-700">Type of Registration</div>
                          <div className="col-span-7 font-bold text-emerald-700">Regular</div>
                        </div>
                        <div className="grid grid-cols-12 p-2.5 bg-slate-50/70">
                          <div className="col-span-1 font-bold text-slate-500">7.</div>
                          <div className="col-span-4 font-semibold text-slate-700">Date of issue of Certificate</div>
                          <div className="col-span-7 font-semibold text-slate-900">14/11/2019</div>
                        </div>
                      </div>

                      {/* Annexure B: Managing Directors Section */}
                      <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-3.5 mb-4">
                        <div className="text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center justify-between border-b border-blue-200/80 pb-1.5">
                          <span>Annexure B: Managing / Whole-time Directors</span>
                          <span className="text-[10px] text-blue-600 font-mono">07AASCA4174C1ZN</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="bg-white p-2.5 rounded-lg border border-blue-100 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                              VR
                            </div>
                            <div>
                              <div className="font-bold text-slate-900">VAISHALI RAJPUT</div>
                              <div className="text-[10px] text-blue-600 font-semibold">DIRECTOR • Delhi</div>
                            </div>
                          </div>
                          <div className="bg-white p-2.5 rounded-lg border border-blue-100 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs">
                              SR
                            </div>
                            <div>
                              <div className="font-bold text-slate-900">SARLA</div>
                              <div className="text-[10px] text-indigo-600 font-semibold">DIRECTOR • Delhi</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Deemed Approval Signature Footnote */}
                      <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500">
                        <span className="italic">
                          System generated digitally signed Registration Certificate based on deemed approval on 14/11/2019.
                        </span>
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Officially Valid & Active
                        </span>
                      </div>
                    </div>
                  ) : selectedDoc.id === 'incorporation' ? (
                    /* Authentic Certificate of Incorporation Structure matching Ministry of Corporate Affairs */
                    <div>
                      {/* Government of India Emblem & MCA Header */}
                      <div className="text-center border-b-2 border-slate-200 pb-4 mb-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800 mb-1.5">
                          <span>सत्यमेव जयते</span> • <span>GOVERNMENT OF INDIA</span>
                        </div>
                        <div className="text-xs font-bold text-slate-700 tracking-wider">
                          MINISTRY OF CORPORATE AFFAIRS
                        </div>
                        <div className="text-[11px] text-slate-500 font-semibold">
                          Office of the Registrar of Companies, Delhi
                        </div>
                        <div className="text-base font-black text-blue-900 mt-2 uppercase tracking-wide">
                          Certificate of Incorporation
                        </div>
                        <div className="text-[10px] text-slate-500 italic max-w-lg mx-auto mt-0.5">
                          [Pursuant to sub-section (2) of section 7 and sub-section (1) of section 8 of the Companies Act, 2013 and rule 18 of the Companies (Incorporation) Rules, 2014]
                        </div>
                      </div>

                      {/* Official Incorporation Declaration */}
                      <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-4 mb-4 text-xs leading-relaxed text-slate-800">
                        <p className="mb-2">
                          I hereby certify that <strong className="text-blue-950">ANIMERIA PRIVATE LIMITED</strong> is incorporated on this <strong className="text-blue-950">Nineteenth day of June Two thousand nineteen</strong> under the Companies Act, 2013 (18 of 2013) and that the company is limited by shares.
                        </p>
                        <p className="text-slate-600 text-[11px]">
                          The Corporate Identity Number of the company is <strong className="font-mono text-blue-700">U74999DL2019PTC351540</strong>.
                        </p>
                      </div>

                      {/* Official Identifiers Table */}
                      <div className="border border-slate-200 rounded-xl overflow-hidden mb-4 text-xs">
                        <div className="grid grid-cols-12 border-b border-slate-100 p-2.5 bg-slate-50/70">
                          <div className="col-span-5 font-semibold text-slate-700">Company Name</div>
                          <div className="col-span-7 font-bold text-slate-900">ANIMERIA PRIVATE LIMITED</div>
                        </div>
                        <div className="grid grid-cols-12 border-b border-slate-100 p-2.5">
                          <div className="col-span-5 font-semibold text-slate-700">Corporate Identity Number (CIN)</div>
                          <div className="col-span-7 font-mono font-bold text-blue-700">U74999DL2019PTC351540</div>
                        </div>
                        <div className="grid grid-cols-12 border-b border-slate-100 p-2.5 bg-slate-50/70">
                          <div className="col-span-5 font-semibold text-slate-700">Permanent Account Number (PAN)</div>
                          <div className="col-span-7 font-mono font-bold text-slate-900">AASCA4174C</div>
                        </div>
                        <div className="grid grid-cols-12 border-b border-slate-100 p-2.5">
                          <div className="col-span-5 font-semibold text-slate-700">Date of Incorporation</div>
                          <div className="col-span-7 font-semibold text-slate-900">19/06/2019</div>
                        </div>
                        <div className="grid grid-cols-12 border-b border-slate-100 p-2.5 bg-slate-50/70">
                          <div className="col-span-5 font-semibold text-slate-700">Registered Office Address</div>
                          <div className="col-span-7 font-medium text-slate-800 leading-relaxed">
                            E-600 Basement, Palam Extn, Sector-7, Ramphal Chowk, Dwarka, New Delhi, Delhi, 110077
                          </div>
                        </div>
                        <div className="grid grid-cols-12 p-2.5">
                          <div className="col-span-5 font-semibold text-slate-700">Managing Directors</div>
                          <div className="col-span-7 font-semibold text-slate-900">Vaishali Rajput & Sarla</div>
                        </div>
                      </div>

                      {/* ROC Verification Seal */}
                      <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500">
                        <span className="italic">
                          Ministry of Corporate Affairs • Govt of India ROC Digital Verification Record
                        </span>
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Officially Active & In Good Standing
                        </span>
                      </div>
                    </div>
                  ) : selectedDoc.id === 'msme' ? (
                    /* Authentic Udyog Aadhaar / MSME Certificate Structure matching Govt of India Portal */
                    <div>
                      {/* MSME Official Banner Header */}
                      <div className="text-center border-b-2 border-slate-200 pb-3 mb-3">
                        <div className="flex items-center justify-between text-xs text-slate-700 font-bold mb-1">
                          <span>भारत सरकार / Govt. of India</span>
                          <span className="text-[10px] bg-blue-50 text-blue-800 px-2 py-0.5 rounded border border-blue-200 font-mono">
                            udyogaadhaar.gov.in
                          </span>
                        </div>
                        <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                          सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय
                        </div>
                        <div className="text-[11px] font-extrabold text-blue-900 tracking-wider">
                          MINISTRY OF MICRO, SMALL & MEDIUM ENTERPRISES
                        </div>

                        {/* Top Blue Portal Bar */}
                        <div className="mt-2.5 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white p-2 rounded-xl flex items-center justify-between px-4">
                          <span className="font-extrabold text-xs tracking-wider">उद्योग आधार / UDYOG AADHAAR</span>
                          <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded">MSME</span>
                        </div>

                        <div className="text-sm font-black text-slate-900 mt-3 uppercase tracking-wide">
                          Udyog Aadhaar Registration Certificate
                        </div>
                      </div>

                      {/* UAM Info Strip */}
                      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 mb-3 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="text-slate-600 font-medium block text-[11px]">Udyog Aadhaar Number:</span>
                          <span className="text-base font-black font-mono text-amber-950 tracking-wider">DL03D0014451</span>
                        </div>
                        <div className="sm:text-right">
                          <span className="text-slate-600 font-medium block text-[11px]">Name of Enterprise:</span>
                          <span className="text-xs font-black text-slate-900">ANIMERIA PRIVATE LIMITED</span>
                        </div>
                      </div>

                      {/* Location of Plant Details Table */}
                      <div className="border border-slate-200 rounded-xl overflow-hidden mb-3 text-[11px]">
                        <div className="bg-slate-100 p-2 font-bold text-slate-800 border-b border-slate-200">
                          Location of Enterprise / Plant Details
                        </div>
                        <div className="p-3 space-y-1.5 bg-white">
                          <div className="grid grid-cols-12 gap-1 text-slate-700">
                            <span className="col-span-4 font-semibold text-slate-500">Premises / Building:</span>
                            <span className="col-span-8 font-medium text-slate-900">E600, KM NO- 33/1, 33/2, SEC 7</span>
                          </div>
                          <div className="grid grid-cols-12 gap-1 text-slate-700">
                            <span className="col-span-4 font-semibold text-slate-500">Road / Area / Locality:</span>
                            <span className="col-span-8 font-medium text-slate-900">HARIJAN BASTI, PALAM EXTEN, NEAR RAM PHAL CHOWK</span>
                          </div>
                          <div className="grid grid-cols-12 gap-1 text-slate-700">
                            <span className="col-span-4 font-semibold text-slate-500">City, Pin, State:</span>
                            <span className="col-span-8 font-medium text-slate-900">NEW DELHI, 110045, DELHI</span>
                          </div>
                        </div>
                      </div>

                      {/* Key Attributes Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 text-center text-xs">
                        <div className="bg-slate-50 border border-slate-200 p-2 rounded-xl">
                          <span className="text-[10px] text-slate-500 block">Commencement</span>
                          <span className="font-bold text-slate-900 text-[11px]">19/06/2019</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-2 rounded-xl">
                          <span className="text-[10px] text-slate-500 block">Major Activity</span>
                          <span className="font-bold text-blue-700 text-[11px]">SERVICES</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-2 rounded-xl">
                          <span className="text-[10px] text-slate-500 block">Enterprise Type</span>
                          <span className="font-bold text-emerald-700 text-[11px]">Micro (D)</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-2 rounded-xl">
                          <span className="text-[10px] text-slate-500 block">Date of Filing</span>
                          <span className="font-bold text-slate-900 text-[11px]">26/12/2019</span>
                        </div>
                      </div>

                      {/* National Industry Classification (NIC) Table */}
                      <div className="border border-slate-200 rounded-xl overflow-hidden mb-3 text-[11px]">
                        <div className="bg-slate-100 p-2 font-bold text-slate-800 border-b border-slate-200 flex justify-between">
                          <span>National Industry Classification (NIC) Code</span>
                          <span className="text-blue-700 font-mono">NIC-2008</span>
                        </div>
                        <div className="p-2.5 bg-white space-y-1 text-slate-700">
                          <div>• <strong className="text-slate-800">NIC 2 Digit (74):</strong> Other professional, scientific and technical activities</div>
                          <div>• <strong className="text-slate-800">NIC 4 Digit (7490):</strong> Other professional, scientific and technical activities n.e.c.</div>
                          <div>• <strong className="text-slate-800">NIC 5 Digit (74909):</strong> Other professional, scientific and technical activities n.e.c. (Services)</div>
                        </div>
                      </div>

                      {/* Official Statement Disclaimer Footnote */}
                      <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-1 text-[10px] text-slate-500">
                        <span className="italic">
                          Disclaimer: This is a computer generated statement, no signature required. Printed from udyogaadhaar.gov.in
                        </span>
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Government Verified Enterprise
                        </span>
                      </div>
                    </div>

                  ) : (
                    /* Standard Government Document Preview for other certificates */
                    <div>
                      {/* Issuer Header */}
                      <div className="text-center border-b-2 border-slate-200 pb-4 mb-5">
                        <div className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                          {selectedDoc.modalData.govtNotice}
                        </div>
                        <div className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                          {selectedDoc.modalData.certTitle}
                        </div>
                        <div className="text-xs text-slate-600 mt-1">
                          {selectedDoc.modalData.subText}
                        </div>
                      </div>

                      {/* Details Table */}
                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Entity Name:</span>
                          <span className="font-bold text-slate-900 text-right">{selectedDoc.modalData.companyName}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Registration / Identification No:</span>
                          <span className="font-bold text-blue-600 font-mono text-right">{selectedDoc.modalData.cin}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Registered Office:</span>
                          <span className="font-semibold text-slate-800 text-right">{selectedDoc.modalData.address}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Date of Issue:</span>
                          <span className="font-semibold text-slate-800 text-right">{selectedDoc.modalData.issuedDate}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Issuing Authority:</span>
                          <span className="font-semibold text-slate-800 text-right">{selectedDoc.modalData.signatory}</span>
                        </div>
                      </div>

                      {/* Stamp & Seal Visual */}
                      <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div className="text-[11px] leading-tight text-slate-500">
                            <strong className="text-slate-700">Digital Seal Verified</strong><br />
                            Status: Active & Valid
                          </div>
                        </div>
                        <div className="text-right text-[11px] text-slate-400">
                          Ministry of Corporate Affairs / Govt of India
                        </div>
                      </div>
                    </div>
                  )}


                </div>
              </div>

              {/* Modal Actions */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  {isProtected ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
                      <Lock className="w-3.5 h-3.5" />
                      Protected View: Screenshots & Downloads Disabled
                    </span>
                  ) : (
                    <span>Official statutory public record</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedDoc(null)}
                    className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition shadow-sm"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )
      })()}
    </div>
  )
}


