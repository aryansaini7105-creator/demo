const https = require('https');

function searchImages(query) {
    const url = `https://duckduckgo.com/i.js?q=${encodeURIComponent(query)}&o=json`;
    return new Promise((resolve) => {
        https.get(`https://duckduckgo.com/?q=${encodeURIComponent(query)}`, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const vqdMatch = data.match(/vqd="([^"]+)"/);
                if (!vqdMatch) {
                    resolve('no vqd');
                    return;
                }
                const vqd = vqdMatch[1];
                https.get(`${url}&vqd=${vqd}`, {
                    headers: { 'User-Agent': 'Mozilla/5.0' }
                }, (res2) => {
                    let data2 = '';
                    res2.on('data', chunk => data2 += chunk);
                    res2.on('end', () => {
                        try {
                            const json = JSON.parse(data2);
                            let results = [];
                            if (json.results) {
                                for (let r of json.results) {
                                    if (r.image.includes('images.unsplash.com/photo-')) {
                                        results.push(r.image);
                                    }
                                }
                            }
                            resolve(results.length > 0 ? results[0] : 'no unsplash results found');
                        } catch(e) {
                            resolve('json error');
                        }
                    });
                });
            });
        });
    });
}

async function run() {
    console.log("Denim Jacket: ", await searchImages('site:unsplash.com denim jacket isolated'));
    console.log("Kids Tee 1: ", await searchImages('site:unsplash.com kid wearing t-shirt cute'));
    console.log("Design Studio: ", await searchImages('site:unsplash.com fashion designer sketching'));
    console.log("Design Studio 2: ", await searchImages('site:unsplash.com tailor working studio'));
    console.log("Team 1: ", await searchImages('site:unsplash.com professional female business portrait'));
    console.log("Team 2: ", await searchImages('site:unsplash.com creative male designer portrait'));
    console.log("Team 3: ", await searchImages('site:unsplash.com smiling woman corporate portrait office'));
    console.log("Team 4: ", await searchImages('site:unsplash.com craftsman tailor portrait workshop'));
}

run();
