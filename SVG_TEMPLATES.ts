/**
 * SVG Examples and Template for Creating New Functional Group Diagrams
 * 
 * This file contains helpful templates and examples for creating new SVG
 * representations of functional groups.
 */

// ===== SVG Color Codes =====
// Carbon bonds: #333 (dark gray)
// Oxygen atoms: #E74C3C (red)
// Nitrogen atoms: #3498DB (blue)
// Sulfur atoms: #F39C12(orange)
// Phosphorus atoms: #9B59B6 (purple)
// Chlorine, Bromine, Iodine: #2C3E50 (dark blue-gray)

// ===== Basic SVG Template =====
const svgTemplate = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Bonds (lines) -->
  <line x1="100" y1="100" x2="100" y2="40" stroke="#333" stroke-width="3"/>
  
  <!-- Atoms (circles) -->
  <circle cx="100" cy="100" r="10" fill="#E74C3C"/>
  
  <!-- Labels (optional) -->
  <text x="115" y="50" font-size="20" font-weight="bold">C</text>
</svg>`;

// ===== Pattern Examples =====

export const SVG_PATTERNS = {
  // Simple single-bond patterns
  simpleBond: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="60" y1="100" x2="140" y2="100" stroke="#333" stroke-width="3"/>
  </svg>`,

  // Double bond (for C=C, C=O, etc.)
  doubleBond: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="60" y1="95" x2="140" y2="95" stroke="#333" stroke-width="3"/>
    <line x1="60" y1="105" x2="140" y2="105" stroke="#333" stroke-width="3"/>
  </svg>`,

  // Triple bond (for C≡C, C≡N, etc.)
  tripleBond: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="60" y1="90" x2="140" y2="90" stroke="#333" stroke-width="3"/>
    <line x1="60" y1="100" x2="140" y2="100" stroke="#333" stroke-width="3"/>
    <line x1="60" y1="110" x2="140" y2="110" stroke="#333" stroke-width="3"/>
  </svg>`,

  // Oxygen atom representation
  oxygenAtom: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="12" fill="none" stroke="#333" stroke-width="2"/>
    <text x="90" y="110" font-size="18" font-weight="bold">O</text>
  </svg>`,

  // Nitrogen atom representation
  nitrogenAtom: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="12" fill="none" stroke="#3498DB" stroke-width="2"/>
    <text x="90" y="110" font-size="18" font-weight="bold">N</text>
  </svg>`,

  // Benzene ring (aromatic)
  benzeneRing: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="40" fill="none" stroke="#333" stroke-width="2"/>
    <circle cx="100" cy="100" r="30" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="5,5"/>
  </svg>`,
};

// ===== Tips for Creating Good SVGs =====
/*
1. Always use viewBox="0 0 200 200" for consistency
2. Center your diagram around (100, 100)
3. Use stroke-width="3" for bonds and stroke-width="2" for atom circles
4. Keep atom labels readable with font-size="18-20"
5. Use appropriate colors:
   - #333 for carbon/bonds
   - #E74C3C for oxygen
   - #3498DB for nitrogen
   - #F39C12 for sulfur
   - #9B59B6 for phosphorus
6. Consider leaving ~30px padding on all sides
7. Test that SVGs are recognizable at small sizes (120-150px)
8. Keep SVGs simple - remove unnecessary details
9. Use relative positioning for flexibility
10. Add labels only when necessary to avoid clutter
*/

// ===== Complete Example: Adding a New Functional Group =====
export const EXAMPLE_NEW_FUNCTIONAL_GROUPS = [
  {
    id: 'isocyanate',
    name: 'Isocyanate',
    alternateNames: ['isocyanato', 'N=C=O'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="100" x2="85" y2="100" stroke="#333" stroke-width="3"/>
      <circle cx="95" cy="100" r="10" fill="#3498DB"/>
      <line x1="105" y1="100" x2="130" y2="100" stroke="#333" stroke-width="3"/>
      <line x1="130" y1="95" x2="130" y2="105" stroke="#333" stroke-width="3"/>
      <circle cx="135" cy="100" r="10" fill="#E74C3C"/>
      <text x="70" y="75" font-size="16" font-weight="bold">N</text>
      <text x="130" y="125" font-size="16" font-weight="bold">O</text>
    </svg>`,
  },
  {
    id: 'imidazole',
    name: 'Imidazole',
    alternateNames: ['imidazole ring', 'heterocycle'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,60 140,85 130,130 70,130 60,85" fill="none" stroke="#333" stroke-width="2"/>
      <circle cx="100" cy="100" r="8" fill="#3498DB"/>
      <circle cx="80" cy="100" r="8" fill="#3498DB"/>
      <text x="95" y="75" font-size="14" font-weight="bold">N</text>
      <text x="75" y="105" font-size="14" font-weight="bold">N</text>
    </svg>`,
  },
  {
    id: 'sulfonamide',
    name: 'Sulfonamide',
    alternateNames: ['sulfonamido', 'SO2NH2'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="100" x2="90" y2="100" stroke="#333" stroke-width="3"/>
      <circle cx="100" cy="100" r="10" fill="#F39C12"/>
      <line x1="100" y1="90" x2="100" y2="60" stroke="#333" stroke-width="3"/>
      <circle cx="100" cy="50" r="8" fill="#E74C3C"/>
      <line x1="100" y1="110" x2="100" y2="140" stroke="#333" stroke-width="3"/>
      <circle cx="100" cy="150" r="8" fill="#E74C3C"/>
      <line x1="110" y1="100" x2="135" y2="100" stroke="#333" stroke-width="3"/>
      <circle cx="145" cy="100" r="10" fill="#3498DB"/>
      <line x1="140" y1="90" x2="155" y2="75" stroke="#333" stroke-width="2"/>
      <circle cx="165" cy="65" r="6" fill="#E74C3C"/>
      <text x="85" y="75" font-size="14" font-weight="bold">S</text>
      <text x="145" y="75" font-size="14" font-weight="bold">N</text>
    </svg>`,
  },
];

// ===== Helpful Functions for Bulk Adding =====
/**
 * If you have 50+ groups to add, consider organizing them by category:
 * - Oxygen-containing: hydroxyl, ether, aldehyde, ketone, etc.
 * - Nitrogen-containing: amino, amide, nitrile, nitro, etc.
 * - Sulfur-containing: thiol, sulfide, disulfide, etc.
 * - Aromatic: phenyl, indole, benzene, etc.
 * - Heterocycles: imidazole, pyridine, furan, etc.
 * - Phosphorus-containing: phosphate, phosphite, etc.
 * - Halogenated: chloro, bromo, iodo, fluoro, etc.
 * - Carbonyl derivatives: acetal, hemiacetal, enol, etc.
 */

export const FUNCTIONAL_GROUP_CATEGORIES = {
  oxygen: [
    'Hydroxyl',
    'Ether',
    'Aldehyde',
    'Ketone',
    'Carboxyl',
    'Ester',
    'Peroxide',
  ],
  nitrogen: ['Amino', 'Amide', 'Nitrile', 'Nitro', 'Diazo', 'Isocyanate'],
  sulfur: ['Thiol', 'Sulfide', 'Disulfide', 'Sulfonamide', 'Sulfoxide'],
  aromatic: ['Phenyl', 'Indole', 'Pyrrole', 'Thiophene', 'Furan'],
  phosphorus: ['Phosphate', 'Phosphite', 'Phosphine'],
  halogen: ['Chloro', 'Bromo', 'Iodo', 'Fluoro'],
};

/**
 * Scale-up checklist:
 * ✓ 25 groups: Quiz working well, good performance
 * ? 50 groups: Consider pagination or grouping by category
 * ? 100+ groups: 
 *   - Consider adding difficulty levels
 *   - Add filtering/search functionality
 *   - Implement category selection
 *   - Optimize grid layout for smaller cards
 *   - Add keyboard navigation
 *   - Consider localStorage to save progress
 */
