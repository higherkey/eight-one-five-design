import { readFileSync, writeFileSync } from 'node:fs';

const files = ['index.html', 'about.html', 'portfolio.html', 'contact.html', 'privacy.html', 'terms.html'];
const tabs = {
  'index.html': 'home',
  'about.html': 'about',
  'portfolio.html': 'portfolio',
  'contact.html': 'contact',
  'privacy.html': 'privacy',
  'terms.html': 'terms'
};

const titles = {
  'index.html': 'Home',
  'about.html': 'About Me',
  'portfolio.html': 'Portfolio',
  'contact.html': 'Contact',
  'privacy.html': 'Privacy Policy',
  'terms.html': 'Terms of Service'
};

files.forEach(file => {
  const content = readFileSync(file, 'utf-8');
  const mainStart = content.indexOf('<!-- ══════════════════════════ Main Content Canvas ══════════════════════════ -->');
  let actualStart = content.indexOf('<main', mainStart);
  if (actualStart === -1) actualStart = content.indexOf('<main');
  const mainEnd = content.lastIndexOf('</main>') + 7;
  
  if (actualStart !== -1 && mainEnd > 6) {
    const mainHtml = content.substring(actualStart, mainEnd);
    const newContent = `---
layout: layouts/base.njk
title: ${titles[file]}
activeTab: ${tabs[file]}
---
${mainHtml}
`;
    writeFileSync(file, newContent, 'utf-8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Failed to parse ${file}`);
  }
});
