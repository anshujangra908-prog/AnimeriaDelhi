const https = require('https');

https.get('https://resource.awesomescreenshot.com/static/app.bundle-62ecbffbdac01b3b6f89.js', (res) => {
  let text = '';
  res.on('data', d => text += d);
  res.on('end', () => {
    // Search for API paths
    const matches = text.match(/\/api\/[a-zA-Z0-9_\/]+/g);
    if (matches) {
      const unique = [...new Set(matches)];
      console.log('API endpoints found:', unique.filter(u => u.includes('video') || u.includes('item') || u.includes('share') || u.includes('view')));
    }
  });
});
