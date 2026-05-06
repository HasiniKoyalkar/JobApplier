// Custom batch apply script
import { execSync } from 'child_process';
import fs from 'fs';

const jobs = JSON.parse(fs.readFileSync('data/scan_results.json', 'utf8'));
const topJobs = jobs.slice(0, 5);

console.log(`🚀 Applying to ${topJobs.length} top matches...`);

topJobs.forEach((job, i) => {
  console.log(`\n📌 ${i+1}. ${job.title} @ ${job.company}`);
  console.log(`   /evaluate ${job.url}`);
});