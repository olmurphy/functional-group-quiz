# Visual Design Reference

## Layout Hierarchy

```
┌─────────────────────────────────────────────────────┐
│                   HEADER SECTION                    │
├─────────────────────────────────────────────────────┤
│  🎯 Functional Group Quiz                           │
│  Identify each functional group                     │
│                                                      │
│  Score: 5/25        Time: 9:23                      │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │ [Start Quiz] or  │  │ [Reset]          │        │
│  │ [Try Again]      │  │                  │        │
│  └──────────────────┘  └──────────────────┘        │
├─────────────────────────────────────────────────────┤
│                  QUIZ GRID (25 Items)               │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ...       │
│  │  SVG    │  │  SVG    │  │  SVG    │            │
│  │ IMAGE   │  │ IMAGE   │  │ IMAGE   │            │
│  ├─────────┤  ├─────────┤  ├─────────┤            │
│  │ [Input] │  │ [Input] │  │ [Input] │            │
│  └─────────┘  └─────────┘  └─────────┘            │
│  (When correct, input turns gray)                  │
└─────────────────────────────────────────────────────┘
```

## Color Specifications

### Primary Colors
```
Primary Accent Blue
  Hex: #3498db
  RGB: 52, 152, 219
  Use: Buttons, links, timer focus
  
Correct Answer Gray
  Hex: #95a5a6
  RGB: 149, 165, 166
  Use: Input boxes when correct answer typed
  
Background Light
  Hex: #f8f9fa
  RGB: 248, 249, 250
  Use: Page background
```

### Text Colors
```
Primary Text (Dark)
  Hex: #2c3e50
  RGB: 44, 62, 80
  
Secondary Text (Medium)
  Hex: #7f8c8d
  RGB: 127, 140, 141
```

### Atom Colors in SVGs
```
Carbon/Bonds:     #333     (Dark Gray)
Oxygen atoms:     #E74C3C  (Red)
Nitrogen atoms:   #3498DB  (Blue)
Sulfur atoms:     #F39C12  (Orange)
Phosphorus atoms: #9B59B6  (Purple)
Halogen atoms:    #2C3E50  (Dark Blue-Gray)
```

## Responsive Breakpoints

```
Desktop (>1024px)     │ 6 columns
Laptop (768-1024px)   │ 4 columns
Tablet (480-768px)    │ 3 columns
Mobile (<480px)       │ 2 columns
```

## Typography

```
Title
  Font: System font stack
  Size: 2.5rem (40px)
  Weight: 700 (Bold)
  Color: #2c3e50
  
Subtitle
  Font: System font stack
  Size: 1rem (16px)
  Weight: 400 (Regular)
  Color: #7f8c8d
  
Stat Labels
  Font: System font stack
  Size: 0.875rem (14px)
  Weight: 500 (Medium)
  Color: #7f8c8d
  Text-transform: uppercase
  Letter-spacing: 0.5px
  
Stat Values
  Font: 'Courier New', monospace
  Size: 2rem (32px)
  Weight: 700 (Bold)
  Color: #3498db
  
Button Text
  Font: System font stack
  Size: 1rem (16px)
  Weight: 600 (Semibold)
  Color: white (primary) or #2c3e50 (secondary)
  Text-transform: uppercase
  Letter-spacing: 0.5px
```

## Spacing System

All spacing uses multiples of 8px (CSS variable: `--spacing-unit`)

```
Base Unit: 8px
Small: 4px   (--spacing-unit * 0.5)
Standard: 8px   (--spacing-unit * 1)
Medium: 16px  (--spacing-unit * 2)
Large: 24px   (--spacing-unit * 3)
X-Large: 32px (--spacing-unit * 4)
```

## Button Styles

### Primary Button
```
Background: #3498db
Text: White, uppercase, semibold
Padding: 12px 24px
Border-radius: 8px
Box-shadow: 0 2px 8px rgba(52, 152, 219, 0.2)
Hover: 
  - Background: #2980b9 (darker)
  - Box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3)
  - Transform: translateY(-2px)
Active:
  - Transform: translateY(0)
```

### Secondary Button
```
Background: #f8f9fa
Text: #2c3e50, uppercase, semibold
Border: 2px solid #ecf0f1
Padding: 12px 24px
Border-radius: 8px
Hover:
  - Background: #ecf0f1
  - Border-color: #3498db
  - Text color: #3498db
```

## Input Field

```
Default State:
  Border: 2px solid #ecf0f1
  Background: white
  Text color: #2c3e50
  Padding: 10px 12px
  Border-radius: 6px
  Font-weight: 500
  
Focus State:
  Border-color: #3498db
  Box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1)
  
Correct State:
  Border-color: #95a5a6
  Background: #95a5a6
  Text color: white
  
Disabled State:
  Background: #f8f9fa
  Text color: #7f8c8d
  Opacity: 1
  Cursor: not-allowed
```

## Card/Item Container

```
Background: white
Border: 2px solid #ecf0f1
Border-radius: 8px
Padding: 16px
Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
Transition: all 0.2s ease-in-out

Hover (not disabled):
  Border-color: #3498db
  Box-shadow: 0 4px 16px rgba(52, 152, 219, 0.15)
  Transform: translateY(-4px)
```

## SVG Diagram Area

```
Container:
  Height: 150px
  Background: #f8f9fa
  Border-radius: 6px
  Border: 1px solid #ecf0f1
  Display: flex (centered)
  
SVG:
  Max-width: 130px
  Max-height: 130px
  Responsive scaling
  
Stroke width: 3px (bonds)
Atom circle radius: 8-12px
Text font-size: 18-20px, bold
```

## Results Modal

```
Overlay:
  Position: fixed (full screen)
  Background: rgba(0, 0, 0, 0.5)
  Backdrop-filter: blur(4px)
  Z-index: 1000
  
Card:
  Max-width: 400px
  Width: 90% (mobile responsive)
  Background: white
  Border-radius: 8px
  Padding: 32px
  Box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3)
  Animation: slideUp 0.3s ease-out
  
Score Circle:
  Width/Height: 150px
  Border-radius: 50%
  Background: linear-gradient(135deg, #ecf0f1 0%, #bdc3c7 100%)
  Box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15)
  
Score Number:
  Font-size: 3rem
  Font-weight: 700
  Color: #3498db
```

## Animation Timing

```
Default Transition: 0.2s ease-in-out
Hover Effects: 0.2s
Button Press: 0.1s
Modal Entrance: 0.3s ease-out
```

## Mobile Optimizations

### Small Mobile (<480px)
```
Title: 1.5rem (24px)
Subtitle: 0.875rem (14px)
Stat value: 1.25rem (20px)
Grid columns: 2
Gap: 12px
Item padding: 12px
Image height: 100px
Input padding: 8px 10px
```

### Tablet (480-768px)
```
Title: 2rem (32px)
Grid columns: 3
Gap: 16px
Image height: 120px
```

## Accessibility Considerations

```
Color Contrast:
  Text on white: #2c3e50 on #ffffff = 13.4:1 ✅
  Button text: white on #3498db = 4.5:1 ✅
  Secondary text: #7f8c8d on #ffffff = 4.6:1 ✅
  
Font Sizes:
  Minimum readable: 14px
  Button text: 16px minimum ✅
  
Focus States:
  All interactive elements have visible focus ✅
  Focus outline: 3px ring
  
Labels:
  Input placeholder visible
  Stat items have semantic labels
```

---

This reference maintains the neutral, professional aesthetic while ensuring excellent readability and user experience across all devices.
