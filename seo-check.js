import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

// URLs to check
const urls = [
  'http://localhost:5173',
  'http://localhost:5173/team',
  'http://localhost:5173/speakers',
  'http://localhost:5173/about',
  'http://localhost:5173/sponsors'
];

// Main function to check SEO
async function checkSEO() {
  console.log('\n🔍 Starting SEO and Web Crawler Friendliness Analysis\n');
  
  for (const url of urls) {
    try {
      console.log(`\n📄 Analyzing ${url}...`);
      
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        }
      });
      
      if (!response.ok) {
        console.log(`❌ Error fetching ${url}: ${response.status} ${response.statusText}`);
        continue;
      }
      
      const html = await response.text();
      const dom = new JSDOM(html);
      const document = dom.window.document;
      
      // 1. Check page title
      const title = document.querySelector('title');
      console.log(`📌 Title: ${title ? title.textContent : 'Missing'}`);
      console.log(`   ${title ? (title.textContent.length < 60 ? '✅' : '⚠️ Too long') : '❌ Missing'}`);
      
      // 2. Check meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      console.log(`📌 Meta Description: ${metaDescription ? truncate(metaDescription.getAttribute('content')) : 'Missing'}`);
      console.log(`   ${metaDescription ? '✅' : '❌ Missing'}`);
      
      // 3. Check for Open Graph tags
      const ogTags = document.querySelectorAll('meta[property^="og:"]');
      console.log(`📌 Open Graph Tags: ${ogTags.length} found`);
      console.log(`   ${ogTags.length > 0 ? '✅' : '❌ Missing'}`);
      
      // 4. Check headings structure
      const h1s = document.querySelectorAll('h1');
      console.log(`📌 H1 Tags: ${h1s.length} found`);
      console.log(`   ${h1s.length === 1 ? '✅' : (h1s.length === 0 ? '❌ Missing' : '⚠️ Multiple H1s')}`);
      
      // 5. Check img alt attributes
      const images = document.querySelectorAll('img');
      const imagesWithAlt = Array.from(images).filter(img => img.hasAttribute('alt') && img.getAttribute('alt') !== '');
      console.log(`📌 Images with alt text: ${imagesWithAlt.length}/${images.length}`);
      console.log(`   ${imagesWithAlt.length === images.length ? '✅' : '⚠️ Some images missing alt text'}`);
      
      // 6. Check for canonical link
      const canonical = document.querySelector('link[rel="canonical"]');
      console.log(`📌 Canonical Link: ${canonical ? canonical.getAttribute('href') : 'Missing'}`);
      console.log(`   ${canonical ? '✅' : '❌ Missing'}`);
      
      // 7. Check for robots meta tag
      const robotsMeta = document.querySelector('meta[name="robots"]');
      console.log(`📌 Robots Meta Tag: ${robotsMeta ? robotsMeta.getAttribute('content') : 'Missing'}`);
      console.log(`   ${robotsMeta ? '✅' : '⚠️ Missing (using default settings)'}`);
      
      // 8. Check for structured data
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
      console.log(`📌 Structured Data: ${structuredData.length} found`);
      console.log(`   ${structuredData.length > 0 ? '✅' : '❌ Missing'}`);
      
      // 9. Check for lang attribute on html tag
      const htmlTag = document.querySelector('html');
      const lang = htmlTag ? htmlTag.getAttribute('lang') : null;
      console.log(`📌 HTML Lang Attribute: ${lang || 'Missing'}`);
      console.log(`   ${lang ? '✅' : '❌ Missing'}`);
      
      // 10. Check for viewport meta tag
      const viewport = document.querySelector('meta[name="viewport"]');
      console.log(`📌 Viewport Meta Tag: ${viewport ? viewport.getAttribute('content') : 'Missing'}`);
      console.log(`   ${viewport ? '✅' : '❌ Missing'}`);
    } catch (error) {
      console.log(`❌ Error analyzing ${url}: ${error.message}`);
    }
  }
  
  console.log('\n🏁 SEO Analysis Complete\n');
}

// Helper function to truncate long strings
function truncate(str, maxLength = 50) {
  if (!str) return '';
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
}

// Run the analysis
checkSEO().catch(err => console.error('Error running analysis:', err)); 