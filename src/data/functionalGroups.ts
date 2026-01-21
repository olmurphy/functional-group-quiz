export interface FunctionalGroup {
  id: string;
  name: string;
  alternateNames?: string[];
  svg: string;
}

export const functionalGroups: FunctionalGroup[] = [
  {
    id: 'hydroxyl',
    name: 'Hydroxyl',
    alternateNames: ['hydroxy', 'OH'],
    svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="100" y1="40" x2="100" y2="140" stroke="#333" stroke-width="3"/><circle cx="100" cy="140" r="8" fill="#E74C3C"/><text x="120" y="145" font-size="20" font-weight="bold">H</text></svg>',
  },
  {
    id: 'carboxyl',
    name: 'Carboxyl',
    alternateNames: ['carboxylic acid', 'COOH'],
    svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="100" r="12" fill="none" stroke="#333" stroke-width="2"/><line x1="108" y1="100" x2="80" y2="100" stroke="#333" stroke-width="3"/><line x1="120" y1="88" x2="120" y2="70" stroke="#333" stroke-width="3"/><circle cx="120" cy="60" r="8" fill="#E74C3C"/><line x1="120" y1="112" x2="120" y2="130" stroke="#333" stroke-width="3"/><circle cx="120" cy="140" r="8" fill="#E74C3C"/><text x="140" y="105" font-size="20" font-weight="bold">H</text></svg>',
  },
  // {
  //   id: 'amino',
  //   name: 'Amino',
  //   alternateNames: ['amine', 'NH2'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="100" y1="40" x2="100" y2="100" stroke="#333" stroke-width="3"/><circle cx="100" cy="100" r="10" fill="#3498DB"/><text x="110" y="65" font-size="20" font-weight="bold">N</text><line x1="90" y1="105" x2="70" y2="125" stroke="#333" stroke-width="3"/><circle cx="60" cy="135" r="8" fill="#E74C3C"/><line x1="110" y1="105" x2="130" y2="125" stroke="#333" stroke-width="3"/><circle cx="140" cy="135" r="8" fill="#E74C3C"/></svg>',
  // },
  // {
  //   id: 'aldehyde',
  //   name: 'Aldehyde',
  //   alternateNames: ['carbonyl', 'CHO'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="100" x2="120" y2="100" stroke="#333" stroke-width="3"/><circle cx="120" cy="100" r="12" fill="none" stroke="#333" stroke-width="2"/><line x1="120" y1="88" x2="120" y2="60" stroke="#333" stroke-width="3"/><circle cx="120" cy="50" r="8" fill="#E74C3C"/><text x="140" y="105" font-size="20" font-weight="bold">H</text></svg>',
  // },
  // {
  //   id: 'ketone',
  //   name: 'Ketone',
  //   alternateNames: ['keto'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="100" x2="100" y2="100" stroke="#333" stroke-width="3"/><circle cx="100" cy="100" r="12" fill="none" stroke="#333" stroke-width="2"/><line x1="100" y1="88" x2="100" y2="60" stroke="#333" stroke-width="3"/><circle cx="100" cy="50" r="8" fill="#E74C3C"/><line x1="112" y1="100" x2="150" y2="100" stroke="#333" stroke-width="3"/></svg>',
  // },
  // {
  //   id: 'ether',
  //   name: 'Ether',
  //   alternateNames: ['oxy'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="100" x2="100" y2="100" stroke="#333" stroke-width="3"/><circle cx="100" cy="100" r="8" fill="#E74C3C"/><line x1="100" y1="100" x2="140" y2="100" stroke="#333" stroke-width="3"/><text x="85" y="80" font-size="18" font-weight="bold">O</text></svg>',
  // },
  // {
  //   id: 'ester',
  //   name: 'Ester',
  //   alternateNames: ['COOR'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="100" x2="100" y2="100" stroke="#333" stroke-width="3"/><circle cx="110" cy="100" r="12" fill="none" stroke="#333" stroke-width="2"/><line x1="110" y1="88" x2="110" y2="60" stroke="#333" stroke-width="3"/><circle cx="110" cy="50" r="8" fill="#E74C3C"/><line x1="122" y1="100" x2="150" y2="100" stroke="#333" stroke-width="3"/><circle cx="155" cy="100" r="8" fill="#E74C3C"/></svg>',
  // },
  // {
  //   id: 'amide',
  //   name: 'Amide',
  //   alternateNames: ['amido', 'CONH2'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="100" x2="100" y2="100" stroke="#333" stroke-width="3"/><circle cx="110" cy="100" r="12" fill="none" stroke="#333" stroke-width="2"/><line x1="110" y1="88" x2="110" y2="60" stroke="#333" stroke-width="3"/><circle cx="110" cy="50" r="8" fill="#E74C3C"/><line x1="122" y1="100" x2="140" y2="100" stroke="#333" stroke-width="3"/><circle cx="150" cy="100" r="10" fill="#3498DB"/><text x="155" y="70" font-size="18" font-weight="bold">N</text></svg>',
  // },
  // {
  //   id: 'alkene',
  //   name: 'Alkene',
  //   alternateNames: ['C=C', 'double bond'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="95" x2="100" y2="95" stroke="#333" stroke-width="3"/><line x1="60" y1="105" x2="100" y2="105" stroke="#333" stroke-width="3"/><line x1="100" y1="95" x2="140" y2="95" stroke="#333" stroke-width="3"/><line x1="100" y1="105" x2="140" y2="105" stroke="#333" stroke-width="3"/><text x="70" y="70" font-size="18" font-weight="bold">C</text><text x="115" y="70" font-size="18" font-weight="bold">C</text></svg>',
  // },
  // {
  //   id: 'alkyne',
  //   name: 'Alkyne',
  //   alternateNames: ['C≡C', 'triple bond'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="90" x2="100" y2="90" stroke="#333" stroke-width="3"/><line x1="60" y1="100" x2="100" y2="100" stroke="#333" stroke-width="3"/><line x1="60" y1="110" x2="100" y2="110" stroke="#333" stroke-width="3"/><line x1="100" y1="90" x2="140" y2="90" stroke="#333" stroke-width="3"/><line x1="100" y1="100" x2="140" y2="100" stroke="#333" stroke-width="3"/><line x1="100" y1="110" x2="140" y2="110" stroke="#333" stroke-width="3"/><text x="70" y="60" font-size="18" font-weight="bold">C</text><text x="115" y="60" font-size="18" font-weight="bold">C</text></svg>',
  // },
  // {
  //   id: 'phenyl',
  //   name: 'Phenyl',
  //   alternateNames: ['benzene', 'aromatic'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="35" fill="none" stroke="#333" stroke-width="2"/><line x1="100" y1="65" x2="100" y2="30" stroke="#333" stroke-width="3"/><circle cx="95" cy="40" r="4" fill="#333"/><text x="75" y="70" font-size="16" font-weight="bold">Ph</text></svg>',
  // },
  // {
  //   id: 'thiol',
  //   name: 'Thiol',
  //   alternateNames: ['sulfhydryl', 'SH'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="100" y1="40" x2="100" y2="100" stroke="#333" stroke-width="3"/><circle cx="100" cy="110" r="10" fill="#F39C12"/><text x="115" y="115" font-size="20" font-weight="bold">H</text><text x="85" y="125" font-size="18" font-weight="bold">S</text></svg>',
  // },
  // {
  //   id: 'sulfide',
  //   name: 'Sulfide',
  //   alternateNames: ['thioether'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="100" x2="100" y2="100" stroke="#333" stroke-width="3"/><circle cx="100" cy="100" r="10" fill="#F39C12"/><line x1="100" y1="100" x2="140" y2="100" stroke="#333" stroke-width="3"/><text x="85" y="80" font-size="18" font-weight="bold">S</text></svg>',
  // },
  // {
  //   id: 'disulfide',
  //   name: 'Disulfide',
  //   alternateNames: ['disulfide bond', 'S-S'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="100" x2="90" y2="100" stroke="#333" stroke-width="3"/><circle cx="95" cy="100" r="8" fill="#F39C12"/><circle cx="105" cy="100" r="8" fill="#F39C12"/><line x1="110" y1="100" x2="140" y2="100" stroke="#333" stroke-width="3"/><text x="80" y="130" font-size="16" font-weight="bold">S-S</text></svg>',
  // },
  // {
  //   id: 'phosphate',
  //   name: 'Phosphate',
  //   alternateNames: ['phospho', 'PO4'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="12" fill="none" stroke="#9B59B6" stroke-width="2"/><line x1="88" y1="100" x2="60" y2="100" stroke="#333" stroke-width="3"/><line x1="112" y1="100" x2="140" y2="100" stroke="#333" stroke-width="3"/><line x1="100" y1="88" x2="100" y2="60" stroke="#333" stroke-width="3"/><circle cx="100" cy="50" r="8" fill="#E74C3C"/><line x1="100" y1="112" x2="100" y2="140" stroke="#333" stroke-width="3"/><circle cx="100" cy="150" r="8" fill="#E74C3C"/><text x="75" y="75" font-size="18" font-weight="bold">P</text></svg>',
  // },
  // {
  //   id: 'nitro',
  //   name: 'Nitro',
  //   alternateNames: ['nitro group', 'NO2'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="100" x2="110" y2="100" stroke="#333" stroke-width="3"/><circle cx="110" cy="100" r="10" fill="#3498DB"/><line x1="110" y1="90" x2="110" y2="60" stroke="#333" stroke-width="3"/><circle cx="110" cy="50" r="8" fill="#E74C3C"/><line x1="110" y1="110" x2="110" y2="140" stroke="#333" stroke-width="3"/><circle cx="110" cy="150" r="8" fill="#E74C3C"/><text x="85" y="80" font-size="18" font-weight="bold">N</text></svg>',
  // },
  // {
  //   id: 'nitrile',
  //   name: 'Nitrile',
  //   alternateNames: ['cyano', 'C≡N'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="100" x2="90" y2="100" stroke="#333" stroke-width="3"/><line x1="90" y1="95" x2="120" y2="95" stroke="#333" stroke-width="3"/><line x1="90" y1="100" x2="120" y2="100" stroke="#333" stroke-width="3"/><line x1="90" y1="105" x2="120" y2="105" stroke="#333" stroke-width="3"/><circle cx="130" cy="100" r="10" fill="#3498DB"/><text x="65" y="70" font-size="18" font-weight="bold">C</text><text x="135" y="70" font-size="18" font-weight="bold">N</text></svg>',
  // },
  // {
  //   id: 'alcohol',
  //   name: 'Alcohol',
  //   alternateNames: ['hydroxyl', 'OH'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="100" y1="60" x2="100" y2="110" stroke="#333" stroke-width="3"/><circle cx="100" cy="120" r="10" fill="#E74C3C"/><text x="115" y="125" font-size="20" font-weight="bold">H</text><text x="85" y="140" font-size="18" font-weight="bold">O</text></svg>',
  // },
  // {
  //   id: 'alkane',
  //   name: 'Alkane',
  //   alternateNames: ['saturated', 'C-C'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="100" x2="140" y2="100" stroke="#333" stroke-width="3"/><text x="65" y="70" font-size="18" font-weight="bold">C</text><text x="130" y="70" font-size="18" font-weight="bold">C</text></svg>',
  // },
  // {
  //   id: 'acyl',
  //   name: 'Acyl',
  //   alternateNames: ['carbonyl', 'COR'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="100" x2="100" y2="100" stroke="#333" stroke-width="3"/><circle cx="110" cy="100" r="12" fill="none" stroke="#333" stroke-width="2"/><line x1="110" y1="88" x2="110" y2="60" stroke="#333" stroke-width="3"/><circle cx="110" cy="50" r="8" fill="#E74C3C"/><line x1="122" y1="100" x2="150" y2="100" stroke="#333" stroke-width="3"/></svg>',
  // },
  // {
  //   id: 'amine_primary',
  //   name: 'Primary Amine',
  //   alternateNames: ['1°amine', 'NH2'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="100" x2="110" y2="100" stroke="#333" stroke-width="3"/><circle cx="120" cy="100" r="10" fill="#3498DB"/><line x1="115" y1="90" x2="100" y2="70" stroke="#333" stroke-width="3"/><circle cx="90" cy="60" r="8" fill="#E74C3C"/><line x1="125" y1="90" x2="140" y2="70" stroke="#333" stroke-width="3"/><circle cx="150" cy="60" r="8" fill="#E74C3C"/><text x="100" y="75" font-size="18" font-weight="bold">N</text></svg>',
  // },
  // {
  //   id: 'amine_secondary',
  //   name: 'Secondary Amine',
  //   alternateNames: ['2°amine', 'NH'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="100" x2="85" y2="100" stroke="#333" stroke-width="3"/><line x1="115" y1="100" x2="150" y2="100" stroke="#333" stroke-width="3"/><circle cx="100" cy="100" r="10" fill="#3498DB"/><line x1="100" y1="90" x2="100" y2="60" stroke="#333" stroke-width="3"/><circle cx="100" cy="50" r="8" fill="#E74C3C"/><text x="85" y="75" font-size="18" font-weight="bold">N</text></svg>',
  // },
  // {
  //   id: 'amine_tertiary',
  //   name: 'Tertiary Amine',
  //   alternateNames: ['3°amine', 'NR3'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="10" fill="#3498DB"/><line x1="100" y1="90" x2="100" y2="60" stroke="#333" stroke-width="3"/><line x1="92" y1="92" x2="65" y2="75" stroke="#333" stroke-width="3"/><line x1="108" y1="92" x2="135" y2="75" stroke="#333" stroke-width="3"/><line x1="100" y1="110" x2="100" y2="140" stroke="#333" stroke-width="3"/><text x="85" y="75" font-size="18" font-weight="bold">N</text></svg>',
  // },
  // {
  //   id: 'epoxide',
  //   name: 'Epoxide',
  //   alternateNames: ['oxirane', 'epoxy'],
  //   svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="100" x2="100" y2="100" stroke="#333" stroke-width="3"/><line x1="100" y1="100" x2="115" y2="75" stroke="#333" stroke-width="3"/><line x1="115" y1="75" x2="130" y2="100" stroke="#333" stroke-width="3"/><line x1="130" y1="100" x2="160" y2="100" stroke="#333" stroke-width="3"/><circle cx="110" cy="88" r="8" fill="#E74C3C"/><text x="95" y="75" font-size="16" font-weight="bold">O</text></svg>',
  // },
];

// Shuffle function
export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Check if answer is correct
export const isAnswerCorrect = (input: string, correctName: string, alternateNames?: string[]): boolean => {
  const normalizedInput = input.toLowerCase().trim();
  const names = [correctName.toLowerCase(), ...(alternateNames || []).map(n => n.toLowerCase())];
  return names.includes(normalizedInput);
};
