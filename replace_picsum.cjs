const fs = require('fs');
const path = require('path');

function replaceUnsplash(content) {
  return content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?auto=format&fit=crop&q=80(?:&w=(\d+))?/g, (match, width) => {
    // Generate a stable seed from the original URL so the same url gets the same random image
    let hash = 0;
    for (let i = 0; i < match.length; i++) {
        hash = Math.imul(31, hash) + match.charCodeAt(i) | 0;
    }
    const seed = Math.abs(hash).toString(16);
    const w = width ? width : 800;
    const h = w === '1200' ? 800 : (w === '400' ? 400 : 800); // approximate heights based on typical usage
    return `https://picsum.photos/seed/${seed}/${w}/${h}`;
  });
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = replaceUnsplash(content);
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
  }
});
console.log('Images replaced with Picsum');
