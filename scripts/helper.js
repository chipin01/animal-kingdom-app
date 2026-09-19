const fs = require('fs');
const path = require('path');

// Helper to write window data file
function saveCategory(filename, varName, items) {
  const code = '// ' + varName + ' dataset (' + items.length + ' species)\n' +
               'window.' + varName + ' = ' + JSON.stringify(items, null, 2) + ';\n';
  fs.writeFileSync(path.join(__dirname, '..', 'data', filename), code, 'utf8');
  console.log('Saved ' + filename + ' with ' + items.length + ' entries.');
}

console.log('Ready to write datasets');
