const fs = require('fs');
let content = fs.readFileSync('js/app.js', 'utf8');
content = content.replace(/\/\/ ==========================================\s*\n\/\/ FULL PAGE FAN CLUB & LIVE CHAT[\s\S]*$/, '');
fs.writeFileSync('js/app.js', content);
