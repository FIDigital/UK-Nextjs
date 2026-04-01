const fs = require('fs');
const path = require('path');

const techLogosHTML = `
<div className="gsap-img-reveal tech-logos-grid" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', background: 'var(--card-bg)', padding: '4rem', borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}>
    <img src="/images/aws.jpg" style={{ height: '50px', objectFit: 'contain', filter: 'brightness(1.5) contrast(1.2) grayscale(0.5)' }} alt="AWS" />
    <img src="/images/microsoft-azure-logo.webp" style={{ height: '50px', objectFit: 'contain', filter: 'brightness(1.5)' }} alt="Azure" />
    <img src="/images/logo_google_cloud.png" style={{ height: '50px', objectFit: 'contain', filter: 'brightness(1.5)' }} alt="Google Cloud" />
    <img src="/images/Anthropic-Logo.wine.png" style={{ height: '70px', objectFit: 'contain', filter: 'brightness(1.5)' }} alt="Claude Anthropic" />
    <img src="/images/zoho-logo.webp" style={{ height: '50px', objectFit: 'contain', filter: 'brightness(1.5)' }} alt="Zoho" />
</div>
`;

function getTargetImage(placeholderText, filePath) {
    const text = placeholderText.toLowerCase();
    
    // Tech Stack / Logos
    if (text.includes('tech stack') || text.includes('systems diagram') || text.includes('integration map')) {
        return 'TECH_LOGOS';
    }

    // Home Page specific
    if (text.includes('12-16 week')) return '/images/delivery-hero.png';
    if (text.includes('autonomous worker workflow')) return '/images/industries/home-workflow.jpg';
    if (text.includes('cross-discipline applications')) return '/images/industries/home-global.jpg';
    if (text.includes('build & operate')) return '/images/industries/home-ecosystem.jpg';
    if (text.includes('key sectors map')) return '/images/teamwork-clocks-real.jpg';
    if (text.includes('advanced logistics')) return '/images/industries/logistics-hero.jpg';
    if (text.includes('world map distribution')) return '/images/india-engineering.png';
    if (text.includes('uk engineering partnership')) return '/images/uk-india-synergy.png';
    if (text.includes('readiness assessment')) return '/images/industries/home-readiness.jpg';

    // Agent Patterns
    if (text.includes('problem')) {
        if (filePath.includes('finance')) return '/images/industries/finance-dw-problem.jpg';
        if (filePath.includes('legal')) return '/images/industries/legal-dw-problem.jpg';
        if (filePath.includes('operation')) return '/images/industries/ops-dw-problem.jpg';
        if (filePath.includes('sales')) return '/images/industries/sales-dw-problem.jpg';
        return '/images/business-meeting-real.jpg';
    }

    if (text.includes('case study - before/after')) return '/images/client-success-real.jpg';
    if (text.includes('case study overview')) {
        if (filePath.includes('sale')) return '/images/industries/sales-dw-roi.jpg';
        if (filePath.includes('finance')) return '/images/industries/finance-dw-roi.jpg';
        return '/images/client-success-real.jpg';
    }

    if (text.includes('security diagram')) return '/images/security-arch.png';
    if (text.includes('vertical timeline graphic: rules')) return '/images/reasoning-routing.png';
    if (text.includes('vertical timeline graphic: extraction')) return '/images/dual-cloud-arch.png';

    // Agent Specific Nodes
    if (filePath.includes('finance')) {
        if (text.includes('invoice workflow')) return '/images/industries/finance-dw-workflow.jpg';
        if (text.includes('expense & reconciliation')) return '/images/industries/finance-dw-recon.jpg';
        if (text.includes('business outcomes')) return '/images/industries/finance-dw-roi.jpg';
    }
    
    if (filePath.includes('legal')) {
        if (text.includes('contract review') || text.includes('due diligence')) return '/images/industries/legal-dw-workflow.jpg';
        if (text.includes('discovery engine')) return '/images/industries/legal-dw-discovery.jpg';
        if (text.includes('confidentiality')) return '/images/industries/legal-dw-secure.jpg';
    }

    if (filePath.includes('operation')) {
        if (text.includes('supply chain') || text.includes('warehouse')) return '/images/industries/ops-dw-supply.jpg';
        if (text.includes('predictive maintenance')) return '/images/industries/ops-dw-predictive.jpg';
        if (text.includes('downtime')) return '/images/industries/ops-dw-roi.jpg';
    }

    if (filePath.includes('sales')) {
        if (text.includes('workflow diagram')) return '/images/industries/sales-dw-workflow.jpg';
        if (text.includes('clean automated crm')) return '/images/industries/sales-dw-lead.jpg';
        if (text.includes('email sequence')) return '/images/cicd-pipeline.png';
        if (text.includes('seamless crm sync')) return '/images/model-agnostic.png';
        if (text.includes('n8n orchestration')) return '/images/reasoning-routing.png';
        if (text.includes('sequence map')) return '/images/cicd-pipeline-v2.png';
        if (text.includes('omnichannel')) return '/images/observability-realistic.png';
    }

    // Default fallback
    return '/images/dual-cloud-arch.png';
}

function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = false;

            // Find all instances of <div className="gsap-img-reveal" style={PlaceholderStyle}> [Image Placeholder: <text>] </div>
            // The style might be inline or a variable, minHeight might be there, etc.
            // A regex targeting the [Image Placeholder: <text>] specifically
            const placeholderRegex = /<div[^>]*className=["']gsap-img-reveal["'][^>]*>[\s]*\[(?:Image )?Placeholder:\s*(.*?)\][\s]*<\/div>/gi;
            // Another regex if they don't have the div, just the text
            const textOnlyRegex = /\[(?:Image )?Placeholder:\s*(.*?)\]/gi;

            let finalContent = content.replace(placeholderRegex, (match, p1) => {
                const imgPath = getTargetImage(p1, fullPath);
                
                if (imgPath === 'TECH_LOGOS') {
                    return techLogosHTML;
                }

                updated = true;
                return `
<div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
    <img src="${imgPath}" alt="${p1.replace(/"/g, '&quot;')}" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
</div>`.trim();
            });
            
            // Backup replace just in case the wrapper regex misses
            finalContent = finalContent.replace(textOnlyRegex, (match, p1) => {
                 // Check if it was already replaced by the wrapper regex
                 if (updated || match === "TECH_LOGOS") return match;
                 
                 const imgPath = getTargetImage(p1, fullPath);
                 if (imgPath === 'TECH_LOGOS') return techLogosHTML;
                 
                 return `
<div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
    <img src="${imgPath}" alt="${p1.replace(/"/g, '&quot;')}" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
</div>`.trim();
            });

            if (finalContent !== content) {
                fs.writeFileSync(fullPath, finalContent);
                console.log('Replaced placeholders in: ' + fullPath);
            }
        }
    }
}

processDirectory(path.resolve(process.cwd(), 'src/app'));

