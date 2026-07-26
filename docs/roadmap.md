Yes. This is actually the architecture I would recommend for your project. The key is to **separate data entry from data analysis/reporting**.

Instead of every page doing everything, think of your application as having two main areas.

## 1. Data Entry

This area is where users **create or update information**.

Menu:

```text
Dashboard

Company

Data Entry
    Business Data
    ESG Data

Profile
```

Purpose:

- Company details (entered once, updated occasionally)
- Monthly business data
- Monthly ESG data

Example workflow:

```text
Business Data

Reporting Year: 2026
Reporting Month: July

Electricity
Fuel
Transport
Waste

[ Save ]
```

When the user clicks **Save**:

```text
POST /api/business
```

The backend:

- Saves the record.
- Calculates carbon emissions.
- Stores the carbon result.

The user does **not** generate a report here.

---

## 2. Reports & Analytics

This area is read-only (except for generating reports).

Menu:

```text
Reports & Analytics

Dashboard

Business History

Carbon History

ESG History

Reports
```

Everything here is based on previously saved data.

For example:

### Business History

```text
Year   Month    Status

2026   July     Completed

2026   June     Completed

2026   May      Completed
```

Clicking **July** opens the saved business record.

---

### Carbon History

```text
Month

Electricity

Fuel

Transport

Waste

Total CO₂
```

No editing.

Only viewing.

---

### ESG History

```text
Month

Environmental

Social

Governance

Overall
```

Again,

No editing.

Only viewing.

---

### Reports

```text
Year

Month

Generate

View

Download PDF
```

Example:

```text
2026 July

[ Generate ]
```

Backend:

```text
POST /api/reports/generate
```

Then

```text
GET /api/reports
```

returns

```text
July Report

June Report

May Report
```

Each row

```text
View

Download
```

---

# Dashboard

Dashboard becomes a summary.

```text
Company

Latest ESG Score

Latest Carbon Emission

Latest Report

Quick Actions
```

Nothing is entered here.

---

# Backend Structure

I would organize the backend by responsibility rather than by screen.

```text
/api

auth
    login
    register

company
    GET
    PUT

business
    POST
    GET history
    GET by id

carbon
    GET history
    GET latest

esg
    POST
    GET history
    GET latest

reports
    POST generate
    GET list
    GET by id
    GET download

dashboard
    GET summary

profile
    GET
    PUT
```

---

# Frontend Structure

I would also separate the frontend into **Entry** and **Analytics**.

```text
dashboard/

Dashboard

Company

Data Entry
    Business
    ESG

Analytics
    Dashboard
    Business History
    Carbon History
    ESG History

Reports
    Generate Report
    All Reports

Profile
```

---

# Workflow

This becomes very simple for the user:

```text
Login
      │
      ▼
Dashboard
      │
      ▼
Company (first time only)
      │
      ▼
Business Data (monthly)
      │
      ▼
ESG Data (monthly)
      │
      ▼
Generate Report
      │
      ▼
View Report
      │
      ▼
Download PDF
```

The user never edits historical reports. Historical data is viewed through the Analytics section.

## One additional improvement

I recommend introducing the concept of a **reporting period** (Year + Month) as the central piece of the workflow. Every business record, ESG record, carbon calculation, and report should belong to a specific reporting period.

For example:

```text
Reporting Period
├── 2026-07
│   ├── Business Data
│   ├── Carbon Calculation
│   ├── ESG Assessment
│   └── Sustainability Report
│
├── 2026-08
│   ├── Business Data
│   ├── Carbon Calculation
│   ├── ESG Assessment
│   └── Sustainability Report
```

With this design, users always select a reporting period first, and all related data stays grouped together. It simplifies the UI, makes report generation straightforward, and scales naturally as companies accumulate data over multiple months and years.
