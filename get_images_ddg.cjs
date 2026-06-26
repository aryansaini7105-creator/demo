const https = require('https');

async function search(query) {
  return new Promise((resolve) => {
    https.get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent('site:unsplash.com ' + query)}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Look for image source links that might point to unsplash cdn
        const matches = [...data.matchAll(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g)];
        if (matches.length > 0) {
            resolve(matches[0][0]);
        } else {
            resolve('not found');
        }
      });
    });
  });
}

async function run() {
  console.log("Kids Tee: ", await search('kids "t-shirt"'));
  console.log("Design Studio: ", await search('"fashion designer" sketching clothes'));
  console.log("Joggers: ", await search('sweatpants'));
}
run();
