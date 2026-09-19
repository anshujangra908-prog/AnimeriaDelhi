const https = require('https');
const fs = require('fs');

const url = 'https://www.awesomescreenshot.com/video/56565063?key=d5f6a3d3ba6cad3d6d6fddd5e595bfbb';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Search for video links (.mp4 or s3 or cloudfront or stream)
    console.log('Status:', res.statusCode);
    const matches = data.match(/https[^"']+\.mp4[^"']*/g);
    console.log('MP4 matches:', matches);
    const jsonMatches = data.match(/window\.__INITIAL_STATE__\s*=\s*({.*?});/s);
    if (jsonMatches) {
      console.log('Initial state found!');
    }
    fs.writeFileSync('scratch/page.html', data);
  });
}).on('error', err => console.error(err));
