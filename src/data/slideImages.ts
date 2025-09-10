// Centralized image configuration to prevent duplicates
export const SLIDE_IMAGES = {
  // Permanent Carbon Removal
  CARBON_REMOVAL: [
    "/CardsImg/Permanent_carbon_removal_card.webp",
    "/CardsImg/Permanent_carbon_removal_card1.webp", 
    "/CardsImg/Permanent_carbon_removal_card2.webp",
    "/CardsImg/Permanent_carbon_removal_card3.webp"
  ] as string[],
  
  // Empowering Communities  
  COMMUNITIES: [
    "/CardsImg/Empowering_communities_card1.webp",
    "/CardsImg/Empowering_communities_card2.webp",
    "/CardsImg/Empowering_communities_card3.webp"
  ] as string[],
  
  // Research & Adoption
  RESEARCH: [
    "/CardsImg/Research_and_adoption_card1.webp",
    "/CardsImg/Research_and_adoption_card2.webp",
    "/CardsImg/Research_and_adoption_card3.webp"
  ] as string[],
  
  // Scale
  SCALE: [
    "/CardsImg/Scale_card1.webp",
    "/CardsImg/Scale_card2.webp",
    "/CardsImg/Scale_card3.webp"
  ] as string[]
};

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
      "Livelihoods: Improves livelihoods of rural youth and women, creating dignified local jobs in villages.",
      "Soil Health: Biochar improves soil moisture, structure and fertility by bringing back microbial life.",
      "Farmer Prosperity: Our field trials demonstrate better crop yields & farmer income with biochar. Finance makes biochar affordable and accessible to farmers."
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
      "Farmer Network: With access to 18 million farmers across 100,000+ villages in 8 states of India, we're built for scale.",
      "Afforestation: Applied in 10,200 acres of reforestation projects, biochar has boosted sapling survival to 85–90%.",
      "Collaborative Model: Partnering with ICAR-CICR for science, adoption, and transparency."
    ],
    images: SLIDE_IMAGES.SCALE
  }
];