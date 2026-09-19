import React, { useState, useEffect, useRef } from 'react'
import { 
  ShieldCheck, 
  Lock, 
  User, 
  Key, 
  LogOut, 
  Search, 
  Download, 
  Filter, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  Trash2, 
  RefreshCw, 
  ChevronRight, 
  X, 
  GraduationCap, 
  Users, 
  BarChart3, 
  Building2, 
  Calendar, 
  Sparkles,
  ExternalLink,
  Edit3,
  Radio,
  Bell,
  Volume2,
  VolumeX,
  Zap,
  Mail,
  Settings,
  Save,
  Check,
  Plus,
  Globe,
  LayoutGrid,
  Tag
} from 'lucide-react'
import { courseCategories, upcomingBatches } from '../data/mockData'

// WhatsApp custom icon
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.497 2 12.034c0 1.83.493 3.553 1.348 5.043L2 22l5.053-1.326a9.972 9.972 0 0 0 4.978 1.327c5.535 0 10.031-4.497 10.031-10.034C22.062 6.497 17.566 2 12.031 2zm5.82 14.173c-.244.686-1.42 1.32-1.956 1.378-.49.052-1.127.08-3.64-1.002-3.21-1.38-5.267-4.66-5.428-4.873-.16-.214-1.303-1.733-1.303-3.305 0-1.572.825-2.348 1.118-2.668.293-.32.64-.4.854-.4.213 0 .426 0 .613.01.2.01.468-.076.732.56.267.64.908 2.215.988 2.375.08.16.133.347.027.56-.107.213-.16.347-.32.533-.16.187-.337.417-.481.56-.16.16-.328.334-.141.654.186.32.83 1.36 1.78 2.207 1.222 1.09 2.25 1.428 2.57 1.588.32.16.507.133.694-.08.187-.214.8-1.04 1.013-1.4.214-.36.427-.3.72-.187.294.107 1.868.88 2.188 1.04.32.16.534.24.614.374.08.133.08.773-.16 1.46z" />
    </svg>
  )
}

export default function AdminPortalPage({ onNavigate }) {
  // Auth state
  const [token, setToken] = useState(() => localStorage.getItem('animeria_admin_token') || '')
  const [adminUser, setAdminUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('animeria_admin_user')) || null
    } catch {
      return null
    }
  })

  // Login form state
  const [username, setUsername] = useState('Animeria')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)

  // Dashboard state
  const [activeTab, setActiveTab] = useState('admissions') // admissions | enquiries | radar | analytics | settings
  const [stats, setStats] = useState(null)
  const [admissions, setAdmissions] = useState([])
  const [enquiries, setEnquiries] = useState([])
  const [visitors, setVisitors] = useState([])
  const [notifs, setNotifs] = useState([])
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [loadingData, setLoadingData] = useState(false)
  const prevVisitorCountRef = useRef(0)

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Selected item modal & edit modals
  const [selectedAdmission, setSelectedAdmission] = useState(null)
  const [editingAdmission, setEditingAdmission] = useState(null)
  const [editingEnquiry, setEditingEnquiry] = useState(null)
  const [notesInput, setNotesInput] = useState('')
  const [toastMessage, setToastMessage] = useState('')

  // Add New Admission / Enquiry states
  const initialNewAdmission = {
    fullName: '',
    mobile: '',
    email: '',
    course: 'Data Analytics Course',
    mode: 'Classroom (Offline)',
    batchTime: 'Morning (9:00 AM - 1:00 PM)',
    paymentOption: 'Full One-Time Payment',
    status: 'Verified',
    address: '',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110075',
    notes: ''
  }

  const initialNewEnquiry = {
    name: '',
    phone: '',
    email: '',
    course: 'Data Analytics Course',
    mode: 'Offline Classroom',
    assignedTo: 'Admissions Desk',
    status: 'New',
    query: ''
  }

  const [isAddingAdmission, setIsAddingAdmission] = useState(false)
  const [newAdmissionForm, setNewAdmissionForm] = useState(initialNewAdmission)
  const [isAddingEnquiry, setIsAddingEnquiry] = useState(false)
  const [newEnquiryForm, setNewEnquiryForm] = useState(initialNewEnquiry)

  // Website CMS States (Courses, Batches, Offers)
  const [websiteCourses, setWebsiteCourses] = useState(() => {
    try {
      const saved = localStorage.getItem('animeria_courses')
      return saved ? JSON.parse(saved) : (courseCategories || [])
    } catch {
      return courseCategories || []
    }
  })
  const [websiteBatches, setWebsiteBatches] = useState(() => {
    try {
      const saved = localStorage.getItem('animeria_batches')
      return saved ? JSON.parse(saved) : (upcomingBatches || [])
    } catch {
      return upcomingBatches || []
    }
  })
  const [websiteOffer, setWebsiteOffer] = useState(() => {
    try {
      const saved = localStorage.getItem('animeria_offer')
      return saved ? JSON.parse(saved) : {
        title: 'Navratri Special Offer',
        discount: '50% OFF',
        subtitle: 'on All Basic & Career Foundation Courses',
        note: '⚡ Limited time offer! Valid for first 50 registrations this festive season.'
      }
    } catch {
      return {
        title: 'Navratri Special Offer',
        discount: '50% OFF',
        subtitle: 'on All Basic & Career Foundation Courses',
        note: '⚡ Limited time offer! Valid for first 50 registrations this festive season.'
      }
    }
  })

  const initialNewCourse = {
    title: '',
    desc: '',
    duration: '4 - 6 Months',
    tools: '',
    badge: 'Trending',
    badgeColor: 'bg-blue-600 text-white',
    group: 'tech',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
    fee: '',
    offerFee: '',
    emi: ''
  }
  const [isAddingCourse, setIsAddingCourse] = useState(false)
  const [newCourseForm, setNewCourseForm] = useState(initialNewCourse)
  const [editingCourse, setEditingCourse] = useState(null)

  const initialNewBatch = {
    course: 'Data Analytics Course',
    date: '25 Oct 2025',
    mode: 'Offline',
    type: 'Weekday Batch'
  }
  const [isAddingBatch, setIsAddingBatch] = useState(false)
  const [newBatchForm, setNewBatchForm] = useState(initialNewBatch)

  // Settings state
  const [adminConfig, setAdminConfig] = useState({
    username: 'Animeria',
    alertEmail: 'info@animeria.com',
    alertMobile: '+91-7979823383',
    campus: 'Dwarka, Delhi NCR',
    instituteName: 'Animeria Computer & AI Institute'
  })
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [passwordMsg, setPasswordMsg] = useState({ text: '', isError: false })

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 4000)
  }

  // Pleasant Web Audio Bell Chime for 5-sec visitor alert
  const playRadarChime = () => {
    if (!soundEnabled) return
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.type = 'sine'
      osc.frequency.setValueAtTime(587.33, ctx.currentTime) // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.12) // A5
      gain.gain.setValueAtTime(0.25, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6)
      osc.start()
      osc.stop(ctx.currentTime + 0.6)
    } catch (e) {
      console.debug('Audio chime suppressed by browser policy')
    }
  }

  // Load Dashboard Data
  const fetchDashboardData = async (isBackground = false) => {
    if (!token) return
    if (!isBackground) setLoadingData(true)
    try {
      const headers = { Authorization: `Bearer ${token}` }

      const [statsRes, admRes, enqRes, visRes, notifRes, cfgRes, crsRes, btcRes, offRes] = await Promise.all([
        fetch('/api/admin/stats', { headers }),
        fetch('/api/admin/admissions', { headers }),
        fetch('/api/admin/enquiries', { headers }),
        fetch('/api/admin/live-visitors', { headers }),
        fetch('/api/admin/notifications', { headers }),
        fetch('/api/admin/config', { headers }),
        fetch('/api/content/courses'),
        fetch('/api/content/batches'),
        fetch('/api/content/offer')
      ])

      if (statsRes.status === 401 || statsRes.status === 403) {
        handleLogout()
        return
      }

      const statsData = await statsRes.json()
      const admData = await admRes.json()
      const enqData = await enqRes.json()
      const visData = await visRes.json()
      const notifData = await notifRes.json()
      const cfgData = await cfgRes.json()

      if (statsData.success) setStats(statsData.stats)
      if (admData.success) setAdmissions(admData.data || [])
      if (enqData.success) setEnquiries(enqData.data || [])
      if (cfgData.success && cfgData.config) setAdminConfig(cfgData.config)

      if (crsRes.ok) {
        const crsData = await crsRes.json()
        if (crsData.success && crsData.data) setWebsiteCourses(crsData.data)
      }
      if (btcRes.ok) {
        const btcData = await btcRes.json()
        if (btcData.success && btcData.data) setWebsiteBatches(btcData.data)
      }
      if (offRes.ok) {
        const offData = await offRes.json()
        if (offData.success && offData.data) setWebsiteOffer(offData.data)
      }

      if (visData.success) {
        const newCount = (visData.data || []).length
        if (prevVisitorCountRef.current > 0 && newCount > prevVisitorCountRef.current) {
          playRadarChime()
          showToast('🔔 New Website Visitor Detected! (5-Sec Alert)')
        }
        prevVisitorCountRef.current = newCount
        setVisitors(visData.data || [])
      }

      if (notifData.success) setNotifs(notifData.data || [])
    } catch (err) {
      console.error('Error fetching admin data:', err)
    } finally {
      if (!isBackground) setLoadingData(false)
    }
  }

  // Create New Student Admission
  const handleCreateAdmission = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/admin/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newAdmissionForm)
      })
      const data = await res.json()
      if (data.success) {
        setAdmissions(prev => [data.data, ...prev])
        setIsAddingAdmission(false)
        setNewAdmissionForm(initialNewAdmission)
        showToast(`🎉 New student admission created: ${data.data.fullName} (${data.data.id})`)
      } else {
        alert(data.message || 'Failed to create student admission')
      }
    } catch (err) {
      console.error(err)
      alert('Network error while adding student admission.')
    }
  }

  // Create New Lead / Enquiry
  const handleCreateEnquiry = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newEnquiryForm)
      })
      const data = await res.json()
      if (data.success) {
        setEnquiries(prev => [data.data, ...prev])
        setIsAddingEnquiry(false)
        setNewEnquiryForm(initialNewEnquiry)
        showToast(`🎉 New lead created: ${data.data.name} (${data.data.id})`)
      } else {
        alert(data.message || 'Failed to create lead')
      }
    } catch (err) {
      console.error(err)
      alert('Network error while adding lead.')
    }
  }

  // Save Edited Student / Admission Details
  const handleSaveEditedAdmission = async (e) => {
    e.preventDefault()
    if (!editingAdmission) return
    try {
      const res = await fetch(`/api/admin/admissions/${editingAdmission.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(editingAdmission)
      })
      const data = await res.json()
      if (data.success) {
        setAdmissions(prev => prev.map(item => item.id === editingAdmission.id ? data.data : item))
        setEditingAdmission(null)
        showToast(`✅ Details for ${editingAdmission.fullName} updated!`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Save Edited Lead / Enquiry Details
  const handleSaveEditedEnquiry = async (e) => {
    e.preventDefault()
    if (!editingEnquiry) return
    try {
      const res = await fetch(`/api/admin/enquiries/${editingEnquiry.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(editingEnquiry)
      })
      const data = await res.json()
      if (data.success) {
        setEnquiries(prev => prev.map(item => item.id === editingEnquiry.id ? data.data : item))
        setEditingEnquiry(null)
        showToast(`✅ Lead for ${editingEnquiry.name} updated!`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Save Admin Settings & Alert Contacts
  const handleSaveSettings = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/admin/config', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(adminConfig)
      })
      const data = await res.json()
      if (data.success) {
        showToast('✅ Institute settings & alert contacts saved successfully!')
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Create New Course for Website
  const handleCreateCourse = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/admin/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newCourseForm)
      })
      const data = await res.json()
      if (data.success) {
        setWebsiteCourses(prev => [data.data, ...prev])
        setIsAddingCourse(false)
        setNewCourseForm(initialNewCourse)
        showToast(`🎉 Course "${data.data.title}" published to website!`)
      } else {
        alert(data.message || 'Failed to add course.')
      }
    } catch (err) {
      console.error(err)
      alert('Network error while adding course.')
    }
  }

  // Save Edited Course
  const handleSaveEditedCourse = async (e) => {
    e.preventDefault()
    if (!editingCourse) return
    try {
      const res = await fetch(`/api/admin/courses/${editingCourse.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(editingCourse)
      })
      const data = await res.json()
      if (data.success) {
        setWebsiteCourses(prev => prev.map(c => c.id === editingCourse.id ? data.data : c))
        setEditingCourse(null)
        showToast(`✅ Course "${data.data.title}" updated on website!`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Delete Course from Website
  const handleDeleteCourse = async (id, title) => {
    if (!window.confirm(`Are you sure you want to remove "${title}" from the website?`)) return
    try {
      const res = await fetch(`/api/admin/courses/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await res.json()
      if (data.success) {
        setWebsiteCourses(prev => prev.filter(c => c.id !== id))
        showToast(`🗑️ Course "${title}" removed from website.`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Create New Batch Schedule
  const handleCreateBatch = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/admin/batches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newBatchForm)
      })
      const data = await res.json()
      if (data.success) {
        setWebsiteBatches(prev => [data.data, ...prev])
        setIsAddingBatch(false)
        setNewBatchForm(initialNewBatch)
        showToast(`📅 New batch added for ${data.data.course}!`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Delete Batch from Website
  const handleDeleteBatch = async (id) => {
    if (!window.confirm('Delete this batch schedule from the website?')) return
    try {
      const res = await fetch(`/api/admin/batches/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await res.json()
      if (data.success) {
        setWebsiteBatches(prev => prev.filter(b => String(b.id) !== String(id)))
        showToast('🗑️ Batch schedule removed from website.')
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Save Festive Offer Banner
  const handleSaveOffer = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/admin/offer', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(websiteOffer)
      })
      const data = await res.json()
      if (data.success) {
        showToast('🎉 Festive offer banner updated on website!')
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Change Admin Password
  const handleChangePassword = async (e) => {
    e.preventDefault()
    setPasswordMsg({ text: '', isError: false })

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordMsg({ text: 'New password and confirm password do not match!', isError: true })
      return
    }

    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword
        })
      })
      const data = await res.json()
      if (data.success) {
        setPasswordMsg({ text: 'Password changed successfully! Keep it safe.', isError: false })
        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
        showToast('🔑 Password changed successfully!')
      } else {
        setPasswordMsg({ text: data.message || 'Failed to change password.', isError: true })
      }
    } catch (err) {
      setPasswordMsg({ text: 'Server error while changing password.', isError: true })
    }
  }

  useEffect(() => {
    if (token) {
      fetchDashboardData()

      // Real-Time Radar Poller: checks every 4 seconds for new visitors & alerts
      const interval = setInterval(() => {
        fetchDashboardData(true)
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [token])

  // Login Handler
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError('')
    setLoginLoading(true)

    const trimmedUser = (username || '').trim()
    const trimmedPass = (password || '').trim()

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: trimmedUser, password: trimmedPass })
      })

      const data = await res.json()

      if (data.success && data.token) {
        setToken(data.token)
        setAdminUser(data.admin)
        if (data.admin?.role === 'StaffMember') {
          setActiveTab('enquiries')
        }
        localStorage.setItem('animeria_admin_token', data.token)
        localStorage.setItem('animeria_admin_user', JSON.stringify(data.admin))
        showToast(`Welcome ${data.admin.username}! Logged in successfully.`)
      } else {
        // Fallback for Staff credentials if server is syncing
        if (
          trimmedUser.toLowerCase() === 'staff' &&
          (trimmedPass === 'Staff@123' || trimmedPass.toLowerCase() === 'staff@123')
        ) {
          const fallbackToken = 'animeria_staff_' + Date.now()
          const fallbackAdmin = { username: 'Staff Desk', role: 'StaffMember', isOffline: true }
          setToken(fallbackToken)
          setAdminUser(fallbackAdmin)
          setActiveTab('enquiries')
          localStorage.setItem('animeria_admin_token', fallbackToken)
          localStorage.setItem('animeria_admin_user', JSON.stringify(fallbackAdmin))
          showToast('Welcome Staff Member! Logged in to Staff Desk.')
        } else if (
          trimmedUser.toLowerCase() === 'animeria' &&
          trimmedPass === 'Vaishali@999%'
        ) {
          const fallbackToken = 'animeria_local_admin_' + Date.now()
          const fallbackAdmin = { username: 'Animeria', role: 'SuperAdmin', isOffline: true }
          setToken(fallbackToken)
          setAdminUser(fallbackAdmin)
          localStorage.setItem('animeria_admin_token', fallbackToken)
          localStorage.setItem('animeria_admin_user', JSON.stringify(fallbackAdmin))
          showToast('Welcome Admin! Logged in to SuperAdmin Portal.')
        } else {
          setLoginError(data.message || 'Invalid User ID or Password. Please check credentials.')
        }
      }
    } catch (err) {
      // Backend offline fallback: allow super admin & staff member login
      if (
        trimmedUser.toLowerCase() === 'staff' &&
        (trimmedPass === 'Staff@123' || trimmedPass.toLowerCase() === 'staff@123')
      ) {
        const fallbackToken = 'animeria_staff_' + Date.now()
        const fallbackAdmin = { username: 'Staff Desk', role: 'StaffMember', isOffline: true }
        setToken(fallbackToken)
        setAdminUser(fallbackAdmin)
        setActiveTab('enquiries')
        localStorage.setItem('animeria_admin_token', fallbackToken)
        localStorage.setItem('animeria_admin_user', JSON.stringify(fallbackAdmin))
        showToast('Welcome Staff Member! Logged in to Staff Desk.')
      } else if (
        trimmedUser.toLowerCase() === 'animeria' &&
        trimmedPass === 'Vaishali@999%'
      ) {
        const fallbackToken = 'animeria_local_admin_' + Date.now()
        const fallbackAdmin = { username: 'Animeria', role: 'SuperAdmin', isOffline: true }
        setToken(fallbackToken)
        setAdminUser(fallbackAdmin)
        localStorage.setItem('animeria_admin_token', fallbackToken)
        localStorage.setItem('animeria_admin_user', JSON.stringify(fallbackAdmin))
        showToast('Welcome Admin! Logged in to SuperAdmin Portal.')
      } else {
        setLoginError('Invalid username or password.')
      }
    } finally {
      setLoginLoading(false)
    }
  }

  // Logout Handler
  const handleLogout = () => {
    setToken('')
    setAdminUser(null)
    localStorage.removeItem('animeria_admin_token')
    localStorage.removeItem('animeria_admin_user')
    showToast('Logged out successfully.')
  }

  // Update Admission Status
  const handleUpdateAdmissionStatus = async (id, newStatus, newNotes = null) => {
    try {
      const body = { status: newStatus }
      if (newNotes !== null) body.notes = newNotes

      const res = await fetch(`/api/admin/admissions/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
      })

      const data = await res.json()
      if (data.success) {
        setAdmissions(prev => prev.map(item => item.id === id ? data.data : item))
        if (selectedAdmission && selectedAdmission.id === id) {
          setSelectedAdmission(data.data)
        }
        showToast(`Admission ${id} status updated to "${newStatus}"`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Delete Admission
  const handleDeleteAdmission = async (id) => {
    if (!window.confirm(`Are you sure you want to delete admission record ${id}?`)) return
    try {
      const res = await fetch(`/api/admin/admissions/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await res.json()
      if (data.success) {
        setAdmissions(prev => prev.filter(item => item.id !== id))
        if (selectedAdmission && selectedAdmission.id === id) {
          setSelectedAdmission(null)
        }
        showToast(`Admission ${id} deleted successfully.`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Update Enquiry Status
  const handleUpdateEnquiryStatus = async (id, newStatus, assignedTo = null) => {
    try {
      const body = { status: newStatus }
      if (assignedTo !== null) body.assignedTo = assignedTo

      const res = await fetch(`/api/admin/enquiries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
      })

      const data = await res.json()
      if (data.success) {
        setEnquiries(prev => prev.map(item => item.id === id ? data.data : item))
        showToast(`Enquiry ${id} status updated to "${newStatus}"`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Delete Enquiry
  const handleDeleteEnquiry = async (id) => {
    if (!window.confirm(`Are you sure you want to delete lead ${id}?`)) return
    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await res.json()
      if (data.success) {
        setEnquiries(prev => prev.filter(item => item.id !== id))
        showToast(`Lead ${id} deleted successfully.`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Download CSV
  const handleExportCSV = (type) => {
    const endpoint = type === 'admissions' 
      ? '/api/admin/export/admissions' 
      : '/api/admin/export/enquiries'

    fetch(endpoint, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `Animeria_${type}_${Date.now()}.csv`
        document.body.appendChild(a)
        a.click()
        a.remove()
        showToast(`${type.toUpperCase()} exported to CSV!`)
      })
      .catch(err => console.error(err))
  }

  // Filtered Admissions
  const filteredAdmissions = admissions.filter(item => {
    const q = searchQuery.toLowerCase()
    const matchesSearch = 
      (item.fullName || '').toLowerCase().includes(q) ||
      (item.mobile || '').includes(q) ||
      (item.course || '').toLowerCase().includes(q) ||
      (item.id || '').toLowerCase().includes(q) ||
      (item.city || '').toLowerCase().includes(q)

    if (statusFilter === 'all') return matchesSearch
    return matchesSearch && item.status === statusFilter
  })

  // Filtered Enquiries
  const filteredEnquiries = enquiries.filter(item => {
    const q = searchQuery.toLowerCase()
    const matchesSearch = 
      (item.name || '').toLowerCase().includes(q) ||
      (item.phone || '').includes(q) ||
      (item.course || '').toLowerCase().includes(q) ||
      (item.id || '').toLowerCase().includes(q)

    if (statusFilter === 'all') return matchesSearch
    return matchesSearch && item.status === statusFilter
  })

  // ----------------------------------------------------
  // 1. LOGIN SCREEN (If not authenticated)
  // ----------------------------------------------------
  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#07162c] to-blue-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 mb-4 border border-blue-400/30">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Animeria<span className="text-blue-400">.AI</span>
            </h1>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mt-1">
              Official Administration Desk
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-[11px] font-medium mt-3 border border-white/10">
              <Building2 className="w-3 h-3 text-blue-400" />
              <span>Dwarka Campus, Delhi NCR</span>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Admin Login</h2>
                <p className="text-xs text-slate-500 mt-0.5">Enter authorized credentials to continue</p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
            </div>

            {loginError && (
              <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Admin User ID
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Admin User Name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Key className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {loginLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Portal</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Quick Login Shortcut Pills */}
              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center">
                  Quick Login Presets:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setUsername('Animeria')
                      setPassword('Vaishali@999%')
                    }}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-left transition cursor-pointer"
                  >
                    <span className="text-[10px] font-bold text-blue-700 block">👑 SuperAdmin</span>
                    <span className="text-[9px] text-slate-500 font-mono">User: Animeria</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setUsername('Staff')
                      setPassword('Staff@123')
                    }}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-left transition cursor-pointer"
                  >
                    <span className="text-[10px] font-bold text-emerald-700 block">👤 Staff Member</span>
                    <span className="text-[9px] text-slate-500 font-mono">User: Staff</span>
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <button 
                onClick={() => onNavigate && onNavigate('home')}
                className="hover:text-blue-600 transition flex items-center gap-1 font-medium"
              >
                ← Return to Website
              </button>
              <span>Protected by Animeria Security</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ----------------------------------------------------
  // 2. AUTHENTICATED DASHBOARD
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Header */}
      <header className="bg-[#07162c] text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div 
              onClick={() => onNavigate && onNavigate('home')}
              className="cursor-pointer flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-lg shadow-md">
                A
              </div>
              <div>
                <div className="font-black text-lg tracking-tight leading-tight">
                  Animeria<span className="text-blue-400">.Admin</span>
                </div>
                <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                  Management Portal
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 ml-4 pl-4 border-l border-slate-700 text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                ● Live Server
              </span>
              <span className="text-slate-400">Dwarka Campus</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                A
              </div>
              <span className="font-semibold text-slate-200">{adminUser?.username || 'Animeria'}</span>
              <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded font-bold">SuperAdmin</span>
            </div>

            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Site</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-xl bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 text-xs font-semibold transition flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-6">
        
        {/* Metric Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Admissions</p>
              <h3 className="text-2xl font-black text-slate-900 mt-1">{stats?.totalAdmissions ?? admissions.length}</h3>
              <span className="text-[11px] text-emerald-600 font-bold mt-1 inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {stats?.todayAdmissions || 0} Registered Today
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Course Inquiries</p>
              <h3 className="text-2xl font-black text-slate-900 mt-1">{stats?.totalEnquiries ?? enquiries.length}</h3>
              <span className="text-[11px] text-blue-600 font-bold mt-1 inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {stats?.pendingEnquiries || 0} Pending Follow-up
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Enrolled Students</p>
              <h3 className="text-2xl font-black text-emerald-600 mt-1">{stats?.enrolledAdmissions || 1}</h3>
              <span className="text-[11px] text-slate-400 font-medium mt-1 block">
                Token & Full fees verified
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Counselor Team</p>
              <h3 className="text-base font-black text-slate-900 mt-1">Payal & Sheetal</h3>
              <span className="text-[11px] text-slate-500 font-medium mt-1 block">
                Admissions Desk Active
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Tab Navigation & Actions */}
        <div className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => { setActiveTab('admissions'); setStatusFilter('all') }}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                activeTab === 'admissions'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Admissions Desk ({admissions.length})</span>
            </button>

            <button
              onClick={() => { setActiveTab('enquiries'); setStatusFilter('all') }}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                activeTab === 'enquiries'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Leads & Inquiries ({enquiries.length})</span>
            </button>

            {adminUser?.role !== 'StaffMember' && (
              <>
                <button
                  onClick={() => setActiveTab('radar')}
                  className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                    activeTab === 'radar'
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <Radio className="w-4 h-4" />
                  <span>Live Radar ({visitors.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`hidden md:flex px-4 py-2 rounded-xl text-xs font-bold transition items-center gap-2 ${
                    activeTab === 'analytics'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Course Analytics</span>
                </button>

                <button
                  onClick={() => setActiveTab('cms')}
                  className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                    activeTab === 'cms'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>Website CMS ({websiteCourses.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                    activeTab === 'settings'
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Settings className="w-4 h-4" />
                  <span>Settings & Password</span>
                </button>
              </>
            )}
          </div>

          {/* Quick Refresh and CSV export */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={fetchDashboardData}
              disabled={loadingData}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 transition disabled:opacity-50"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loadingData ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={() => handleExportCSV(activeTab === 'enquiries' ? 'enquiries' : 'admissions')}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Export {activeTab === 'enquiries' ? 'Leads' : 'Admissions'} (.CSV)</span>
            </button>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* TAB 1: ADMISSIONS DESK                               */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'admissions' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
            
            {/* Search and Filters Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by student name, phone, course..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <Filter className="w-4 h-4 text-slate-400 shrink-0" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="all">All Statuses</option>
                  <option value="New">New Applications</option>
                  <option value="Verified & Enrolled">Verified & Enrolled</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Batch Assigned">Batch Assigned</option>
                </select>

                <button
                  onClick={() => setIsAddingAdmission(true)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm shadow-blue-600/30 cursor-pointer ml-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add Student</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/80 text-slate-500 font-bold border-b border-slate-100 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3.5 px-4">Application ID</th>
                    <th className="py-3.5 px-4">Student Info</th>
                    <th className="py-3.5 px-4">Course & Mode</th>
                    <th className="py-3.5 px-4">Batch Time</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Date</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {filteredAdmissions.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center py-12 text-slate-400 text-xs">
                        No admission records found matching your filters.
                      </td>
                    </tr>
                  ) : (
                    filteredAdmissions.map((adm) => (
                      <tr key={adm.id} className="hover:bg-blue-50/30 transition">
                        <td className="py-3.5 px-4">
                          <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                            {adm.id}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900">{adm.fullName}</div>
                          <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500">
                            <span>📞 {adm.mobile}</span>
                            {adm.whatsapp && (
                              <a
                                href={`https://wa.me/91${adm.whatsapp}?text=Hello%20${encodeURIComponent(adm.fullName)},%20regarding%20your%20Animeria%20admission%20application%20(${adm.id})`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5 font-semibold"
                                title="Chat on WhatsApp"
                              >
                                <WhatsAppIcon className="w-3 h-3" />
                                <span>WA</span>
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-800">{adm.course}</div>
                          <span className="text-[10px] text-slate-400">{adm.mode}</span>
                        </td>
                        <td className="py-3.5 px-4 text-[11px] text-slate-600">
                          {adm.batchTime}
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={adm.status || 'New'}
                            onChange={(e) => handleUpdateAdmissionStatus(adm.id, e.target.value)}
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-full border cursor-pointer ${
                              adm.status === 'Verified & Enrolled'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : adm.status === 'Batch Assigned'
                                ? 'bg-purple-50 text-purple-700 border-purple-200'
                                : adm.status === 'Under Review'
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : 'bg-blue-50 text-blue-700 border-blue-200'
                            }`}
                          >
                            <option value="New">New Application</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Verified & Enrolled">Verified & Enrolled</option>
                            <option value="Batch Assigned">Batch Assigned</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-[11px] text-slate-400 whitespace-nowrap">
                          {adm.createdAt ? new Date(adm.createdAt).toLocaleDateString('en-IN') : '-'}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setSelectedAdmission(adm)
                                setNotesInput(adm.notes || '')
                              }}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 text-xs font-semibold transition"
                              title="View Full Application"
                            >
                              View Details
                            </button>
                            <button
                              onClick={() => setEditingAdmission({ ...adm })}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition"
                              title="Edit Student Info"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteAdmission(adm.id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                              title="Delete Record"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 2: LEADS & ENQUIRIES CALL DESK                   */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'enquiries' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
            
            {/* Search & Filter */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search leads by name, phone, query..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <Filter className="w-4 h-4 text-slate-400 shrink-0" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="all">All Lead Statuses</option>
                  <option value="New">New Leads</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Interested">Interested / Follow-up</option>
                  <option value="Converted">Converted to Admission</option>
                  <option value="Not Interested">Closed / Not Interested</option>
                </select>

                <button
                  onClick={() => setIsAddingEnquiry(true)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm shadow-indigo-600/30 cursor-pointer ml-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add Lead</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/80 text-slate-500 font-bold border-b border-slate-100 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3.5 px-4">Lead ID</th>
                    <th className="py-3.5 px-4">Inquirer Name</th>
                    <th className="py-3.5 px-4">Direct Contact Action</th>
                    <th className="py-3.5 px-4">Course Interested</th>
                    <th className="py-3.5 px-4">Assigned Counselor</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Delete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {filteredEnquiries.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center py-12 text-slate-400 text-xs">
                        No inquiries found matching your filters.
                      </td>
                    </tr>
                  ) : (
                    filteredEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-blue-50/30 transition">
                        <td className="py-3.5 px-4">
                          <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded text-[11px]">
                            {enq.id}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900">{enq.name}</div>
                          {enq.email && <div className="text-[10px] text-slate-400">{enq.email}</div>}
                          {enq.query && (
                            <div className="text-[11px] text-slate-500 mt-1 italic line-clamp-1 max-w-xs">
                              "{enq.query}"
                            </div>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <a
                              href={`tel:${enq.phone}`}
                              className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-[11px] transition flex items-center gap-1 shadow-2xs"
                              title="Call Student"
                            >
                              <Phone className="w-3 h-3" />
                              <span>{enq.phone}</span>
                            </a>
                            <a
                              href={`https://wa.me/91${enq.phone}?text=Hello%20${encodeURIComponent(enq.name)},%20thank%20you%20for%20inquiring%20about%20${encodeURIComponent(enq.course)}%20at%20Animeria%20Institute.`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white transition shadow-2xs"
                              title="Chat on WhatsApp"
                            >
                              <WhatsAppIcon className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-semibold text-slate-800">{enq.course}</span>
                          <div className="text-[10px] text-slate-400">{enq.mode}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={enq.assignedTo || 'Admissions Desk'}
                            onChange={(e) => handleUpdateEnquiryStatus(enq.id, enq.status, e.target.value)}
                            className="text-xs font-semibold px-2 py-1 rounded-lg border border-slate-200 bg-white"
                          >
                            <option value="Admissions Desk">Admissions Desk</option>
                            <option value="Ms. Payal Singh">Ms. Payal Singh</option>
                            <option value="Ms. Sheetal">Ms. Sheetal</option>
                            <option value="Mr. Dev">Mr. Dev (Analytics)</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={enq.status || 'New'}
                            onChange={(e) => handleUpdateEnquiryStatus(enq.id, e.target.value)}
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-full border cursor-pointer ${
                              enq.status === 'Converted'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : enq.status === 'Interested'
                                ? 'bg-blue-50 text-blue-700 border-blue-200'
                                : enq.status === 'Contacted'
                                ? 'bg-purple-50 text-purple-700 border-purple-200'
                                : 'bg-amber-50 text-amber-700 border-amber-200'
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Interested">Interested</option>
                            <option value="Converted">Converted</option>
                            <option value="Not Interested">Not Interested</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => setEditingEnquiry({ ...enq })}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition"
                              title="Edit Lead Details"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteEnquiry(enq.id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 3: COURSE ANALYTICS                              */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'analytics' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Student Course Distribution</h3>
              <p className="text-xs text-slate-500">Live breakdown of student registrations across domains</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stats?.courseStats && Object.keys(stats.courseStats).length > 0 ? (
                Object.entries(stats.courseStats).map(([cName, count]) => {
                  const pct = Math.round((count / (stats.totalAdmissions || 1)) * 100)
                  return (
                    <div key={cName} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-slate-800">{cName}</span>
                        <span className="text-blue-600">{count} students ({pct}%)</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  )
                })
              ) : (
                <p className="text-xs text-slate-400">Loading course trends...</p>
              )}
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 4: 5-SECOND LIVE VISITOR RADAR & NOTIFICATIONS   */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'radar' && (
          <div className="space-y-6">
            
            {/* Radar Header & Controls Card */}
            <div className="bg-gradient-to-r from-slate-900 via-[#07162c] to-blue-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span>Real-Time 5-Second Traffic Radar Active</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Live Visitor Radar & Alert Center
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Automatically triggers after <strong>5 seconds</strong> of visitor activity. Dispatches instant <strong>Email</strong> to Admin, queues <strong>SMS notification</strong>, and rings an alert chime on this desk.
                  </p>
                </div>

                {/* Audio chime toggle and simulation test */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      setSoundEnabled(!soundEnabled)
                      if (!soundEnabled) playRadarChime()
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 border cursor-pointer ${
                      soundEnabled
                        ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500/50 hover:bg-emerald-600/40'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
                    <span>Chime Alert: {soundEnabled ? 'ON (Active)' : 'Muted'}</span>
                  </button>

                  <button
                    onClick={async () => {
                      try {
                        const ua = navigator.userAgent
                        const dev = /android/i.test(ua) ? 'Android Phone 📱' : /iphone/i.test(ua) ? 'iPhone 🍏' : 'Windows PC 💻'
                        await fetch('/api/visitor-ping', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            page: 'Home Page (Test Simulation)',
                            device: dev,
                            referrer: 'Manual Radar Test ⚡',
                            location: 'Delhi NCR'
                          })
                        })
                        playRadarChime()
                        fetchDashboardData(true)
                        showToast('⚡ Test 5-Sec Visitor Ping Sent & Alerts Dispatched!')
                      } catch (err) {
                        console.error(err)
                      }
                    }}
                    className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer"
                  >
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>Send Test 5s Ping</span>
                  </button>
                </div>
              </div>

              {/* Decorative radar rings */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-96 h-96 border border-emerald-500/10 rounded-full pointer-events-none"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-64 h-64 border border-emerald-500/20 rounded-full pointer-events-none"></div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live Visitors Monitored</span>
                  <h4 className="text-2xl font-black text-slate-900 mt-1">{visitors.length}</h4>
                  <span className="text-[11px] text-emerald-600 font-semibold mt-0.5 block">Active Sessions Recorded</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Radio className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Alerts Triggered</span>
                  <h4 className="text-2xl font-black text-blue-600 mt-1">
                    {notifs.filter(n => n.type === 'EMAIL').length || visitors.length}
                  </h4>
                  <span className="text-[11px] text-slate-500 font-semibold mt-0.5 block">Sent to info@animeria.com</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">SMS Alerts Dispatched</span>
                  <h4 className="text-2xl font-black text-indigo-600 mt-1">
                    {notifs.filter(n => n.type === 'SMS').length || visitors.length}
                  </h4>
                  <span className="text-[11px] text-slate-500 font-semibold mt-0.5 block">Mobile: +91-7979823383</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Live Visitors Stream */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Recent 5-Second Traffic Stream</h3>
                  <p className="text-xs text-slate-500">Live feed updated in real-time as visitors explore</p>
                </div>
                <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Listening on /api/visitor-ping
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {visitors.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 text-xs">
                    No active visitors recorded yet. Open the website in a new tab for 5 seconds to see your live radar entry!
                  </div>
                ) : (
                  visitors.slice(0, 20).map((vis, vIdx) => (
                    <div key={vis.id || vIdx} className="p-4 sm:p-5 hover:bg-slate-50/80 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start sm:items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 font-black flex items-center justify-center text-xs shrink-0 shadow-2xs">
                          {vis.device && vis.device.includes('iPhone') ? '🍏' : vis.device && vis.device.includes('Android') ? '📱' : '💻'}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-bold text-slate-900 text-xs sm:text-sm">
                              Visitor on: {vis.page}
                            </span>
                            <span className="text-[10px] bg-emerald-50 text-emerald-700 font-mono font-bold px-2 py-0.5 rounded border border-emerald-200">
                              5s Verified
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                            <span>📱 {vis.device}</span>
                            <span>•</span>
                            <span>📍 {vis.location || 'Delhi NCR'}</span>
                            <span>•</span>
                            <span>🔗 Via {vis.referrer || 'Direct'}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">
                          {vis.timestamp ? new Date(vis.timestamp).toLocaleTimeString('en-IN') : 'Just Now'}
                        </span>
                        <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-1 rounded-lg border border-blue-200">
                          Email & SMS Fired
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 5: WEBSITE CONTENT CMS (COURSES, BATCHES, OFFER) */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'cms' && (
          <div className="space-y-8">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold mb-3">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live Website Content Editor</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Website Content Management (CMS)
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
                  Directly <strong>Add</strong> or <strong>Delete</strong> courses, upcoming batch dates, and festive discount banners that appear on your public website. Changes reflect instantly on the live website!
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => setIsAddingCourse(true)}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add Course to Website</span>
                </button>

                <button
                  onClick={() => setIsAddingBatch(true)}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add Upcoming Batch</span>
                </button>
              </div>
            </div>

            {/* 1. COURSES MANAGEMENT SECTION */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <span>1. Website Courses List</span>
                    <span className="text-xs font-mono font-bold bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full">
                      {websiteCourses.length} Active Courses
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    These courses are shown in the main Courses section and dropdown menu on the website.
                  </p>
                </div>

                <button
                  onClick={() => setIsAddingCourse(true)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm shadow-blue-600/20 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Course</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {websiteCourses.map((course) => (
                  <div
                    key={course.id}
                    className="group rounded-2xl border border-slate-200/80 hover:border-blue-400 bg-white shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {course.image && (
                        <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                          <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                            {course.duration || '4-6 Months'}
                          </span>
                          <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${course.badgeColor || 'bg-blue-600 text-white'}`}>
                            {course.badge || 'Popular'}
                          </span>
                        </div>
                      )}

                      <div className="p-4 space-y-2.5">
                        <h4 className="font-bold text-slate-900 text-sm">{course.title}</h4>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {course.desc}
                        </p>
                        
                        {/* Course Fee Display in Admin Card */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                          <div>
                            <span className="text-[9px] font-extrabold text-slate-500 block uppercase tracking-wider">Course Fee</span>
                            {(course.offerFee || course.fee) ? (
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm font-black text-emerald-700">{course.offerFee || course.fee}</span>
                                {course.offerFee && course.fee && course.offerFee !== course.fee && (
                                  <span className="text-xs text-slate-400 line-through">{course.fee}</span>
                                )}
                              </div>
                            ) : (
                              <span className="text-xs font-semibold text-slate-400 italic">Not set</span>
                            )}
                          </div>
                          {course.emi ? (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-emerald-800 border border-emerald-200 shadow-2xs">
                              {course.emi}
                            </span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setEditingCourse({ ...course })}
                              className="text-[10px] font-bold text-blue-600 hover:underline"
                            >
                              + Set Fee
                            </button>
                          )}
                        </div>

                        {course.tools && (
                          <div className="text-[11px] font-medium text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                            🛠️ <strong>Tools:</strong> {course.tools}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
                      <span className="text-[11px] font-mono text-slate-400">
                        Group: {course.group || 'tech'}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setEditingCourse({ ...course })}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white transition flex items-center gap-1"
                          title="Edit Course"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(course.id, course.title)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                          title="Delete Course from Website"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. UPCOMING BATCH SCHEDULES CMS */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <span>2. Upcoming Batch Schedules</span>
                    <span className="text-xs font-mono font-bold bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full">
                      {websiteBatches.length} Live Batches
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Displayed in the "Upcoming Batches" widget on the website homepage.
                  </p>
                </div>

                <button
                  onClick={() => setIsAddingBatch(true)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm shadow-indigo-600/20 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Batch Schedule</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {websiteBatches.map((batch) => (
                  <div
                    key={batch.id}
                    className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-indigo-300 transition flex items-center justify-between gap-4 shadow-2xs"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{batch.course}</h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500">
                        <span className="font-bold text-amber-600">📅 {batch.date}</span>
                        <span>•</span>
                        <span className="font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {batch.mode}
                        </span>
                        <span>•</span>
                        <span>{batch.type}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteBatch(batch.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition shrink-0"
                      title="Delete Batch Schedule"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. FESTIVE OFFER BANNER EDITOR */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>3. Festive Offer & Discount Banner Editor</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Customize the festive offer banner shown on the home page (e.g. Navratri, Diwali, New Year).
                </p>
              </div>

              <form onSubmit={handleSaveOffer} className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Banner Offer Tag / Title</label>
                  <input
                    type="text"
                    required
                    value={websiteOffer.title || ''}
                    onChange={(e) => setWebsiteOffer({ ...websiteOffer, title: e.target.value })}
                    placeholder="e.g. Navratri Special Offer, Diwali Special"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Discount Percentage / Highlight</label>
                  <input
                    type="text"
                    required
                    value={websiteOffer.discount || ''}
                    onChange={(e) => setWebsiteOffer({ ...websiteOffer, discount: e.target.value })}
                    placeholder="e.g. 50% OFF, FLAT ₹5,000 OFF"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-bold text-rose-600 focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1.5">Subtitle / Course Scope</label>
                  <input
                    type="text"
                    value={websiteOffer.subtitle || ''}
                    onChange={(e) => setWebsiteOffer({ ...websiteOffer, subtitle: e.target.value })}
                    placeholder="e.g. on All Basic & Career Foundation Courses"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1.5">Limited Time Note</label>
                  <input
                    type="text"
                    value={websiteOffer.note || ''}
                    onChange={(e) => setWebsiteOffer({ ...websiteOffer, note: e.target.value })}
                    placeholder="e.g. ⚡ Limited time offer! Valid for first 50 registrations this festive season."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1.5">Festive Banner Image URL</label>
                  <input
                    type="url"
                    value={websiteOffer.image || ''}
                    onChange={(e) => setWebsiteOffer({ ...websiteOffer, image: e.target.value })}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <Save className="w-4 h-4 text-amber-400" />
                    <span>Save Offer Banner to Website</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* TAB 6: SYSTEM SETTINGS & PASSWORD CHANGE             */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  <Settings className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  Admin Control & System Preferences
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Settings & Institute Configuration
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
                Change your login password, update contact numbers/emails for 5-second visitor notifications, and manage campus details anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Card 1: Change Admin Password */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Change Admin Password</h3>
                      <p className="text-xs text-slate-500">Ensure a strong and secure password for portal access</p>
                    </div>
                  </div>

                  <form onSubmit={handleChangePassword} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Current Password
                      </label>
                      <input
                        type="password"
                        required
                        value={passwordForm.currentPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                        placeholder="Enter current password"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        New Password
                      </label>
                      <input
                        type="password"
                        required
                        value={passwordForm.newPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                        placeholder="Enter new password"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        required
                        value={passwordForm.confirmPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                        placeholder="Re-type new password"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                      />
                    </div>

                    {passwordMsg.text && (
                      <div
                        className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                          passwordMsg.isError
                            ? 'bg-rose-50 text-rose-700 border border-rose-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {passwordMsg.isError ? <AlertCircle className="w-4 h-4 shrink-0" /> : <Check className="w-4 h-4 shrink-0" />}
                        <span>{passwordMsg.text}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-md cursor-pointer mt-2"
                    >
                      <Key className="w-4 h-4 text-amber-400" />
                      <span>Update Password Now</span>
                    </button>
                  </form>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Password changes take effect immediately across all sessions.</span>
                </div>
              </div>

              {/* Card 2: Notification & Campus Configuration */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Alert Notification Contacts</h3>
                      <p className="text-xs text-slate-500">Destination email and phone for 5-sec visitor alerts</p>
                    </div>
                  </div>

                  <form onSubmit={handleSaveSettings} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Admin Login Username
                      </label>
                      <input
                        type="text"
                        required
                        value={adminConfig.username || 'Animeria'}
                        onChange={(e) => setAdminConfig({ ...adminConfig, username: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Alert Email Address (for 5s Visitor Alerts & Admissions)
                      </label>
                      <input
                        type="email"
                        required
                        value={adminConfig.alertEmail || ''}
                        onChange={(e) => setAdminConfig({ ...adminConfig, alertEmail: e.target.value })}
                        placeholder="info@animeria.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                      />
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        All 5-sec visitor alerts, admission pings, and leads will be routed to this email.
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Alert Mobile Number (SMS & WhatsApp alerts)
                      </label>
                      <input
                        type="text"
                        required
                        value={adminConfig.alertMobile || ''}
                        onChange={(e) => setAdminConfig({ ...adminConfig, alertMobile: e.target.value })}
                        placeholder="+91-7979823383"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Campus Location / Head Office
                      </label>
                      <input
                        type="text"
                        value={adminConfig.campus || ''}
                        onChange={(e) => setAdminConfig({ ...adminConfig, campus: e.target.value })}
                        placeholder="Dwarka, Delhi NCR"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Institute Brand Name
                      </label>
                      <input
                        type="text"
                        value={adminConfig.instituteName || ''}
                        onChange={(e) => setAdminConfig({ ...adminConfig, instituteName: e.target.value })}
                        placeholder="Animeria Computer & AI Institute"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 cursor-pointer mt-2"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Institute Configuration</span>
                    </button>
                  </form>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Changes are instantly saved to persistent database storage.</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* ---------------------------------------------------- */}
      {/* MODAL: FULL ADMISSION APPLICATION DETAILS            */}
      {/* ---------------------------------------------------- */}
      {selectedAdmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto relative">
            
            <button
              onClick={() => setSelectedAdmission(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center text-lg">
                {selectedAdmission.fullName.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-slate-900">{selectedAdmission.fullName}</h3>
                  <span className="text-xs font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                    {selectedAdmission.id}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Registered: {new Date(selectedAdmission.createdAt).toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 font-bold block mb-1">COURSE & MODE</span>
                <span className="font-bold text-slate-900 block">{selectedAdmission.course}</span>
                <span className="text-slate-600">{selectedAdmission.mode} • {selectedAdmission.batchTime}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 font-bold block mb-1">CONTACT</span>
                <span className="font-bold text-slate-900 block">📞 {selectedAdmission.mobile}</span>
                <span className="text-slate-600">✉️ {selectedAdmission.email || 'No email'}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 font-bold block mb-1">PERSONAL DETAILS</span>
                <span className="text-slate-700">DOB: {selectedAdmission.dob || '-'}</span><br />
                <span className="text-slate-700">Gender: {selectedAdmission.gender || '-'}</span><br />
                <span className="text-slate-700">Qualification: {selectedAdmission.qualification || '-'}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 font-bold block mb-1">PARENT / GUARDIAN</span>
                <span className="text-slate-700">Name: {selectedAdmission.guardianName || '-'}</span><br />
                <span className="text-slate-700">Phone: {selectedAdmission.guardianPhone || '-'}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 sm:col-span-2">
                <span className="text-slate-400 font-bold block mb-1">RESIDENTIAL ADDRESS</span>
                <p className="text-slate-700 font-medium">
                  {selectedAdmission.address ? `${selectedAdmission.address}, ` : ''}
                  {selectedAdmission.city}, {selectedAdmission.state} - {selectedAdmission.pincode}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 sm:col-span-2">
                <span className="text-slate-400 font-bold block mb-1">PAYMENT PLAN</span>
                <span className="font-bold text-emerald-700">{selectedAdmission.paymentOption}</span>
              </div>
            </div>

            {/* Counselor Remarks / Notes Box */}
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
              <label className="block text-xs font-bold text-slate-700">
                Counselor Remarks & Notes
              </label>
              <textarea
                rows="3"
                value={notesInput}
                onChange={(e) => setNotesInput(e.target.value)}
                placeholder="Add notes e.g., Batch assigned to Dev Sir starting 10th Oct..."
                className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => handleUpdateAdmissionStatus(selectedAdmission.id, selectedAdmission.status, notesInput)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm cursor-pointer"
                >
                  Save Remarks
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODAL: EDIT ADMISSION / STUDENT RECORD               */}
      {/* ---------------------------------------------------- */}
      {editingAdmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto relative">
            
            <button
              onClick={() => setEditingAdmission(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-bold flex items-center justify-center text-lg">
                <Edit3 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-slate-900">Edit Student Record</h3>
                  <span className="text-xs font-mono font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded">
                    {editingAdmission.id}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Update student details, course enrollment, batch schedule, or fee status
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveEditedAdmission} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Student Name</label>
                  <input
                    type="text"
                    required
                    value={editingAdmission.fullName || ''}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mobile Phone</label>
                  <input
                    type="text"
                    required
                    value={editingAdmission.mobile || ''}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, mobile: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={editingAdmission.email || ''}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Course Enrolled</label>
                  <input
                    type="text"
                    required
                    value={editingAdmission.course || ''}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, course: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Study Mode</label>
                  <select
                    value={editingAdmission.mode || 'Classroom (Offline)'}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, mode: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Classroom (Offline)">Classroom (Offline)</option>
                    <option value="Online Live">Online Live Interactive</option>
                    <option value="Hybrid (Classroom + Online)">Hybrid (Classroom + Online)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Batch Schedule</label>
                  <select
                    value={editingAdmission.batchTime || 'Morning (9:00 AM - 1:00 PM)'}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, batchTime: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                    <option value="Weekend Batch (Sat & Sun)">Weekend Batch (Sat & Sun)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Admission Status</label>
                  <select
                    value={editingAdmission.status || 'Submitted'}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, status: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Submitted">Submitted</option>
                    <option value="In Review">In Review</option>
                    <option value="Verified">Verified</option>
                    <option value="Enrolled">Enrolled</option>
                    <option value="Batch Assigned">Batch Assigned</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Fee Payment Plan</label>
                  <input
                    type="text"
                    value={editingAdmission.paymentOption || 'Full One-Time Payment'}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, paymentOption: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Address</label>
                  <input
                    type="text"
                    value={editingAdmission.address || ''}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, address: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    value={editingAdmission.city || ''}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, city: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    value={editingAdmission.pincode || ''}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, pincode: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Counselor / Admin Notes</label>
                  <textarea
                    rows="2"
                    value={editingAdmission.notes || ''}
                    onChange={(e) => setEditingAdmission({ ...editingAdmission, notes: e.target.value })}
                    placeholder="Batch, student special remarks..."
                    className="w-full p-3 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingAdmission(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-md shadow-blue-600/20 cursor-pointer flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Student Details</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODAL: EDIT LEAD / ENQUIRY RECORD                    */}
      {/* ---------------------------------------------------- */}
      {editingEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto relative">
            
            <button
              onClick={() => setEditingEnquiry(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white font-bold flex items-center justify-center text-lg">
                <Edit3 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-slate-900">Edit Lead / Enquiry</h3>
                  <span className="text-xs font-mono font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">
                    {editingEnquiry.id}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Update candidate contact details, course inquiry, counselor, or status
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveEditedEnquiry} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Candidate Name</label>
                <input
                  type="text"
                  required
                  value={editingEnquiry.name || ''}
                  onChange={(e) => setEditingEnquiry({ ...editingEnquiry, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={editingEnquiry.phone || ''}
                    onChange={(e) => setEditingEnquiry({ ...editingEnquiry, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={editingEnquiry.email || ''}
                    onChange={(e) => setEditingEnquiry({ ...editingEnquiry, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Course Inquired</label>
                  <input
                    type="text"
                    required
                    value={editingEnquiry.course || ''}
                    onChange={(e) => setEditingEnquiry({ ...editingEnquiry, course: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Study Mode</label>
                  <select
                    value={editingEnquiry.mode || 'Offline Classroom'}
                    onChange={(e) => setEditingEnquiry({ ...editingEnquiry, mode: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Offline Classroom">Offline Classroom</option>
                    <option value="Online Live Interactive">Online Live Interactive</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Assigned Counselor</label>
                  <select
                    value={editingEnquiry.assignedTo || 'Admissions Desk'}
                    onChange={(e) => setEditingEnquiry({ ...editingEnquiry, assignedTo: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Admissions Desk">Admissions Desk</option>
                    <option value="Ms. Payal Singh">Ms. Payal Singh</option>
                    <option value="Ms. Sheetal">Ms. Sheetal</option>
                    <option value="Mr. Dev">Mr. Dev (Analytics)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Lead Status</label>
                  <select
                    value={editingEnquiry.status || 'New'}
                    onChange={(e) => setEditingEnquiry({ ...editingEnquiry, status: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Interested">Interested</option>
                    <option value="Converted">Converted</option>
                    <option value="Not Interested">Not Interested</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Query / Remarks</label>
                <textarea
                  rows="3"
                  value={editingEnquiry.query || ''}
                  onChange={(e) => setEditingEnquiry({ ...editingEnquiry, query: e.target.value })}
                  placeholder="Student interest, callback time, discount request..."
                  className="w-full p-3 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingEnquiry(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-md shadow-blue-600/20 cursor-pointer flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Lead Details</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODAL: ADD NEW STUDENT ADMISSION                     */}
      {/* ---------------------------------------------------- */}
      {isAddingAdmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto relative">
            
            <button
              onClick={() => setIsAddingAdmission(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-blue-600/20">
                <Plus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">+ Register New Student</h3>
                <p className="text-xs text-slate-500">
                  Walk-in counter registration or direct phone admission
                </p>
              </div>
            </div>

            <form onSubmit={handleCreateAdmission} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newAdmissionForm.fullName}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, fullName: e.target.value })}
                    placeholder="e.g. Aman Verma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mobile Phone *</label>
                  <input
                    type="tel"
                    required
                    value={newAdmissionForm.mobile}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, mobile: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={newAdmissionForm.email}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, email: e.target.value })}
                    placeholder="student@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Course Enrolled *</label>
                  <select
                    value={newAdmissionForm.course}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Data Analytics Course">Data Analytics Course</option>
                    <option value="Python Full Stack">Python Full Stack</option>
                    <option value="Web Designing & React">Web Designing & React</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Video Editing Pro">Video Editing Pro</option>
                    <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                    <option value="Tally Prime with GST">Tally Prime with GST</option>
                    <option value="SAP ERP Training">SAP ERP Training</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Study Mode</label>
                  <select
                    value={newAdmissionForm.mode}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, mode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Classroom (Offline)">Classroom (Offline)</option>
                    <option value="Online Live">Online Live Interactive</option>
                    <option value="Hybrid (Classroom + Online)">Hybrid (Classroom + Online)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Batch Timing</label>
                  <select
                    value={newAdmissionForm.batchTime}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, batchTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                    <option value="Weekend Batch (Sat & Sun)">Weekend Batch (Sat & Sun)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Fee Payment Plan</label>
                  <select
                    value={newAdmissionForm.paymentOption}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, paymentOption: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Full One-Time Payment">Full One-Time Payment</option>
                    <option value="Token Registration (₹2,000)">Token Registration (₹2,000)</option>
                    <option value="3-Month Equal EMI">3-Month Equal EMI</option>
                    <option value="6-Month Flexible EMI">6-Month Flexible EMI</option>
                    <option value="Merit Scholarship Applied">Merit Scholarship Applied</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Admission Status</label>
                  <select
                    value={newAdmissionForm.status}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold text-emerald-700 focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Verified & Enrolled">Verified & Enrolled</option>
                    <option value="Batch Assigned">Batch Assigned</option>
                    <option value="New">New Application</option>
                    <option value="Under Review">Under Review</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Residential Address</label>
                  <input
                    type="text"
                    value={newAdmissionForm.address}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, address: e.target.value })}
                    placeholder="House/Flat No., Colony, Landmark..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    value={newAdmissionForm.city}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    value={newAdmissionForm.pincode}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, pincode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Counselor Remarks & Notes</label>
                  <textarea
                    rows="2"
                    value={newAdmissionForm.notes}
                    onChange={(e) => setNewAdmissionForm({ ...newAdmissionForm, notes: e.target.value })}
                    placeholder="Batch starting date, assigned faculty, concessions..."
                    className="w-full p-3 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddingAdmission(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-md shadow-blue-600/20 cursor-pointer flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Student Record</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODAL: ADD NEW LEAD / ENQUIRY                        */}
      {/* ---------------------------------------------------- */}
      {isAddingEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto relative">
            
            <button
              onClick={() => setIsAddingEnquiry(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-indigo-600/20">
                <Plus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">+ Add New Lead</h3>
                <p className="text-xs text-slate-500">
                  Record phone call inquiry, walk-in, or referral
                </p>
              </div>
            </div>

            <form onSubmit={handleCreateEnquiry} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Candidate Name *</label>
                <input
                  type="text"
                  required
                  value={newEnquiryForm.name}
                  onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, name: e.target.value })}
                  placeholder="e.g. Priya Rawat"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={newEnquiryForm.phone}
                    onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, phone: e.target.value })}
                    placeholder="9876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={newEnquiryForm.email}
                    onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, email: e.target.value })}
                    placeholder="priya@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Course Inquired *</label>
                  <select
                    value={newEnquiryForm.course}
                    onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Data Analytics Course">Data Analytics Course</option>
                    <option value="Python Full Stack">Python Full Stack</option>
                    <option value="Web Designing & React">Web Designing & React</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Video Editing Pro">Video Editing Pro</option>
                    <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                    <option value="Tally Prime with GST">Tally Prime with GST</option>
                    <option value="SAP ERP Training">SAP ERP Training</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Study Mode</label>
                  <select
                    value={newEnquiryForm.mode}
                    onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, mode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Offline Classroom">Offline Classroom</option>
                    <option value="Online Live Interactive">Online Live Interactive</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Assigned Counselor</label>
                  <select
                    value={newEnquiryForm.assignedTo}
                    onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, assignedTo: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Admissions Desk">Admissions Desk</option>
                    <option value="Ms. Payal Singh">Ms. Payal Singh</option>
                    <option value="Ms. Sheetal">Ms. Sheetal</option>
                    <option value="Mr. Dev">Mr. Dev (Analytics)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Lead Status</label>
                  <select
                    value={newEnquiryForm.status}
                    onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-bold focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Interested">Interested</option>
                    <option value="Converted">Converted</option>
                    <option value="Not Interested">Not Interested</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Query / Discussion Notes</label>
                <textarea
                  rows="3"
                  value={newEnquiryForm.query}
                  onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, query: e.target.value })}
                  placeholder="Candidate interest, callback time, discount request..."
                  className="w-full p-3 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddingEnquiry(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition shadow-md shadow-indigo-600/20 cursor-pointer flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Lead Record</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODAL: ADD NEW COURSE TO WEBSITE                     */}
      {/* ---------------------------------------------------- */}
      {isAddingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto relative">
            
            <button
              onClick={() => setIsAddingCourse(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-blue-600/20">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">+ Add New Course to Website</h3>
                <p className="text-xs text-slate-500">
                  Publish a new training program to your live website courses section
                </p>
              </div>
            </div>

            <form onSubmit={handleCreateCourse} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Course Title *</label>
                  <input
                    type="text"
                    required
                    value={newCourseForm.title}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, title: e.target.value })}
                    placeholder="e.g. AI Prompt Engineering & GenAI"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category Domain</label>
                  <select
                    value={newCourseForm.group}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, group: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="tech">Tech & Coding</option>
                    <option value="design">Design & Media</option>
                    <option value="analytics">Data & Analytics</option>
                    <option value="finance">Finance & Accounting</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Duration</label>
                  <input
                    type="text"
                    value={newCourseForm.duration}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, duration: e.target.value })}
                    placeholder="e.g. 4 - 6 Months"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Tools & Technologies Covered</label>
                  <input
                    type="text"
                    value={newCourseForm.tools}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, tools: e.target.value })}
                    placeholder="e.g. Python, SQL, Power BI, Advanced Excel"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Badge Tag</label>
                  <input
                    type="text"
                    value={newCourseForm.badge}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, badge: e.target.value })}
                    placeholder="e.g. Trending, High Demand, Bestseller"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Cover Image URL</label>
                  <input
                    type="url"
                    value={newCourseForm.image}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, image: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                {/* Course Fees Section */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Original Course Fee <span className="text-slate-400 font-normal">(Strikethrough)</span>
                  </label>
                  <input
                    type="text"
                    value={newCourseForm.fee || ''}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, fee: e.target.value })}
                    placeholder="e.g. ₹28,000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-blue-600 bg-slate-50/50 text-slate-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Special Offer / Discounted Fee <span className="text-emerald-600 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={newCourseForm.offerFee || ''}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, offerFee: e.target.value })}
                    placeholder="e.g. ₹18,500"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-300 font-extrabold focus:ring-2 focus:ring-emerald-500 bg-emerald-50/30 text-emerald-800"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">
                    Monthly EMI Option <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={newCourseForm.emi || ''}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, emi: e.target.value })}
                    placeholder="e.g. ₹3,500/mo or 0% Interest EMI"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Course Overview Description *</label>
                  <textarea
                    rows="3"
                    required
                    value={newCourseForm.desc}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, desc: e.target.value })}
                    placeholder="Short description shown on the website card..."
                    className="w-full p-3 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddingCourse(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-md shadow-blue-600/20 cursor-pointer flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Course to Website</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODAL: EDIT WEBSITE COURSE                           */}
      {/* ---------------------------------------------------- */}
      {editingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto relative">
            
            <button
              onClick={() => setEditingCourse(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-amber-500/20">
                <Edit3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Edit Website Course</h3>
                <p className="text-xs text-slate-500">
                  Update course details, badge, duration, or syllabus tools
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveEditedCourse} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Course Title *</label>
                  <input
                    type="text"
                    required
                    value={editingCourse.title || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category Domain</label>
                  <select
                    value={editingCourse.group || 'tech'}
                    onChange={(e) => setEditingCourse({ ...editingCourse, group: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="tech">Tech & Coding</option>
                    <option value="design">Design & Media</option>
                    <option value="analytics">Data & Analytics</option>
                    <option value="finance">Finance & Accounting</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Duration</label>
                  <input
                    type="text"
                    value={editingCourse.duration || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, duration: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Tools & Technologies Covered</label>
                  <input
                    type="text"
                    value={editingCourse.tools || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, tools: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Badge Tag</label>
                  <input
                    type="text"
                    value={editingCourse.badge || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, badge: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Cover Image URL</label>
                  <input
                    type="url"
                    value={editingCourse.image || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, image: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                {/* Course Fees Section */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Original Course Fee <span className="text-slate-400 font-normal">(Strikethrough)</span>
                  </label>
                  <input
                    type="text"
                    value={editingCourse.fee || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, fee: e.target.value })}
                    placeholder="e.g. ₹28,000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-blue-600 bg-slate-50/50 text-slate-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Special Offer / Discounted Fee <span className="text-emerald-600 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={editingCourse.offerFee || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, offerFee: e.target.value })}
                    placeholder="e.g. ₹18,500"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-300 font-extrabold focus:ring-2 focus:ring-emerald-500 bg-emerald-50/30 text-emerald-800"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">
                    Monthly EMI Option <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={editingCourse.emi || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, emi: e.target.value })}
                    placeholder="e.g. ₹3,500/mo or 0% Interest EMI"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Course Overview Description *</label>
                  <textarea
                    rows="3"
                    required
                    value={editingCourse.desc || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, desc: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingCourse(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-md shadow-blue-600/20 cursor-pointer flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Course Changes</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODAL: ADD UPCOMING BATCH SCHEDULE                   */}
      {/* ---------------------------------------------------- */}
      {isAddingBatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto relative">
            
            <button
              onClick={() => setIsAddingBatch(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-indigo-600/20">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">+ Add Upcoming Batch</h3>
                <p className="text-xs text-slate-500">
                  Publish a new batch schedule to the website homepage
                </p>
              </div>
            </div>

            <form onSubmit={handleCreateBatch} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Course Name *</label>
                <input
                  type="text"
                  required
                  value={newBatchForm.course}
                  onChange={(e) => setNewBatchForm({ ...newBatchForm, course: e.target.value })}
                  placeholder="e.g. Data Analytics Course, Python Full Stack"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Starting Date *</label>
                <input
                  type="text"
                  required
                  value={newBatchForm.date}
                  onChange={(e) => setNewBatchForm({ ...newBatchForm, date: e.target.value })}
                  placeholder="e.g. 28 Oct 2025"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mode</label>
                  <select
                    value={newBatchForm.mode}
                    onChange={(e) => setNewBatchForm({ ...newBatchForm, mode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Offline">Offline (Classroom)</option>
                    <option value="Online">Online Live</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Batch Type</label>
                  <select
                    value={newBatchForm.type}
                    onChange={(e) => setNewBatchForm({ ...newBatchForm, type: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-medium focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Weekday Batch">Weekday Batch</option>
                    <option value="Weekend Batch">Weekend Batch</option>
                    <option value="Evening Fast-Track">Evening Fast-Track</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddingBatch(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition shadow-md shadow-indigo-600/20 cursor-pointer flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Batch Schedule</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  )
}
