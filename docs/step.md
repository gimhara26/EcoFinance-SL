Perfect. I actually prefer starting from a clean frontend. Your backend already contains the business logic, so we can build a modern frontend around it instead of trying to fit new ideas into the old code.

## Project Goal

Build a **modern Sustainability Management Dashboard** using:

- **Frontend:** HTML + Tailwind CSS + Vanilla JavaScript (modular)
- **Backend:** Your existing Flask API
- **Authentication:** JWT
- **Architecture:** Modular, maintainable, and easy to extend

---

# Final Project Structure

I recommend this structure from the beginning:

```text
frontend/
│
├── index.html                 # Redirects to login or dashboard
├── login.html
├── register.html
│
├── assets/
│   ├── css/
│   │   ├── common.css
│   │   ├── login.css
│   │   └── dashboard.css
│   │
│   ├── js/
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── layout.js
│   │   ├── helpers.js
│   │   ├── config.js
│   │   └── charts.js
│   │
│   └── images/
│
├── components/
│   ├── sidebar.html
│   ├── header.html
│   ├── footer.html
│   ├── loader.html
│   └── modal.html
│
└── dashboard/
    │
    ├── dashboard.html
    │
    ├── company/
    │   └── company.html
    │
    ├── business/
    │   ├── new.html
    │   └── history.html
    │
    ├── esg/
    │   ├── new.html
    │   └── history.html
    │
    ├── reports/
    │   ├── generate.html
    │   └── reports.html
    │
    └── profile/
        └── profile.html
```

---

# Navigation

```
Login

↓

Dashboard
```

Sidebar:

```
Dashboard

Company

Data Entry
    Business Data
    ESG Data

Analytics
    Business History
    ESG History

Reports
    Generate Report
    All Reports

Profile

Logout
```

---

# Development Phases

## Phase 1

Authentication

```
✔ Login

✔ Register

✔ JWT

✔ Logout

✔ Route Protection
```

---

## Phase 2

Dashboard

```
Summary Cards

Charts

Quick Actions

Latest Reports
```

---

## Phase 3

Company

```
View

Update
```

---

## Phase 4

Business

```
New Entry

History
```

---

## Phase 5

ESG

```
New Assessment

History
```

---

## Phase 6

Reports

```
Generate

View

Download PDF
```

---

## Phase 7

Profile

```
Update

Change Password
```

---

# API Structure

We'll map directly to your Flask backend:

```
POST /api/auth/login

POST /api/auth/register

GET /api/dashboard

GET /api/company
PUT /api/company

POST /api/business
GET /api/business/history

POST /api/esg
GET /api/esg/history

POST /api/reports/generate
GET /api/reports
GET /api/reports/<id>
GET /api/reports/download/<id>

GET /api/profile
PUT /api/profile
POST /api/profile/change-password
```

---

# One Rule

We'll use **one shared API client**.

Every page will use:

```
assets/js/api.js
```

Nobody calls `fetch()` directly.

Instead:

```javascript
await api.get("/dashboard");

await api.post("/business", data);

await api.put("/company", data);
```

This keeps networking, authentication, and error handling centralized.

---

# How We'll Work

I suggest we build this like a real software project rather than jumping between pages.

### Sprint 1 – Foundation

- Project folder structure
- Common CSS
- Tailwind setup
- Shared JavaScript (`config.js`, `api.js`, `auth.js`, `layout.js`, `helpers.js`)
- Reusable components (`sidebar.html`, `header.html`)

### Sprint 2 – Authentication

- Login page
- Register page
- JWT storage
- Route protection
- Logout

### Sprint 3 – Dashboard

- Dashboard UI
- Connect to `/api/dashboard`

…and continue module by module.

This approach gives you a clean, maintainable application where every new feature builds on a solid foundation instead of requiring later refactoring.
