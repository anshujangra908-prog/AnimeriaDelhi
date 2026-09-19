import fs from 'fs'
import path from 'path'

const sourceImagePath = `C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\6e54963f-6e6c-46fb-85f2-ad36966a4801\\.user_uploaded\\media_1789802408632.jpg`
const targetSvgPath = path.resolve('public/favicon.svg')

const imageBuffer = fs.readFileSync(sourceImagePath)
const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`

// Create high-definition circular clipped SVG with blue ring and 1.25x zoom on central logo
const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <clipPath id="circleClip">
      <circle cx="256" cy="256" r="236" />
    </clipPath>
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0052cc" flood-opacity="0.15" />
    </filter>
  </defs>
  
  <!-- Outer Blue Circular Border -->
  <circle cx="256" cy="256" r="250" fill="#0066ff" filter="url(#dropShadow)" />
  <circle cx="256" cy="256" r="238" fill="#ffffff" />
  
  <!-- Zoomed & Centered Logo inside Circle -->
  <image
    href="${base64Image}"
    x="-58"
    y="-58"
    width="628"
    height="628"
    clip-path="url(#circleClip)"
    preserveAspectRatio="xMidYMid slice"
  />
</svg>`

fs.writeFileSync(targetSvgPath, svgContent, 'utf-8')
console.log('✅ Circular SVG Favicon generated at public/favicon.svg')
