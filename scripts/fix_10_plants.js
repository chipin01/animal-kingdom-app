const fs = require('fs');
const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'AnimalKingdomApp/1.0 (botany test)' } }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function checkWeserv(url) {
  return new Promise((resolve) => {
    try {
      const wUrl = 'https://images.weserv.nl/?url=' + encodeURIComponent(url) + '&w=500&output=jpg';
      https.get(wUrl, (res) => resolve(res.statusCode)).on('error', () => resolve(500));
    } catch(e) {
      resolve(500);
    }
  });
}

const targets = [
  { name: 'Montezuma Cypress (El Árbol del Tule)', query: 'Árbol del Tule' },
  { name: 'Maidenhair Fern', query: 'Adiantum' },
  { name: 'Elkhorn Staghorn Fern', query: 'Platycerium' },
  { name: 'Fly Orchid', query: 'Ophrys insectifera' },
  { name: 'Flame Lily (Gloriosa)', query: 'Gloriosa superba' },
  { name: 'Himalayan Blue Poppy', query: 'Meconopsis' },
  { name: 'Pebble Plant Camouflage (Fenestraria)', query: 'Fenestraria' },
  { name: 'Stinging Nettle', query: 'Urtica dioica' },
  { name: 'Water Hyacinth', query: 'Eichhornia crassipes' },
  { name: 'Common Eelgrass', query: 'Zostera marina' }
];

async function run() {
  for (const t of targets) {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(t.query)}&gsrlimit=3&prop=pageimages&pithumbsize=500&format=json`;
    const data = await fetchJson(searchUrl);
    if (data.query && data.query.pages) {
      for (const p of Object.values(data.query.pages)) {
        if (p.thumbnail && p.thumbnail.source) {
          const thumb = p.thumbnail.source.split('?')[0];
          const code = await checkWeserv(thumb);
          if (code === 200) {
            console.log(`FOUND for ${t.name}:`, thumb);
            t.found = thumb;
            break;
          }
        }
      }
    }
    if (!t.found) {
      console.log(`STILL MISSING: ${t.name}`);
    }
    await new Promise(r => setTimeout(r, 200));
  }

  fs.writeFileSync('./scripts/fixed_10_plants.json', JSON.stringify(targets, null, 2));
}

run();
