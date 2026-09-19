import React, { useState, useEffect, useRef } from 'react'
import { 
  Bot, 
  Sparkles, 
  Send, 
  X, 
  MessageSquare, 
  ChevronRight, 
  GraduationCap, 
  Briefcase, 
  HelpCircle, 
  ArrowRight,
  Maximize2,
  Minimize2,
  RefreshCw
} from 'lucide-react'
import { allCoursesData } from '../data/coursesDetailData'

// WhatsApp Icon
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.497 2 12.034c0 1.83.493 3.553 1.348 5.043L2 22l5.053-1.326a9.972 9.972 0 0 0 4.978 1.327c5.535 0 10.031-4.497 10.031-10.034C22.062 6.497 17.566 2 12.031 2zm5.82 14.173c-.244.686-1.42 1.32-1.956 1.378-.49.052-1.127.08-3.64-1.002-3.21-1.38-5.267-4.66-5.428-4.873-.16-.214-1.303-1.733-1.303-3.305 0-1.572.825-2.348 1.118-2.668.293-.32.64-.4.854-.4.213 0 .426 0 .613.01.2.01.468-.076.732.56.267.64.908 2.215.988 2.375.08.16.133.347.027.56-.107.213-.16.347-.32.533-.16.187-.337.417-.481.56-.16.16-.328.334-.141.654.186.32.83 1.36 1.78 2.207 1.222 1.09 2.25 1.428 2.57 1.588.32.16.507.133.694-.08.187-.214.8-1.04 1.013-1.4.214-.36.427-.3.72-.187.294.107 1.868.88 2.188 1.04.32.16.534.24.614.374.08.133.08.773-.16 1.46z" />
    </svg>
  )
}

export default function AiAssistantModal({ isOpen, onClose, onNavigate, onOpenEnquire }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Namaste! Main Animeria AI Career Counselor hoon. Aapko apne career, future growth, ya courses ke baare mein koi bhi sawal puchna ho, poochiye! 🚀',
      time: 'Just now',
      suggestions: [
        'Mere future ke liye kaunsa course best rahega?',
        'Non-IT ya 12th pass ke baad kya karein?',
        'Highest salary placement wale courses kaunse hain?',
        'Data Analytics vs Python Full Stack mein kya antar hai?'
      ]
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen, isTyping])

  // Smart AI Counselor Engine
  const generateAiResponse = (userInput) => {
    const q = userInput.toLowerCase().trim()

    // 1. Data Analytics query
    if (q.includes('data') || q.includes('analyt') || q.includes('excel') || q.includes('power bi') || q.includes('sql')) {
      return {
        text: `📊 **Data Analytics Master Course** aapke future ke liye top-trending career choice hai!
        
• **Kyu choose karein:** Har industry (E-Commerce, Banking, Healthcare, IT) ko data analysts ki zaroorat hai.
• **Kya sikhaya jayega:** Advanced Excel, SQL Databases, Power BI Dashboards, Python (NumPy/Pandas).
• **Career Scope:** Data Analyst, Business Intelligence (BI) Developer, Reporting Specialist.
• **Duration:** 4 se 6 Months (Online + Offline).
• **Placement:** 100% placement support with real capstone projects.`,
        action: { label: 'Explore Data Analytics Course', course: 'Data Analytics' },
        suggestions: ['Data Analytics ki fees aur syllabus?', 'Admission process kya hai?']
      }
    }

    // 2. Python / Coding / Full Stack
    if (q.includes('python') || q.includes('coding') || q.includes('full stack') || q.includes('developer') || q.includes('software')) {
      return {
        text: `💻 **Python Full Stack Web Development** software industry ka backbone hai!
        
• **Kyu choose karein:** Python beginner-friendly hai aur AI, backend web apps aur automation me world ka #1 language hai.
• **Curriculum:** Python Core, Django/Flask, React.js Frontend, REST APIs, PostgreSQL.
• **Future Scope:** Full Stack Developer, Python Engineer, Software Developer (Avg Package 4.5 LPA - 12 LPA).
• **Prerequisite:** Zero coding background se shuru kar sakte hain, hum basics se advanced karate hain!`,
        action: { label: 'View Python Full Stack Details', course: 'Python Full Stack' },
        suggestions: ['Python sikhne ke baad placements?', 'Non-coding background wale kar sakte hain?']
      }
    }

    // 3. Design / Video / Animation / Creative
    if (q.includes('graphic') || q.includes('video') || q.includes('edit') || q.includes('design') || q.includes('photoshop') || q.includes('premiere')) {
      return {
        text: `🎨 **Creative Media & Designing Careers:**
        
1. **Graphic Designing Pro:** Photoshop, Illustrator, InDesign, CorelDraw — Social media posters, branding, logos, advertising.
2. **Video Editing Pro:** Premiere Pro, After Effects, DaVinci Resolve — YouTube creators, reel marketing, TV ads, cinematic film editing.

• **Freelancing & Jobs:** Is field me job ke alawa freelancing se monthly achhi earning ki ja sakti hai!
• **Duration:** 4 - 6 Months with 100% practical lab practice.`,
        action: { label: 'Explore Graphic Designing', course: 'Graphic Designing' },
        suggestions: ['Video Editing course details', 'Freelancing kaise shuru karein?']
      }
    }

    // 4. Digital Marketing / SEO / Social Media
    if (q.includes('digital') || q.includes('marketing') || q.includes('seo') || q.includes('social media') || q.includes('ads')) {
      return {
        text: `📈 **Digital Marketing & Growth Mastery:**
        
• **Kya sikhaya jayega:** SEO (Search Engine Optimization), Google Ads, Meta Ads (Facebook/Instagram), Content Strategy, Affiliate Marketing aur Email Marketing.
• **Future & Demand:** Har business ko online customers chahiye. Aap kisi agency me Digital Marketer ban sakte hain ya apna khud ka agency/business grow kar sakte hain.
• **Live Projects:** Live ad budget chalakar practical training di jaati hai.`,
        action: { label: 'View Digital Marketing Course', course: 'Digital Marketing' },
        suggestions: ['Digital marketing ki salary kya hoti hai?', 'Apply online for batch']
      }
    }

    // 5. Tally / SAP / Finance / Accounts
    if (q.includes('tally') || q.includes('sap') || q.includes('gst') || q.includes('account') || q.includes('finance') || q.includes('commerce')) {
      return {
        text: `💼 **Finance, Accounting & ERP Courses:**
        
1. **Tally Prime with GST:** Day-to-day business accounting, GST return filing, E-way bill, payroll, balance sheet finalization.
2. **SAP ERP Training:** Global enterprise level accounting (FICO / MM) MNCs aur multinational corporations ke liye.

• **Kiske liye best hai:** Commerce graduates (B.Com/M.Com), 12th pass, ya working accountants jo package upgrade chahte hain!`,
        action: { label: 'Check Tally Prime & GST', course: 'Tally Prime with GST' },
        suggestions: ['SAP Course ke baare me batao', 'Weekend batch timings kya hai?']
      }
    }

    // 6. 12th pass / Beginner / College student guidance
    if (q.includes('12th') || q.includes('beginner') || q.includes('kya karu') || q.includes('start') || q.includes('future') || q.includes('salary') || q.includes('career')) {
      return {
        text: `🌟 **Aapke Future ke Liye Best Career Roadmaps:**

• **Agar Tech / High Salary pasand hai:** 👉 *Data Analytics* ya *Python Full Stack*
• **Agar Creative / Visual field pasand hai:** 👉 *Graphic Designing* ya *Video Editing*
• **Agar Business / Sales / Online growth pasand hai:** 👉 *Digital Marketing & SEO*
• **Agar Accounts / Office job pasand hai:** 👉 *Tally Prime with GST* ya *Basic Computer Courses*

Animeria me har course ke sath **Govt. Recognized Certification + Live Projects + 100% Placement Assistance** milta hai.`,
        suggestions: ['Data Analytics ke baare me batao', 'Admission kaise le?', 'Free career counselling session book karein']
      }
    }

    // 7. Fees / Admission / Batches
    if (q.includes('fee') || q.includes('fees') || q.includes('cost') || q.includes('admission') || q.includes('batch') || q.includes('timing') || q.includes('discount')) {
      return {
        text: `🎓 **Fees, Offers & Admission Details:**
        
• **Festive 50% Special Offer:** Abhi foundation aur professional batches par festive scholarships chal rahi hain.
• **Flexible EMI Option:** 0% interest monthly installment me fees pay karne ki suvidha available hai.
• **Batches:** Weekday (Mon-Fri) aur Weekend (Sat-Sun) morning/evening flexible timings.
• **Admission:** Aap website se direct Online Admission Form fill kar sakte hain ya enquiry daal sakte hain.`,
        action: { label: 'Fill Online Admission Form', page: 'admission' },
        suggestions: ['Counselor se WhatsApp par baat karein', 'Course syllabus download karein']
      }
    }

    // 8. Default intelligent counselor answer
    return {
      text: `Bahut achha sawal! Animeria me hamare expert mentors aapko industry ke real practical skills sikhate hain. 

Aap humare top courses me se choose kar sakte hain:
1. **Data Analytics** (Advanced Excel, SQL, Power BI, Python)
2. **Python Full Stack Development** (Frontend + Backend + DB)
3. **Graphic Designing & Video Editing** (Adobe Suite)
4. **Digital Marketing & SEO** (Live Ads & Campaigns)
5. **Tally Prime & GST / SAP ERP**

Aap kis background se hain (12th, Graduate, College ya Working Professional)? Main aapko exact customized recommendation dunga!`,
      suggestions: [
        'Data Analytics Course',
        'Python Full Stack',
        'Graphic Designing',
        'Direct Counselor se call/chat karein'
      ]
    }
  }

  const handleSend = (textToSend = null) => {
    const query = textToSend || inputText
    if (!query.trim()) return

    // Add user message
    const newMessages = [
      ...messages,
      {
        sender: 'user',
        text: query,
        time: 'Just now'
      }
    ]
    setMessages(newMessages)
    setInputText('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiReply = generateAiResponse(query)
      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: aiReply.text,
          action: aiReply.action,
          suggestions: aiReply.suggestions,
          time: 'Just now'
        }
      ])
      setIsTyping(false)
    }, 600)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[600px] max-h-[90vh] animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white p-4 sm:p-5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                <Bot className="w-6 h-6 text-blue-200" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-indigo-900 animate-pulse"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                  Animeria AI Career Counselor
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </h3>
                <span className="text-[10px] uppercase font-bold bg-white/20 px-2 py-0.5 rounded-full text-blue-100">
                  Live AI
                </span>
              </div>
              <p className="text-xs text-blue-100/90 font-medium">
                Instant guidance on courses, future roadmap & careers
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                setMessages([
                  {
                    sender: 'ai',
                    text: 'Namaste! Chat reset ho gayi hai. Aapko apne career ya course ke baare mein kya puchna hai?',
                    time: 'Just now',
                    suggestions: [
                      'Data Analytics vs Python Full Stack?',
                      'Non-IT background ke liye best course?',
                      'Highest placement package course kaunsa hai?'
                    ]
                  }
                ])
              }}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition cursor-pointer"
              title="Reset Chat"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50">
          {messages.map((msg, index) => {
            const isAi = msg.sender === 'ai'
            return (
              <div 
                key={index}
                className={`flex gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
              >
                {isAi && (
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-2`}>
                  <div 
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs ${
                      isAi 
                        ? 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-sm' 
                        : 'bg-blue-600 text-white font-medium rounded-tr-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line">
                      {msg.text}
                    </div>

                    {/* AI Action CTA Button */}
                    {msg.action && (
                      <div className="pt-3 mt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                        {msg.action.course ? (
                          <button
                            type="button"
                            onClick={() => {
                              onClose()
                              if (onNavigate) onNavigate('courses', null, msg.action.course)
                            }}
                            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-sm transition cursor-pointer"
                          >
                            <span>{msg.action.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : msg.action.page ? (
                          <button
                            type="button"
                            onClick={() => {
                              onClose()
                              if (onNavigate) onNavigate(msg.action.page)
                            }}
                            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-sm transition cursor-pointer"
                          >
                            <span>{msg.action.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : null}

                        <a
                          href="https://wa.me/917979823383?text=Hi%20Animeria,%20I%20am%20chatting%20with%20Animeria%20AI%20and%20need%20expert%20human%20guidance."
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-semibold px-3 py-2 rounded-xl text-xs transition"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Talk to Human Counselor</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Suggestions Chips */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.suggestions.map((sugg, si) => (
                        <button
                          key={si}
                          type="button"
                          onClick={() => handleSend(sugg)}
                          className="text-[11px] font-semibold bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 border border-blue-200/80 px-2.5 py-1 rounded-full shadow-2xs transition cursor-pointer flex items-center gap-1"
                        >
                          <span>{sugg}</span>
                          <ChevronRight className="w-3 h-3 text-blue-400" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-xs text-slate-400 font-medium ml-1">Animeria AI is thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Apne future ya course ke baare mein puchein (e.g. 12th ke baad kya karein?)..."
              className="flex-1 bg-slate-100 focus:bg-white text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 px-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white p-3 rounded-2xl shadow-md transition cursor-pointer shrink-0"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
            <span>Powered by Animeria.AI Career Engine</span>
            <span>100% Free Counseling</span>
          </div>
        </div>
      </div>
    </div>
  )
}
