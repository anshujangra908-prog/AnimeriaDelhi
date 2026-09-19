import React, { useState } from 'react'
import { 
  Building2, 
  Sparkles, 
  Target, 
  Compass, 
  Users, 
  Award, 
  CheckCircle2, 
  Globe, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  LineChart, 
  UserCheck, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Quote, 
  X, 
  Upload, 
  Check, 
  ShieldCheck, 
  ArrowRight,
  Send,
  HeartHandshake
} from 'lucide-react'

export default function AboutPage({ onNavigate, onOpenEnquire }) {
  const [mentorModalOpen, setMentorModalOpen] = useState(false)
  const [mentorSubmitted, setMentorSubmitted] = useState(false)

  // Mentor Network Form State
  const [mentorForm, setMentorForm] = useState({
    fullName: '',
    mobile: '',
    whatsapp: '',
    email: '',
    cityCountry: '',
    designation: '',
    company: '',
    experience: '',
    teachingExperience: '',
    linkedin: '',
    expertise: 'Data Analytics',
    courses: '',
    trainingMode: 'Online',
    studentLevel: 'All Levels',
    availability: '',
    engagement: 'Weekend',
    bio: '',
    skillsTools: '',
    certifications: '',
    agreed: false
  })

  const handleMentorSubmit = (e) => {
    e.preventDefault()
    if (!mentorForm.agreed) {
      alert('Please agree to the mentor confirmation before submitting.')
      return
    }
    setMentorSubmitted(true)
    setTimeout(() => {
      setMentorSubmitted(false)
      setMentorModalOpen(false)
      alert('Thank you for applying to the Animeria Mentor Network! Our academic relations team will contact you shortly.')
    }, 1800)
  }

  const verticals = [
    {
      id: 'education',
      number: '01',
      title: 'Animeria Education & Training',
      tagline: 'Core Vocational & Tech Training',
      icon: GraduationCap,
      color: 'from-blue-600 to-indigo-700',
      description: 'Provides offline classroom training and online worldwide batches in computer education, technology, digital skills, and career-oriented programs.',
      areas: [
        'Computer Courses (Basic to Advanced)',
        'Data Analytics & Data Science',
        'Artificial Intelligence & GenAI',
        'Digital Marketing & Social Media',
        'Graphic Designing & Video Editing',
        'Multimedia, VFX & Animation',
        'Advanced Excel & MIS Reporting',
        'Tally Prime with GST & Accounting',
        'Python & Java Full Stack Development'
      ]
    },
    {
      id: 'ai',
      number: '02',
      title: 'Animeria.AI',
      tagline: 'Learn. Build. Grow with AI.',
      icon: Cpu,
      color: 'from-purple-600 to-indigo-800',
      description: 'Represents Animeria’s specialized focus on Artificial Intelligence and future-ready technology education, integrating Generative AI tools into modern curricula.',
      areas: [
        'Generative AI Foundations',
        'AI Prompt Engineering for Professionals',
        'Practical Industry AI Tool Applications',
        'AI for Marketing, Design & Coding',
        'Connecting Learning with Emerging Tech'
      ]
    },
    {
      id: 'technologies',
      number: '03',
      title: 'Animeria Technologies',
      tagline: 'IT & Digital Business Solutions',
      icon: Globe,
      color: 'from-sky-600 to-blue-800',
      description: 'Our in-house IT and software solutions company providing modern digital engineering, web portals, and online growth strategies for enterprises.',
      areas: [
        'Website Design & Custom Web Apps',
        'Full Digital Marketing & SEO Services',
        'Social Media Management & Meta Ads',
        'Corporate Branding & Creative Design',
        'AI-Powered Business Automation'
      ]
    },
    {
      id: 'manpower',
      number: '04',
      title: 'Animeria Manpower & Recruitment',
      tagline: 'Workforce & Talent Solutions',
      icon: UserCheck,
      color: 'from-emerald-600 to-teal-800',
      description: 'Connecting leading organizations with pre-screened, industry-ready talent and offering comprehensive staffing support across India.',
      areas: [
        'Executive & Lateral Recruitment',
        'Permanent & Contractual Staffing',
        'Campus Placement Drives for MNCs',
        'Technical Talent Acquisition',
        'Corporate Workforce Upskilling'
      ]
    },
    {
      id: 'education-services',
      number: '05',
      title: 'Animeria Education Services',
      tagline: 'Academic Degree & School Pathways',
      icon: Award,
      color: 'from-amber-600 to-orange-700',
      description: 'Supporting learners with academic pathways for school completion and higher education through UGC-approved universities.',
      areas: [
        '10th Secondary School Education',
        '12th Senior Secondary Education',
        'UGC-Approved Degree Programmes (BCA, BBA, B.Com)',
        'Diploma & Polytechnic Courses',
        'University Admission Guidance'
      ]
    },
    {
      id: 'consultation',
      number: '06',
      title: 'Business Consultation',
      tagline: 'Strategic Business Development',
      icon: LineChart,
      color: 'from-rose-600 to-pink-800',
      description: 'Professional guidance for entrepreneurs, SMEs, and educational institutions looking to optimize operations and scale digitally.',
      areas: [
        'Business Planning & Modeling',
        'Digital Transformation Strategy',
        'Technology & Infrastructure Consultation',
        'Market Penetration & Brand Building',
        'Sustainable Revenue Optimization'
      ]
    }
  ]

  const leadership = [
    {
      name: 'Ms. Vaishali Rajput',
      role: 'Founder & Owner – Animeria',
      badges: ['Entrepreneur', 'MBA - ICFAI', 'Software Engineer', 'Women Empowerment Advocate'],
      quote: '“My vision is to educate, empower and inspire — especially women — to create their own identity and achieve more.”',
      bio: 'Vaishali Rajput is an entrepreneur and education professional with an MBA from ICFAI University and a 3-Year Diploma in Software Engineering. She began her professional journey as a Career Counsellor with NIIT and Aptech. After 18 months of intensive corporate experience, she took the entrepreneurial path and founded Animeria. Under her visionary leadership, Animeria has grown into six robust business verticals across Education, IT, Manpower, Business Consultation, Degrees & Diplomas, and Immigration services.',
      image: '/vaishali.jpg'
    },
    {
      name: 'Mrs. Sarla Rajput',
      role: 'Co-Founder – Animeria',
      badges: ['Co-Founder', 'Organizational Pillar', 'Strategic Development'],
      quote: '“Strong values, integrity, and relentless dedication to our learners form the bedrock of everything we build at Animeria.”',
      bio: 'Mrs. Sarla Rajput is a key member of Animeria’s management team and has been an integral part of the organization’s growth journey since its inception. As Co-Founder, she contributes to the company’s administrative stewardship, strategic development, and institutional values. Her supportive leadership and dedication have played a defining role in anchoring Animeria’s multi-sector expansion.',
      image: '/sarla.jpg'
    },
    {
      name: 'Mr. Kapil Kapoor',
      role: 'Chief Executive Officer (CEO) – Animeria',
      badges: ['CEO', 'Serial Entrepreneur', 'Business Strategist'],
      quote: '“We are building Animeria as a future-ready, diversified enterprise connecting education with real-world enterprise needs.”',
      bio: 'Mr. Kapil Kapoor is an experienced businessman and the Chief Executive Officer of Animeria. Bringing extensive entrepreneurial experience spanning Real Estate, Sanitary Items Manufacturing, and Commercial Education, he steers Animeria’s corporate expansion, business development, operational scaling, and national footprint across diverse business verticals.',
      image: '/kapil.jpg'
    }
  ]

  const branchTeam = [
    {
      name: 'Ms. Payal Singh',
      role: 'Center Manager',
      since: 'Since 2020',
      desc: 'Started as a Telecounsellor and grown into Center Manager with exceptional student empathy, operational reliability, and leadership.',
      image: '/payal.jpg'
    },
    {
      name: 'Ms. Sheetal',
      role: 'Telecounsellor',
      since: 'Admissions Desk',
      desc: 'Guides aspiring students through course selections, career path mapping, and personalized counseling.',
      image: '/sheetal.jpg'
    },
    {
      name: 'Mr. Yash Bhardwaj',
      role: 'Senior Mentor – All-Rounder',
      since: 'Academic Lead',
      desc: 'Versatile academic mentor supporting students across multiple technology domains with hands-on lab guidance.'
    },
    {
      name: 'Mr. Dev',
      role: 'Data Science Trainer',
      since: 'Analytics Faculty',
      desc: 'Specialized in Python, statistics, SQL, Machine Learning models, and live industry data analytics projects.',
      image: '/dev.jpg'
    },
    {
      name: 'Mr. Subodh',
      role: 'Multimedia Trainer',
      since: 'Design Faculty',
      desc: 'Expert trainer in Photoshop, Illustrator, Premiere Pro, After Effects, and commercial portfolio production.'
    },
    {
      name: 'Mr. Anshu',
      role: 'Web Developer & GenAI Pro',
      since: 'Tech Faculty',
      desc: 'Full stack development mentor combining modern frontend frameworks with applied Generative AI workflows.',
      image: '/anshu.jpg'
    },
    {
      name: 'Mrs. Sushma',
      role: 'Office Support Staff',
      since: 'Since 2020',
      desc: 'A deeply valued member of the Animeria family since 2020, ensuring our campus is always clean, welcoming, and organized.'
    }
  ]

  const missionPoints = [
    'Make quality education and practical skill development accessible to every household.',
    'Deliver hands-on, career-focused training backed by real industry projects.',
    'Connect learners and working professionals with emerging AI and digital technologies.',
    'Provide scalable IT, web development, and digital marketing solutions to businesses.',
    'Support corporate organizations with pre-trained manpower and recruitment solutions.',
    'Facilitate higher education degrees and diplomas through UGC-approved partner universities.',
    'Deliver professional business consultation to budding entrepreneurs and enterprises.',
    'Build a diversified, ethical, and globally recognized educational brand.'
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
            <span className="text-blue-600 font-semibold">About Us</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-24 overflow-hidden border-b border-blue-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              About Animeria
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
              <span>A Diversified Brand Across </span>
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">Education, Technology & Business Services</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Animeria operates across multiple sectors with a bold vision to build a comprehensive ecosystem of <strong className="text-white">Education, Technology, Human Resources, Professional Services and Business Solutions</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => document.getElementById('verticals')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/30 transition inline-flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Explore 6 Verticals</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 backdrop-blur-sm transition inline-flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Meet Leadership</span>
              </button>
              <button
                onClick={() => setMentorModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-emerald-600/20 transition inline-flex items-center gap-2 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Join Mentor Network</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Animeria & Journey Timeline (2013 -> 2018 -> Today) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: About Text */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Our Evolution & Roots
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="text-slate-900">Building a Comprehensive Ecosystem for </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">India & the World</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The Animeria journey began with <strong>online training in 2013</strong> and expanded into physical offline education in 2018. Since then, the brand has continued to grow beyond traditional computer training, actively developing businesses and services across multiple modern industries.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Today, Animeria operates across <strong>Education & Skill Development, IT Services, Manpower & Recruitment, Education Services, Online Training, and Business Consultation</strong>. With its expanding ecosystem, Animeria aims to connect learning, technology, talent, and business solutions under one trusted brand name.
            </p>

            <div className="pt-2">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-blue-950 mb-1 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  Online Training Worldwide
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Alongside our flagship campus in Delhi NCR, Animeria provides live interactive online training to students and working professionals across India, the Middle East, Europe, and North America.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Journey Timeline Cards */}
          <div className="lg:col-span-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Our Growth Journey
            </h3>

            <div className="space-y-4 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-blue-200">
              {/* 2013 */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm flex items-center justify-center"></div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-blue-600 font-mono">2013</div>
                  <h4 className="text-base font-bold text-slate-900 mt-0.5">Online Training Genesis</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Animeria began its journey in 2013 with online training, providing learners access to digital education and skill development beyond geographical boundaries.
                  </p>
                </div>
              </div>

              {/* 2018 */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 top-1.5 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-sm flex items-center justify-center"></div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-indigo-600 font-mono">2018</div>
                  <h4 className="text-base font-bold text-slate-900 mt-0.5">Offline Physical Campus</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    In 2018, Animeria expanded into physical classroom education, establishing our high-tech training labs in Dwarka, New Delhi.
                  </p>
                </div>
              </div>

              {/* Today */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 top-1.5 w-5 h-5 rounded-full bg-emerald-600 border-4 border-white shadow-sm flex items-center justify-center"></div>
                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-2xs bg-emerald-50/30">
                  <div className="text-xs font-bold text-emerald-700 font-mono">TODAY</div>
                  <h4 className="text-base font-bold text-slate-900 mt-0.5">A Multi-Sector Organization</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Transformed into a multi-sector powerhouse with 6 active verticals serving students, job seekers, corporate MNCs, and growing enterprises worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. What Does Animeria Do? (6 Business Verticals) */}
      <section id="verticals" className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              WHAT DOES ANIMERIA DO?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-1">
              <span className="text-slate-900">Our 6 Multi-Sector </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Business Verticals</span>
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Addressing diverse professional, educational, staffing, and corporate technology requirements under one umbrella.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verticals.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.id}
                  className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200 hover:border-blue-400 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} text-white flex items-center justify-center shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black text-slate-300 font-mono text-lg">
                        {v.number}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                      {v.tagline}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition mb-3">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {v.description}
                    </p>

                    <div className="space-y-2 border-t border-slate-200/80 pt-4">
                      {v.areas.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <button
                      onClick={() => onOpenEnquire && onOpenEnquire(v.title)}
                      className="w-full text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center justify-between"
                    >
                      <span>Enquire About This Vertical</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Vision & Mission Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Vision Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-blue-300">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest block mb-2">
                OUR VISION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                Building a Global Ecosystem of Education, Technology & Business
              </h3>
              <p className="text-blue-100/90 text-sm leading-relaxed mb-6">
                Animeria’s vision is to build a diversified organization that brings together:
              </p>
              
              <div className="bg-white/10 rounded-2xl p-4 border border-white/15 text-center font-bold text-sm tracking-wide text-white">
                Education + Technology + Talent + Business Solutions
              </div>
            </div>

            <p className="text-xs text-blue-200/80 mt-8">
              Creating transformative opportunities for learners, professionals, businesses, and institutions globally.
            </p>
          </div>

          {/* Mission Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-600">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-2">
                OUR MISSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Empowering People & Organizations to Achieve More
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {missionPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Leadership Team Section */}
      <section id="leadership" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              OUR LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-1">
              <span className="text-slate-900">The Leadership </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Behind Animeria</span>
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Guided by experienced visionaries committed to accessible education, women empowerment, and enterprise innovation.
            </p>
          </div>

          <div className="space-y-12">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row gap-8 items-center"
              >
                {/* Leader Photo with Badges */}
                <div className="lg:w-1/3 text-center shrink-0">
                  <div className="relative inline-block">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl object-cover shadow-lg mx-auto border-4 border-white"
                    />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                      {idx === 0 ? 'Founder & Owner' : idx === 1 ? 'Co-Founder' : 'CEO'}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mt-6">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-blue-600 font-semibold mt-0.5">
                    {leader.role}
                  </p>

                  <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                    {leader.badges.map((badge, bIdx) => (
                      <span key={bIdx} className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded-md text-slate-600 font-medium">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Leader Bio & Vision Quote */}
                <div className="lg:w-2/3 space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-2xs flex items-start gap-3">
                    <Quote className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                    <p className="text-sm font-semibold text-slate-800 italic leading-relaxed">
                      {leader.quote}
                    </p>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Offline Branch Management Team */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            OUR CAMPUS FACULTY & STAFF
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-1">
            <span className="text-slate-900">Our Offline </span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Branch Team</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-1">(Dwarka, Delhi NCR)</span>
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-sm">
            Meet the dedicated professionals who work closely with our students every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {branchTeam.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Photo / Avatar Area */}
              {member.image ? (
                <div className="w-full h-44 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-full h-44 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-2xl shadow-md">
                    {member.name.charAt(3) || member.name.charAt(0)}
                  </div>
                </div>
              )}

              {/* Info Area */}
              <div className="p-4 flex flex-col flex-1">
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {member.name}
                </h4>
                <div className="flex flex-wrap items-center gap-1.5 mt-1 mb-2">
                  <span className="text-xs font-semibold text-blue-600">{member.role}</span>
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                    {member.since}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 8. Online Training Mentors Network Banner + CTA */}
      <section className="py-14 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-semibold mb-3">
                <Globe className="w-3.5 h-3.5" />
                Worldwide Mentor Faculty
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Our Online Training Mentors Network
              </h3>
              <p className="text-blue-200 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                A dynamic network of experienced industry professionals from top tech companies delivering live project-oriented sessions across Artificial Intelligence, Data Analytics, Web Development, Digital Marketing, and Design.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-blue-300 font-medium">
                <span>• Experienced Mentors</span>
                <span>• Multiple Specializations</span>
                <span>• Online Training Worldwide</span>
              </div>
            </div>

            <div className="shrink-0 text-center lg:text-right">
              <button
                onClick={() => setMentorModalOpen(true)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-emerald-500/30 transition flex items-center gap-2 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Want to Become a Mentor?</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-blue-300 block mt-2">
                Join our elite global mentor network
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Animeria at a Glance Table & Ecosystem */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Ecosystem Explanation */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              WHY ANIMERIA?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              One Brand. Multiple Sectors. One Vision.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Animeria brings together multiple professional services under one growing organization. Our ecosystem enables us to work with:
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Students', 'Professionals', 'Working Individuals', 'Businesses', 'Entrepreneurs', 'Organizations'].map((item, i) => (
                <span key={i} className="bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
                  {item}
                </span>
              ))}
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              From learning a new skill to implementing enterprise technology, finding top talent, pursuing recognized degree programs, or seeking business consultation—Animeria provides solutions across different stages of career and corporate growth.
            </p>

            {/* Animeria in Dwarka Delhi NCR - SEO Section */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-100 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                Animeria in Dwarka, Delhi NCR
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located conveniently at Ramphal Chowk, Sector 7 Dwarka, Animeria serves learners from across New Delhi, Gurugram, Noida, and NCR with high-tech AC lab setups, 1-on-1 mentor guidance, and 100% placement support.
              </p>
            </div>
          </div>

          {/* Right: Animeria at a Glance Table Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                Animeria at a Glance
              </h3>

              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Brand:</span>
                  <span className="font-bold text-slate-900">Animeria / Animeria.AI</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Online Training Since:</span>
                  <span className="font-bold text-blue-600">2013</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Offline Campus Since:</span>
                  <span className="font-bold text-indigo-600">2018</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Core Areas:</span>
                  <span className="font-semibold text-slate-800 text-right">Education, Technology, Manpower & Business</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Online Reach:</span>
                  <span className="font-bold text-emerald-600">Worldwide (PAN India & Global)</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">IT & AI Verticals:</span>
                  <span className="font-semibold text-slate-800">Animeria Technologies & Animeria.AI</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Education Services:</span>
                  <span className="font-semibold text-slate-800">10th, 12th, Degree & Diploma (UGC Facilitated)</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Leadership:</span>
                  <span className="font-bold text-slate-900 text-right">Vaishali Rajput • Sarla Rajput • Kapil Kapoor</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 10. Bottom CTA Bar */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to Start Your Learning Journey?
              </h4>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
                Whether you want to learn AI, upgrade your technical career, or partner with us for corporate training, our advisors are here to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                onClick={() => onNavigate && onNavigate('courses')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm flex items-center gap-1.5"
              >
                <span>Explore Courses</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate && onNavigate('admission')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition text-sm"
              >
                Apply for Admission
              </button>
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition text-sm"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Interactive "Become an Animeria Mentor" Modal Form */}
      {mentorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white px-6 py-5 flex items-center justify-between sticky top-0 z-10">
              <div>
                <h3 className="font-bold text-lg leading-tight">Become an Animeria Mentor</h3>
                <p className="text-xs text-blue-200 mt-0.5">
                  Share your knowledge & shape the next generation of professionals worldwide.
                </p>
              </div>
              <button
                onClick={() => setMentorModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleMentorSubmit} className="p-6 space-y-6 text-xs sm:text-sm text-slate-700">
              
              {/* Step 1: Personal Details */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm pb-1 border-b border-slate-100 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">1</span>
                  Personal Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Verma"
                      value={mentorForm.fullName}
                      onChange={(e) => setMentorForm({ ...mentorForm, fullName: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Mobile Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 9876543210"
                      value={mentorForm.mobile}
                      onChange={(e) => setMentorForm({ ...mentorForm, mobile: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">WhatsApp Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 9876543210"
                      value={mentorForm.whatsapp}
                      onChange={(e) => setMentorForm({ ...mentorForm, whatsapp: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="you@company.com"
                      value={mentorForm.email}
                      onChange={(e) => setMentorForm({ ...mentorForm, email: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-medium text-slate-700 mb-1">Current City & Country *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. New Delhi, India"
                      value={mentorForm.cityCountry}
                      onChange={(e) => setMentorForm({ ...mentorForm, cityCountry: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Professional Details */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm pb-1 border-b border-slate-100 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">2</span>
                  Professional Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Job Title / Designation *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Senior Data Scientist"
                      value={mentorForm.designation}
                      onChange={(e) => setMentorForm({ ...mentorForm, designation: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Company / Organization</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Microsoft / Accenture"
                      value={mentorForm.company}
                      onChange={(e) => setMentorForm({ ...mentorForm, company: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Total Experience *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 5+ Years"
                      value={mentorForm.experience}
                      onChange={(e) => setMentorForm({ ...mentorForm, experience: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Teaching / Training Exp</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 2 Years Corporate Training"
                      value={mentorForm.teachingExperience}
                      onChange={(e) => setMentorForm({ ...mentorForm, teachingExperience: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-medium text-slate-700 mb-1">LinkedIn Profile URL</label>
                    <input 
                      type="url" 
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={mentorForm.linkedin}
                      onChange={(e) => setMentorForm({ ...mentorForm, linkedin: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Mentorship Details */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm pb-1 border-b border-slate-100 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">3</span>
                  Mentorship Preferences
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Primary Expertise *</label>
                    <select 
                      value={mentorForm.expertise}
                      onChange={(e) => setMentorForm({ ...mentorForm, expertise: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                    >
                      <option value="Data Analytics">Data Analytics (Power BI, Excel, SQL)</option>
                      <option value="Data Science & ML">Data Science & Python ML</option>
                      <option value="Artificial Intelligence & GenAI">Artificial Intelligence & GenAI</option>
                      <option value="Full Stack Web Dev">Full Stack Web Development</option>
                      <option value="Graphic Designing & UI/UX">Graphic Designing & UI/UX</option>
                      <option value="Video Editing & Motion Graphics">Video Editing & Motion Graphics</option>
                      <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                      <option value="Tally Prime & Accounting">Tally Prime & Business Accounts</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Training Mode *</label>
                    <select 
                      value={mentorForm.trainingMode}
                      onChange={(e) => setMentorForm({ ...mentorForm, trainingMode: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                    >
                      <option value="Online">Online (Worldwide)</option>
                      <option value="Offline">Offline (Dwarka Delhi)</option>
                      <option value="Both">Both Online & Offline</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Preferred Engagement</label>
                    <select 
                      value={mentorForm.engagement}
                      onChange={(e) => setMentorForm({ ...mentorForm, engagement: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                    >
                      <option value="Weekend">Weekend Batches</option>
                      <option value="Part-Time">Part-Time Evenings</option>
                      <option value="Freelance">Freelance Guest Lecturer</option>
                      <option value="Project-Based">Project-Based Mentor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Available Days & Time *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sat & Sun 10am - 2pm"
                      value={mentorForm.availability}
                      onChange={(e) => setMentorForm({ ...mentorForm, availability: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Resume & Brief Bio */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm pb-1 border-b border-slate-100 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">4</span>
                  Profile & Resume
                </h4>
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Brief Introduction / About Yourself *</label>
                  <textarea 
                    rows={2}
                    required
                    placeholder="Tell us about your background, career achievements, and training passion..."
                    value={mentorForm.bio}
                    onChange={(e) => setMentorForm({ ...mentorForm, bio: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                  ></textarea>
                </div>

                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center hover:border-blue-400 transition bg-slate-50">
                  <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-700 block">Upload Resume / CV (PDF / DOCX) *</span>
                  <span className="text-[10px] text-slate-400">Max size: 5MB</span>
                  <input type="file" className="mt-2 text-xs text-slate-500" />
                </div>
              </div>

              {/* Confirmation Declaration */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={mentorForm.agreed}
                    onChange={(e) => setMentorForm({ ...mentorForm, agreed: e.target.checked })}
                    className="mt-0.5 rounded text-blue-600 focus:ring-blue-500" 
                  />
                  <span className="text-xs text-slate-600">
                    I confirm that the information provided is accurate and I agree to be contacted by Animeria regarding mentorship and faculty opportunities.
                  </span>
                </label>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setMentorModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={mentorSubmitted}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition shadow-md flex items-center gap-2 text-xs"
                >
                  {mentorSubmitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  )
}
