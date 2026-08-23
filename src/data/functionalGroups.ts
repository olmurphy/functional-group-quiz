export interface FunctionalGroup {
  id: string;
  name: string;
  alternateNames?: string[];
  /** Path relative to /public — replace with your actual image file */
  image: string;
}

export const functionalGroups: FunctionalGroup[] = [
  {
    id: 'phenyl',
    name: 'Phenyl',
    alternateNames: ['benzene', 'aromatic', 'aryl'],
    image: 'images/phenyl.png',
  },
  {
    id: 'tertiary_amine',
    name: 'Tertiary Amine',
    alternateNames: ['3° amine', 'tertiary amine', 'amine'],
    image: 'images/tertiary-amine.png',
  },
  {
    id: 'aldehyde',
    name: 'Aldehyde',
    alternateNames: ['aldehyde', 'CHO'],
    image: 'images/aldehyde.png',
  },
  {
    id: 'peroxide',
    name: 'Peroxide',
    alternateNames: ['peroxy', 'ROOR'],
    image: 'images/peroxide.png',
  },
  {
    id: 'amide',
    name: 'Amide',
    alternateNames: ['amide', 'CONH2', 'CONHR'],
    image: 'images/amide.png',
  },
  {
    id: 'cyclopentane',
    name: 'Cyclopentane',
    alternateNames: ['cycloalkane', 'cyclopentane'],
    image: 'images/cyclopentane.png',
  },
  {
    id: 'sulfide',
    name: 'Sulfide',
    alternateNames: ['thioether', 'sulfide'],
    image: 'images/sulfide.png',
  },
  {
    id: 'nitrile',
    name: 'Nitrile',
    alternateNames: ['cyano', 'nitrile', 'CN'],
    image: 'images/nitrile.png',
  },
  {
    id: 'epoxide',
    name: 'Epoxide',
    alternateNames: ['oxirane', 'epoxy'],
    image: 'images/epoxide.png',
  },
  {
    id: 'alkyne',
    name: 'Alkyne',
    alternateNames: ['alkyne', 'triple bond'],
    image: 'images/alkyne.png',
  },
  {
    id: 'thiol',
    name: 'Thiol',
    alternateNames: ['sulfhydryl', 'thiol', 'SH'],
    image: 'images/thiol.png',
  },
  {
    id: 'ester',
    name: 'Ester',
    alternateNames: ['ester', 'COOR'],
    image: 'images/ester.png',
  },
  {
    id: 'alkane',
    name: 'Alkane',
    alternateNames: ['alkane', 'saturated', 'C-C'],
    image: 'images/alkane.png',
  },
  {
    id: 'carboxylic_acid',
    name: 'Carboxylic Acid',
    alternateNames: ['carboxyl', 'carboxylic acid', 'COOH'],
    image: 'images/carboxylic-acid.png',
  },
  {
    id: 'ketone',
    name: 'Ketone',
    alternateNames: ['ketone', 'keto'],
    image: 'images/ketone.png',
  },
  {
    id: 'alkyl_chloride',
    name: 'Alkyl Chloride',
    alternateNames: ['alkyl halide', 'chloride', 'alkyl chloride', 'Cl'],
    image: 'images/alkyl-chloride.png',
  },
  {
    id: 'alkene',
    name: 'Alkene',
    alternateNames: ['alkene', 'double bond'],
    image: 'images/alkene.png',
  },
  {
    id: 'ether',
    name: 'Ether',
    alternateNames: ['ether', 'oxy'],
    image: 'images/ether.png',
  },
  {
    id: 'acid_anhydride',
    name: 'Acid Anhydride',
    alternateNames: ['anhydride', 'acid anhydride'],
    image: 'images/acid-anhydride.png',
  },
  {
    id: 'acyl_chloride',
    name: 'Acyl Chloride',
    alternateNames: ['acid chloride', 'acyl chloride', 'acyl halide'],
    image: 'images/acyl-chloride.png',
  },
  {
    id: 'alcohol',
    name: 'Alcohol',
    alternateNames: ['hydroxyl', 'alcohol', 'OH'],
    image: 'images/alcohol.png',
  },
];

export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const isAnswerCorrect = (input: string, correctName: string, alternateNames?: string[]): boolean => {
  const normalizedInput = input.toLowerCase().trim();
  const names = [correctName.toLowerCase(), ...(alternateNames || []).map((n) => n.toLowerCase())];
  return names.includes(normalizedInput);
};

export const getFunctionalGroupImageUrl = (imagePath: string): string => {
  const base = import.meta.env.BASE_URL;
  return `${base}${imagePath}`;
};
