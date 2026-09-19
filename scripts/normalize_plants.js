const fs = require('fs');
const path = require('path');
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
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        },
        timeout: 4000
      }, (res) => {
        resolve(res.statusCode);
      });
      req.on('error', () => resolve(500));
      req.on('timeout', () => { req.destroy(); resolve(408); });
      req.end();
    } catch (e) {
      resolve(500);
    }
  });
}

function checkWeserv(url) {
  return new Promise((resolve) => {
    try {
      const wUrl = 'https://images.weserv.nl/?url=' + encodeURIComponent(url) + '&w=500&output=jpg';
      const u = new URL(wUrl);
      const req = https.request({
        method: 'HEAD',
        hostname: u.hostname,
        path: u.pathname + u.search,
        headers: {
          'User-Agent': 'Mozilla/5.0'
        },
        timeout: 6000
      }, (res) => {
        resolve(res.statusCode);
      });
      req.on('error', () => resolve(500));
      req.on('timeout', () => { req.destroy(); resolve(408); });
      req.end();
    } catch (e) {
      resolve(500);
    }
  });
}

async function run() {
  console.log('Normalizing 94 plant entries...');
  let fixedUrls = 0;

  for (let i = 0; i < plants.length; i++) {
    const p = plants[i];
    
    // Clean up diet to be kid-friendly and accurate
    if (p.diet.startsWith('Autotroph -')) {
      p.diet = p.diet.replace('Autotroph -', 'Photosynthesis (creates own food from sunlight) -');
    } else if (p.diet.startsWith('Carnivore -')) {
      p.diet = p.diet.replace('Carnivore -', 'Carnivorous (traps insects) & Photosynthesis -');
    }

    // Clean up predators to be accurate for botany
    if (!p.predators.toLowerCase().includes('herbivore') && !p.predators.toLowerCase().includes('pest') && !p.predators.toLowerCase().includes('grazer') && !p.predators.toLowerCase().includes('insects')) {
      p.predators = `Herbivores & Pests: ${p.predators}`;
    }

    // Clean URL
    let clean = p.image.split('?')[0];
    clean = clean.replace(/\/\d+px-/g, '/500px-');
    p.image = clean;
  }

  // Check how many pass Weserv
  console.log('Verifying all 94 plants via Cloudflare / Weserv cache...');
  let okCount = 0;
  let failed = [];

  for (let i = 0; i < plants.length; i++) {
    const p = plants[i];
    const code = await checkWeserv(p.image);
    if (code === 200) {
      okCount++;
    } else {
      failed.push({ i, name: p.name, sci: p.scientific, url: p.image, code });
      console.log(`Failed [${i+1}] ${p.name}: ${code} (${p.image.slice(0, 70)})`);
    }
    await new Promise(r => setTimeout(r, 60));
  }

  console.log(`Weserv verified: ${okCount} / ${plants.length}`);
  console.log(`Failed: ${failed.length}`);

  // Save updated plants.js
  const fileContent = '// 94 PLANTS Data File\nwindow.PLANTS_DATA = ' + JSON.stringify(plants, null, 2) + ';\n';
  fs.writeFileSync(path.join(__dirname, '..', 'data', 'plants.js'), fileContent, 'utf8');
  console.log('Saved data/plants.js');

  fs.writeFileSync(path.join(__dirname, 'failed_plants_weserv.json'), JSON.stringify(failed, null, 2));
}

run();
