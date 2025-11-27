# Project Task Dashboard

A modern, responsive task management dashboard built with React, Vite, and Tailwind CSS.

## Features

- 📊 **Dashboard View** - View all tasks in a clean grid layout
- 🔍 **Status Filtering** - Filter tasks by All, Pending, In Progress, or Completed
- ➕ **Create Tasks** - Add new tasks with a modal form and validation
- 📱 **Responsive Design** - Mobile-friendly with hamburger menu
- 🎨 **Modern UI** - Clean SaaS-style design with Slate/Indigo color scheme
- ⚡ **Fast** - Built with Vite for lightning-fast development

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Mock Data** - 12 sample tasks for demonstration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Navigation sidebar with mobile menu
│   ├── TaskCard.jsx         # Individual task card component
│   ├── TaskForm.jsx         # Modal form for creating tasks
│   └── LoadingSpinner.jsx   # Loading state component
├── mockData.js              # Mock task data (12 tasks)
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
└── index.css                # Global styles with Tailwind directives
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Manual Deployment Steps

```bash
# Build the project
npm run build

# The dist/ folder contains your production-ready files
# Upload the dist/ folder to your hosting provider
```

## Features Breakdown

### Navigation
- Sidebar with Dashboard, Team, and Settings views
- Mobile hamburger menu for small screens
- Conditional rendering based on active view

### Task Management
- Display 12 mock tasks using `.map()` function
- Filter by status (All, Pending, In Progress, Completed)
- Create new tasks with form validation
- Tasks include: title, category, status, and priority

### Responsive Design
- Desktop: 3-column grid layout
- Tablet: 2-column grid layout
- Mobile: Single column with collapsible sidebar

## License

MIT
