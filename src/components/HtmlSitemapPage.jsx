import React from 'react'
import { 
  Globe, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Users, 
  FileText, 
  MapPin, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Home
} from 'lucide-react'

export default function HtmlSitemapPage({ onNavigate, onOpenEnquire }) {
  const pagesList = [
    {
      category: 'Main Website Navigation',
      icon: Home,
      color: 'bg-blue-50 text-blue-600',
      links: [
        { title: 'Home Page', path: 'home', desc: 'Hero section, course highlights, and institute overview' },
        { title: 'Explore All Courses & Curriculum', path: 'courses', desc: 'Full course catalog, tools covered, duration & fee structure' },
        { title: 'Online Student Admission Form', path: 'admission', desc: '4-step digital admission application desk' },
        { title: 'Certifications & Government Registrations', path: 'certifications', desc: 'MSME, ISO certification credentials & student verification' },
        { title: 'About Us & Mentor Network', path: 'about', desc: 'Our mission, leadership, 5 verticals & mentor network' },
        { title: 'Institute Policies & Code of Conduct', path: 'policies', desc: '14 comprehensive student & operational policies' },
        { title: 'Contact Us & Dwarka Campus Location', path: 'contact', desc: 'Dwarka campus address, Google Maps & support desk' },
        { title: 'Staff & Management Admin Portal', path: 'admin', desc: 'Authorized admin portal & staff desk login' },
      ]
    },
    {
      category: 'Professional Course Programs',
      icon: BookOpen,
      color: 'bg-purple-50 text-purple-600',
      links: [
        { title: 'Data Analytics Master Program', path: 'courses', desc: 'Excel, Power BI, SQL & Python for Data Analytics' },
        { title: 'Python Full Stack Development', path: 'courses', desc: 'Python, Django, React & Full Stack Architecture' },
        { title: 'Graphic Designing Professional', path: 'courses', desc: 'Photoshop, Illustrator, InDesign & Brand Identity' },
        { title: 'Video Editing & Motion VFX', path: 'courses', desc: 'Premiere Pro, After Effects & Motion Graphics' },
        { title: 'Digital Marketing & Growth Hacking', path: 'courses', desc: 'SEO, Social Media Ads, Google Ads & Analytics' },
        { title: 'Web Designing & UI/UX', path: 'courses', desc: 'HTML5, CSS3, Tailwind, JavaScript & React' },
        { title: 'Tally Prime with GST & Tax', path: 'courses', desc: 'GST Returns, Payroll, Tally Prime & Accounting' },
        { title: 'SAP ERP Financials & Enterprise', path: 'courses', desc: 'SAP FICO, Enterprise Resource Planning & Finance' },
        { title: 'Computer Basics to Advanced', path: 'courses', desc: 'MS Office, Typing, Internet & IT Fundamentals' },
      ]
    },
    {
      category: 'SEO Redirects & Search Engines',
      icon: Globe,
      color: 'bg-emerald-50 text-emerald-600',
      links: [
        { title: 'XML Sitemap (For Google Search Console)', isExternal: true, href: '/sitemap.xml', desc: 'Machine-readable XML indexing file' },
        { title: 'Robots.txt Directive File', isExternal: true, href: '/robots.txt', desc: 'Search engine crawler rules & directives' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Website Sitemap</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Visual Website <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Sitemap & Index</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2">
            Easily navigate all pages, course programs, admissions, and legal resources of Animeria.AI.
          </p>
        </div>

        {/* Sitemap Sections Grid */}
        <div className="space-y-8">
          {pagesList.map((section, idx) => {
            const Icon = section.icon
            return (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                  <div className={`p-2.5 rounded-2xl ${section.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    {section.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.links.map((link, lIdx) => (
                    <div
                      key={lIdx}
                      onClick={() => {
                        if (link.isExternal) {
                          window.open(link.href, '_blank')
                        } else if (onNavigate) {
                          onNavigate(link.path)
                        }
                      }}
                      className="p-4 rounded-2xl border border-slate-200/70 hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {link.title}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {link.desc}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 text-[10px] font-mono font-bold text-slate-400">
                        {link.isExternal ? link.href : `/#${link.path}`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
