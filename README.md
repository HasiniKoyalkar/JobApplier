# 🎯 Career-Ops India: Personalized AI Job Search Pipeline



## 🚀 What This Project Does

This is a **personalized fork** of Career-Ops India - an AI-powered job search pipeline that:

- Scans **Job Openings** (Razorpay, CRED, Zepto, Postman, Druva, etc.) via their official ATS APIs
- Evaluates my fit for each role using **Gemini AI** with an A-F scoring rubric
- Generates **tailored resumes** optimized for each job description
- Tracks applications with a **visual pipeline dashboard**

## 🛠️ My Customizations

I made several improvements to personalize this for my job search:

1. **Custom Scoring Weights** - Modified `config/profile.yml` to prioritize software engineering skills based on my target roles
2. **Resume Optimization** - Added quantified achievement templates that improved my ATS match rate
3. **Profile Configuration** - Customized salary expectations, preferred locations, and target roles for Indian job market

## 📊 Sample Output

Here's what the evaluation looks like for a real job:

```
Job: Software Engineer @ Druva
Score: B+ (85% match)

✅ Strong matches: Python, JavaScript, REST APIs
⚠️  Partial: Docker (basic exposure)
❌ Gaps: Kubernetes (learning)

Recommendation: APPLY WITH TAILORED RESUME
```

## 💻 Tech Stack

| Category | Technologies |
|:---|:---|
| Runtime | Node.js 18+ |
| AI | Google Gemini CLI (free tier) |
| Job Sources | Greenhouse, Lever, Ashby APIs |
| PDF Generation | Playwright |
| Tracking | JSON pipeline + dashboard |
| Version Control | Git + GitHub |

## 📁 Project Structure

```
career-ops-india/
├── config/
│   ├── profile.example.yml   # Template configuration
│   └── profile.yml           # My personalized settings
├── scripts/
│   ├── scan.mjs              # Job scanning module
│   └── dashboard.mjs         # Visual pipeline dashboard
├── data/
│   └── scan_results.json     # Cached job results
├── output/                   # Generated tailored resumes
├── cv.md                     # My resume (plain text)
└── README.md                 # This file
```

## 🔧 How to Run This (For Recruiters/Developers)

### Prerequisites

- Node.js 18+
- Google account (for Gemini CLI - free)
- Git

### Setup Instructions

```bash
# Clone my fork
git clone https://github.com/HasiniKoyalkar/JobApplier
cd JobApplier

# Install dependencies
npm install

# Copy and edit profile template
cp config/profile.example.yml config/profile.yml

# Add your resume to cv.md
notepad cv.md  # Windows
# or: nano cv.md  # Mac/Linux

# Run health check
npm run doctor

# Scan for jobs
npm run scan

# Launch Gemini AI evaluator
gemini

# Evaluate a job
/evaluate https://company.com/careers/job-id
```

### Available Commands

| Command | What It Does |
|:---|:---|
| `npm run scan` | Find jobs from 196 Indian companies |
| `npm run doctor` | Verify everything is configured correctly |
| `npm run dashboard` | Open visual application tracker |
| `npm run liveness` | Check if job links are still active |
| `gemini` | Launch AI evaluator |
| `/evaluate [url]` | Score a specific job (A-F) |
| `/pdf [company] [role]` | Generate tailored resume PDF |
| `/tracker` | Log applications to pipeline |
| `/pipeline` | View all tracked applications |
| `/batch [file]` | Evaluate multiple jobs at once |

## 🎯 What I Learned

Building and customizing this tool taught me:

- **ATS Systems** - How modern ATS platforms (Greenhouse, Lever, Ashby) structure job data and accept applications
- **LLM Prompt Engineering** - Designing structured prompts for consistent A-F scoring with explainable gap analysis
- **Production CLI Tools** - Building Node.js scripts with proper error handling and configuration management
- **Resume Optimization** - Moving beyond keyword matching to semantic understanding for better ATS scores
- **API Integration** - Working with multiple job board APIs without scraping

## 🔗 Useful Resources

- [Original Career-Ops Repository](https://github.com/santifer/career-ops)
- [Career-Ops India Fork](https://github.com/AnojSKunte/career-ops-india)
- [Google Gemini CLI Documentation](https://ai.google.dev/gemini-api/docs)

## 📌 Future Improvements

- [ ] Add support for 10 more Indian startups
- [ ] Build a web dashboard (currently CLI-only)
- [ ] Automate daily scans with GitHub Actions
- [ ] Add email notifications for new matching jobs

## 📫 Connect With Me

- **LinkedIn:** [hasini-koyalkar](https://www.linkedin.com/in/hasini-koyalkar-104b1b347/)
- **GitHub:** [HasiniKoyalkar](https://github.com/HasiniKoyalkar/)
- **Email:** hasinikoyalkar12@gmail.com

## ⭐ Acknowledgments

- Original author: [@santifer](https://github.com/santifer)
- India fork: [@AnojSKunte](https://github.com/AnojSKunte)
- Google Gemini team for the free CLI

*Built as part of my active job search — open to Software Engineering opportunities in Bangalore, Hyderabad, or Remote.*

---

⭐ Star this repo if you found it useful!
