const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components');

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/from '\.\.\/common\//g, "from './common/");
    fs.writeFileSync(p, content);
  }
});
console.log('Done');
