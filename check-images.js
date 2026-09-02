const fs = require('fs');
const path = require('path');
const html = fs.readFileSync('index.html', 'utf8');
const refs = new Set();
const re = /img:\s*"([^"]+)"|src="(images\/[^"]+)"/g;
let m;
while ((m = re.exec(html))) refs.add(m[1] || m[2]);
const missing = [];
for (const ref of [...refs].sort()) {
  if (ref.startsWith('http')) continue;
  const p = path.join('.', ref);
  if (!fs.existsSync(p)) missing.push(ref);
}
fs.writeFileSync('missing-images.txt', missing.join('\n') + '\n');
console.log('Missing count:', missing.length);
missing.forEach(r => console.log(r));
