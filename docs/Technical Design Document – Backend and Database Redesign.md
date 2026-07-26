That is a good title. Since this is a technical document, I recommend writing it in a professional software design document format rather than as a report.

A suitable table of contents for **Technical Design Document – Backend and Database Redesign** would be:

---

# Technical Design Document

## Backend and Database Redesign

### EcoFinance SL – Sustainability Reporting Platform

**Version:** 1.0

**Prepared By:** _Your Name_

**Date:** _Date_

---

# Table of Contents

1. Introduction
2. Background
3. Existing System Analysis
4. Objectives of the Redesign
5. Backend Architecture Redesign
6. Database Redesign
7. API Design Improvements
8. Authentication and Security Improvements
9. Frontend Integration Improvements
10. Benefits of the New Design
11. Future Enhancements
12. Conclusion
13. Appendices

---

# 1. Introduction

This document describes the technical redesign of the backend architecture and database structure of the EcoFinance SL Sustainability Reporting Platform. The redesign was undertaken to improve the system's maintainability, scalability, performance, and overall software quality while supporting future business requirements.

The document explains the limitations identified in the original implementation, the architectural decisions made during the redesign process, and the expected benefits of the new design.

---

# 2. Background

The initial implementation of the system successfully demonstrated the core functionality of collecting business operational data, generating ESG scores, calculating carbon emissions, and producing sustainability reports.

However, during implementation and testing, several architectural limitations were identified that would make future maintenance and feature development increasingly difficult. As the project evolved, additional functional requirements such as historical data management, report generation, improved dashboard analytics, and modular frontend development required a more structured backend architecture and a better normalized database design.

To address these limitations, the backend services and database schema were redesigned while preserving the core business functionality of the application.

---

# 3. Existing System Analysis

This section should describe the problems found in the original implementation.

### 3.1 Database Issues

- Inconsistent database relationships.
- Limited normalization of entities.
- Difficulty maintaining historical records.
- Repeated storage of related information.
- Insufficient support for future feature expansion.

### 3.2 Backend Issues

- Business logic embedded directly within route handlers.
- Limited separation of concerns.
- Duplicate validation and processing logic.
- Increasing code complexity as new APIs were introduced.

### 3.3 API Issues

- Inconsistent API response formats.
- Repeated authentication and validation logic.
- Difficult frontend integration.
- Limited error handling.

---

# 4. Objectives of the Redesign

The redesign aimed to achieve the following objectives:

- Improve software maintainability.
- Increase scalability for future enhancements.
- Normalize the database structure.
- Separate application layers according to software engineering best practices.
- Simplify frontend integration.
- Improve API consistency.
- Enhance application security.
- Support historical data management.
- Improve report generation workflow.

---

# 5. Backend Architecture Redesign

This section will describe:

- Previous architecture
- New architecture
- Layer responsibilities
- Request flow

Include diagrams such as:

```
Client

      │

      ▼

REST API Routes

      │

      ▼

Service Layer

      │

      ▼

Database Models

      │

      ▼

MySQL Database
```

---

# 6. Database Redesign

Describe every database modification.

Example sections:

### Company

Previous design

New design

Reason for modification

---

### Business Data

Previous design

New design

Reason for modification

---

### ESG Assessment

Previous design

New design

Reason for modification

---

### Reports

Previous design

New design

Reason for modification

---

### Relationships

Include an ER Diagram showing the redesigned database.

---

# 7. API Design Improvements

Document improvements such as:

- Standardized JSON response format.
- RESTful endpoint organization.
- Consistent HTTP status codes.
- Improved validation.
- Better exception handling.

Example:

```
Previous

POST /calculate
GET /companyData

↓

Redesigned

POST /api/business
GET  /api/company
PUT  /api/company
GET  /api/reports
```

---

# 8. Authentication and Security Improvements

Topics to cover include:

- JWT Authentication
- Protected API endpoints
- Authorization headers
- Password hashing
- Input validation
- CORS configuration
- Error handling

---

# 9. Frontend Integration Improvements

Explain how the redesigned backend simplifies frontend development.

For example:

- Consistent API responses.
- Modular JavaScript architecture.
- Reusable API service layer.
- Standardized authentication handling.
- Simplified error management.

---

# 10. Benefits of the New Design

Discuss benefits in areas such as:

### Maintainability

- Modular architecture.
- Reduced code duplication.
- Easier debugging.

### Scalability

- Easier addition of new ESG indicators.
- Support for future reporting features.
- Better support for multiple companies.

### Performance

- Improved database relationships.
- Reduced redundant processing.

### Security

- JWT-based authentication.
- Protected resources.
- Centralized authorization.

---

# 11. Future Enhancements

Potential future improvements include:

- Role-Based Access Control (RBAC).
- Multi-company management.
- Background report generation.
- Email notifications.
- Audit logging.
- API versioning.
- Dashboard analytics.
- Cloud deployment.

---

# 12. Conclusion

Summarize the redesign, emphasizing that it was undertaken to establish a more robust, maintainable, and scalable architecture while preserving existing business functionality. Highlight how the new backend and database design provide a solid foundation for future enhancements and long-term system evolution.

---

# 13. Appendices

Include supporting technical material such as:

- API endpoint list
- Database schema
- Entity Relationship Diagram (ERD)
- Backend folder structure
- API response format examples
- Database migration summary

---

This structure is suitable for a professional software engineering document and can serve as comprehensive technical documentation for the EcoFinance SL backend and database redesign.
