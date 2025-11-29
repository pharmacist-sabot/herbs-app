# Thai Herbal NHSO Support App

> A modern, fast, and offline-capable web application for browsing Thailand's NHSO-supported herbal medicines.

<div align="center">

[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

</div>

<br />

## Overview

The **Thai Herbal NHSO Support App** is a digital formulary designed for healthcare professionals at Sabot Hospital and beyond. It provides instant access to detailed information about herbal medicines covered by the National Health Security Office (NHSO).

Built with **Vue 3** and **Vite**, this application prioritizes performance and user experience. It leverages **Google Sheets** as a headless CMS, allowing pharmacists to update medical data easily without touching a line of code.

## ✨ Key Features

- **⚡ Blazing Fast**: Powered by Vite and Vue 3 for instant page loads and interactions.
- **📱 PWA Support**: Fully installable on mobile and desktop devices with offline capabilities.
- **🔍 Instant Search**: Real-time filtering by herb name, description, or category.
- **📄 Google Sheets Backend**: Data is fetched dynamically from a Google Sheet via Google Apps Script.
- **🎨 Responsive Design**: A clean, card-based interface that adapts to any screen size.

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **PWA**: [Vite Plugin PWA](https://vite-pwa-org.netlify.app/)
- **Backend**: Google Apps Script (serving JSON from Google Sheets)
- **Package Manager**: [Bun](https://bun.sh/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v18+) or **Bun** (v1.0+)
- A Google Apps Script deployment URL (for the API)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pharmacist-sabot/herbs-app.git
   cd herbs-app
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your Google Apps Script API URL:
   ```env
   VITE_GOOGLE_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

4. **Start the development server**
   ```bash
   bun run dev
   ```
   The app will be available at `http://localhost:5173`.

## 📂 Project Structure

```
herbs-app/
├── public/              # Static assets (icons, manifest)
├── src/
│   ├── assets/          # CSS and images
│   ├── components/      # Reusable Vue components
│   ├── router/          # Vue Router configuration
│   ├── services/        # API services (herbsService.js)
│   ├── views/           # Page views
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── .env                 # Environment variables
├── vite.config.js       # Vite and PWA configuration
└── package.json         # Dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ❤️ by the Sabot Hospital Pharmacy Team</sub>
</div>
