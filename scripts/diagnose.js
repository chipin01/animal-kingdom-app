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

const allDatasets = {
  amphibians: window.AMPHIBIANS_DATA,
  insects: window.INSECTS_DATA,
  marine: window.MARINE_DATA,
  land: window.LAND_DATA,
  birds: window.BIRDS_DATA,
  plants: window.PLANTS_DATA
};

// Check image urls
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
        timeout: 5000
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

async function run() {
  console.log('--- Plant species sample ---');
  for (let i = 0; i < 20; i++) {
    const p = window.PLANTS_DATA[i];
    console.log(`${i+1}. ${p.name} | Sci: ${p.scientific} | Diet: ${p.diet} | Pred: ${p.predators}`);
  }

  console.log('\n--- Checking sample URLs for response codes ---');
  const testSamples = [
    window.PLANTS_DATA[0].image,
    window.PLANTS_DATA[1].image,
    window.AMPHIBIANS_DATA[2].image, // Axolotl
    window.MARINE_DATA[0].image
  ];

  for (const url of testSamples) {
    const res = await checkUrl(url);
    console.log(`URL: ${url.slice(0, 80)}... -> Status: ${res.status || res.error}`);
  }
}

run();
