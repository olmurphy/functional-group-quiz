# Guide: Adding More Functional Groups

This guide walks you through adding new functional groups to the quiz.

## Quick Start: Add 25 More Groups

1. Open `src/data/functionalGroups.ts`
2. Find the `functionalGroups` array
3. Add new groups before the closing bracket `]`
4. Update the `TOTAL_ITEMS` in `src/components/Quiz.tsx` to 50

## Example: Adding Chloro Group

```typescript
{
  id: 'chloro',
  name: 'Chloro',
  alternateNames: ['chlorine', 'chloride', 'Cl'],
  svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="80" y1="100" x2="120" y2="100" stroke="#333" stroke-width="3"/>
    <circle cx="130" cy="100" r="12" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <text x="125" y="110" font-size="20" font-weight="bold">Cl</text>
  </svg>`,
},
```

## Structure of a Functional Group Entry

```typescript
{
  id: 'unique-id',           // Used internally, lowercase with hyphens
  name: 'Display Name',      // What shows in results/feedback
  alternateNames: [          // Optional: list of acceptable answers
    'Common Name',
    'IUPAC Code',
    'Abbreviation'
  ],
  svg: '<svg>...</svg>',     // SVG diagram
}
```

## SVG Creation Tips

### Standard Dimensions
```
viewBox="0 0 200 200"    // Always use this
Content centered at (100, 100)
Content size: ~130px max
```

### Color Codes by Element
| Element | Color   | Hex Code |
|---------|---------|----------|
| Carbon  | Gray    | #333     |
| Oxygen  | Red     | #E74C3C  |
| Nitrogen| Blue    | #3498DB  |
| Sulfur  | Orange  | #F39C12  |
| Phosph. | Purple  | #9B59B6  |
| Halogens| Dark    | #2C3E50  |

### Common SVG Elements

**Single Bond:**
```xml
<line x1="60" y1="100" x2="140" y2="100" stroke="#333" stroke-width="3"/>
```

**Double Bond:**
```xml
<line x1="60" y1="95" x2="140" y2="95" stroke="#333" stroke-width="3"/>
<line x1="60" y1="105" x2="140" y2="105" stroke="#333" stroke-width="3"/>
```

**Triple Bond:**
```xml
<line x1="60" y1="90" x2="140" y2="90" stroke="#333" stroke-width="3"/>
<line x1="60" y1="100" x2="140" y2="100" stroke="#333" stroke-width="3"/>
<line x1="60" y1="110" x2="140" y2="110" stroke="#333" stroke-width="3"/>
```

**Atom Circle:**
```xml
<circle cx="100" cy="100" r="10" fill="#E74C3C"/>
<!-- or for outline only -->
<circle cx="100" cy="100" r="12" fill="none" stroke="#333" stroke-width="2"/>
```

**Text Label:**
```xml
<text x="115" y="125" font-size="20" font-weight="bold">O</text>
```

## Scaling to 100+ Groups

### Phase 1: Add 50 Groups (Easy)
- Add 25 more functional groups to the array
- Change `TOTAL_ITEMS = 50` in Quiz.tsx
- Increase timer if needed: `const TOTAL_TIME = 15 * 60` (15 min)

### Phase 2: Add 100 Groups (Medium)
- Continue adding groups
- Consider organizing by category in comments
- Optionally add a category filter feature

### Phase 3: Advanced Features (Optional)
When you have 100+ groups, consider:

```typescript
// Add category to each group
interface FunctionalGroup {
  id: string;
  name: string;
  category: 'oxygen' | 'nitrogen' | 'sulfur' | 'aromatic' | 'phosphorus' | 'halogen';
  alternateNames?: string[];
  svg: string;
}

// Allow filtering by category
<select onChange={(e) => filterByCategory(e.target.value)}>
  <option value="all">All Groups</option>
  <option value="oxygen">Oxygen-containing</option>
  <option value="nitrogen">Nitrogen-containing</option>
  {/* etc */}
</select>
```

## Common Functional Groups to Add

### Oxygen-containing (Easy SVGs)
- Peroxide (O-O bond)
- Acetal (two O atoms on carbon)
- Hemiacetal (similar to acetal)
- Anhydride (C(=O)-O-C(=O))

### Nitrogen-containing (Medium SVGs)
- Imine (C=N)
- Enamine (C=C-N)
- Oxime (C=N-O)
- Hydrazone (C=N-N)
- Isocyanate (N=C=O)

### Sulfur-containing (Medium SVGs)
- Sulfinyl (S=O)
- Sulfonyl (S(=O)(=O))
- Thioether
- Sulfonamide

### Aromatic (Hard but Important)
- Pyridine (six-membered ring with N)
- Imidazole (five-membered ring with 2 N)
- Indole (fused rings with N)
- Thiophene (five-membered ring with S)
- Furan (five-membered ring with O)

## Keyboard Shortcut for Quick Testing

After adding groups, run:
```bash
npm run build
# Check for TypeScript errors
```

Then refresh your browser to see the changes.

## Verification Checklist

- [ ] ID is unique and lowercase
- [ ] Name is capitalized and clear
- [ ] Alternate names are reasonable (chemistry-accurate)
- [ ] SVG viewBox is "0 0 200 200"
- [ ] SVG is centered around (100, 100)
- [ ] Colors are appropriate for atom types
- [ ] SVG displays correctly at ~130px size
- [ ] Text is readable
- [ ] No syntax errors in TypeScript

## Need Help?

1. Check existing examples in `functionalGroups.ts`
2. Review `SVG_TEMPLATES.ts` for patterns
3. Test SVG in a tool like: https://www.svgviewer.dev/
4. Verify chemistry accuracy in: PubChem, ChemSpider, or organic chemistry textbooks
