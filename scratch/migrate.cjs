const fs = require('fs');
const path = require('path');

function migrateCollege(collegeId) {
  const srcDir = path.join(__dirname, '..', 'src', 'tier3', 'content', 'colleges', collegeId);
  if (!fs.existsSync(srcDir)) {
    console.log(`Source directory for ${collegeId} does not exist. Skipping.`);
    return;
  }

  const outDir = path.join(__dirname, '..', 'src', 'colleges', collegeId);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.json'));
  
  const content = {};
  let theme = {};

  files.forEach(file => {
    const key = file.replace('.json', '');
    const data = JSON.parse(fs.readFileSync(path.join(srcDir, file), 'utf8'));
    
    if (key === 'theme') {
      theme = data;
    } else if (key === 'college') {
      content.college = data;
    } else {
      content[key] = data;
    }
  });

  const contentJs = `const ${collegeId}Content = ${JSON.stringify(content, null, 2)};\n\nexport default ${collegeId}Content;\n`;
  fs.writeFileSync(path.join(outDir, 'content.js'), contentJs);

  const themeJs = `const ${collegeId}Theme = ${JSON.stringify(theme, null, 2)};\n\nexport default ${collegeId}Theme;\n`;
  fs.writeFileSync(path.join(outDir, 'theme.js'), themeJs);
  
  console.log(`Migrated ${collegeId}`);
}

migrateCollege('teja');
migrateCollege('cognizant');
migrateCollege('gitam'); // Will skip since it doesn't exist in tier3

// For GITAM, let's just clone cognizant for now, since we need scaffold config
const gitamOutDir = path.join(__dirname, '..', 'src', 'colleges', 'gitam');
if (!fs.existsSync(gitamOutDir)) fs.mkdirSync(gitamOutDir, { recursive: true });
if (!fs.existsSync(path.join(gitamOutDir, 'content.js'))) {
  fs.writeFileSync(path.join(gitamOutDir, 'content.js'), `const gitamContent = {\n  id: "gitam",\n  college: { name: "GITAM Junior College", tagline: "Learn. Grow. Succeed." },\n  pages: { home: { sections: [] } },\n  theme: {}\n};\nexport default gitamContent;\n`);
}
if (!fs.existsSync(path.join(gitamOutDir, 'theme.js'))) {
  fs.writeFileSync(path.join(gitamOutDir, 'theme.js'), `const gitamTheme = {};\nexport default gitamTheme;\n`);
}
