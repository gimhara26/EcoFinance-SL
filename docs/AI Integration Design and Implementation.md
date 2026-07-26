That's a good approach. I would actually separate your project into **two major technical deliverables**:

1. **Phase 1 – Backend & Database Redesign** (the document we're outlining now)
2. **Phase 2 – AI Integration Design and Implementation**

Keeping them separate makes the documentation cleaner and clearly distinguishes the platform redesign from the AI functionality.

## Suggested documentation structure

### Document 1

**Technical Design Document – Backend and Database Redesign**

- Existing Architecture
- Problems Identified
- Database Redesign
- Backend Redesign
- API Improvements
- Benefits
- Future Improvements

---

### Document 2

**Technical Design Document – AI-Powered Sustainability Assessment and Report Generation**

This document can focus entirely on the AI component.

Suggested contents:

## 1. Introduction

Purpose of integrating AI into EcoFinance SL.

Example:

> The AI module was introduced to automate sustainability analysis, improve report quality, and provide intelligent recommendations based on operational and ESG data submitted by organizations.

---

## 2. Objectives

- Automate sustainability analysis.
- Generate human-readable sustainability reports.
- Produce ESG recommendations.
- Reduce manual interpretation.
- Improve decision support.

---

## 3. Existing Process (Before AI)

Example:

```text
Business Data
      │
      ▼
Carbon Calculation
      │
      ▼
ESG Score
      │
      ▼
User reads numbers manually
```

Problems:

- Only numerical results.
- No interpretation.
- No recommendations.
- No executive summary.

---

## 4. Proposed AI Architecture

For example:

```text
Business Data
        │
        ▼
Carbon Calculator
        │
        ▼
ESG Calculator
        │
        ▼
Prompt Builder
        │
        ▼
LLM (AI)
        │
        ▼
Generated Sustainability Report
```

---

## 5. AI Workflow

Example flow:

1. User submits Business Data.
2. Carbon emission is calculated.
3. ESG score is generated.
4. System collects:
   - Company profile
   - Carbon data
   - ESG data

5. Prompt is generated.
6. AI produces:
   - Executive Summary
   - Environmental Analysis
   - Social Analysis
   - Governance Analysis
   - Recommendations

7. Report is saved.

---

## 6. Prompt Engineering

Explain:

- System Prompt
- User Prompt
- Output format
- Validation

Example:

```text
System Prompt

You are a sustainability consultant.
Generate a professional sustainability report using only the supplied data.
Do not fabricate values.
```

---

## 7. AI Components

Describe each module.

Example:

```
Prompt Builder

↓

LLM Service

↓

Report Formatter

↓

PDF Generator
```

---

## 8. AI Model Selection

Discuss:

- Why this model?
- Cost
- Accuracy
- Context window
- Speed

Example comparison:

| Model        | Purpose                |
| ------------ | ---------------------- |
| GPT-5.5      | Report generation      |
| GPT-5.5 Mini | Quick summaries        |
| Claude       | Long documents         |
| Gemini       | Large context analysis |

---

## 9. AI Report Structure

Example:

```
Executive Summary

Environmental Performance

Carbon Analysis

Social Performance

Governance

Strengths

Weaknesses

Recommendations

Conclusion
```

---

## 10. AI Security Considerations

Discuss:

- Prompt injection prevention
- Input validation
- Hallucination mitigation
- Data privacy
- API key protection

---

## 11. Future AI Enhancements

Examples:

- Predictive carbon forecasting.
- AI chatbot for sustainability guidance.
- Benchmarking against industry standards.
- Multi-language report generation.
- AI-generated improvement plans.

---

## 12. Conclusion

Summarize the value added by integrating AI into the platform.

### A possible overall project structure

If this is your final-year project or a significant professional project, I would organize the documentation as:

```
Project Documentation
│
├── Volume 1
│   Technical Design Document
│   Backend and Database Redesign
│
├── Volume 2
│   Technical Design Document
│   AI-Powered Sustainability Assessment
│
├── Volume 3
│   API Documentation
│
├── Volume 4
│   Database Design (ERD & Schema)
│
└── Volume 5
    User Manual
```

This separation makes each document focused and easier to maintain while presenting a clear evolution from a traditional web application to an AI-assisted sustainability platform.
