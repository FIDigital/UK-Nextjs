import fs from 'fs';
import path from 'path';

const files = [
  'src/app/industries/financial-services/page.js',
  'src/app/industries/legal-professional-services/page.js',
  'src/app/industries/logistics-manufacturing/page.js'
];

for (const file of files) {
  const filePath = path.resolve(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    console.log(`Missing file: ${file}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the hardcoded 550px height with dynamic aspectRatio and dark background
  content = content.replace(
    /height: "550px", borderRadius: "32px"/g,
    'height: "auto", aspectRatio: "1.1", minHeight: "400px", borderRadius: "32px", background: "var(--card-bg)"'
  );
  
  // Replace objectFit: "cover" with objectFit: "contain"
  content = content.replace(/objectFit: "cover"/g, 'objectFit: "contain"');

  fs.writeFileSync(filePath, content);
  console.log(`Successfully updated ${file}`);
}
