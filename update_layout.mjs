import fs from 'fs';
import path from 'path';

const newStyles = `            <style jsx global>{\`
                .section-title {
                    font-size: clamp(2rem, 3.5vw, 2.8rem);
                    font-weight: 800;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    color: var(--text);
                    letter-spacing: -0.02em;
                }
                .zig-grid, .zag-grid {
                    display: grid;
                    gap: 3rem;
                    align-items: center;
                    grid-template-columns: 1fr;
                }
                .card-highlight {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border);
                    padding: 1.5rem;
                    border-radius: 16px;
                    margin-top: 1.5rem;
                }
                @media (min-width: 1024px) {
                    .zig-grid, .zag-grid { 
                        grid-template-columns: repeat(12, 1fr); 
                        gap: 0;
                        align-items: center;
                    }
                    
                    /* Modern Overlapping Floating Cards Design */
                    .zig-grid > .gsap-img-wrapper {
                        grid-column: 1 / 9;
                        grid-row: 1;
                        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
                    }
                    .zig-grid > .gsap-reveal {
                        grid-column: 7 / 13;
                        grid-row: 1;
                        position: relative;
                        z-index: 10;
                        background: var(--bg);
                        padding: 3.5rem;
                        border-radius: 24px;
                        border: 1px solid var(--border);
                        box-shadow: 0 40px 80px rgba(0,0,0,0.6);
                        transform: translateY(40px);
                    }

                    .zag-grid > .gsap-reveal {
                        grid-column: 1 / 7;
                        grid-row: 1;
                        position: relative;
                        z-index: 10;
                        background: var(--bg);
                        padding: 3.5rem;
                        border-radius: 24px;
                        border: 1px solid var(--border);
                        box-shadow: 0 40px 80px rgba(0,0,0,0.6);
                        transform: translateY(-40px);
                    }
                    .zag-grid > .gsap-img-wrapper {
                        grid-column: 5 / 13;
                        grid-row: 1;
                        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
                    }
                }
            \`}</style>`;

const files = [
  'src/app/industries/financial-services/page.js',
  'src/app/industries/legal-professional-services/page.js',
  'src/app/industries/logistics-manufacturing/page.js'
];

for (const file of files) {
  const filePath = path.resolve(process.cwd(), file);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace everything between <style jsx global>{` and `}</style> inside the file
  content = content.replace(/<style jsx global>\{`[\s\S]*?`\}<\/style>/m, newStyles.trim());
  
  fs.writeFileSync(filePath, content);
  console.log('Layout updated for ' + file);
}
