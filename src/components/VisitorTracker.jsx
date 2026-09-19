import React, { useEffect, useRef } from 'react'

export default function VisitorTracker({ currentPage }) {
  const pingSentRef = useRef(false)

  useEffect(() => {
    // Only ping once per browser session to prevent unnecessary re-requests
    if (sessionStorage.getItem('animeria_ping_sent')) return

    const timer = setTimeout(() => {
      if (pingSentRef.current || sessionStorage.getItem('animeria_ping_sent')) return
      pingSentRef.current = true
      sessionStorage.setItem('animeria_ping_sent', 'true')

      try {
        // Detect Device
        const ua = navigator.userAgent || ''
        let device = 'Desktop (Web)'
        if (/android/i.test(ua)) device = 'Android Phone 📱'
        else if (/iphone|ipad|ipod/i.test(ua)) device = 'Apple iPhone/iPad 🍏'
        else if (/windows/i.test(ua)) device = 'Windows PC 💻'
        else if (/macintosh|mac os x/i.test(ua)) device = 'MacBook 💻'

        // Detect Timezone and Location
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata'
        const location = timezone.includes('Calcutta') || timezone.includes('Kolkata')
          ? 'Delhi NCR / India 🇮🇳'
          : timezone

        // Detect Referrer
        const referrer = document.referrer
          ? (document.referrer.includes('instagram') ? 'Instagram App 📸'
            : document.referrer.includes('google') ? 'Google Search 🔍'
            : document.referrer.includes('facebook') ? 'Facebook App 👥'
            : document.referrer.includes('whatsapp') ? 'WhatsApp Link 💬'
            : document.referrer)
          : 'Direct Traffic 🌐'

        const pageTitle = currentPage === 'courses' ? 'Courses Desk'
          : currentPage === 'admission' ? 'Admission Form'
          : currentPage === 'certifications' ? 'Certifications Page'
          : currentPage === 'about' ? 'About Us'
          : currentPage === 'contact' ? 'Contact Page'
          : 'Home Page'

        // Dispatch 5-second visitor ping to backend
        fetch('/api/visitor-ping', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            page: pageTitle,
            device,
            referrer,
            timezone,
            screen: `${window.innerWidth}x${window.innerHeight}`,
            location
          })
        }).catch(err => console.debug('Visitor ping offline/suppressed:', err))
      } catch (err) {
        console.debug('Visitor tracker error:', err)
      }
    }, 5000) // Exactly 5 seconds

    return () => clearTimeout(timer)
  }, [currentPage])

  return null // Headless tracking component
}
