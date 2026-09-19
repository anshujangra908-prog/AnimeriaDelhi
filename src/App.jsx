import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import Placements from './components/Placements'
import Testimonials from './components/Testimonials'
import SpecialOffersAndBatches from './components/SpecialOffersAndBatches'
import FeaturesGrid from './components/FeaturesGrid'
import HiringPartners from './components/HiringPartners'
import GoogleReviews from './components/GoogleReviews'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import EnquireModal from './components/EnquireModal'
import VisitorTracker from './components/VisitorTracker'

// Direct imported pages for instant 0ms page transitions without loading spinners
import CourseDetailPage from './components/CourseDetailPage'
import ContactPage from './components/ContactPage'
import AdmissionFormPage from './components/AdmissionFormPage'
import CertificationsPage from './components/CertificationsPage'
import AboutPage from './components/AboutPage'
import PoliciesPage from './components/PoliciesPage'
import AdminPortalPage from './components/AdminPortalPage'
import HtmlSitemapPage from './components/HtmlSitemapPage'

// Animeria AI Counselor & Welcome Components
import WelcomeBanner from './components/WelcomeBanner'
import AiCareerSection from './components/AiCareerSection'
import AiAssistantModal from './components/AiAssistantModal'
import { Bot, Sparkles } from 'lucide-react'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [enquireOpen, setEnquireOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [aiModalOpen, setAiModalOpen] = useState(false)

  // Listen to hash and pathname changes for direct deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase()
      const pathname = window.location.pathname.replace(/^\//, '').toLowerCase()
      const mainPages = ['contact', 'courses', 'admission', 'certifications', 'about', 'policies', 'admin', 'staff', 'login', 'sitemap']

      if (hash === 'admin' || hash === 'staff' || hash === 'login' || pathname === 'admin' || pathname === 'staff' || pathname === 'login') {
        setCurrentPage('admin')
        window.scrollTo(0, 0)
      } else if (mainPages.includes(hash) || mainPages.includes(pathname)) {
        const targetPage = mainPages.includes(hash) ? hash : pathname
        setCurrentPage(targetPage)
        window.scrollTo(0, 0)
      } else if (hash === '' || hash === 'home') {
        setCurrentPage('home')
        window.scrollTo(0, 0)
      } else {
        // In-page section anchor (e.g. #batches, #documents, #curriculum)
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [])

  const handleOpenEnquire = (courseName = '') => {
    setSelectedCourse(courseName)
    setEnquireOpen(true)
  }

  const handleCategorySelect = (category) => {
    setSelectedCourse(category.title)
    handleNavigate('courses')
  }

  const handleNavigate = (page, scrollTarget = null, courseName = null) => {
    if (courseName) {
      setSelectedCourse(courseName)
    }
    setCurrentPage(page)
    const targetHash = page === 'home' ? '' : `#${page}`
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash
    }

    if (scrollTarget) {
      setTimeout(() => {
        const el = document.getElementById(scrollTarget)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      window.scrollTo(0, 0)
    }
  }

  // Standalone Full-Screen View for Admin Portal
  if (currentPage === 'admin') {
    return <AdminPortalPage onNavigate={handleNavigate} />
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header / Navbar (Facebook-Style Top Bar) */}
      <Navbar 
        onOpenEnquire={() => handleOpenEnquire('General Enquiry')} 
        onNavigate={handleNavigate}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onOpenAi={() => setAiModalOpen(true)}
      />

      {/* Main Body Container with Facebook-Style Left Sidebar */}
      <div className="flex-1 flex">
        {/* Left Navigation Sidebar */}
        <Sidebar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenEnquire={handleOpenEnquire}
          onOpenAi={() => setAiModalOpen(true)}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Dedicated Page Content Area */}
        <div className="flex-1 flex flex-col min-w-0 lg:pl-64 xl:pl-72 transition-all">
          <main className="flex-1">
            {currentPage === 'contact' ? (
              /* SEPARATE PAGE 1: Contact Us Page */
              <ContactPage 
                onOpenEnquire={() => handleOpenEnquire('Contact Enquiry')} 
              />
            ) : currentPage === 'courses' ? (
              /* SEPARATE PAGE 2: Course Details Page */
              <CourseDetailPage 
                selectedCourse={selectedCourse}
                onSelectCourse={setSelectedCourse}
                onOpenEnquire={(course) => handleOpenEnquire(course || selectedCourse || 'Data Analytics')}
                onNavigate={handleNavigate}
              />
            ) : currentPage === 'admission' ? (
              /* SEPARATE PAGE 3: Online Admission Form Page */
              <AdmissionFormPage 
                onNavigate={handleNavigate}
              />
            ) : currentPage === 'certifications' ? (
              /* SEPARATE PAGE 4: Certifications & Registrations Page */
              <CertificationsPage 
                onNavigate={handleNavigate}
                onOpenEnquire={(topic) => handleOpenEnquire(topic || 'Certifications Enquiry')}
              />
            ) : currentPage === 'about' ? (
              /* SEPARATE PAGE 5: About Us & Leadership Page */
              <AboutPage 
                onNavigate={handleNavigate}
                onOpenEnquire={(topic) => handleOpenEnquire(topic || 'About Us Enquiry')}
              />
            ) : currentPage === 'policies' ? (
              /* SEPARATE PAGE 6: Our Policies Page (14 Policies Accordion) */
              <PoliciesPage 
                onNavigate={handleNavigate}
                onOpenEnquire={(topic) => handleOpenEnquire(topic || 'Policy Query')}
              />
            ) : currentPage === 'sitemap' ? (
              /* SEPARATE PAGE 7: Visual HTML Sitemap */
              <HtmlSitemapPage
                onNavigate={handleNavigate}
                onOpenEnquire={handleOpenEnquire}
              />
            ) : (
              /* SEPARATE PAGE 7: Home Page */
              <>
                {/* 1. Hero Section */}
                <HeroSection 
                  onOpenEnquire={() => handleOpenEnquire('Hero Enquiry')} 
                  onExploreCourses={() => handleNavigate('courses')}
                />

                {/* 2. AI Career Guidance & Q&A Section */}
                <AiCareerSection 
                  onOpenAiModal={() => setAiModalOpen(true)}
                  onNavigate={handleNavigate}
                />

                {/* 3. Explore Our Course Categories */}
                <Categories 
                  onSelectCategory={handleCategorySelect} 
                  onNavigate={handleNavigate}
                />

                {/* 4. Our Recent Placements */}
                <Placements />

                {/* 5. Student Testimonials */}
                <Testimonials />

                {/* 6. Navratri Special Offer + Upcoming Batches + EMI Option */}
                <SpecialOffersAndBatches 
                  onOpenEnquire={() => handleOpenEnquire('Batches & Offers')} 
                  onNavigate={handleNavigate}
                />

                {/* 7. Corporate Training + Worldwide Online Training + Verify Certificate */}
                <FeaturesGrid onOpenEnquire={() => handleOpenEnquire('Corporate Training')} />

                {/* 8. Our Hiring Partners */}
                <HiringPartners />

                {/* 9. Google Reviews & Student Feedback */}
                <GoogleReviews />

                {/* 10. Pre-Footer Call to Action Banner */}
                <CtaBanner onOpenEnquire={() => handleOpenEnquire('Career Upgrade')} />
              </>
            )}
          </main>


          {/* Website Footer */}
          <Footer 
            onOpenEnquire={() => handleOpenEnquire('Footer Enquiry')} 
            onNavigate={handleNavigate}
          />
        </div>
      </div>

      {/* Floating AI Career Counselor Trigger Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          type="button"
          onClick={() => setAiModalOpen(true)}
          className="group relative flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-extrabold px-4 sm:px-5 py-3.5 rounded-full shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-white/20"
        >
          {/* Ambient Glow */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-60 blur-md group-hover:opacity-100 transition-opacity animate-pulse"></span>
          
          <div className="relative flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Bot className="w-5 h-5 text-amber-300" />
            </div>
            <div className="text-left leading-tight hidden sm:block">
              <div className="text-[10px] text-blue-100 uppercase tracking-widest font-bold">Ask AI Counselor</div>
              <div className="text-xs font-black text-white flex items-center gap-1">
                <span>Career Help</span>
                <Sparkles className="w-3 h-3 text-amber-300" />
              </div>
            </div>
            <span className="sm:hidden text-xs font-black">AI Help</span>
          </div>
        </button>
      </div>

      {/* AI Assistant Modal */}
      <AiAssistantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        onNavigate={handleNavigate}
        onOpenEnquire={handleOpenEnquire}
      />

      {/* 5-Second Real-Time Visitor Tracking Engine */}
      <VisitorTracker currentPage={currentPage} />

      {/* Interactive Enquire Now Modal */}
      <EnquireModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        defaultCourse={selectedCourse}
      />

      {/* Floating Welcome Pop-up Toast for Visitors */}
      <WelcomeBanner 
        onOpenAi={() => setAiModalOpen(true)}
        onNavigate={handleNavigate}
      />
    </div>
  )
}
