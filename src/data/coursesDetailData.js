export const allCoursesData = {
  'Data Analytics': {
    id: 'data',
    title: 'Data Analytics Master Course',
    subtitle: 'Turn Raw Data into Actionable Business Intelligence',
    badge: 'Bestseller',
    badgeColor: 'bg-blue-600 text-white',
    duration: '4 - 6 Months',
    mode: 'Online / Offline',
    level: 'Beginner to Advanced',
    cert: 'Industry Validated Certificate',
    accentColor: 'from-blue-600 via-indigo-600 to-purple-600',
    themeColor: 'blue',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=70',
    desc: 'Our Data Analytics course is designed to help you gain practical, job-ready skills to analyse data, find insights and make data-driven decisions. You will learn industry-relevant tools like Advanced Excel, SQL, Power BI, Python and real-world data analysis techniques.',
    tools: ['Advanced Excel', 'SQL', 'Power BI', 'Python', 'Pandas', 'Tableau Basics'],
    quote: 'Data is everywhere. Learn to make sense of it and build a future-ready career.',
    modules: [
      {
        title: 'Module 1: Introduction to Data Analytics & Business KPIs',
        topics: ['Data Types, Collection & Cleaning Principles', 'Understanding Business Metrics & Revenue KPIs', 'Analytical Thinking & Problem Formulation']
      },
      {
        title: 'Module 2: Advanced Excel for Data Analysis',
        topics: ['Formulas, VLOOKUP, XLOOKUP, INDEX-MATCH', 'Pivot Tables, Slicers & Dynamic Dashboards', 'What-If Analysis, Goal Seek & Macros Basics']
      },
      {
        title: 'Module 3: SQL for Querying & Database Management',
        topics: ['SELECT, WHERE, GROUP BY, ORDER BY, HAVING', 'Joins (INNER, LEFT, RIGHT, FULL OUTER)', 'Window Functions, Subqueries, CTEs & Aggregations']
      },
      {
        title: 'Module 4: Power BI & Business Intelligence',
        topics: ['Power Query for Data Ingestion & Transformation', 'Data Modeling, Star Schemas & Relationships', 'DAX Formulas (CALCULATE, SUMX, RELATED, Time Intelligence)', 'Interactive Dashboards & Publishing']
      },
      {
        title: 'Module 5: Python for Data Analysis',
        topics: ['Python Basics, NumPy & Pandas', 'Data Cleansing & Exploratory Data Analysis (EDA)', 'Matplotlib & Seaborn Data Storytelling']
      },
      {
        title: 'Module 6: Capstone Projects & Placement Prep',
        topics: ['E-Commerce Sales Performance Dashboard', 'Customer Churn Prediction & Cohort Analysis', 'Resume Building & Mock Technical Interviews']
      }
    ],
    faqs: [
      { q: 'What is the duration of this course?', a: '4 to 6 months depending on weekday vs weekend batches.' },
      { q: 'Is there any coding prerequisite?', a: 'No prior coding experience is needed. We start from absolute Excel basics.' },
      { q: 'Do you provide placement assistance?', a: 'Yes, 100% placement support with resume reviews, mock interviews, and hiring drives.' }
    ]
  },

  'Python Full Stack': {
    id: 'python',
    title: 'Python Full Stack Web Development',
    subtitle: 'Build Scalable Web Apps from Backend Logic to Modern Frontend UI',
    badge: 'Job Guaranteed',
    badgeColor: 'bg-amber-600 text-white',
    duration: '6 Months',
    mode: 'Online / Offline',
    level: 'Beginner to Advanced',
    cert: 'Full Stack Certified Engineer',
    accentColor: 'from-amber-600 via-orange-600 to-red-600',
    themeColor: 'amber',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=70',
    desc: 'Master the complete Python web ecosystem from server-side programming to database architecture and responsive frontend frameworks. Build real-world web applications and RESTful APIs.',
    tools: ['Python 3', 'Django', 'FastAPI', 'PostgreSQL', 'React.js', 'Git & GitHub'],
    quote: 'Python is the world’s most versatile language. Master it to build robust tech solutions.',
    modules: [
      {
        title: 'Module 1: Python Core & Object-Oriented Programming (OOP)',
        topics: ['Data Structures (Lists, Dicts, Tuples, Sets)', 'Functions, Lambdas, Decorators & Generators', 'OOP Principles (Classes, Inheritance, Polymorphism)']
      },
      {
        title: 'Module 2: Database Management & SQL',
        topics: ['PostgreSQL & SQLite Architecture', 'CRUD Operations, Joins & Indexing', 'ORM (Object Relational Mapping) Integration']
      },
      {
        title: 'Module 3: Django Web Framework & REST APIs',
        topics: ['MVT Architecture, URL Routing & Views', 'Django Models, Migrations & Admin Panel', 'Django REST Framework (DRF) & JWT Authentication']
      },
      {
        title: 'Module 4: Frontend Development with React.js',
        topics: ['HTML5, Modern CSS & Tailwind CSS', 'JavaScript ES6+ Fundamentals', 'React Components, Hooks & API Integration']
      },
      {
        title: 'Module 5: Deployment & Full Stack Capstone',
        topics: ['Docker Basics, Cloud Deployment on AWS/Render', 'Git Version Control & Team Collaboration', 'Live E-commerce or SaaS Web Application Project']
      }
    ],
    faqs: [
      { q: 'What jobs can I apply for after this course?', a: 'Python Developer, Full Stack Engineer, Backend Developer, and API Specialist.' },
      { q: 'Is frontend covered in this course?', a: 'Yes, modern HTML, CSS, JavaScript, and React.js are included for complete full stack mastery.' }
    ]
  },

  'Graphic Designing': {
    id: 'graphic',
    title: 'Graphic Designing & Visual Brand Identity',
    subtitle: 'Create Stunning Visuals, Social Media Creatives, Branding & Commercial Art',
    badge: 'Trending',
    badgeColor: 'bg-pink-600 text-white',
    duration: '4 - 6 Months',
    mode: 'Online / Offline',
    level: 'Beginner to Professional',
    cert: 'Adobe Certified Graphic Designer',
    accentColor: 'from-pink-600 via-rose-600 to-purple-600',
    themeColor: 'pink',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=70',
    desc: 'Unleash your creativity and master industry standard tools like Adobe Photoshop, Illustrator, InDesign and CorelDraw. Learn typography, color psychology, social media poster design and corporate brand identity.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'CorelDraw', 'Canva Pro'],
    quote: 'Design is not just what it looks like and feels like. Design is how it works.',
    modules: [
      {
        title: 'Module 1: Design Principles & Color Psychology',
        topics: ['Visual Hierarchy, Alignment, Contrast & Balance', 'Color Harmonies & Palette Creation', 'Typography Selection & Pairing Rules']
      },
      {
        title: 'Module 2: Adobe Photoshop Mastery',
        topics: ['Photo Retouching, Manipulation & Layer Masks', 'Social Media Creatives, Banners & Thumbnails', 'Product Mockups & Photo Color Grading']
      },
      {
        title: 'Module 3: Adobe Illustrator (Vector Art & Logos)',
        topics: ['Pen Tool Mastery & Vector Illustration', 'Corporate Logo Design & Brand Identity Kits', 'Icons, Mascot & Character Design']
      },
      {
        title: 'Module 4: Adobe InDesign & CorelDraw (Print & Publishing)',
        topics: ['Brochure, Flyer & Magazine Layout Design', 'Packaging & Label Design for FMCG', 'Print Production, CMYK vs RGB & Bleed Margins']
      },
      {
        title: 'Module 5: Behance & Dribbble Portfolio Building',
        topics: ['Creating a 10-Project Professional Portfolio', 'Freelancing Masterclass (Upwork, Fiverr)', 'Interview Presentation Guidance']
      }
    ],
    faqs: [
      { q: 'Do I need drawing skills for graphic design?', a: 'No, drawing is not required. You will learn digital tools and design techniques from scratch.' },
      { q: 'What software will be provided?', a: 'All practical sessions take place on our high-performance lab workstations with licensed Adobe tools.' }
    ]
  },

  'Video Editing': {
    id: 'video',
    title: 'Professional Video Editing & Motion Graphics',
    subtitle: 'Craft Cinematic Reels, YouTube Videos, Commercials & Visual Effects',
    badge: 'High Demand',
    badgeColor: 'bg-rose-600 text-white',
    duration: '4 - 6 Months',
    mode: 'Online / Offline',
    level: 'Beginner to Advanced',
    cert: 'Certified Video Editor & Motion Artist',
    accentColor: 'from-rose-600 via-red-600 to-orange-600',
    themeColor: 'rose',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=70',
    desc: 'Step into the booming content creation industry. Master Adobe Premiere Pro, After Effects, DaVinci Resolve and Adobe Audition to edit high-impact commercial videos, Instagram reels, documentaries and podcasts.',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Adobe Audition', 'CapCut Pro'],
    quote: 'Editing is where the story truly comes alive. Master the rhythm and motion.',
    modules: [
      {
        title: 'Module 1: Video Editing Foundations & Premiere Pro',
        topics: ['Timeline Navigation, Cuts, Transitions & Pacing', 'Text Animation, Captions & Subtitling', 'Multi-Camera Editing & B-Roll Integration']
      },
      {
        title: 'Module 2: Audio Engineering & Sound Design',
        topics: ['Dialogue Cleanup, Background Noise Removal', 'Audio Mixing & Sound Effects (SFX) Sync', 'Equalization & Dynamic Compression in Audition']
      },
      {
        title: 'Module 3: Motion Graphics in Adobe After Effects',
        topics: ['Keyframing, Easing & Graph Editor', 'Lower Thirds, Title Sequences & Logo Reveals', 'Green Screen (Chroma Keying) & VFX Basics']
      },
      {
        title: 'Module 4: Color Grading in DaVinci Resolve',
        topics: ['Color Wheels, Curves & Scopes', 'Shot Matching & Cinematic LUTs Application', 'Skin Tone Correction & Lighting Grading']
      },
      {
        title: 'Module 5: Viral Content & Showreel Creation',
        topics: ['Fast-Paced Reel/Shorts Editing Strategies', 'YouTube Long-Form Storytelling Techniques', 'Building an Industry Showreel for Production Houses']
      }
    ],
    faqs: [
      { q: 'Can I work as a freelancer after this course?', a: 'Yes! Video editing is currently the #1 demanded freelance skill on Upwork, Fiverr, and Instagram.' },
      { q: 'What computer specs are required?', a: 'You can practice on our high-spec lab computers. For home practice, an 8GB+ RAM laptop with dedicated graphics is recommended.' }
    ]
  },

  'Web Designing': {
    id: 'web',
    title: 'Web Designing & Frontend UI/UX',
    subtitle: 'Build Responsive, Modern, and Interactive Websites with HTML, CSS, JS & React',
    badge: 'Career Track',
    badgeColor: 'bg-emerald-600 text-white',
    duration: '4 - 6 Months',
    mode: 'Online / Offline',
    level: 'Beginner to Intermediate',
    cert: 'Certified Frontend Web Designer',
    accentColor: 'from-emerald-600 via-teal-600 to-cyan-600',
    themeColor: 'emerald',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=70',
    desc: 'Learn how to turn UI/UX wireframes into dynamic, responsive websites that look incredible on mobile, tablet and desktop. Master HTML5, CSS3, Tailwind CSS, JavaScript and React.js.',
    tools: ['HTML5', 'CSS3 / Tailwind', 'JavaScript (ES6+)', 'React.js', 'Figma', 'Git / GitHub'],
    quote: 'Design beautiful user interfaces that millions of people interact with daily.',
    modules: [
      {
        title: 'Module 1: Web Fundamentals & Semantic HTML5',
        topics: ['HTML Elements, Forms, Tables & Multimedia', 'SEO-Friendly Web Semantic Architecture', 'Web Accessibility (A11y) Best Practices']
      },
      {
        title: 'Module 2: Modern CSS3 & Tailwind CSS',
        topics: ['Flexbox, CSS Grid & Responsive Layouts', 'Animations, Transitions & Glassmorphism UI', 'Tailwind CSS Utility-First Framework']
      },
      {
        title: 'Module 3: JavaScript Programming for the Web',
        topics: ['DOM Manipulation & Event Handling', 'ES6+ Features (Arrow Functions, Promises, Async/Await)', 'Fetch API & Working with Third-Party Data']
      },
      {
        title: 'Module 4: React.js Component-Based Architecture',
        topics: ['React State, Props & Lifecycle Hooks', 'Building Interactive Single Page Applications (SPA)', 'Component Libraries & Icon Systems']
      },
      {
        title: 'Module 5: Live Website Hosting & Deployment',
        topics: ['GitHub Pages, Vercel & Netlify Deployment', 'Domain Connection & SSL Setup', 'Building a 5-Website Portfolio']
      }
    ],
    faqs: [
      { q: 'Is coding difficult for a beginner?', a: 'Not at all! We start step-by-step with practical hands-on examples from day one.' },
      { q: 'Do we learn Figma for UI Design?', a: 'Yes, basic wireframing and prototyping in Figma is included in the course.' }
    ]
  },

  'Digital Marketing': {
    id: 'digital',
    title: 'Digital Marketing & Growth Mastery',
    subtitle: 'Master Google Ads, Meta Ads, SEO, Social Media & High-Converting Funnels',
    badge: 'High Growth',
    badgeColor: 'bg-indigo-600 text-white',
    duration: '3 - 5 Months',
    mode: 'Online / Offline',
    level: 'Beginner to Advanced',
    cert: 'Google & Meta Certified Marketer',
    accentColor: 'from-indigo-600 via-purple-600 to-pink-600',
    themeColor: 'indigo',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=70',
    desc: 'Learn how to generate leads, scale brand awareness, and drive measurable revenue online. Learn Search Engine Optimization (SEO), Pay-Per-Click (Google Ads), Meta Ads Manager, and Social Media Marketing.',
    tools: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'SEMrush / Ahrefs', 'Canva', 'Mailchimp'],
    quote: 'Marketing is about telling stories that resonate and driving measurable business growth.',
    modules: [
      {
        title: 'Module 1: Digital Marketing Strategy & Market Research',
        topics: ['Buyer Persona Identification & Funnel Architecture', 'Competitor Analysis & Value Proposition Mapping', 'Organic vs Paid Acquisition Channels']
      },
      {
        title: 'Module 2: Search Engine Optimization (SEO)',
        topics: ['Keyword Research & Search Intent Strategy', 'On-Page SEO, Schema Markup & Content Optimization', 'Technical SEO, Backlinks & Google Search Console']
      },
      {
        title: 'Module 3: Google Ads (PPC & Search Campaigns)',
        topics: ['Search, Display, Video (YouTube) & Performance Max Ads', 'Bidding Strategies, Quality Score & Ad Copywriting', 'Conversion Tracking & ROI Optimization']
      },
      {
        title: 'Module 4: Meta Ads (Facebook & Instagram)',
        topics: ['Meta Business Suite & Pixel Setup', 'Targeting (Custom Audiences, Lookalikes & Retargeting)', 'High-Converting Creative Ad Formats']
      },
      {
        title: 'Module 5: Analytics, Email & Freelance Agency Launch',
        topics: ['Google Analytics 4 (GA4) Reporting & Insights', 'Email Automations & Lead Nurturing Funnels', 'How to Pitch & Acquire High-Paying Clients']
      }
    ],
    faqs: [
      { q: 'Will I get Google and Meta certifications?', a: 'Yes, we guide you through official Google Ads and Meta Blueprint certification exams.' },
      { q: 'Can I start my own marketing agency?', a: 'Yes! We have a dedicated module on client acquisition, proposals, and pricing.' }
    ]
  },

  'Tally Prime with GST': {
    id: 'tally',
    title: 'Tally Prime with GST & Corporate Accounting',
    subtitle: 'Master Business Accounting, GST Returns, TDS, Payroll & Taxation',
    badge: 'Govt Compliant',
    badgeColor: 'bg-teal-600 text-white',
    duration: '3 - 4 Months',
    mode: 'Online / Offline',
    level: 'Beginner to Advanced',
    cert: 'Authorized Tally Prime Professional',
    accentColor: 'from-teal-600 via-emerald-600 to-cyan-600',
    themeColor: 'teal',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=70',
    desc: 'Become an indispensable accounting professional for businesses and CA firms. Learn complete computerized accounting in Tally Prime, GST filing, TDS deductions, billing, payroll, and balance sheet preparation.',
    tools: ['Tally Prime', 'GST Portal', 'MS Excel Accounting', 'TDS Portal', 'E-Way Bill System'],
    quote: 'Accounting is the language of business. Master Tally to unlock endless corporate opportunities.',
    modules: [
      {
        title: 'Module 1: Accounting Principles & Tally Prime Setup',
        topics: ['Golden Rules of Accounting & Ledger Management', 'Company Creation, Grouping & Chart of Accounts', 'Voucher Entry (Sales, Purchase, Payment, Receipt, Journal)']
      },
      {
        title: 'Module 2: Inventory & Invoicing Management',
        topics: ['Stock Groups, Categories, Units of Measure & Godowns', 'Purchase Orders, Sales Invoicing & Delivery Notes', 'Batch-Wise Details & Price Lists']
      },
      {
        title: 'Module 3: Goods & Services Tax (GST) Compliance',
        topics: ['CGST, SGST, IGST Setup & Tax Rates', 'GST Invoicing, Reverse Charge Mechanism (RCM)', 'GSTR-1, GSTR-3B Return Filing & Reconciliation']
      },
      {
        title: 'Module 4: TDS, Payroll & Financial Finalization',
        topics: ['Tax Deducted at Source (TDS) Computation & Challan', 'Employee Payroll Management, Attendance & Payslips', 'Profit & Loss Account, Balance Sheet & Trial Balance']
      },
      {
        title: 'Module 5: Practical CA Office Training',
        topics: ['Live Audit Scenarios & Client Bookkeeping', 'Bank Reconciliation Statements (BRS)', 'Placement Assistance in Corporate & CA Firms']
      }
    ],
    faqs: [
      { q: 'Is this course suitable for non-commerce students?', a: 'Yes! We start with basic accounting principles so anyone can easily learn.' },
      { q: 'Will I learn practical GST return filing?', a: 'Yes, 100% practical training on live GST portal data and reconciliation.' }
    ]
  },

  'SAP Course': {
    id: 'sap',
    title: 'SAP ERP Financials & Enterprise Systems',
    subtitle: 'Learn Enterprise Resource Planning for Multi-National Corporations',
    badge: 'Enterprise',
    badgeColor: 'bg-blue-700 text-white',
    duration: '4 - 6 Months',
    mode: 'Online / Offline',
    level: 'Intermediate to Advanced',
    cert: 'SAP ERP Functional Specialist',
    accentColor: 'from-blue-700 via-indigo-700 to-slate-800',
    themeColor: 'blue',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=70',
    desc: 'Prepare for high-paying enterprise consulting roles with hands-on SAP ERP training. Learn General Ledger, Accounts Payable/Receivable, Asset Accounting, Cost Center Management, and S/4HANA workflows.',
    tools: ['SAP GUI', 'SAP S/4HANA', 'SAP FICO Module', 'Excel Integration', 'SAP Solution Manager'],
    quote: 'SAP powers 99 of the top 100 largest companies in the world.',
    modules: [
      {
        title: 'Module 1: Introduction to ERP & SAP Architecture',
        topics: ['Enterprise Resource Planning Fundamentals', 'SAP GUI Navigation, System Landscape & Client Architecture', 'Organizational Structure Setup (Company Code, Business Area)']
      },
      {
        title: 'Module 2: General Ledger (FI-GL) Configuration',
        topics: ['Chart of Accounts, Account Groups & Retained Earnings', 'Fiscal Year Variants & Posting Period Variants', 'Document Types, Number Ranges & Posting Keys']
      },
      {
        title: 'Module 3: Accounts Payable (FI-AP) & Receivable (FI-AR)',
        topics: ['Vendor Master Data, Invoicing & Automatic Payment Program (APP)', 'Customer Master Data, Dunning Procedures & Incoming Payments', 'Credit Management & Down Payment Processing']
      },
      {
        title: 'Module 4: Asset Accounting & Bank Accounting',
        topics: ['Chart of Depreciation, Asset Classes & Depreciation Keys', 'Asset Acquisition, Retirement & Transfer Workflows', 'House Banks, Electronic Bank Statements (EBS)']
      },
      {
        title: 'Module 5: SAP S/4HANA & Corporate Integration',
        topics: ['Universal Journal (ACDOCA) & Simplified Data Models', 'Integration with MM (Materials) and SD (Sales & Distribution)', 'Mock Implementation Project & Certification Prep']
      }
    ],
    faqs: [
      { q: 'What is the salary scope for SAP professionals?', a: 'SAP consultants are among the highest paid IT/finance professionals worldwide.' },
      { q: 'Do we get server access for practical practice?', a: 'Yes, 24/7 access to live SAP practice server environments during the course.' }
    ]
  },

  'Computer Courses': {
    id: 'computer',
    title: 'Computer Fundamentals & Office Literacy',
    subtitle: 'From Absolute Basics to Microsoft Office Professional & Fast Typing',
    badge: 'Foundational',
    badgeColor: 'bg-purple-600 text-white',
    duration: '3 - 6 Months',
    mode: 'Online / Offline',
    level: 'Beginner / Foundation',
    cert: 'Certified Computer Operations Specialist',
    accentColor: 'from-purple-600 via-indigo-600 to-blue-600',
    themeColor: 'purple',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=70',
    desc: 'The essential starting point for every career. Build strong computer fundamentals, master Microsoft Office (Word, Excel, PowerPoint), learn Hindi & English typing speed, and gain practical internet & digital workplace skills.',
    tools: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Windows 11', 'Typing Master', 'Internet & Email'],
    quote: 'Digital literacy is the foundation of all modern professional achievements.',
    modules: [
      {
        title: 'Module 1: Computer Hardware, OS & Windows 11 Basics',
        topics: ['Hardware Components, CPU, Memory & Peripherals', 'Windows Operating System, File Management & Shortcuts', 'Control Panel, Security & Software Installation']
      },
      {
        title: 'Module 2: Touch Typing Mastery (English & Hindi)',
        topics: ['Finger Placement & Ergonomics', 'Speed Building Techniques (Goal: 35+ WPM)', 'Accuracy Checks & Official Certification Tests']
      },
      {
        title: 'Module 3: Microsoft Word (Professional Documents)',
        topics: ['Formatting, Styles, Margins & Page Setup', 'Tables, Headers/Footers, Table of Contents', 'Mail Merge for Official Letters & Certificates']
      },
      {
        title: 'Module 4: Microsoft Excel (Data Entry & Formulas)',
        topics: ['Spreadsheet Basics, Cell References & Data Types', 'Formulas: SUM, AVERAGE, COUNT, IF, VLOOKUP Basics', 'Charts, Conditional Formatting & Printing Setup']
      },
      {
        title: 'Module 5: MS PowerPoint & Digital Workplace Skills',
        topics: ['Creating Engaging Presentations & Slide Transitions', 'Official Email Etiquette, Google Drive & Cloud Storage', 'Online Forms, Digital Payments & Cyber Safety']
      }
    ],
    faqs: [
      { q: 'Is this course suitable for beginners who have never touched a computer?', a: 'Yes! This course is specially designed for complete beginners.' },
      { q: 'Will I receive a certificate?', a: 'Yes, government-registered Animeria institute certificate valid for jobs and exams.' }
    ]
  }
}

// Aliases mapping for common names to ensure exact matches
export function resolveCourseData(name) {
  if (!name) return allCoursesData['Data Analytics']
  const clean = name.toLowerCase().trim()
  
  if (clean.includes('python')) return allCoursesData['Python Full Stack']
  if (clean.includes('graphic')) return allCoursesData['Graphic Designing']
  if (clean.includes('video')) return allCoursesData['Video Editing']
  if (clean.includes('web') || clean.includes('react')) return allCoursesData['Web Designing']
  if (clean.includes('digital') || clean.includes('marketing') || clean.includes('seo')) return allCoursesData['Digital Marketing']
  if (clean.includes('tally') || clean.includes('gst')) return allCoursesData['Tally Prime with GST']
  if (clean.includes('sap') || clean.includes('erp')) return allCoursesData['SAP Course']
  if (clean.includes('computer') || clean.includes('office') || clean.includes('basic')) return allCoursesData['Computer Courses']
  if (clean.includes('data') || clean.includes('analyt')) return allCoursesData['Data Analytics']
  
  return allCoursesData['Data Analytics']
}
