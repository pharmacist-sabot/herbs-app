<div align="center">

# **Thai Herbal NHSO Support App**

### _A simple and fast web application to browse, search, and view details of herbal medicines supported by Thailand's NHSO._

<br>

<p>
  <a href="https://github.com/pharmacist-sabot/herbs-app/commits/main">
    <img src="https://img.shields.io/github/last-commit/pharmacist-sabot/herbs-app?style=for-the-badge&color=blue&logo=github" alt="Last Commit">
  </a>
  <a href="https://github.com/pharmacist-sabot/herbs-app">
    <img src="https://img.shields.io/github/languages/top/pharmacist-sabot/herbs-app?style=for-the-badge&color=yellow&logo=javascript" alt="Top Language">
  </a>
  <a href="https://github.com/pharmacist-sabot/herbs-app">
    <img src="https://img.shields.io/github/languages/count/pharmacist-sabot/herbs-app?style=for-the-badge&color=informational" alt="Language Count">
  </a>
</p>

</div>

---

This is a digital herbal formulary application created for Sabot Hospital. It serves as a quick reference guide for healthcare professionals to look up herbal medicines that are covered by Thailand's National Health Security Office (NHSO).

The application features a clean, card-based interface and is powered by a unique backend: a **Google Apps Script** that serves data directly from a Google Sheet, making content updates incredibly simple for non-developers.

## ✨ Features

-   **Google Sheets Backend:** Utilizes a Google Apps Script to serve data directly from a Google Sheet, allowing for easy content management without a traditional database.
-   **Comprehensive Herb Details:** Displays key information including descriptions, usage, benefits, and NHSO reimbursement details (`NHSO_Price`, `Per_Course`, `ICD10`).
-   **Live Search & Filtering:** Instantly search for herbs by name or description and filter the list by category.
-   **Responsive Card Layout:** A clean, responsive design that works well on both desktop and mobile devices.
-   **Client-Side Routing:** Built as a Single Page Application (SPA) using Vue Router for a fast, seamless user experience.
-   **API Fallback:** Includes mock data to ensure the application remains usable for development even if the backend API is unavailable.

## 🛠️ Built With the Tools and Technologies:

<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue.js">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Google_Apps_Script-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Apps Script">
  <img src="https://img.shields.io/badge/Vue_Router-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue Router">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
</p>

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or higher)
-   npm (or any other package manager)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/pharmacist-sabot/herbs-app.git
    cd herbs-app
    ```

2.  **Install NPM packages:**
    ```sh
    bun install
    ```

3.  **Run the development server:**
    ```sh
    bun run dev
    ```
    The application will be available at `http://localhost:5173`. No environment variables are needed as the API endpoint is publicly accessible.

## 📜 Available Scripts

-   `bun run dev`: Starts the development server.
-   `bun run build`: Builds the app for production.
-   `bun run preview`: Previews the production build locally.
