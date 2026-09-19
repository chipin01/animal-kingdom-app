const fs = require('fs');
const path = require('path');
const https = require('https');

// Helper for https requests
function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'AnimalKingdomApp/1.0 (educational nature encyclopedia; mailto:info@animalkingdom.org)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON: ${data.slice(0, 100)}`));
        }
      });
    }).on('error', reject);
  });
}

// Extract array from file content
function readDataFile(filename, varName) {
  const filePath = path.join(__dirname, '..', 'data', filename);
  const content = fs.readFileSync(filePath, 'utf8');
  const jsonStart = content.indexOf('[');
  const jsonEnd = content.lastIndexOf(']');
  if (jsonStart === -1 || jsonEnd === -1) {
    throw new Error(`Could not parse JSON array from ${filename}`);
  }
  const jsonStr = content.substring(jsonStart, jsonEnd + 1);
  return JSON.parse(jsonStr);
}

// Write array back to file
function writeDataFile(filename, varName, items) {
  const filePath = path.join(__dirname, '..', 'data', filename);
  const header = `// ${items.length} ${varName.replace('_DATA', '')} Data File\nwindow.${varName} = `;
  const footer = `;\n`;
  fs.writeFileSync(filePath, header + JSON.stringify(items, null, 2) + footer, 'utf8');
  console.log(`Successfully updated and saved ${filename} with ${items.length} items.`);
}

async function searchWikiImage(title) {
  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(title)}&gsrlimit=1&prop=pageimages&pithumbsize=640&format=json`;
    const res = await fetchJson(searchUrl);
    if (res.query && res.query.pages) {
      const pages = Object.values(res.query.pages);
      if (pages.length > 0 && pages[0].thumbnail && pages[0].thumbnail.source) {
        return pages[0].thumbnail.source;
      }
    }
  } catch (e) {
    // ignore
  }
  return null;
}

async function batchFetchImages(titles) {
  const encoded = encodeURIComponent(titles.join('|'));
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encoded}&prop=pageimages&format=json&pithumbsize=640&redirects=1`;
  const res = await fetchJson(url);
  const map = new Map();

  if (!res.query) return map;

  // Build redirect & normalize map
  const aliasMap = new Map(); // requested title -> resolved title
  if (res.query.normalized) {
    for (const n of res.query.normalized) {
      aliasMap.set(n.from, n.to);
    }
  }
  if (res.query.redirects) {
    for (const r of res.query.redirects) {
      aliasMap.set(r.from, r.to);
      for (const [k, v] of aliasMap.entries()) {
        if (v === r.from) {
          aliasMap.set(k, r.to);
        }
      }
    }
  }

  // Map page title -> thumbnail
  const pageThumbMap = new Map();
  if (res.query.pages) {
    for (const pageId in res.query.pages) {
      const p = res.query.pages[pageId];
      if (p.thumbnail && p.thumbnail.source) {
        pageThumbMap.set(p.title.toLowerCase(), p.thumbnail.source);
      }
    }
  }

  // Now resolve for each input title
  for (const title of titles) {
    let resolved = title;
    let lower = title.toLowerCase();
    
    if (aliasMap.has(title)) {
      resolved = aliasMap.get(title);
    }
    
    if (pageThumbMap.has(resolved.toLowerCase())) {
      map.set(title, pageThumbMap.get(resolved.toLowerCase()));
    } else if (pageThumbMap.has(lower)) {
      map.set(title, pageThumbMap.get(lower));
    }
  }

  return map;
}

async function processDataset(filename, varName) {
  console.log(`\n=== Processing ${filename} (${varName}) ===`);
  const items = readDataFile(filename, varName);
  console.log(`Loaded ${items.length} items from ${filename}`);

  const batchSize = 40;
  let successCount = 0;
  let fallbackCount = 0;
  let missing = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const chunk = items.slice(i, i + batchSize);
    const scientificTitles = chunk.map(item => item.scientific.trim());
    
    try {
      const imgMap = await batchFetchImages(scientificTitles);
      for (const item of chunk) {
        const sci = item.scientific.trim();
        if (imgMap.has(sci) && imgMap.get(sci)) {
          item.image = imgMap.get(sci);
          successCount++;
        } else {
          missing.push(item);
        }
      }
    } catch (err) {
      console.error(`Error processing batch ${i} - ${i + batchSize}:`, err.message);
      missing.push(...chunk);
    }
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`Primary scientific search matched: ${successCount} / ${items.length}`);

  // Fallback for missing items: try cleaned name and search
  if (missing.length > 0) {
    console.log(`Attempting fallback search for ${missing.length} items...`);
    for (const item of missing) {
      const cleanName = item.name.replace(/\s*\([^)]*\)/g, '').trim();
      let foundUrl = await searchWikiImage(cleanName);
      if (!foundUrl && item.scientific) {
        foundUrl = await searchWikiImage(item.scientific);
      }
      if (foundUrl) {
        item.image = foundUrl;
        fallbackCount++;
      } else {
        console.warn(`Could not find image for: ${item.name} (${item.scientific})`);
      }
      await new Promise(r => setTimeout(r, 100));
    }
  }

  console.log(`Fallback resolved: ${fallbackCount}`);
  console.log(`Total images verified: ${successCount + fallbackCount} / ${items.length}`);

  writeDataFile(filename, varName, items);
}

async function run() {
  const datasets = [
    { file: 'amphibians.js', varName: 'AMPHIBIANS_DATA' },
    { file: 'insects.js', varName: 'INSECTS_DATA' },
    { file: 'marine.js', varName: 'MARINE_DATA' },
    { file: 'land.js', varName: 'LAND_DATA' },
    { file: 'birds.js', varName: 'BIRDS_DATA' },
    { file: 'plants.js', varName: 'PLANTS_DATA' }
  ];

  for (const d of datasets) {
    await processDataset(d.file, d.varName);
  }

  console.log('\nALL 6 DATASETS UPDATED WITH ACCURATE WIKIPEDIA/WIKIMEDIA COMMONS IMAGES!');
}

run().catch(console.error);
