const fs = require('fs');
const path = require('path');

function replaceLinkButtonNesting(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace single Button inside Link
  const regex = /<Link href=\{?([^}]+)\}?(?:\s+className="[^"]*")?>\s*<Button([^>]*)>([\s\S]*?)<\/Button>\s*<\/Link>/g;
  
  const newContent = content.replace(regex, (match, href, buttonAttrs, buttonContent) => {
    return `<Button asChild${buttonAttrs}>\n  <Link href={${href}}>${buttonContent}</Link>\n</Button>`;
  });

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

const dir = 'artifacts/chris-tech/src';
function walk(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      replaceLinkButtonNesting(fullPath);
    }
  }
}

walk(dir);
