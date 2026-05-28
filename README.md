**CounterFlow**

<img src="./src/assets/images/logo.svg" width="200">

CounterFlow is a sleek and modern counter application designed to help you track personal goals, habits, and activities. Create distinct profiles for different counters, customize them with unique icons, and monitor your progress with visual stats. The application is built with React, Vite, and Tailwind CSS, featuring a responsive design and full keyboard support for a fast, efficient user experience.

All your data is saved directly in your browser's local storage, ensuring your progress is always preserved.

N.B: **This was designed using Google Stitch**

Live Demo

Features
Multiple Counter Profiles: Create, edit, and delete separate profiles for each activity you want to track (e.g., workouts, reading, meditation).
Customization: Personalize each profile with a name, a daily goal, and an icon from a searchable library.
Core Counter Controls: Easily increment, decrement, and reset the count for the active profile.
Quick Stats: Visualize your activity over the last 7 days with a bar chart, showing your weekly total and daily average.
Goal Tracking: Set a daily goal and track your progress with a visual indicator.
Responsive Design: A clean, intuitive interface that works seamlessly on both desktop and mobile devices.
Keyboard Shortcuts: Navigate and control the entire application without leaving the keyboard.
Persistent State: Your profiles and counts are automatically saved to your browser's localStorage.
Keyboard Shortcuts
The application is fully navigable using keyboard shortcuts for maximum efficiency.

| Key(s) | Action | | ------------ | ------------------ | | ↑ | Increment Counter | | ↓ | Decrement Counter | | r | Reset Counter | | Tab | Switch Profile | | n | Create New Profile | | ? (Shift+/) | Open Help & Shortcuts | | Enter | Confirm an action (e.g., reset, delete) | | Escape | Close any open modal or dialog |

Tech Stack
Frontend: React 19
Build Tool: Vite
Styling: Tailwind CSS
Icons: Lucide React
Hooks: react-hotkeys-hook for keyboard shortcuts
Local Development
To run this project locally, follow these steps:

Clone the repository:

git clone https://github.com/mano-coder/CounterFlow-app.git
Navigate to the project directory:

cd CounterFlow-app
Install dependencies:

npm install
Start the development server:

npm run dev
The application will be available at http://localhost:5173.

Available Scripts
npm run dev: Starts the development server.
npm run build: Bundles the app for production.
npm run lint: Lints the project files using ESLint.
npm run preview: Serves the production build locally.
Deployment
This repository is configured with a GitHub Actions workflow (.github/workflows/deploy.yml) that automatically builds and deploys the application to GitHub Pages on every push to the main branch.
