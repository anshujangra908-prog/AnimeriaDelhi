const https = require('https');
const fs = require('fs');

async function main() {
  const videoId = '56565063';
  const key = 'd5f6a3d3ba6cad3d6d6fddd5e595bfbb';
  
  // AwesomeScreenshot API endpoint for video details
  const endpoints = [
    `https://www.awesomescreenshot.com/api/video/info?id=${videoId}&key=${key}`,
    `https://www.awesomescreenshot.com/api/video/detail?id=${videoId}&key=${key}`,
    `https://www.awesomescreenshot.com/api/item/${videoId}?key=${key}`,
    `https://api.awesomescreenshot.com/api/video/detail?id=${videoId}&key=${key}`
  ];

  for (const ep of endpoints) {
    try {
      const res = await fetch(ep, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Referer': `https://www.awesomescreenshot.com/video/${videoId}?key=${key}`
        }
      });
      console.log(ep, 'Status:', res.status);
      if (res.ok) {
        const text = await res.text();
        console.log('Response text:', text.substring(0, 300));
        try {
          const json = JSON.parse(text);
          console.log('JSON keys:', Object.keys(json));
          if (json.data && (json.data.video_url || json.data.download_url || json.data.url)) {
            console.log('Found video URL:', json.data.video_url || json.data.download_url || json.data.url);
          }
        } catch (e) {}
      }
    } catch (err) {
      console.error(ep, err.message);
    }
  }
}

main();
