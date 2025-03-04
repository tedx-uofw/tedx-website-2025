// Simple script to check SEO elements for the TEDx UofW site
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ROOT_DIR = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const BUILD_DIR = path.join(ROOT_DIR, 'build');

// Find index.html - check various locations
let indexHtmlPath = '';
const possibleLocations = [
  path.join(ROOT_DIR, 'index.html'),
  path.join(PUBLIC_DIR, 'index.html'),
  path.join(BUILD_DIR, 'index.html')
];

for (const location of possibleLocations) {
  if (fs.existsSync(location)) {
    indexHtmlPath = location;
    console.log(chalk.green(`Found index.html at ${location}`));
    break;
  }
}

if (!indexHtmlPath) {
  console.log(chalk.yellow('⚠️ index.html not found in any of the standard locations. SEO checking may be limited.'));
}

const PAGES = [
  { name: 'Index/Home', file: indexHtmlPath || path.join(ROOT_DIR, 'index.html') },
  { name: 'SEO Helper Page', file: path.join(PUBLIC_DIR, 'tedx-info.html') },
];

// Keywords to check for
const KEYWORDS = [
  'TEDx UofW',
  'University of Washington TEDx',
  'TEDx 2025',
  'TEDx Seattle',
  'UW TEDx',
  'Resonance',
];

// Check sitemap.xml
function checkSitemap() {
  console.log(chalk.blue('\n--- Checking sitemap.xml ---'));
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.log(chalk.red('❌ sitemap.xml not found'));
    return;
  }
  
  console.log(chalk.green('✅ sitemap.xml exists'));
  
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  // Check if major pages are listed
  const pages = ['/', '/about', '/team', '/speakers', '/sponsors'];
  let allPagesFound = true;
  
  pages.forEach(page => {
    if (!sitemap.includes(`https://resonance.tedxatuofw.com${page}`)) {
      console.log(chalk.red(`❌ Page "${page}" not found in sitemap`));
      allPagesFound = false;
    }
  });
  
  if (allPagesFound) {
    console.log(chalk.green('✅ All major pages found in sitemap'));
  }
}

// Check robots.txt
function checkRobotsTxt() {
  console.log(chalk.blue('\n--- Checking robots.txt ---'));
  const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
  
  if (!fs.existsSync(robotsPath)) {
    console.log(chalk.red('❌ robots.txt not found'));
    return;
  }
  
  console.log(chalk.green('✅ robots.txt exists'));
  
  const robots = fs.readFileSync(robotsPath, 'utf8');
  
  if (robots.includes('Sitemap:')) {
    console.log(chalk.green('✅ Sitemap is defined in robots.txt'));
  } else {
    console.log(chalk.red('❌ Sitemap not defined in robots.txt'));
  }
  
  if (robots.includes('User-agent: *') && robots.includes('Allow: /')) {
    console.log(chalk.green('✅ robots.txt is correctly allowing search engines'));
  } else {
    console.log(chalk.red('❌ robots.txt may not be correctly configured'));
  }
}

// Check HTML pages
function checkHtmlPages() {
  PAGES.forEach(page => {
    console.log(chalk.blue(`\n--- Checking ${page.name} ---`));
    
    if (!fs.existsSync(page.file)) {
      console.log(chalk.red(`❌ ${page.file} not found`));
      return;
    }
    
    const html = fs.readFileSync(page.file, 'utf8');
    
    // Check title
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    if (titleMatch) {
      console.log(chalk.green(`✅ Title: ${titleMatch[1]}`));
      
      // Check if keywords are in title
      const titleText = titleMatch[1];
      const foundKeywords = KEYWORDS.filter(keyword => titleText.includes(keyword));
      console.log(chalk.cyan(`ℹ️ Keywords in title: ${foundKeywords.join(', ') || 'None'}`));
    } else {
      console.log(chalk.red('❌ No title tag found'));
    }
    
    // Check meta description
    const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"/i);
    if (descMatch) {
      console.log(chalk.green(`✅ Meta description: ${descMatch[1].substring(0, 100)}...`));
      
      // Check keywords in description
      const descText = descMatch[1];
      const foundKeywords = KEYWORDS.filter(keyword => descText.includes(keyword));
      console.log(chalk.cyan(`ℹ️ Keywords in description: ${foundKeywords.join(', ') || 'None'}`));
    } else {
      console.log(chalk.red('❌ No meta description found'));
    }
    
    // Check for structured data
    if (html.includes('itemscope') || html.includes('itemtype') || html.includes('itemProp') || 
        html.includes('application/ld+json') || html.includes('@type')) {
      console.log(chalk.green('✅ Structured data found'));
      
      // Try to count how many schema types are defined
      const ldJsonMatches = html.match(/<script type="application\/ld\+json">/g);
      const typeMatches = html.match(/"@type":/g);
      
      if (ldJsonMatches || typeMatches) {
        const ldJsonCount = ldJsonMatches ? ldJsonMatches.length : 0;
        const typeCount = typeMatches ? typeMatches.length : 0;
        console.log(chalk.cyan(`ℹ️ Found ${ldJsonCount} JSON-LD blocks with ${typeCount} schema types`));
      }
    } else {
      console.log(chalk.red('❌ No structured data found'));
    }
    
    // Check for canonical tag
    if (html.includes('<link rel="canonical"')) {
      console.log(chalk.green('✅ Canonical tag found'));
    } else {
      console.log(chalk.red('❌ No canonical tag found'));
    }
    
    // Check for h1
    const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/is);
    if (h1Match) {
      console.log(chalk.green(`✅ H1 tag: ${h1Match[1].replace(/<.*?>/g, '').trim()}`));
    } else {
      console.log(chalk.red('❌ No H1 tag found'));
    }
    
    // Check for keywords in content
    const contentText = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                            .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                            .replace(/<[^>]+>/g, ' ')
                            .replace(/\s+/g, ' ')
                            .trim();
    
    console.log(chalk.cyan('\nKeyword frequencies:'));
    KEYWORDS.forEach(keyword => {
      // Create regex that is case insensitive and matches whole words
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = (contentText.match(regex) || []).length;
      let color = chalk.red;
      if (matches > 5) color = chalk.green;
      else if (matches > 0) color = chalk.yellow;
      
      console.log(color(`${keyword}: ${matches} occurrences`));
    });
  });
}

// Main function
function checkSEO() {
  console.log(chalk.bold.blue('\n===== TEDx UofW SEO Check ====='));
  checkSitemap();
  checkRobotsTxt();
  checkHtmlPages();
  console.log(chalk.bold.blue('\n===== SEO Check Complete =====\n'));
}

// Run the check
checkSEO(); 