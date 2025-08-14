// Centralized image configuration to prevent duplicates
export const SLIDE_IMAGES = {
  // Permanent Carbon Removal
  CARBON_REMOVAL: [
    "/CardsImg/card1.jpg",
    "/CardsImg/card12.jpg", 
    "/CardsImg/card7.jpg",
    "/CardsImg/card8.jpg",
    "/CardsImg/card9.jpg"
  ],
  
  // Empowering Communities  
  COMMUNITIES: [
    "/CardsImg/card3.jpg",
    "/CardsImg/card4.jpg"
  ],
  
  // Research & Adoption
  RESEARCH: [
    "/CardsImg/card5.jpg",
    "/CardsImg/card6.jpg"
  ],
  
  // Scale
  SCALE: [
    "/CardsImg/card10.jpg",
    "/CardsImg/card11.jpg"
  ]
} as const;

// Get all unique images across all categories
export const getAllUniqueImages = (): string[] => {
  const allImages = Object.values(SLIDE_IMAGES).flat();
  return [...new Set(allImages)]; // Remove any duplicates
};

// Slide configuration using centralized images
export interface SlideConfig {
  title: string;
  bullets: string[];
  images: string[];
}

export const SLIDE_DATA: SlideConfig[] = [
  {
    title: "Permanent Carbon Removal",
    bullets: [
      "Permanent: Over 75% of biochar applied is Persistent Aromatic Carbon, locking carbon in soil for thousands of years.",
      "Local & Sustainable: Produced and applied to soil locally, minimizing carbon footprint of carbon sequestering activity.",
      "Verified & Transparent: Fully traceable via Digital MRV and certified by Carbon Standards International (CSI), delivering assured impact."
    ],
    images: SLIDE_IMAGES.CARBON_REMOVAL
  },
  {
    title: "Empowering Communities",
    bullets: [
      "Livelihoods: Rural youth and women build profitable village-scale biochar businesses, creating dignified local jobs and establishing a vibrant rural economy.",
      "Soil Health: Biochar improves soil moisture and structure and permanently increases fertility by bringing back microbial life in soil for generations.",
      "Farmer Prosperity: Our field trials across diverse zones demonstrate better crop yields & farmer income year after year, with a single application of biochar. Carbon finance makes biochar affordable and accessible to farmers."
    ],
    images: SLIDE_IMAGES.COMMUNITIES
  },
  {
    title: "Research & Adoption", 
    bullets: [
      "Center of Excellence: India's first biochar COE integrates innovation, training, and outreach to accelerate adoption by farming communities.",
      "Backed by Science: Trials with 144 farmers across 3 districts showed 18–32% yield gains in diverse soils & practices. Partnership with ICAR-CICR.",
      "Innovation: In-situ pyrolysis enables on-farm production of biochar, reducing logistics costs and improving unit economics."
    ],
    images: SLIDE_IMAGES.RESEARCH
  },
  {
    title: "Scale",
    bullets: [
      "Farmer Network: With access to 18 million farmers across 100,000+ villages in 8 states of India through Samunnati and Heartfulness Institute, we're built for scale.",
      "Afforestation: In 10,200 acres of reforestation with Forests by Heartfulness, biochar has boosted sapling survival to 85–90%.",
      "Collaborative Model: Partnering with ICAR-CICR, Samunnati, Arvind Mills, Pratibha Syntex, and dMRV partners for science, adoption, and transparency.",
      "SDG-aligned: Driving climate action, rural livelihoods, healthy soils, biodiversity and food security."
    ],
    images: SLIDE_IMAGES.SCALE
  }
];