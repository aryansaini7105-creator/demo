const https = await import('https');

async function search(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=1`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.results[0].id);
        } catch(e) {
          resolve('error');
        }
      });
    });
  });
}

async function run() {
  console.log("T-Shirt: ", await search('plain white t-shirt clothing'));
  console.log("Hoodie: ", await search('blank hoodie apparel'));
  console.log("Dress: ", await search('cotton summer dress fashion'));
  console.log("Denim Jacket: ", await search('denim jacket apparel'));
  console.log("Kids Tee: ", await search('kids t-shirt clothing'));
  console.log("Joggers: ", await search('sweatpants joggers apparel'));
  
  console.log("Blog 1 (Wardrobe): ", await search('clothes hanging on rack'));
  console.log("Blog 2 (Sustainable): ", await search('cotton plant field'));
  console.log("Blog 3 (Care): ", await search('folding clean clothes laundry'));
  console.log("Blog 4 (Summer): ", await search('summer fashion outfit'));
  console.log("Blog 5 (Design): ", await search('fashion designer working sketching'));
  
  console.log("Team 1 (Female CEO): ", await search('professional business woman portrait'));
  console.log("Team 2 (Male Head of Design): ", await search('creative male designer portrait'));
  console.log("Team 3 (Female Director): ", await search('smiling woman corporate portrait'));
  console.log("Team 4 (Male Artisan): ", await search('craftsman tailor portrait'));
}
run();
