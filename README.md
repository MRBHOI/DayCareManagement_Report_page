# 📊 Reports Module

Welcome to the **Reports Module**! This is a modern, web-based dashboard built with React and Vite. It was designed to display critical system statistics (like revenue, users, and activities) in a clean, easy-to-understand visual layout.

## ✨ Features

- **Interactive Dashboard**: Switch between 4 different views (Users, Revenue, Centers, and Activity) instantly.
- **Beautiful Charts**: We use Bar charts, Line charts, and Pie charts to bring the numbers to life.
- **Dynamic Filtering**: Click the **Filters** button to narrow down the data by date range, center location, or user type. The charts and numbers will update on the fly!
- **Data Export**: Need the raw data or a professional presentation? Click the **Export All** button to instantly download both a CSV spreadsheet and a cleanly formatted PDF report of whatever you're currently looking at.
- **Mock Data Engine**: Currently, the dashboard runs on a simulated dataset of over 3,000 records so you can test out all the filtering and charting capabilities immediately without needing a database.

## 🚀 How to Run It Locally

If you want to view the project on your own computer, it's super simple. 

1. **Open your terminal / command prompt.**
2. **Navigate to the project folder**:
   ```bash
   cd reports-module
   ```
3. **Install the required packages** (only needed the first time):
   ```bash
   npm install i
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **View the site!** Open your browser and go to the link shown in your terminal (usually `http://localhost:5173`).

## 📁 What's Inside? (Folder Structure)

Here's a quick map of how the code is organized under the `src/` folder:

- `/components`: The building blocks of our page. Things like the top `Header`, the `FilterBar`, the row of `GlobalStats` cards, and the `Tabs` navigation.
- `/views`: The big, main sections of the dashboard. Each tab (Users, Revenue, Centers, Activity) has its own file here containing its charts and specific layouts.
- `/data`: Contains `mockData.js`, which is the engine that generates our fake data for testing.
- `/utils`: Contains `exportUtils.js`, which holds the magic formulas for taking our data and turning them into downloadable PDF and CSV files.
- `App.jsx`: The "boss" file. It controls the main layout, handles the filtering logic, and decides which View should be shown on screen.
- `index.css`: Our global styling file where all the colors (like our signature orange!), fonts, and card designs are stored.

## 🛠️ Tech Stack

- **ReactJS**: The core logic library to make everything interactive.
- **Vite**: The lightning-fast tool used to build and serve the project.
- **Recharts**: The library we used to draw all the beautiful graphs.
- **jsPDF & PapaParse**: The tools used to generate the PDF reports and CSV spreadsheets.
- **Lucide React**: Our unified icon pack (the bell, the calendar, the rupee sign, etc.).

---

*Built with clean code and an emphasis on pixel-perfect modern design aesthetics.*
