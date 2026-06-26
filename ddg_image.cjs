const https = require('https');

function searchImages(query) {
    const url = `https://duckduckgo.com/i.js?q=${encodeURIComponent(query)}&o=json`;
    return new Promise((resolve) => {
        // We first need a vqd token
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
                            resolve(json.results && json.results.length > 0 ? json.results[0].image : 'no results');
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
    console.log("Denim Jacket: ", await searchImages('blue denim jacket isolated on white background unsplash'));
    console.log("Kids Tee: ", await searchImages('kids t-shirt isolated on white background unsplash'));
    console.log("Design Studio: ", await searchImages('fashion designer sketching clothes in studio unsplash'));
    console.log("Team 1: ", await searchImages('professional female business portrait unsplash'));
    console.log("Team 2: ", await searchImages('professional male creative portrait unsplash'));
    console.log("Team 3: ", await searchImages('professional female corporate portrait unsplash'));
    console.log("Team 4: ", await searchImages('professional male artisan portrait unsplash'));
}

run();
