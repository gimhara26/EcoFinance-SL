# EcoFinance SL

## AI-Powered Sustainable Finance and ESG Management System

EcoFinance SL is a web-based **Sustainable Finance and ESG Management System** designed to help organizations monitor their environmental impact, calculate carbon emissions, evaluate ESG performance, and generate sustainability reports.

The system combines **carbon footprint calculation, ESG assessment, sustainability reporting, and AI-powered analysis** to provide organizations with meaningful insights and recommendations for improving their sustainability performance.

---

# Table of Contents

* [Project Overview](#-project-overview)
* [Objectives](#-objectives)
* [Key Features](#-key-features)
* [System Architecture](#-system-architecture)
* [Application Workflow](#-application-workflow)
* [Technology Stack](#-technology-stack)
* [Project Structure](#-project-structure)
* [Database Architecture](#-database-architecture)
* [Carbon Footprint Management](#-carbon-footprint-management)
* [ESG Assessment](#-esg-assessment)
* [ESG Scoring System](#-esg-scoring-system)
* [ESG Remarks and Recommendations](#-esg-remarks-and-recommendations)
* [Dashboard](#-dashboard)
* [Sustainability Reports](#-sustainability-reports)
* [AI Integration](#-ai-integration)
* [AI Workflow](#-ai-workflow)
* [API Documentation](#-api-documentation)
* [Installation](#-installation)
* [Database Setup](#-database-setup)
* [Environment Configuration](#-environment-configuration)
* [Running the Application](#-running-the-application)
* [Security](#-security)
* [Future Enhancements](#-future-enhancements)
* [Academic Value](#-academic-value)
* [License](#-license)

---

# Project Overview

Organizations increasingly need to understand their environmental, social, and governance performance.

Traditional sustainability assessment methods often depend on:

* Manual calculations
* Spreadsheets
* Separate reporting systems
* Manual interpretation of sustainability data
* Limited recommendations

EcoFinance SL addresses these problems by providing a centralized web application where organizations can:

1. Register and manage their company information.
2. Enter operational and carbon-related information.
3. Calculate carbon emissions.
4. Enter ESG information.
5. Automatically calculate ESG scores.
6. Classify ESG performance.
7. Generate remarks and recommendations.
8. View sustainability performance through dashboards.
9. Generate sustainability reports.
10. Use AI to interpret sustainability information and generate professional recommendations.

---

# Objectives

The main objectives of EcoFinance SL are:

* To provide a centralized sustainability management platform.
* To calculate organizational carbon emissions.
* To assess Environmental, Social, and Governance performance.
* To provide meaningful ESG performance classifications.
* To automatically generate sustainability recommendations.
* To reduce manual sustainability reporting.
* To provide visual ESG performance dashboards.
* To generate structured sustainability reports.
* To integrate Artificial Intelligence for advanced sustainability analysis.
* To support organizations in making sustainability-related decisions.

---

# Key Features

## User Authentication

* User registration
* User login
* JWT-based authentication
* Password hashing
* Protected API endpoints
* Logout functionality

---

## Company Management

Organizations can manage their company information.

The system associates each company with its authenticated user.

---

## Carbon Footprint Management

Users can enter information related to:

* Electricity consumption
* Fuel consumption
* Transportation
* Waste generation

The system calculates the total estimated carbon emission.

---

## ESG Input

The ESG module collects information from three major areas.

### Environmental

* Renewable energy usage
* Recycling rate
* Environmental policy

### Social

* Employee satisfaction
* Employee training
* Gender diversity
* Community projects

### Governance

* Board meetings
* Ethics policy
* Compliance
* Risk management

---

# ESG Assessment

EcoFinance SL calculates three main ESG categories:

```text
Environmental
      +
Social
      +
Governance
      ↓
Overall ESG Score
```

Each category is scored between:

```text
0 – 100
```

The overall ESG score is calculated using the three category scores.

---

#  ESG Scoring System

|    Score | Status    |
| -------: | --------- |
| 90 – 100 | Excellent |
|  75 – 89 | Good      |
|  60 – 74 | Fair      |
|  40 – 59 | Poor      |
|   0 – 39 | Critical  |

### Example

```text
Environmental : 85
Social        : 70
Governance    : 90

Overall       : 81.67

Status        : Good
```

---

# ESG Remarks

The system automatically generates remarks according to the ESG score.

### Environmental

**Excellent**

> Excellent environmental performance. Keep maintaining sustainable practices.

**Good**

> Good environmental practices. Continue improving renewable energy and recycling.

**Fair**

> Environmental performance is acceptable but needs improvement.

**Poor**

> Environmental performance requires significant improvement.

**Critical**

> Environmental impact is very high. Immediate action is recommended.

---

### Social

The system provides feedback related to:

* Employee welfare
* Training
* Community engagement
* Social responsibility

---

### Governance

The system provides feedback related to:

* Governance practices
* Compliance
* Ethics
* Risk management

---

#  ESG Recommendations

The system automatically identifies areas requiring improvement.

For example:

```text
Increase renewable energy usage and improve recycling.

Improve employee training and community engagement.

Strengthen governance policies and compliance.
```

If the organization achieves strong performance across all categories:

```text
Maintain your excellent ESG performance.
```

---

#  ESG Dashboard

The ESG Dashboard provides a visual representation of sustainability performance.

It displays:

* Environmental score
* Social score
* Governance score
* Overall ESG score
* ESG breakdown
* Progress indicators
* Latest ESG remarks

The dashboard uses **Chart.js** for graphical visualization.

---

#  Sustainability Reports

The reporting module allows users to generate sustainability reports using the latest available:

* Company information
* Carbon data
* ESG data
* ESG scores
* ESG remarks
* Recommendations

A report contains sections such as:

```text
Company Information

Carbon Analysis

Electricity Usage
Fuel Usage
Transport Distance
Waste
Total Carbon Emission

ESG Performance

Environmental Score
Social Score
Governance Score
Overall ESG Score

ESG Remarks

Recommendations

Conclusion
```

Generated reports are stored in the database.

Users can:

* View generated reports
* View report history
* Open reports
* Download reports

---

#  AI Integration

A major future component of EcoFinance SL is the integration of Artificial Intelligence.

The AI module is designed to transform numerical sustainability data into meaningful human-readable analysis.

Instead of only showing:

```text
Environmental Score: 70
Social Score: 65
Governance Score: 80
```

the AI can provide:

```text
The organization demonstrates moderate environmental
performance. Renewable energy adoption and recycling
practices should be improved to reduce environmental impact.
```

---

#  AI Objectives

The AI component aims to:

* Automate sustainability analysis.
* Generate human-readable reports.
* Provide intelligent recommendations.
* Produce executive summaries.
* Identify strengths and weaknesses.
* Reduce manual interpretation.
* Support sustainability decision-making.

---

#  AI Architecture

The proposed AI architecture is:

```text
Company Data
      │
      ▼
Carbon Data
      │
      ▼
Carbon Calculator
      │
      ▼
ESG Input Data
      │
      ▼
ESG Calculator
      │
      ▼
Prompt Builder
      │
      ▼
AI / LLM Service
      │
      ├───────────────┐
      ▼               ▼
Analysis       Recommendations
      │               │
      └───────┬───────┘
              ▼
       Sustainability
            Report
              │
              ▼
        Report Formatter
              │
              ▼
          PDF Generator
              │
              ▼
       Reports Database
```

---

#  AI Workflow

The AI report generation workflow is:

### Step 1 — User Input

The organization submits:

* Company information
* Business information
* Carbon data
* ESG information

### Step 2 — Carbon Calculation

The backend calculates total carbon emissions.

### Step 3 — ESG Calculation

The backend calculates:

* Environmental score
* Social score
* Governance score
* Overall ESG score

### Step 4 — Data Collection

The system collects the calculated information.

### Step 5 — Prompt Generation

A controlled prompt is created using the organization's actual data.

### Step 6 — AI Analysis

The AI analyzes the supplied information.

### Step 7 — Report Generation

The AI produces:

* Executive summary
* Environmental analysis
* Social analysis
* Governance analysis
* Strengths
* Weaknesses
* Recommendations
* Improvement priorities
* Conclusion

### Step 8 — Validation

The application validates the AI output before saving it.

### Step 9 — Storage

The generated report is stored in the database.

---

#  AI Design Principle

The AI should **not replace the existing calculation system**.

The recommended architecture is:

```text
Python Backend
      │
      ├── Carbon Calculation
      │
      └── ESG Calculation
                │
                ▼
             AI Model
                │
                ├── Interpretation
                ├── Recommendations
                └── Report Writing
```

Therefore:

> **The backend calculates the facts, while AI interprets those facts.**

This reduces the possibility of AI generating incorrect numerical results.

---

#  Prompt Engineering

The AI module should use controlled prompts.

Example system prompt:

```text
You are a professional sustainability consultant.

Analyze the sustainability data supplied by the application.

Use only the information provided.

Do not invent numerical values.

Provide professional and practical sustainability recommendations.

Structure the response into:
1. Executive Summary
2. Environmental Analysis
3. Social Analysis
4. Governance Analysis
5. Strengths
6. Areas for Improvement
7. Recommendations
8. Conclusion
```

---

#  AI Service Architecture

The backend can be organized as:

```text
services/
│
├── esg_service.py
│
├── ai_service.py
│
├── prompt_service.py
│
└── report_service.py
```

### `esg_service.py`

Responsible for:

* ESG calculations
* Score classification
* ESG remarks
* Recommendations

### `prompt_service.py`

Responsible for:

* Building AI prompts
* Preparing structured sustainability data
* Controlling AI input

### `ai_service.py`

Responsible for:

* Connecting to the selected AI model
* Sending prompts
* Receiving responses
* Handling AI errors

### `report_service.py`

Responsible for:

* Formatting reports
* Saving reports
* Preparing PDF documents

---

# 🔌 API Architecture

EcoFinance SL follows a REST-style API architecture.

## Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

## Company

```text
GET    /api/company/
POST   /api/company/
PUT    /api/company/
```

## Carbon

```text
GET    /api/carbon/
POST   /api/carbon/
```

## ESG

```text
POST   /api/esg/
GET    /api/esg/
GET    /api/esg/latest
```

## Dashboard

```text
GET /api/dashboard/
```

## Reports

```text
POST /api/reports/
GET  /api/reports/
GET  /api/reports/download/<report_id>
```

## Profile

```text
GET /api/profile/
PUT /api/profile/
```

---

# 🛠️ Technology Stack

## Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* Font Awesome
* Chart.js

## Backend

* Python
* Flask
* Flask-SQLAlchemy
* Flask-CORS
* Flask-JWT-Extended
* Flask-Bcrypt

## Database

* MySQL
* PyMySQL

## AI

The AI layer can be integrated using a suitable Large Language Model API.

The AI provider should be configured through environment variables rather than hard-coded API keys.

---

#  Project Structure

```text
EcoFinance-SL/
│
├── backend/
│   │
│   ├── app.py
│   ├── config.py
│   ├── database.py
│   ├── requirements.txt
│   │
│   ├── models/
│   │   ├── user.py
│   │   ├── company.py
│   │   ├── carbon.py
│   │   ├── esg.py
│   │   └── report.py
│   │
│   ├── routes/
│   │   ├── auth.py
│   │   ├── company.py
│   │   ├── carbon.py
│   │   ├── esg.py
│   │   ├── dashboard.py
│   │   ├── reports.py
│   │   └── profile.py
│   │
│   └── services/
│       ├── esg_service.py
│       ├── ai_service.py
│       ├── prompt_service.py
│       └── report_service.py
│
├── frontend/
│   │
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── company.html
│   ├── input.html
│   ├── esg-input.html
│   ├── esg-dashboard.html
│   ├── reports.html
│   └── profile.html
│
│   ├── css/
│   │   ├── style.css
│   │   └── dashboard.css
│   │
│   └── js/
│       ├── auth.js
│       ├── dashboard.js
│       ├── carbon.js
│       ├── esg.js
│       ├── reports.js
│       └── profile.js
│
├── database/
│   └── database.sql
│
├── .env
├── .gitignore
└── README.md
```

---

#  Database Architecture

The database stores the main information required by the platform.

Major entities include:

```text
Users
  │
  ▼
Companies
  │
  ├───────────────┐
  ▼               ▼
Carbon Records   ESG Inputs
  │               │
  └───────┬───────┘
          ▼
      ESG Scores
          │
          ▼
        Reports
```

### Main tables

* `users`
* `companies`
* `carbon_records`
* `esg_inputs`
* `esg_scores`
* `reports`

---

#  Security

EcoFinance SL implements several security mechanisms.

## JWT Authentication

Protected API endpoints require:

```text
Authorization: Bearer <JWT_TOKEN>
```

## Password Security

Passwords are hashed using:

```text
Flask-Bcrypt
```

## Environment Variables

Sensitive information should be stored in:

```text
.env
```

and never committed to GitHub.

Example:

```env
DATABASE_URL=mysql+pymysql://root:YOUR_PASSWORD@localhost/ecofinance_sl
JWT_SECRET_KEY=your_secret_key
AI_API_KEY=your_ai_api_key
```

---

#  Installation

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/EcoFinance-SL.git
```

```bash
cd EcoFinance-SL
```

---

#  2. Create Virtual Environment

Windows:

```bash
python -m venv venv
```

Activate:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
python3 -m venv venv
```

```bash
source venv/bin/activate
```

---

#  3. Install Dependencies

```bash
pip install -r requirements.txt
```

Current backend dependencies include:

```text
Flask
Flask-Cors
Flask-SQLAlchemy
Flask-JWT-Extended
Flask-Bcrypt
PyMySQL
python-dotenv
cryptography
```

---

#  Database Setup

Create the MySQL database:

```sql
CREATE DATABASE ecofinance_sl;
```

Import the project database schema if a SQL schema is provided:

```bash
mysql -u root -p ecofinance_sl < database/database.sql
```

Alternatively, the Flask application can create missing tables using:

```python
with app.app_context():
    db.create_all()
```

---

#  Environment Configuration

Create a `.env` file.

Example:

```env
DATABASE_URL=mysql+pymysql://root:YOUR_PASSWORD@localhost/ecofinance_sl

JWT_SECRET_KEY=your_secure_secret_key

AI_API_KEY=your_ai_api_key
```

Replace the placeholder values with your actual configuration.

---

#  Running the Backend

Start the Flask application:

```bash
python app.py
```

The API will be available at:

```text
http://127.0.0.1:5000
```

Test the API:

```text
http://127.0.0.1:5000/
```

Expected response:

```json
{
    "project": "EcoFinance SL",
    "status": "Running Successfully"
}
```

---

#  Running the Frontend

The frontend can be served using **VS Code Live Server** or another local web server.

Example:

```text
http://localhost:5500
```

The frontend communicates with the Flask API:

```text
Frontend
   │
   ▼
http://127.0.0.1:5000/api/
```

---

#  Example ESG Evaluation

Example input:

```text
Carbon Emission      : 3106.50
Renewable Energy    : 40%
Recycling Rate      : 60%

Employee Satisfaction: 70
Training Hours       : 50
Gender Diversity     : 60

Board Meetings       : 10
Ethics Policy        : Yes
Compliance            : Yes
Risk Management      : Yes
```

The system calculates the ESG performance and generates:

```text
Environmental Score
Social Score
Governance Score
Overall ESG Score
```

The results are then classified into:

```text
Excellent
Good
Fair
Poor
Critical
```

---

#  Report Generation Architecture

The report system works as follows:

```text
User
 │
 ▼
Generate Report
 │
 ▼
Authentication
 │
 ▼
Company
 │
 ├── Latest Carbon Data
 │
 └── Latest ESG Data
 │
 ▼
Report Generator
 │
 ▼
Report Content
 │
 ▼
Database
 │
 ▼
Report History
 │
 └── Download
```

---

#  AI-Powered Report Architecture

The future AI report generation system will extend the existing report module.

```text
Latest Company Data
        │
        ▼
Latest Carbon Data
        │
        ▼
Latest ESG Data
        │
        ▼
      AI Prompt
        │
        ▼
    AI / LLM API
        │
        ▼
AI Sustainability Analysis
        │
        ├── Executive Summary
        ├── Environmental Analysis
        ├── Social Analysis
        ├── Governance Analysis
        ├── Strengths
        ├── Weaknesses
        └── Recommendations
        │
        ▼
Report Formatter
        │
        ▼
PDF Report
        │
        ▼
Database
```

---

#  AI Security Considerations

The AI implementation should include:

### Input Validation

User-supplied data must be validated before being included in AI prompts.

### Prompt Injection Protection

User input should not be allowed to override the system instructions.

### Hallucination Reduction

The AI should be instructed to:

```text
Use only the supplied data.
Do not invent numerical values.
Do not create unsupported facts.
```

### API Key Protection

AI API keys must be stored in `.env`.

Never write:

```python
API_KEY = "actual-secret-key"
```

inside source code.

### Data Privacy

Only the minimum required business information should be sent to the AI service.

---

#  Future Enhancements

## AI Features

* AI sustainability consultant
* AI chatbot
* AI-generated sustainability reports
* AI-generated improvement plans
* Industry benchmarking
* Sustainability forecasting
* Carbon emission prediction
* Automated ESG recommendations
* Multi-language sustainability reports

## Platform Features

* Admin dashboard
* Company benchmarking
* Monthly ESG trends
* Yearly ESG comparison
* Email report delivery
* Scheduled reports
* Advanced analytics
* Cloud deployment
* Mobile-responsive improvements

---

#  Documentation Structure

The complete project documentation can be organized into multiple volumes:

```text
Project Documentation
│
├── Volume 1
│   └── Technical Design Document
│       Backend and Database Redesign
│
├── Volume 2
│   └── Technical Design Document
│       AI-Powered Sustainability Assessment
│       and Report Generation
│
├── Volume 3
│   └── API Documentation
│
├── Volume 4
│   └── Database Design
│       ER Diagram
│       Database Schema
│
└── Volume 5
    └── User Manual
```

---

#  Academic Purpose

EcoFinance SL demonstrates the practical application of:

* Web application development
* REST API development
* Relational database design
* Authentication and authorization
* Carbon emission calculation
* ESG scoring
* Data visualization
* Automated reporting
* Artificial Intelligence
* Sustainability management

The project demonstrates how a traditional sustainability management platform can evolve into an **AI-assisted sustainability decision-support system**.

---

#  Project Evolution

The system can be viewed as an evolution through three stages:

### Stage 1 — Data Collection

```text
Company
   ↓
Carbon Data
   ↓
ESG Data
```

### Stage 2 — Automated Assessment

```text
Carbon Data
   ↓
Carbon Calculation

ESG Data
   ↓
ESG Calculation
   ↓
Score + Status + Remarks
```

### Stage 3 — AI-Assisted Sustainability Management

```text
Carbon Data
      +
ESG Data
      +
Company Data
      ↓
      AI
      ↓
Analysis
      +
Recommendations
      +
Sustainability Report
```

---

#  Contribution

Contributions and improvements are welcome.

To contribute:

```bash
git checkout -b feature/new-feature
```

Make your changes and commit:

```bash
git add .
git commit -m "Add new feature"
```

Push the branch:

```bash
git push origin feature/new-feature
```

Then create a Pull Request.

---

#  Important

Before pushing the project to GitHub, make sure sensitive files are excluded.

Recommended `.gitignore`:

```text
venv/
__pycache__/
*.pyc
.env
.idea/
.vscode/
```

Never upload:

```text
.env
database passwords
JWT secret keys
AI API keys
private credentials
```

---

#  License

This project is developed for **educational and academic purposes**.

You may modify and extend the project according to your project requirements.

---

#  EcoFinance SL

**Sustainable Finance • Carbon Management • ESG Assessment • AI-Powered Sustainability**

> Turning sustainability data into meaningful decisions.
