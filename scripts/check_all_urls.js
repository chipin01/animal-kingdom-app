const fs = require('fs');
const path = require('path');
const https = require('https');

global.window = global;

require('../data/amphibians.js');
require('../data/insects.js');
require('../data/marine.js');
require('../data/land.js');
require('../data/birds.js');
require('../data/plants.js');

const datasets = [
  { name: 'amphibians', data: window.AMPHIBIANS_DATA },
  { name: 'insects', data: window.INSECTS_DATA },
  { name: 'marine', data: window.MARINE_DATA },
  { name: 'land', data: window.LAND_DATA },
  { name: 'birds', data: window.BIRDS_DATA },
  { name: 'plants', data: window.PLANTS_DATA }
];

function checkUrl(url) {
  return new Promise((resolve) => {
    if (!url || typeof url !== 'string') {
      return resolve({ ok: false, error: 'No URL provided' });
    }
    try {
      const u = new URL(url);
      const req = https.request({
        method: 'HEAD',
        hostname: u.hostname,
        path: u.pathname + u.search,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        timeout: 4000
      }, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve({ ok: true, status: res.statusCode });
        } else {
          resolve({ ok: false, status: res.statusCode });
        }
      });
      req.on('error', (err) => resolve({ ok: false, error: err.message }));
      req.on('timeout', () => { req.destroy(); resolve({ ok: false, error: 'timeout' }); });
      req.end();
    } catch (e) {
      resolve({ ok: false, error: e.message });
    }
  });
}

async function run() {
  const broken = [];
  const unsplashRemaining = [];

  for (const ds of datasets) {
    console.log(`Checking ${ds.name} (${ds.data.length} species)...`);
    // Run in chunks of 15 concurrent
    for (let i = 0; i < ds.data.length; i += 15) {
      const chunk = ds.data.slice(i, i + 15);
      const promises = chunk.map(async (item) => {
        if (item.image.includes('images.unsplash.com')) {
          unsplashRemaining.push({ ds: ds.name, name: item.name, id: item.id, url: item.image });
        }
        const res = await checkUrl(item.image);
        if (!res.ok) {
          broken.push({
            ds: ds.name,
            name: item.name,
            scientific: item.scientific,
            id: item.id,
            url: item.image,
            reason: res.status || res.error
          });
        }
      });
      await Promise.all(promises);
    }
  }

  console.log(`\n=== RESULTS ===`);
  console.log(`Remaining Unsplash images: ${unsplashRemaining.length}`);
  console.log(`Broken / Non-200 images: ${broken.length}`);
  if (broken.length > 0) {
    console.log('\nBroken images list:');
    broken.forEach(b => console.log(`[${b.ds}] ${b.name} (${b.scientific}) -> ${b.reason} | ${b.url.slice(0, 70)}`));
  }

  fs.writeFileSync(path.join(__dirname, 'broken_images.json'), JSON.stringify(broken, null, 2));
}

run();
