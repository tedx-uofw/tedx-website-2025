import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const checkPages = require('check-pages');

const options = {
  pageUrls: [
    'http://localhost:5173',
    'http://localhost:5173/team',
    'http://localhost:5173/speakers',
    'http://localhost:5173/about',
    'http://localhost:5173/sponsors'
  ],
  checkLinks: true,
  onlySameDomain: true,
  queryHashes: false,
  noRedirects: false,
  noLocalLinks: false,
  linksToIgnore: [
    // Add any links you want to ignore
  ],
  checkXhtml: true,
  checkCaching: true,
  checkCompression: true,
  maxResponseTime: 1000,
  userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  summary: true
};

checkPages(console, options, function(err, results) {
  if (err) {
    console.error('Error: ' + err);
    return;
  }
  
  console.log('\n----- SEO and Crawlability Report -----');
  
  // Report on broken links
  if (results.failed > 0) {
    console.log('\nBroken links or issues found:');
    results.pages.forEach(page => {
      if (page.failures && page.failures.length > 0) {
        console.log(`\n${page.url}:`);
        page.failures.forEach(failure => {
          console.log(`  - ${failure}`);
        });
      }
    });
  }
  
  // Check for meta tags on main page
  const mainPage = results.pages.find(p => p.url === 'http://localhost:5173');
  if (mainPage && mainPage.response && mainPage.response.body) {
    const body = mainPage.response.body;
    
    console.log('\nSEO Meta Tags Check:');
    const missingTags = [];
    
    if (!body.includes('<meta name="description"')) {
      missingTags.push('Description meta tag');
    }
    
    if (!body.includes('<meta name="keywords"')) {
      missingTags.push('Keywords meta tag');
    }
    
    if (!body.includes('<meta property="og:')) {
      missingTags.push('Open Graph meta tags');
    }
    
    if (!body.includes('<meta name="twitter:')) {
      missingTags.push('Twitter Card meta tags');
    }
    
    if (!body.includes('<link rel="canonical"')) {
      missingTags.push('Canonical link tag');
    }
    
    if (missingTags.length > 0) {
      console.log('Missing important meta tags:');
      missingTags.forEach(tag => console.log(`  - ${tag}`));
    } else {
      console.log('All important meta tags are present.');
    }
  }
  
  console.log('\nSummary:');
  console.log(`- Total pages checked: ${results.pages.length}`);
  console.log(`- Total links checked: ${results.total}`);
  console.log(`- Passed checks: ${results.passed}`);
  console.log(`- Failed checks: ${results.failed}`);
  console.log(`- Average response time: ${results.averageResponseTime}ms`);
}); 