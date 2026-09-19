const fs = require('fs');
const https = require('https');

global.window = global;
require('../data/plants.js');

const plants = window.PLANTS_DATA;

function checkUrl(url) {
  return new Promise((resolve) => {
    try {
      const u = new URL(url);
      const req = https.request({
        method: 'HEAD',
        hostname: u.hostname,
        path: u.pathname + u.search,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        timeout: 6000
      }, (res) => {
        resolve({ status: res.statusCode, location: res.headers.location });
      });
      req.on('error', (err) => resolve({ error: err.message }));
      req.on('timeout', () => { req.destroy(); resolve({ error: 'timeout' }); });
      req.end();
    } catch (e) {
      resolve({ error: e.message });
    }
  });
}

async function testAllPlants() {
  console.log(`Testing ${plants.length} plants sequentially...`);
  const failed = [];
  const ok = [];

  for (let i = 0; i < plants.length; i++) {
    const p = plants[i];
    const res = await checkUrl(p.image);
    if (res.status === 200 || res.status === 301 || res.status === 302) {
      ok.push(p);
    } else {
      failed.push({ idx: i + 1, name: p.name, sci: p.scientific, image: p.image, status: res.status || res.error });
      console.log(`Failed [${i+1}] ${p.name}: ${res.status || res.error} -> ${p.image.slice(0, 80)}`);
    }
    // delay to avoid 429
    await new Promise(r => setTimeout(r, 60));
  }

  console.log(`\nOK: ${ok.length} / ${plants.length}`);
  console.log(`Failed: ${failed.length} / ${plants.length}`);
  fs.writeFileSync('./scripts/failed_plants.json', JSON.stringify(failed, null, 2));
}

testAllPlants();
