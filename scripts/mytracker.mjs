import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const trackerPath = path.join(__dirname, '..', 'data', 'my_applications.json');

// Initialize tracker if it doesn't exist
if (!fs.existsSync(trackerPath)) {
  fs.writeFileSync(trackerPath, JSON.stringify({ applications: [] }, null, 2));
}

const tracker = JSON.parse(fs.readFileSync(trackerPath, 'utf8'));

const command = process.argv[2];
const company = process.argv[3];
const status = process.argv[4];

if (command === 'add' && company && status) {
  tracker.applications.push({
    company: company,
    status: status,
    date: new Date().toISOString().split('T')[0]
  });
  fs.writeFileSync(trackerPath, JSON.stringify(tracker, null, 2));
  console.log(`✅ Added ${company} - ${status}`);
} 
else if (command === 'list') {
  console.log('\n📋 MY APPLICATIONS:\n');
  tracker.applications.forEach((app, i) => {
    console.log(`${i+1}. ${app.company} - ${app.status} (${app.date})`);
  });
  console.log(`\nTotal: ${tracker.applications.length} applications`);
}
else {
  console.log(`
📌 MY TRACKER COMMANDS:
  npm run mytracker add "Company Name" "applied/interview/rejected/offer"
  npm run mytracker list
`);
}