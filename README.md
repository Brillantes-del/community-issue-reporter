# Community Issue Reporter

## Project Description
Community Issue Reporter is a simple web application that allows residents to report community problems such as improper garbage disposal, damaged roads, broken streetlights, and drainage issues.

## Problem Statement
Residents may have difficulty reporting community problems through an organized platform. This project provides a simple way to submit and view reported issues.

## Target Users
- Community residents who want to report local problems.

## Main Features
- Submit community issues.
- Select an issue category.
- Provide the issue location and description.
- View submitted reports.
- Save reports using browser localStorage.
- Validate report details before submission.

## Functional Requirement

**FR-01: Submit Community Issue**

The system shall allow residents to submit community issues by providing an issue title, category, description, and location. The system shall save submitted reports using browser localStorage and display them in a report list.

## Technologies Used
- HTML
- CSS
- JavaScript
- Browser localStorage

## System Architecture
The application uses a simple single-page architecture:
- **HTML:** Provides the page structure and report form.
- **CSS:** Handles the design and layout.
- **JavaScript:** Handles form submission, validation, and displaying reports.
- **localStorage:** Stores submitted reports in the browser.

## How to Run
1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Submit a community issue using the form.

## Project Limitations
This is a prototype. Reports are saved only in the browser's localStorage. They are not shared between different users or devices.