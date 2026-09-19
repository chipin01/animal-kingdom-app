const fs = require('fs');
const path = require('path');

global.window = global;

const datasets = [
  { file: 'amphibians.js', varName: 'AMPHIBIANS_DATA' },
  { file: 'insects.js', varName: 'INSECTS_DATA' },
  { file: 'marine.js', varName: 'MARINE_DATA' },
  { file: 'land.js', varName: 'LAND_DATA' },
  { file: 'birds.js', varName: 'BIRDS_DATA' },
  { file: 'plants.js', varName: 'PLANTS_DATA' }
];

for (const d of datasets) {
  const filePath = path.join(__dirname, '..', 'data', d.file);
  require(filePath);
  const items = window[d.varName];
  console.log(`Checking ${d.file}: ${items.length} items`);

  for (const item of items) {
    if (item.image) {
      let clean = item.image.split('?')[0];
      clean = clean.replace(/\/\d+px-/g, '/500px-');
      item.image = clean;
    }
  }

  const code = `// ${items.length} ${d.varName.replace('_DATA', '')} Data File\nwindow.${d.varName} = ${JSON.stringify(items, null, 2)};\n`;
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Standardized ${d.file}`);
}

console.log('All datasets cleaned and standardized!');
