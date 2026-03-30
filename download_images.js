const fs = require('fs');
const https = require('https');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function run() {
    try {
        // High quality reliable stock URLs from Unsplash CDN
        await download("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop", "public/images/business-meeting-real.jpg");
        await download("https://images.unsplash.com/photo-1556761175-5973dd0f32d7?q=80&w=2000&auto=format&fit=crop", "public/images/client-success-real.jpg");
        await download("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop", "public/images/data-abstract-real.jpg");
        await download("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop", "public/images/teamwork-clocks-real.jpg");
        await download("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000&auto=format&fit=crop", "public/images/london-finance-real.jpg");
        await download("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop", "public/images/legal-scales-real.jpg");
        await download("https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop", "public/images/ethics-privacy-real.jpg");
        await download("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop", "public/images/corporate-hq-real.jpg");
        console.log("Downloads completed successfully.");
    } catch (e) {
        console.error("Error downloading:", e);
    }
}
run();
