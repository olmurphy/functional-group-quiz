# Functional Group Quiz

An interactive quiz application to help chemistry students learn and identify functional groups, built with React, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- **25 Functional Groups** - Quiz displays 25 randomly shuffled functional groups
- **SVG Visual Representations** - Each functional group is displayed as a custom SVG diagram
- **Interactive Input** - Type the name of each functional group in real-time
- **Auto-Detection** - Input boxes automatically detect correct answers and turn gray
- **Multiple Name Support** - Each functional group accepts primary names and alternate names
- **10-Minute Timer** - Quiz has a 10-minute countdown timer
- **Score Tracking** - Real-time display of correct answers (X/25)
- **Results Screen** - Final results showing score, total, and accuracy percentage
- **Random Shuffling** - New random order every time the page loads

### UI/UX Features
- **Neutral Color Scheme** - Professional gray and blue color palette that's easy on the eyes
- **Responsive Grid Layout** - Auto-adapts from 1 to 6 columns based on screen size
- **Smooth Animations** - Transitions for state changes and results screen
- **Mobile Friendly** - Optimized for phones, tablets, and desktops
- **Start/Reset Buttons** - Easy quiz control
- **Disabled State** - Grid is visually disabled until quiz starts

## Project Structure

```
src/
├── components/
│   ├── Quiz.tsx          # Main quiz component
│   └── Quiz.css          # Quiz styling with responsive design
├── data/
│   └── functionalGroups.ts # Functional group data and utilities
├── App.tsx               # Root app component
├── App.css               # App styling
├── main.tsx              # React entry point
└── index.css             # Global styles
```

## How to Scale (Adding 100+ Functional Groups)

### Step 1: Add More Functional Groups to `src/data/functionalGroups.ts`

The functional groups are stored in an array that you can easily expand:

```typescript
export const functionalGroups: FunctionalGroup[] = [
  {
    id: 'carboxyl',
    name: 'Carboxyl',
    alternateNames: ['carboxylic acid', 'COOH'],
    svg: '<svg>...</svg>',
  },
  // Add more groups here...
];
```

### Step 2: Update Quiz Configuration

In `src/components/Quiz.tsx`, change the `TOTAL_ITEMS` constant:

```typescript
const TOTAL_ITEMS = 100; // Changed from 25
const TOTAL_TIME = 20 * 60; // Adjust timer as needed (e.g., 20 minutes)
```

### Step 3: Adjust Grid Layout

The grid automatically adapts, but you may want to optimize the breakpoints in `src/components/Quiz.css`:

```css
.quiz-grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* For 100+ items, you might prefer: */
  /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
}
```

## Creating New Functional Group SVGs

Each functional group needs an SVG representation. The format is:

```typescript
{
  id: 'unique-identifier',
  name: 'Primary Name',
  alternateNames: ['Alt Name 1', 'Alt Name 2', 'IUPAC Code'],
  svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Your SVG content -->
  </svg>',
}
```

### SVG Guidelines
- Use `viewBox="0 0 200 200"` for consistent sizing
- Color atoms based on type:
  - Gray (#333) for carbon bonds
  - Red (#E74C3C) for oxygen atoms
  - Blue (#3498DB) for nitrogen atoms
  - Orange (#F39C12) for sulfur atoms
  - Purple (#9B59B6) for phosphorus atoms
- Keep the SVG simple and recognizable
- Fit content within ~130px max size for display

## Color Scheme

The application uses a neutral, scalable color palette defined in `src/components/Quiz.css`:

```
--color-bg-primary: #f8f9fa       (Light gray background)
--color-bg-secondary: #ffffff      (White)
--color-text-primary: #2c3e50      (Dark gray text)
--color-text-secondary: #7f8c8d    (Medium gray text)
--color-accent: #3498db            (Blue)
--color-correct: #95a5a6           (Gray - for correct answers)
--color-success: #27ae60           (Green)
--color-error: #e74c3c             (Red)
```

To customize colors globally, modify the CSS variables in `Quiz.css`:

```css
:root {
  --color-accent: #your-color;
  --color-correct: #your-color;
  /* etc. */
}
```

## Available Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **React 19.2** - UI framework
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 4.1** - Styling (installed, not used in this version - using custom CSS instead)
- **Vite 7.2** - Build tool
- **Lucide React 0.562** - Icons
- **ESLint 9.39** - Code linting

## Future Enhancements

- [ ] Add difficulty levels (easy, medium, hard)
- [ ] Implement leaderboard/statistics tracking
- [ ] Add hints for difficult functional groups
- [ ] Create categories (by functional group type, reactivity, etc.)
- [ ] Add dark mode toggle
- [ ] Implement multiplayer mode
- [ ] Add sound effects
- [ ] Create mobile-specific optimizations
- [ ] Add educational tooltips with structural explanations

## License

See LICENSE file for details.
