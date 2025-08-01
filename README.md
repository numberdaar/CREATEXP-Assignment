# 📊 Client Management System

A modern React application for managing client relationships with advanced sorting and filtering capabilities.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Modern UI/UX** | Clean, responsive design with smooth interactions |
| 🔄 **Advanced Sorting** | Drag-and-drop multi-criteria sorting system |
| 🔍 **Real-time Search** | Instant search across client names, emails, and types |
| 📋 **Interactive Tables** | Expandable rows with detailed client information |
| 📊 **Statistics Dashboard** | Overview cards showing key metrics |
| 📱 **Responsive Design** | Works perfectly on desktop, tablet, and mobile |
| 🏷️ **Type Filtering** | Filter clients by Individual or Company type |
| 💾 **State Persistence** | Sort order persists in localStorage and URL params |
| ✨ **Enhanced Animations** | Smooth transitions and staggered table row animations |

---

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework  
- **@dnd-kit** - Drag and drop functionality
- **JavaScript (JSX)** - Component development

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd client-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 🎯 Key Features Explained

### 📈 Dashboard Statistics
- **Total Clients** - Complete client count
- **Active Clients** - Only active clients display
- **Total Revenue** - Sum of all client revenues
- **Total Projects** - Combined project count

### 🔄 Advanced Sorting System
- **Multi-criteria sorting** - Sort by multiple fields simultaneously
- **Drag & Drop** - Reorder sort criteria by dragging
- **Direction control** - Choose ascending or descending order
- **Visual feedback** - Clear indication of active sorts

### 📋 Interactive Client Table
- **Expandable rows** - Click any row to see detailed information
- **Contact details** - Phone numbers and addresses
- **Performance metrics** - Project counts and revenue
- **Status indicators** - Visual status with color coding

### 🔍 Search & Filter
- **Real-time search** - Instant results as you type
- **Multi-field search** - Search across names, emails, and types
- **Type filtering** - Filter by Individual or Company clients
- **Results counter** - Shows filtered vs total results

---

## 📁 Project Structure

```
client-management-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ClientListTable.jsx    # Main data table
│   │   ├── SortPanel.jsx          # Sorting interface
│   │   └── SortableCriterion.jsx  # Sort criteria
│   ├── data/
│   │   └── mockData.jsx           # Sample data
│   ├── App.jsx                    # Main component
│   ├── index.jsx                  # Entry point
│   └── index.css                  # Global styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎨 Design Features

- **Clean Layout** - Minimalist design with focus on usability
- **Responsive Grid** - Adapts to different screen sizes
- **Color-coded Status** - Visual status indicators
- **Interactive Elements** - Hover states and feedback
- **Smooth Animations** - Subtle transitions and effects

---

## 🔧 Customization

### Adding New Client Fields
1. Update `src/data/mockData.jsx` with new fields
2. Add corresponding sort options in `availableSortFields`
3. Update table component to display new columns
4. Modify expanded row details as needed

### Styling Changes
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for custom animations
- Adjust component classes for different visual styles

### Data Source
- Replace `mockData.jsx` with API calls
- Implement data fetching in `App.jsx`
- Add loading states and error handling

---

## 🎯 Bonus Features (Implemented)

### 💾 State Persistence
- **localStorage**: Sort criteria automatically saves to browser storage
- **URL Parameters**: Sort state is reflected in the URL for sharing
- **Page Refresh**: Sort order persists when you refresh the page

### ✨ Enhanced Animations
- **Staggered Table Rows**: Each row animates in with a slight delay
- **Hover Effects**: Subtle scale and shadow effects on table rows
- **Smooth Transitions**: All interactions have smooth 200ms transitions
- **Sort Panel Animation**: Slide-down animation when opening sort panel
- **Drag & Drop**: Smooth animations during drag operations

### 🎨 Visual Polish
- **Clean Design**: Minimalist interface with focus on usability
- **Responsive Layout**: Adapts beautifully to all screen sizes
- **Interactive Elements**: Hover states and visual feedback
- **Professional Icons**: Consistent iconography throughout

---

## 📦 Build Commands

```bash
# Development
npm start

# Production build
npm run build

# Run tests
npm test

# Eject (not recommended)
npm run eject
```

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- @dnd-kit for the drag and drop functionality

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Your Name]

</div>