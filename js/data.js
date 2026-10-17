/**
 * Elite Digital - Core Data Store (Mobile-First & Zero Repetition)
 * All pricing removed. Contextual WhatsApp Quote Triggers.
 */

const ELITE_DATA = {
  company: {
    name: "Elite Digital & Ads",
    tagline: "Connecting Brands with Millions Across Tamil Nadu",
    descriptor: "Advertising Agency & Outdoor Media",
    phone: "+91 739 735 5095",
    phoneClean: "917397355095",
    officePhone: "+91 739 735 5095",
    officePhoneClean: "917397355095",
    enquiryPhone: "+91 904 292 0720",
    enquiryPhoneClean: "919042920720",
    email: "elitedigitalvdm@gmail.com",
    address: "Aaladi Road, (Bus stand Backside), Near Shanmugam Mahalakshmi Thirumana Mahal, Vriddhachalam – 606 001, Tamil Nadu",
    city: "Vriddhachalam",
    state: "Tamil Nadu",
    pincode: "606001",
    googleMapsUrl: "https://maps.app.goo.gl/tP7YPDEpNvVDnAdv5",
    socialHandle: "@elitedigitalvdm",
    instagramUrl: "https://www.instagram.com/elitedigitalvdm/",
    rating: 5.0,
    reviewCount: 13,
    experienceYears: 12,
    campaignsCompleted: 4800,
    dailyReach: "250K+"
  },

  /* Advertising Mediums & Work Capabilities */
  projects: [
    {
      id: "p1",
      title: "Building Rooftop Hoarding",
      category: "hoardings",
      categoryLabel: "High-Reach OOH",
      image: "assets/images/building_hoarding.jpg",
      client: "Commercial Billboard Campaign",
      location: "Prime Town Junctions",
      highlight: "Massive rooftop billboard mounted on heavy structural steel truss with 24/7 high-lumen floodlights.",
      quoteSubject: "Building Rooftop Hoarding Board"
    },
    {
      id: "p2",
      title: "Promotional Sound Roadshow",
      category: "roadshow",
      categoryLabel: "Roadshow Activation",
      image: "assets/images/mobile_roadshow.jpg",
      client: "Product Launch & Canvassing",
      location: "Multi-Town & Rural Canvassing",
      highlight: "Equipped with high-decibel announcement horn speakers, generator power, and high-visibility branding.",
      quoteSubject: "Promotional Roadshow Campaign"
    },
    {
      id: "p3",
      title: "Wide-Format Flex & Banner Printing",
      category: "printing",
      categoryLabel: "Flex & Signage",
      image: "assets/images/flex_vinyl_printing.jpg",
      client: "Showroom Opening & Exhibitions",
      location: "Rapid 24h Production Hub",
      highlight: "Japanese 1440 DPI print engines for razor-sharp showroom front banners, stage backdrops, and posters.",
      quoteSubject: "Flex and Banner Printing"
    },
    {
      id: "p4",
      title: "Vehicle Fleet Sticker Wrapping",
      category: "transit",
      categoryLabel: "Moving Billboards",
      image: "assets/images/vehicle_wrapping.jpg",
      client: "Commercial Fleets & Vans",
      location: "Daily Route Transit Reach",
      highlight: "Full-vehicle weatherproof vinyl wrap turning delivery vans, school buses & autos into mobile billboards.",
      quoteSubject: "Vehicle Fleet Sticker Wrapping"
    },
    {
      id: "p5",
      title: "Sunpack Pole Advertising",
      category: "transit",
      categoryLabel: "Hyperlocal Street Ads",
      image: "assets/images/sunpack_advertising.jpg",
      client: "Retail Sales & Mega Festivals",
      location: "15+ Regional Town Centers",
      highlight: "Lightweight corrugated plastic boards tied on high-traffic street poles for extreme local brand frequency.",
      quoteSubject: "Sunpack Street Pole Advertising"
    },
    {
      id: "p6",
      title: "Event Rental Entrance Arches",
      category: "events",
      categoryLabel: "Brand Activations",
      image: "assets/images/rental_entrance_arch.jpg",
      client: "Grand Inaugurations & Functions",
      location: "Venues & Showroom Entrances",
      highlight: "Modular rental entrance arch structures with lighting for grand inaugurations, weddings, and expos.",
      quoteSubject: "Rental Event Entrance Arch"
    },
    {
      id: "p7",
      title: "Custom Mementos & Awards",
      category: "events",
      categoryLabel: "Corporate Recognition",
      image: "assets/images/custom_mementos.jpg",
      client: "Corporate & Sports Events",
      location: "Bespoke Production",
      highlight: "Precision laser-cut acrylic shields, engraved wooden plaques, and custom brass mementos.",
      quoteSubject: "Custom Corporate Mementos"
    }
  ],

  /* 3. Clients Fallback (Used when data/clients.json cannot be fetched) */
  fallbackClients: [
    { id: "c1", name: "JKR Tex" },
    { id: "c2", name: "Arun Fashion" },
    { id: "c3", name: "Alagar Super Market" },
    { id: "c4", name: "7 Mobiles" },
    { id: "c5", name: "Siva Sakthi Mobiles and Appliancies" },
    { id: "c6", name: "Rasi Gold" },
    { id: "c7", name: "Sarswathi school" },
    { id: "c8", name: "CSM College" },
    { id: "c9", name: "Little pika" },
    { id: "c10", name: "Aasife Briyani" },
    { id: "c11", name: "Thellai Electricals" },
    { id: "c12", name: "Virudhachalam Municpalitiy" },
    { id: "c13", name: "Gov. PHC" },
    { id: "c14", name: "Aditya Snacks" },
    { id: "c15", name: "SKR Groups" },
    { id: "c16", name: "Thanjai Veerasami Restraunt" },
    { id: "c17", name: "5K Car Care" },
    { id: "c18", name: "Thayilpatti Krishna Pannai Pal" },
    { id: "c19", name: "King Ultra Tires" },
    { id: "c20", name: "MDP Clinic" },
    { id: "c21", name: "GH Virudhachalam" },
    { id: "c22", name: "Mangalam Furnitures" }
  ],

  /* 4. Instagram Feed Fallback */
  fallbackInstagram: [
    {
      id: "ig1",
      postUrl: "https://www.instagram.com/elitedigitalvdm/",
      image: "assets/images/building_hoarding.jpg",
      caption: "New building rooftop hoarding board installed in Virudhachalam. High visibility with bright night lights! 🏢✨ #BuildingHoarding #EliteDigital",
      type: "photo",
      date: "Recent Post"
    },
    {
      id: "ig2",
      postUrl: "https://www.instagram.com/elitedigitalvdm/",
      image: "assets/images/mobile_roadshow.jpg",
      caption: "Promotional roadshow with loud speakers ready for multi-town announcements! 📢🔥 #Roadshow #EliteDigital",
      type: "reel",
      date: "Recent Reel"
    },
    {
      id: "ig3",
      postUrl: "https://www.instagram.com/elitedigitalvdm/",
      image: "assets/images/flex_vinyl_printing.jpg",
      caption: "High-definition 1440 DPI flex printing for grand showroom launch banners! 🖨️✨ #FlexPrinting #EliteDigital",
      type: "photo",
      date: "Recent Post"
    },
    {
      id: "ig4",
      postUrl: "https://www.instagram.com/elitedigitalvdm/",
      image: "assets/images/vehicle_wrapping.jpg",
      caption: "Clean vinyl sticker wrapping for commercial vans and school buses 🚚💨 #VehicleBranding #EliteDigital",
      type: "reel",
      date: "Recent Reel"
    }
  ]
};

/**
 * Build contextual WhatsApp Quote URL
 */
function buildWhatsAppQuoteUrl(topic) {
  const number = ELITE_DATA.company.phoneClean;
  const cleanTopic = topic ? topic.trim() : "Billboard & Outdoor Advertising";
  const message = `Hello Elite Digital and Ads, I would like to get a quote for ${cleanTopic}. Please share the details.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
