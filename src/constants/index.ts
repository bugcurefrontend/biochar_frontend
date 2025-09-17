// Constants for the application
export const CONSTANTS = {
  // FAQ Section
  FAQ: {
    ICON_SRC: "/sticker.svg",
    IMAGE_SRC: "/contact_us.webp",
  },

  // Icons
  ICONS: {
    ARROW: "/icon.svg",
  },

  // Video Sources
  VIDEOS: {
    HERO: "/HeroSection.mp4",
    KANHA:
      "https://res.cloudinary.com/dr004mbx7/video/upload/v1755580049/4_1_womc8l.mp4",
    SHIVGARH:
      "https://res.cloudinary.com/dr004mbx7/video/upload/v1755579266/3_1_frh94m.mp4",
    PATRICIA: "https://www.youtube.com/embed/FkPSuzfXqlQ",
    WHAT_IS_BIOCHAR: "https://www.youtube.com/embed/liWgD98LLMg",
    HOW_TO_USE_BIOCHAR: "https://www.youtube.com/embed/rfYrviUn-E8",
    BIOCHAR_GOLD_FOR_FARMERS: "https://www.youtube.com/embed/hzvnX9BKLNE",
    BIOCHAR_HEARTFULNESS_MOVEMENT: "https://www.youtube.com/embed/7k_DErgR-Hk",
  },

  // Thumbnail Images
  THUMBNAILS: {
    KANHA: "/thumbnails/kanha_thumbnail.webp",
    SHIVGARH: "/thumbnails/shivgarh_thumbnail.webp",
    PATRICIA: "/thumbnails/patricia_thumbnail.webp",
    WHAT_IS_BIOCHAR: "/thumbnails/what_is_biochar.webp",
    HOW_TO_USE_BIOCHAR: "/thumbnails/how_to_use_biochar.webp",
    BIOCHAR_GOLD_FOR_FARMERS: "/thumbnails/biochar_gold_for_farmers.webp",
    BIOCHAR_HEARTFULNESS_MOVEMENT:
      "/thumbnails/biochar_the_heartfulness_movement.webp",
  },

  // Logo and Brand Images
  LOGOS: {
    MAIN: "/Logos/logo.webp",
    BRANDS: [
      "/Logos/brand1.webp",
      "/Logos/brand2.webp",
      "/Logos/brand3.webp",
      "/Logos/brand4.webp",
      "/Logos/brand5.webp",
      "/Logos/brand6.webp",
      "/Logos/brand7.webp",
      "/Logos/brand8.webp",
      "/Logos/brand9.webp",
      "/Logos/brand10.webp",
    ],
  },

  // Brand URLs
  BRAND_URLS: [
    "https://4p1000.org/",
    "https://www.carbon-standards.com/",
    "https://icar.org.in/",
    "https://www.fairtrade.net/",
    "http://heartfullness.org/",
    "https://www.heartyculturenursery.com/",
    "https://plantvillage.psu.edu/",
    "https://pratibhasyntex.com/",
    "https://samunnati.com/",
    "https://www.arvindfashions.com/",
  ],

  // API Endpoints
  API: {
    // Sheet2API endpoint
    SHEET2API_URL: process.env.NEXT_PUBLIC_CONTACT_SUBMIT_URL,
    // Alternative: FormSubmit (replace with your email)
    FORMSUBMIT_URL: "https://formsubmit.co/your-email@domain.com",
    // Old backend API (keep for reference)
    // CONTACT_SUBMIT: process.env.NEXT_PUBLIC_CONTACT_SUBMIT_URL || "https://biochar-api.onrender.com/api/submit-contact/",
  },

  // Contact Information
  CONTACT: {
    PHONE: "+91 99788 22525",
  },

  // Documents
  DOCUMENTS: {
    ANNUAL_REPORT: "/HFI Biochar Annual Report 2025.pdf",
  },

  // Interest Options
  INTEREST_OPTIONS: [
    "Offset Emissions",
    "Explore Partnership",
    "Support Farmers",
    "Join as a Volunteer",
    "Other",
  ],

  // FAQ Data
  FAQS: [
    {
      question: "How does biochar help fight climate change?",
      answer:
        "Biochar is a stable form of carbon produced by heating biomass in low-oxygen conditions. When applied to soil, it improves health and locks carbon for thousands of years, preventing its return to the atmosphere.",
    },
    {
      question: "What are biochar carbon credits?",
      answer:
        "Each carbon credit represents the removal of one ton of CO₂. Heartyculture credits are certified and traceable through digital MRV.",
    },
    {
      question: "Who produces the biochar in your project?",
      answer:
        "We work with rural entrepreneurs and farmers who use sustainable methods to produce biochar from farm residue.",
    },
    {
      question: "How does biochar benefit farmers?",
      answer:
        "It improves fertility, water retention, crop yield, and income. We aim to provide biochar free to farmers via carbon credit purchases.",
    },
    {
      question: "What makes biochar different from compost or fertilizer?",
      answer:
        "Unlike compost or fertilizer, biochar is not a nutrient source but a nutrient holder—an enhancer, not a substitute. It acts as a slow-release bank, improving the efficiency of added inputs.",
    },
    {
      question: "How do carbon credit purchases support communities?",
      answer:
        "Revenue from carbon credits goes back to rural producers, creating jobs and strengthening local economies. This ensures both climate impact and social impact happen together.",
    },
  ],
};
