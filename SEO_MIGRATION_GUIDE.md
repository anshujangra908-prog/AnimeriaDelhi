# 🚀 Animeria.AI - Complete SEO URL Migration & Search Console Guide

This document outlines the **301 Redirect Engine**, **Canonical Tags**, **Google Search Console Verification**, and **Step-by-step URL Migration Strategy** implemented for `animeriadelhi.com`.

---

## 📋 1. Old URL → 301 Permanent Redirect → New URL Mapping Matrix

The server (`server/server.js`) automatically enforces **HTTP 301 (Permanent Redirect)** for all indexed legacy URLs to ensure **100% SEO Link Juice, PageRank, and Backlink Preservation**.

| Old Legacy URL (Indexed in Google) | HTTP Status | New Canonical Target URL | SEO Purpose |
| :--- | :--- | :--- | :--- |
| `/graphic-designing-course` | **301 Redirect** | `/#courses` | Graphic Design pro page |
| `/graphic-designing` | **301 Redirect** | `/#courses` | Graphic Design topic |
| `/python-full-stack-course` | **301 Redirect** | `/#courses` | Python Full Stack page |
| `/python-course` | **301 Redirect** | `/#courses` | Python coding page |
| `/data-analytics-course` | **301 Redirect** | `/#courses` | Data Analytics & Power BI |
| `/data-analytics` | **301 Redirect** | `/#courses` | Data Analytics topic |
| `/video-editing-course` | **301 Redirect** | `/#courses` | Video Editing & Motion VFX |
| `/digital-marketing-course` | **301 Redirect** | `/#courses` | Digital Marketing & SEO |
| `/tally-prime-course` | **301 Redirect** | `/#courses` | Tally Prime with GST |
| `/sap-erp-course` | **301 Redirect** | `/#courses` | SAP ERP Financials |
| `/computer-course` | **301 Redirect** | `/#courses` | Basic Computer Fundamentals |
| `/courses.html` | **301 Redirect** | `/#courses` | Old HTML Courses page |
| `/all-courses` | **301 Redirect** | `/#courses` | Course catalog |
| `/admission-form` | **301 Redirect** | `/#admission` | Online Student Admission |
| `/online-admission` | **301 Redirect** | `/#admission` | Student Application |
| `/admission.html` | **301 Redirect** | `/#admission` | Old Admission HTML |
| `/verify-certificate` | **301 Redirect** | `/#certifications` | Certificate Verification |
| `/about-us` | **301 Redirect** | `/#about` | About Us & Leadership |
| `/about.html` | **301 Redirect** | `/#about` | Old About HTML |
| `/rules-regulations` | **301 Redirect** | `/#policies` | Institute Policies |
| `/privacy-policy` | **301 Redirect** | `/#policies` | Legal Privacy Policy |
| `/contact-us` | **301 Redirect** | `/#contact` | Dwarka Campus & Support |
| `/contact.html` | **301 Redirect** | `/#contact` | Old Contact HTML |

---

## 🔍 2. Developer & SEO Execution Checklist (8 Rules Followed)

1. ✅ **Old → New URL Mapping Matrix Active**: Configured in `server/server.js` via 301 middleware.
2. ✅ **Topic-to-Topic Redirect Alignment**: Old course URLs redirect to relevant `#courses` sections, NOT dumping blindly to home page.
3. ✅ **Clean Sitemap (`public/sitemap.xml`)**: Contains ONLY active, new canonical URLs with proper `lastmod` and `changefreq`.
4. ✅ **Robots.txt Directive (`public/robots.txt`)**: Points directly to `sitemap.xml` with `User-agent: *`.
5. ✅ **Self-Referencing Canonical Tag**: `<link rel="canonical" href="https://animeriadelhi.com/" />` added in `index.html`.
6. ✅ **Internal Links Updated**: All footer and header navigation links point to clean new URLs.
7. ✅ **No 404 Drop**: 301 Permanent Redirects remain active permanently to preserve backlinks.
8. ✅ **Google Search Console Verification Tag**: Meta tag placeholder `<meta name="google-site-verification" content="..." />` ready in `index.html`.

---

## 🎯 3. Google Search Console Step-by-Step Submission Guide

When deploying the live website:

1. **Open Google Search Console**: Go to [https://search.google.com/search-console](https://search.google.com/search-console).
2. **Add Property**: Select **URL Prefix** or **Domain** property for `https://animeriadelhi.com`.
3. **Verify Ownership**:
   - Copy the verification token provided by Google Search Console.
   - Place it in `index.html`: `<meta name="google-site-verification" content="YOUR_TOKEN_HERE" />`.
   - Click **Verify**.
4. **Submit Sitemap**:
   - Go to **Sitemaps** in the left menu.
   - Enter `sitemap.xml` and click **Submit**.
5. **Request Indexing for Key Pages**:
   - Use the **URL Inspection Tool** for `https://animeriadelhi.com/`, `https://animeriadelhi.com/#courses`, `https://animeriadelhi.com/#admission`, `https://animeriadelhi.com/#contact`.
   - Click **Request Indexing**.
6. **Monitor Coverage & Page Indexing**:
   - Check the **Indexing > Pages** report after 48-72 hours to ensure 301 redirects are detected cleanly without indexing errors.
