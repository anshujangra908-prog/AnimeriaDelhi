import React, { useState, useEffect } from 'react'
import { 
  FileText, 
  CreditCard, 
  Calendar, 
  Award, 
  Copy, 
  UserPlus, 
  Briefcase, 
  Users, 
  Users2, 
  Ban, 
  Laptop, 
  ShieldCheck, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp, 
  Info, 
  CheckCircle2, 
  Download, 
  Search, 
  PhoneCall, 
  Mail, 
  ChevronRight,
  Sparkles,
  BookOpen
} from 'lucide-react'

export default function PoliciesPage({ onNavigate, onOpenEnquire }) {
  const [activePolicyId, setActivePolicyId] = useState(1)
  const [openAccordions, setOpenAccordions] = useState({ 1: true })
  const [searchQuery, setSearchQuery] = useState('')

  const policies = [
    {
      id: 1,
      name: 'Admission & Refund Policy',
      shortName: 'Admission & Refund',
      icon: FileText,
      color: 'text-blue-600 bg-blue-50',
      bullets: [
        'All admissions at Animeria Institute are non-refundable.',
        'Once admission is confirmed, the course fee will not be refunded under any circumstances, irrespective of whether the student has attended 0, 1, 2 or more classes.',
        'Refunds will not be provided due to personal reasons, relocation, change of plans, change of job, shifting to another city, health issues or any other reason.',
        'Students who relocate or are unable to attend the physical branch may request to continue their course through online interactive classes, subject to course and batch availability.',
        'Switching from offline to online mode does not create any right to a refund or fee deduction.'
      ],
      note: 'Note: Refund terms remain subject to applicable laws and statutory consumer regulatory frameworks.'
    },
    {
      id: 2,
      name: 'Registration Policy',
      shortName: 'Registration Policy',
      icon: FileText,
      color: 'text-indigo-600 bg-indigo-50',
      bullets: [
        'Course registration is confirmed only after receiving the initial registration token/fee and completion of the official admission form.',
        'Registration guarantees a reserved seat in the chosen batch for a maximum of 14 days from the announced batch start date.',
        'If a student fails to join or complete documentation within 14 days, the institute reserves the right to allocate the seat to waitlisted students.',
        'All student identity documents and academic certificates submitted during registration must be genuine and verifiable.'
      ],
      note: 'Registration fees are strictly non-transferable to other candidates.'
    },
    {
      id: 3,
      name: 'Fees & EMI Policy',
      shortName: 'Fees & EMI Policy',
      icon: CreditCard,
      color: 'text-emerald-600 bg-emerald-50',
      bullets: [
        'Course fee payments must be settled according to the agreed schedule (One-Time Payment or Monthly Installment plan).',
        'Installments must be paid on or before the 5th or 10th of every calendar month as specified on your fee card.',
        'A grace period of 5 working days is provided, after which a nominal late fee of ₹50/day may apply.',
        'Students opting for 0% Interest EMI through partner NBFCs or credit card gateways are subject to the respective financial provider terms.',
        'Accepted payment modes: UPI, Debit/Credit Card, Net Banking, and Bank Transfer. Cash payments must strictly be accompanied by an official institute printed receipt.'
      ],
      note: 'Fee receipts are issued instantly via SMS, Email, and downloadable PDF in your Student Zone.'
    },
    {
      id: 4,
      name: 'Leave Policy',
      shortName: 'Leave Policy',
      icon: Calendar,
      color: 'text-amber-600 bg-amber-50',
      bullets: [
        'Students must maintain a minimum of 80% attendance to remain eligible for placement assistance and course certification.',
        'Planned leaves must be applied at least 2 days in advance via written application or student portal to the Center Manager.',
        'In case of medical or health emergencies, medical certificates must be submitted upon resuming classes.',
        'Faculty will provide backup notes, recorded lectures, or compensatory lab time subject to slot availability.',
        'Unexcused absence exceeding 15 consecutive days without prior intimation may lead to batch suspension.'
      ],
      note: 'Backup sessions must be scheduled with the academic counselor within 10 days of resumption.'
    },
    {
      id: 5,
      name: 'Certification Policy',
      shortName: 'Certification Policy',
      icon: Award,
      color: 'text-sky-600 bg-sky-50',
      bullets: [
        'Certificates are issued only to students who have completed all curriculum modules, submitted assigned capstone projects, and cleared the final practical assessment.',
        'All fee dues must be fully cleared before the certificate generation request is initiated.',
        'Official certificates are issued within 15 to 25 working days post course completion assessment.',
        'Every certificate carries a unique tamper-proof Certificate Verification ID, verifiable online 24/7 on the official Animeria portal.'
      ],
      note: 'Digital QR-verified certificates are shared directly on student registered email addresses.'
    },
    {
      id: 6,
      name: 'Duplicate Certificate Policy',
      shortName: 'Duplicate Certificate',
      icon: Copy,
      color: 'text-purple-600 bg-purple-50',
      bullets: [
        'In the event of a lost, misplaced, or physically damaged certificate, a duplicate copy can be requested.',
        'The applicant must submit an application form along with a copy of the government ID proof and the original student enrollment number.',
        'A nominal administrative re-issuance fee of ₹500 applies for processing duplicate hard copies.',
        'Duplicate certificates are clearly marked with a "DUPLICATE" security emblem.'
      ],
      note: 'Processing time for duplicate certificates is 7-10 working days from approval.'
    },
    {
      id: 7,
      name: 'Re-Admission Policy',
      shortName: 'Re-Admission Policy',
      icon: UserPlus,
      color: 'text-teal-600 bg-teal-50',
      bullets: [
        'Students who discontinue their training due to genuine personal or medical emergencies may apply for re-admission within 6 months.',
        'Re-admission is subject to batch availability in the ongoing curriculum cycle.',
        'If the curriculum or course tools have been upgraded, the student may be required to pay the differential fee for the updated syllabus.',
        'Re-admission requests beyond 12 months of discontinuation will be treated as fresh enrollment.'
      ],
      note: 'Approval is granted on merit by the Academic Director and Center Manager.'
    },
    {
      id: 8,
      name: 'Placement Policy',
      shortName: 'Placement Policy',
      icon: Briefcase,
      color: 'text-blue-700 bg-blue-50',
      bullets: [
        '100% Placement Assistance is provided to all students enrolled in professional and career diploma programs.',
        'Eligibility criteria: Minimum 80% attendance, timely project submissions, cleared mock interview rounds, and an approved portfolio/resume.',
        'Students must attend scheduled interview drives and tests arranged with recruiting partner MNCs and agencies.',
        'Declining 3 consecutive interview opportunities without valid justification may result in deactivation from active placement drive lists.',
        'Upon receiving an official job offer, the student must notify the Animeria Placement Cell within 48 hours.'
      ],
      note: 'Animeria provides career opportunities; selection ultimately depends on the student’s performance in recruiter tests.'
    },
    {
      id: 9,
      name: 'Career Counselling',
      shortName: 'Career Counselling',
      icon: Users,
      color: 'text-rose-600 bg-rose-50',
      bullets: [
        'Every student is entitled to free pre-admission career roadmap guidance with our senior academic counselors.',
        'Mid-course performance reviews and 1-on-1 mentorship sessions are conducted every month to track career milestones.',
        'Specialized guidance is offered for resume formulation, LinkedIn profile optimization, and portfolio building.',
        'Students seeking to transition into IT, Data, AI, or Design can request customized career transition roadmaps.'
      ],
      note: 'Book a 1-on-1 career counselling slot with your mentor anytime via the campus reception.'
    },
    {
      id: 10,
      name: 'Parent & Visitor Policy',
      shortName: 'Parent & Visitor Policy',
      icon: Users2,
      color: 'text-cyan-600 bg-cyan-50',
      bullets: [
        'Parents and legal guardians are welcome to visit our campus during official counseling and visiting hours (10:00 AM - 6:30 PM, Monday to Saturday).',
        'All visitors must register at the reception front desk before proceeding into counseling or academic zones.',
        'Parents may request student attendance records, project evaluation scores, and faculty feedback directly from the Center Manager.',
        'Visitors are requested not to enter ongoing lab sessions to maintain an uninterrupted learning environment.'
      ],
      note: 'Prior appointment with the Center Manager is recommended for detailed progress discussions.'
    },
    {
      id: 11,
      name: 'Classroom Rules',
      shortName: 'Classroom Rules',
      icon: Ban,
      color: 'text-red-600 bg-red-50',
      bullets: [
        'Punctuality is mandatory. Students arriving more than 15 minutes late may be asked to attend the next backup slot.',
        'Mobile phones must be kept on silent or vibration mode during classroom lectures and practical lab sessions.',
        'Eating and drinking (except covered water bottles) is strictly prohibited inside high-tech computer labs.',
        'Respectful and professional communication is expected at all times between students, faculty, and administrative staff.',
        'Recording lectures without prior written consent from faculty is not permitted.'
      ],
      note: 'Violation of classroom decorum may result in temporary lab suspension.'
    },
    {
      id: 12,
      name: 'Laptop / Device Policy',
      shortName: 'Laptop / Device Policy',
      icon: Laptop,
      color: 'text-slate-700 bg-slate-100',
      bullets: [
        'High-speed workstations with licensed software are provided to every student during their scheduled lab hours.',
        'Students are permitted and encouraged to bring their personal laptops for assignments, self-practice, and project work.',
        'Connecting unauthorized external hardware, installing malware, or altering system settings on institute PCs is strictly prohibited.',
        'Animeria is not responsible for the loss or damage of unattended personal devices on campus premises.'
      ],
      note: 'Free high-speed campus Wi-Fi is available for student academic laptops.'
    },
    {
      id: 13,
      name: 'Student Conduct',
      shortName: 'Student Conduct',
      icon: ShieldCheck,
      color: 'text-emerald-700 bg-emerald-50',
      bullets: [
        'Zero tolerance towards harassment, ragging, discrimination, bullying, or abusive language of any kind on campus or online forums.',
        'Academic honesty: Plagiarism, copying project work, or submitting unauthorized code will lead to disqualification from assessments.',
        'Institute property and lab hardware must be handled with utmost care. Intentional damage will invite replacement fines.',
        'Students must display their official Animeria Student ID card while on campus premises.'
      ],
      note: 'The Internal Complaints Committee (ICC) oversees strict compliance with student safety and welfare.'
    },
    {
      id: 14,
      name: 'Policy Updates',
      shortName: 'Policy Updates',
      icon: RefreshCw,
      color: 'text-blue-600 bg-blue-50',
      bullets: [
        'Animeria Institute reserves the right to amend, update, or modify institutional policies in accordance with academic standards and statutory regulations.',
        'Any updates to institutional policies will be published on this official website and displayed on the campus notice board.',
        'Continued enrollment and attendance post-notification constitutes acceptance of updated institutional guidelines.',
        'Students may review the latest version of this policy handbook anytime online.'
      ],
      note: 'Last Updated: September 2026. Governing jurisdiction: New Delhi, India.'
    }
  ]

  const toggleAccordion = (id) => {
    setOpenAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
    setActivePolicyId(id)
  }

  const handleSelectPolicyTab = (id) => {
    setActivePolicyId(id)
    setOpenAccordions(prev => ({
      ...prev,
      [id]: true
    }))
    const element = document.getElementById(`policy-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const filteredPolicies = policies.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()))
  )

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
            <span className="text-blue-600 font-semibold">Our Policies</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section Matching Screenshot 6 */}
      <section className="relative bg-gradient-to-b from-blue-50/70 via-white to-slate-50 py-12 lg:py-16 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Header Info */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                OUR POLICIES
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span className="text-slate-900">Clear Policies</span> <br />
                <span className="text-slate-900">for a </span>
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Better Learning Experience</span>
              </h1>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
                We believe in transparency, fairness and a supportive learning environment for every student.
              </p>

              {/* Search Bar for Policies */}
              <div className="pt-2 max-w-md">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search policies (refund, leave, certificate, EMI...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none shadow-2xs"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-slate-400 hover:text-slate-600 absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Visual: Stack of Books & Slogan (from Screenshot) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Handwritten Calligraphy Accent */}
                <div className="absolute -top-10 -right-2 text-right pointer-events-none select-none">
                  <div className="font-serif italic text-3xl sm:text-4xl font-extrabold text-blue-600 transform -rotate-6">
                    Your Goals
                  </div>
                  <div className="font-serif italic text-3xl sm:text-4xl font-extrabold text-slate-800 -mt-2">
                    Our Support
                  </div>
                </div>

                {/* Stack of 4 Books Visual matching screenshot */}
                <div className="pt-10">
                  <div className="flex flex-col items-center space-y-1.5 drop-shadow-md">
                    <div className="w-52 sm:w-60 bg-white border-2 border-slate-300 rounded-lg py-2.5 px-4 text-center font-bold tracking-widest text-xs text-slate-800 uppercase shadow-sm">
                      LEARN
                    </div>
                    <div className="w-56 sm:w-64 bg-slate-100 border-2 border-slate-300 rounded-lg py-2.5 px-4 text-center font-bold tracking-widest text-xs text-slate-800 uppercase shadow-sm">
                      PRACTICE
                    </div>
                    <div className="w-60 sm:w-72 bg-blue-50 border-2 border-blue-300 rounded-lg py-2.5 px-4 text-center font-bold tracking-widest text-xs text-blue-900 uppercase shadow-sm">
                      GROW
                    </div>
                    <div className="w-64 sm:w-80 bg-blue-600 text-white rounded-lg py-3 px-4 text-center font-black tracking-widest text-xs uppercase shadow-md">
                      SUCCEED
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main Two-Column Policies Section Matching Screenshot 6 */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: 14 Policy Tabs */}
          <div className="lg:col-span-4 space-y-1.5 sticky top-24">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden p-2">
              <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                Policy Directory (14)
              </div>
              <div className="space-y-1 max-h-[75vh] overflow-y-auto pr-1">
                {policies.map((p) => {
                  const Icon = p.icon
                  const isActive = activePolicyId === p.id
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleSelectPolicyTab(p.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-white/20 text-white' : p.color
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate flex-1">{p.id}. {p.shortName}</span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Quick Assistance Box */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-5 rounded-2xl shadow-sm text-xs space-y-2">
              <span className="font-bold text-blue-300 block uppercase tracking-wider text-[10px]">
                Student Grievance Desk
              </span>
              <p className="text-slate-300 leading-relaxed">
                Have a question regarding institute policy or fee terms? Our academic support desk is here for you.
              </p>
              <div className="pt-2 flex items-center gap-2">
                <a 
                  href="tel:01145073228"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg font-bold inline-flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>Call Campus Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 14 Accordion Policy Panels */}
          <div className="lg:col-span-8 space-y-3.5">
            {filteredPolicies.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
                <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h4 className="font-bold text-slate-800 text-base">No policy found</h4>
                <p className="text-xs text-slate-500 mt-1">Try searching with a different term or clear the filter.</p>
              </div>
            ) : (
              filteredPolicies.map((policy) => {
                const Icon = policy.icon
                const isOpen = !!openAccordions[policy.id]
                return (
                  <div
                    key={policy.id}
                    id={`policy-${policy.id}`}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                      isOpen ? 'border-blue-500 ring-2 ring-blue-500/10' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(policy.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 select-none hover:bg-slate-50/70 transition"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${policy.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {policy.id}. {policy.name}
                        </h3>
                      </div>

                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition ${
                        isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {/* Accordion Body */}
                    {isOpen && (
                      <div className="px-5 pb-6 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-700 space-y-3.5 animate-fadeIn">
                        {/* Bullet points */}
                        <ul className="space-y-2.5 pt-2">
                          {policy.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Blue Note Callout Box matching screenshot */}
                        {policy.note && (
                          <div className="rounded-xl bg-blue-50 border border-blue-200/80 p-3.5 flex items-start gap-2.5 text-xs text-blue-900 mt-4">
                            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-medium">{policy.note}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })
            )}

            {/* Bottom Download Handbook Action */}
            <div className="mt-8 bg-slate-100 rounded-2xl p-5 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Download Official Student Policy Handbook</h4>
                <p className="text-xs text-slate-500 mt-0.5">Comprehensive PDF copy including all academic and operational terms.</p>
              </div>
              <button
                onClick={() => alert('Downloading official Animeria Policy Handbook (PDF)...')}
                className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs transition flex items-center gap-2 text-xs shrink-0"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download Handbook (PDF)</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Bottom Brand Banner Matching Screenshot Footer Strip */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Brand */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-white text-xl">
                A
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight leading-none">ANIMERIA INSTITUTE</h3>
                <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">
                  Skills for a Brighter Tomorrow
                </span>
              </div>
            </div>

            {/* Slogan */}
            <div className="text-center md:text-left">
              <span className="font-serif italic text-2xl font-bold text-blue-400 block">
                Learn Today · Build Tomorrow
              </span>
            </div>

            {/* Contacts */}
            <div className="text-xs text-slate-300 space-y-1 text-center md:text-right">
              <div>📞 +91-7979823383 / +91-9090679190</div>
              <div>✉️ admissions@animeria.edu.in / animeriadelhi@gmail.com</div>
              <div className="text-[11px] text-slate-400 pt-1">Dwarka Sector 7, New Delhi, India</div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
