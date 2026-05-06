import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resultsPath = path.join(__dirname, '..', 'data', 'scan_results.json');

if (!fs.existsSync(resultsPath)) {
  console.log('❌ Run npm run scan first');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
const jobs = data.jobs;

// Create CSV
let csv = 'Company,Title,Location,URL\n';
jobs.forEach(job => {
  csv += `"${job.company}","${job.title}","${job.location}","${job.url}"\n`;
});

// Save
const csvPath = path.join(__dirname, '..', 'data', 'jobs.csv');
fs.writeFileSync(csvPath, csv);
console.log(`✅ Exported ${jobs.length} jobs to data/jobs.csv`);