const fs = require('fs');
const path = require('path');
const https = require('https');

global.window = global;
require('../data/plants.js');

const plants = window.PLANTS_DATA;

const replacements = {
  'Montezuma Cypress (El Árbol del Tule)': 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=500&q=80',
  'Maidenhair Fern': 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=500&q=80',
  'Elkhorn Staghorn Fern': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Platycerium_bifurcatum.jpg/500px-Platycerium_bifurcatum.jpg',
  'Fly Orchid': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/%28MHNT%29_Ophrys_apifera_-_Villeneuve-l%C3%A8s-Bouloc_-_Flower.jpg/500px-%28MHNT%29_Ophrys_apifera_-_Villeneuve-l%C3%A8s-Bouloc_-_Flower.jpg',
  'Flame Lily (Gloriosa)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flame_Lily.jpg/500px-Flame_Lily.jpg',
  'Himalayan Blue Poppy': 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80',
  'Pebble Plant Camouflage (Fenestraria)': 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80',
  'Stinging Nettle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fen_nettle_%28Urtica_dioica_ssp._galeopsifolia%29_-_geograph.org.uk_-_5423125.jpg/500px-Fen_nettle_%28Urtica_dioica_ssp._galeopsifolia%29_-_geograph.org.uk_-_5423125.jpg',
  'Water Hyacinth': 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=500&q=80',
  'Common Eelgrass': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Eelgrass.jpg'
};

for (const p of plants) {
  if (replacements[p.name]) {
    p.image = replacements[p.name];
    console.log(`Updated image for ${p.name}`);
  }
}

// Write back
const code = '// 94 PLANTS Data File\nwindow.PLANTS_DATA = ' + JSON.stringify(plants, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, '..', 'data', 'plants.js'), code, 'utf8');
console.log('Saved data/plants.js successfully.');
